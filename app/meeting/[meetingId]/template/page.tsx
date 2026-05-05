'use client'

import { useId } from 'react'
import Link from 'next/link'
import { ArrowLeft, Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language'

// ---- Reusable field controls (editable in browser, print captures typed text) ----

const FIELD_BASE =
  'w-full border border-stone-300 rounded-md px-3 py-2 text-sm text-stone-900 ' +
  'placeholder:text-stone-400 placeholder:italic bg-white ' +
  'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary ' +
  'print:bg-white print:border-stone-400 print:focus:ring-0 print:rounded-none'

function TextField({
  label,
  placeholder,
  className = '',
}: {
  label: string
  placeholder: string
  className?: string
}) {
  const id = useId()
  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase tracking-wide text-stone-700 print:text-black"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className={`${FIELD_BASE} ${className}`}
      />
    </div>
  )
}

function TextAreaField({
  label,
  placeholder,
  rows = 3,
}: {
  label: string
  placeholder: string
  rows?: number
}) {
  const id = useId()
  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase tracking-wide text-stone-700 print:text-black"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        className={`${FIELD_BASE} resize-y leading-snug`}
      />
    </div>
  )
}

function Quadrant({
  icon,
  title,
  placeholder,
  rows = 5,
}: {
  icon: string
  title: string
  placeholder: string
  rows?: number
}) {
  const id = useId()
  return (
    <div className="border border-stone-300 rounded-lg p-3 print:border-stone-500 print:rounded-none flex flex-col gap-2">
      <label htmlFor={id} className="flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        <span className="font-semibold text-sm uppercase tracking-wide text-stone-800 print:text-black">
          {title}
        </span>
      </label>
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        className={`${FIELD_BASE} resize-y flex-1 leading-snug`}
      />
    </div>
  )
}

function QuestionItem({ q, notesLabel }: { q: string; notesLabel: string }) {
  const id = useId()
  return (
    <li className="leading-snug space-y-1">
      <label htmlFor={id} className="block">
        {q}
      </label>
      <textarea
        id={id}
        rows={2}
        placeholder={notesLabel}
        className={`${FIELD_BASE} resize-y leading-snug mt-1`}
      />
    </li>
  )
}

function QuestionGroup({
  num,
  title,
  questions,
  notesLabel,
}: {
  num: number
  title: string
  questions: string[]
  notesLabel: string
}) {
  return (
    <section className="break-inside-avoid space-y-3 mb-6">
      <h4 className="text-sm font-bold text-stone-900 print:text-black">
        {num}. {title}
      </h4>
      <ol className="list-decimal list-inside space-y-3 text-sm text-stone-700 print:text-black">
        {questions.map((q, i) => (
          <QuestionItem key={i} q={q} notesLabel={notesLabel} />
        ))}
      </ol>
    </section>
  )
}

function MetaField({ label }: { label: string }) {
  const id = useId()
  return (
    <div className="border rounded p-2 print:border-stone-500 flex flex-col gap-1">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <input id={id} type="text" className={`${FIELD_BASE} text-xs px-2 py-1`} />
    </div>
  )
}

function JourneyStageRow({
  num,
  stagePh,
  touchpointPh,
  emotionPh,
  painPh,
  opportunityPh,
  labels,
}: {
  num: number
  stagePh: string
  touchpointPh: string
  emotionPh: string
  painPh: string
  opportunityPh: string
  labels: {
    stage: string
    touchpoint: string
    emotion: string
    pain: string
    opportunity: string
  }
}) {
  const sId = useId()
  const tId = useId()
  const eId = useId()
  const pId = useId()
  const oId = useId()
  return (
    <div className="border border-stone-300 rounded-lg p-3 print:border-stone-500 print:rounded-none break-inside-avoid">
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-xs font-bold text-stone-500 print:text-black shrink-0">
          {num}.
        </span>
        <label htmlFor={sId} className="sr-only">
          {labels.stage}
        </label>
        <input
          id={sId}
          type="text"
          placeholder={stagePh}
          className={`${FIELD_BASE} text-sm font-semibold py-1`}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label
            htmlFor={tId}
            className="block text-[10px] font-semibold uppercase tracking-wide text-stone-600 print:text-black mb-0.5"
          >
            {labels.touchpoint}
          </label>
          <textarea
            id={tId}
            rows={2}
            placeholder={touchpointPh}
            className={`${FIELD_BASE} resize-y leading-snug text-xs`}
          />
        </div>
        <div>
          <label
            htmlFor={eId}
            className="block text-[10px] font-semibold uppercase tracking-wide text-stone-600 print:text-black mb-0.5"
          >
            {labels.emotion}
          </label>
          <textarea
            id={eId}
            rows={2}
            placeholder={emotionPh}
            className={`${FIELD_BASE} resize-y leading-snug text-xs`}
          />
        </div>
        <div>
          <label
            htmlFor={pId}
            className="block text-[10px] font-semibold uppercase tracking-wide text-stone-600 print:text-black mb-0.5"
          >
            {labels.pain}
          </label>
          <textarea
            id={pId}
            rows={2}
            placeholder={painPh}
            className={`${FIELD_BASE} resize-y leading-snug text-xs`}
          />
        </div>
        <div>
          <label
            htmlFor={oId}
            className="block text-[10px] font-semibold uppercase tracking-wide text-stone-600 print:text-black mb-0.5"
          >
            {labels.opportunity}
          </label>
          <textarea
            id={oId}
            rows={2}
            placeholder={opportunityPh}
            className={`${FIELD_BASE} resize-y leading-snug text-xs`}
          />
        </div>
      </div>
    </div>
  )
}

function renderInline(text: string) {
  // Safe **bold** parser: needs an even number of '**' to apply formatting,
  // otherwise renders the original string as plain text (avoids parity bugs).
  const parts = text.split('**')
  if (parts.length === 1 || parts.length % 2 === 0) {
    return <>{text}</>
  }
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>,
      )}
    </>
  )
}

// ---- Page ----

export default function PersonaTemplatePage() {
  const { t } = useLanguage()

  const placeholder = {
    name: t('например: Артём Лебедев', 'e.g. Artem Lebedev'),
    age: t('29', '29'),
    role: t('Системный администратор', 'System administrator'),
    bio: t(
      'Каждый день 2 часа в метро. Играет в мобильные игры в дороге...',
      '2 hours on the subway every day. Plays mobile games during commute...',
    ),
    goals: t(
      '• Скоротать дорогу с пользой\n• Прокачаться за сессию\n• Не зависеть от интернета',
      '• Make commute productive\n• Progress per session\n• Stay independent of internet',
    ),
    frustrations: t(
      '• Длинная загрузка\n• Pay-to-win\n• Реклама на 30 сек',
      '• Long loading\n• Pay-to-win\n• 30-sec ads',
    ),
    behaviour: t(
      'Android-смартфон + наушники · 40-90 мин/день · триггер: посадка в метро',
      'Android phone + headphones · 40-90 min/day · trigger: boarding the subway',
    ),
    quote: t(
      '«Если игра не запускается за 3 секунды — у меня уже следующая станция»',
      '"If the game doesn\'t start in 3 seconds, my next station is already here"',
    ),
    jtbd: t(
      'Заполните по формуле…',
      'Fill in following the formula…',
    ),
    scenario: t(
      'например: Артём — играет в метро по дороге на работу',
      'e.g. Artem — plays in subway on his way to work',
    ),
    quadrantThinks: t(
      'Внутренние мысли, сомнения, надежды. То, что не говорит вслух.',
      'Inner thoughts, doubts, hopes. What they don\'t say aloud.',
    ),
    quadrantSays: t(
      'Прямые цитаты из интервью, слова, которые часто повторяет.',
      'Direct quotes from interviews, words they often repeat.',
    ),
    quadrantFeels: t(
      'Эмоции: страх, радость, раздражение, неуверенность.',
      'Emotions: fear, joy, frustration, uncertainty.',
    ),
    quadrantDoes: t(
      'Наблюдаемые действия — клики, жесты, путь по экранам.',
      'Observable actions — clicks, gestures, screen flow.',
    ),
    quadrantPains: t(
      'Препятствия, страхи, риски, негативный опыт.',
      'Obstacles, fears, risks, negative experiences.',
    ),
    quadrantGains: t(
      'Желаемые результаты, мечты, критерии успеха.',
      'Desired outcomes, dreams, success criteria.',
    ),
    notes: t('Заметки…', 'Notes…'),
    fillIn: t('заполните…', 'fill in…'),

    ujmPersonaPh: t('например: Артём', 'e.g. Artem'),
    ujmScenarioPh: t(
      'например: устанавливает и втягивается в новую mobile-игру в дороге',
      'e.g. installs and gets hooked on a new mobile game during commute',
    ),
    ujmStage1: t('например: Триггер — скука в метро', 'e.g. Trigger — bored on commute'),
    ujmStage2: t('например: Discovery — реклама / друг', 'e.g. Discovery — ad / friend'),
    ujmStage3: t('например: Install + первая сессия', 'e.g. Install + first session'),
    ujmStage4: t('например: Hooked — 3 матча подряд', 'e.g. Hooked — 3 matches in a row'),
    ujmStage5: t('например: Habit или churn', 'e.g. Habit or churn'),
    ujmTouch: t('где и через что взаимодействует', 'where and how they interact'),
    ujmEmo: t('что чувствует на этом этапе', 'what they feel at this stage'),
    ujmPainPh: t('что мешает / бесит', 'what frustrates / blocks them'),
    ujmOppPh: t('идея для улучшения', 'idea for improvement'),
  }

  const questions = {
    context: t('КОНТЕКСТ — кто человек и где живёт', 'CONTEXT — who they are and where they live'),
    behavior: t('ПОВЕДЕНИЕ — что реально делает', 'BEHAVIOUR — what they actually do'),
    goals: t('ЦЕЛИ — зачем человек это делает', 'GOALS — why they do it'),
    pains: t('БОЛИ — что бесит', 'PAINS — what frustrates them'),
    triggers: t('ТРИГГЕРЫ — что запускает действие', 'TRIGGERS — what starts the action'),
    contextQ: [
      t(
        'Расскажите коротко о себе — чем занимаетесь, как проходит обычный день?',
        'Tell me briefly about yourself — what do you do, how does a typical day look?',
      ),
      t(
        'Где и когда вы обычно сталкиваетесь с [нашей задачей]?',
        'Where and when do you usually deal with [our task]?',
      ),
      t(
        'Какие устройства/инструменты используете для этого?',
        'What devices/tools do you use for it?',
      ),
    ],
    behaviorQ: [
      t(
        'Расскажите, как прошёл ваш последний раз, когда вы [делали X]?',
        'Tell me about the last time you [did X]?',
      ),
      t('Покажите, как вы это делаете обычно?', 'Show me how you usually do it?'),
      t('Что вы делаете, если что-то идёт не так?', 'What do you do when things go wrong?'),
    ],
    goalsQ: [
      t(
        'Что для вас «удачный» результат в этой задаче?',
        'What does a "successful" outcome look like for you?',
      ),
      t(
        'Как вы понимаете, что задача выполнена хорошо?',
        'How do you know the task is done well?',
      ),
      t(
        'Как этот результат влияет на ваш день/работу?',
        'How does this outcome affect your day/work?',
      ),
    ],
    painsQ: [
      t(
        'Что в этом процессе вас больше всего раздражает?',
        'What in this process annoys you the most?',
      ),
      t(
        'Расскажите про самый плохой случай, который случался?',
        'Tell me about the worst case that ever happened?',
      ),
      t(
        'Что вы делаете, когда [инструмент] вас подводит?',
        'What do you do when [the tool] lets you down?',
      ),
    ],
    triggersQ: [
      t(
        'Что обычно случается прямо перед тем, как вы [делаете X]?',
        'What usually happens right before you [do X]?',
      ),
      t(
        'Что должно произойти, чтобы вы поменяли способ?',
        'What would need to happen for you to switch methods?',
      ),
      t(
        'Кому вы рассказываете, когда находите хорошее решение?',
        'Who do you tell when you find a good solution?',
      ),
    ],
  }

  const ui = {
    backToLesson: t('Назад к уроку', 'Back to lesson'),
    printHint: t('При печати выберите «Сохранить как PDF»', 'When printing, choose "Save as PDF"'),
    printBtn: t('Печать / Скачать PDF', 'Print / Save as PDF'),
    courseTag: t('UXI Entry Course · Урок 3', 'UXI Entry Course · Meeting 3'),

    personaTitle: t('Карточка персоны', 'Persona Card'),
    personaSubtitle: t(
      'Шаг 6 — заполните после интервью или прямо во время него',
      'Step 6 — fill in during or right after the interview',
    ),
    photoHint: t('Фото или иконка\n(стоковое фото)', 'Photo or icon\n(stock image)'),
    name: t('Имя', 'Name'),
    age: t('Возраст', 'Age'),
    role: t('Роль / занятие', 'Role / occupation'),
    bio: t('Bio — 2-3 предложения о жизни и работе', 'Bio — 2-3 sentences about life and work'),
    goals: t('🎯 Цели (3-4 пункта)', '🎯 Goals (3-4 items)'),
    frustrations: t('😤 Фрустрации (3-4 пункта)', '😤 Frustrations (3-4 items)'),
    behaviour: t(
      '📱 Поведенческие черты (устройство · частота · триггеры)',
      '📱 Behavioural traits (device · frequency · triggers)',
    ),
    quote: t('💬 Цитата из интервью (реальные слова)', '💬 Quote from interview (real words)'),
    jtbdTitle: t('🎯 Jobs to Be Done', '🎯 Jobs to Be Done'),
    jtbdWhen: t('Когда', 'When'),
    jtbdIWant: t('я хочу', 'I want'),
    jtbdSoThat: t('чтобы', 'so that'),

    empathyTitle: t('Карта эмпатии', 'Empathy Map'),
    empathySubtitle: t(
      'Шаг 8 — для одного конкретного сценария (не «вообще», а «в дороге утром»)',
      'Step 8 — for one specific scenario (not "in general", but "during morning commute")',
    ),
    scenarioLabel: t('Имя персоны + сценарий', 'Persona name + scenario'),
    qThinks: t('Думает', 'Thinks'),
    qSays: t('Говорит', 'Says'),
    qFeels: t('Чувствует', 'Feels'),
    qDoes: t('Делает', 'Does'),
    qPains: t('Боли (Pains)', 'Pains'),
    qGains: t('Выгоды (Gains)', 'Gains'),

    ujmTitle: t('User Journey Map', 'User Journey Map'),
    ujmSubtitle: t(
      'Часть 2 — путь персоны через 5 этапов · одна персона · один сценарий',
      'Part 2 — persona journey across 5 stages · one persona · one scenario',
    ),
    ujmPersona: t('Имя персоны', 'Persona name'),
    ujmScenario: t('Сценарий', 'Scenario'),
    ujmStage: t('Этап', 'Stage'),
    ujmTouchpoint: t('Touchpoint', 'Touchpoint'),
    ujmEmotion: t('Эмоция', 'Emotion'),
    ujmPain: t('Pain point', 'Pain point'),
    ujmOpportunity: t('Возможность', 'Opportunity'),

    interviewTitle: t('Шаблон интервью', 'Interview Template'),
    interviewSubtitle: t(
      'Шаг 2 — 5 групп вопросов · 45-60 минут · одна страница на интервью',
      'Step 2 — 5 question groups · 45-60 minutes · one page per interview',
    ),
    respondent: t('Респондент:', 'Respondent:'),
    date: t('Дата:', 'Date:'),
    interviewer: t('Интервьюер:', 'Interviewer:'),
    antiQ: t(
      '**Анти-вопросы:** «Вам бы понравилась тёмная тема?», «Вы бы заплатили за функцию X?», «Что бы вы добавили в продукт?» — спрашивайте про прошлое поведение, а не про гипотетическое будущее.',
      '**Anti-questions:** "Would you like dark mode?", "Would you pay for feature X?", "What would you add to the product?" — ask about past behaviour, not hypothetical future.',
    ),
  }

  return (
    <div className="min-h-screen bg-stone-50 print:bg-white">
      {/* Toolbar (not printed) */}
      <div className="sticky top-0 z-10 bg-background/90 backdrop-blur border-b print:hidden">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center gap-3">
          <Link href="/meeting/3/part/part-1">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {ui.backToLesson}
            </Button>
          </Link>
          <div className="flex-1" />
          <span className="text-xs text-muted-foreground hidden md:block">
            {ui.printHint}
          </span>
          <Button onClick={() => window.print()} className="gap-2">
            <Printer className="w-4 h-4" />
            {ui.printBtn}
          </Button>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-8 print:px-8 print:py-6 print:max-w-none">
        {/* PAGE 1 — Persona Card */}
        <section className="bg-white border rounded-xl p-6 print:border-0 print:rounded-none print:p-0 mb-8 print:mb-0">
          <header className="flex items-baseline justify-between border-b pb-3 mb-5 print:border-stone-400">
            <div>
              <h1 className="text-2xl font-bold print:text-xl">{ui.personaTitle}</h1>
              <p className="text-sm text-muted-foreground print:text-black">
                {ui.personaSubtitle}
              </p>
            </div>
            <span className="text-xs text-stone-400 print:text-black">{ui.courseTag}</span>
          </header>

          <div className="grid grid-cols-3 gap-4 mb-5">
            <div className="col-span-1">
              <div className="border-2 border-dashed border-stone-300 rounded-lg aspect-square flex items-center justify-center text-stone-400 text-xs text-center px-2 print:border-stone-500 whitespace-pre-line">
                {ui.photoHint}
              </div>
            </div>
            <div className="col-span-2 space-y-3">
              <TextField label={ui.name} placeholder={placeholder.name} />
              <div className="grid grid-cols-2 gap-3">
                <TextField label={ui.age} placeholder={placeholder.age} />
                <TextField label={ui.role} placeholder={placeholder.role} />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <TextAreaField label={ui.bio} placeholder={placeholder.bio} rows={3} />

            <div className="grid grid-cols-2 gap-4">
              <TextAreaField label={ui.goals} placeholder={placeholder.goals} rows={4} />
              <TextAreaField label={ui.frustrations} placeholder={placeholder.frustrations} rows={4} />
            </div>

            <TextAreaField label={ui.behaviour} placeholder={placeholder.behaviour} rows={3} />
            <TextAreaField label={ui.quote} placeholder={placeholder.quote} rows={2} />

            <div className="bg-stone-50 border-2 border-stone-300 rounded-lg p-4 print:bg-white print:border-stone-500">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-3 text-stone-800 print:text-black">
                {ui.jtbdTitle}
              </h3>
              <div className="space-y-2 text-sm">
                {[ui.jtbdWhen, ui.jtbdIWant, ui.jtbdSoThat].map((label, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <strong className="shrink-0 print:text-black w-20 pt-1.5">{label}</strong>
                    <input
                      type="text"
                      placeholder={placeholder.fillIn}
                      className={`${FIELD_BASE} flex-1`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 2 — Empathy Map */}
        <section className="bg-white border rounded-xl p-6 print:border-0 print:rounded-none print:p-0 mb-8 print:mb-0 print:break-before-page">
          <header className="border-b pb-3 mb-5 print:border-stone-400">
            <h1 className="text-2xl font-bold print:text-xl">{ui.empathyTitle}</h1>
            <p className="text-sm text-muted-foreground print:text-black">
              {ui.empathySubtitle}
            </p>
          </header>

          <div className="mb-3">
            <TextField label={ui.scenarioLabel} placeholder={placeholder.scenario} />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <Quadrant icon="🧠" title={ui.qThinks} placeholder={placeholder.quadrantThinks} />
            <Quadrant icon="💬" title={ui.qSays} placeholder={placeholder.quadrantSays} />
            <Quadrant icon="❤️" title={ui.qFeels} placeholder={placeholder.quadrantFeels} />
            <Quadrant icon="👀" title={ui.qDoes} placeholder={placeholder.quadrantDoes} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Quadrant icon="⬇️" title={ui.qPains} placeholder={placeholder.quadrantPains} rows={3} />
            <Quadrant icon="⬆️" title={ui.qGains} placeholder={placeholder.quadrantGains} rows={3} />
          </div>
        </section>

        {/* PAGE 3 — Interview Questions */}
        <section className="bg-white border rounded-xl p-6 print:border-0 print:rounded-none print:p-0 print:break-before-page">
          <header className="border-b pb-3 mb-5 print:border-stone-400">
            <h1 className="text-2xl font-bold print:text-xl">{ui.interviewTitle}</h1>
            <p className="text-sm text-muted-foreground print:text-black">
              {ui.interviewSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-3 gap-3 text-xs mb-5 print:text-black">
            {[ui.respondent, ui.date, ui.interviewer].map((label, i) => (
              <MetaField key={i} label={label} />
            ))}
          </div>

          <QuestionGroup
            num={1}
            title={questions.context}
            questions={questions.contextQ}
            notesLabel={placeholder.notes}
          />
          <QuestionGroup
            num={2}
            title={questions.behavior}
            questions={questions.behaviorQ}
            notesLabel={placeholder.notes}
          />
          <QuestionGroup
            num={3}
            title={questions.goals}
            questions={questions.goalsQ}
            notesLabel={placeholder.notes}
          />
          <QuestionGroup
            num={4}
            title={questions.pains}
            questions={questions.painsQ}
            notesLabel={placeholder.notes}
          />
          <QuestionGroup
            num={5}
            title={questions.triggers}
            questions={questions.triggersQ}
            notesLabel={placeholder.notes}
          />

          <div className="mt-6 pt-4 border-t border-dashed text-xs text-stone-500 print:text-black print:border-stone-500">
            {renderInline(ui.antiQ)}
          </div>
        </section>

        {/* PAGE 4 — User Journey Map */}
        <section className="bg-white border rounded-xl p-6 print:border-0 print:rounded-none print:p-0 mt-8 print:mt-0 print:break-before-page">
          <header className="border-b pb-3 mb-5 print:border-stone-400">
            <h1 className="text-2xl font-bold print:text-xl">{ui.ujmTitle}</h1>
            <p className="text-sm text-muted-foreground print:text-black">
              {ui.ujmSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <TextField label={ui.ujmPersona} placeholder={placeholder.ujmPersonaPh} />
            <TextField label={ui.ujmScenario} placeholder={placeholder.ujmScenarioPh} />
          </div>

          <div className="space-y-3">
            <JourneyStageRow
              num={1}
              stagePh={placeholder.ujmStage1}
              touchpointPh={placeholder.ujmTouch}
              emotionPh={placeholder.ujmEmo}
              painPh={placeholder.ujmPainPh}
              opportunityPh={placeholder.ujmOppPh}
              labels={{
                stage: ui.ujmStage,
                touchpoint: ui.ujmTouchpoint,
                emotion: ui.ujmEmotion,
                pain: ui.ujmPain,
                opportunity: ui.ujmOpportunity,
              }}
            />
            <JourneyStageRow
              num={2}
              stagePh={placeholder.ujmStage2}
              touchpointPh={placeholder.ujmTouch}
              emotionPh={placeholder.ujmEmo}
              painPh={placeholder.ujmPainPh}
              opportunityPh={placeholder.ujmOppPh}
              labels={{
                stage: ui.ujmStage,
                touchpoint: ui.ujmTouchpoint,
                emotion: ui.ujmEmotion,
                pain: ui.ujmPain,
                opportunity: ui.ujmOpportunity,
              }}
            />
            <JourneyStageRow
              num={3}
              stagePh={placeholder.ujmStage3}
              touchpointPh={placeholder.ujmTouch}
              emotionPh={placeholder.ujmEmo}
              painPh={placeholder.ujmPainPh}
              opportunityPh={placeholder.ujmOppPh}
              labels={{
                stage: ui.ujmStage,
                touchpoint: ui.ujmTouchpoint,
                emotion: ui.ujmEmotion,
                pain: ui.ujmPain,
                opportunity: ui.ujmOpportunity,
              }}
            />
            <JourneyStageRow
              num={4}
              stagePh={placeholder.ujmStage4}
              touchpointPh={placeholder.ujmTouch}
              emotionPh={placeholder.ujmEmo}
              painPh={placeholder.ujmPainPh}
              opportunityPh={placeholder.ujmOppPh}
              labels={{
                stage: ui.ujmStage,
                touchpoint: ui.ujmTouchpoint,
                emotion: ui.ujmEmotion,
                pain: ui.ujmPain,
                opportunity: ui.ujmOpportunity,
              }}
            />
            <JourneyStageRow
              num={5}
              stagePh={placeholder.ujmStage5}
              touchpointPh={placeholder.ujmTouch}
              emotionPh={placeholder.ujmEmo}
              painPh={placeholder.ujmPainPh}
              opportunityPh={placeholder.ujmOppPh}
              labels={{
                stage: ui.ujmStage,
                touchpoint: ui.ujmTouchpoint,
                emotion: ui.ujmEmotion,
                pain: ui.ujmPain,
                opportunity: ui.ujmOpportunity,
              }}
            />
          </div>
        </section>
      </main>

      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 15mm;
          }
          html,
          body {
            background: white !important;
          }
          textarea,
          input {
            color: black !important;
          }
          /* Show typed text on print, hide stray placeholders */
          textarea::placeholder,
          input::placeholder {
            color: transparent !important;
          }
        }
      `}</style>
    </div>
  )
}
