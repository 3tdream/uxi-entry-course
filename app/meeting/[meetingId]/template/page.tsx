'use client'

import Link from 'next/link'
import { ArrowLeft, Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FIELD =
  'border border-stone-300 rounded-md p-3 min-h-[60px] text-sm text-stone-400 print:border-stone-400'

function FieldBox({
  label,
  hint,
  rows = 1,
}: {
  label: string
  hint: string
  rows?: number
}) {
  return (
    <div className="space-y-1">
      <label className="block text-xs font-semibold uppercase tracking-wide text-stone-700 print:text-black">
        {label}
      </label>
      <div className={FIELD} style={{ minHeight: rows * 28 + 24 }}>
        <span className="whitespace-pre-line">{hint}</span>
      </div>
    </div>
  )
}

function Quadrant({
  icon,
  title,
  hint,
}: {
  icon: string
  title: string
  hint: string
}) {
  return (
    <div className="border border-stone-300 rounded-lg p-4 print:border-stone-500 print:rounded-none">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{icon}</span>
        <h4 className="font-semibold text-sm uppercase tracking-wide text-stone-800 print:text-black">
          {title}
        </h4>
      </div>
      <div className="text-xs text-stone-400 italic min-h-[120px]">{hint}</div>
    </div>
  )
}

function QuestionGroup({
  num,
  title,
  questions,
}: {
  num: number
  title: string
  questions: string[]
}) {
  return (
    <section className="break-inside-avoid space-y-2 mb-5">
      <h4 className="text-sm font-bold text-stone-900 print:text-black">
        {num}. {title}
      </h4>
      <ol className="list-decimal list-inside space-y-2 text-sm text-stone-700 print:text-black">
        {questions.map((q, i) => (
          <li key={i} className="leading-snug">
            {q}
            <div className="border-b border-dotted border-stone-300 mt-1 h-4 print:border-stone-500" />
            <div className="border-b border-dotted border-stone-300 mt-2 h-4 print:border-stone-500" />
          </li>
        ))}
      </ol>
    </section>
  )
}

export default function PersonaTemplatePage() {
  return (
    <div className="min-h-screen bg-stone-50 print:bg-white">
      {/* Toolbar (not printed) */}
      <div className="sticky top-0 z-10 bg-background/90 backdrop-blur border-b print:hidden">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center gap-3">
          <Link href="/meeting/3/part/part-1">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Назад к уроку
            </Button>
          </Link>
          <div className="flex-1" />
          <span className="text-xs text-muted-foreground hidden sm:block">
            При печати выберите «Сохранить как PDF»
          </span>
          <Button onClick={() => window.print()} className="gap-2">
            <Printer className="w-4 h-4" />
            Печать / Скачать PDF
          </Button>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-8 print:px-8 print:py-6 print:max-w-none">
        {/* PAGE 1 — Persona Card */}
        <section className="bg-white border rounded-xl p-6 print:border-0 print:rounded-none print:p-0 mb-8 print:mb-0">
          <header className="flex items-baseline justify-between border-b pb-3 mb-5 print:border-stone-400">
            <div>
              <h1 className="text-2xl font-bold print:text-xl">Карточка персоны</h1>
              <p className="text-sm text-muted-foreground print:text-black">
                Шаг 5 — заполните после интервью или прямо во время него
              </p>
            </div>
            <span className="text-xs text-stone-400 print:text-black">
              UXI Entry Course · Урок 3
            </span>
          </header>

          <div className="grid grid-cols-3 gap-4 mb-5">
            <div className="col-span-1">
              <div className="border-2 border-dashed border-stone-300 rounded-lg aspect-square flex items-center justify-center text-stone-400 text-xs text-center px-2 print:border-stone-500">
                Фото или иконка
                <br />
                (стоковое фото)
              </div>
            </div>
            <div className="col-span-2 space-y-3">
              <FieldBox label="Имя" hint="например: Артём Лебедев" />
              <div className="grid grid-cols-2 gap-3">
                <FieldBox label="Возраст" hint="29" />
                <FieldBox label="Роль / занятие" hint="Системный администратор" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <FieldBox
              label="Bio — 2-3 предложения о жизни и работе"
              hint="Каждый день 2 часа в метро. Играет в мобильные игры в дороге..."
              rows={3}
            />

            <div className="grid grid-cols-2 gap-4">
              <FieldBox
                label="🎯 Цели (3-4 пункта)"
                hint={'• Скоротать дорогу с пользой\n• Прокачаться за сессию\n• Не зависеть от интернета'}
                rows={4}
              />
              <FieldBox
                label="😤 Фрустрации (3-4 пункта)"
                hint={'• Длинная загрузка\n• Pay-to-win\n• Реклама на 30 сек'}
                rows={4}
              />
            </div>

            <FieldBox
              label="📱 Поведенческие черты (устройство · частота · триггеры)"
              hint="Android-смартфон + наушники · 40-90 мин/день · триггер: посадка в метро"
              rows={3}
            />

            <FieldBox
              label="💬 Цитата из интервью (реальные слова)"
              hint="«Если игра не запускается за 3 секунды — у меня уже следующая станция»"
              rows={2}
            />

            <div className="bg-stone-50 border-2 border-stone-300 rounded-lg p-4 print:bg-white print:border-stone-500">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-3 text-stone-800 print:text-black">
                🎯 Jobs to Be Done
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <strong className="shrink-0 print:text-black">Когда</strong>
                  <div className="border-b border-dotted border-stone-400 flex-1 h-5 print:border-stone-600" />
                </div>
                <div className="flex items-start gap-2">
                  <strong className="shrink-0 print:text-black">я хочу</strong>
                  <div className="border-b border-dotted border-stone-400 flex-1 h-5 print:border-stone-600" />
                </div>
                <div className="flex items-start gap-2">
                  <strong className="shrink-0 print:text-black">чтобы</strong>
                  <div className="border-b border-dotted border-stone-400 flex-1 h-5 print:border-stone-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 2 — Empathy Map */}
        <section className="bg-white border rounded-xl p-6 print:border-0 print:rounded-none print:p-0 mb-8 print:mb-0 print:break-before-page">
          <header className="border-b pb-3 mb-5 print:border-stone-400">
            <h1 className="text-2xl font-bold print:text-xl">Карта эмпатии</h1>
            <p className="text-sm text-muted-foreground print:text-black">
              Шаг 6 — для одного конкретного сценария (не «вообще», а «в дороге утром»)
            </p>
          </header>

          <div className="mb-3">
            <FieldBox
              label="Имя персоны + сценарий"
              hint="например: Артём — играет в метро по дороге на работу"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <Quadrant
              icon="🧠"
              title="Думает"
              hint="Внутренние мысли, сомнения, надежды. То, что не говорит вслух."
            />
            <Quadrant
              icon="💬"
              title="Говорит"
              hint="Прямые цитаты из интервью, слова, которые часто повторяет."
            />
            <Quadrant
              icon="❤️"
              title="Чувствует"
              hint="Эмоции: страх, радость, раздражение, неуверенность."
            />
            <Quadrant
              icon="👀"
              title="Делает"
              hint="Наблюдаемые действия — клики, жесты, путь по экранам."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Quadrant
              icon="⬇️"
              title="Боли (Pains)"
              hint="Препятствия, страхи, риски, негативный опыт."
            />
            <Quadrant
              icon="⬆️"
              title="Выгоды (Gains)"
              hint="Желаемые результаты, мечты, критерии успеха."
            />
          </div>
        </section>

        {/* PAGE 3 — Interview Questions */}
        <section className="bg-white border rounded-xl p-6 print:border-0 print:rounded-none print:p-0 print:break-before-page">
          <header className="border-b pb-3 mb-5 print:border-stone-400">
            <h1 className="text-2xl font-bold print:text-xl">Шаблон интервью</h1>
            <p className="text-sm text-muted-foreground print:text-black">
              Шаг 1 — 5 групп вопросов · 45-60 минут · одна страница на интервью
            </p>
          </header>

          <div className="grid grid-cols-3 gap-3 text-xs mb-5 print:text-black">
            <div className="border rounded p-2 print:border-stone-500">
              <strong>Респондент:</strong>
              <div className="border-b border-dotted h-4 print:border-stone-500" />
            </div>
            <div className="border rounded p-2 print:border-stone-500">
              <strong>Дата:</strong>
              <div className="border-b border-dotted h-4 print:border-stone-500" />
            </div>
            <div className="border rounded p-2 print:border-stone-500">
              <strong>Интервьюер:</strong>
              <div className="border-b border-dotted h-4 print:border-stone-500" />
            </div>
          </div>

          <QuestionGroup
            num={1}
            title="КОНТЕКСТ — кто человек и где живёт"
            questions={[
              'Расскажите коротко о себе — чем занимаетесь, как проходит обычный день?',
              'Где и когда вы обычно сталкиваетесь с [нашей задачей]?',
              'Какие устройства/инструменты используете для этого?',
            ]}
          />
          <QuestionGroup
            num={2}
            title="ПОВЕДЕНИЕ — что реально делает"
            questions={[
              'Расскажите, как прошёл ваш последний раз, когда вы [делали X]?',
              'Покажите, как вы это делаете обычно?',
              'Что вы делаете, если что-то идёт не так?',
            ]}
          />
          <QuestionGroup
            num={3}
            title="ЦЕЛИ — зачем человек это делает"
            questions={[
              'Что для вас «удачный» результат в этой задаче?',
              'Как вы понимаете, что задача выполнена хорошо?',
              'Как этот результат влияет на ваш день/работу?',
            ]}
          />
          <QuestionGroup
            num={4}
            title="БОЛИ — что бесит"
            questions={[
              'Что в этом процессе вас больше всего раздражает?',
              'Расскажите про самый плохой случай, который случался?',
              'Что вы делаете, когда [инструмент] вас подводит?',
            ]}
          />
          <QuestionGroup
            num={5}
            title="ТРИГГЕРЫ — что запускает действие"
            questions={[
              'Что обычно случается прямо перед тем, как вы [делаете X]?',
              'Что должно произойти, чтобы вы поменяли способ?',
              'Кому вы рассказываете, когда находите хорошее решение?',
            ]}
          />

          <div className="mt-6 pt-4 border-t border-dashed text-xs text-stone-500 print:text-black print:border-stone-500">
            <strong>Анти-вопросы:</strong> «Вам бы понравилась тёмная тема?», «Вы бы заплатили за функцию X?»,
            «Что бы вы добавили в продукт?» — спрашивайте про прошлое поведение, а не про гипотетическое будущее.
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
        }
      `}</style>
    </div>
  )
}
