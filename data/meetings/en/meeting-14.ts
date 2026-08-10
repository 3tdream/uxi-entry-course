import type { Meeting } from '../../types'

export const meeting14: Meeting = {
  id: '14',
  number: 14,
  title: 'Marvel Snap deep-dive',
  description:
    'Final project — the whole course applied to one mobile game. 10 meetings, 36 slides, three languages (RU / EN / HE).',
  icon: 'Sparkles',
  color: 'bg-fuchsia-500/10 text-fuchsia-600',
  parts: [
    {
      id: 'part-1',
      title: 'Snap as a UX textbook',
      subtitle:
        '36 slides that walk through 10 course meetings on a live product — Marvel Snap by Second Dinner.',
      duration: '~25 min',
      sections: [
        {
          type: 'heading' as const,
          content: 'Final project: Marvel Snap × 10 meetings',
        },
        {
          type: 'text' as const,
          content:
            'We took one **mobile game rated 4.7★** with 30M+ downloads and walked the entire course through it: from rarity colors to player JTBD. Marvel Snap didn\'t win Game of the Year 2022 by accident — the Second Dinner team applied exactly the theory we covered in 13 meetings.',
        },
        {
          type: 'callout' as const,
          variant: 'tip',
          content:
            'Open the presentation in a **new tab** for full-screen viewing — keyboard nav works (← → SPACE HOME END), tri-lingual switcher RU / EN / עב in the corner, deep-link `#s{N}`. Link: **https://uxi-entry-course.vercel.app/final/**',
        },
        {
          type: 'iframe-embed' as const,
          src: '/final/',
          title: 'Final presentation — 36 slides',
          caption:
            'Marvel Snap · walked through all 10 meetings of the course. Language switcher top-right. Navigation — arrow keys or space.',
          aspectRatio: '5 / 4',
        },
        {
          type: 'divider' as const,
        },
        {
          type: 'subheading' as const,
          content: 'Why this game specifically',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: '4.7★ and 30M+ downloads',
              definition:
                'First year post-launch (2022–2023): The Game Awards Best Mobile Game, D.I.C.E. Mobile GOTY, Apple Design Award (Innovation), BAFTA nominations.',
            },
            {
              term: 'Match runs exactly 3 minutes',
              definition:
                'JTBD statement: "6 free minutes in a queue → one full match → a dose of success without getting hooked for an hour". The design decision follows the situation literally.',
            },
            {
              term: 'Second attempt — CCG for beginners',
              definition:
                'The Second Dinner team are ex-Hearthstone developers. They cut Hearthstone mechanics (mana curve, hero powers, secret) down to three UX laws (Fitts + Hick + Miller).',
            },
            {
              term: 'Piano glass + halftone',
              definition:
                'One visual language: dark glass + holograms + halftone dots as a nod to Marvel comics. Same on iPhone and Samsung — games don\'t adapt to the platform, they redefine it.',
            },
          ],
        },
        {
          type: 'divider' as const,
        },
        {
          type: 'subheading' as const,
          content: 'Route: visuals first, research second',
        },
        {
          type: 'text' as const,
          content:
            'It\'s the very route the course itself takes: first the visual layer (M6 → M7 → M8 → M9 → M10 → M11 → M12), then research (M3 → M4 → M5). The order mirrors the real redesign process — **first look at what\'s there → then unpack why**.',
        },
        {
          type: 'diagram' as const,
          title: 'Route through the 10 course meetings',
          description:
            'Every course meeting is applied to the live Marvel Snap UI.',
          items: [
            '01 · M6 — Color theory: rarity as an Itten scale, warm/cool functional split',
            '02 · M7 — Typography: 3 fonts (Bebas Neue display + tabular + Geist body), 1.25 modular scale',
            '03 · M8 — Hierarchy: card as a 5-level textbook, F/Z patterns, Fitts / Hick / Miller',
            '04 · M9 — Wireframing: Snap\'s 4 main screens on one grid (Home / Match / Collection / Shop)',
            '05 · M10 — Microinteractions: 4 phases of the Snap button, Retreat, cube movement',
            '06 · M11 — Handoff: Card component spec, 7 states, 12 design tokens',
            '07 · M12 — Platforms: HUD anatomy, game UX vs system UX, ~173×57pt PLAY touch target',
            '08 · M3 — Persona: Maxim "Casual Card Player", JTBD "6 minutes in a queue"',
            '09 · M4 — Usability test: the Snap mechanic on 5 beginners, TTS / CSAT metrics',
            '10 · M5 — Research methods: interview + survey + card sorting as triangulation',
          ],
        },
        {
          type: 'divider' as const,
        },
        {
          type: 'subheading' as const,
          content: '10 patterns Snap applies from the course',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            { term: 'M6 · Rarity as a color scale', definition: '7-step shift around the Itten wheel + glow. The player scans the collection in 200ms without reading text.' },
            { term: 'M7 · Three fonts, three roles', definition: 'Bebas Neue display (headers, names, victory) + Bebas tabular (Power / Cost) + Geist body (descriptions, tooltips).' },
            { term: 'M8 · Card = hierarchy textbook', definition: '5 attention levels fit into 200×300 pixels — art, cost+power, name, description (in detail-view), frame.' },
            { term: 'M8 · Fitts + Hick + Miller', definition: 'PLAY button ~173×57pt (×4 over minimum), exactly 3 in-match actions, hand of 7 cards max.' },
            { term: 'M9 · 4 screens — one grid', definition: 'Home / Collection / Shop share the shell (currencies + hero + 5-icon dock). Match breaks the pattern deliberately — full-screen.' },
            { term: 'M10 · 4 phases of the Snap button', definition: 'Trigger (300ms long-press) → Rules (cube doubles) → Feedback (shake + sound + haptic) → Loop (button → RETREAT).' },
            { term: 'M11 · Card component + 12 tokens', definition: '7 states (default / hover / selected / playable / unaffordable / revealing / disabled), 4 density (Base / Hand / Grid / Detail).' },
            { term: 'M12 · One visual language', definition: 'Bebas Neue + piano glass + holograms identical on iPhone and Samsung. The game redefines system UX, doesn\'t adapt to it.' },
            { term: 'M3 · JTBD "6 minutes in a queue"', definition: 'Concrete situation (not "when bored"), functional motivation ("dose of success + a switch"), explicit constraint ("without getting hooked for an hour").' },
            { term: 'M4-5 · Method triangulation', definition: 'Usability test (5 participants) + interview (motives) + survey (retention) + card sorting (IA). Each method answers its own class of questions.' },
          ],
        },
        {
          type: 'divider' as const,
        },
        {
          type: 'callout' as const,
          variant: 'example',
          content:
            'The finale isn\'t a **course final exam** — it\'s a model of how a practicing UX designer thinks: take a live product and slice it into layers of theory. Try the same route on your favorite app three times a week and you\'ll see your product world differently.',
        },
      ],
      quiz: [
        {
          question:
            'In what order does the finale walk through the 10 course meetings?',
          options: [
            { id: 'a', text: 'M1 → M2 → M3 → ... → M13 (ascending)' },
            { id: 'b', text: 'M6 → M7 → M8 → M9 → M10 → M11 → M12 → M3 → M4 → M5' },
            { id: 'c', text: 'M3 → M4 → M5 → M6 → ... (research first, then design)' },
            { id: 'd', text: 'Random order' },
          ],
          correctId: 'b',
          explanation:
            'The finale goes from the visual layer (what the player sees: M6-M12) to the research layer (why it works: M3-M5). That order mirrors the real redesign process — «look at what\'s there → unpack why».',
        },
        {
          question:
            'In Marvel Snap, which colors are used for YOUR identity vs the OPPONENT?',
          options: [
            { id: 'a', text: 'Self — warm (red / gold), opponent — cool (blue)' },
            { id: 'b', text: 'Self — cool (blue), opponent — warm (red / orange)' },
            { id: 'c', text: 'Both the same color, only position differs' },
            { id: 'd', text: 'Self and opponent — both green, different shades' },
          ],
          correctId: 'b',
          explanation:
            'Checked against the real screen: your banner is blue (cool, safe), the opponent is red-orange (warm, attention). The SNAP button and energy are warm gold as drama accents, but the player\'s identity is cool blue.',
        },
        {
          question:
            'Why does slide 11 (5 hierarchy levels) mark the card Description as "detail-view only"?',
          options: [
            { id: 'a', text: 'It\'s a bug — the description should be on the card' },
            { id: 'b', text: 'There\'s no text on the in-match card — deliberately hidden to avoid distraction. Shown on tap.' },
            { id: 'c', text: 'The description is there, just in very tiny type' },
            { id: 'd', text: 'The description is only available in the premium version' },
          ],
          correctId: 'b',
          explanation:
            'In-match, the face of Storm (or any card) contains only Art + Cost + Power + Name + Frame. The "On Reveal: ..." description shows up in a separate detail-view (tap the card). Deliberate hiding for 200ms scan speed.',
        },
        {
          question:
            'Slide 25 claims games **break** the M12 rule "adapt to the platform". How exactly?',
          options: [
            { id: 'a', text: 'Games only use native iOS / Material dialogs' },
            { id: 'b', text: 'Games look identical on iOS and Android — their own visual language instead of the system\'s' },
            { id: 'c', text: 'Games only run on one platform' },
            { id: 'd', text: 'Games adapt to the platform even more than apps' },
          ],
          correctId: 'b',
          explanation:
            'An app adapts to the OS (SF Pro on iOS, Roboto on Android). A game adapts the OS to itself: own typography (Bebas Neue), own button shapes (holo-glow pill), own rhythm. Snap looks the same on iPhone and Samsung.',
        },
        {
          question:
            'What size is the PLAY button on Snap\'s home screen (measured on the real screen)?',
          options: [
            { id: 'a', text: '44×44pt — the Apple HIG minimum' },
            { id: 'b', text: '88×88pt — double the minimum, round' },
            { id: 'c', text: '~173×57pt — a pill, ×4 the minimum in width' },
            { id: 'd', text: 'Full screen width' },
          ],
          correctId: 'c',
          explanation:
            'PLAY isn\'t a circle — it\'s a horizontal pill ~173×57pt (×1.3 the 44pt minimum in height, ×4 in width). Fitts\'s law pushed to the limit: you can tap it without looking, the right thumb hits without aiming.',
        },
      ],
    },
  ],
}
