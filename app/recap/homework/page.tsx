'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Target,
  Quote,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  Trophy,
  Heart,
  Zap,
  Flame,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language'
import { SnakeGame } from '@/components/homework/SnakeGame'

// ---- Content (bilingual) ----

type Lang = 'ru' | 'en'

type Interview = {
  name: string
  emoji: string
  age: number
  role: string
  quote: string
  fullText: string
  pain: string
  insight: string
}

const T = (lang: Lang) => ({
  hero: {
    badge: lang === 'en' ? 'Module 1 Capstone · Worked example' : 'Капстоун Модуля 1 · Разбор примера',
    title: lang === 'en' ? '🐍 Snake: a complete Research case study' : '🐍 Snake: полный Research-разбор',
    tagline:
      lang === 'en'
        ? "We walked Artem through every step of the Research Loop. Here's what we found, with a playable Snake demo so you can feel the pain yourself."
        : 'Артём прошёл все шаги Research Loop на нашей Snake-игре. Ниже — что мы нашли, с встроенной играбельной демкой, чтобы ты сам почувствовал, где болит.',
    yourTurnNote:
      lang === 'en'
        ? "After reading this — open the template and run the same loop on YOUR product."
        : 'После прочтения — открой шаблон и пройди тот же цикл на СВОЁМ продукте.',
  },
  hypothesisBox: {
    label: lang === 'en' ? 'Research hypothesis' : 'Research-гипотеза',
    text:
      lang === 'en'
        ? "I think players trip on stage 2 because it's too hard. I want to verify."
        : 'Я думаю, что игроки спотыкаются на втором этапе, потому что он сложный. Хочу проверить.',
    kpiLabel: lang === 'en' ? 'Success metric (KPI)' : 'Метрика успеха (KPI)',
    kpiText: lang === 'en' ? 'Score ≥100 points' : 'Набить ≥100 очков',
    productLabel: lang === 'en' ? 'Product' : 'Продукт',
    productText: lang === 'en' ? '3D Snake — Three.js + React' : '3D Snake — Three.js + React',
    productHref: 'https://snake-3d-gameweb.vercel.app/game?mode=web',
    productLinkLabel: lang === 'en' ? 'Open live game ↗' : 'Открыть live-игру ↗',
    personaLabel: lang === 'en' ? 'Persona' : 'Персона',
    personaText: lang === 'en' ? 'Artem, 28 — metro commuter' : 'Артём, 28 — метро-коммьютер',
  },
  steps: {
    persona: {
      step: lang === 'en' ? 'Step 1' : 'Шаг 1',
      title: lang === 'en' ? 'Persona — Artem' : 'Персона — Артём',
      lead: lang === 'en' ? 'Built from observation + 3 short interviews.' : 'Собран из наблюдения + 3 коротких интервью.',
    },
    play: {
      step: lang === 'en' ? 'Step 2' : 'Шаг 2',
      title: lang === 'en' ? 'Feel the pain — play Snake' : 'Почувствуй боль — сыграй в Snake',
      lead:
        lang === 'en'
          ? "Try to reach 100 points. Notice what happens at exactly 50 points. (Hint: that's the focal pain.)"
          : 'Попробуй набить 100. Запомни, что произойдёт ровно на 50 очках. (Подсказка: это и есть focal pain.)',
    },
    journey: {
      step: lang === 'en' ? 'Step 3' : 'Шаг 3',
      title: lang === 'en' ? "Artem's emotional curve" : 'Эмоциональная кривая Артёма',
      lead:
        lang === 'en'
          ? '5 stages of one Artem session. Look where the curve dips — that\'s where research should focus.'
          : '5 этапов одной сессии Артёма. Где кривая падает — туда смотрит research.',
    },
    interviews: {
      step: lang === 'en' ? 'Step 4' : 'Шаг 4',
      title: lang === 'en' ? '3 interviews — click any card' : '3 интервью — кликни на любую карточку',
      lead:
        lang === 'en'
          ? 'Short snippets up top; the full transcript is one tap away. Notice the recurring word.'
          : 'Короткие выжимки сверху; полный transcript — в один тап. Заметь повторяющееся слово.',
    },
    test: {
      step: lang === 'en' ? 'Step 5' : 'Шаг 5',
      title: lang === 'en' ? 'Usability test — 5 players, 3 tasks' : 'Usability-тест — 5 игроков, 3 задачи',
      lead:
        lang === 'en'
          ? 'The test had one goal: can players hit the KPI? Spoiler — no.'
          : 'У теста была одна цель: смогут ли игроки добить KPI? Спойлер — нет.',
    },
    priorities: {
      step: lang === 'en' ? 'Step 6' : 'Шаг 6',
      title: lang === 'en' ? 'MoSCoW prioritisation' : 'Приоритизация MoSCoW',
      lead:
        lang === 'en'
          ? "6 user stories from 5 findings. Note: the 'cool new mode' marketing wanted — went to Won't Have."
          : '6 user stories из 5 находок. Заметь: «прикольный новый режим», которого хотел маркетинг — ушёл в Won\'t Have.',
    },
    verdict: {
      step: lang === 'en' ? 'Step 7' : 'Шаг 7',
      title: lang === 'en' ? 'Verdict — was the hypothesis right?' : 'Вердикт — гипотеза подтвердилась?',
    },
  },
  persona: {
    name: 'Артём',
    age: lang === 'en' ? '28 y/o' : '28 лет',
    role: lang === 'en' ? 'Junior frontend / marketer' : 'Junior frontend / маркетолог',
    context: lang === 'en' ? 'Metro commute 35 min × 2/day · iPhone 14 + AirPods' : 'Метро 35 мин × 2/день · iPhone 14 + AirPods',
    goals: lang === 'en' ? 'Goals' : 'Цели',
    goalsList:
      lang === 'en'
        ? ['Kill commute time with a dopamine hit', 'Beat own high score', "Don't give up in the first minute"]
        : ['Убить время в метро с дофамином', 'Побить свой high score', 'Не сдаться в первую минуту'],
    pains: lang === 'en' ? 'Frustrations' : 'Фрустрации',
    painsList:
      lang === 'en'
        ? ['Game gets hard too suddenly', "I don't understand why I died", "There's no visible progression bar"]
        : ['Игра становится сложной слишком резко', 'Не понимаю, почему я умер', 'Нет визуального progression bar'],
    quote:
      lang === 'en'
        ? "I don't want a tutorial. I want to open the game, play 2-3 minutes, post a high score to my chat."
        : 'Я не хочу tutorial. Я хочу зайти, поиграть 2-3 минуты и забить high score, чтобы скинуть в чат.',
  },
  curve: {
    stages:
      lang === 'en'
        ? [
            { label: 'Discover', y: 3, emoji: '😐', note: 'Sees app icon · no expectations' },
            { label: 'Onboard', y: 4, emoji: '🙂', note: 'Press Play · curious' },
            { label: 'Score 0-40', y: 5, emoji: '😀', note: 'Dopamine · "I got this"' },
            { label: 'Score 50 ⚡', y: 1, emoji: '😰', note: 'Sudden speed +100% · panic' },
            { label: 'Game Over', y: 2, emoji: '😞', note: 'Score 47 · "what just happened?"' },
          ]
        : [
            { label: 'Discover', y: 3, emoji: '😐', note: 'Видит иконку · ожиданий нет' },
            { label: 'Onboard', y: 4, emoji: '🙂', note: 'Жмёт Play · любопытно' },
            { label: 'Очки 0-40', y: 5, emoji: '😀', note: 'Дофамин · «я в порядке»' },
            { label: 'Очки 50 ⚡', y: 1, emoji: '😰', note: 'Резкий speed +100% · паника' },
            { label: 'Game Over', y: 2, emoji: '😞', note: 'Счёт 47 · «что произошло?»' },
          ],
    annotation: lang === 'en' ? 'The dip = the hypothesis' : 'Провал кривой = гипотеза',
  },
  interviewsData: (lang === 'en'
    ? [
        {
          name: 'Alina',
          emoji: '👩',
          age: 24,
          role: 'Designer',
          quote: '"I thought it was a bug. The green dot just shot off."',
          fullText:
            "I knew Snake from the Nokia days, so I assumed I'd be fine. But when the green dot suddenly shot off — I literally thought there was a lag in the game. Got the score around 55 and was gone. I didn't even understand what changed.",
          pain: 'No warning about the speed jump',
          insight: 'Players think it\'s a bug, not a feature.',
        },
        {
          name: 'Dmitry',
          emoji: '👨',
          age: 31,
          role: 'Developer',
          quote: '"At about 60 points everything just went fast. Irritating."',
          fullText:
            "Played about 3 minutes. Somewhere around 60 points it just became too fast and I didn't react. Annoying — I didn't understand how to prepare for it. Like, was there a level 2 coming? No indicator at all.",
          pain: 'No way to anticipate stage 2',
          insight: 'Same root cause as Alina.',
        },
        {
          name: 'Maxim',
          emoji: '🧑',
          age: 19,
          role: 'Student',
          quote: '"I thought I was bad. Then I realized — it\'s the game."',
          fullText:
            'First time I thought I was bad at it. But then I noticed every game I die around the same score. Checked the speed — and yes, after 50 points the speed jumps. So it\'s the game, not me. But the way it\'s framed made me blame myself for like 5 tries.',
          pain: 'Players blame themselves before figuring out the game design',
          insight: 'Self-blame pattern — bad for retention.',
        },
      ]
    : [
        {
          name: 'Алина',
          emoji: '👩',
          age: 24,
          role: 'Дизайнер',
          quote: '«Я подумала, что это баг. Зелёная точка просто улетела».',
          fullText:
            'Snake я помнила по Nokia, поэтому решила что справлюсь. Но когда зеленая точка резко ускорилась — я буквально подумала, что это лаг. Дошла до 55 и всё. Я даже не поняла, что изменилось.',
          pain: 'Нет предупреждения о ускорении',
          insight: 'Игроки думают, что это баг, а не feature.',
        },
        {
          name: 'Дмитрий',
          emoji: '👨',
          age: 31,
          role: 'Разработчик',
          quote: '«Где-то на 60 очках всё стало быстрее, я тупо не отреагировал. Бесит».',
          fullText:
            'Играл минуты 3. Где-то на 60 очках стало резко быстрее, и я не успел среагировать. Бесит — не понятно, как готовиться. Был ли level 2? Никакого indicator нет.',
          pain: 'Не понятно, как готовиться к stage 2',
          insight: 'Та же корневая причина, что у Алины.',
        },
        {
          name: 'Максим',
          emoji: '🧑',
          age: 19,
          role: 'Студент',
          quote: '«Я думал, что я отстой. Потом понял — это игра».',
          fullText:
            'Первый раз думал, что я плохо играю. Потом заметил — каждый раз умираю на похожем счёте. Проверил скорость — да, после 50 очков она прыгает. Значит дело в игре, а не во мне. Но из-за того, как это поднесено, я первые 5 попыток винил себя.',
          pain: 'Игрок винит себя, прежде чем разобраться в дизайне',
          insight: 'Self-blame pattern — плохо для retention.',
        },
      ]) as Interview[],
  affinity:
    lang === 'en'
      ? '3 / 3 mention the speed jump at stage 2 · 2 / 3 use the word "sudden" · 1 / 3 thought it was a bug, not a feature'
      : '3 / 3 упомянули скачок скорости на этапе 2 · 2 / 3 использовали слово «резко» · 1 / 3 решил, что это баг, а не фича',
  playerStats: {
    title: lang === 'en' ? 'Player-by-player breakdown' : 'Разбор по игрокам',
    lead:
      lang === 'en'
        ? 'All 5 players failed Task 3 (KPI ≥100). Notice the pattern: every single one died in stage 2 — the speed jump after 50 points.'
        : 'Все 5 игроков провалили Task 3 (KPI ≥100). Заметь паттерн: КАЖДЫЙ умер на этапе 2 — после скачка скорости на 50 очках.',
    headers:
      lang === 'en'
        ? {
            num: '#',
            player: 'Player',
            t1: 'T1 · Start',
            t2: 'T2 · Score ≥30',
            t3: 'T3 · KPI ≥100',
            max: 'Max score',
            stage: 'Died at',
            time: 'Session',
            note: 'Key observation',
          }
        : {
            num: '#',
            player: 'Игрок',
            t1: 'З1 · Запуск',
            t2: 'З2 · Очки ≥30',
            t3: 'З3 · KPI ≥100',
            max: 'Max очки',
            stage: 'Умер на',
            time: 'Сессия',
            note: 'Ключевое наблюдение',
          },
    rows:
      lang === 'en'
        ? [
            {
              n: 1,
              emoji: '👩',
              name: 'Alina',
              age: 24,
              role: 'Designer',
              t1: true,
              t2: true,
              t3: false,
              max: 55,
              stage: 2,
              time: '1:42',
              note: 'Thought the speed jump was a bug',
            },
            {
              n: 2,
              emoji: '👨',
              name: 'Dmitry',
              age: 31,
              role: 'Developer',
              t1: true,
              t2: true,
              t3: false,
              max: 62,
              stage: 2,
              time: '1:55',
              note: 'Couldn\'t anticipate stage 2',
            },
            {
              n: 3,
              emoji: '🧑',
              name: 'Maxim',
              age: 19,
              role: 'Student',
              t1: true,
              t2: true,
              t3: false,
              max: 38,
              stage: 2,
              time: '1:30',
              note: 'Self-blame for ~5 attempts',
            },
            {
              n: 4,
              emoji: '👩‍💼',
              name: 'Katya',
              age: 27,
              role: 'PM',
              t1: true,
              t2: true,
              t3: false,
              max: 32,
              stage: 2,
              time: '1:25',
              note: 'Felt the difficulty was unfair',
            },
            {
              n: 5,
              emoji: '👨‍💻',
              name: 'Igor',
              age: 35,
              role: 'Analyst',
              t1: true,
              t2: true,
              t3: false,
              max: 48,
              stage: 2,
              time: '1:48',
              note: '"Speed bump was too harsh"',
            },
          ]
        : [
            {
              n: 1,
              emoji: '👩',
              name: 'Алина',
              age: 24,
              role: 'Дизайнер',
              t1: true,
              t2: true,
              t3: false,
              max: 55,
              stage: 2,
              time: '1:42',
              note: 'Думала, что скачок скорости — баг',
            },
            {
              n: 2,
              emoji: '👨',
              name: 'Дмитрий',
              age: 31,
              role: 'Разработчик',
              t1: true,
              t2: true,
              t3: false,
              max: 62,
              stage: 2,
              time: '1:55',
              note: 'Не успел подготовиться к этапу 2',
            },
            {
              n: 3,
              emoji: '🧑',
              name: 'Максим',
              age: 19,
              role: 'Студент',
              t1: true,
              t2: true,
              t3: false,
              max: 38,
              stage: 2,
              time: '1:30',
              note: 'Винил себя первые ~5 попыток',
            },
            {
              n: 4,
              emoji: '👩‍💼',
              name: 'Катя',
              age: 27,
              role: 'PM',
              t1: true,
              t2: true,
              t3: false,
              max: 32,
              stage: 2,
              time: '1:25',
              note: 'Ощущение, что сложность нечестная',
            },
            {
              n: 5,
              emoji: '👨‍💻',
              name: 'Игорь',
              age: 35,
              role: 'Аналитик',
              t1: true,
              t2: true,
              t3: false,
              max: 48,
              stage: 2,
              time: '1:48',
              note: '«Прыжок скорости слишком резкий»',
            },
          ],
    aggregate:
      lang === 'en'
        ? {
            label: 'Aggregate',
            t1: '5/5',
            t2: '5/5',
            t3: '0/5',
            max: '47 avg',
            stage: 'all stage 2',
            time: '1:40 avg',
            note: '100% died on the speed jump',
          }
        : {
            label: 'Итого',
            t1: '5/5',
            t2: '5/5',
            t3: '0/5',
            max: '47 средн.',
            stage: 'все на этапе 2',
            time: '1:40 средн.',
            note: '100% умерли на скачке скорости',
          },
  },
  testResults: {
    setup: lang === 'en' ? 'Setup' : 'Сетап',
    setupItems:
      lang === 'en'
        ? [
            '5 players from target audience (gamers 18-35, plays in commute)',
            'Moderated, think-aloud protocol',
            '15 min per session',
            '3 tasks, success measured against KPI',
          ]
        : [
            '5 игроков из ЦА (геймеры 18-35, играют в дороге)',
            'Модерируемый, think-aloud протокол',
            '15 мин на сессию',
            '3 задачи, success мерится по KPI',
          ],
    tasks: lang === 'en' ? 'Tasks' : 'Задачи',
    tasksData:
      lang === 'en'
        ? [
            { label: 'Task 1 — Start the game', target: '100%', actual: '100%', success: true },
            { label: 'Task 2 — Score ≥30', target: '80%', actual: '100%', success: true },
            { label: 'Task 3 — Score ≥100 (KPI)', target: '60%', actual: '0%', success: false },
          ]
        : [
            { label: 'Задача 1 — Запустить игру', target: '100%', actual: '100%', success: true },
            { label: 'Задача 2 — Очки ≥30', target: '80%', actual: '100%', success: true },
            { label: 'Задача 3 — Очки ≥100 (KPI)', target: '60%', actual: '0%', success: false },
          ],
    summary: lang === 'en' ? 'Summary' : 'Сводка',
    summaryItems:
      lang === 'en'
        ? [
            'Average max score: **47 points** · KPI was 100',
            'Average session: **1 min 40 sec**',
            'All 5 players died between 50 and 78 points',
            'After death, **4/5** said "I don\'t know why I died"',
          ]
        : [
            'Средний max score: **47 очков** · KPI был 100',
            'Средняя сессия: **1 мин 40 сек**',
            'Все 5 игроков умерли между 50 и 78 очками',
            'После смерти **4/5** сказали «не понял, почему умер»',
          ],
  },
  moscow: {
    columns:
      lang === 'en'
        ? [
            {
              key: 'must',
              title: 'Must Have',
              color: 'bg-red-50 border-red-200 text-red-900',
              dot: 'bg-red-500',
              items: [
                {
                  role: 'As a player who reached 50 points,',
                  want: 'I want speed to ramp progressively (+50ms per 10pts) instead of jumping suddenly,',
                  why: 'so I can adapt without dying instantly.',
                  metric: 'AC: ramp 100→90→80→70ms across 0→50→100→150pts. Average max score 47 → 95+.',
                },
                {
                  role: 'As a new player,',
                  want: 'I want a 3-second overlay showing controls on first launch,',
                  why: "so I don't waste my first match figuring out the arrows.",
                  metric: 'AC: overlay shows on first launch only. D1 retention 38% → 60%.',
                },
              ],
            },
            {
              key: 'should',
              title: 'Should Have',
              color: 'bg-amber-50 border-amber-200 text-amber-900',
              dot: 'bg-amber-500',
              items: [
                {
                  role: 'As a player who just died,',
                  want: 'I want "Died at stage 2 — speed went up here" with a Retry button,',
                  why: "so I understand what happened and have a clear next action.",
                  metric: 'AC: death screen names the stage + speed delta. % retry attempts 25% → 65%.',
                },
              ],
            },
            {
              key: 'could',
              title: 'Could Have',
              color: 'bg-emerald-50 border-emerald-200 text-emerald-900',
              dot: 'bg-emerald-500',
              items: [
                {
                  role: 'As a returning player,',
                  want: 'I want my high score saved across sessions,',
                  why: 'so I can compete with my own previous best.',
                  metric: 'AC: localStorage persistence. Could ship in week 2.',
                },
                {
                  role: 'As a player who hit a personal best,',
                  want: 'I want a share button → Telegram / TikTok,',
                  why: 'so I can post my score and pull friends in.',
                  metric: 'AC: share generates a card with score + timestamp.',
                },
              ],
            },
            {
              key: 'wont',
              title: "Won't Have (this release)",
              color: 'bg-stone-100 border-stone-300 text-stone-700',
              dot: 'bg-stone-500',
              items: [
                {
                  role: 'As a player,',
                  want: 'I want a brand-new "Ice Mode" map with obstacles,',
                  why: "(...marketing's idea, but we have no retention to support a new mode yet)",
                  metric: 'Parked until D7 retention >40%.',
                },
              ],
            },
          ]
        : [
            {
              key: 'must',
              title: 'Must Have',
              color: 'bg-red-50 border-red-200 text-red-900',
              dot: 'bg-red-500',
              items: [
                {
                  role: 'Как игрок, дошедший до 50 очков,',
                  want: 'я хочу плавное ускорение (+50ms каждые 10pt) вместо резкого скачка,',
                  why: 'чтобы успевать адаптироваться, а не умирать через 3 секунды.',
                  metric: 'AC: ramp 100→90→80→70ms на 0→50→100→150pt. Average max score 47 → 95+.',
                },
                {
                  role: 'Как новый игрок,',
                  want: 'я хочу 3-секундный overlay с управлением при первом запуске,',
                  why: 'чтобы не палить первую партию на разбирание стрелок.',
                  metric: 'AC: overlay показывается только при первом запуске. D1 retention 38% → 60%.',
                },
              ],
            },
            {
              key: 'should',
              title: 'Should Have',
              color: 'bg-amber-50 border-amber-200 text-amber-900',
              dot: 'bg-amber-500',
              items: [
                {
                  role: 'Как игрок, только что умерший,',
                  want: 'я хочу видеть «Умер на этапе 2 — здесь скорость выросла» + кнопку Retry,',
                  why: 'чтобы понимать, что произошло, и иметь чёткое следующее действие.',
                  metric: 'AC: экран смерти называет этап + дельту скорости. % retry попыток 25% → 65%.',
                },
              ],
            },
            {
              key: 'could',
              title: 'Could Have',
              color: 'bg-emerald-50 border-emerald-200 text-emerald-900',
              dot: 'bg-emerald-500',
              items: [
                {
                  role: 'Как возвращающийся игрок,',
                  want: 'я хочу сохранение high score между сессиями,',
                  why: 'чтобы конкурировать сам с собой.',
                  metric: 'AC: localStorage persistence. Можно докатить на неделе 2.',
                },
                {
                  role: 'Как игрок с personal best,',
                  want: 'я хочу кнопку Share → Telegram / TikTok,',
                  why: 'чтобы запостить счёт и притянуть друзей.',
                  metric: 'AC: share создаёт карточку со счётом + timestamp.',
                },
              ],
            },
            {
              key: 'wont',
              title: 'Won\'t Have (этот релиз)',
              color: 'bg-stone-100 border-stone-300 text-stone-700',
              dot: 'bg-stone-500',
              items: [
                {
                  role: 'Как игрок,',
                  want: 'я хочу новый "Ice Mode" с препятствиями,',
                  why: '(...идея маркетинга, но retention пока не тянет новый режим)',
                  metric: 'Отложено до D7 retention >40%.',
                },
              ],
            },
          ],
  },
  verdict: {
    confirmed: lang === 'en' ? 'Hypothesis CONFIRMED ✅' : 'Гипотеза ПОДТВЕРЖДЕНА ✅',
    why: lang === 'en' ? 'Why' : 'Почему',
    whyText:
      lang === 'en'
        ? '5/5 in usability test failed to reach KPI. 3/3 interviews independently flagged the stage-2 speed jump. Affinity-map clusters converged.'
        : '5/5 в usability-тесте не дошли до KPI. 3/3 интервью независимо отметили скачок скорости на этапе 2. Affinity-map кластеры сошлись.',
    impact: lang === 'en' ? 'Expected impact after fixes' : 'Ожидаемый impact после фиксов',
    impactItems:
      lang === 'en'
        ? [
            { label: 'Average max score', from: '47', to: '95+', positive: true },
            { label: '% players reaching KPI ≥100pt', from: '0%', to: '60%+', positive: true },
            { label: 'D7 retention', from: '12%', to: '35%', positive: true },
            { label: 'Self-blame rate', from: '60%', to: '<10%', positive: true },
          ]
        : [
            { label: 'Средний max score', from: '47', to: '95+', positive: true },
            { label: '% игроков, дошедших до KPI ≥100pt', from: '0%', to: '60%+', positive: true },
            { label: 'D7 retention', from: '12%', to: '35%', positive: true },
            { label: 'Self-blame rate', from: '60%', to: '<10%', positive: true },
          ],
  },
  yourTurn: {
    title: lang === 'en' ? "Now — your turn" : 'Теперь — твой ход',
    text:
      lang === 'en'
        ? 'Walk the same 7 steps on YOUR product. Use the template for the boilerplate artifacts (Persona Card / Empathy Map / UJM / interview guide) — fill it in for whatever you picked.'
        : 'Пройди те же 7 шагов на СВОЁМ продукте. Используй template для базовых артефактов (Persona Card / Empathy Map / UJM / interview-гайд) — заполни на том, что выбрал.',
    cta: lang === 'en' ? 'Open the template' : 'Открыть шаблон',
    afterCapstone:
      lang === 'en'
        ? "After your capstone — Meeting 6: Information Architecture. UJM and Story Map from this project become the direct input for the next module."
        : 'После капстоуна — Meeting 6: Information Architecture. UJM и Story Map из проекта становятся прямым input для следующего модуля.',
  },
  nav: {
    back: lang === 'en' ? 'Back to Meeting 5' : 'К Meeting 5',
    next: lang === 'en' ? 'Continue to Meeting 6' : 'Перейти к Meeting 6',
  },
})

// ---- Subcomponents ----

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function StepBadge({ step, title }: { step: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
        {step}
      </span>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  )
}

function PersonaCard({ t }: { t: ReturnType<typeof T> }) {
  return (
    <div className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-sky-50 p-6 md:p-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 flex flex-col items-center md:items-start">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-5xl shadow-lg">
            🧑‍💻
          </div>
          <div className="mt-3 text-center md:text-left">
            <div className="text-2xl font-bold">{t.persona.name}</div>
            <div className="text-sm text-stone-600">{t.persona.age} · {t.persona.role}</div>
            <div className="text-xs text-stone-500 mt-1">{t.persona.context}</div>
          </div>
        </div>

        <div className="flex-1 grid md:grid-cols-2 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" />
              {t.persona.goals}
            </div>
            <ul className="space-y-1.5">
              {t.persona.goalsList.map((g, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-rose-700 mb-2 flex items-center gap-1.5">
              <XCircle className="w-3.5 h-3.5" />
              {t.persona.pains}
            </div>
            <ul className="space-y-1.5">
              {t.persona.painsList.map((p, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <span className="text-rose-500 mt-0.5">✕</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-emerald-200/60">
        <div className="flex items-start gap-2.5">
          <Quote className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
          <p className="text-base italic text-stone-700">«{t.persona.quote}»</p>
        </div>
      </div>
    </div>
  )
}

function EmotionalCurve({ t }: { t: ReturnType<typeof T> }) {
  const stages = t.curve.stages
  const W = 800
  const H = 240
  const padX = 60
  const padY = 30
  const innerW = W - padX * 2
  const innerH = H - padY * 2

  const points = stages.map((s, i) => {
    const x = padX + (innerW * i) / (stages.length - 1)
    const y = padY + innerH - ((s.y - 1) / 4) * innerH
    return { ...s, x, y }
  })

  const path = points
    .map((p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`
      const prev = points[i - 1]
      const cpx = (prev.x + p.x) / 2
      return `Q ${cpx} ${prev.y} ${p.x} ${p.y}`
    })
    .join(' ')

  const areaPath = `${path} L ${points[points.length - 1].x} ${H - padY} L ${points[0].x} ${H - padY} Z`

  return (
    <div className="rounded-2xl border bg-white p-5 md:p-6">
      <div className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
          <defs>
            <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.04" />
            </linearGradient>
          </defs>

          {/* Y axis labels */}
          {[5, 4, 3, 2, 1].map((y, i) => (
            <g key={y}>
              <line
                x1={padX}
                y1={padY + (innerH * i) / 4}
                x2={W - padX}
                y2={padY + (innerH * i) / 4}
                stroke="#e7e5e4"
                strokeWidth="1"
                strokeDasharray="2 4"
              />
              <text
                x={padX - 8}
                y={padY + (innerH * i) / 4 + 4}
                textAnchor="end"
                className="text-[10px] fill-stone-400 font-mono"
              >
                {['😀', '🙂', '😐', '😟', '😡'][i]}
              </text>
            </g>
          ))}

          {/* Filled area */}
          <path d={areaPath} fill="url(#curveGradient)" />
          {/* Curve */}
          <path d={path} fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />

          {/* Points */}
          {points.map((p, i) => {
            const isDip = p.y === Math.max(...points.map((pp) => pp.y))
            return (
              <g key={i}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={isDip ? 12 : 8}
                  fill={isDip ? '#ef4444' : '#10b981'}
                  stroke="white"
                  strokeWidth="3"
                />
                <text x={p.x} y={p.y + 5} textAnchor="middle" className="text-[14px]">
                  {p.emoji}
                </text>
                <text
                  x={p.x}
                  y={H - 8}
                  textAnchor="middle"
                  className="text-[11px] fill-stone-600 font-semibold"
                >
                  {p.label}
                </text>
              </g>
            )
          })}

          {/* Annotation arrow on dip */}
          {(() => {
            const dipPoint = points.find((p) => p.y === Math.max(...points.map((pp) => pp.y)))
            if (!dipPoint) return null
            return (
              <g>
                <line
                  x1={dipPoint.x + 30}
                  y1={dipPoint.y - 30}
                  x2={dipPoint.x + 8}
                  y2={dipPoint.y - 8}
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <polygon
                  points={`${dipPoint.x + 8},${dipPoint.y - 8} ${dipPoint.x + 16},${dipPoint.y - 14} ${dipPoint.x + 14},${dipPoint.y - 4}`}
                  fill="#ef4444"
                />
                <text
                  x={dipPoint.x + 35}
                  y={dipPoint.y - 35}
                  className="text-[12px] fill-red-600 font-bold"
                >
                  {t.curve.annotation}
                </text>
              </g>
            )
          })()}
        </svg>
      </div>

      <div className="mt-4 grid md:grid-cols-5 gap-2">
        {stages.map((s, i) => (
          <div
            key={i}
            className={`text-xs p-2 rounded border ${
              s.y === Math.max(...stages.map((ss) => ss.y))
                ? 'bg-red-50 border-red-200'
                : 'bg-stone-50 border-stone-200'
            }`}
          >
            <div className="font-semibold text-stone-800 mb-1">
              {s.emoji} {s.label}
            </div>
            <div className="text-stone-600">{s.note}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function InterviewCard({ interview, t }: { interview: Interview; t: ReturnType<typeof T> }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      layout
      className="rounded-xl border bg-white p-5 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-2xl">
          {interview.emoji}
        </div>
        <div>
          <div className="font-bold">{interview.name}</div>
          <div className="text-xs text-stone-500">
            {interview.age} · {interview.role}
          </div>
        </div>
      </div>
      <div className="text-sm italic text-stone-700 mb-3">{interview.quote}</div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
      >
        {open ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        {open ? (t === T('ru') ? 'Свернуть' : 'Collapse') : t === T('ru') ? 'Полная цитата' : 'Full quote'}
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <div className="pt-4 mt-3 border-t border-stone-200 text-sm text-stone-700 leading-relaxed">
          {interview.fullText}
        </div>
        <div className="mt-3 grid gap-2">
          <div className="text-xs">
            <span className="font-semibold text-rose-700">Pain:</span>{' '}
            <span className="text-stone-700">{interview.pain}</span>
          </div>
          <div className="text-xs">
            <span className="font-semibold text-emerald-700">Insight:</span>{' '}
            <span className="text-stone-700">{interview.insight}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function TestResultsBlock({ t }: { t: ReturnType<typeof T> }) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">{t.testResults.setup}</div>
          <ul className="space-y-1.5 text-sm">
            {t.testResults.setupItems.map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">{t.testResults.summary}</div>
          <ul className="space-y-1.5 text-sm">
            {t.testResults.summaryItems.map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-stone-400 mt-0.5">•</span>
                <span dangerouslySetInnerHTML={{ __html: s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t">
        <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">{t.testResults.tasks}</div>
        <div className="space-y-3">
          {t.testResults.tasksData.map((task, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  task.success ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
                }`}
              >
                {task.success ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-stone-900 truncate">{task.label}</div>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex-1 h-2 rounded-full bg-stone-100 overflow-hidden">
                    <div
                      className={`h-full ${task.success ? 'bg-emerald-500' : 'bg-rose-500'}`}
                      style={{ width: task.actual }}
                    />
                  </div>
                  <div className="text-xs tabular-nums text-stone-600 w-32 text-right">
                    target {task.target} · <span className="font-bold">actual {task.actual}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PlayerStatsTable({ t }: { t: ReturnType<typeof T> }) {
  const headers = t.playerStats.headers
  const rows = t.playerStats.rows
  const agg = t.playerStats.aggregate

  const PassFail = ({ ok }: { ok: boolean }) =>
    ok ? (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
        <CheckCircle2 className="w-4 h-4" />
      </span>
    ) : (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-rose-700">
        <XCircle className="w-4 h-4" />
      </span>
    )

  return (
    <div className="rounded-2xl border bg-white overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-stone-50 border-b">
            <tr>
              <th className="px-3 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-stone-600 w-10">
                {headers.num}
              </th>
              <th className="px-3 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-stone-600 min-w-[160px]">
                {headers.player}
              </th>
              <th className="px-3 py-3 text-center text-[11px] font-bold uppercase tracking-wider text-stone-600">
                {headers.t1}
              </th>
              <th className="px-3 py-3 text-center text-[11px] font-bold uppercase tracking-wider text-stone-600">
                {headers.t2}
              </th>
              <th className="px-3 py-3 text-center text-[11px] font-bold uppercase tracking-wider text-stone-600">
                {headers.t3}
              </th>
              <th className="px-3 py-3 text-center text-[11px] font-bold uppercase tracking-wider text-stone-600">
                {headers.max}
              </th>
              <th className="px-3 py-3 text-center text-[11px] font-bold uppercase tracking-wider text-stone-600">
                {headers.stage}
              </th>
              <th className="px-3 py-3 text-center text-[11px] font-bold uppercase tracking-wider text-stone-600">
                {headers.time}
              </th>
              <th className="px-3 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-stone-600 min-w-[200px]">
                {headers.note}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {rows.map((r) => (
              <tr key={r.n} className="hover:bg-stone-50/60 transition-colors">
                <td className="px-3 py-3 text-stone-500 font-mono text-xs">{r.n}</td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-lg flex-shrink-0">
                      {r.emoji}
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900">{r.name}</div>
                      <div className="text-xs text-stone-500">
                        {r.age} · {r.role}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 text-center">
                  <PassFail ok={r.t1} />
                </td>
                <td className="px-3 py-3 text-center">
                  <PassFail ok={r.t2} />
                </td>
                <td className="px-3 py-3 text-center">
                  <PassFail ok={r.t3} />
                </td>
                <td className="px-3 py-3 text-center">
                  <span
                    className={`font-mono font-semibold tabular-nums ${r.max >= 100 ? 'text-emerald-700' : 'text-rose-700'}`}
                  >
                    {r.max}
                  </span>
                </td>
                <td className="px-3 py-3 text-center">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded">
                    <Zap className="w-3 h-3" />
                    {r.stage}
                  </span>
                </td>
                <td className="px-3 py-3 text-center text-xs text-stone-600 font-mono tabular-nums">{r.time}</td>
                <td className="px-3 py-3 text-xs text-stone-700">{r.note}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-stone-50 border-t-2 border-stone-200">
              <td className="px-3 py-3" />
              <td className="px-3 py-3 text-xs font-bold uppercase tracking-wider text-stone-700">{agg.label}</td>
              <td className="px-3 py-3 text-center text-xs font-bold text-emerald-700 tabular-nums">{agg.t1}</td>
              <td className="px-3 py-3 text-center text-xs font-bold text-emerald-700 tabular-nums">{agg.t2}</td>
              <td className="px-3 py-3 text-center text-xs font-bold text-rose-700 tabular-nums">{agg.t3}</td>
              <td className="px-3 py-3 text-center text-xs font-bold text-stone-700 font-mono tabular-nums">{agg.max}</td>
              <td className="px-3 py-3 text-center text-xs font-bold text-red-700">{agg.stage}</td>
              <td className="px-3 py-3 text-center text-xs font-bold text-stone-700 font-mono tabular-nums">{agg.time}</td>
              <td className="px-3 py-3 text-xs font-semibold text-stone-900">{agg.note}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

function MoSCoWBoard({ t }: { t: ReturnType<typeof T> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {t.moscow.columns.map((col) => (
        <div key={col.key} className={`rounded-xl border-2 p-4 ${col.color}`}>
          <div className="flex items-center gap-2 mb-3">
            <span className={`w-3 h-3 rounded-full ${col.dot}`} />
            <h4 className="font-bold text-sm">{col.title}</h4>
            <span className="ml-auto text-xs opacity-60">{col.items.length}</span>
          </div>
          <div className="space-y-3">
            {col.items.map((item, i) => (
              <div key={i} className="rounded-lg bg-white/60 p-3 text-xs">
                <div className="font-semibold mb-1">{item.role}</div>
                <div className="text-stone-700">{item.want}</div>
                <div className="text-stone-600 italic mt-1">{item.why}</div>
                <div className="mt-2 pt-2 border-t border-stone-200/60 text-[10px] text-stone-500">
                  {item.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function VerdictBlock({ t }: { t: ReturnType<typeof T> }) {
  return (
    <div className="rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-emerald-100/40 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <Trophy className="w-10 h-10 text-emerald-600" />
        <div>
          <div className="text-2xl font-bold text-emerald-900">{t.verdict.confirmed}</div>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">{t.verdict.why}</div>
        <p className="text-sm text-stone-700">{t.verdict.whyText}</p>
      </div>

      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">{t.verdict.impact}</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {t.verdict.impactItems.map((m, i) => (
            <div key={i} className="rounded-lg bg-white p-3 border border-emerald-200">
              <div className="text-[11px] text-stone-500 mb-1">{m.label}</div>
              <div className="flex items-baseline gap-2">
                <span className="text-stone-400 line-through text-sm">{m.from}</span>
                <ArrowRight className="w-3 h-3 text-emerald-500" />
                <span className="text-emerald-700 font-bold text-base">{m.to}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ---- Main Page ----

export default function HomeworkPage() {
  const { lang } = useLanguage()
  const t = T(lang)

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-white/85 backdrop-blur-md border-b">
        <div className="max-w-[1440px] mx-auto px-6 py-3 flex items-center gap-4">
          <Link
            href="/meeting/5/part/part-2"
            className="flex items-center gap-1 text-sm text-stone-600 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.nav.back}
          </Link>
          <div className="flex-1" />
          <span className="inline-flex items-center gap-1.5 text-xs text-stone-500">
            <GraduationCap className="w-4 h-4" />
            {t.hero.badge}
          </span>
        </div>
      </div>

      <article className="max-w-[1440px] mx-auto px-6 py-10">
        {/* HERO */}
        <FadeIn>
          <header className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.hero.title}</h1>
            <p className="text-lg text-stone-600 leading-relaxed">{t.hero.tagline}</p>
          </header>

          {/* Hypothesis banner */}
          <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 border-2 border-amber-200 p-6 md:p-8 mb-16">
            <div className="grid md:grid-cols-3 gap-4 mb-5">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                  {t.hypothesisBox.productLabel}
                </div>
                <div className="text-base font-semibold">{t.hypothesisBox.productText}</div>
                <a
                  href={t.hypothesisBox.productHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-1 text-xs text-amber-700 hover:text-amber-900 underline underline-offset-2"
                >
                  {t.hypothesisBox.productLinkLabel}
                </a>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                  {t.hypothesisBox.personaLabel}
                </div>
                <div className="text-base font-semibold">{t.hypothesisBox.personaText}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                  {t.hypothesisBox.kpiLabel}
                </div>
                <div className="text-base font-semibold inline-flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-600" />
                  {t.hypothesisBox.kpiText}
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-amber-200">
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700 mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                {t.hypothesisBox.label}
              </div>
              <p className="text-xl md:text-2xl font-bold leading-snug text-stone-900">
                «{t.hypothesisBox.text}»
              </p>
            </div>
          </div>
        </FadeIn>

        {/* STEP 1 — PERSONA */}
        <FadeIn>
          <section className="mb-16">
            <StepBadge step={t.steps.persona.step} title={t.steps.persona.title} />
            <p className="text-base text-stone-600 mb-5">{t.steps.persona.lead}</p>
            <PersonaCard t={t} />
          </section>
        </FadeIn>

        {/* STEP 2 — PLAY SNAKE */}
        <FadeIn>
          <section className="mb-16">
            <StepBadge step={t.steps.play.step} title={t.steps.play.title} />
            <p className="text-base text-stone-600 mb-5">{t.steps.play.lead}</p>

            {/* Real 3D game CTA */}
            <div className="mb-5 rounded-xl border-2 border-purple-200 bg-gradient-to-r from-purple-50 via-violet-50 to-fuchsia-50 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🎮</div>
                <div>
                  <div className="font-bold text-stone-900 text-base">
                    {lang === 'en'
                      ? 'This study is based on a real 3D Snake game'
                      : 'Этот разбор — на основе реальной 3D Snake игры'}
                  </div>
                  <div className="text-sm text-stone-600 mt-1">
                    {lang === 'en'
                      ? 'Three.js + React 19 + Vite. Open the production version to feel the actual game first — then come back and try the embedded 2D demo below.'
                      : 'Three.js + React 19 + Vite. Откройте продакшен-версию, чтобы почувствовать реальную игру — потом вернитесь и попробуйте встроенную 2D-демку ниже.'}
                  </div>
                </div>
              </div>
              <a
                href="https://snake-3d-gameweb.vercel.app/game?mode=web"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg text-sm transition-colors"
              >
                {lang === 'en' ? 'Play 3D Snake' : 'Играть в 3D Snake'}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="rounded-2xl border bg-white p-6 md:p-8">
              <SnakeGame />
            </div>
          </section>
        </FadeIn>

        {/* STEP 3 — EMOTIONAL CURVE */}
        <FadeIn>
          <section className="mb-16">
            <StepBadge step={t.steps.journey.step} title={t.steps.journey.title} />
            <p className="text-base text-stone-600 mb-5">{t.steps.journey.lead}</p>
            <EmotionalCurve t={t} />
          </section>
        </FadeIn>

        {/* STEP 4 — INTERVIEWS */}
        <FadeIn>
          <section className="mb-16">
            <StepBadge step={t.steps.interviews.step} title={t.steps.interviews.title} />
            <p className="text-base text-stone-600 mb-5">{t.steps.interviews.lead}</p>
            <div className="grid md:grid-cols-3 gap-4 mb-5">
              {t.interviewsData.map((iv, i) => (
                <InterviewCard key={i} interview={iv} t={t} />
              ))}
            </div>
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5" />
                {lang === 'en' ? 'Affinity map clusters' : 'Кластеры affinity map'}
              </div>
              <p className="text-sm text-stone-700">{t.affinity}</p>
            </div>
          </section>
        </FadeIn>

        {/* STEP 5 — USABILITY TEST */}
        <FadeIn>
          <section className="mb-16">
            <StepBadge step={t.steps.test.step} title={t.steps.test.title} />
            <p className="text-base text-stone-600 mb-5">{t.steps.test.lead}</p>
            <TestResultsBlock t={t} />

            {/* Player-by-player breakdown */}
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2">{t.playerStats.title}</h3>
              <p className="text-sm text-stone-600 mb-4">{t.playerStats.lead}</p>
              <PlayerStatsTable t={t} />
            </div>
          </section>
        </FadeIn>

        {/* STEP 6 — MOSCOW */}
        <FadeIn>
          <section className="mb-16">
            <StepBadge step={t.steps.priorities.step} title={t.steps.priorities.title} />
            <p className="text-base text-stone-600 mb-5">{t.steps.priorities.lead}</p>
            <MoSCoWBoard t={t} />
          </section>
        </FadeIn>

        {/* STEP 7 — VERDICT */}
        <FadeIn>
          <section className="mb-16">
            <StepBadge step={t.steps.verdict.step} title={t.steps.verdict.title} />
            <VerdictBlock t={t} />
          </section>
        </FadeIn>

        {/* Your turn CTA */}
        <FadeIn>
          <section className="mb-12 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-white p-8 md:p-10 text-center">
            <Flame className="w-10 h-10 mx-auto mb-4 text-amber-400" />
            <h2 className="text-3xl font-bold mb-3">{t.yourTurn.title}</h2>
            <p className="text-stone-200 max-w-2xl mx-auto mb-6 leading-relaxed">{t.yourTurn.text}</p>
            <Link href="/meeting/3/template">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold">
                {t.yourTurn.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <p className="text-xs text-stone-400 mt-5 max-w-xl mx-auto">{t.yourTurn.afterCapstone}</p>
          </section>
        </FadeIn>

        {/* Bottom nav */}
        <nav className="pt-6 border-t flex items-center justify-between gap-4">
          <Link href="/meeting/5/part/part-2">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t.nav.back}
            </Button>
          </Link>
          <Link href="/meeting/6">
            <Button className="gap-2">
              {t.nav.next}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </nav>
      </article>
    </div>
  )
}
