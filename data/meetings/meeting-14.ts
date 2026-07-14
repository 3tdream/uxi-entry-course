import type { Meeting } from '../types'

export const meeting14: Meeting = {
  id: '14',
  number: 14,
  title: 'Разбор Marvel Snap',
  description:
    'Финальный проект — весь курс, применённый к одной мобильной игре. 10 встреч, 36 слайдов, три языка (RU/EN/HE).',
  icon: 'Sparkles',
  color: 'bg-fuchsia-500/10 text-fuchsia-600',
  parts: [
    {
      id: 'part-1',
      title: 'Snap как учебник UX',
      subtitle:
        '36 слайдов, разбирающих 10 встреч курса на живом продукте — Marvel Snap от Second Dinner.',
      duration: '~25 мин',
      sections: [
        {
          type: 'heading' as const,
          content: 'Финальный проект: Marvel Snap × 10 встреч',
        },
        {
          type: 'text' as const,
          content:
            'Мы взяли одну **мобильную игру с рейтингом 4.7★** и 30M+ загрузок и прошли по ней весь курс: от цвета редкостей до JTBD игрока. Marvel Snap выиграл Game of the Year 2022 не случайно — команда Second Dinner применила ровно ту теорию, которую мы разобрали за 13 встреч.',
        },
        {
          type: 'callout' as const,
          variant: 'tip',
          content:
            'Открывай презентацию в **новой вкладке** для полного просмотра — работает keyboard nav (← → SPACE HOME END), трёхъязычный переключатель RU/EN/עב в углу, deep-link `#s{N}`. Ссылка: **https://uxi-entry-course.vercel.app/final/**',
        },
        {
          type: 'iframe-embed' as const,
          src: '/final/',
          title: 'Финальная презентация — 36 слайдов',
          caption:
            'Марвел Снап · разбор через все 10 встреч курса. Переключатель языка сверху-справа. Навигация — стрелки или пробел.',
          aspectRatio: '5 / 4',
        },
        {
          type: 'divider' as const,
        },
        {
          type: 'subheading' as const,
          content: 'Почему именно эта игра',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: '4.7★ и 30M+ загрузок',
              definition:
                'Первый год после релиза (2022–2023): The Game Awards Best Mobile Game, D.I.C.E. Mobile GOTY, Apple Design Award (Innovation), BAFTA-номинации.',
            },
            {
              term: 'Матч ровно 3 минуты',
              definition:
                'JTBD-формулировка: "6 свободных минут в очереди → одна полная партия → доза успеха без залипания на час". Дизайн-решение вытекает из ситуации буквально.',
            },
            {
              term: 'Второй раз — CCG для новичков',
              definition:
                'Команда Second Dinner — бывшие разработчики Hearthstone. Урезали механики Hearthstone (mana curve, hero powers, secret) до трёх законов UX (Fitts + Hick + Miller).',
            },
            {
              term: 'Piano glass + halftone',
              definition:
                'Единый визуальный язык: тёмное стекло + голограммы + halftone-точки в отсылку к комиксам Marvel. Одинаково на iPhone и Samsung — игры не адаптируются к платформе, а переопределяют её.',
            },
          ],
        },
        {
          type: 'divider' as const,
        },
        {
          type: 'subheading' as const,
          content: 'Порядок разбора: сначала визуал, потом исследование',
        },
        {
          type: 'text' as const,
          content:
            'Такой порядок повторяет реальный процесс редизайна: **сначала смотрим что есть → потом разбираем зачем**. Финалка идёт M6 → M7 → M8 → M9 → M10 → M11 → M12, затем M3 → M4 → M5.',
        },
        {
          type: 'diagram' as const,
          title: 'Маршрут по 10 встречам курса',
          description:
            'Каждая встреча курса применяется к живому UI Marvel Snap.',
          items: [
            '01 · M6 — Теория цвета: rarity как шкала Иттена, warm/cool функциональное разделение',
            '02 · M7 — Типографика: 3 шрифта (Bebas Neue display + tabular + Geist body), модульная шкала 1.25',
            '03 · M8 — Иерархия: карта как учебник 5 уровней, F/Z-паттерны, Fitts/Hick/Miller',
            '04 · M9 — Wireframing: 4 главных экрана Snap на одной сетке (Home / Match / Collection / Shop)',
            '05 · M10 — Микроинтеракции: 4 фазы кнопки Snap, Retreat, cube movement',
            '06 · M11 — Handoff: спека Card component, 7 стейтов, 12 design tokens',
            '07 · M12 — Платформы: HUD анатомия, игровой vs системный UX, touch targets ~173×57pt PLAY',
            '08 · M3 — Персона: Максим "Casual Card Player", JTBD "6 минут в очереди"',
            '09 · M4 — Юзабилити-тест: механика Snap на 5 новичках, метрики TTS/CSAT',
            '10 · M5 — Research методы: интервью + опрос + card sorting как триангуляция',
          ],
        },
        {
          type: 'divider' as const,
        },
        {
          type: 'subheading' as const,
          content: '10 паттернов, которые Snap применяет из курса',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            { term: 'M6 · Rarity как цветовая шкала', definition: '7-ступенчатый сдвиг по кругу Иттена + свечение. Игрок сканирует коллекцию за 200мс без чтения текста.' },
            { term: 'M7 · Три шрифта, три роли', definition: 'Bebas Neue display (заголовки, имена, победа) + Bebas tabular (Power/Cost) + Geist body (описания, tooltips).' },
            { term: 'M8 · Карта = учебник иерархии', definition: 'На 200×300 пикселей уместилось 5 уровней внимания — art, cost+power, name, description (в detail-view), frame.' },
            { term: 'M8 · Fitts + Hick + Miller', definition: 'PLAY-кнопка ~173×57pt (×4 от минимума), ровно 3 действия в матче, рука 7 карт максимум.' },
            { term: 'M9 · 4 экрана — одна сетка', definition: 'Home / Collection / Shop делят шелл (валюты + hero + 5-icon dock). Match ломает шаблон осознанно — full-screen.' },
            { term: 'M10 · 4 фазы Snap-кнопки', definition: 'Trigger (long-press 300мс) → Rules (куб удваивается) → Feedback (тряска+звук+haptic) → Loop (кнопка → RETREAT).' },
            { term: 'M11 · Card component + 12 токенов', definition: '7 стейтов (default/hover/selected/playable/unaffordable/revealing/disabled), 4 density (Base/Hand/Grid/Detail).' },
            { term: 'M12 · Один визуальный язык', definition: 'Bebas Neue + piano glass + голограммы одинаково на iPhone и Samsung. Игра переопределяет системный UX, не адаптируется.' },
            { term: 'M3 · JTBD "6 минут в очереди"', definition: 'Ситуация конкретная (не "когда скучно"), мотивация функциональна ("доза успеха + переключиться"), ограничение явное ("не залипая на час").' },
            { term: 'M4-5 · Триангуляция методов', definition: 'Юзабилити-тест (5 участников) + интервью (мотивы) + опрос (retention) + card sorting (IA). Каждый метод отвечает на свой класс вопросов.' },
          ],
        },
        {
          type: 'divider' as const,
        },
        {
          type: 'callout' as const,
          variant: 'example',
          content:
            'Финалка — это **не итоговый тест по курсу**, а модель того, как думает практикующий UX-дизайнер: берёт живой продукт и раскладывает его по слоям теории. Попробуйте применить тот же маршрут к любимому приложению — три раза за неделю, и вы увидите свой продуктовый мир по-другому.',
        },
      ],
      quiz: [
        {
          question:
            'В каком порядке финалка разбирает 10 встреч курса?',
          options: [
            { id: 'a', text: 'M1 → M2 → M3 → ... → M13 (по возрастанию)' },
            { id: 'b', text: 'M6 → M7 → M8 → M9 → M10 → M11 → M12 → M3 → M4 → M5' },
            { id: 'c', text: 'M3 → M4 → M5 → M6 → ... (сначала research, потом дизайн)' },
            { id: 'd', text: 'Случайный порядок' },
          ],
          correctId: 'b',
          explanation:
            'Финалка идёт от визуального слоя (что видит игрок: M6-M12) к исследовательскому (почему это работает: M3-M5). Этот порядок повторяет реальный процесс редизайна — «смотрим что есть → разбираем зачем».',
        },
        {
          question:
            'В Marvel Snap какие цвета используются для СВОЕЙ идентичности vs ОППОНЕНТА?',
          options: [
            { id: 'a', text: 'Свой — тёплые (красный/золото), оппонент — холодные (синий)' },
            { id: 'b', text: 'Свой — холодные (синий), оппонент — тёплые (красный/оранжевый)' },
            { id: 'c', text: 'Оба одного цвета, различаются только позицией' },
            { id: 'd', text: 'Свой и оппонент — оба зелёные, разными оттенками' },
          ],
          correctId: 'b',
          explanation:
            'Проверка по реальному экрану: твой баннер синий (холодный, безопасный), оппонент — красно-оранжевый (тёплый, внимание). SNAP-кнопка и энергия — тёплое золото как акценты драмы, но идентичность игрока сине-холодная.',
        },
        {
          question:
            'Почему на слайде 11 (5 уровней иерархии) описание карты (Description) обозначено как "только в detail-view"?',
          options: [
            { id: 'a', text: 'Это ошибка — описание должно быть на карте' },
            { id: 'b', text: 'На игровой карте текста нет — намеренно скрыт, чтобы не отвлекать в матче. Показывается по тапу.' },
            { id: 'c', text: 'Описание есть, но очень мелким шрифтом' },
            { id: 'd', text: 'Описание доступно только в премиум-версии' },
          ],
          correctId: 'b',
          explanation:
            'В матче лицо карты Storm (или любой другой) содержит только Art + Cost + Power + Name + Frame. Описание "On Reveal: ..." показывается в отдельном detail-view (тап на карту). Это осознанное скрытие для скорости чтения за 200мс.',
        },
        {
          question:
            'Slide 25 утверждает, что игры **ломают** правило M12 "адаптируйся к платформе". В чём именно?',
          options: [
            { id: 'a', text: 'Игры используют только native iOS/Material диалоги' },
            { id: 'b', text: 'Игры одинаково выглядят на iOS и Android — свой визуальный язык вместо системного' },
            { id: 'c', text: 'Игры работают только на одной платформе' },
            { id: 'd', text: 'Игры адаптируются к платформе даже сильнее приложений' },
          ],
          correctId: 'b',
          explanation:
            'Приложение подстраивается под ОС (SF Pro на iOS, Roboto на Android). Игра подстраивает ОС под себя: своя типографика (Bebas Neue), свои формы кнопок (holo-glow pill), свой ритм. Snap выглядит одинаково на iPhone и Samsung.',
        },
        {
          question:
            'Какой размер имеет кнопка PLAY на главном экране Snap (замер из реального скрина)?',
          options: [
            { id: 'a', text: '44×44pt — минимум по Apple HIG' },
            { id: 'b', text: '88×88pt — двойной минимум, круглая' },
            { id: 'c', text: '~173×57pt — пилюля, ×4 от минимума по ширине' },
            { id: 'd', text: 'Занимает всю ширину экрана' },
          ],
          correctId: 'c',
          explanation:
            'PLAY — не круг, а горизонтальная пилюля ~173×57pt (×1.3 по высоте от 44pt минимума, ×4 по ширине). Fitts\'s law доведён до предела: играть можно вслепую, палец правой руки попадает без прицеливания.',
        },
      ],
    },
  ],
}
