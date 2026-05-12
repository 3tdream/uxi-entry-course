'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionRenderer } from '@/components/course/section-renderer'
import { QuizSection } from '@/components/course/quiz'
import { useLanguage } from '@/lib/language'
import type { Section, Quiz } from '@/data/types'

// ---- Content (RU + EN) ----

type RecapContent = {
  title: string
  tagline: string
  intro: string
  sections: Section[]
  quizHeading: string
  quiz: Quiz[]
  backLabel: string
  nextLabel: string
}

const CONTENT: Record<'ru' | 'en', RecapContent> = {
  ru: {
    title: 'Research Loop: M3 → M4',
    tagline: 'От «кто этот пользователь?» до «работает ли наш дизайн и сколько это стоит бизнесу?» — за 7 шагов.',
    intro: 'Два урока сложились в один производственный конвейер. M3 строит модель пользователя, M4 проверяет, что дизайн ей соответствует. Каждый шаг ниже даёт артефакт, на котором стоит следующий. Это и есть «закономерная цепочка для усвоения» — не список тем, а последовательность инструментов.',
    sections: [
      {
        type: 'diagram',
        title: 'The Research Loop — 7 шагов',
        description:
          'M3 строит модель пользователя, M4 проверяет, что дизайн ей соответствует. Цикл замыкается через триангуляцию и итерацию.',
        items: [
          '1. EMPATHIZE — Кто пользователь? → Persona + Empathy Map + JTBD',
          '2. MAP — Где он спотыкается? → User Journey Map, 6 stages',
          '3. HYPOTHESIZE — Чем заменить трение? (мост M3 → M4)',
          '4. TEST — Работает ли дизайн? → 5 users + think-aloud + task scenarios',
          '5. EVALUATE — Нарушает ли правила? → 10 эвристик + heuristic evaluation',
          '6. MEASURE — Какие числа? → TCR, SUS, NPS, CSAT + GA/Hotjar/Mixpanel',
          '7. TRIANGULATE & ITERATE — Три линзы (UX Triad) + Critical Blockers first + iteration > volume',
        ],
      },
      { type: 'divider' },
      { type: 'heading', content: 'Шаг 1 — EMPATHIZE: Кто пользователь?' },
      {
        type: 'text',
        content:
          '**Артефакт:** Persona + Empathy Map + JTBD-формулировка. Это твоя «модель пользователя» — без неё все следующие шаги стреляют в темноту. На этом шаге ты впервые формулируешь, **что у пользователя в голове, в сердце и в руках**.',
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          'Углубиться: [M3 Part 1 — Персоны и эмпатия](/meeting/3/part/part-1).',
      },
      { type: 'heading', content: 'Шаг 2 — MAP: Где он спотыкается?' },
      {
        type: 'text',
        content:
          '**Артефакт:** User Journey Map с 6 этапами (Awareness → Consideration → Decision → Onboarding → Use → Loyalty), touchpoints и эмоциональной кривой. Здесь ты переходишь от **статичной картинки** (persona) к **истории во времени** — и видишь, где конкретно надо чинить.',
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          'Углубиться: [M3 Part 2 — User Journey Map](/meeting/3/part/part-2).',
      },
      { type: 'heading', content: 'Шаг 3 — HYPOTHESIZE: чем заменить трение?' },
      {
        type: 'text',
        content:
          'Это **мост** между M3 и M4. На основе UJM ты формулируешь рабочие гипотезы: «Если убрать поле X на стадии Y, конверсия Z вырастет на N%». Гипотеза = задача для следующего шага.',
      },
      { type: 'heading', content: 'Шаг 4 — TEST: работает ли дизайн?' },
      {
        type: 'text',
        content:
          '**Артефакт:** результаты юзабилити-теста (5 пользователей) с расшифровкой think-aloud, найденными проблемами и серьёзностью. Здесь работают: правило 5 пользователей (~85% проблем), Format Matrix (когда модерируемое, когда нет), Golden Rule (никогда не подсказывай), Task formulation (сценарий ≠ инструкция), Prioritisation Matrix (Critical Blockers первыми) и итерация > объём (3×5 > 1×15). Финал — **actionable report**: issue + severity + evidence + recommendation + business impact.',
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          'Углубиться: [M4 Part 1 — Юзабилити-тестирование](/meeting/4/part/part-1).',
      },
      { type: 'heading', content: 'Шаг 5 — EVALUATE: нарушает ли правила?' },
      {
        type: 'text',
        content:
          '**Артефакт:** список нарушений эвристик Нильсена по приоритету. Heuristic evaluation — экспертный метод: 3-5 оценщиков за 2 часа находят ~75% проблем. Не замена юзабилити-теста, но **самый дешёвый и быстрый** способ получить первый список находок. 10 эвристик легче помнить, сгруппировав в 5 тем: System Transparency, User Agency, Error Management, Cognitive Friction, Signal to Noise.',
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          'Углубиться: [M4 Part 2 — Эвристики Нильсена](/meeting/4/part/part-2).',
      },
      { type: 'heading', content: 'Шаг 6 — MEASURE: какие числа?' },
      {
        type: 'text',
        content:
          '**Артефакт:** дашборд с метриками. Базовый набор: **TCR ≥ 78%**, **Error Rate → 0**, **Time on Task** (сравнение pre/post), **SUS > 68** (avg) или **> 80** (excellent), **NPS** (% промоутеров − % критиков), **CSAT** (1-5 сразу после действия). Инструменты по фокусу: **GA — The What** (страницы/трафик), **Hotjar — The Where** (heatmaps + сессии), **Mixpanel — The Who** (события + воронки).',
      },
      { type: 'heading', content: 'Шаг 7 — TRIANGULATE & ITERATE: замыкаем цикл' },
      {
        type: 'text',
        content:
          '**UX Triad:** Analytics × Observation × Heuristics. Один источник врёт, два показывают, три ставят диагноз. После триангуляции — фикс **Critical Blockers** первыми, потом следующий раунд теста. Итерация даёт компаунд: каждый раунд вскрывает новый слой проблем (см. кейсы Booking.com и Тинькофф).',
      },
      { type: 'divider' },
      // ================================================
      // LIVE EXAMPLE — Brawl Stars walkthrough (Артём)
      // ================================================
      { type: 'heading', content: 'Живой пример: Артём играет в Brawl Stars' },
      {
        type: 'text',
        content:
          'Это **сквозной разбор**: применяем все 7 шагов к одному продукту и одному пользователю. Не настоящий проект Supercell — это **наша гипотетическая команда** делает редизайн **главного экрана Brawl Stars**, потому что после обновления 56.x игроки жалуются на «перегруз» и метрики просели. Данные — реалистичные порядки величин (на базе кейсов Booking.com и Тинькофф из курса). Те же поля **точь-в-точь** в [`/meeting/3/template`](/meeting/3/template) — после разбора пройди тот же путь на своём продукте.',
      },
      { type: 'subheading', content: 'Шаг 1 — EMPATHIZE: кто наш Артём?' },
      {
        type: 'user-persona',
        persona: {
          name: 'Артём',
          age: 28,
          role: 'Junior Frontend / маркетолог · мейн Brawl Stars 1.5 года',
          bio:
            'Москва, ездит в офис на метро 35 минут в одну сторону. Играет утром и вечером в дороге, иногда +20 минут в обед. Уровень — средний (трофеи ~22k), мейн Mortis и Stu. Платит редко: 1-2 раза за сезон за Brawl Pass, если до пятницы успевает доиграть челлендж.',
          goals: [
            'Убить дорогу с дозой дофамина — без скучного скролла ленты',
            'Прокачать любимого brawler-а до Power 11 + докинуть Hypercharge',
            'Не пропустить сезонный челлендж (Brawl Pass даёт ROI только на полной шкале)',
          ],
          frustrations: [
            'Матч > 3 минут — не успевает доиграть, бросает команду, теряет трофеи',
            'Связь рвётся в туннеле между станциями — disconnect = −20 трофеев',
            'Star Drop рандомен и часто даёт «мусор» (pin / dupe brawler)',
            'Главный экран после 56.x обновления — 11 CTAs одновременно, кнопка Play «уехала»',
          ],
          traits: [
            { label: 'Девайс', value: 'iPhone 14 + AirPods' },
            { label: 'Время игры', value: '35 мин × 2 в метро + иногда обед' },
            { label: 'Сессия', value: '2-3 матча подряд (~7 мин)' },
            { label: 'Spend', value: '$5-10/мес, только Brawl Pass' },
            { label: 'Привычка', value: 'Открывает игру до того, как сел в вагон' },
          ],
          quote:
            'Я не хочу tutorial каждый патч. Я хочу зайти, нажать Play, сыграть один матч и доехать до офиса.',
        },
      },
      { type: 'subheading', content: 'Шаг 2 — MAP: путь Артёма за одну поездку в метро' },
      {
        type: 'text',
        content:
          'UJM по **5 этапам из template** — те же стадии, которые ты увидишь в [`/meeting/3/template`](/meeting/3/template) как placeholder hints. Сценарий: «Утренний коммьют, понедельник, 08:42 — игрок едет в офис».',
      },
      {
        type: 'columns',
        columns: [
          {
            title: '1️⃣ Триггер — скука в метро',
            items: [
              '📍 Touchpoint: телефон в руке, ещё на эскалаторе',
              '😐 Эмоция: «надо чем-то занять 35 мин»',
              '⚠️ Pain: соцсети надоели, YouTube жрёт мобильный',
              '💡 Opportunity: home-screen widget «Quick Match in 1 tap»',
            ],
          },
          {
            title: '2️⃣ Discovery — открывает Brawl Stars',
            items: [
              '📍 Touchpoint: app icon → home screen игры',
              '😕 Эмоция: «опять reshuffled UI, где Play?»',
              '⚠️ Pain: 11 CTAs (Brawl Pass / Star Drop / Shop / Events / Quests / News / Mastery / Lobby / Friends / Settings / Play)',
              '💡 Opportunity: убрать 6 CTAs из above-the-fold, оставить Play + 3 актуальных',
            ],
          },
          {
            title: '3️⃣ Install + первая сессия (== match start)',
            items: [
              '📍 Touchpoint: режим Gem Grab / brawler picker',
              '😤 Эмоция: «че, опять надо проверить, какой герой готов к Hypercharge?»',
              '⚠️ Pain: 32с от тапа на app до начала матча (медленный matchmaking + brawler swap)',
              '💡 Opportunity: «Quick Resume» — последний brawler + последний режим в 1 тапе',
            ],
          },
          {
            title: '4️⃣ Hooked — 3 матча подряд',
            items: [
              '📍 Touchpoint: results → rewards → home → play again',
              '😊 Эмоция: «ещё один, успею до Маяковской»',
              '⚠️ Pain: между match-end и rewards 4-7с loading без индикатора',
              '💡 Opportunity: skeleton loader + auto-rematch button (как у Clash Royale)',
            ],
          },
          {
            title: '5️⃣ Habit или churn',
            items: [
              '📍 Touchpoint: тоннель → disconnect → возврат в lobby',
              '😡 Эмоция: «−20 трофеев из-за лагов, не мои руки»',
              '⚠️ Pain: нет «offline-safe» режима для метро (тренировка против ботов)',
              '💡 Opportunity: «Subway Mode» — оффлайн-тренировка, не считается в trophy ladder',
            ],
          },
        ],
      },
      { type: 'subheading', content: 'Шаг 3 — HYPOTHESIZE: 3 рабочие гипотезы из UJM' },
      {
        type: 'key-concepts',
        concepts: [
          {
            term: 'H1: Compact Home (атака на pain №2 — 11 CTAs)',
            definition:
              '«Если уберём 6 второстепенных CTAs выше fold на home-screen и оставим только Play + 3 актуальных (Brawl Pass / Daily Quest / Last Brawler), Time on Task до начала матча сократится с 32с до < 15с».',
          },
          {
            term: 'H2: Quick Resume (атака на pain №3)',
            definition:
              '«Если добавим button "Resume last match-up" (последний brawler + режим в 1 тапе), Task Completion Rate "start match in <15s" вырастет с 67% до 85% для daily players».',
          },
          {
            term: 'H3: Subway Mode (атака на pain №5 — disconnect)',
            definition:
              '«Если добавим offline-тренировочный режим без trophy impact, D7 retention у "metro commuter" сегмента вырастет с 68% до 73%, NPS — с +18 до +25».',
          },
        ],
      },
      { type: 'subheading', content: 'Шаг 4 — TEST: модерируемый тест 5 пользователей' },
      {
        type: 'columns',
        columns: [
          {
            title: '🎯 Setup',
            items: [
              'Выборка: 5 daily-игроков, 22-35 лет, играют в метро',
              'Задача: «Открой Brawl Stars и сыграй один матч Gem Grab, как утром»',
              'Формат: moderated, screen recording, think-aloud (Lookback)',
              'Длительность: 15 мин × 5 = 75 мин активного тестирования',
              'Прототип: Figma click-through нового home + кнопки Quick Resume',
            ],
          },
          {
            title: '🔍 Топ-3 находки',
            items: [
              '5/5 не заметили новое поле Star Drop на текущем home (H1 violation)',
              '4/5 искали кнопку Play > 5 секунд после обновления — она переехала (H4 violation)',
              '3/5 случайно тапнули Star Drop вместо Play — overlap CTAs (H5 violation)',
              'Time on Task: avg 32 секунды от app open до in-match (target ≤ 15с)',
              'Frustration peak: между match-end и rewards (4-7с loading без индикатора)',
            ],
          },
          {
            title: '💬 Цитаты из think-aloud',
            items: [
              '«Я уже 5 секунд ищу Play. Раньше она была вот тут, слева внизу...»',
              '«Это что, новый shop? Я хотел просто сыграть, а оно ведёт в магазин»',
              '«Ладно, забил, открою Tinder, потом верну»',
              '«Star Drop — это типа казино? Я не понял, что я выиграл»',
              '«Когда я успею-то, мне же выходить через 4 остановки»',
            ],
          },
        ],
      },
      { type: 'subheading', content: 'Шаг 5 — EVALUATE: что нарушено в эвристиках Нильсена' },
      {
        type: 'columns',
        columns: [
          {
            title: '❌ H8 — Aesthetic & Minimalist (Critical)',
            items: [
              'Что: 11 CTAs одновременно above-the-fold',
              'Доказательство: 4/5 confused в думаалуд, GA drop-off 18% на home',
              'Влияние: блокирует основную задачу (start match)',
              'Фикс: убрать 6 CTAs ниже scroll, оставить 4 актуальных',
            ],
          },
          {
            title: '❌ H4 — Consistency & Standards (High)',
            items: [
              'Что: кнопка Play переехала после обновления 56.x',
              'Доказательство: 4/5 искали > 5 секунд, App Store отзывы упомянают',
              'Влияние: ломает muscle memory daily-игроков',
              'Фикс: вернуть Play в нижнюю-левую зону (как было до 56.x)',
            ],
          },
          {
            title: '❌ H1 — Visibility of Status (Med)',
            items: [
              'Что: нет clear loading state match-end → results (4-7с тишина)',
              'Доказательство: 3/5 кликали повторно, думая, что зависло',
              'Влияние: воспринимаемая «лагучесть» приложения',
              'Фикс: skeleton loader + progress dots на screen-transition',
            ],
          },
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          '**Prioritisation Matrix**: H8 = Critical Blocker (high freq × high severity → фиксим первым). H4 = High (ломает старых игроков). H1 = Medium polish. **Iteration > Volume**: после раунда 1 + фиксов проводим раунд 2 на 5 новых игроках — он вскроет следующий слой (вероятно, H6 / Recognition по brawler picker).',
      },
      { type: 'subheading', content: 'Шаг 6 — MEASURE: какие числа считаем' },
      {
        type: 'diagram',
        title: 'Метрики, которые сдвинутся после редизайна home-screen',
        description:
          'Базовые показатели до фикса + цель после фикса (TCR, Time on Task — измеряем в тесте; D7, NPS, App Store — в проде после A/B).',
        items: [
          'Task Completion Rate (start match ≤ 15с): baseline 67% → цель 89%',
          'Time on Task (app open → in match): baseline 32с → цель 14с',
          'Error Rate (mistapped CTAs до Play): baseline 1.4/session → цель ≤ 0.3',
          'D7 retention (metro commuter сегмент): baseline 68% → цель 73%',
          'SUS (post-test, после A/B на проде): baseline 58 → цель 78',
          'NPS: baseline +18 → цель +26',
          'App Store rating (после 30 дней с фикса): baseline 4.0 → цель 4.3',
        ],
      },
      { type: 'subheading', content: 'Шаг 7 — TRIANGULATE & ITERATE: три линзы соглашаются' },
      {
        type: 'columns',
        columns: [
          {
            title: '📊 Analytics (GA — The Where)',
            items: [
              'Drop-off rate на home 18% (app open → match start)',
              'Avg session time после 56.x просел с 8.4 мин до 6.7 мин',
              'Star Drop CTR 47% (≈ половина «случайно»)',
            ],
          },
          {
            title: '👁️ Observation (Hotjar / тест — The What)',
            items: [
              'Думаалуд: 4/5 «не вижу Play» на думааалуд',
              'Heatmap пальцев показывает скопление в области бывшего Play (нижний-левый угол)',
              'Session replay: 3 из 5 — мисс-тап Star Drop первым касанием',
            ],
          },
          {
            title: '🧪 Heuristics (Nielsen — The Why)',
            items: [
              'H8 — Aesthetic & Minimalist (overload)',
              'H4 — Consistency (Play переехала)',
              'H1 — Visibility (loading без статуса)',
            ],
          },
        ],
      },
      {
        type: 'before-after',
        title: 'After 1 round of redesign + retest (гипотетический итог)',
        before: {
          label: 'Baseline (post-56.x обновление, ноябрь)',
          description:
            'TCR 67%, Time on Task 32с, D7 retention 68%, SUS 58, NPS +18, App Store 4.0. На home — 11 CTAs, Play переехала, нет loading state. Метро-сегмент жалуется в App Store на «лагает» и «непонятно».',
        },
        after: {
          label: 'Post-fix (после 3 раундов × 5 пользователей)',
          description:
            'TCR 89%, Time on Task 14с, D7 retention 73%, SUS 78, NPS +26, App Store 4.3. На home — 4 CTAs above-the-fold + Play в привычной зоне. Subway Mode добавлен в follow-up спринт. **Цена**: 75 мин теста × 3 раунда + 2 спринта инженерных правок vs +5 п.п. D7 retention и +$1.2M ARR (грубая оценка от Brawl Stars ARPU).',
        },
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**Главное наблюдение**: ни одна линза в отдельности не дала бы полной картины. Analytics показал ГДЕ (drop-off 18%), think-aloud показал ЧТО (не видят Play), эвристика объяснила ПОЧЕМУ (нарушены H8 + H4). Один источник — гипотеза, два — догадка, **три — диагноз**.',
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          '**Твой ход.** Открой [`/meeting/3/template`](/meeting/3/template), скачай страницу (Ctrl+P → Save as PDF), и пройди эти 7 шагов на **своём** продукте — игре, банковском приложении, e-commerce, чём угодно. Заполни Persona Card → Empathy Map → UJM → шаблон интервью. Это уже не теория, а первый артефакт твоего research-портфолио.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Чек-лист концептов' },
      {
        type: 'checklist',
        title: '🧠 Понять пользователя (M3 Part 1)',
        items: [
          'Persona: имя, возраст, роль, цели, фрустрации, цитата',
          'Empathy Map: 4 квадранта (Thinks / Says / Feels / Does) + Pains/Gains',
          'JTBD-формула: «Когда [ситуация], я хочу [мотивация], чтобы [результат]»',
        ],
      },
      {
        type: 'checklist',
        title: '🗺️ Найти трение (M3 Part 2)',
        items: [
          'User Journey Map: 6 стадий (Awareness → Consideration → Decision → Onboarding → Use → Loyalty)',
          'Touchpoint (где встречается с продуктом) vs Pain point (где спотыкается)',
          'Эмоциональная кривая — где злится, где приятно удивлён',
        ],
      },
      {
        type: 'checklist',
        title: '🧪 Проверить дизайн (M4 Part 1)',
        items: [
          'Правило 5 пользователей (~85% проблем за один раунд)',
          'Модерируемое vs немодерируемое — Format Matrix',
          'Think-aloud + Golden Rule (никогда не подсказывай)',
          'Task formulation: реалистичный сценарий вместо инструкции',
          '10-step lifecycle: Planning → Execution → Action',
          'Prioritisation Matrix — Critical Blockers первыми',
          'Iteration > Volume: 3×5 > 1×15',
          'Actionable report: issue + severity + evidence + recommendation + impact',
        ],
      },
      {
        type: 'checklist',
        title: '📊 Оценить и измерить (M4 Part 2)',
        items: [
          '10 эвристик Нильсена в 5 тем',
          'Heuristic evaluation: 3-5 экспертов, ~75% проблем за 2 часа',
          'SUS 0-100 (avg 68, > 80 excellent)',
          'NPS = % промоутеров − % критиков',
          'CSAT 1-5 сразу после действия',
          'Task Completion Rate ≥ 78%',
          'Error Rate, Time on Task — pre/post сравнение',
          'GA / Hotjar / Mixpanel — The What / The Where / The Who',
          'UX Triad: Analytics × Observation × Heuristics',
        ],
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**Реальные доказательства:** Booking.com — 3 раунда × 5 пользователей дали +16 п.п. конверсии формы и −25% support tickets. Тинькофф — heuristic evaluation 15 экранов, 8 критических фиксов: App Store 3.2→4.6, SUS 58→82, Time on Transfer 45→18с, NPS +12→+45.',
      },
    ],
    quizHeading: 'Mini-quiz: связи M3 ↔ M4',
    quiz: [
      {
        question: 'Какой артефакт связывает M3 и M4 — то, что ты делаешь ПОСЛЕ построения UJM и ДО начала юзабилити-теста?',
        options: [
          { id: 'a', text: 'Финальный визуальный дизайн' },
          { id: 'b', text: 'Гипотеза изменения: «Если уберём X на стадии Y, конверсия Z вырастет на N%»' },
          { id: 'c', text: 'Список багов в Jira' },
          { id: 'd', text: 'Отчёт для инвесторов' },
        ],
        correctId: 'b',
        explanation:
          'Шаг 3 — HYPOTHESIZE. UJM показал точку трения (pain point), теперь надо сформулировать рабочую гипотезу: что именно поменяем и какую метрику этим сдвинем. Без гипотезы юзабилити-тест проверяет «нравится ли», а с гипотезой — «работает ли».',
      },
      {
        question: 'Из M3 ты получаешь persona и UJM. Что ИЗ M4 ты бы взял первым, чтобы дешевле всего проверить найденные на UJM боли?',
        options: [
          { id: 'a', text: 'Опрос на 500 человек через Mixpanel' },
          { id: 'b', text: 'Эвристическая оценка 3 экспертами по 10 эвристикам (~2 часа, ~75% проблем)' },
          { id: 'c', text: 'Запуск A/B-теста на проде' },
          { id: 'd', text: 'NPS-замер по всей базе' },
        ],
        correctId: 'b',
        explanation:
          'Heuristic evaluation — самый быстрый и дешёвый первый фильтр. Не заменяет тест с пользователями (см. шаг 4), но за один присест даёт первый список нарушений. Юзабилити-тест с 5 пользователями (M4 P1) — следующий шаг, более глубокий.',
      },
      {
        question: 'Кейс Booking.com показывает применение почти всех 7 шагов. На каком шаге родился их главный инсайт о поле «Имя гостя»?',
        options: [
          { id: 'a', text: 'EMPATHIZE — было видно в persona' },
          { id: 'b', text: 'MEASURE — нашли в Google Analytics' },
          { id: 'c', text: 'TEST — увидели на модерируемом тесте с 5 участниками + think-aloud' },
          { id: 'd', text: 'EVALUATE — эксперт нашёл при эвристической оценке' },
        ],
        correctId: 'c',
        explanation:
          'Pain point «поле имя гостя путали с именем бронирующего» нашёлся именно в живой сессии think-aloud — пользователь вслух проговорил, что не понял, чьё имя вводить. Аналитика покажет «многие бросают форму», но не «почему именно тут».',
      },
      {
        question: 'Где в Research Loop приоритезируется список проблем?',
        options: [
          { id: 'a', text: 'На шаге EMPATHIZE (persona)' },
          { id: 'b', text: 'На шаге TEST — через Prioritisation Matrix (частота × серьёзность)' },
          { id: 'c', text: 'На шаге MEASURE — через NPS' },
          { id: 'd', text: 'Не приоритизируются — фиксим всё подряд' },
        ],
        correctId: 'b',
        explanation:
          'После теста (шаг 4) ты систематизируешь находки: проблемы, с которыми столкнулось много пользователей И которые блокируют задачу — Critical Blockers — идут первыми. Это и есть Prioritisation Matrix.',
      },
      {
        question: 'Команда сделала редизайн. Какие из метрик подтверждают, что UJM-боль реально снята?',
        options: [
          { id: 'a', text: 'NPS вырос — этого достаточно' },
          { id: 'b', text: 'Time on Task сократился, TCR вырос, Error Rate упал — комбинация метрик' },
          { id: 'c', text: 'Дизайн получил награду на Awwwards' },
          { id: 'd', text: 'В команде стало больше людей' },
        ],
        correctId: 'b',
        explanation:
          'Шаг MEASURE требует комбинации метрик. NPS — отложенная и шумная (зависит от маркетинга). А вот связка Time on Task ↓ + TCR ↑ + Error Rate ↓ + (опционально) SUS ↑ — это прямое доказательство, что юзабилити улучшилось.',
      },
      {
        question: 'UX Triad — это:',
        options: [
          { id: 'a', text: 'Три ноги табуретки UX: эстетика, эргономика, эффективность' },
          { id: 'b', text: 'Пересечение Analytics (The Where) × Observation (The What) × Heuristics (The Why) — настоящая ясность только там, где они совпадают' },
          { id: 'c', text: 'Три уровня дизайн-системы: токены, компоненты, паттерны' },
          { id: 'd', text: 'Три UX-метрики: SUS, NPS, CSAT' },
        ],
        correctId: 'b',
        explanation:
          'UX Triad из M4 P2: один источник врёт, два показывают, три — ставят диагноз. Аналитика говорит ГДЕ проблема, эвристика — ПОЧЕМУ она проблема, юзабилити-тест — ЧТО конкретно происходит в голове у пользователя.',
      },
      {
        question: 'Почему 3 раунда теста по 5 пользователей лучше одного раунда на 15?',
        options: [
          { id: 'a', text: 'Дешевле в три раза' },
          { id: 'b', text: 'Каждый раунд исправлений вскрывает новый слой проблем; один раунд на 15 — все упрутся в один и тот же верхний блокер' },
          { id: 'c', text: 'Это требование GDPR' },
          { id: 'd', text: 'Так быстрее закончить тест' },
        ],
        correctId: 'b',
        explanation:
          'Iteration Beats Volume. После исправления верхнего блокера тест №2 покажет следующий слой проблем — раньше их закрывал собой первый блокер. 15 в одном раунде = 15 раз про одну и ту же поверхностную проблему.',
      },
      {
        question: 'Что отличает actionable-отчёт от расплывчатого?',
        options: [
          { id: 'a', text: 'Просто его длина — actionable длиннее' },
          { id: 'b', text: 'Конкретика (issue + UI-элемент) + серьёзность + доказательство (N/5) + рекомендация + ожидаемое влияние на бизнес-метрику' },
          { id: 'c', text: 'Использование смайликов' },
          { id: 'd', text: 'Подпись CEO' },
        ],
        correctId: 'b',
        explanation:
          'Actionable report переводит UX-наблюдение в язык продукта. «Юзабилити плохое» — никто не починит. «Кнопка #1, 4/5 не нашли, рекомендация: закрепить, ожидание +15% к конверсии корзины» — это уже задача в спринт.',
      },
    ],
    backLabel: 'К Meeting 4',
    nextLabel: 'Перейти к Meeting 5',
  },
  en: {
    title: 'Research Loop: M3 → M4',
    tagline: 'From "who is this user?" to "does our design work and what does it cost the business?" — in 7 steps.',
    intro: 'These two lessons fold into a single production pipeline. M3 builds the user model, M4 proves the design matches it. Each step below produces the artifact the next one needs. This is the "predictable absorption chain" — not a list of topics, but a sequence of tools.',
    sections: [
      {
        type: 'diagram',
        title: 'The Research Loop — 7 steps',
        description:
          'M3 builds the user model, M4 validates that the design matches it. The loop closes through triangulation and iteration.',
        items: [
          '1. EMPATHIZE — Who is the user? → Persona + Empathy Map + JTBD',
          '2. MAP — Where do they trip? → User Journey Map, 6 stages',
          '3. HYPOTHESIZE — How to replace friction? (bridge M3 → M4)',
          '4. TEST — Does the design work? → 5 users + think-aloud + task scenarios',
          '5. EVALUATE — Does it break the rules? → 10 heuristics + heuristic evaluation',
          '6. MEASURE — What do the numbers say? → TCR, SUS, NPS, CSAT + GA/Hotjar/Mixpanel',
          '7. TRIANGULATE & ITERATE — Three lenses (UX Triad) + Critical Blockers first + iteration > volume',
        ],
      },
      { type: 'divider' },
      { type: 'heading', content: 'Step 1 — EMPATHIZE: Who is the user?' },
      {
        type: 'text',
        content:
          '**Artifact:** Persona + Empathy Map + JTBD statement. This is your "user model" — without it every next step shoots in the dark. Here you first articulate **what\'s in the user\'s head, heart, and hands**.',
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          'Go deeper: [M3 Part 1 — Personas & Empathy](/meeting/3/part/part-1).',
      },
      { type: 'heading', content: 'Step 2 — MAP: Where do they trip?' },
      {
        type: 'text',
        content:
          '**Artifact:** User Journey Map with 6 stages (Awareness → Consideration → Decision → Onboarding → Use → Loyalty), touchpoints, and an emotion curve. Here you move from a **static picture** (persona) to a **story over time** — and you can see exactly where to fix.',
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          'Go deeper: [M3 Part 2 — User Journey Map](/meeting/3/part/part-2).',
      },
      { type: 'heading', content: 'Step 3 — HYPOTHESIZE: how to replace the friction?' },
      {
        type: 'text',
        content:
          'This is the **bridge** from M3 to M4. Using the UJM, you formulate working hypotheses: "If we remove field X at stage Y, conversion Z will rise by N%." A hypothesis = a task for the next step.',
      },
      { type: 'heading', content: 'Step 4 — TEST: does the design work?' },
      {
        type: 'text',
        content:
          '**Artifact:** usability test results (5 users) with think-aloud transcripts, identified issues, and severity ratings. Tools at play: 5-user rule (~85% of issues), Format Matrix (moderated vs unmoderated), Golden Rule (never prompt), Task formulation (scenario ≠ instruction), Prioritisation Matrix (Critical Blockers first), and iteration > volume (3×5 > 1×15). The deliverable is an **actionable report**: issue + severity + evidence + recommendation + business impact.',
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          'Go deeper: [M4 Part 1 — Usability Testing](/meeting/4/part/part-1).',
      },
      { type: 'heading', content: 'Step 5 — EVALUATE: does it break the rules?' },
      {
        type: 'text',
        content:
          '**Artifact:** a prioritised list of Nielsen heuristic violations. Heuristic evaluation is an expert method: 3-5 evaluators in 2 hours uncover ~75% of issues. It does NOT replace usability testing — but it is the **cheapest and fastest** way to produce a first findings list. Remember the 10 heuristics by grouping them into 5 themes: System Transparency, User Agency, Error Management, Cognitive Friction, Signal to Noise.',
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          'Go deeper: [M4 Part 2 — Nielsen Heuristics](/meeting/4/part/part-2).',
      },
      { type: 'heading', content: 'Step 6 — MEASURE: what do the numbers say?' },
      {
        type: 'text',
        content:
          '**Artifact:** a metrics dashboard. The baseline set: **TCR ≥ 78%**, **Error Rate → 0**, **Time on Task** (pre/post comparison), **SUS > 68** (avg) or **> 80** (excellent), **NPS** (% promoters − % detractors), **CSAT** (1-5 right after the action). Tools by focus: **GA — The What** (pages/traffic), **Hotjar — The Where** (heatmaps + sessions), **Mixpanel — The Who** (events + funnels).',
      },
      { type: 'heading', content: 'Step 7 — TRIANGULATE & ITERATE: close the loop' },
      {
        type: 'text',
        content:
          '**UX Triad:** Analytics × Observation × Heuristics. One source lies, two suggest, three diagnose. After triangulation — fix **Critical Blockers** first, then run the next round of testing. Iteration compounds: each round uncovers a new layer of issues (see Booking.com and Tinkoff case studies).',
      },
      { type: 'divider' },
      // ================================================
      // LIVE EXAMPLE — Brawl Stars walkthrough (Artem)
      // ================================================
      { type: 'heading', content: 'Live example: Artem plays Brawl Stars' },
      {
        type: 'text',
        content:
          'A **full walkthrough**: applying all 7 steps to one product and one user. This is not a real Supercell project — it\'s **our hypothetical team** redesigning the **Brawl Stars home screen** because after update 56.x players complain about "clutter" and the metrics dropped. Numbers are realistic orders of magnitude (anchored on the Booking.com and Tinkoff cases from the course). The same fields are mirrored **one-to-one** in [`/meeting/3/template`](/meeting/3/template) — after this walkthrough, run the same loop on your own product.',
      },
      { type: 'subheading', content: 'Step 1 — EMPATHIZE: who is Artem?' },
      {
        type: 'user-persona',
        persona: {
          name: 'Artem',
          age: 28,
          role: 'Junior Frontend / Marketing · Brawl Stars main for 1.5 years',
          bio:
            'Lives in Moscow, commutes to the office by metro 35 minutes each way. Plays in the morning and evening on the train, sometimes +20 minutes at lunch. Mid-tier skill (~22k trophies), mains Mortis and Stu. Spends rarely: 1-2 Brawl Pass purchases per season, only if he can finish the weekly challenge by Friday.',
          goals: [
            'Kill the commute with a dopamine drip — no boring social-media scroll',
            'Level his favorite brawler to Power 11 and stack Hypercharge',
            'Not miss the seasonal challenge (Brawl Pass only ROIs on the full track)',
          ],
          frustrations: [
            'A match > 3 minutes — can\'t finish in time, abandons the team, loses trophies',
            'Connection drops in metro tunnels — disconnect = −20 trophies',
            'Star Drop feels random and often gives "junk" (pin / dupe brawler)',
            'Home screen after 56.x — 11 CTAs at once, the Play button "moved"',
          ],
          traits: [
            { label: 'Device', value: 'iPhone 14 + AirPods' },
            { label: 'Play time', value: '35 min × 2 in metro + occasional lunch' },
            { label: 'Session', value: '2-3 matches in a row (~7 min)' },
            { label: 'Spend', value: '$5-10/month, Brawl Pass only' },
            { label: 'Habit', value: 'Opens the app before he even sits down' },
          ],
          quote:
            'I don\'t want a tutorial every patch. I want to open the app, tap Play, finish one match, and get to the office.',
        },
      },
      { type: 'subheading', content: 'Step 2 — MAP: Artem\'s journey across one metro ride' },
      {
        type: 'text',
        content:
          'UJM across the **5 stages from the template** — the very stages you see as placeholder hints in [`/meeting/3/template`](/meeting/3/template). Scenario: "Monday morning commute, 08:42 — the player is heading to the office."',
      },
      {
        type: 'columns',
        columns: [
          {
            title: '1️⃣ Trigger — bored on commute',
            items: [
              '📍 Touchpoint: phone in hand, still on the escalator',
              '😐 Emotion: "I need to fill 35 minutes"',
              '⚠️ Pain: tired of social media, YouTube eats mobile data',
              '💡 Opportunity: home-screen widget "Quick Match in 1 tap"',
            ],
          },
          {
            title: '2️⃣ Discovery — opens Brawl Stars',
            items: [
              '📍 Touchpoint: app icon → game home',
              '😕 Emotion: "UI reshuffled again, where\'s Play?"',
              '⚠️ Pain: 11 CTAs (Brawl Pass / Star Drop / Shop / Events / Quests / News / Mastery / Lobby / Friends / Settings / Play)',
              '💡 Opportunity: drop 6 CTAs from above-the-fold, keep Play + 3 active',
            ],
          },
          {
            title: '3️⃣ Install + first session (== match start)',
            items: [
              '📍 Touchpoint: Gem Grab mode / brawler picker',
              '😤 Emotion: "wait, which brawler is Hypercharge-ready?"',
              '⚠️ Pain: 32s from app tap to in-match (slow matchmaking + brawler swap)',
              '💡 Opportunity: "Quick Resume" — last brawler + last mode in one tap',
            ],
          },
          {
            title: '4️⃣ Hooked — 3 matches in a row',
            items: [
              '📍 Touchpoint: results → rewards → home → play again',
              '😊 Emotion: "one more, I\'ll make it before Mayakovskaya station"',
              '⚠️ Pain: 4-7s of dead air between match-end and rewards with no indicator',
              '💡 Opportunity: skeleton loader + auto-rematch button (Clash Royale-style)',
            ],
          },
          {
            title: '5️⃣ Habit or churn',
            items: [
              '📍 Touchpoint: tunnel → disconnect → back to lobby',
              '😡 Emotion: "lost 20 trophies due to lag, not my hands"',
              '⚠️ Pain: no "offline-safe" mode for metro (bot training)',
              '💡 Opportunity: "Subway Mode" — offline practice, not counted in trophy ladder',
            ],
          },
        ],
      },
      { type: 'subheading', content: 'Step 3 — HYPOTHESIZE: three working hypotheses from the UJM' },
      {
        type: 'key-concepts',
        concepts: [
          {
            term: 'H1: Compact Home (targets pain #2 — 11 CTAs)',
            definition:
              '"If we drop 6 secondary CTAs above the fold on the home screen and keep only Play + 3 actives (Brawl Pass / Daily Quest / Last Brawler), Time on Task to match start will fall from 32s to <15s."',
          },
          {
            term: 'H2: Quick Resume (targets pain #3)',
            definition:
              '"If we add a Resume last match-up button (last brawler + mode in one tap), Task Completion Rate for "start match in <15s" will rise from 67% to 85% for daily players."',
          },
          {
            term: 'H3: Subway Mode (targets pain #5 — disconnect)',
            definition:
              '"If we add an offline practice mode with no trophy impact, D7 retention in the metro-commuter segment will rise from 68% to 73% and NPS from +18 to +25."',
          },
        ],
      },
      { type: 'subheading', content: 'Step 4 — TEST: moderated test with 5 users' },
      {
        type: 'columns',
        columns: [
          {
            title: '🎯 Setup',
            items: [
              'Sample: 5 daily players, 22-35, play on the metro',
              'Task: "Open Brawl Stars and play one Gem Grab match like a normal morning"',
              'Format: moderated, screen recording, think-aloud (Lookback)',
              'Length: 15 min × 5 = 75 min of active testing',
              'Prototype: Figma click-through of new home + Quick Resume buttons',
            ],
          },
          {
            title: '🔍 Top-3 findings',
            items: [
              '5/5 missed the new Star Drop slot on the current home (H1 violation)',
              '4/5 hunted > 5 seconds for the Play button after the update — it moved (H4 violation)',
              '3/5 mis-tapped Star Drop instead of Play — CTAs overlap (H5 violation)',
              'Time on Task: avg 32 seconds from app open to in-match (target ≤ 15s)',
              'Frustration peak: between match-end and rewards (4-7s loading with no indicator)',
            ],
          },
          {
            title: '💬 Think-aloud quotes',
            items: [
              '"I\'ve been looking for Play for 5 seconds. It used to be right here, bottom-left..."',
              '"Wait, is this a new shop? I just wanted to play, and it took me to the store."',
              '"OK whatever, I\'ll open Tinder and come back later."',
              '"Star Drop — is it a casino? I didn\'t understand what I won."',
              '"Am I even going to make it in time, I\'m getting off in 4 stops."',
            ],
          },
        ],
      },
      { type: 'subheading', content: 'Step 5 — EVALUATE: which Nielsen heuristics broke' },
      {
        type: 'columns',
        columns: [
          {
            title: '❌ H8 — Aesthetic & Minimalist (Critical)',
            items: [
              'What: 11 CTAs above-the-fold at the same time',
              'Evidence: 4/5 confused in think-aloud, GA drop-off 18% on home',
              'Impact: blocks the core task (start match)',
              'Fix: drop 6 CTAs below scroll, keep 4 active ones',
            ],
          },
          {
            title: '❌ H4 — Consistency & Standards (High)',
            items: [
              'What: Play button moved after 56.x',
              'Evidence: 4/5 hunted > 5 seconds; App Store reviews flag it',
              'Impact: breaks daily-player muscle memory',
              'Fix: return Play to bottom-left (pre-56.x position)',
            ],
          },
          {
            title: '❌ H1 — Visibility of Status (Med)',
            items: [
              'What: no clear loading state match-end → results (4-7s of silence)',
              'Evidence: 3/5 tapped twice thinking it had frozen',
              'Impact: perceived "laggy" experience',
              'Fix: skeleton loader + progress dots on screen transitions',
            ],
          },
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          '**Prioritisation Matrix**: H8 = Critical Blocker (high freq × high severity → fix first). H4 = High (breaks veteran players). H1 = Medium polish. **Iteration > Volume**: after round 1 + fixes we run round 2 on 5 new users — it will surface the next layer (likely H6 / Recognition on the brawler picker).',
      },
      { type: 'subheading', content: 'Step 6 — MEASURE: which numbers we track' },
      {
        type: 'diagram',
        title: 'Metrics that will move after the home-screen redesign',
        description:
          'Baseline before the fix + target after (TCR, Time on Task — measured in the test; D7, NPS, App Store — in production after the A/B).',
        items: [
          'Task Completion Rate (start match ≤ 15s): baseline 67% → target 89%',
          'Time on Task (app open → in match): baseline 32s → target 14s',
          'Error Rate (mistapped CTAs before Play): baseline 1.4/session → target ≤ 0.3',
          'D7 retention (metro commuter segment): baseline 68% → target 73%',
          'SUS (post-test, after production A/B): baseline 58 → target 78',
          'NPS: baseline +18 → target +26',
          'App Store rating (30 days after fix): baseline 4.0 → target 4.3',
        ],
      },
      { type: 'subheading', content: 'Step 7 — TRIANGULATE & ITERATE: all three lenses agree' },
      {
        type: 'columns',
        columns: [
          {
            title: '📊 Analytics (GA — The Where)',
            items: [
              'Drop-off rate on home 18% (app open → match start)',
              'Avg session time dropped from 8.4 min to 6.7 min post-56.x',
              'Star Drop CTR 47% (≈ half "by accident")',
            ],
          },
          {
            title: '👁️ Observation (Hotjar / test — The What)',
            items: [
              'Think-aloud: 4/5 "can\'t see Play"',
              'Finger heatmap clusters in the old Play zone (bottom-left)',
              'Session replay: 3 of 5 — mis-tap Star Drop on first touch',
            ],
          },
          {
            title: '🧪 Heuristics (Nielsen — The Why)',
            items: [
              'H8 — Aesthetic & Minimalist (overload)',
              'H4 — Consistency (Play moved)',
              'H1 — Visibility (loading without status)',
            ],
          },
        ],
      },
      {
        type: 'before-after',
        title: 'After 1 round of redesign + retest (hypothetical outcome)',
        before: {
          label: 'Baseline (post-56.x update, November)',
          description:
            'TCR 67%, Time on Task 32s, D7 retention 68%, SUS 58, NPS +18, App Store 4.0. Home has 11 CTAs, Play has moved, no loading state. The metro segment complains in App Store about "laggy" and "confusing".',
        },
        after: {
          label: 'Post-fix (after 3 rounds × 5 users)',
          description:
            'TCR 89%, Time on Task 14s, D7 retention 73%, SUS 78, NPS +26, App Store 4.3. Home now has 4 CTAs above-the-fold + Play in the familiar zone. Subway Mode shipped in a follow-up sprint. **Cost**: 75 min of testing × 3 rounds + 2 engineering sprints vs +5 pp D7 retention and ≈ +$1.2M ARR (rough estimate based on Brawl Stars ARPU).',
        },
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**The key takeaway**: no single lens would have given the full picture. Analytics showed WHERE (18% drop-off), think-aloud showed WHAT (they can\'t see Play), heuristics explained WHY (H8 + H4 violated). One source = hypothesis, two = guess, **three = diagnosis**.',
      },
      {
        type: 'callout',
        variant: 'tip',
        content:
          '**Your turn.** Open [`/meeting/3/template`](/meeting/3/template), save it (Ctrl+P → Save as PDF), and walk these 7 steps on **your own** product — a game, a banking app, e-commerce, anything. Fill in Persona Card → Empathy Map → UJM → interview template. That\'s no longer theory — it\'s the first artifact in your research portfolio.',
      },
      { type: 'divider' },
      { type: 'heading', content: 'Concept Checklist' },
      {
        type: 'checklist',
        title: '🧠 Understand the user (M3 Part 1)',
        items: [
          'Persona: name, age, role, goals, frustrations, quote',
          'Empathy Map: 4 quadrants (Thinks / Says / Feels / Does) + Pains/Gains',
          'JTBD formula: "When [situation], I want to [motivation], so I can [outcome]"',
        ],
      },
      {
        type: 'checklist',
        title: '🗺️ Find the friction (M3 Part 2)',
        items: [
          'User Journey Map: 6 stages (Awareness → Consideration → Decision → Onboarding → Use → Loyalty)',
          'Touchpoint (where they meet the product) vs Pain point (where they trip)',
          'Emotion curve — anger spots and pleasant surprises',
        ],
      },
      {
        type: 'checklist',
        title: '🧪 Test the design (M4 Part 1)',
        items: [
          '5-user rule (~85% of issues per round)',
          'Moderated vs unmoderated — Format Matrix',
          'Think-aloud + Golden Rule (never prompt)',
          'Task formulation: realistic scenario over instruction',
          '10-step lifecycle: Planning → Execution → Action',
          'Prioritisation Matrix — Critical Blockers first',
          'Iteration > Volume: 3×5 > 1×15',
          'Actionable report: issue + severity + evidence + recommendation + impact',
        ],
      },
      {
        type: 'checklist',
        title: '📊 Evaluate and measure (M4 Part 2)',
        items: [
          '10 Nielsen heuristics in 5 themes',
          'Heuristic evaluation: 3-5 experts, ~75% of issues in 2 hours',
          'SUS 0-100 (avg 68, > 80 excellent)',
          'NPS = % promoters − % detractors',
          'CSAT 1-5 right after an action',
          'Task Completion Rate ≥ 78%',
          'Error Rate, Time on Task — pre/post comparison',
          'GA / Hotjar / Mixpanel — The What / The Where / The Who',
          'UX Triad: Analytics × Observation × Heuristics',
        ],
      },
      {
        type: 'callout',
        variant: 'example',
        content:
          '**Real-world proof:** Booking.com — 3 rounds × 5 users → +16 pp form conversion and −25% support tickets. Tinkoff — heuristic evaluation of 15 screens, 8 critical fixes: App Store 3.2→4.6, SUS 58→82, Time on Transfer 45→18s, NPS +12→+45.',
      },
    ],
    quizHeading: 'Mini-quiz: M3 ↔ M4 connections',
    quiz: [
      {
        question: 'Which artifact bridges M3 and M4 — the thing you produce AFTER building the UJM and BEFORE running a usability test?',
        options: [
          { id: 'a', text: 'The final visual design' },
          { id: 'b', text: 'A change hypothesis: "If we remove X at stage Y, conversion Z will rise by N%"' },
          { id: 'c', text: 'A Jira bug list' },
          { id: 'd', text: 'An investor report' },
        ],
        correctId: 'b',
        explanation:
          'Step 3 — HYPOTHESIZE. The UJM revealed a pain point; now you state a working hypothesis: what exactly will change and which metric will move. Without a hypothesis, the usability test asks "do you like it?"; with a hypothesis, it asks "does it work?".',
      },
      {
        question: 'From M3 you have persona and UJM. Which M4 tool do you pick FIRST to validate the friction points cheaply?',
        options: [
          { id: 'a', text: 'A 500-person survey via Mixpanel' },
          { id: 'b', text: 'Heuristic evaluation by 3 experts against the 10 heuristics (~2 hours, ~75% of issues)' },
          { id: 'c', text: 'Launch an A/B test in production' },
          { id: 'd', text: 'A full-base NPS survey' },
        ],
        correctId: 'b',
        explanation:
          'Heuristic evaluation is the fastest and cheapest first filter. It does NOT replace user testing (step 4), but it produces a first list of violations in one sitting. A 5-user usability test (M4 P1) is the deeper next step.',
      },
      {
        question: 'The Booking.com case touches almost every step of the loop. At which step was the "Guest Name" insight first surfaced?',
        options: [
          { id: 'a', text: 'EMPATHIZE — it was in the persona' },
          { id: 'b', text: 'MEASURE — they spotted it in Google Analytics' },
          { id: 'c', text: 'TEST — they saw it in a moderated 5-user think-aloud session' },
          { id: 'd', text: 'EVALUATE — an expert flagged it in heuristic evaluation' },
        ],
        correctId: 'c',
        explanation:
          'The "Guest Name field confused with the booker name" pain point surfaced in a live think-aloud session — a participant said out loud they didn\'t know whose name to enter. Analytics shows "many drop off here", not "why exactly".',
      },
      {
        question: 'Where in the Research Loop are findings prioritised?',
        options: [
          { id: 'a', text: 'In EMPATHIZE (persona)' },
          { id: 'b', text: 'In TEST — via the Prioritisation Matrix (frequency × severity)' },
          { id: 'c', text: 'In MEASURE — via NPS' },
          { id: 'd', text: 'They aren\'t prioritised — fix everything' },
        ],
        correctId: 'b',
        explanation:
          'After the test (step 4) you systematise findings: issues that many users hit AND that block the task — Critical Blockers — go first. That is the Prioritisation Matrix.',
      },
      {
        question: 'After a redesign, which metrics prove the UJM friction has actually been removed?',
        options: [
          { id: 'a', text: 'NPS went up — that is enough' },
          { id: 'b', text: 'Time on Task fell, TCR rose, Error Rate dropped — a combination of metrics' },
          { id: 'c', text: 'The design won an Awwwards award' },
          { id: 'd', text: 'The team grew' },
        ],
        correctId: 'b',
        explanation:
          'The MEASURE step needs a combination of metrics. NPS is delayed and noisy (affected by marketing). The pairing of Time on Task ↓ + TCR ↑ + Error Rate ↓ + (optionally) SUS ↑ is direct evidence that usability improved.',
      },
      {
        question: 'The UX Triad is:',
        options: [
          { id: 'a', text: 'Three legs of UX: aesthetics, ergonomics, efficiency' },
          { id: 'b', text: 'The overlap of Analytics (The Where) × Observation (The What) × Heuristics (The Why) — true clarity only at the intersection' },
          { id: 'c', text: 'Three layers of a design system: tokens, components, patterns' },
          { id: 'd', text: 'Three UX metrics: SUS, NPS, CSAT' },
        ],
        correctId: 'b',
        explanation:
          'UX Triad from M4 P2: one source lies, two suggest, three diagnose. Analytics tells you WHERE the issue is, heuristics tell you WHY it\'s an issue, usability testing tells you WHAT actually happens in the user\'s head.',
      },
      {
        question: 'Why are 3 rounds of 5 users better than 1 round of 15?',
        options: [
          { id: 'a', text: 'It is three times cheaper' },
          { id: 'b', text: 'Each round of fixes exposes a new layer of issues; one round of 15 — everyone hits the same top-layer blocker' },
          { id: 'c', text: 'It is a GDPR requirement' },
          { id: 'd', text: 'It finishes the test faster' },
        ],
        correctId: 'b',
        explanation:
          'Iteration Beats Volume. Once you fix the top blocker, round 2 reveals the next layer — masked previously by the first blocker. 15 in one go = 15 reports about the same surface-level problem.',
      },
      {
        question: 'What separates an actionable report from a vague one?',
        options: [
          { id: 'a', text: 'Just length — actionable is longer' },
          { id: 'b', text: 'Specifics (issue + UI element) + severity + evidence (N/5) + recommendation + expected business-metric impact' },
          { id: 'c', text: 'Use of emojis' },
          { id: 'd', text: 'A CEO signature' },
        ],
        correctId: 'b',
        explanation:
          'An actionable report translates UX observation into product language. "Usability is bad" — nobody will fix it. "Button #1, 4/5 couldn\'t find it, recommend pinning, expected +15% cart conversion" — that\'s a sprint ticket.',
      },
    ],
    backLabel: 'Back to Meeting 4',
    nextLabel: 'Go to Meeting 5',
  },
}

export default function ResearchRecapPage() {
  const { lang } = useLanguage()
  const c = CONTENT[lang]

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center gap-4">
          <Link
            href="/meeting/4/part/part-2"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {c.backLabel}
          </Link>
          <div className="flex-1" />
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <GraduationCap className="w-4 h-4" />
            Recap · Research Module
          </span>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-10">
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

        {/* Quiz */}
        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">{c.quizHeading}</h2>
          <QuizSection quizzes={c.quiz} />
        </div>

        {/* Navigation */}
        <nav className="mt-12 pt-6 border-t flex items-center justify-between gap-4">
          <Link href="/meeting/4/part/part-2">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {c.backLabel}
            </Button>
          </Link>
          <Link href="/meeting/5">
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
