'use client'

import { useMemo, useState } from 'react'
import { type Quiz } from '@/data/types'
import { useLanguage } from '@/lib/language'
import { CheckCircle2, XCircle, HelpCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// --- Deterministic option shuffle ---------------------------------------
// Authors tend to put the correct answer in slot B. We shuffle options
// per-question using a seed derived from the question text, so:
//   - same question always shows the same shuffle (stable on rerender,
//     no SSR hydration mismatch, no replay confusion)
//   - correctId is re-mapped to wherever the originally-correct option
//     landed after the shuffle.
function hashString(s: string): number {
  let h = 2166136261 >>> 0
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619) >>> 0
  }
  return h >>> 0
}

function mulberry32(a: number): () => number {
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const ID_SLOTS = ['a', 'b', 'c', 'd', 'e', 'f'] as const

function shuffleQuiz(quiz: Quiz): Quiz {
  if (!quiz.options || quiz.options.length < 2) return quiz
  const rand = mulberry32(hashString(quiz.question))
  // Fisher–Yates on a copy.
  const shuffled = quiz.options.slice()
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  // Find the original correct option (by its old id), re-id everything by position.
  const originalCorrect = quiz.options.find((o) => o.id === quiz.correctId)
  const remapped = shuffled.map((o, i) => ({ ...o, id: ID_SLOTS[i] ?? o.id }))
  const newCorrect =
    remapped.find((o) => originalCorrect && o.text === originalCorrect.text)?.id ??
    quiz.correctId
  return { ...quiz, options: remapped, correctId: newCorrect }
}

const quizLabels = {
  ru: {
    question: 'Вопрос',
    checkAnswer: 'Проверить ответ',
    correct: 'Правильно!',
    incorrect: 'Неправильно',
    next: 'Далее',
    checkYourself: 'Проверьте себя',
    youAnswered: (score: number, total: number) => `Вы ответили правильно на ${score} из ${total} вопросов`,
    excellent: 'Отличный результат!',
    good: 'Хороший результат, но есть что повторить.',
    review: 'Рекомендуем перечитать материал урока.',
  },
  en: {
    question: 'Question',
    checkAnswer: 'Check Answer',
    correct: 'Correct!',
    incorrect: 'Incorrect',
    next: 'Next',
    checkYourself: 'Check Your Knowledge',
    youAnswered: (score: number, total: number) => `You answered ${score} out of ${total} questions correctly`,
    excellent: 'Excellent result!',
    good: 'Good result, but there\'s room to review.',
    review: 'We recommend re-reading the lesson material.',
  },
}

function QuizCard({
  quiz: rawQuiz,
  index,
  onComplete,
}: {
  quiz: Quiz
  index: number
  onComplete: (correct: boolean) => void
}) {
  const { lang } = useLanguage()
  const l = quizLabels[lang]
  // Shuffle options deterministically (per-question seed).
  // Memoize so the order stays stable across rerenders of this card.
  const quiz = useMemo(() => shuffleQuiz(rawQuiz), [rawQuiz])
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const isCorrect = selected === quiz.correctId

  function handleSelect(id: string) {
    if (revealed) return
    setSelected(id)
  }

  function handleCheck() {
    if (!selected) return
    setRevealed(true)
  }

  return (
    <div className="rounded-xl border bg-card p-6 space-y-4">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <HelpCircle className="w-4 h-4 text-primary" />
        </div>
        <div>
          <span className="text-xs font-medium text-muted-foreground">{l.question} {index + 1}</span>
          <h3 className="text-base font-semibold text-foreground mt-0.5">{quiz.question}</h3>
        </div>
      </div>

      <div className="grid gap-2">
        {quiz.options.map((opt) => {
          const isThis = selected === opt.id
          const isCorrectOpt = opt.id === quiz.correctId

          let optStyle = 'border-border hover:border-primary/40 hover:bg-accent/50 cursor-pointer'
          if (revealed && isCorrectOpt) {
            optStyle = 'border-emerald-300 bg-emerald-50 text-emerald-800'
          } else if (revealed && isThis && !isCorrect) {
            optStyle = 'border-red-300 bg-red-50 text-red-800'
          } else if (isThis && !revealed) {
            optStyle = 'border-primary bg-primary/5'
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={revealed}
              className={cn(
                'flex items-center gap-3 p-3 rounded-lg border text-sm text-left transition-all',
                optStyle
              )}
            >
              <span
                className={cn(
                  'w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0',
                  revealed && isCorrectOpt
                    ? 'border-emerald-500 bg-emerald-500 text-white'
                    : revealed && isThis && !isCorrect
                    ? 'border-red-400 bg-red-400 text-white'
                    : isThis
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border text-muted-foreground'
                )}
              >
                {revealed && isCorrectOpt ? (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                ) : revealed && isThis && !isCorrect ? (
                  <XCircle className="w-3.5 h-3.5" />
                ) : (
                  opt.id.toUpperCase()
                )}
              </span>
              <span>{opt.text}</span>
            </button>
          )
        })}
      </div>

      {!revealed && (
        <Button onClick={handleCheck} disabled={!selected} className="w-full">
          {l.checkAnswer}
        </Button>
      )}

      {revealed && (
        <div
          className={cn(
            'rounded-lg p-4 text-sm leading-relaxed',
            isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'
          )}
        >
          <div className="flex items-center gap-2 mb-1 font-semibold">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-4 h-4" /> {l.correct}
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4" /> {l.incorrect}
              </>
            )}
          </div>
          {quiz.explanation}
        </div>
      )}

      {revealed && (
        <Button variant="ghost" onClick={() => onComplete(isCorrect)} className="w-full">
          {l.next} <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      )}
    </div>
  )
}

export function QuizSection({
  quizzes,
  onAllComplete,
}: {
  quizzes: Quiz[]
  onAllComplete?: () => void
}) {
  const { lang } = useLanguage()
  const l = quizLabels[lang]
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  function handleComplete(correct: boolean) {
    if (correct) setScore((s) => s + 1)
    if (current < quizzes.length - 1) {
      setCurrent((c) => c + 1)
    } else {
      setFinished(true)
      onAllComplete?.()
    }
  }

  if (finished) {
    const pct = Math.round((score / quizzes.length) * 100)
    return (
      <div className="rounded-xl border bg-card p-8 text-center space-y-3">
        <div className="text-4xl font-bold text-primary">{pct}%</div>
        <p className="text-muted-foreground text-sm">
          {l.youAnswered(score, quizzes.length)}
        </p>
        <p className="text-xs text-muted-foreground/60">
          {pct >= 80 ? l.excellent : pct >= 50 ? l.good : l.review}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{l.checkYourself}</h3>
        <span className="text-xs text-muted-foreground">
          {current + 1} / {quizzes.length}
        </span>
      </div>
      <QuizCard key={current} quiz={quizzes[current]} index={current} onComplete={handleComplete} />
    </div>
  )
}
