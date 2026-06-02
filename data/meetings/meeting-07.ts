import type { Meeting } from '../types'

export const meeting07: Meeting = {
  id: '7',
  number: 7,
  title: 'Типографика и сетки',
  description:
    'Основы типографики: анатомия шрифтов, подбор и сочетание гарнитур, типографическая шкала. Модульные сетки: 8px-система, 12-колоночные сетки, адаптивные брейкпоинты и реальные примеры из дизайн-систем Apple, Google и Microsoft.',
  icon: 'Type',
  color: 'bg-pink-500/10 text-pink-600',
  parts: [
    // =============================================
    // PART 1 — Типографика (45 мин)
    // =============================================
    {
      id: 'part-1',
      title: 'Типографика',
      subtitle:
        'Анатомия шрифтов, классификация, подбор пар, типографическая шкала и веб-шрифты',
      duration: '45 мин',
      sections: [
        // === ВВЕДЕНИЕ ===
        {
          type: 'heading' as const,
          content: 'Зачем дизайнеру разбираться в типографике',
        },
        {
          type: 'text' as const,
          content:
            'Текст составляет **до 95% контента** в вебе. Типографика — это не просто выбор «красивого шрифта». Это система визуальной коммуникации, которая определяет, насколько легко пользователь прочитает, поймёт и запомнит информацию. Плохая типографика убивает даже самый продуманный UX.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'Правило 95%: если 95% вашего интерфейса — текст, то 95% дизайна — это типографика. Овладейте ей, и ваши проекты станут на порядок качественнее.',
        },
        {
          type: 'quote' as const,
          text: 'Типографика — это то, что язык выглядит.',
          author: 'Эллен Луптон',
          role: 'Автор книги «Thinking with Type»',
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=QrNi9FmdlxY',
          title: 'Основы типографики для веб-дизайна',
          caption:
            'Введение в типографику: почему шрифт — это голос вашего продукта',
        },
        {
          type: 'divider' as const,
        },

        // === АНАТОМИЯ ШРИФТА ===
        {
          type: 'heading' as const,
          content: 'Анатомия шрифта',
        },
        {
          type: 'text' as const,
          content:
            'Прежде чем выбирать шрифты, нужно понять их строение. Каждый символ состоит из множества элементов, и знание этих элементов помогает осознанно подбирать гарнитуры и находить проблемы в типографике.',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Baseline (базовая линия)',
              definition:
                'Невидимая линия, на которой «стоят» буквы. Все символы выравниваются по ней.',
            },
            {
              term: 'X-height (высота строчных)',
              definition:
                'Высота строчной буквы «x». Влияет на читаемость — чем выше x-height, тем читабельнее шрифт при малых размерах.',
            },
            {
              term: 'Ascender (выносной верхний элемент)',
              definition:
                'Часть буквы, выходящая выше x-height (например, «b», «d», «h»).',
            },
            {
              term: 'Descender (выносной нижний элемент)',
              definition:
                'Часть буквы, опускающаяся ниже baseline (например, «g», «p», «y»).',
            },
            {
              term: 'Cap height (высота прописных)',
              definition: 'Высота заглавных букв от baseline до верхнего края.',
            },
            {
              term: 'Serif (засечка)',
              definition:
                'Небольшой штрих или утолщение на концах основных линий буквы.',
            },
            {
              term: 'Kerning (кернинг)',
              definition:
                'Расстояние между конкретной парой символов. Плохой кернинг создаёт визуальные «дыры» или «слипания» в тексте.',
            },
            {
              term: 'Leading (интерлиньяж)',
              definition:
                'Расстояние между базовыми линиями соседних строк. В CSS — line-height.',
            },
            {
              term: 'Tracking (трекинг)',
              definition:
                'Равномерное изменение расстояния между всеми символами в слове или блоке. В CSS — letter-spacing.',
            },
          ],
        },
        {
          type: 'diagram' as const,
          title: 'Анатомия буквы «Typography»',
          description:
            'Основные метрики и элементы, которые определяют строение любого шрифта',
          items: [
            'Cap height — верхняя граница заглавных букв',
            'X-height — высота строчных букв (без выносных)',
            'Baseline — линия, на которой стоят буквы',
            'Ascender line — верхняя граница выносных элементов',
            'Descender line — нижняя граница выносных элементов',
            'Counter — внутреннее пространство буквы (o, e, d)',
            'Stem — основной вертикальный штрих буквы',
            'Bowl — округлая часть буквы (b, d, p)',
            'Serif — засечка на концах штрихов',
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-07-font-anatomy.webp',
          alt: 'Полная анатомия шрифта: baseline, x-height, cap height, ascender, descender, terminal, ear, eye, spine, spur, link, loop, tail, stem, stroke, serif, counter, bowl, aperture, finial, shoulder',
          caption:
            'Визуальное руководство по анатомии шрифта — запомните эти термины',
        },
        {
          type: 'divider' as const,
        },

        // === КЛАССИФИКАЦИЯ ШРИФТОВ ===
        {
          type: 'heading' as const,
          content: 'Классификация шрифтов',
        },
        {
          type: 'text' as const,
          content:
            'Все шрифты делятся на несколько основных категорий. Каждая категория несёт свой характер, настроение и лучше подходит для определённых задач.',
        },
        {
          type: 'comparison' as const,
          title: 'Serif vs Sans-serif vs Monospace',
          items: [
            {
              label: 'Засечки',
              ux: 'Serif: есть засечки (Times New Roman, Georgia, Playfair Display)',
              ui: 'Sans-serif: без засечек (Inter, Roboto, Helvetica)',
            },
            {
              label: 'Характер',
              ux: 'Serif: классика, элегантность, авторитет, традиция',
              ui: 'Sans-serif: современность, чистота, минимализм',
            },
            {
              label: 'Лучше для',
              ux: 'Serif: длинные тексты (книги, статьи), брендинг премиум-сегмента',
              ui: 'Sans-serif: интерфейсы, мобильные приложения, дашборды',
            },
            {
              label: 'Читаемость на экране',
              ux: 'Serif: хорошо при крупных размерах, хуже на мелком экране',
              ui: 'Sans-serif: отлично на любых размерах и разрешениях',
            },
            {
              label: 'Monospace',
              ux: 'Все символы одинаковой ширины (Fira Code, JetBrains Mono)',
              ui: 'Идеален для кода, таблиц с числами, терминалов',
            },
          ],
        },
        {
          type: 'font-showcase' as const,
          groups: [
            {
              title: 'Serif (с засечками)',
              kind: 'serif' as const,
              families: [
                { name: 'Times New Roman', stack: "'Times New Roman', Times, serif", description: 'классика печати' },
                { name: 'Georgia', stack: "Georgia, 'Times New Roman', serif", description: 'оптимизирован для экранов' },
                { name: 'Playfair Display', stack: "'Playfair Display', Georgia, serif", description: 'элегантные заголовки' },
                { name: 'Merriweather', stack: "Merriweather, Georgia, serif", description: 'отличная читаемость на экране' },
                { name: 'Lora', stack: "Lora, Georgia, serif", description: 'мягкий, дружелюбный стиль' },
              ],
            },
            {
              title: 'Sans-serif (без засечек)',
              kind: 'sans-serif' as const,
              families: [
                { name: 'Inter', stack: "Inter, system-ui, -apple-system, sans-serif", description: 'стандарт для интерфейсов' },
                { name: 'Roboto', stack: "Roboto, system-ui, sans-serif", description: 'Android и Material Design' },
                { name: 'SF Pro', stack: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif", description: 'Apple (iOS, macOS)' },
                { name: 'Helvetica Neue', stack: "'Helvetica Neue', Helvetica, Arial, sans-serif", description: 'вечная классика' },
                { name: 'Open Sans', stack: "'Open Sans', system-ui, sans-serif", description: 'универсальный веб-шрифт' },
              ],
            },
            {
              title: 'Monospace (моноширинный)',
              kind: 'monospace' as const,
              families: [
                { name: 'JetBrains Mono', stack: "'JetBrains Mono', 'Cascadia Code', Consolas, monospace", description: 'популярен у разработчиков' },
                { name: 'Fira Code', stack: "'Fira Code', 'JetBrains Mono', Consolas, monospace", description: 'лигатуры для кода' },
                { name: 'Source Code Pro', stack: "'Source Code Pro', Consolas, monospace", description: 'Adobe, хорошая читаемость' },
                { name: 'Cascadia Code', stack: "'Cascadia Code', 'Cascadia Mono', Consolas, monospace", description: 'Microsoft, VS Code' },
                { name: 'IBM Plex Mono', stack: "'IBM Plex Mono', Consolas, monospace", description: 'строгий, технический стиль' },
              ],
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            'Дополнительные категории: **Display/Decorative** — для крупных заголовков и лого (Lobster, Pacifico). **Handwritten** — рукописные шрифты для акцентов (Caveat, Dancing Script). В интерфейсах используйте их крайне осторожно и только для декора!',
        },
        {
          type: 'divider' as const,
        },

        // === ПОДБОР ПАР ШРИФТОВ ===
        {
          type: 'heading' as const,
          content: 'Правила подбора шрифтовых пар',
        },
        {
          type: 'text' as const,
          content:
            'Один из самых сложных навыков в типографике — подобрать два шрифта, которые работают вместе. Хорошая пара создаёт контраст и иерархию, плохая — хаос и визуальный шум.',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Правило двух шрифтов',
              definition:
                'В большинстве проектов достаточно двух шрифтов: один для заголовков, второй для основного текста. Три — максимум.',
            },
            {
              term: 'Контраст, а не конфликт',
              definition:
                'Шрифты должны отличаться, но не конфликтовать. Serif + Sans-serif — классическая рабочая пара.',
            },
            {
              term: 'Единая x-height',
              definition:
                'При комбинировании шрифтов выбирайте пары с похожей x-height, чтобы текст выглядел гармонично.',
            },
            {
              term: 'Одно семейство — разные начертания',
              definition:
                'Самый безопасный способ: один шрифт с Bold для заголовков и Regular для текста (например, Inter Bold + Inter Regular).',
            },
          ],
        },
        {
          type: 'font-pair-showcase' as const,
          goodLabel: 'Рабочие пары',
          badLabel: 'Плохие сочетания',
          good: [
            {
              headingName: 'Playfair Display',
              headingStack: "'Playfair Display', Georgia, serif",
              headingSample: 'Классика встречает современность',
              bodyName: 'Source Sans Pro',
              bodyStack: "'Source Sans 3', 'Source Sans Pro', system-ui, sans-serif",
              bodySample: 'Элегантный serif для заголовков + чистый sans-serif для длинных текстов. Контраст без конфликта.',
              note: 'классика + современность',
            },
            {
              headingName: 'Montserrat',
              headingStack: "Montserrat, system-ui, sans-serif",
              headingSample: 'Геометрия и мягкость',
              bodyName: 'Merriweather',
              bodyStack: "Merriweather, Georgia, serif",
              bodySample: 'Геометрический sans-serif даёт сильный заголовок, а мягкий serif в теле текста снимает напряжение и приглашает читать.',
              note: 'геометрия + мягкость',
            },
            {
              headingName: 'Roboto',
              headingStack: "Roboto, system-ui, sans-serif",
              headingSample: 'Одна семья, разный характер',
              bodyName: 'Roboto Slab',
              bodyStack: "'Roboto Slab', Georgia, serif",
              bodySample: 'Тот же скелет, но slab-засечки в теле текста добавляют веса и читаемости в длинных абзацах. Безопасный выбор.',
              note: 'один стиль, разный характер',
            },
            {
              headingName: 'Oswald',
              headingStack: "Oswald, 'Arial Narrow', sans-serif",
              headingSample: 'Выразительность и нейтральность',
              bodyName: 'Lato',
              bodyStack: "Lato, system-ui, sans-serif",
              bodySample: 'Узкий выразительный заголовок Oswald + спокойный нейтральный Lato в теле. Заголовок кричит, текст рассказывает.',
              note: 'выразительность + нейтральность',
            },
            {
              headingName: 'Inter',
              headingStack: "Inter, system-ui, -apple-system, sans-serif",
              headingSample: 'Интерфейс с элегантными акцентами',
              bodyName: 'Playfair Display',
              bodyStack: "'Playfair Display', Georgia, serif",
              bodySample: 'Перевёрнутый сценарий: Inter в UI, Playfair Display — только в hero-цитатах. Точечная элегантность без потери читаемости.',
              note: 'интерфейс с элегантными акцентами',
            },
          ],
          bad: [
            {
              headingName: 'Times New Roman',
              headingStack: "'Times New Roman', Times, serif",
              headingSample: 'Слишком похожие',
              bodyName: 'Georgia',
              bodyStack: "Georgia, 'Times New Roman', serif",
              bodySample: 'Оба serif, оба с одинаковой структурой засечек, оба тёплые. Заголовок и текст сливаются — нет иерархии, нет контраста.',
              note: 'слишком похожи, нет контраста',
            },
            {
              headingName: 'Comic Sans',
              headingStack: "'Comic Sans MS', 'Comic Sans', cursive",
              headingSample: 'Декоративные конфликтуют',
              bodyName: 'Papyrus',
              bodyStack: "Papyrus, 'Snell Roundhand', fantasy",
              bodySample: 'Два декоративных шрифта одновременно. Каждый кричит «посмотри на меня». Доверие пользователя к продукту падает за 2 секунды.',
              note: 'оба декоративные, конфликтуют',
            },
            {
              headingName: 'Lobster',
              headingStack: "Lobster, 'Brush Script MT', cursive",
              headingSample: 'Два «кричащих» шрифта',
              bodyName: 'Pacifico',
              bodyStack: "Pacifico, 'Brush Script MT', cursive",
              bodySample: 'Оба handwriting/script, оба с тяжёлым характером. Глаз не знает, на чём остановиться — ни одиного нейтрального якоря.',
              note: 'два «кричащих» шрифта',
            },
            {
              headingName: 'Arial',
              headingStack: "Arial, Helvetica, sans-serif",
              headingSample: 'Невозможно различить',
              bodyName: 'Helvetica',
              bodyStack: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              bodySample: 'Глифы почти идентичны на скрин-уровне. Контраста нет, но есть иллюзия «двух шрифтов» — худшее из обоих миров.',
              note: 'невозможно различить',
            },
            {
              headingName: '5+ шрифтов',
              headingStack: "Inter, sans-serif",
              headingSample: 'chaos',
              chaosWords: [
                { text: 'Визуальный', stack: "'Playfair Display', Georgia, serif" },
                { text: 'хаос', stack: "Lobster, cursive" },
                { text: 'на', stack: "'Comic Sans MS', cursive" },
                { text: 'одной', stack: "Oswald, sans-serif" },
                { text: 'странице', stack: "Pacifico, cursive" },
              ],
              bodyName: 'Mixed',
              bodyStack: "Inter, sans-serif",
              bodySample: '5 разных шрифтов в одном заголовке — глаз не складывает фразу как целое. Каждый слово требует отдельной обработки.',
              note: '5+ разных шрифтов на одной странице — визуальный хаос',
            },
          ],
        },
        {
          type: 'before-after' as const,
          title: 'Подбор шрифтовых пар',
          before: {
            label: 'Плохо',
            description:
              'Заголовок: Comic Sans MS, Текст: Papyrus, Подписи: Lobster. Три декоративных шрифта конфликтуют друг с другом. Нет иерархии, текст сложно читать, выглядит непрофессионально.',
          },
          after: {
            label: 'Хорошо',
            description:
              'Заголовок: Playfair Display Bold, Текст: Source Sans Pro Regular. Два шрифта с чётким контрастом — serif для акцента, sans-serif для читаемости. Ясная иерархия, профессиональный вид.',
          },
        },
        {
          type: 'divider' as const,
        },

        // === ТИПОГРАФИЧЕСКАЯ ШКАЛА ===
        {
          type: 'heading' as const,
          content: 'Типографическая шкала (Type Scale)',
        },
        {
          type: 'text' as const,
          content:
            'Типографическая шкала — это **система размеров шрифта**, основанная на математическом соотношении. Вместо произвольных размеров (13px, 17px, 21px) используется последовательность, где каждый следующий размер умножается на определённый коэффициент.',
        },
        {
          type: 'type-scale-showcase' as const,
          title: 'Модульная типографическая шкала',
          description: 'Каждый размер = предыдущий × ratio',
          ratio: '1.250 (Major Third)',
          base: '16px',
          fontStack: "Inter, system-ui, -apple-system, sans-serif",
          steps: [
            { label: 'xs', px: 12, rem: '0.75rem', usage: 'мета-информация, подписи', sample: 'Caption · 12px' },
            { label: 'sm', px: 14, rem: '0.875rem', usage: 'вспомогательный текст, лейблы форм', sample: 'Label · 14px' },
            { label: 'base', px: 16, rem: '1rem', usage: 'основной текст, параграфы', sample: 'Body · 16px' },
            { label: 'lg', px: 20, rem: '1.25rem', usage: 'подзаголовки, выделенный текст', sample: 'Lead · 20px' },
            { label: 'xl', px: 25, rem: '1.563rem', usage: 'заголовки секций (H3)', sample: 'H3 · 25px' },
            { label: '2xl', px: 31, rem: '1.953rem', usage: 'заголовки страниц (H2)', sample: 'H2 · 31px' },
            { label: '3xl', px: 39, rem: '2.441rem', usage: 'крупные заголовки (H1)', sample: 'H1 · 39px' },
            { label: '4xl', px: 49, rem: '3.052rem', usage: 'герой-секции, промо-блоки', sample: 'Hero · 49px' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'Популярные коэффициенты шкалы: **1.067** (Minor Second) — минимальный контраст, **1.200** (Minor Third) — мягкий, **1.250** (Major Third) — сбалансированный, **1.333** (Perfect Fourth) — выразительный, **1.618** (Golden Ratio) — максимальный контраст. Для интерфейсов обычно используют 1.200–1.333.',
        },
        {
          type: 'text' as const,
          content:
            'Инструмент **typescale.com** позволяет интерактивно настроить шкалу и скопировать CSS. В Tailwind CSS шкала уже встроена: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl и т.д.',
        },
        {
          type: 'divider' as const,
        },

        // === LINE HEIGHT И SPACING ===
        {
          type: 'subheading' as const,
          content: 'Межстрочный интервал (Line Height)',
        },
        {
          type: 'text' as const,
          content:
            '**Line-height** — расстояние между базовыми линиями соседних строк. Правильный интерлиньяж критически важен для читаемости длинных текстов. Слишком маленький — строки сливаются, слишком большой — текст «распадается».',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Основной текст: 1.5–1.75',
              definition:
                'Для параграфов body-текста оптимальный line-height — 1.5–1.75 от размера шрифта. Для 16px это 24–28px.',
            },
            {
              term: 'Заголовки: 1.1–1.3',
              definition:
                'Крупные заголовки нуждаются в меньшем интерлиньяже, иначе строки выглядят разрозненно.',
            },
            {
              term: 'Длина строки: 45–75 символов',
              definition:
                'Оптимальная длина строки для комфортного чтения — 45–75 символов. Слишком длинная строка утомляет глаза.',
            },
            {
              term: 'Letter-spacing для капса',
              definition:
                'Текст в UPPERCASE нуждается в увеличенном letter-spacing (0.05–0.1em), иначе буквы «слипаются».',
            },
          ],
        },
        {
          type: 'before-after' as const,
          title: 'Line-height в основном тексте',
          before: {
            label: 'Плохо: line-height 1.0',
            description:
              'Строки сливаются друг с другом, текст выглядит как сплошная стена. Глаз теряется при переходе на следующую строку. Читать больше двух предложений физически некомфортно.',
            visual: {
              kind: 'line-height-sample',
              text: 'Типографика — это не просто выбор шрифта. Это иерархия, ритм и воздух. Правильный интерлиньяж критически важен: слишком маленький — строки сливаются и глаз теряет место в тексте. Пользователь устаёт за два абзаца и закрывает страницу.',
              lineHeight: 1.0,
              fontSize: 15,
              footnote: 'слипшиеся строки · глаз теряется',
            },
          },
          after: {
            label: 'Хорошо: line-height 1.6',
            description:
              'Между строками достаточно воздуха. Глаз легко переходит со строки на строку. Текст «дышит», читать комфортно даже длинные параграфы. Профессиональный, аккуратный вид.',
            visual: {
              kind: 'line-height-sample',
              text: 'Типографика — это не просто выбор шрифта. Это иерархия, ритм и воздух. Правильный интерлиньяж критически важен: слишком маленький — строки сливаются и глаз теряет место в тексте. Пользователь устаёт за два абзаца и закрывает страницу.',
              lineHeight: 1.6,
              fontSize: 15,
              footnote: 'текст «дышит» · комфортно для длинных параграфов',
            },
          },
        },
        {
          type: 'before-after' as const,
          title: 'Длина строки',
          before: {
            label: 'Плохо: 120+ символов в строке',
            description:
              'Текст растянут на всю ширину экрана (1920px). Глаз не может отследить, где начинается следующая строка. Пользователь теряет место в тексте и перечитывает строки.',
          },
          after: {
            label: 'Хорошо: 60–70 символов в строке',
            description:
              'Текстовый блок ограничен до max-width: 680px. Строки оптимальной длины. Глаз естественно переходит на следующую строку. Чтение становится комфортным и быстрым.',
          },
        },
        {
          type: 'divider' as const,
        },

        // === ВЕБ-ШРИФТЫ ===
        {
          type: 'heading' as const,
          content: 'Веб-шрифты: подключение и производительность',
        },
        {
          type: 'text' as const,
          content:
            'В вебе шрифты нужно подключать явно. Есть несколько подходов, каждый с своими плюсами и минусами для скорости загрузки и пользовательского опыта.',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'Google Fonts',
              items: [
                'Бесплатно, 1500+ шрифтов',
                'CDN — быстрая доставка',
                'Простое подключение через <link> или @import',
                'Минус: зависимость от внешнего сервиса',
                'Минус: может блокировать рендер страницы',
              ],
            },
            {
              title: 'Self-hosted (локальные)',
              items: [
                'Полный контроль над загрузкой',
                'Нет зависимости от внешних CDN',
                'Можно использовать font-display: swap',
                'Оптимально для производительности',
                'В Next.js — next/font автоматизирует это',
              ],
            },
            {
              title: 'System Fonts (системные)',
              items: [
                'Мгновенная загрузка — уже на устройстве',
                'Нулевой вес — 0 КБ дополнительных данных',
                '-apple-system, BlinkMacSystemFont, Segoe UI...',
                'GitHub, Medium, Bootstrap используют этот подход',
                'Минус: разный вид на разных ОС',
              ],
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            'FOUT vs FOIT: **FOUT** (Flash of Unstyled Text) — текст появляется в системном шрифте, потом «прыгает» при загрузке веб-шрифта. **FOIT** (Flash of Invisible Text) — текст невидим, пока шрифт не загрузится. Используйте `font-display: swap` для FOUT-стратегии — это лучше для пользователя.',
        },
        {
          type: 'text' as const,
          content:
            'В **Next.js 15** используйте `next/font` — он автоматически скачивает шрифты при сборке и раздаёт их локально, без запросов к Google. Это лучшее решение для производительности и приватности.',
        },
        {
          type: 'divider' as const,
        },

        // === READABILITY vs LEGIBILITY ===
        {
          type: 'subheading' as const,
          content: 'Читаемость (Readability) vs Разборчивость (Legibility)',
        },
        {
          type: 'text' as const,
          content:
            'Два термина, которые часто путают. **Legibility** — можно ли различить отдельные буквы. **Readability** — комфортно ли читать блоки текста. Шрифт может быть разборчивым, но нечитаемым (например, мелкий размер с маленьким line-height).',
        },
        {
          type: 'comparison' as const,
          title: 'Readability vs Legibility',
          items: [
            {
              label: 'Определение',
              ux: 'Legibility: насколько легко различить отдельные символы друг от друга',
              ui: 'Readability: насколько комфортно читать блоки текста',
            },
            {
              label: 'Что влияет',
              ux: 'Legibility: дизайн самого шрифта, контраст, размер символов',
              ui: 'Readability: line-height, длина строки, размер шрифта, контраст',
            },
            {
              label: 'Пример проблемы',
              ux: 'Legibility: шрифт, где «l» и «1» и «I» неразличимы',
              ui: 'Readability: текст 10px, line-height 1.0 на всю ширину экрана',
            },
            {
              label: 'Как тестировать',
              ux: 'Legibility: тест «Il1» — различимы ли эти символы?',
              ui: 'Readability: можете ли вы прочитать абзац из 5 строк без напряжения?',
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // === BEFORE/AFTER: ТИПОГРАФИКА В РЕАЛЬНЫХ ПРОДУКТАХ ===
        {
          type: 'heading' as const,
          content: 'До и после: типографика в реальных продуктах',
        },
        {
          type: 'before-after' as const,
          title: 'Типографика в мобильном приложении',
          before: {
            label: 'Плохо',
            description:
              'Всё одним размером (14px), одним начертанием (Regular), без иерархии. Заголовки не отличаются от текста. Кнопки сливаются с контентом. Пользователь не понимает, что главное на экране.',
            visual: {
              kind: 'typography-stack',
              frame: 'phone',
              rows: [
                { text: 'Сегодняшние заказы', fontSize: 14, fontWeight: 'normal', color: '#374151' },
                { text: 'Кофе латте — заказ #1247', fontSize: 14, fontWeight: 'normal', color: '#374151' },
                { text: 'В пути · 5 минут до доставки', fontSize: 14, fontWeight: 'normal', color: '#374151' },
                { text: 'Отследить заказ', fontSize: 14, fontWeight: 'normal', color: '#374151' },
                { text: 'Адрес: ул. Ленина, 42', fontSize: 14, fontWeight: 'normal', color: '#374151' },
              ],
              footnote: 'всё 14px Regular · нет иерархии',
            },
          },
          after: {
            label: 'Хорошо',
            description:
              'Чёткая иерархия: заголовок 24px Bold, подзаголовок 18px Medium, текст 16px Regular, метаданные 12px в приглушённом цвете. Глаз мгновенно считывает структуру экрана.',
            visual: {
              kind: 'typography-stack',
              frame: 'phone',
              rows: [
                { text: 'Сегодняшние заказы', fontSize: 12, fontWeight: 'semibold', color: '#6B7280', letterSpacing: '0.05em', textTransform: 'uppercase' },
                { text: 'Кофе латте', fontSize: 22, fontWeight: 'bold', color: '#0F172A', lineHeight: 1.2, marginTop: 8 },
                { text: 'Заказ #1247', fontSize: 14, fontWeight: 'normal', color: '#6B7280' },
                { text: 'В пути · 5 минут до доставки', fontSize: 16, fontWeight: 500, color: '#1F2937', lineHeight: 1.4, marginTop: 10 },
                { text: 'ул. Ленина, 42', fontSize: 12, color: '#9CA3AF', marginTop: 6 },
              ],
              cta: { label: 'Отследить заказ', bg: '#4F46E5', color: '#FFFFFF', size: 14 },
              footnote: '12 → 14 → 16 → 22px · вес + цвет = иерархия',
            },
          },
        },
        {
          type: 'before-after' as const,
          title: 'Типографика в дашборде',
          before: {
            label: 'Плохо',
            description:
              'Числа в таблице набраны пропорциональным шрифтом — столбцы «прыгают». Заголовки таблицы тем же стилем, что и данные. Нет визуального разделения между секциями.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              rows: [
                { text: 'Выручка', fontSize: 14, fontWeight: 'normal', color: '#1F2937' },
                { text: '$48,234.50', fontSize: 14, fontWeight: 'normal', color: '#1F2937', fontFamily: 'Inter, sans-serif' },
                { text: 'Конверсия', fontSize: 14, fontWeight: 'normal', color: '#1F2937', marginTop: 8 },
                { text: '3.47%', fontSize: 14, fontWeight: 'normal', color: '#1F2937', fontFamily: 'Inter, sans-serif' },
                { text: 'Заказы', fontSize: 14, fontWeight: 'normal', color: '#1F2937', marginTop: 8 },
                { text: '1,287', fontSize: 14, fontWeight: 'normal', color: '#1F2937', fontFamily: 'Inter, sans-serif' },
                { text: 'CAC', fontSize: 14, fontWeight: 'normal', color: '#1F2937', marginTop: 8 },
                { text: '$12.40', fontSize: 14, fontWeight: 'normal', color: '#1F2937', fontFamily: 'Inter, sans-serif' },
              ],
              footnote: 'header = data · числа «прыгают» · нет визуального разделения',
            },
          },
          after: {
            label: 'Хорошо',
            description:
              'Числа набраны шрифтом с tabular figures (font-variant-numeric: tabular-nums). Заголовки таблицы — uppercase, уменьшенный размер, увеличенный letter-spacing. Секции чётко разделены типографической иерархией.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              rows: [
                { text: 'Выручка', fontSize: 11, fontWeight: 'semibold', color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase' },
                { text: '$48,234.50', fontSize: 22, fontWeight: 'bold', color: '#0F172A', fontFamily: "'JetBrains Mono', monospace", tabular: true, lineHeight: 1.1, marginTop: 2 },
                { text: 'Конверсия', fontSize: 11, fontWeight: 'semibold', color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 14 },
                { text: '3.47%', fontSize: 22, fontWeight: 'bold', color: '#0F172A', fontFamily: "'JetBrains Mono', monospace", tabular: true, lineHeight: 1.1, marginTop: 2 },
                { text: 'Заказы', fontSize: 11, fontWeight: 'semibold', color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 14 },
                { text: '1,287', fontSize: 22, fontWeight: 'bold', color: '#0F172A', fontFamily: "'JetBrains Mono', monospace", tabular: true, lineHeight: 1.1, marginTop: 2 },
                { text: 'CAC', fontSize: 11, fontWeight: 'semibold', color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 14 },
                { text: '$12.40', fontSize: 22, fontWeight: 'bold', color: '#0F172A', fontFamily: "'JetBrains Mono', monospace", tabular: true, lineHeight: 1.1, marginTop: 2 },
              ],
              footnote: 'eyebrow 11 caps + tabular-nums 22 mono · цифры выровнены',
            },
          },
        },
        {
          type: 'before-after' as const,
          title: 'Типографика на SaaS-лендинге',
          before: {
            label: 'Плохо',
            description:
              'Заголовок hero-секции — 18px, такой же размер как body-текст. Нет визуального «крючка». CTA-кнопка теряется среди текста. Шрифт Light на светлом фоне — низкий контраст.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#FAFAFA',
              rows: [
                { text: 'Платформа для управления командой', fontSize: 18, fontWeight: 300, color: '#9CA3AF', lineHeight: 1.3 },
                { text: 'Всё в одном месте: задачи, тайм-трекинг, отчёты и интеграции.', fontSize: 18, fontWeight: 300, color: '#9CA3AF', lineHeight: 1.3, marginTop: 6 },
                { text: 'Попробовать бесплатно', fontSize: 16, fontWeight: 'normal', color: '#9CA3AF', marginTop: 10 },
              ],
              footnote: 'hero = body = 18px Light · CTA сливается · нет крючка',
            },
          },
          after: {
            label: 'Хорошо',
            description:
              'Hero-заголовок: 56px Bold, подзаголовок: 20px Regular в приглушённом цвете, CTA-кнопка: 18px Medium. Чёткая визуальная воронка: заголовок → подзаголовок → действие.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#FFFFFF',
              rows: [
                { text: 'Платформа для управления командой', fontSize: 36, fontWeight: 'bold', color: '#0F172A', lineHeight: 1.1 },
                { text: 'Всё в одном месте: задачи, тайм-трекинг, отчёты и интеграции.', fontSize: 17, fontWeight: 'normal', color: '#4B5563', lineHeight: 1.5, marginTop: 10 },
              ],
              cta: { label: 'Попробовать бесплатно', bg: '#4F46E5', color: '#FFFFFF', size: 16 },
              footnote: '36 → 17 → CTA · ясная визуальная воронка',
            },
          },
        },
        {
          type: 'divider' as const,
        },

        // === КЕЙС-СТАДИ ===
        {
          type: 'case-study' as const,
          title: 'Ребрендинг типографики Airbnb',
          company: 'Airbnb',
          problem:
            'Airbnb использовал несколько разных шрифтов на разных платформах (web, iOS, Android). Визуальная идентичность была разрозненной, а загрузка шрифтов замедляла сайт.',
          solution:
            'Создали собственный шрифт **Cereal** (позже обновлённый), который работает одинаково на всех платформах. Единая типографическая система с чёткой шкалой размеров.',
          result:
            'Консистентный бренд на всех платформах. Сокращение времени загрузки за счёт оптимизированного шрифта. Улучшенная читаемость на мобильных устройствах.',
          steps: [
            {
              title: 'Аудит существующей типографики',
              description:
                'Провели инвентаризацию всех шрифтов на всех платформах',
            },
            {
              title: 'Разработка кастомного шрифта',
              description:
                'Создали Cereal — дружелюбный, читаемый, многоязычный шрифт',
            },
            {
              title: 'Создание типографической системы',
              description:
                'Определили шкалу из 8 размеров с конкретными правилами использования',
            },
            {
              title: 'Внедрение на всех платформах',
              description:
                'Поэтапный переход web → iOS → Android с контролем качества',
            },
          ],
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=A2r5UwtBicE',
          title: 'Типографика в UI-дизайне: правила и примеры',
          caption:
            'Практические советы по типографике для интерфейсов',
        },
        {
          type: 'divider' as const,
        },

        // === ЧЕКЛИСТ ===
        {
          type: 'checklist' as const,
          title: 'Чеклист: хорошая типографика в продукте',
          items: [
            'Не более 2–3 шрифтов в проекте',
            'Чёткая иерархия размеров (type scale)',
            'Line-height 1.5–1.75 для body-текста',
            'Длина строки 45–75 символов',
            'Контраст текста к фону минимум 4.5:1 (WCAG AA)',
            'Tabular figures для чисел в таблицах',
            'Letter-spacing для UPPERCASE текста',
            'font-display: swap или next/font для веб-шрифтов',
            'Шрифтовая пара с чётким контрастом (serif + sans-serif)',
            'Тестирование на реальных устройствах и размерах',
          ],
        },
      ],
      quiz: [
        {
          question: 'Что такое x-height в типографике?',
          options: [
            { id: 'a', text: 'Высота заглавных букв' },
            {
              id: 'b',
              text: 'Высота строчной буквы «x» — определяет визуальный размер шрифта',
            },
            { id: 'c', text: 'Расстояние между строками текста' },
            { id: 'd', text: 'Ширина символа «x» в пикселях' },
          ],
          correctId: 'b',
          explanation:
            'X-height — высота строчных букв без выносных элементов. Шрифты с большой x-height выглядят крупнее и читабельнее при одинаковом размере в пикселях.',
        },
        {
          question:
            'Какой оптимальный line-height для основного текста (body) в интерфейсе?',
          options: [
            { id: 'a', text: '1.0 — чтобы текст был компактным' },
            { id: 'b', text: '1.5–1.75 — комфортное чтение' },
            { id: 'c', text: '2.5–3.0 — максимум воздуха' },
            { id: 'd', text: 'Line-height не важен для интерфейсов' },
          ],
          correctId: 'b',
          explanation:
            'Line-height 1.5–1.75 обеспечивает комфортное чтение: строки не сливаются и не «распадаются». Это стандарт WCAG для доступности.',
        },
        {
          question: 'Какая пара шрифтов является наиболее удачной комбинацией?',
          options: [
            {
              id: 'a',
              text: 'Comic Sans + Papyrus — оба декоративные, создают контраст',
            },
            {
              id: 'b',
              text: 'Arial + Helvetica — похожие шрифты, значит гармония',
            },
            {
              id: 'c',
              text: 'Playfair Display + Source Sans Pro — serif + sans-serif с контрастом',
            },
            {
              id: 'd',
              text: 'Times New Roman + Georgia — оба serif, значит консистентность',
            },
          ],
          correctId: 'c',
          explanation:
            'Сочетание serif (для заголовков) + sans-serif (для текста) создаёт контраст и чёткую иерархию. Два похожих шрифта одной категории не дают достаточного контраста.',
        },
        {
          question: 'Что такое FOUT и как с ним бороться?',
          options: [
            {
              id: 'a',
              text: 'Ошибка загрузки шрифта — нужно подключить больше шрифтов',
            },
            {
              id: 'b',
              text: 'Flash of Unstyled Text — текст «прыгает» при загрузке шрифта. Решение: font-display: swap или next/font',
            },
            {
              id: 'c',
              text: 'Проблема с кернингом — нужно увеличить letter-spacing',
            },
            {
              id: 'd',
              text: 'Конфликт шрифтов в CSS — нужно использовать !important',
            },
          ],
          correctId: 'b',
          explanation:
            'FOUT (Flash of Unstyled Text) — текст сначала отображается системным шрифтом, затем «перескакивает» на загруженный веб-шрифт. font-display: swap делает это предсказуемым, а next/font устраняет проблему полностью.',
        },
        {
          question: 'В чём ключевая разница между Readability и Legibility?',
          options: [
            {
              id: 'a',
              text: 'Это одно и то же — разные слова для одного понятия',
            },
            {
              id: 'b',
              text: 'Legibility — можно ли различить отдельные буквы; Readability — комфортно ли читать целые блоки текста',
            },
            {
              id: 'c',
              text: 'Readability — для печати, Legibility — только для веба',
            },
            {
              id: 'd',
              text: 'Legibility — для serif, Readability — для sans-serif',
            },
          ],
          correctId: 'b',
          explanation:
            'Legibility = разборчивость отдельных символов (зависит от формы букв и размера). Readability = читаемость целых блоков (зависит от line-height, длины строки, контраста). Шрифт может быть разборчивым, но нечитаемым: например, мелкий 10px с line-height 1.0 на 120-символьной строке.',
        },
        {
          question: 'Дашборд показывает финансовые данные в столбиках. Какой типографический выбор обязателен для чисел?',
          options: [
            {
              id: 'a',
              text: 'Использовать пропорциональный шрифт — он естественнее выглядит',
            },
            {
              id: 'b',
              text: 'Tabular figures (font-variant-numeric: tabular-nums) — все цифры одной ширины, столбцы не «прыгают»',
            },
            {
              id: 'c',
              text: 'Уменьшить размер шрифта на 2px относительно текста',
            },
            {
              id: 'd',
              text: 'Использовать курсив для отрицательных значений',
            },
          ],
          correctId: 'b',
          explanation:
            'Tabular figures (моноширинные цифры) делают $48,234.50 и $12.40 выровненными по разрядам — взгляд считывает столбик мгновенно. Без них «1» уже «8» и колонка визуально «прыгает». В CSS — font-variant-numeric: tabular-nums; или Mono-шрифт типа JetBrains Mono / IBM Plex Mono.',
        },
        {
          question: 'На SaaS-лендинге hero-заголовок и body-текст одного размера 18px. Почему это плохо и как чинить?',
          options: [
            {
              id: 'a',
              text: 'Это нормально — современный минимализм. Менять ничего не надо',
            },
            {
              id: 'b',
              text: 'Нет визуальной воронки внимания. Hero должен быть в 2–3× крупнее body (например, 40–56px Bold) — иначе глаз не понимает с чего начать',
            },
            {
              id: 'c',
              text: 'Надо увеличить body до 24px, чтобы соответствовать заголовку',
            },
            {
              id: 'd',
              text: 'Заменить sans-serif на serif — это исправит иерархию',
            },
          ],
          correctId: 'b',
          explanation:
            'Hero-заголовок — это визуальный крючок, который ловит внимание за первые 200ms. Если он одного размера с body, глаз не знает, куда смотреть, и пользователь уходит со страницы. Правило: H1 ≥ 2× body (минимум). Шкала 1.250 даёт ratio H1:body = 39:16 ≈ 2.4× — рабочий минимум.',
        },
      ],
    },

    // =============================================
    // PART 2 — Сетки и отступы (45 мин)
    // =============================================
    {
      id: 'part-2',
      title: 'Сетки и отступы',
      subtitle:
        'Модульные сетки, 8px-система, 12-колоночная сетка, адаптивные брейкпоинты и примеры из дизайн-систем',
      duration: '45 мин',
      sections: [
        // === ВВЕДЕНИЕ ===
        {
          type: 'heading' as const,
          content: 'Зачем нужны сетки в дизайне',
        },
        {
          type: 'text' as const,
          content:
            'Сетка (grid) — это **невидимая структура**, которая организует контент на странице. Без сетки элементы расположены хаотично, с сеткой — создаётся визуальный порядок, ритм и предсказуемость. Сетки — это основа любого профессионального дизайна.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'Сетки не ограничивают творчество — они дают **фундамент**. Даже нарушение сетки (breaking the grid) работает только тогда, когда сетка изначально существует.',
        },
        {
          type: 'quote' as const,
          text: 'Сетка — это как нотная линейка для музыканта. Она не мешает творить, она помогает играть чисто.',
          author: 'Йозеф Мюллер-Брокманн',
          role: 'Автор книги «Grid Systems in Graphic Design»',
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=BJwsI4aKcIA',
          title: 'Сетки в веб-дизайне: полное руководство',
          caption:
            'Как модульные сетки создают порядок в интерфейсах',
        },
        {
          type: 'divider' as const,
        },

        // === 8PX GRID SYSTEM ===
        {
          type: 'heading' as const,
          content: 'Система 8px (8-point Grid)',
        },
        {
          type: 'text' as const,
          content:
            'Система 8px — это подход, при котором **все размеры и отступы кратны 8 пикселям**. Это создаёт визуальный ритм и консистентность. Почему именно 8? Потому что 8 делится на 2 и 4, что даёт гибкость, а большинство экранов имеют разрешения, кратные 8.',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Базовая единица: 8px',
              definition:
                'Все отступы, размеры компонентов и расстояния должны быть кратны 8: 8, 16, 24, 32, 40, 48, 56, 64...',
            },
            {
              term: 'Допуск: 4px',
              definition:
                'Для мелких элементов (иконки, padding кнопок) допускается шаг 4px: 4, 8, 12, 16, 20, 24...',
            },
            {
              term: 'Soft grid vs Hard grid',
              definition:
                'Soft grid — элементы кратны 8px, но не привязаны к жёстким колонкам. Hard grid — строгая колоночная структура.',
            },
            {
              term: 'Почему не 10px?',
              definition:
                '10 не делится на 4 без остатка, а 8 делится. На экранах с 2x и 3x плотностью 8px всегда даёт целые числа.',
            },
          ],
        },
        {
          type: 'column-split-showcase' as const,
          title: 'Сетка 8px — наглядно',
          description: 'Каждая ячейка ниже = 8px реальной ширины. Любой отступ кратен этой клетке.',
          total: 12,
          rows: [
            { label: 'Базовая клетка 8px ×12', spans: Array.from({ length: 12 }, () => ({ span: 1, tone: 'muted' as const, label: '8' })) },
            { label: 'Padding 16px = 2 клетки', spans: [{ span: 2, tone: 'primary' as const, label: '16' }, { span: 10, tone: 'muted' as const, label: '·' }] },
            { label: 'Padding 24px = 3 клетки', spans: [{ span: 3, tone: 'primary' as const, label: '24' }, { span: 9, tone: 'muted' as const, label: '·' }] },
            { label: 'Section gap 48px = 6 клеток', spans: [{ span: 6, tone: 'primary' as const, label: '48' }, { span: 6, tone: 'muted' as const, label: '·' }] },
          ],
        },
        {
          type: 'spacing-scale-showcase' as const,
          title: 'Шкала отступов в 8px-системе',
          description: 'Все значения кратны 8 (с допуском 4 для мелких элементов)',
          baseUnit: 8,
          steps: [
            { px: 4, rem: '0.25rem', token: 'p-1', usage: 'минимальный gap, padding иконок' },
            { px: 8, rem: '0.5rem', token: 'p-2', usage: 'компактный padding, gap между мелкими элементами' },
            { px: 16, rem: '1rem', token: 'p-4', usage: 'стандартный padding карточек, gap в списках' },
            { px: 24, rem: '1.5rem', token: 'p-6', usage: 'padding секций, gap между группами' },
            { px: 32, rem: '2rem', token: 'p-8', usage: 'отступ между секциями' },
            { px: 48, rem: '3rem', token: 'p-12', usage: 'padding контейнера, gap между крупными блоками' },
            { px: 64, rem: '4rem', token: 'p-16', usage: 'вертикальный ритм между разделами страницы' },
            { px: 96, rem: '6rem', token: 'p-24', usage: 'padding hero-секций, крупные вертикальные отступы' },
          ],
        },
        {
          type: 'before-after' as const,
          title: 'Отступы без системы vs с 8px-системой',
          before: {
            label: 'Без системы',
            description:
              'Padding карточки: 13px, gap: 7px, margin секции: 23px, padding кнопки: 11px 19px. Все значения произвольные, нет ритма. Каждый компонент «живёт» по своим правилам, дизайн выглядит неряшливо.',
          },
          after: {
            label: 'С 8px-системой',
            description:
              'Padding карточки: 16px, gap: 8px, margin секции: 24px, padding кнопки: 12px 24px. Все значения кратны 4/8. Элементы выравниваются друг с другом, создавая визуальный ритм и порядок.',
          },
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            'В Tailwind CSS уже встроена 4px/8px система: p-1=4px, p-2=8px, p-3=12px, p-4=16px, p-6=24px, p-8=32px. Это не случайность — Tailwind создан с учётом 8-point grid!',
        },
        {
          type: 'divider' as const,
        },

        // === 12-COLUMN GRID ===
        {
          type: 'heading' as const,
          content: '12-колоночная сетка',
        },
        {
          type: 'text' as const,
          content:
            '12-колоночная сетка — **промышленный стандарт** веб-дизайна. Число 12 выбрано потому, что оно делится на 2, 3, 4 и 6 — это даёт максимальную гибкость в разбиении контента.',
        },
        {
          type: 'column-split-showcase' as const,
          title: 'Варианты разбивки 12-колоночной сетки',
          description: '12 делится на 2, 3, 4 и 6 — отсюда максимальная гибкость',
          total: 12,
          rows: [
            { label: '12 × 1', note: 'редко используется', spans: Array.from({ length: 12 }, () => ({ span: 1 })) },
            { label: '6 + 6', note: 'двухколоночный 50/50', spans: [{ span: 6 }, { span: 6 }] },
            { label: '4 + 8', note: 'sidebar + контент', spans: [{ span: 4 }, { span: 8 }] },
            { label: '3 + 9', note: 'узкий sidebar + широкий контент', spans: [{ span: 3 }, { span: 9 }] },
            { label: '4 + 4 + 4', note: 'три равных колонки', spans: [{ span: 4 }, { span: 4 }, { span: 4 }] },
            { label: '3 + 3 + 3 + 3', note: 'четыре равных колонки', spans: [{ span: 3 }, { span: 3 }, { span: 3 }, { span: 3 }] },
            { label: '2 + 8 + 2', note: 'центрированный контент с полями', spans: [{ span: 2, tone: 'muted' as const }, { span: 8, tone: 'primary' as const }, { span: 2, tone: 'muted' as const }] },
            { label: '3 + 6 + 3', note: 'классическая центрированная раскладка', spans: [{ span: 3, tone: 'muted' as const }, { span: 6, tone: 'primary' as const }, { span: 3, tone: 'muted' as const }] },
          ],
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Column (колонка)',
              definition:
                'Вертикальная полоса, по которой выравнивается контент. В 12-колоночной сетке их 12.',
            },
            {
              term: 'Gutter (межколоночный отступ)',
              definition:
                'Расстояние между колонками. Обычно 16px, 24px или 32px. Создаёт «воздух» между контентом.',
            },
            {
              term: 'Margin (поля)',
              definition:
                'Отступы по краям сетки от края экрана. На мобильных: 16px, на десктопе: 24–48px или auto (центрирование).',
            },
            {
              term: 'Container (контейнер)',
              definition:
                'Внешний блок, содержащий сетку. Имеет max-width (обычно 1200px–1440px) и центрируется на странице.',
            },
          ],
        },
        {
          type: 'text' as const,
          content:
            'В CSS сетку реализуют через **CSS Grid** или **Flexbox**. В Tailwind CSS: `grid grid-cols-12 gap-6` создаёт 12-колоночную сетку с gap 24px. Bootstrap, Material Design и все крупные фреймворки используют 12-колоночную систему.',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-07-12col-grid.webp',
          alt: 'Визуализация 12-колоночной сетки с gutters и margins на десктопном экране',
          caption:
            '12-колоночная сетка — фундамент веб-дизайна. Columns + Gutters + Margins.',
        },
        {
          type: 'divider' as const,
        },

        // === FIXED vs FLUID GRIDS ===
        {
          type: 'subheading' as const,
          content: 'Фиксированные vs Гибкие сетки',
        },
        {
          type: 'comparison' as const,
          title: 'Fixed Grid vs Fluid Grid',
          items: [
            {
              label: 'Ширина',
              ux: 'Fixed: колонки имеют фиксированную ширину в px',
              ui: 'Fluid: колонки растягиваются в % от контейнера',
            },
            {
              label: 'Поведение при ресайзе',
              ux: 'Fixed: контент не меняется, появляется горизонтальный скролл или пустое место',
              ui: 'Fluid: контент адаптируется к ширине экрана плавно',
            },
            {
              label: 'Когда использовать',
              ux: 'Fixed: десктоп-приложения с фиксированным окном, email-шаблоны',
              ui: 'Fluid: адаптивные сайты, мобильные приложения',
            },
            {
              label: 'Примеры',
              ux: 'Fixed: email-рассылки (600px), PDF-отчёты',
              ui: 'Fluid: большинство современных сайтов, Tailwind grid',
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // === RESPONSIVE BREAKPOINTS ===
        {
          type: 'heading' as const,
          content: 'Адаптивные брейкпоинты (Responsive Breakpoints)',
        },
        {
          type: 'text' as const,
          content:
            'Брейкпоинты — это точки, в которых макет **перестраивается** для разных размеров экрана. Вместо создания отдельного дизайна для каждого устройства, мы определяем 3–5 ключевых точек перехода.',
        },
        {
          type: 'diagram' as const,
          title: 'Стандартные брейкпоинты (Tailwind CSS)',
          description:
            'Мобильно-первый подход: стили по умолчанию для мобильных, затем расширяем',
          items: [
            'sm: 640px — большие телефоны, маленькие планшеты',
            'md: 768px — планшеты в портретной ориентации',
            'lg: 1024px — планшеты в ландшафте, маленькие ноутбуки',
            'xl: 1280px — ноутбуки, мониторы',
            '2xl: 1536px — большие мониторы, Ultra-wide',
          ],
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Mobile First',
              definition:
                'Подход, при котором дизайн начинается с мобильной версии, а затем расширяется для больших экранов. Это стандарт в 2024+.',
            },
            {
              term: 'Колонки по брейкпоинтам',
              definition:
                'Mobile: 4 колонки (или 1 stack). Tablet: 8 колонок. Desktop: 12 колонок. Material Design использует именно эту модель.',
            },
            {
              term: 'Content-first breakpoints',
              definition:
                'Лучшая практика — ставить брейкпоинты там, где контент начинает «ломаться», а не привязываться к конкретным устройствам.',
            },
          ],
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'Mobile (до 640px)',
              items: [
                '4 колонки или stack (всё друг под другом)',
                'Margins: 16px',
                'Gutters: 16px',
                'Карточки в 1 колонку',
                'Навигация — бургер-меню',
                'Шрифты чуть мельче',
              ],
            },
            {
              title: 'Tablet (640–1024px)',
              items: [
                '8 колонок',
                'Margins: 24px',
                'Gutters: 24px',
                'Карточки в 2 колонки',
                'Навигация — sidebar или таб-бар',
                'Больше «воздуха» между элементами',
              ],
            },
            {
              title: 'Desktop (1024px+)',
              items: [
                '12 колонок',
                'Margins: auto (центрирование) или 48px',
                'Gutters: 24–32px',
                'Карточки в 3–4 колонки',
                'Навигация — горизонтальное меню',
                'Контейнер max-width: 1200–1440px',
              ],
            },
          ],
        },
        {
          type: 'before-after' as const,
          title: 'Адаптивность: без брейкпоинтов vs с брейкпоинтами',
          before: {
            label: 'Без адаптивности',
            description:
              'Десктопная версия показывается на мобильном: текст мелкий, кнопки крошечные, горизонтальный скролл. Пользователь зумит и скроллит во все стороны. Конверсия на мобильных близка к нулю.',
          },
          after: {
            label: 'С адаптивными брейкпоинтами',
            description:
              'На мобильном: карточки в 1 колонку, кнопки во всю ширину, удобный размер текста. На планшете: 2 колонки. На десктопе: 3–4 колонки с sidebar. Каждый размер экрана оптимален.',
          },
        },
        {
          type: 'divider' as const,
        },

        // === GUTTERS AND MARGINS ===
        {
          type: 'subheading' as const,
          content: 'Gutters и Margins: воздух в дизайне',
        },
        {
          type: 'text' as const,
          content:
            'Пустое пространство (whitespace) — это не «пустое место», а **активный элемент дизайна**. Правильные отступы создают визуальную иерархию, группируют связанные элементы и дают «воздух» для глаз.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            '**Закон близости (Гештальт)**: элементы, расположенные ближе друг к другу, воспринимаются как группа. Если отступ между заголовком и его текстом (8px) меньше, чем отступ до следующей секции (32px), иерархия считывается автоматически.',
        },
        {
          type: 'before-after' as const,
          title: 'Группировка через отступы',
          before: {
            label: 'Плохо: одинаковые отступы',
            description:
              'Заголовок — 16px — текст — 16px — заголовок — 16px — текст. Все отступы одинаковые. Непонятно, какой заголовок относится к какому тексту. Визуальная иерархия отсутствует.',
            visual: {
              kind: 'typography-stack',
              frame: 'plain',
              rows: [
                { text: 'Доставка', fontSize: 16, fontWeight: 'bold', color: '#0F172A' },
                { text: 'Заказ доставят сегодня с 14:00 до 18:00 курьером.', fontSize: 14, color: '#475569', lineHeight: 1.5, marginTop: 16 },
                { text: 'Оплата', fontSize: 16, fontWeight: 'bold', color: '#0F172A', marginTop: 16 },
                { text: 'Карта Visa **** 4242. Списание после подтверждения.', fontSize: 14, color: '#475569', lineHeight: 1.5, marginTop: 16 },
                { text: 'Поддержка', fontSize: 16, fontWeight: 'bold', color: '#0F172A', marginTop: 16 },
                { text: 'Чат и звонок 24/7 на support@example.com.', fontSize: 14, color: '#475569', lineHeight: 1.5, marginTop: 16 },
              ],
              footnote: 'все gap = 16px · группы не читаются',
            },
          },
          after: {
            label: 'Хорошо: иерархические отступы',
            description:
              'Заголовок — 8px — текст — 32px — заголовок — 8px — текст. Маленький отступ внутри группы, большой между группами. Мгновенно понятно, что к чему относится.',
            visual: {
              kind: 'typography-stack',
              frame: 'plain',
              rows: [
                { text: 'Доставка', fontSize: 16, fontWeight: 'bold', color: '#0F172A' },
                { text: 'Заказ доставят сегодня с 14:00 до 18:00 курьером.', fontSize: 14, color: '#475569', lineHeight: 1.5, marginTop: 8 },
                { text: 'Оплата', fontSize: 16, fontWeight: 'bold', color: '#0F172A', marginTop: 32 },
                { text: 'Карта Visa **** 4242. Списание после подтверждения.', fontSize: 14, color: '#475569', lineHeight: 1.5, marginTop: 8 },
                { text: 'Поддержка', fontSize: 16, fontWeight: 'bold', color: '#0F172A', marginTop: 32 },
                { text: 'Чат и звонок 24/7 на support@example.com.', fontSize: 14, color: '#475569', lineHeight: 1.5, marginTop: 8 },
              ],
              footnote: 'внутри группы 8px · между группами 32px · закон близости работает',
            },
          },
        },
        {
          type: 'divider' as const,
        },

        // === КЕЙС-СТАДИ: ДИЗАЙН-СИСТЕМЫ ===
        {
          type: 'heading' as const,
          content: 'Сетки в реальных дизайн-системах',
        },
        {
          type: 'case-study' as const,
          title: 'Material Design 3 (Google)',
          company: 'Google',
          problem:
            'Нужна универсальная сетка, работающая на тысячах устройств с разными размерами экранов — от часов до телевизоров.',
          solution:
            'Адаптивная система с 4/8/12 колонками. Mobile: 4 колонки, margins 16px. Tablet: 8 колонок, margins 24px. Desktop: 12 колонок, margins 24px. Все отступы кратны 8px.',
          result:
            'Единая система работает в Gmail, Google Maps, YouTube, Android и тысячах приложений. Дизайнеры и разработчики говорят на одном языке.',
          steps: [
            {
              title: 'Определение брейкпоинтов',
              description:
                'Compact (до 600px), Medium (600–840px), Expanded (840+)',
            },
            {
              title: 'Настройка колонок',
              description:
                '4 → 8 → 12 колонок с автоматическим переключением',
            },
            {
              title: 'Система отступов',
              description: 'Все margins и gutters кратны 8px',
            },
            {
              title: 'Компонентная адаптация',
              description:
                'Каждый компонент знает, как себя вести на каждом брейкпоинте',
            },
          ],
        },
        {
          type: 'case-study' as const,
          title: 'Apple Human Interface Guidelines',
          company: 'Apple',
          problem:
            'Экосистема Apple включает iPhone, iPad, Mac, Apple Watch, Apple TV — нужна сетка для каждого форм-фактора с единым визуальным языком.',
          solution:
            'Разные сетки для разных устройств, но единые принципы. iPhone: margins 16px, рекомендованная ширина контента. iPad: sidebar + content. Mac: flexible layout с min/max constraints.',
          result:
            'Каждое Apple-приложение выглядит «родным» на своём устройстве, сохраняя узнаваемый стиль Apple. Дизайн-система используется миллионами разработчиков.',
          steps: [
            {
              title: 'Safe Areas',
              description:
                'Определили безопасные зоны для контента с учётом notch, Dynamic Island, home indicator',
            },
            {
              title: 'Layout Margins',
              description:
                'Стандартные margins: 16px на iPhone, 20px на iPad, адаптивные на Mac',
            },
            {
              title: 'Readable Content Guide',
              description:
                'Автоматическое ограничение ширины текста для комфортного чтения на больших экранах',
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**Microsoft Fluent Design** использует похожий подход: 8px grid, адаптивные брейкпоинты, но с акцентом на «depth» (глубину) и «material» (материалы). Три системы (Material, HIG, Fluent) — это три подхода к одним и тем же принципам.',
        },
        {
          type: 'divider' as const,
        },

        // === BEFORE/AFTER: GRID ALIGNMENT ===
        {
          type: 'heading' as const,
          content: 'До и после: выравнивание по сетке',
        },
        {
          type: 'before-after' as const,
          title: 'Карточки товаров',
          before: {
            label: 'Без сетки',
            description:
              'Карточки разной ширины, высоты и с разными отступами. Изображения разных пропорций. Текст начинается на разных уровнях. Кнопки «Купить» прыгают вверх-вниз. Страница выглядит как хаотичная барахолка.',
          },
          after: {
            label: 'По 12-колоночной сетке',
            description:
              'Карточки занимают ровно 3 колонки каждая (4 в ряд). Одинаковая высота изображений (aspect-ratio: 4/3). Текст и кнопки выровнены по baseline. Чистый, профессиональный вид с ясным ритмом.',
          },
        },
        {
          type: 'before-after' as const,
          title: 'Дашборд с метриками',
          before: {
            label: 'Хаотичная раскладка',
            description:
              'KPI-карточки расположены произвольно, разные размеры, графики не выровнены. Таблица выходит за край контейнера. Sidebar разной ширины на разных страницах. Визуальный беспорядок.',
          },
          after: {
            label: 'Сетка 12 колонок + 8px система',
            description:
              'KPI-карточки: 3 колонки каждая (4 в ряд). Графики: 6+6 или 8+4. Sidebar: фиксированные 3 колонки. Таблица: 9 колонок контента. Все отступы кратны 8px. Дашборд «дышит» и легко сканируется.',
          },
        },
        {
          type: 'before-after' as const,
          title: 'Форма регистрации',
          before: {
            label: 'Без сетки',
            description:
              'Поля разной ширины, лейблы не выровнены, кнопка смещена от центра, отступы между полями произвольные (10px, 15px, 22px). Форма выглядит собранной «на коленке».',
          },
          after: {
            label: 'С сеткой',
            description:
              'Поля выровнены по 6-колоночной подсетке (6 из 12 колонок, центрировано). Одинаковые отступы между полями (16px). Лейблы выровнены по левому краю. Кнопка — на всю ширину формы. Чисто и профессионально.',
          },
        },
        {
          type: 'divider' as const,
        },

        // === ПРАКТИЧЕСКИЕ СОВЕТЫ ===
        {
          type: 'subheading' as const,
          content: 'Практические советы по работе с сетками',
        },
        {
          type: 'text' as const,
          content:
            'Знание теории сеток бесполезно без умения применять их на практике. Вот конкретные рекомендации, которые можно использовать прямо сейчас.',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'В Figma',
              items: [
                'Включите Layout Grid на фрейме',
                '12 колонок, Type: Stretch',
                'Gutter: 24px, Margin: auto или 48px',
                'Добавьте вторую сетку 8×8px для вертикального ритма',
                'Используйте Auto Layout для компонентов',
              ],
            },
            {
              title: 'В CSS / Tailwind',
              items: [
                'grid grid-cols-12 gap-6 — базовая сетка',
                'col-span-4, col-span-6, col-span-8 — разбиение',
                'container mx-auto px-4 — контейнер',
                'Responsive: grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
                'gap-4 (16px), gap-6 (24px), gap-8 (32px)',
              ],
            },
          ],
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=7kVeCqQCxlk',
          title: 'CSS Grid Layout: полное руководство',
          caption:
            'Как реализовать 12-колоночную сетку в CSS Grid',
        },
        {
          type: 'divider' as const,
        },

        // === ЧЕКЛИСТ ===
        {
          type: 'checklist' as const,
          title: 'Чеклист: сетки и отступы в проекте',
          items: [
            'Определена базовая единица (4px или 8px)',
            'Все отступы кратны базовой единице',
            'Используется 12-колоночная сетка (или обоснованная альтернатива)',
            'Определены gutters и margins для каждого брейкпоинта',
            'Минимум 3 брейкпоинта: mobile, tablet, desktop',
            'Карточки и компоненты выровнены по колонкам',
            'Вертикальный ритм соблюдён (spacing scale)',
            'Container имеет max-width и центрирован',
            'Тестирование на реальных устройствах или в DevTools',
            'Сетка задокументирована в дизайн-системе команды',
          ],
        },
        {
          type: 'divider' as const,
        },

        // === ИТОГИ ===
        {
          type: 'heading' as const,
          content: 'Итоги: типографика + сетки = фундамент дизайна',
        },
        {
          type: 'text' as const,
          content:
            'Типографика и сетки — это **два столпа визуального дизайна**. Типографика определяет, как читается контент. Сетки определяют, как контент организован в пространстве. Вместе они создают порядок, ритм и профессиональный вид любого интерфейса.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'Домашнее задание: откройте 3 любимых сайта или приложения и попробуйте «увидеть» их сетку. Сколько колонок? Какие отступы? Какие шрифты и их размеры? Используйте DevTools (F12 → Elements) для анализа.',
        },
      ],
      quiz: [
        {
          question: 'Почему в 8px-системе базовая единица именно 8, а не 10?',
          options: [
            { id: 'a', text: '8 — красивое число' },
            {
              id: 'b',
              text: '8 делится на 2 и 4, а экраны с 2x и 3x плотностью дают целые числа',
            },
            { id: 'c', text: 'Apple запатентовала 10px-систему' },
            { id: 'd', text: 'CSS не поддерживает значения, кратные 10' },
          ],
          correctId: 'b',
          explanation:
            '8 делится на 2 и 4 без остатка, что важно для экранов с удвоенной (2x) и утроенной (3x) плотностью пикселей. Это обеспечивает чёткий рендеринг на всех устройствах.',
        },
        {
          question: 'Сколько колонок в стандартной сетке Material Design на мобильном устройстве?',
          options: [
            { id: 'a', text: '12 колонок' },
            { id: 'b', text: '8 колонок' },
            { id: 'c', text: '4 колонки' },
            { id: 'd', text: '6 колонок' },
          ],
          correctId: 'c',
          explanation:
            'Material Design использует 4 колонки на мобильных (Compact), 8 на планшетах (Medium) и 12 на десктопе (Expanded). Это обеспечивает оптимальную раскладку на каждом форм-факторе.',
        },
        {
          question:
            'Что такое Gutter в контексте сетки?',
          options: [
            { id: 'a', text: 'Внешний отступ от края экрана' },
            {
              id: 'b',
              text: 'Расстояние между колонками сетки',
            },
            { id: 'c', text: 'Ширина одной колонки' },
            { id: 'd', text: 'Максимальная ширина контейнера' },
          ],
          correctId: 'b',
          explanation:
            'Gutter — это расстояние между колонками сетки. Margins — отступы от краёв экрана. Column — сама колонка. Container — внешний контейнер с max-width.',
        },
        {
          question:
            'Какой подход к адаптивному дизайну является стандартом в 2024+?',
          options: [
            {
              id: 'a',
              text: 'Desktop First — сначала десктоп, потом уменьшаем',
            },
            {
              id: 'b',
              text: 'Mobile First — сначала мобильная версия, потом расширяем',
            },
            {
              id: 'c',
              text: 'Tablet First — начинаем с планшета как среднего размера',
            },
            {
              id: 'd',
              text: 'Нет стандарта — каждый проект индивидуален',
            },
          ],
          correctId: 'b',
          explanation:
            'Mobile First — стандартный подход: стили по умолчанию пишутся для мобильного, а через media queries (или Tailwind md:, lg:) расширяются для больших экранов. Это обеспечивает лучшую производительность и UX на мобильных.',
        },
        {
          question: 'Что такое Soft Grid и чем он отличается от Hard Grid?',
          options: [
            { id: 'a', text: 'Soft Grid — это сетка с закруглёнными углами, Hard Grid — с острыми' },
            { id: 'b', text: 'Soft Grid — элементы кратны 8px, но не привязаны к жёстким колонкам; Hard Grid — строгая колоночная структура' },
            { id: 'c', text: 'Soft Grid — для мобильных, Hard Grid — для десктопа' },
            { id: 'd', text: 'Это синонимы — разные названия одного приёма' },
          ],
          correctId: 'b',
          explanation:
            'Soft Grid — все размеры/отступы кратны базовой единице (8px), но элементы могут располагаться свободно (типично для лендингов и мобайла). Hard Grid — строгая колоночная структура (типично для дашбордов и контентных страниц). Hard Grid даёт максимальный порядок, Soft — больше гибкости.',
        },
        {
          question: 'На лендинге контейнер max-width: 1280px на экране 1920px. Что увидит пользователь?',
          options: [
            { id: 'a', text: 'Контент растянется на всю ширину 1920px — max-width игнорируется' },
            { id: 'b', text: 'Контент ограничится 1280px и будет центрироваться (если есть margin: 0 auto) с пустыми полями по бокам' },
            { id: 'c', text: 'Контент масштабируется пропорционально под 1920px' },
            { id: 'd', text: 'Браузер выдаст ошибку рендеринга' },
          ],
          correctId: 'b',
          explanation:
            'max-width ограничивает максимальную ширину; контейнер не вырастает выше 1280px даже когда viewport шире. Чтобы он центрировался, нужно `margin: 0 auto`. Пустое пространство по бокам — стандартная картина на широких мониторах и важная часть «дыхания» дизайна.',
        },
        {
          question: 'Bootstrap, Material Design и Apple HIG договорились о breakpoint для планшета примерно на ~768px. Почему именно это значение?',
          options: [
            { id: 'a', text: 'Это исторический размер первого iPad (768×1024 portrait) — индустрия выбрала его как стандарт' },
            { id: 'b', text: '768 — простое число, любимое математиками' },
            { id: 'c', text: 'CSS не поддерживает breakpoints ниже 768px' },
            { id: 'd', text: 'Это случайность — каждая система выбрала самостоятельно' },
          ],
          correctId: 'a',
          explanation:
            'Первый iPad (2010) был 768×1024 в портретной ориентации — это де-факто закрепило 768px как нижнюю границу «tablet» в большинстве дизайн-систем. С тех пор экосистема устоялась: ≥768 → tablet layout, ≥1024 → desktop. Не идеально, но «договор индустрии», на который полагаются миллионы сайтов.',
        },
        {
          question: 'Кнопка в дизайн-системе имеет padding 12px по вертикали и 16px по горизонтали. Это соответствует 8px-системе?',
          options: [
            { id: 'a', text: 'Нет — 12 не кратно 8, нарушение системы' },
            { id: 'b', text: 'Да — 8px-система допускает шаг 4px для мелких элементов (padding кнопок, иконок), а 12 и 16 кратны 4' },
            { id: 'c', text: 'Только если кнопка primary — для secondary должно быть 8/16' },
            { id: 'd', text: 'Зависит от шрифта внутри кнопки' },
          ],
          correctId: 'b',
          explanation:
            '8px-система допускает «полушаг» 4px (4, 8, 12, 16, 20, 24…) для мелких элементов — padding кнопок, спейсинг иконок, gap в чипах. Для крупных блоков (карточки, секции) остаются строго кратные 8 (8, 16, 24, 32…). Главное — не вводить произвольные значения вроде 7px, 13px, 19px.',
        },
      ],
    },
  ],
}
