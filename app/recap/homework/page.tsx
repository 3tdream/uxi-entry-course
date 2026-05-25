'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionRenderer } from '@/components/course/section-renderer'
import { useLanguage } from '@/lib/language'
import type { Section } from '@/data/types'

type Content = {
  title: string
  tagline: string
  intro: string
  sections: Section[]
  backLabel: string
  nextLabel: string
}

const CONTENT: Record<'ru' | 'en', Content> = {
  ru: {
    title: 'Капстоун: твой первый Research-проект',
    tagline: '11 артефактов · ~8–15 часов · полный Research Loop от пустого экрана до Story Map',
    intro:
      'За 5 уроков ты собрал инструментарий. Сейчас — собери его в один реальный проект. Выбери продукт, проведи через него все шаги Research Loop, создай портфолио-артефакт. Это не тест и не «домашка на вечер» — это твой **первый UX Research проект, который не стыдно показать на собеседовании**. После него ты понимаешь Research не как 5 разрозненных методов, а как ОДИН процесс.',
    sections: [
      {
        type: 'callout',
        variant: 'tip',
        content:
          '**Прокачка против чек-листа:** этот капстоун закрывает M1–M5 — Foundations, UX/UI, Research-основы, Research-практику и Requirements. Если выполнишь его честно — у тебя в портфолио появится **полный артефакт UX Research проекта** размером 10–20 страниц.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Этап 1 — Выбор продукта (~15 минут)' },
      {
        type: 'text',
        content:
          '**Шаг 1.** Выбери продукт. У тебя три варианта — каждый одинаково валидный, выбирай по тому, где у тебя больше контекста:',
      },
      {
        type: 'columns',
        columns: [
          {
            title: '🅰 Свой продукт / pet project',
            items: [
              'Если у тебя уже есть идея или MVP',
              'Самый ценный для портфолио — реальные пользователи',
              'Чуть сложнее с рекрутингом — нужны живые люди',
              'Лучше всего показывает твою практическую ценность',
            ],
          },
          {
            title: '🎮 Astral Symphony (gaming)',
            items: [
              'Готовая persona Артём в [/meeting/3/template](/meeting/3/template)',
              'Гипотеза готова: «понятно ли, что музыка реагирует на бой?»',
              'Можно рекрутить геймеров среди друзей',
              'Готовый референс с примерами в [/recap/research](/recap/research)',
            ],
          },
          {
            title: '🌐 Любое приложение, которым ты пользуешься',
            items: [
              'Slack / Spotify / Wildberries / Tinder / любое',
              'Не нужно собственного продукта',
              'Минус: ты сам — не ЦА, нужны другие интервью',
              'Хороший выбор для первого захода',
            ],
          },
        ],
      },
      {
        type: 'text',
        content:
          '**Шаг 2.** Сформулируй **гипотезу research** (одно предложение). Шаблон: «Я думаю, что [конкретная роль] спотыкается на [конкретный момент], потому что [причина]. Хочу проверить». Например: «Я думаю, что F2P-игроки Astral Symphony churn-ят на 3-й день, потому что не понимают связь музыки с боем».',
      },
      {
        type: 'text',
        content:
          '**Шаг 3.** Определи **одну измеримую метрику успеха**. Это твоя проверка, что улучшение реально сработало через 3 месяца. Примеры: D7 retention / Time on Task / NPS / Task Completion Rate / средняя длительность сессии.',
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**📝 Артефакт 1 (из 11): One-pager**. Документ на 1 страницу: продукт + гипотеза + 1 measurable success metric. Это твоё «обещание самому себе» — будешь возвращаться к этой странице на каждом этапе и проверять, движешься ли ты к этой цели или ушёл в сторону.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Этап 2 — Эмпатия (~2–3 часа)' },
      {
        type: 'text',
        content:
          'Цель этапа: построить **модель целевого пользователя**. Не «среднего интернет-пользователя», а конкретного human-being, для которого ты проектируешь. Без этого следующие шаги шатает в случайные стороны.',
      },
      {
        type: 'text',
        content:
          '**Шаг 4 — Persona Card.** Имя, возраст, роль, цели (3), фрустрации (3), цитата из жизни. Не «типичный пользователь», а человек с лицом. См. [M3 Part 1](/meeting/3/part/part-1) и шаблон в [/meeting/3/template](/meeting/3/template).',
      },
      {
        type: 'text',
        content:
          '**Шаг 5 — Empathy Map.** 4 квадранта: **Думает / Говорит / Чувствует / Делает**. Плюс полосы **Pains** (что мешает) и **Gains** (чего хочет). Заполняй цитатами из реальных интервью или из своих наблюдений, не «я придумал».',
      },
      {
        type: 'text',
        content:
          '**Шаг 6 — JTBD-формула.** «Когда [ситуация], я хочу [мотивация], чтобы [результат]». Пример: «Когда я еду в метро 35 минут на работу, я хочу убить время с пользой, чтобы не залипать в TikTok». Это раскрывает **функциональную работу**, ради которой пользователь приходит в твой продукт.',
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**📝 Артефакты 2–4:** Persona Card / Empathy Map / JTBD-формулировка. Все три — на одной странице или в одной Miro-доске.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Этап 3 — Картирование пути (~1–2 часа)' },
      {
        type: 'text',
        content:
          'Цель: показать **где конкретно болит**. Если этап 2 даёт «кто это», то этап 3 даёт «где он спотыкается во времени».',
      },
      {
        type: 'text',
        content:
          '**Шаг 7 — User Journey Map.** **5–6 stages** (типично: Discover → Consideration → Onboard → Use → Habit → Loyalty, или адаптируй под свой продукт). Под каждым этапом фиксируешь: **touchpoint** (где встретился с продуктом), **эмоция** (что чувствовал), **pain point** (что мешало), **opportunity** (идея для улучшения).',
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          '**Эмоциональная кривая** — обязательный элемент. Нарисуй линию по горизонтали: где эмоция падает (frustration) — там самые ценные точки для дизайна. См. [M3 Part 2](/meeting/3/part/part-2).',
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**📝 Артефакт 5:** UJM на 5–6 stages с эмоциональной кривой и opportunities. Лучше всего в Miro или Figma — тогда можешь приложить screenshot к итоговому документу.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Этап 4 — Интервью (~3–4 часа)' },
      {
        type: 'text',
        content:
          '**Самый трудоёмкий этап**, но самый ценный. Подготовка → проведение → анализ. Не пропускай рекрутинг — без правильной выборки данные мусор.',
      },
      {
        type: 'text',
        content:
          '**Шаг 8 — Подготовка.** Гайд из **8–12 открытых вопросов** в 4 блоках: **warm-up** (расскажите о себе) → **поведение** (как сейчас решаете) → **боль** (что было сложным) → **мечта** (если бы могли изменить). Без leading-вопросов («вам ведь нравится...»). См. [M5 Part 1](/meeting/5/part/part-1).',
      },
      {
        type: 'text',
        content:
          '**Шаг 9 — Рекрутинг.** Минимум **3 интервью**, лучше 5. **Не из своей IT-команды** — нужны люди из реальной ЦА. Если делаешь Astral Symphony — геймеры, не друзья-разработчики. Длительность: 30–45 мин/интервью.',
      },
      {
        type: 'text',
        content:
          '**Шаг 10 — Проведение и анализ.** Запись с согласия. Используй **think-aloud** + правило «5 Whys» для углубления. После интервью — **affinity map в Miro**: каждый инсайт = отдельный стикер, кластеры выявят паттерны после 3-го интервью.',
      },
      {
        type: 'callout',
        variant: 'warning',
        content:
          '**Golden Rule интервью:** никогда не подсказывай и не задавай leading-вопросов («вам ведь нравится наш новый поиск?»). Если участник застрял — спроси нейтрально: «Что вы ожидали увидеть?» или «Что бы вы сделали дома один?»',
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**📝 Артефакты 6–8:** Interview guide (1 страница) / 3 заполненных interview write-up\'а / affinity map с топ-3 кластерами инсайтов.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Этап 5 — Юзабилити-тест (~2–3 часа)' },
      {
        type: 'text',
        content:
          'Если этап 4 даёт **«что говорят»**, то этап 5 — **«что делают»**. Часто это разные вещи: люди говорят, что хотят X, а делают Y. Юзабилити-тест ловит этот разрыв.',
      },
      {
        type: 'text',
        content:
          '**Шаг 11 — План теста.** Скрипт из **3–5 задач** (реалистичные сценарии, не инструкции!). Пример хорошей задачи: «Представьте, что вы хотите купить наушники для бега. Найдите подходящий вариант». Пример плохой: «Нажмите Меню → Каталог → Электроника → Наушники». См. [M4 Part 1](/meeting/4/part/part-1).',
      },
      {
        type: 'text',
        content:
          '**Шаг 12 — Проведение.** **5 пользователей** (правило Нильсена: 5 чел = ~85% проблем). Think-aloud протокол. Инструменты: [Lookback ↗](https://www.lookback.com/) / [Maze ↗](https://maze.co/) / [Zoom](https://zoom.us/) + OBS Studio для self-record. Не подсказывай!',
      },
      {
        type: 'text',
        content:
          '**Шаг 13 — Анализ.** **Prioritisation Matrix** (frequency × severity): Critical Blockers (high+high) фиксим первыми, Minor Polish (low+low) — последними. Затем **actionable report**: каждая проблема = issue + severity + evidence (N/5) + recommendation + business impact.',
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**📝 Артефакты 9–10:** Test plan (1 страница с задачами и скриптом) + actionable report с топ-3 issues, prioritisation matrix и рекомендациями.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Этап 6 — От research к требованиям (~2–3 часа)' },
      {
        type: 'text',
        content:
          'Финальный мост: **research-инсайты → User Stories → Story Map**. Это то, что отделяет «UX-исследователя на бумаге» от «UX-исследователя, чьи инсайты дошли до разработки».',
      },
      {
        type: 'text',
        content:
          '**Шаг 14 — 5 User Stories.** Каждая в формате «Как [роль], я хочу [действие], чтобы [ценность]». Каждая с **2–5 Acceptance Criteria в Given-When-Then**. Каждая проходит **INVEST**. Приоритет каждой по **MoSCoW**. См. [M5 Part 2](/meeting/5/part/part-2).',
      },
      {
        type: 'text',
        content:
          '**Шаг 15 — Story Map.** **По горизонтали** — этапы user journey (можно взять stages из UJM). **По вертикали** под каждым этапом — твои User Stories по приоритету сверху вниз. **Горизонтальная линия** = MVP cut. То, что выше — в Release 1. То, что ниже — в follow-up.',
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**📝 Артефакт 11:** 5 User Stories с AC + Story Map в Miro/Figma/PDF. Это финальный артефакт капстоуна — он показывает, что ты не просто провёл research, а перевёл его в backlog, готовый к разработке.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Сборка и сдача (~15–30 минут)' },
      {
        type: 'text',
        content:
          'Собери все **11 артефактов** в один документ: **PDF / Notion page / Miro board**. В начале добавь **1-страничное summary**: что узнал, что меняешь, ожидаемый impact на метрику из этапа 1.',
      },
      {
        type: 'text',
        content:
          'Итого ~10–20 страниц. Это **первая работа в твоё UX-портфолио** — оформи аккуратно (заголовки, нумерация, скриншоты артефактов). При собеседовании этот документ показывает работодателю больше, чем 5 курсов в резюме.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Самооценка по rubric' },
      {
        type: 'text',
        content:
          'Прежде чем считать капстоун сданным — пройдись по чек-листу самооценки. **30 баллов максимум**, **21 балл (70%) — порог сдачи**.',
      },
      {
        type: 'checklist',
        title: 'Rubric — 6 областей по 5 баллов',
        items: [
          {
            text: '🧠 Persona Card',
            demo: '**1 балл** — есть имя и роль. **3 балла** — + goals + frustrations. **5 баллов** — + цитата + traits + конкретный контекст (где живёт, чем зарабатывает, как использует продукт).',
          },
          {
            text: '❤️ Empathy Map',
            demo: '**1 балл** — есть 4 квадранта. **3 балла** — + Pains/Gains. **5 баллов** — заполнено **конкретными цитатами из интервью**, а не «общие слова».',
          },
          {
            text: '🗺 User Journey Map',
            demo: '**1 балл** — 5 stages с подписями. **3 балла** — + touchpoints + эмоциональная кривая. **5 баллов** — + pains + opportunities на каждом этапе. Видно, где конкретно фиксить.',
          },
          {
            text: '🎤 Interviews',
            demo: '**1 балл** — 1 интервью провёл. **3 балла** — 3 интервью + сырые заметки. **5 баллов** — 3 интервью + **affinity map с топ-3 кластерами инсайтов** + цитаты участников.',
          },
          {
            text: '🧪 Юзабилити-тест',
            demo: '**1 балл** — план теста готов. **3 балла** — + проведён на 5 пользователях + prioritisation matrix. **5 баллов** — + **actionable report** с issue/severity/evidence/recommendation/impact на бизнес-метрику.',
          },
          {
            text: '📋 User Stories + Story Map',
            demo: '**1 балл** — 3 User Stories с ценностью. **3 балла** — + 2–5 AC в Given-When-Then. **5 баллов** — + INVEST для каждой + MoSCoW-приоритет + **Story Map с MVP cut line**.',
          },
        ],
      },
      { type: 'divider' },
      { type: 'heading', content: 'Типичные ошибки — не повторяй' },
      {
        type: 'before-after',
        title: 'Persona',
        before: {
          label: '❌ Так не надо',
          description:
            '«Я сделал персону по своему другу-разработчику». Это **не персона ЦА**, это ты сам в зеркале. Все следующие шаги будут стрелять в свою же команду, а не в реального пользователя.',
        },
        after: {
          label: '✅ Так надо',
          description:
            'Persona = собирательный образ **реального** сегмента ЦА. Имя, возраст, контекст входа в продукт, **конкретные ограничения** (время, бюджет, опыт). Если не уверен — проведи 2-3 предварительных интервью с ЦА и собери persona из их историй.',
        },
      },
      {
        type: 'before-after',
        title: 'Рекрутинг интервью',
        before: {
          label: '❌ Так не надо',
          description:
            '«Опросил 3 человека из своей IT-команды и одного дизайнера». **Bias всей выборки**: коллеги думают как ты, оценивают продукт как профессионалы, не как пользователи.',
        },
        after: {
          label: '✅ Так надо',
          description:
            'Рекрутируй **из ЦА persona**: для Astral Symphony — геймеров на форумах и в Discord-серверах, для e-commerce — реальных покупателей с Wildberries, для SaaS — людей из конкретной индустрии. Готовь $25–50 вознаграждение (M4 P1 чек-лист).',
        },
      },
      {
        type: 'before-after',
        title: 'User Stories',
        before: {
          label: '❌ Так не надо',
          description:
            'Все 5 User Stories для одной роли «admin» (или «пользователь»). Получишь технические задания, а не пользовательские истории. Команда не поймёт, **для кого** делает.',
        },
        after: {
          label: '✅ Так надо',
          description:
            'Каждая User Story — для **конкретного сегмента** из persona. Например: новичок / опытный / churned / power-user. Тогда команда видит, какой кусок аудитории закрывает каждая story и куда есть «дыры».',
        },
      },
      {
        type: 'before-after',
        title: 'Story Map',
        before: {
          label: '❌ Так не надо',
          description:
            '«Story Map = плоский список из 15 задач». Это просто **backlog**, не Story Map. Нет связи с user journey, нет MVP-разделения, нет приоритета по этапам пути.',
        },
        after: {
          label: '✅ Так надо',
          description:
            'Story Map = **2D-сетка**: по горизонтали этапы пути (Discover → Onboard → Use → Habit), по вертикали под каждым — stories по приоритету. **Горизонтальная линия** отрезает MVP от future. Команда за 20 мин видит, что закрыто и где дыры.',
        },
      },
      { type: 'divider' },
      { type: 'heading', content: '🎮 Если выбрал Astral Symphony' },
      {
        type: 'text',
        content:
          'Для gaming-варианта у тебя уже **половина артефактов готова в качестве референса** — открой [/recap/research](/recap/research) и пройдись по 7-step Brawl Stars walkthrough с Артёмом. Там filled-in пример persona, UJM, гипотез, теста и метрик. Твоя задача — пройти **тот же путь на Astral Symphony**, не копировать дословно.',
      },
      {
        type: 'key-concepts',
        concepts: [
          {
            term: 'Готовая гипотеза',
            definition:
              '«F2P-игроки Astral Symphony churn-ят на 3-й день, потому что не понимают связь музыки с боем». Это focal hypothesis курса — проверяй её.',
          },
          {
            term: 'Persona-якорь',
            definition:
              'Артём (28, F2P, метро 35 мин × 2, мейн mid-tier brawler). Используй его в шаблоне [/meeting/3/template](/meeting/3/template) и адаптируй под свою гипотезу.',
          },
          {
            term: 'Готовая success-метрика',
            definition:
              'D7 retention F2P-сегмента (baseline ~68% → target ~73%). Считай эту дельту в financial impact, как в M5 P2 case-study Spotify.',
          },
          {
            term: 'Готовый playtest-шаблон',
            definition:
              'Post-session Google Form (RU+EN версии лежат в session-notes этой неделе) — используй как survey-инструмент в этапе 5.',
          },
        ],
      },
      { type: 'divider' },
      { type: 'heading', content: 'Что дальше' },
      {
        type: 'text',
        content:
          'После сдачи капстоуна — **Meeting 6: Information Architecture & Sitemaps**. Там ты возьмёшь свои User Stories из этого проекта и спроектируешь под них структуру навигации. UJM + Story Map из капстоуна — прямой input для следующего модуля.',
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          '**Save your artifacts.** Не выбрасывай файлы после сдачи — Meeting 6, 7, 8 будут просить тебя возвращаться к persona, UJM и stories для следующих этапов проектирования. Капстоун — это не финал, это **input** для остального курса.',
      },
    ],
    backLabel: 'К Meeting 5',
    nextLabel: 'Перейти к Meeting 6',
  },
  en: {
    title: 'Capstone: your first Research project',
    tagline: '11 artifacts · ~8–15 hours · the full Research Loop from blank canvas to Story Map',
    intro:
      'You\'ve collected the toolkit over 5 lessons. Now — pull it together into one real project. Pick a product, walk it through every step of the Research Loop, ship a portfolio artifact. This isn\'t a test or "evening homework" — it\'s **your first UX Research project that\'s legitimately portfolio-worthy at an interview**. After it you understand Research not as 5 disconnected methods, but as ONE process.',
    sections: [
      {
        type: 'callout',
        variant: 'tip',
        content:
          '**Skill check vs the rubric:** this capstone closes M1–M5 — Foundations, UX/UI, Research basics, Research practice, and Requirements. Done honestly, it gives you a **complete 10–20-page UX Research artifact** in your portfolio.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Phase 1 — Pick a product (~15 min)' },
      {
        type: 'text',
        content:
          '**Step 1.** Pick a product. Three equally valid options — choose the one where you have the most context:',
      },
      {
        type: 'columns',
        columns: [
          {
            title: '🅰 Your own product / pet project',
            items: [
              'If you already have an idea or MVP',
              'Most valuable for the portfolio — real users',
              'Recruiting is a bit harder — you need live people',
              'Best showcase of your practical value',
            ],
          },
          {
            title: '🎮 Astral Symphony (gaming)',
            items: [
              'Pre-baked persona Artem in [/meeting/3/template](/meeting/3/template)',
              'Hypothesis ready: "is the music-combat link readable?"',
              'Easy to recruit gamers from your friends',
              'Filled example reference in [/recap/research](/recap/research)',
            ],
          },
          {
            title: '🌐 Any app you actually use',
            items: [
              'Slack / Spotify / Wildberries / Tinder / anything',
              'No need for your own product',
              'Downside: you aren\'t the target — need interviews with others',
              'A solid choice for the first run',
            ],
          },
        ],
      },
      {
        type: 'text',
        content:
          '**Step 2.** State the **research hypothesis** in one sentence. Template: "I think [specific role] trips at [specific moment] because of [reason]. I want to verify." For example: "I think Astral Symphony F2P players churn on day 3 because they don\'t catch the music-to-combat link."',
      },
      {
        type: 'text',
        content:
          '**Step 3.** Define **one measurable success metric**. This is how you\'ll verify, 3 months from now, that the change actually worked. Examples: D7 retention / Time on Task / NPS / Task Completion Rate / average session length.',
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**📝 Artifact 1 of 11: one-pager.** A single page: product + hypothesis + 1 measurable success metric. This is your "promise to yourself" — you\'ll return to it at every step to check whether you\'re still moving toward that target or drifted sideways.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Phase 2 — Empathy (~2–3 hours)' },
      {
        type: 'text',
        content:
          'Phase goal: build the **target user model**. Not "the average internet user", but a concrete human-being you\'re designing for. Skip this and the next steps swing around in random directions.',
      },
      {
        type: 'text',
        content:
          '**Step 4 — Persona Card.** Name, age, role, goals (3), frustrations (3), real-life quote. Not a "typical user" but a person with a face. See [M3 Part 1](/meeting/3/part/part-1) and the template at [/meeting/3/template](/meeting/3/template).',
      },
      {
        type: 'text',
        content:
          '**Step 5 — Empathy Map.** 4 quadrants: **Thinks / Says / Feels / Does**. Plus the **Pains** (what blocks them) and **Gains** (what they want) strips. Fill with quotes from real interviews or observations, not "I made this up".',
      },
      {
        type: 'text',
        content:
          '**Step 6 — JTBD formula.** "When [situation], I want to [motivation], so that [outcome]." Example: "When I\'m commuting 35 minutes on the metro, I want to kill the time productively, so I don\'t doomscroll TikTok." This surfaces the **functional job** the user hires your product to do.',
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**📝 Artifacts 2–4:** Persona Card / Empathy Map / JTBD statement. All three on one page or one Miro board.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Phase 3 — Map the journey (~1–2 hours)' },
      {
        type: 'text',
        content:
          'Goal: show **where it specifically hurts**. If phase 2 answers "who is this", phase 3 answers "where do they trip over time."',
      },
      {
        type: 'text',
        content:
          '**Step 7 — User Journey Map.** **5–6 stages** (typical: Discover → Consideration → Onboard → Use → Habit → Loyalty, or adapt to your product). Under each stage: **touchpoint** (where they meet the product), **emotion** (what they feel), **pain point** (what blocks them), **opportunity** (improvement idea).',
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          '**Emotion curve** is a mandatory element. Draw a horizontal line: where emotion dips (frustration) are the highest-value design moments. See [M3 Part 2](/meeting/3/part/part-2).',
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**📝 Artifact 5:** UJM with 5–6 stages, emotion curve, and opportunities. Best in Miro or Figma — then attach a screenshot to the final document.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Phase 4 — Interviews (~3–4 hours)' },
      {
        type: 'text',
        content:
          'The **most time-consuming phase**, but the most valuable. Prep → conduct → analyze. Don\'t skip recruiting — bad sample, garbage data.',
      },
      {
        type: 'text',
        content:
          '**Step 8 — Prep.** A guide of **8–12 open-ended questions** in 4 blocks: **warm-up** (tell me about yourself) → **behavior** (how do you do it now) → **pain** (what was hard) → **dream** (what would you change). No leading questions ("you do like our..."). See [M5 Part 1](/meeting/5/part/part-1).',
      },
      {
        type: 'text',
        content:
          '**Step 9 — Recruiting.** Minimum **3 interviews**, ideally 5. **Not from your IT team** — you need people from the actual target audience. If you\'re doing Astral Symphony — gamers, not your developer friends. Length: 30–45 min each.',
      },
      {
        type: 'text',
        content:
          '**Step 10 — Conduct + analyze.** Record with consent. Use **think-aloud** + the "5 Whys" rule for deeper digging. After the sessions — **affinity map in Miro**: every insight = a separate sticky, clusters surface after the 3rd interview.',
      },
      {
        type: 'callout',
        variant: 'warning',
        content:
          '**Interview Golden Rule:** never prompt and never lead ("you like our new search, right?"). If a participant gets stuck — ask neutrally: "What did you expect to see?" or "What would you do if you were home alone?"',
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**📝 Artifacts 6–8:** interview guide (1 page) / 3 completed interview write-ups / affinity map with the top-3 insight clusters.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Phase 5 — Usability test (~2–3 hours)' },
      {
        type: 'text',
        content:
          'If phase 4 captures **"what they say"**, phase 5 captures **"what they actually do"**. Often these are different: people say they want X but do Y. Usability testing catches the gap.',
      },
      {
        type: 'text',
        content:
          '**Step 11 — Test plan.** Script with **3–5 tasks** (realistic scenarios, not instructions!). Good task example: "Imagine you want to buy running headphones. Find a suitable option." Bad: "Click Menu → Catalog → Electronics → Headphones." See [M4 Part 1](/meeting/4/part/part-1).',
      },
      {
        type: 'text',
        content:
          '**Step 12 — Conduct.** **5 users** (Nielsen rule: 5 people = ~85% of issues). Think-aloud protocol. Tools: [Lookback ↗](https://www.lookback.com/) / [Maze ↗](https://maze.co/) / [Zoom](https://zoom.us/) + OBS Studio for self-recording. Don\'t prompt!',
      },
      {
        type: 'text',
        content:
          '**Step 13 — Analyze.** **Prioritisation Matrix** (frequency × severity): Critical Blockers (high+high) get fixed first, Minor Polish (low+low) last. Then an **actionable report**: each issue = problem + severity + evidence (N/5) + recommendation + business impact.',
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**📝 Artifacts 9–10:** test plan (1 page with tasks + script) + actionable report with the top-3 issues, prioritisation matrix, and recommendations.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Phase 6 — From research to requirements (~2–3 hours)' },
      {
        type: 'text',
        content:
          'The final bridge: **research insights → User Stories → Story Map**. This is what separates "UX researcher on paper" from "UX researcher whose insights actually made it into development".',
      },
      {
        type: 'text',
        content:
          '**Step 14 — 5 User Stories.** Each in "As a [role], I want to [action], so that [value]" format. Each with **2–5 Acceptance Criteria in Given-When-Then**. Each passes **INVEST**. Each prioritized via **MoSCoW**. See [M5 Part 2](/meeting/5/part/part-2).',
      },
      {
        type: 'text',
        content:
          '**Step 15 — Story Map.** **Horizontally** — user journey stages (you can reuse the UJM stages). **Vertically** under each stage — your User Stories ranked top-down by priority. **Horizontal cut line** = MVP. Above the line goes into Release 1. Below — into follow-up.',
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**📝 Artifact 11:** 5 User Stories with AC + Story Map in Miro/Figma/PDF. This is the capstone\'s finale — it shows you didn\'t just run research, you translated it into a backlog ready for development.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Assembly + delivery (~15–30 min)' },
      {
        type: 'text',
        content:
          'Bring all **11 artifacts** into one document: **PDF / Notion page / Miro board**. Up front add a **1-page summary**: what you learned, what you\'re changing, expected impact on the metric from phase 1.',
      },
      {
        type: 'text',
        content:
          'Total ~10–20 pages. This is the **first piece in your UX portfolio** — design it cleanly (headers, numbering, artifact screenshots). At an interview this document tells the employer more than 5 courses on your resume.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Rubric — self-assessment' },
      {
        type: 'text',
        content:
          'Before calling the capstone done — walk through the rubric. **30 points max**, **21 points (70%) is the pass threshold**.',
      },
      {
        type: 'checklist',
        title: 'Rubric — 6 areas × 5 points each',
        items: [
          {
            text: '🧠 Persona Card',
            demo: '**1 pt** — name and role only. **3 pts** — + goals + frustrations. **5 pts** — + quote + traits + concrete context (where they live, what they do for money, how they use the product).',
          },
          {
            text: '❤️ Empathy Map',
            demo: '**1 pt** — 4 quadrants present. **3 pts** — + Pains/Gains. **5 pts** — filled with **concrete quotes from interviews**, not "general phrases".',
          },
          {
            text: '🗺 User Journey Map',
            demo: '**1 pt** — 5 labeled stages. **3 pts** — + touchpoints + emotion curve. **5 pts** — + pains + opportunities per stage. You can tell exactly where to fix.',
          },
          {
            text: '🎤 Interviews',
            demo: '**1 pt** — 1 interview conducted. **3 pts** — 3 interviews + raw notes. **5 pts** — 3 interviews + **affinity map with top-3 insight clusters** + participant quotes.',
          },
          {
            text: '🧪 Usability test',
            demo: '**1 pt** — test plan ready. **3 pts** — + conducted on 5 users + prioritisation matrix. **5 pts** — + **actionable report** with issue/severity/evidence/recommendation/business-metric impact.',
          },
          {
            text: '📋 User Stories + Story Map',
            demo: '**1 pt** — 3 User Stories with value. **3 pts** — + 2–5 AC in Given-When-Then. **5 pts** — + INVEST for each + MoSCoW priority + **Story Map with MVP cut line**.',
          },
        ],
      },
      { type: 'divider' },
      { type: 'heading', content: 'Common pitfalls — don\'t repeat them' },
      {
        type: 'before-after',
        title: 'Persona',
        before: {
          label: '❌ Wrong',
          description:
            '"I built the persona based on my developer friend." That\'s **not a target-audience persona**, that\'s you in a mirror. Every subsequent step then aims at your own team, not at the real user.',
        },
        after: {
          label: '✅ Right',
          description:
            'Persona = a composite of a **real** audience segment. Name, age, entry context, **concrete constraints** (time, budget, experience). If unsure — run 2–3 pre-interviews with the target audience and build the persona out of their stories.',
        },
      },
      {
        type: 'before-after',
        title: 'Interview recruiting',
        before: {
          label: '❌ Wrong',
          description:
            '"I interviewed 3 people from my own IT team and a designer." **The whole sample is biased**: colleagues think like you do, evaluate the product as professionals, not as users.',
        },
        after: {
          label: '✅ Right',
          description:
            'Recruit **from the persona\'s audience**: for Astral Symphony — gamers from forums and Discord servers; for e-commerce — actual shoppers from a marketplace; for SaaS — people from a specific industry. Budget $25–50 per session as compensation (M4 P1 checklist).',
        },
      },
      {
        type: 'before-after',
        title: 'User Stories',
        before: {
          label: '❌ Wrong',
          description:
            'All 5 User Stories for a single "admin" role (or "user"). You\'ll end up with tech tickets, not user stories. The team won\'t know **who** they\'re building for.',
        },
        after: {
          label: '✅ Right',
          description:
            'Each User Story targets a **specific segment** from the persona. For example: new player / experienced / churned / power user. Then the team sees which slice of the audience each story serves and where the gaps are.',
        },
      },
      {
        type: 'before-after',
        title: 'Story Map',
        before: {
          label: '❌ Wrong',
          description:
            '"Story Map = a flat list of 15 tasks." That\'s just a **backlog**, not a Story Map. No tie to the user journey, no MVP split, no priority per stage of the path.',
        },
        after: {
          label: '✅ Right',
          description:
            'Story Map = a **2D grid**: horizontally the journey stages (Discover → Onboard → Use → Habit), vertically under each — stories ranked top-down by priority. **Horizontal cut line** separates MVP from future. The team sees what\'s covered and where the gaps are in 20 minutes.',
        },
      },
      { type: 'divider' },
      { type: 'heading', content: '🎮 If you picked Astral Symphony' },
      {
        type: 'text',
        content:
          'For the gaming variant **half the artifacts already exist as a reference** — open [/recap/research](/recap/research) and walk through the 7-step Brawl Stars walkthrough with Artem. There you have filled-in examples of persona, UJM, hypotheses, the test, and the metrics. Your job is to walk **the same path on Astral Symphony**, not to copy verbatim.',
      },
      {
        type: 'key-concepts',
        concepts: [
          {
            term: 'Pre-baked hypothesis',
            definition:
              '"Astral Symphony F2P players churn on day 3 because they don\'t catch the music-combat connection." This is the course\'s focal hypothesis — verify it.',
          },
          {
            term: 'Persona anchor',
            definition:
              'Artem (28, F2P, metro 35 min × 2, mid-tier brawler main). Use him from the [/meeting/3/template](/meeting/3/template) template and adapt to your hypothesis.',
          },
          {
            term: 'Ready success metric',
            definition:
              'F2P-segment D7 retention (baseline ~68% → target ~73%). Convert the delta into financial impact, just like the Spotify case study in M5 P2.',
          },
          {
            term: 'Ready playtest template',
            definition:
              'Post-session Google Form (RU+EN versions in this week\'s session notes) — use as the survey tool in phase 5.',
          },
        ],
      },
      { type: 'divider' },
      { type: 'heading', content: 'What\'s next' },
      {
        type: 'text',
        content:
          'After the capstone — **Meeting 6: Information Architecture & Sitemaps**. There you\'ll take the User Stories from this project and design the navigation structure to support them. UJM + Story Map from the capstone is the direct input to the next module.',
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          '**Save your artifacts.** Don\'t toss the files after submission — Meeting 6, 7, 8 will keep asking you to return to the persona, UJM, and stories for follow-up design steps. The capstone is not the finish — it\'s the **input** for the rest of the course.',
      },
    ],
    backLabel: 'Back to Meeting 5',
    nextLabel: 'Go to Meeting 6',
  },
}

export default function HomeworkPage() {
  const { lang } = useLanguage()
  const c = CONTENT[lang]

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-[1440px] mx-auto px-6 py-3 flex items-center gap-4">
          <Link
            href="/meeting/5/part/part-2"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {c.backLabel}
          </Link>
          <div className="flex-1" />
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <GraduationCap className="w-4 h-4" />
            Capstone · Module 1
          </span>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-[1440px] mx-auto px-6 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{c.title}</h1>
          <p className="text-lg text-muted-foreground">{c.tagline}</p>
          <p className="mt-4 text-base leading-relaxed">{c.intro}</p>
        </header>

        <div className="space-y-6">
          {c.sections.map((section, i) => (
            <SectionRenderer key={i} section={section} />
          ))}
        </div>

        {/* Navigation */}
        <nav className="mt-12 pt-6 border-t flex items-center justify-between gap-4">
          <Link href="/meeting/5/part/part-2">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {c.backLabel}
            </Button>
          </Link>
          <Link href="/meeting/6">
            <Button className="gap-2">
              {c.nextLabel}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </nav>
      </article>
    </div>
  )
}
