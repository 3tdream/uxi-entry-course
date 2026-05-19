import type { Meeting } from '../../types'

export const meeting05: Meeting = {
  id: '5',
  number: 5,
  title: 'User Research Methods',
  description:
    'User research methods: interviews, surveys, card sorting, as well as Use Cases, User Stories, and requirements prioritization',
  icon: 'ClipboardList',
  color: 'bg-cyan-500/10 text-cyan-600',
  parts: [
    // ═══════════════════════════════════════════════
    // Part 1: Interviews and Surveys (45 min)
    // ═══════════════════════════════════════════════
    {
      id: 'part-1',
      title: 'Interviews and Surveys',
      subtitle:
        'User interview techniques, survey design, Card Sorting and Tree Testing',
      duration: '45 min',
      sections: [
        {
          type: 'image' as const,
          src: '/images/meeting-05-part1-hero.webp',
          alt: 'Infographic: The UX Research Blueprint — strategic foundations (100:1 ROI, the 5 Whys rule, neutral vs leading questions) and the research toolkit (card sorting, tree test 80%+ benchmark, interviews 5-15 vs surveys 50-500+)',
          caption: 'Part 1 map: research-practice foundations + core toolkit (interviews, surveys, card sorting, tree testing).',
        },
        // ── Introduction ──
        {
          type: 'heading' as const,
          content: 'Why Conduct User Research',
        },
        {
          type: 'text' as const,
          content:
            'User Research is the systematic collection of data about users to make informed design decisions. According to Forrester, every $1 invested in UX research returns $100 during the development phase. Without research, a team designs a product "blindly," relying on guesses instead of facts.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            'Before launching, Slack conducted over 200 user interviews. The result: the team discovered that people didn\'t want "yet another messenger" but rather a way to **reduce the amount of email**. This changed the positioning and the entire product design.',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-roi-slack-pivot.webp',
          alt: 'Left: the Forrester insight "$1 → $100" (designing without data = designing blind). Right: The Slack Pivot — 200+ pre-launch user interviews → the key insight "users didn\'t want another messenger, they wanted to reduce email"',
          caption: 'Without research, design is blind. Slack pivoted its positioning after 200 interviews.',
        },
        {
          type: 'user-flow' as const,
          title: 'User Research Process',
          steps: [
            { id: 'goal', label: 'Define the research goal', type: 'start' as const },
            { id: 'method', label: 'Choose a method (interview / survey / sorting)', type: 'action' as const },
            { id: 'recruit', label: 'Recruit participants (5-8 people)', type: 'action' as const },
            { id: 'conduct', label: 'Conduct the research', type: 'action' as const },
            { id: 'analyze', label: 'Analyze the data', type: 'action' as const },
            { id: 'enough', label: 'Is the data sufficient?', type: 'decision' as const },
            { id: 'insights', label: 'Formulate insights', type: 'action' as const },
            { id: 'apply', label: 'Apply to design', type: 'end' as const },
          ],
          connections: [
            { from: 'goal', to: 'method' },
            { from: 'method', to: 'recruit' },
            { from: 'recruit', to: 'conduct' },
            { from: 'conduct', to: 'analyze' },
            { from: 'analyze', to: 'enough' },
            { from: 'enough', to: 'insights', label: 'Yes' },
            { from: 'enough', to: 'recruit', label: 'No — need more' },
            { from: 'insights', to: 'apply' },
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-research-cycle.webp',
          alt: 'Closed 8-step research cycle: Define Goal → Choose Method → Recruit → Conduct → Analyse → Check Sufficiency → Extract Insights → Apply to Design — rendered as an infinity loop',
          caption: 'Research as a loop, not a line item: 8 steps with "not enough data" looping back to recruit.',
        },
        {
          type: 'divider' as const,
        },

        // ── Interview Types ──
        {
          type: 'heading' as const,
          content: 'User Interviews: Three Approaches',
        },
        {
          type: 'text' as const,
          content:
            'Interviews are the gold standard of qualitative research. A live conversation with a user reveals **motivations, pain points, and context** that are impossible to obtain from analytics alone. There are three interview formats, each suited for different tasks.',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'Structured',
              items: [
                'Fixed list of questions',
                'Same order for all participants',
                'Easy to compare answers',
                'Suitable for hypothesis validation',
                'Example: NPS survey with open-ended questions',
              ],
            },
            {
              title: 'Semi-Structured',
              items: [
                'Guide with key topics',
                'Freedom to ask follow-up questions',
                'Balance of depth and comparability',
                'Most popular format in UX',
                'Example: discovery interview',
              ],
            },
            {
              title: 'Unstructured',
              items: [
                'Free-form conversation on a topic',
                'Maximum depth',
                'Difficult to analyze',
                'Requires an experienced interviewer',
                'Example: ethnographic research',
              ],
            },
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-interview-types.webp',
          alt: 'Comparison of three user-interview formats',
          caption: 'Three interview formats: structured, semi-structured, unstructured.',
        },
        {
          type: 'subheading' as const,
          content: 'How to Create an Interview Guide',
        },
        {
          type: 'text' as const,
          content:
            'An interview guide is a conversation plan that helps the interviewer remember key topics and keep the discussion on track. A good guide contains:\n\n- **Introduction** (2-3 min) — introduce yourself, explain the purpose, obtain consent for recording\n- **Warm-up** (3-5 min) — easy questions about the person and their context\n- **Main section** (20-30 min) — questions on the research topics\n- **Wrap-up** (3-5 min) — "Is there anything important we haven\'t discussed?", express gratitude',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-interview-3-pillars.webp',
          alt: 'Three interview pillars (Structured / Semi-structured / Unstructured) with focus on semi-structured as the industry standard, plus a 45-minute session timeline (Intro 2-3 → Warm-up 3-5 → Main 20-30 → Wrap-up 3-5)',
          caption: 'The 3 interview pillars + 45-minute session timeline. Semi-structured is the industry standard — depth of unstructured + comparability of structured.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'The "5 Whys" rule: when a participant gives a superficial answer, ask "Why?" up to 5 times in a row. This helps get to the true motivation. Example: "I deleted the app" \u2192 "Why?" \u2192 "There were too many notifications" \u2192 "Why did that bother you?" \u2192 "I use my phone during meetings" \u2192 Insight: a "Do Not Disturb" mode is needed.',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-5-whys-framework.webp',
          alt: '5 Whys framework on a concrete example: "I deleted the app" \u2192 5 layers of "Why?" \u2192 arrived at the real pain "I use my phone during important meetings" \u2192 design insight "build an explicit Do Not Disturb mode for professional contexts"',
          caption: '5 Whys in action: five "Why?" questions translate a symptom ("deleted the app") into a design insight (need Do Not Disturb mode).',
        },
        {
          type: 'subheading' as const,
          content: 'Sample Interview Questions',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Open-ended question',
              definition:
                '"Tell me how you usually search for products online?" — encourages a detailed response',
            },
            {
              term: 'Situational question',
              definition:
                '"Think about the last time you placed an order online. What was difficult?"',
            },
            {
              term: 'Behavioral question',
              definition:
                '"How often do you use mobile banking? In what situations?"',
            },
            {
              term: 'Pain point question',
              definition:
                '"What frustrates you the most about the current process of booking a doctor\'s appointment?"',
            },
            {
              term: 'Aspirational question',
              definition:
                '"If you could change one thing about this app, what would it be?"',
            },
          ],
        },
        {
          type: 'subheading' as const,
          content: 'Same question types — in a game-dev context',
        },
        {
          type: 'text' as const,
          content:
            'The question skeletons are universal; only the domain changes. Below are the same 5 types applied to a game product (using a 3v3 mobile shooter as a running example). Players often **can\'t verbalise** the reason for churn, so situational and behavioural questions yield **sharper** insights in games than "do you like the new skin?".',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Open-ended question (gaming)',
              definition:
                '"Tell me how you usually start a session in our game after a long workday?" — reveals the real entry context (metro / couch / lunch break, headphones / no headphones), not a "hypothetical player".',
            },
            {
              term: 'Situational question (gaming)',
              definition:
                '"Think about the last time you hit a losing streak — 3 losses in a row. What did you do?" — surfaces real behavior at an emotional peak (quit app, swap brawler, switch to bot games, frustration).',
            },
            {
              term: 'Behavioral question (gaming)',
              definition:
                '"How often do you open the in-game Shop? In which situations did you actually buy something in the last 30 days?" — exposes monetization triggers without judgment pressure. Browsing ≠ buying.',
            },
            {
              term: 'Pain point question (gaming)',
              definition:
                '"What frustrates you the most about the current matchmaking / brawler progression / Star Drop system?" — focuses on a specific mechanic. Not "what don\'t you like about the game" (too broad).',
            },
            {
              term: 'Aspirational question (gaming)',
              definition:
                '"If you could change one thing about the new-player onboarding, what would it be?" — captures the player\'s priority (onboarding, balance, monetization, social), showing where it hurts most.',
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            '**Game-dev research specifics:** experienced players give an "expert bias" — they remember and evaluate the game as designers, not users. Balance your sample: 2-3 hardcore (3+ hrs/day), 2-3 mid (30-60 min), 1-2 churned (played a month ago, no longer logging in). Churned players are the most valuable — they remember **exactly what broke**.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            'Avoid leading questions! Bad: "You liked our new search feature, didn\'t you?" Good: "Tell me about your experience using the search." Leading questions produce false-positive data and invalidate the entire study.',
        },
        {
          type: 'before-after' as const,
          title: 'Interview question: closed vs situational',
          before: {
            label: 'Bad question — closed',
            description:
              '"Do you use our app for everyday tasks?" — closed, presumes a yes/no, reveals no context. The participant will say "yes" (social norm), and you learn neither how, nor why, nor what for.',
          },
          after: {
            label: 'Good question — situational',
            description:
              '"Tell me about the last time you needed to [task]. How did you do it?" — triggers a concrete memory, opens a cause-and-effect chain. The participant recalls a real scenario rather than answering hypothetically.',
          },
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-question-teardown.webp',
          alt: 'Question Tear-down: Ask This, Not That. ❌ Closed "Do you use our app daily for tasks?" (triggers social norm, shuts down narrative) vs ✅ open "Tell me about the last time you booked a doctor\'s appointment online" (Open / Situational / Behavioural / Pain / Dream)',
          caption: 'Question Tear-down: 5 frames of a good question — Open / Situational / Behavioural / Pain / Dream. Closed "do you like it?" only buys you the social norm.',
        },
        {
          type: 'divider' as const,
        },

        // ── Surveys ──
        {
          type: 'heading' as const,
          content: 'Survey Design',
        },
        {
          type: 'text' as const,
          content:
            'Surveys are a **quantitative** method: they provide numbers and statistics. They are ideal when you need to validate insights from interviews on a large sample.',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: '[Google Forms ↗](https://forms.google.com/)',
              items: [
                'Free, no respondent limit',
                'Fast setup from templates',
                'Auto-export to Google Sheets',
                'Downsides: default branding, no conversational UI',
              ],
            },
            {
              title: '[Typeform ↗](https://www.typeform.com/)',
              items: [
                'Conversational UI — one question at a time',
                'Higher completion rate (~40% lift over baseline)',
                'Logic branching out of the box',
                'Paid from $25/mo after the first 10 responses',
              ],
            },
            {
              title: '[SurveyMonkey ↗](https://www.surveymonkey.com/)',
              items: [
                'Ready-made templates: NPS, CSAT, product surveys',
                'Built-in analytics + industry benchmarks',
                'Enterprise corporate standard',
                '10-question cap on the free plan',
              ],
            },
            {
              title: '[Tally ↗](https://tally.so/)',
              items: [
                'Free Typeform-style builder',
                'No limits on questions or responses',
                'Conditional logic + payment forms',
                'Younger product, fewer integrations',
              ],
            },
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-survey-toolkit-landscape.webp',
          alt: 'The Survey Tool Landscape: Google Forms (free, default UI), Typeform (conversational, +40% completion), SurveyMonkey (enterprise standard, benchmarks), Tally (free Typeform alternative) — strengths + trade-off for each',
          caption: 'Survey Tool Landscape: strengths and trade-offs for the 4 main survey platforms in the market.',
        },
        {
          type: 'text' as const,
          content:
            'Rules of a good survey:\n\n- **Brevity** — no more than 10-15 questions (completion rate drops by 20% after 12 questions)\n- **One question — one idea** — avoid "How convenient and fast is...?"\n- **Likert scale** — 5 or 7 points, odd number for a neutral option\n- **Required vs optional** — mark only critical questions with an asterisk\n- **Progress bar** — shows how much is left, reduces drop-off\n- **Logic branching** — if the answer is "No," skip the block of questions',
        },
        {
          type: 'before-after' as const,
          title: 'Survey question: leading vs neutral-behavioral',
          before: {
            label: 'Bad question — leading',
            description:
              '"How much did you like our new filter feature? (1-5)" — presumes you liked it. Upward bias is guaranteed: you\'ll get an average of 4.2 and conclude the feature is a hit. In reality some respondents never even found it.',
          },
          after: {
            label: 'Good question — neutral + behavioral',
            description:
              '"How do you usually narrow down a product list when shopping?" (open, behavior) → then "What made it hard to find the right product last time?" (pain). **Behavior first, judgment second.** If the feature is useful, it surfaces organically in the first answer.',
          },
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            'Example survey questions for e-commerce:\n\n1. How often do you shop online? (Once a month / 2-3 times / Every week / Every day)\n2. Which product categories do you buy most often? (multiple choice)\n3. Rate the convenience of the checkout process from 1 to 5\n4. What prevented you from completing your last purchase? (open-ended question)\n5. Would you recommend our store to friends? (NPS: 0-10)',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'Interviews vs Surveys',
              items: [
                'Interviews: depth, "why"',
                'Surveys: breadth, "how many"',
                'Interviews: 5-15 participants',
                'Surveys: 50-500+ respondents',
                'Interviews: 30-60 min per person',
                'Surveys: 3-5 min per person',
              ],
            },
            {
              title: 'When to Choose Which',
              items: [
                'Discovery phase \u2192 Interviews',
                'Hypothesis validation \u2192 Survey',
                'New product \u2192 Interviews + Survey',
                'A/B test results \u2192 Survey',
                'Usability issues \u2192 Interviews',
                'Feature prioritization \u2192 Survey',
              ],
            },
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-interviews-vs-surveys-matrix.webp',
          alt: 'Comparison matrix Qualitative (Interviews) vs Quantitative (Surveys) across 4 axes: Focus, Participants, Time Investment, When to Use',
          caption: 'Interviews vs Surveys matrix: depth vs scale across 4 method-selection axes.',
        },
        {
          type: 'divider' as const,
        },

        // ── Card Sorting ──
        {
          type: 'heading' as const,
          content: 'Card Sorting',
        },
        {
          type: 'text' as const,
          content:
            'Card Sorting is a method for researching information architecture: participants group content cards into categories. This helps understand the users\' **mental model** — how they expect to see the navigation structure and website sections.',
        },
        {
          type: 'diagram' as const,
          title: 'Card Sorting: Three Types',
          description:
            'Open sorting — participants create their own categories. Closed — categories are predefined. Hybrid — categories are predefined but participants can add their own.',
          items: [
            '\uD83D\uDFE2 Open: participants create their own categories \u2192 for discovering new IA',
            '\uD83D\uDD35 Closed: categories are fixed \u2192 for validating existing IA',
            '\uD83D\uDFE1 Hybrid: base categories + free-form \u2192 best balance',
            '\uD83D\uDC65 Participants: 15-30 people for statistical significance',
            '\uD83D\uDCC8 Result: dendrogram (similarity matrix) for building navigation',
            '\uD83C\uDCCF Offline option: physical cards on a table \u2014 fine for discovery, hard to scale',
          ],
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: '[Optimal Workshop \u2197](https://www.optimalworkshop.com/)',
              items: [
                'Gold standard for card sort + tree testing',
                'All three sort modes + native dendrogram',
                'Remote unmoderated research at scale',
                'Paid: from $191/mo, student licenses available',
              ],
            },
            {
              title: '[Maze \u2197](https://maze.co/)',
              items: [
                'Card sort bundled with usability testing',
                'Native Figma integration \u2014 import prototype directly',
                'Free plan up to 3 projects',
                'Caveat: dendrogram is leaner than Optimal\u2019s',
              ],
            },
            {
              title: '[UXtweak \u2197](https://www.uxtweak.com/)',
              items: [
                'Strong free tier (unlimited respondents per study)',
                'European data residency (GDPR-friendly)',
                'Card sort + tree testing + first-click test',
                'Younger product, UI rough in places',
              ],
            },
            {
              title: '[Lyssna \u2197](https://www.lyssna.com/)',
              items: [
                'Formerly UsabilityHub \u2014 rebranded as Lyssna',
                'Strong first-click test and preference test',
                'One of the best tree testing tools in its class',
                'Paid: from $79/mo for serious research',
              ],
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            'Example: you\'re designing the navigation for an electronics online store. You create 40 cards: "Headphones," "iPhone Charger," "Samsung Case," "Bluetooth Speaker," "HDMI Cable"... Participants group them. Result: 80% of people group "Headphones" and "Bluetooth Speaker" under "Audio" rather than "Accessories." This means you need a separate "Audio" category in the navigation.',
        },
        {
          type: 'before-after' as const,
          title: 'Reading the dendrogram: majority bias vs ambiguity',
          before: {
            label: 'Snap conclusion by majority',
            description:
              '"50% of participants grouped Bluetooth Speaker with Headphones — so they\'re similar; move both under \'Accessories\'." Treating the majority as the only signal and ignoring the remaining 50% who have a different mental model.',
          },
          after: {
            label: 'Acknowledge ambiguity → run a tree test',
            description:
              'Dendrogram: 50% → "Audio", 30% → "Gadgets", 20% → "Smart Home". The cluster is **ambiguous** → run a tree test with three navigation variants (or a hybrid sort with a fixed "Audio" category) rather than picking by "majority vote".',
          },
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-card-sorting.webp',
          alt: 'Card sorting illustration with three groups of cards',
          caption: 'Card sorting: participants group cards into categories.',
        },
        {
          type: 'subheading' as const,
          content: 'Tree Testing — Navigation Testing',
        },
        {
          type: 'text' as const,
          content:
            'Tree Testing is the reverse method to Card Sorting. You give participants a **ready-made navigation structure** (tree) and ask them to find specific information. This tests how well your IA works in practice.\n\n- **Task**: "Find where to change your password"\n- **Participant**: clicks through the navigation tree: Settings \u2192 Security \u2192 Change Password\n- **Metrics**: success rate, directness (found on first try), time to complete\n- **Benchmark**: success rate > 80% \u2014 the structure works',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-tree-testing-metrics.webp',
          alt: 'Validating the Architecture (Tree Testing): a tree structure with the correct path highlighted + 3 metrics on a concrete task "Where to change your password" — Success Rate 85% (target ≥80%), Directness 90% (first try, no backtracking), Time to Complete 3.5s',
          caption: 'Tree Testing on a live example: 85% / 90% / 3.5s — the three metrics that diagnose an IA.',
        },
        {
          type: 'before-after' as const,
          title: 'Tree test: "close enough" vs iterative fix',
          before: {
            label: 'Success rate 65% \u2192 "almost 70%, ship it"',
            description:
              'The team sees 65%, says "close enough" and ships the redesign to prod. **A third of users systematically** fail to find key sections. Support tickets "where is X?" start piling up, onboarding conversion drops.',
          },
          after: {
            label: 'Success rate 65% \u2192 extra sort + retest',
            description:
              '65% \u2192 run an additional open sort on the three problem nodes. Insight: "Profile Settings" reads as "system settings", not "my data". Rename \u2192 "My Account". Retest: **82%** \u2192 ship. Cost: 2 days. Savings: 3 months of tickets.',
          },
        },
        {
          type: 'divider' as const,
        },

        // ── Video ──
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=yBYd5USasXg',
          title: 'How to Conduct User Interviews — NNGroup',
          caption:
            'Nielsen Norman Group explains key user interview techniques (15 min, English)',
        },

        // ── Case Study ──
        {
          type: 'image' as const,
          src: '/images/meeting-05-airbnb-crisis.webp',
          alt: 'The Airbnb Search Crisis: left column — Problem (conversion stuck at ~12%, legal-sounding categories like "entire home / private room" confused users). Right column — Snow White Discovery (internal qualitative research showed users trusted the host\'s story, not the room taxonomy)',
          caption: 'Airbnb Search Crisis: 12% conversion + Snow White discovery ("entire home" reads like a legal term, not an invitation).',
        },
        // NOTE: Figures sourced from Airbnb Design team retrospectives and their 2013
        // "Snow White technique" blog post. Exact methodology was never publicly
        // disclosed — orders of magnitude are accurate, exact percentages illustrative.
        {
          type: 'case-study' as const,
          title: 'How Airbnb Rebuilt Search Using Card Sorting',
          company: 'Airbnb',
          problem:
            'Users couldn\'t find the right accommodation type: "entire home," "private room," and "shared room" were confusing. The search results page conversion rate was ~12%. Additional signal from a 2013 internal report ("Snow White technique" — participants got stickers to tag listings they\'d "feel safe enough to book"): users trust the **host\'s story**, not the room taxonomy. The phrase "entire home" did not feel inviting — it read like a legal term, not an invitation.',
          solution:
            'The team ran an open card sort with **200 participants across 5 countries** (US, Canada, UK, Germany, Brazil). Multi-regional sample by design: a previous US-only sort had systematically tilted toward "trip purpose", while Europeans sorted by neighborhood. The final IA was built **at the intersection of both patterns**: filters by purpose + search by neighborhood. The team confirmed people think not in accommodation type but in **trip purpose**: "romantic getaway," "family vacation," "business trip."',
          result:
            'Conversion rose to ~19% (+~58% over baseline). Search time decreased by ~30%. The new IA became the foundation of the 2020 redesign with "flexible travel" (Flexible Search). Airbnb has not disclosed exact internal numbers — figures here are illustrative, drawn from public design-team retrospectives.',
          steps: [
            { title: 'Snow White research', description: 'Trust test: 40 listing photos + sticker tagging. Insight: users trust the host\'s story, not the accommodation type' },
            { title: 'Open sort', description: '200 participants × 5 countries. Grouped 60 accommodation cards into their own categories' },
            { title: 'Cultural analysis', description: 'Compared US vs European clusters. Divergence: Americans sort by purpose, Europeans by neighborhood. IA is built at the intersection of both patterns' },
            { title: 'Dendrogram analysis', description: 'Identified 4 stable clusters by trip purpose + 3 by neighborhood type' },
            { title: 'Tree Testing', description: 'Tested the new navigation with 50 participants — success rate 87%' },
            { title: 'A/B test', description: 'New IA vs old on 5% of traffic over 2 weeks. Then gradual rollout to 100%' },
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-airbnb-process.webp',
          alt: 'Full 6-step Airbnb process: Trust Research → Open Sort → Cultural Analysis → Dendrogram Analysis → Tree Testing (87% success) → A/B Test (5% traffic). Outcome: Conversion ~+58%, Search Time −30%',
          caption: 'Airbnb process: 6 steps from qualitative trust research to A/B test. Result: conversion ~19% (+58%), search time −30%.',
        },
        {
          type: 'divider' as const,
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-preflight-checklist.webp',
          alt: 'The Pre-Flight Research Checklist (8 items): goal → guide → recruiting → consent → pilot → recording → affinity map → report format. Without data, you are designing blind',
          caption: 'Pre-Flight Research Checklist: 8 items, without which the interview yields noise, not data.',
        },
        {
          type: 'checklist' as const,
          title: 'Checklist: Preparing for a User Interview',
          items: [
            {
              text: 'Research goal is defined (1-2 specific questions)',
              demo: '"Goal: understand why users don\'t complete onboarding. Hypothesis: step 3 (document upload) is the main barrier." A goal = the question you\'ll return to in the report.',
            },
            {
              text: 'Guide with 8-12 open-ended questions is prepared',
              demo: 'Four-block structure: 1) **Tell me about yourself** (warmup), 2) **How do you currently solve X?** (current behavior), 3) **The last time you...** (concrete recall), 4) **What was hard?** (pain points). No yes/no questions.',
            },
            {
              text: '5-8 participants from the target audience are recruited',
              demo: 'Criteria: active users 25-45, shopped online ≥2× per month, **not working in IT/design** (the last one is critical — peers think like you do).',
            },
            {
              text: 'Recording consent is prepared (NDA if needed)',
              demo: '"I consent to my session being video-recorded for internal analysis. The recording is stored for 6 months and not shared with third parties. I can stop the test at any time." + signature and date.',
            },
            {
              text: 'Pilot interview is conducted (guide test)',
              demo: 'Run a colleague through every question in the guide. Time it — if > 60 min, trim the main block. Log: where they asked back, which questions stalled.',
            },
            {
              text: 'Recording is enabled (video or audio + notes)',
              demo: '[Zoom ↗](https://zoom.us/) + cloud recording (auto-transcript). Or [Loom ↗](https://www.loom.com/) — screen + camera in one. **Check the mic before you start** — muddy audio kills analysis.',
            },
            {
              text: 'Template for capturing insights is ready (affinity map)',
              demo: 'Affinity map in [Miro ↗](https://miro.com/): one insight = one sticky note. After 5 interviews, clusters are visible to the naked eye. Alternative: [Dovetail ↗](https://dovetail.com/) — built for research tagging.',
            },
            {
              text: 'Report format for stakeholders is defined',
              demo: 'Minimum: **top-3 insights + participant quotes + next steps**. Stakeholders read the first page — everything else is appendix. One slide = one insight.',
            },
          ],
        },
      ],
      quiz: [
        {
          question:
            'Which type of interview provides the best balance between answer depth and data comparability?',
          options: [
            { id: 'a', text: 'Structured interview' },
            { id: 'b', text: 'Semi-structured interview' },
            { id: 'c', text: 'Unstructured interview' },
            { id: 'd', text: 'Focus group' },
          ],
          correctId: 'b',
          explanation:
            'A semi-structured interview uses a guide with key topics but allows follow-up questions. It is the most popular format in UX research because it combines the depth of an unstructured approach with the ability to compare answers using a common framework.',
        },
        {
          question:
            'When conducting Card Sorting, you want to verify whether an existing website navigation works correctly. Which type of sorting is appropriate?',
          options: [
            { id: 'a', text: 'Open — participants create their own categories' },
            { id: 'b', text: 'Closed — categories are predefined' },
            { id: 'c', text: 'Hybrid — base categories + free-form categories' },
            { id: 'd', text: 'Tree Testing — testing by tree' },
          ],
          correctId: 'b',
          explanation:
            'Closed sorting is ideal for validation: you provide existing categories and observe where participants place the cards. If cards end up in unexpected places, the navigation doesn\'t match the users\' mental model.',
        },
        {
          question: 'Which question is leading and NOT suitable for an interview?',
          options: [
            { id: 'a', text: '"Tell me about your experience using the search"' },
            { id: 'b', text: '"You liked our new homepage design, didn\'t you?"' },
            { id: 'c', text: '"What was the most difficult part of placing an order?"' },
            { id: 'd', text: '"How often do you use the mobile app?"' },
          ],
          correctId: 'b',
          explanation:
            'The question "You liked..., didn\'t you?" is leading: it suggests the "correct" answer and creates social pressure. The participant is more likely to agree than to give honest feedback. Always formulate neutral, open-ended questions.',
        },
        {
          question:
            'How many participants are recommended for Card Sorting to achieve statistically significant results?',
          options: [
            { id: 'a', text: '3-5 people' },
            { id: 'b', text: '5-8 people' },
            { id: 'c', text: '15-30 people' },
            { id: 'd', text: '100+ people' },
          ],
          correctId: 'c',
          explanation:
            'For Card Sorting, 15-30 participants are recommended because the method analyzes grouping patterns through a similarity matrix. With fewer participants, the dendrogram will be unreliable. For interviews, 5-8 people are sufficient, but quantitative methods require a larger sample.',
        },
        {
          question:
            'What is the primary metric Tree Testing measures?',
          options: [
            { id: 'a', text: 'Page load time' },
            { id: 'b', text: 'Success Rate — % of tasks where the user reached the right item without hints' },
            { id: 'c', text: 'Purchase conversion' },
            { id: 'd', text: 'NPS — how much the user liked the navigation' },
          ],
          correctId: 'b',
          explanation:
            'Tree Testing tests **only navigation structure** (no visual design). The headline metric is Success Rate: did the user reach the correct menu item. The other key metric is Directness: did they reach it without backtracking. NNgroup considers ≥ 70% a healthy benchmark.',
        },
        {
          question:
            'Which tool is considered the "gold standard" for remote card sorting + tree testing with a dendrogram?',
          options: [
            { id: 'a', text: 'Google Forms' },
            { id: 'b', text: 'Hotjar' },
            { id: 'c', text: 'Optimal Workshop' },
            { id: 'd', text: 'Notion' },
          ],
          correctId: 'c',
          explanation:
            'Optimal Workshop (Treejack + OptimalSort) is the gold standard for remote IA testing. All three sort modes + native dendrogram + tree testing in one suite. Alternatives: Maze (simpler, Figma-anchored), UXtweak (broader free plan), Lyssna (strong in tree testing).',
        },
        {
          question:
            'When is a survey preferable to interviews?',
          options: [
            { id: 'a', text: 'When exploring a new unknown area (discovery)' },
            { id: 'b', text: 'When you need user quotes for a presentation' },
            { id: 'c', text: 'When you need to validate a hypothesis on a large sample (>50 people)' },
            { id: 'd', text: 'When you want to understand "why" a user behaves a certain way' },
          ],
          correctId: 'c',
          explanation:
            'Surveys are a quantitative method. They answer "how many" and "how often", whereas interviews answer "why". In the discovery phase you want interviews (5-8 people, open-ended questions). Once a hypothesis is framed and you need to check its prevalence — switch to a survey of 50-500 respondents.',
        },
        {
          question:
            'The "5 Whys" technique in an interview is used for:',
          options: [
            { id: 'a', text: 'Asking exactly 5 questions and wrapping up in 5 minutes' },
            { id: 'b', text: 'Reaching the root cause by repeatedly asking "why?" on each answer' },
            { id: 'c', text: 'Validating 5 different hypotheses at once' },
            { id: 'd', text: 'Convincing the user the design is correct' },
          ],
          correctId: 'b',
          explanation:
            '"5 Whys" is a sequential drill-down: each participant answer becomes a fresh "why?" question. By the 5th level, the non-obvious **root cause** usually surfaces, not the symptom. Example: "I don\'t shop online" → "I don\'t trust it" → "My card was blocked once" → "..." — the real pain isn\'t where it first appeared.',
        },
      ],
    },

    // ═══════════════════════════════════════════════
    // Part 2: Use Cases and User Stories (45 min)
    // ═══════════════════════════════════════════════
    {
      id: 'part-2',
      title: 'Use Cases and User Stories',
      subtitle:
        'The difference between Use Cases and User Stories, writing format, acceptance criteria, and MoSCoW prioritization',
      duration: '45 min',
      sections: [
        {
          type: 'image' as const,
          src: '/images/meeting-05-part2-hero.webp',
          alt: 'Infographic "User Stories vs Use Cases: Mastering Product Requirements". Function vs Value, INVEST principle, Given-When-Then, the 60/20/20 MoSCoW rule, Story Mapping efficiency, comparative table Use Case vs User Story (focus / origin / best for)',
          caption: 'Part 2 map: from research insights to requirements — Use Case vs User Story, INVEST, GWT, MoSCoW, Story Mapping.',
        },
        // ── Introduction ──
        {
          type: 'heading' as const,
          content: 'From Research to Requirements',
        },
        {
          type: 'text' as const,
          content:
            'After conducting interviews and surveys, the question arises: how do you translate insights into clear requirements for the development team? Two tools exist for this: **Use Cases** (usage scenarios) and **User Stories**. Both describe user behavior but from different perspectives.',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-research-to-requirements.webp',
          alt: 'Schematic: messy research notes (squiggly arrow) → structured card with PROJ-1234 (User Login Feature), Description, Core Value, MVP Cut, Acceptance Criteria, Status TODO, Priority HIGH, TESTABLE tag',
          caption: 'The bridge: insights from research → a structured requirement (with value, AC, priority).',
        },
        {
          type: 'divider' as const,
        },

        // ── Use Cases ──
        {
          type: 'heading' as const,
          content: 'Use Cases — Usage Scenarios',
        },
        {
          type: 'text' as const,
          content:
            'A Use Case is a detailed description of the interaction between a user (actor) and the system to achieve a specific goal. The format originated in software engineering (Ivar Jacobson, 1992) and describes a **sequence of steps**.\n\nUse Case structure:\n- **Title**: Place an Order\n- **Actor**: Buyer\n- **Precondition**: Item is added to the cart\n- **Main flow**: step 1, step 2, step 3...\n- **Alternative flow**: what if there\'s a payment error?\n- **Postcondition**: Order is created, email is sent',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            'Use Case: "Book a Doctor\'s Appointment"\n\n1. The patient opens the "Appointments" section in the app\n2. The system displays a list of specialists\n3. The patient selects a doctor and sees available time slots\n4. The patient selects a date and time\n5. The system requests confirmation\n6. The patient confirms the appointment\n7. The system sends an SMS confirmation\n\nAlternative: if no slots are available \u2014 offer to join the waiting list.',
        },
        {
          type: 'divider' as const,
        },

        // ── User Stories ──
        {
          type: 'image' as const,
          src: '/images/meeting-05-two-paths.webp',
          alt: 'Two distinct paths to product clarity: User Research → Use Case (Software Engineering, Ivar Jacobson, 1992) — focuses on interaction sequence; User Story (Agile/Scrum, Kent Beck & Mike Cohn) — focuses on user value',
          caption: 'One research insight, two paths to requirements. Use Case = function, User Story = value.',
        },
        {
          type: 'heading' as const,
          content: 'User Stories',
        },
        {
          type: 'text' as const,
          content:
            'A User Story is a brief description of functionality from the user\'s perspective. The format comes from Agile/Scrum, invented by Kent Beck and popularized by Mike Cohn.\n\nFormula:\n\n**"As a [role], I want [action], so that [value]"**\n\nA User Story focuses not on the interaction steps but on the **value for the user**. This makes the story understandable for the entire team: from the designer to the developer.',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-story-formula.webp',
          alt: 'Engineering the perfect user story — 3 blocks: As a [Role] (highly specific), I want to [Action] (verb + object + constraint), So that [Value] (measurable business goal)',
          caption: 'User Story formula: Role (specific) + Action (verb+object+constraint) + Value (business metric, not "for convenience").',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'The INVEST principle for good User Stories:\n\n- **I**ndependent \u2014 independent from other stories\n- **N**egotiable \u2014 open to discussion\n- **V**aluable \u2014 delivers value to the user\n- **E**stimable \u2014 effort can be estimated\n- **S**mall \u2014 small enough for a single sprint\n- **T**estable \u2014 acceptance criteria can be verified',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-invest-dial.webp',
          alt: 'The quality assurance dial: 6 INVEST attributes around a central dial. Independent / Negotiable / Valuable / Estimable / Small / Testable',
          caption: 'INVEST dial: 6 quality attributes for a User Story. Most common failure is S (Small) \u2014 doesn\'t fit a sprint \u2192 decompose.',
        },

        // ── Comparison ──
        {
          type: 'subheading' as const,
          content: 'Use Case vs User Story: Key Differences',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'Use Case',
              items: [
                'Detailed step-by-step scenario',
                'Focus on interaction with the system',
                'Includes alternative flows',
                'Originated from Waterfall / RUP',
                'Suited for complex systems (banking, healthcare)',
                'Written by an analyst or architect',
              ],
            },
            {
              title: 'User Story',
              items: [
                'Brief formula: role + action + value',
                'Focus on value for the user',
                'Supplemented by acceptance criteria',
                'Originated from Agile / Scrum',
                'Suited for iterative development',
                'Written by the Product Owner or designer',
              ],
            },
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-framework-matrix.webp',
          alt: 'Choosing the right framework for the task: comparison matrix Use Case vs User Story across 6 axes — Focus, Format, Inclusions, Origin (Waterfall/RUP vs Agile/Scrum), Best For (complex systems vs iterative products), Primary Author (architect vs Product Owner)',
          caption: 'Framework Matrix: Use Case vs User Story across 6 axes. Use Case — for risky, long, regulated systems; User Story — for iterative products.',
        },
        {
          type: 'divider' as const,
        },

        // ── Before-After ──
        {
          type: 'heading' as const,
          content: 'Good vs Bad User Stories',
        },
        {
          type: 'before-after' as const,
          title: 'Example 1: E-commerce — Product Search',
          before: {
            label: 'Bad User Story',
            description:
              '"Build search on the website." No role, no value, no context. The developer doesn\'t understand what kind of search is needed or for whom.',
          },
          after: {
            label: 'Good User Story',
            description:
              '"As a buyer, I want to search for products by name and category so I can quickly find what I need without browsing the entire catalog." Acceptance Criteria: results appear in < 1 sec, autocomplete supported, category filter available.',
          },
        },
        {
          type: 'before-after' as const,
          title: 'Example 2: Fitness App — Workout Tracking',
          before: {
            label: 'Bad User Story',
            description:
              '"As a user, I want to track my workout." Role is too abstract ("user"), no value stated, scope is unclear.',
          },
          after: {
            label: 'Good User Story',
            description:
              '"As a beginner athlete, I want to log completed exercises with weight and reps so I can see my progress over the month and not forget my working weights." AC: adding an exercise in 2 taps, 30-day history, progress chart.',
          },
        },
        {
          type: 'before-after' as const,
          title: 'Example 3: SaaS — Project Management',
          before: {
            label: 'Bad User Story',
            description:
              '"Need a dashboard with tasks." Who will use it? What tasks? Why a dashboard? No answers at all.',
          },
          after: {
            label: 'Good User Story',
            description:
              '"As a team lead, I want to see the status of all sprint tasks on a dashboard with a filter by assignee so I can quickly understand who is blocked during the daily stand-up." AC: loads in < 2 sec, filter by 3+ fields, real-time updates.',
          },
        },
        {
          type: 'divider' as const,
        },

        // ── Acceptance Criteria ──
        {
          type: 'heading' as const,
          content: 'Acceptance Criteria',
        },
        {
          type: 'text' as const,
          content:
            'Acceptance Criteria (AC) are clear conditions that, when met, mean the User Story is considered complete. Without AC, a story remains ambiguous: the developer and designer may interpret it differently.\n\n**Given-When-Then** format (Gherkin):\n\n- **Given**: initial state\n- **When**: user action\n- **Then**: expected result',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-gwt-boundary-lines.webp',
          alt: 'Setting definitive boundary lines: three-stage diagram GIVEN (Setup State) → WHEN (Action Node) → THEN (System Response) on a concrete example "user on product page → taps heart → item enters favourites, counter +1, no reload"',
          caption: 'Given-When-Then sets "definitive boundary lines": setup → action → response. One scenario = one AC.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            'User Story: "As a buyer, I want to add products to favorites so I can return to them later."\n\nAC-1: Given I am on the product page, When I click the heart icon, Then the product is added to favorites and the icon turns red.\n\nAC-2: Given I am not logged in, When I click the heart icon, Then the system prompts me to sign in or register.\n\nAC-3: Given there are 50+ products in favorites, When I open the "Favorites" section, Then products load with pagination of 20 items per page.',
        },
        {
          type: 'before-after' as const,
          title: 'Acceptance Criteria: vague vs Given-When-Then',
          before: {
            label: 'Untestable AC',
            description:
              'AC-1: "Adding to favorites **works correctly**". "Correctly" — for whom? QA doesn\'t know what to put in the test case. The developer interprets it as "doesn\'t crash". Two weeks later in review you find that the icon doesn\'t change and the header counter doesn\'t update — but technically "it works".',
          },
          after: {
            label: 'Testable AC in Given-When-Then',
            description:
              'AC-1: **Given** the user is on the product page, **When** they tap ♡, **Then** the product appears in `/favorites`, the icon switches to filled ♥, the header counter +1, no page reload. **One behavior — one AC**. QA writes one test case, the developer sees all four check points.',
          },
        },
        {
          type: 'divider' as const,
        },

        // ── Scenarios for different products ──
        {
          type: 'heading' as const,
          content: 'User Stories for Different Product Types',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: '🛒 Web: E-commerce',
              items: [
                '"As a buyer, I want to compare up to 4 products in a table so I can choose the best option by specifications"',
                '"As a seller, I want to receive notifications about new reviews so I can quickly respond to negative feedback"',
                '"As a guest, I want to place an order without registering so I don\'t waste time creating an account"',
              ],
            },
            {
              title: '🏃 Mobile: Fitness App',
              items: [
                '"As a runner, I want to see my route on the map in real time so I don\'t get lost on a new trail"',
                '"As an Apple Watch user, I want to receive a vibration when I reach my target heart rate so I don\'t overexert my heart"',
                '"As a beginner, I want to receive ready-made workout programs by skill level so I don\'t have to create a plan on my own"',
              ],
            },
            {
              title: '🛠 SaaS: Project Management',
              items: [
                '"As a project manager, I want to set dependencies between tasks so I can see the critical path on the Gantt chart"',
                '"As a developer, I want to link commits to tasks so the PM can see progress without manual reports"',
                '"As a client, I want to see a read-only project dashboard so I can track progress without access to internal discussions"',
              ],
            },
            {
              title: '📊 Data: Analytics Dashboard',
              items: [
                '"As an analyst, I want to build custom reports with drag-and-drop so I don\'t have to write SQL queries for every data slice"',
                '"As a CEO, I want to see company KPIs on one screen with 12-month trends so I can make strategic decisions in 30 seconds"',
                '"As a marketer, I want to set up automatic email report delivery every Monday so the team can see results without logging into the system"',
              ],
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // ── MoSCoW ──
        {
          type: 'heading' as const,
          content: 'MoSCoW Prioritization',
        },
        {
          type: 'text' as const,
          content:
            'Once User Stories are written, they need to be prioritized. MoSCoW is a popular framework where each story falls into one of 4 categories:',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Must have',
              definition:
                'The product doesn\'t work without this. MVP features. Example: registration, payment, product catalog.',
            },
            {
              term: 'Should have',
              definition:
                'Important, but the product can work without it in the first version. Example: filters, favorites, order history.',
            },
            {
              term: 'Could have',
              definition:
                'Nice to have if there\'s time left. Example: dark theme, animations, social login.',
            },
            {
              term: 'Won\'t have',
              definition:
                'Consciously deferred. Not "never," but "not in this release." Example: multi-language support, AI recommendations.',
            },
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-moscow-60-20-20.webp',
          alt: 'Managing finite capacity with MoSCoW: 4-quadrant matrix Must / Could / Should / Won\'t + a 60/20/20 pie chart. If 100% of tasks are Must have, you aren\'t prioritizing — you\'re hoarding',
          caption: 'MoSCoW 4-quadrant + 60/20/20 pie. 100% Must = hoarding, not prioritizing.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'The 60/20/20 rule: in a sprint, ~60% of tasks should be Must have, ~20% Should have, ~20% Could have. If 100% of tasks are Must have, it means you\'re not prioritizing \u2014 you\'re just throwing everything into one pile.',
        },
        {
          type: 'before-after' as const,
          title: 'MoSCoW under stakeholder pressure',
          before: {
            label: 'Reaction: "let\'s add it as a Must"',
            description:
              'Mid-sprint a stakeholder demands: "This new feature is a Must Have, add it now." The team adds it. Existing Must-haves don\'t close, technical debt piles up, the sprint slips, demo fails. Two sprints later — retro: "why is everything on fire?"',
          },
          after: {
            label: 'Discipline: "automatically Won\'t this sprint"',
            description:
              'A new request mid-sprint → **automatically Won\'t Have** of the current sprint. The PO explains: "We\'ll add it next sprint after we prioritize with the team." The only exception is **P0 incidents** (prod down, regulatory risk, critical bug). Without exceptions, MoSCoW works; with exceptions, it\'s "everything is on fire" all over again.',
          },
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-midsprint-pressure.webp',
          alt: 'The mid-sprint pressure valve: a lab beaker illustration — stakeholder pours a new Must Have into sprint capacity and an existing task automatically falls into "Won\'t Have". Exception only for P0 incidents — discipline maintains the sprint, exceptions burn it down',
          caption: 'Mid-sprint pressure valve: a new Must → an old task automatically demoted to Won\'t. Exception only for P0 incidents.',
        },
        {
          type: 'divider' as const,
        },

        // ── Video ──
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=6q5-cVeNjCE',
          title: 'Writing Great User Stories — Mike Cohn',
          caption:
            'Mike Cohn, author of "User Stories Applied," explains how to write effective user stories (12 min, English)',
        },

        // ── Case Study ──
        // NOTE: Squad model + Story Mapping practice are documented in Henrik Kniberg's
        // Spotify Engineering Culture whitepapers (2012-2014). Internal Spotify metrics
        // were never publicly disclosed — figures here are illustrative, drawn from
        // typical outcomes of teams that adopted the Squad/Story Mapping pattern.
        {
          type: 'case-study' as const,
          title: 'How Spotify Prioritized Backlogs Through Story Mapping',
          company: 'Spotify',
          problem:
            'In 2014–2015 the number of Squad teams grew from 3 to 30+. Each squad maintained its own backlog without a shared format. The Discover Weekly team observed: ~60–70% of user requests in Slack and email **had no role and no value** — just "we want X". Without structure, developers worked on the "loudest" requests rather than the most important ones.',
          solution:
            'They adopted **Story Mapping** across all Squad teams (see Spotify Engineering Culture, Henrik Kniberg). All requests were rewritten in the "As a [role], I want [action], so that [value]" format. Story Mapping every quarter: **horizontal axis** = user journey (Discover → Listen → Save → Share). **Vertical axis** under each stage = stories ranked by priority. A horizontal cut separated Release 1 (Must) from "someday". Prioritization = MoSCoW + Squad vote.',
          result:
            'Teams that moved to Story Mapping reported quarterly planning shrinking from **~2 days to ~3 hours** (Kniberg, 2012). The count of "abandoned" features (started, never shipped) decreased — Spotify-specific numbers were never publicly disclosed. The durable change: a shared conversation format across every Squad.',
          steps: [
            { title: 'Backlog audit', description: 'Rewrote ~60-70% of Slack/email requests into User Story format: role + action + value' },
            { title: 'Story Mapping', description: 'Horizontally: Discover → Listen → Save → Share. Vertically under each stage — stories ranked top-down by priority. Horizontal line = MVP cut' },
            { title: 'MoSCoW session', description: 'Each Squad voted on its own story priorities. Won\'t Have stayed visible on the board — not a "rejection", but "not this quarter"' },
            { title: 'Sprint Planning', description: 'Sprint by 60/20/20. Mid-sprint requests automatically deferred to the next cycle (see "MoSCoW under pressure" block)' },
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-spotify-turnaround.webp',
          alt: 'Case Study: The Spotify turnaround. 4 steps: 1. Audit (60-70% vague Slack requests → role/action/value), 2. Map (2D horizontal journey Discover → Listen → Save + MVP cut line), 3. MoSCoW (teams vote on priorities, Won\'t Have visible), 4. Execute (sprint locked, 60/20/20). Result: planning sessions 2 days → 3 hours',
          caption: 'Spotify turnaround in 4 steps: Audit → Map → MoSCoW → Execute. Quarterly planning: 2 days → 3 hours.',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-05-backlog-vs-storymap.webp',
          alt: 'Elevating the backlog from list to map: left — a flat list of Task 42, Task 15... stamped CONTEXTLESS; right — a 2D Story Map grid by journey stage Discover / Listen / Save / Share with an MVP Cut Line separating release from future',
          caption: 'Flat backlog = CONTEXTLESS. Story Map = a 2D grid of priorities aligned to the user journey + MVP Cut Line.',
        },
        {
          type: 'before-after' as const,
          title: 'Flat backlog vs Story Map',
          before: {
            label: 'Flat backlog: 47 rows in Jira',
            description:
              '47 tasks, each a single row. No connection to the user journey. Sprint planning becomes "what can we squeeze from the top of the list?". The customer can\'t see which tasks cover the key user journey. Story #42 "improve onboarding" sits next to #15 "fix the share icon" — both "medium priority", no context.',
          },
          after: {
            label: 'Story Map: 2D grid by user journey',
            description:
              'Horizontally — 5 journey stages (Discover / Listen / Save / Share / Recommend); vertically under each — stories ranked by priority. A horizontal line separates **MVP** (Must) from **future** (Could / Won\'t). In 20 minutes the whole team sees what ships in Release 1 and where the journey coverage has gaps. Story #42 is now at the top of the Discover column, #15 in the middle of Share. Priority is obvious.',
          },
        },
        {
          type: 'divider' as const,
        },

        // ── User Persona ──
        {
          type: 'user-persona' as const,
          persona: {
            name: 'Dmitry Volkov',
            age: 34,
            role: 'Product Manager at a SaaS startup',
            bio: 'Manages a team of 8 people. Writes User Stories every week but frequently receives complaints from developers: "it\'s unclear what to do." Wants to learn how to write clear stories with solid AC.',
            goals: [
              'Write User Stories that developers understand on the first read',
              'Reduce the number of follow-up questions by 50%',
              'Prioritize the backlog objectively, not by "who shouts the loudest"',
            ],
            frustrations: [
              'Developers interpret stories in their own way',
              'Stakeholders add Must have tasks mid-sprint',
              'No unified template \u2014 everyone writes differently',
            ],
            traits: [
              { label: 'Product experience', value: '5 years' },
              { label: 'Agile knowledge', value: 'Intermediate' },
              { label: 'Tools', value: 'Jira, Miro, Confluence' },
            ],
            quote: '"I spend more time explaining tasks than coming up with them"',
          },
        },
        {
          type: 'divider' as const,
        },

        // ── Checklist ──
        {
          type: 'image' as const,
          src: '/images/meeting-05-practitioner-checklist.webp',
          alt: 'The practitioner\'s checklist (8 items): role highly specific / action contains verb-object-constraint / value links to measurable goal / story passes INVEST (completable in 1 sprint) / 2-5 AC in GWT / priority locked via 60/20/20 + Mike Cohn quote "User stories are about having better conversations"',
          caption: 'Practitioner\'s checklist + Mike Cohn quote: "User stories are not about writing better requirements. They are about having better conversations."',
        },
        {
          type: 'checklist' as const,
          title: 'Checklist: Writing a User Story',
          items: [
            {
              text: 'A specific role is stated (not "user" but "buyer," "team lead," "beginner")',
              demo: '❌ "As a user, I want..." — ✅ "As an accountant at a small business setting up their tax report for the first time, I want...". The sharper the role, the sharper the solution.',
            },
            {
              text: 'The action the user wants to perform is described',
              demo: '❌ "...I want to manage tasks" — ✅ "...I want to drag tasks between status columns without a page reload". Action = verb + object + constraint.',
            },
            {
              text: 'The value / goal is stated (why this is needed)',
              demo: 'Test: ask **"why?"** of the story. If the answer is generic ("so it\'s more convenient") the value isn\'t revealed yet. Find a business metric: "...so approval time drops from 2 days to 2 hours".',
            },
            {
              text: 'The story passes the INVEST check',
              demo: 'The most common failure is **S (Small)**. If it can\'t fit a single sprint, decompose: "auth" → "email login", "Google login", "password reset". Also check N (Negotiable) — a story is not a technical specification.',
            },
            {
              text: '2-5 Acceptance Criteria are written in Given-When-Then format',
              demo: '**Given**: user is on a product page; **When**: they tap "Add to favorites"; **Then**: the icon switches to filled, the header counter increments by 1. One scenario = one AC. [Gherkin syntax ↗](https://cucumber.io/docs/gherkin/) is the canonical notation.',
            },
            {
              text: 'The story is small enough for a single sprint',
              demo: 'Test: can **one engineer** close this in 3-5 working days? If not — split. A 2-week epic is an epic, not a story. Break it into 5-10 stories with independent ACs.',
            },
            {
              text: 'Priority is set using MoSCoW',
              demo: '**Must**: release blocker. **Should**: important, but a workaround exists. **Could**: "nice to have". **Won\'t**: parked in backlog with "not this quarter". Sprint mix: 60/20/20 (no Won\'t).',
            },
            {
              text: 'The story has been discussed with the team (definition of ready)',
              demo: '**Definition of Ready**: PO read it → designer attached a mockup → engineer estimated story points → QA wrote test scenarios. Only then does the story enter the sprint. Without DoR, the team burns the sprint on clarifications.',
            },
          ],
        },

        // ── Quote ──
        {
          type: 'quote' as const,
          text: 'User stories are not about writing better requirements. They are about having better conversations.',
          author: 'Jeff Patton',
          role: 'Author of "User Story Mapping"',
        },
      ],
      quiz: [
        {
          question:
            'What format is used for writing User Stories in Agile?',
          options: [
            { id: 'a', text: '"The system must allow the user to..."' },
            { id: 'b', text: '"As a [role], I want [action], so that [value]"' },
            { id: 'c', text: '"Step 1: the user clicks... Step 2: the system displays..."' },
            { id: 'd', text: '"Given... When... Then..."' },
          ],
          correctId: 'b',
          explanation:
            'The format "As a [role], I want [action], so that [value]" is the Agile standard for User Stories. Option (c) is a Use Case, option (d) is Acceptance Criteria (Given-When-Then), and option (a) is a formal System Requirement.',
        },
        {
          question:
            'How does a Use Case differ from a User Story?',
          options: [
            { id: 'a', text: 'A Use Case is shorter, while a User Story is longer' },
            { id: 'b', text: 'A Use Case describes a step-by-step scenario, while a User Story describes value for the user' },
            { id: 'c', text: 'A Use Case is used in Agile, while a User Story is used in Waterfall' },
            { id: 'd', text: 'They are the same thing, just different names' },
          ],
          correctId: 'b',
          explanation:
            'A Use Case is a detailed step-by-step scenario of interaction with the system (main and alternative flows). A User Story is a brief formula that focuses on value for the user. Use Cases are more common in Waterfall/RUP, while User Stories are used in Agile.',
        },
        {
          question:
            'According to the MoSCoW method, which tasks should make up approximately 60% of a sprint?',
          options: [
            { id: 'a', text: 'Could have \u2014 nice additions' },
            { id: 'b', text: 'Should have \u2014 important but not critical' },
            { id: 'c', text: 'Must have \u2014 the product doesn\'t work without them' },
            { id: 'd', text: 'Won\'t have \u2014 deferred for the future' },
          ],
          correctId: 'c',
          explanation:
            'The 60/20/20 rule: ~60% of sprint tasks should be Must have (critical for the product to function), ~20% Should have, ~20% Could have. Won\'t have items are not included in the sprint. This ensures a balance between reliable delivery and product growth.',
        },
        {
          question:
            'What does the letter "T" stand for in the INVEST principle for User Stories?',
          options: [
            { id: 'a', text: 'Transferable \u2014 can be handed off to another team' },
            { id: 'b', text: 'Testable \u2014 acceptance criteria can be verified' },
            { id: 'c', text: 'Timeboxed \u2014 limited in time' },
            { id: 'd', text: 'Trackable \u2014 progress can be monitored' },
          ],
          correctId: 'b',
          explanation:
            'T in INVEST stands for Testable \u2014 the story can be verified through acceptance criteria. If clear AC can\'t be written, the story is too abstract and needs to be broken down. INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable.',
        },
        {
          question:
            'What does the letter "N" stand for in the INVEST principle?',
          options: [
            { id: 'a', text: 'New \u2014 the story must describe new functionality' },
            { id: 'b', text: 'Negotiable \u2014 implementation details are discussed with the team, not locked down' },
            { id: 'c', text: 'Numbered \u2014 the story must have a unique Jira ID' },
            { id: 'd', text: 'Necessary \u2014 the story is mandatory for the release' },
          ],
          correctId: 'b',
          explanation:
            'N in INVEST = Negotiable. A story is **a prompt for a conversation**, not a technical specification. The PO frames "what and why", the team works out "how". A rigidly prescribed solution kills flexibility and team ownership. Jeff Patton: "User stories are about having better conversations."',
        },
        {
          question:
            'In the Given-When-Then format for an acceptance criterion, what does the "Given" block describe?',
          options: [
            { id: 'a', text: 'The action the user takes' },
            { id: 'b', text: 'The expected result after the action' },
            { id: 'c', text: 'The initial context / precondition \u2014 the system state before the action' },
            { id: 'd', text: 'The description of an error that may occur' },
          ],
          correctId: 'c',
          explanation:
            'Given = **precondition** (what must be true BEFORE the action). When = trigger (what the user does). Then = expected outcome. Example: Given \u2014 user is on a product page; When \u2014 they tap "Add to favorites"; Then \u2014 the icon switches to filled. This is [Gherkin \u2197](https://cucumber.io/docs/gherkin/) notation, born out of BDD.',
        },
        {
          question:
            'Which method historically comes from Waterfall / RUP rather than Agile?',
          options: [
            { id: 'a', text: 'User Stories' },
            { id: 'b', text: 'Use Case' },
            { id: 'c', text: 'Story Mapping' },
            { id: 'd', text: 'MoSCoW' },
          ],
          correctId: 'b',
          explanation:
            'Use Case was invented by Ivar Jacobson in 1986 in Objectory (later RUP \u2014 Rational Unified Process). It\'s a formal step-by-step scenario with a main and alternative flows. User Stories \u2014 a lightweight Agile format \u2014 emerged from Extreme Programming in the late 1990s (Kent Beck \u2192 Mike Cohn). MoSCoW comes from DSDM (1994). Story Mapping is Agile-native (Jeff Patton, 2005).',
        },
        {
          question:
            'What is Story Mapping?',
          options: [
            { id: 'a', text: 'A way to rewrite a single User Story in multiple variants' },
            { id: 'b', text: 'A visual technique: user journey horizontally, stories ranked by priority vertically \u2014 used for release planning' },
            { id: 'c', text: 'Importing stories from Notion into Jira' },
            { id: 'd', text: 'A method for estimating effort in story points' },
          ],
          correctId: 'b',
          explanation:
            'Story Mapping (Jeff Patton, 2005) is a backlog visualization technique: **horizontally** \u2014 the user journey stages (Discovery \u2192 Sign-up \u2192 First task \u2192 Habit); **vertically** under each stage \u2014 stories ranked top-down by priority. A horizontal cut line separates MVP / Release 1 / Release 2. Fixes the "flat backlog" problem where stories lack context.',
        },
      ],
    },
  ],
}
