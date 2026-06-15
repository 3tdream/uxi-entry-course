import type { Meeting } from '../../types'

export const meeting09: Meeting = {
  id: '9',
  number: 9,
  title: 'Wireframing',
  description:
    'The art of wireframing: from paper sketches to digital prototypes. Methods, tools, rules, and hands-on practice creating wireframes for web, mobile, and SaaS.',
  icon: 'PenTool',
  color: 'bg-amber-500/10 text-amber-600',
  parts: [
    {
      id: 'part-1',
      title: 'From Idea to Wireframe',
      subtitle: 'What wireframing is, sketching techniques, tools, and rules',
      duration: '45 min',
      sections: [
        // === INTRODUCTION ===
        {
          type: 'heading' as const,
          content: 'Why You Need a Wireframe',
        },
        {
          type: 'text' as const,
          content:
            'Before a designer starts choosing colors and fonts, and a developer begins writing code, the **structure** of the interface must be defined. A wireframe is the skeleton of a future screen: the layout of blocks, content hierarchy, and navigation logic. It is the fastest and cheapest way to validate an idea before it becomes expensive to rework.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'A wireframe is not a drawing "for aesthetics." It is a **thinking tool**: it helps the team agree on structure before discussing visuals.',
        },
        {
          type: 'quote' as const,
          text: 'If a picture is worth a thousand words, a prototype is worth a thousand meetings.',
          author: 'Tom Kelley',
          role: 'Partner at IDEO',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-09-wireframe-evolution.webp',
          alt: 'Wireframe example: from pencil sketch to digital mockup',
          caption: 'Evolution of an idea: sketch \u2192 lo-fi wireframe \u2192 hi-fi wireframe',
        },
        {
          type: 'divider' as const,
        },

        // === WHAT IS WIREFRAMING ===
        {
          type: 'heading' as const,
          content: 'What Is a Wireframe',
        },
        {
          type: 'text' as const,
          content:
            'A **wireframe** is a schematic, simplified representation of an interface screen. A wireframe shows **what** will be on the screen and **where** it will be located, but **not** how it will look visually. Colors, images, and final typography come later.',
        },
        {
          type: 'text' as const,
          content:
            'A wireframe solves three key tasks: (1) it defines the **content structure** \u2014 which information blocks are needed on the screen; (2) it establishes the **hierarchy** \u2014 what is more important and what is less important; (3) it shows the **navigation** \u2014 how the user moves between screens.',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Wireframe',
              definition: 'A schematic skeleton of a screen showing the structure and placement of elements without visual styling',
            },
            {
              term: 'Lo-fi wireframe',
              definition: 'A low-fidelity skeleton \u2014 simple shapes, placeholder text, minimal detail',
            },
            {
              term: 'Hi-fi wireframe',
              definition: 'A high-fidelity skeleton \u2014 real content, precise proportions, ready for client review',
            },
            {
              term: 'Wireflow',
              definition: 'A combination of wireframe and user flow \u2014 screen skeletons connected by transition arrows',
            },
            {
              term: 'Content-first design',
              definition: 'An approach where content is defined first, and the screen structure is then built around it',
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // === SKETCHING TECHNIQUES ===
        {
          type: 'heading' as const,
          content: 'Sketching Techniques',
        },
        {
          type: 'text' as const,
          content:
            'The first stage of wireframing is **paper sketching**. Pencil and paper are the fastest tools for capturing ideas. Sketching allows you to explore dozens of variations in just a few minutes without getting caught up in pixels.',
        },
        {
          type: 'subheading' as const,
          content: 'The Crazy 8s Method',
        },
        {
          type: 'text' as const,
          content:
            '**Crazy 8s** is a popular technique from the Google Design Sprint. A sheet of paper is folded into 8 sections. In **8 minutes** (1 minute per section), you draw **8 different variations** of the same design challenge. The goal is to push past the "first obvious idea" and discover unexpected solutions.',
        },
        {
          type: 'diagram' as const,
          title: 'The Crazy 8s Process',
          description: 'Step-by-step idea generation method in 8 minutes',
          items: [
            '1. Fold an A4 sheet into 8 sections (three folds)',
            '2. Define the challenge (e.g., "Onboarding screen")',
            '3. Timer \u2014 1 minute per section',
            '4. Draw quickly, no perfectionism',
            '5. Don\u2019t evaluate while drawing',
            '6. After 8 minutes \u2014 review all variations',
            '7. Vote: everyone places dots on the best ideas',
            '8. The best variation becomes the wireframe foundation',
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-09-crazy-8s.webp',
          alt: 'Paper sheet split into eight wireframe sketches',
          caption: 'Crazy 8s: eight ideas in eight minutes.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            'During a Google Design Sprint, a team of 5 generates 40 variations of a single screen in 40 minutes. Typically, 3\u20135 of them contain breakthrough ideas that no one would have proposed in a regular meeting.',
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=yz4g87XapQ0',
          title: 'The Crazy 8s Method \u2014 Google Design Sprint',
          caption: 'How the Crazy 8s method works in practice',
        },
        {
          type: 'divider' as const,
        },

        // === PAPER PROTOTYPING ===
        {
          type: 'subheading' as const,
          content: 'Paper Prototyping Rules',
        },
        {
          type: 'text' as const,
          content:
            'A paper prototype is a wireframe cut from paper and laid out on a table. The user "taps" on elements with their finger, and the moderator swaps in the next screens. This is the fastest way to test navigation before creating a digital prototype.',
        },
        {
          type: 'checklist' as const,
          title: 'Paper Prototyping Checklist',
          items: [
            'Use a thick marker \u2014 fine details are not needed',
            'One screen = one sheet of paper',
            'Label each screen (name and number)',
            'Create cutout elements for popups and modal windows',
            'Prepare "empty" states (loading, error, empty list)',
            'Number the transition order with arrows on a separate sheet',
            'Test with real people, not fellow designers',
            'Record observations immediately \u2014 memory is unreliable',
          ],
        },
        {
          type: 'divider' as const,
        },

        // === LO-FI VS HI-FI ===
        {
          type: 'heading' as const,
          content: 'Lo-fi vs Hi-fi Wireframe',
        },
        {
          type: 'text' as const,
          content:
            'Wireframes come in two levels of detail. **Lo-fi** (low fidelity) \u2014 rough sketches with placeholders: gray rectangles, squiggly lines instead of text, crosses instead of images. **Hi-fi** (high fidelity) \u2014 detailed skeletons with real text, precise proportions, and interactive elements.',
        },
        {
          type: 'before-after' as const,
          title: 'Lo-fi wireframe \u2192 Hi-fi wireframe',
          before: {
            label: 'Lo-fi wireframe',
            description: 'Gray blocks, placeholder text ("Lorem ipsum"), no colors, no images. Creation time: 10\u201330 minutes. Ideal for early iterations and team discussions.',
          },
          after: {
            label: 'Hi-fi wireframe',
            description: 'Real content, precise dimensions, typography, icons, navigation elements. Creation time: 2\u20134 hours. Used for client approval and developer handoff.',
          },
        },
        {
          type: 'comparison' as const,
          title: 'When to Use Lo-fi vs Hi-fi',
          items: [
            {
              label: 'Creation speed',
              ux: 'Lo-fi: 10\u201330 minutes per screen',
              ui: 'Hi-fi: 2\u20134 hours per screen',
            },
            {
              label: 'Cost of changes',
              ux: 'Lo-fi: nearly free',
              ui: 'Hi-fi: significant effort',
            },
            {
              label: 'Feedback focus',
              ux: 'Lo-fi: about structure and navigation',
              ui: 'Hi-fi: about content and details',
            },
            {
              label: 'Audience',
              ux: 'Lo-fi: team, stakeholders',
              ui: 'Hi-fi: client, developers',
            },
            {
              label: 'Attachment risk',
              ux: 'Lo-fi: low \u2014 easy to discard',
              ui: 'Hi-fi: high \u2014 painful to redo',
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            'A common mistake is jumping straight to hi-fi wireframes. The team spends hours on details, only to discover that the structure is wrong. **Always start with lo-fi.**',
        },
        {
          type: 'divider' as const,
        },

        // === TOOLS ===
        {
          type: 'heading' as const,
          content: 'Wireframing Tools',
        },
        {
          type: 'text' as const,
          content:
            'The choice of tool depends on the task, team, and project stage. Here are the main tools designers use for wireframing.',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'Balsamiq',
              items: [
                'Specialized wireframing tool',
                'Intentionally "hand-drawn" style',
                'Library of ready-made UI components',
                'Simple drag-and-drop interface',
                'Ideal for lo-fi wireframes',
                'Paid ($9/mo)',
              ],
            },
            {
              title: 'Whimsical',
              items: [
                'Wireframes + flowcharts in one place',
                'Quick component templates',
                'Real-time collaboration',
                'Minimalist interface',
                'Free plan up to 3,000 elements',
                'Web app, nothing to install',
              ],
            },
            {
              title: 'Figma',
              items: [
                'Full-featured design tool',
                'Wireframing via component libraries',
                'Best for hi-fi wireframes',
                'Free for personal use',
                'Collaboration, comments, prototypes',
                'Industry standard for teams',
              ],
            },
            {
              title: 'Excalidraw',
              items: [
                'Open-source, free',
                '"Hand-drawn" style, like on a whiteboard',
                'Instant start, no sign-up required',
                'Export to PNG, SVG',
                'Ideal for quick sketches',
                'Integration with VS Code and Notion',
              ],
            },
          ],
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=6t_dYhXyYjI',
          title: 'Wireframing in Figma \u2014 Tutorial',
          caption: 'How to create wireframes in Figma: a step-by-step guide',
        },
        {
          type: 'divider' as const,
        },

        // === 7 RULES OF A WIREFRAME ===
        {
          type: 'heading' as const,
          content: '7 Rules of a Good Wireframe',
        },
        {
          type: 'text' as const,
          content:
            'Wireframing is not a free-form exercise. There are proven rules that separate a useful skeleton from a useless picture.',
        },
        {
          type: 'diagram' as const,
          title: '7 Wireframe Rules',
          description: 'Principles that make a wireframe a useful design tool',
          items: [
            '1. Content comes first \u2014 determine what goes on the screen, then where',
            '2. Gray only \u2014 use shades of gray only; color distracts from structure',
            '3. Real text \u2014 "Lorem ipsum" hides problems with length and hierarchy',
            '4. Annotations \u2014 label behaviors: "click \u2192 navigate," "scroll \u2192 load more"',
            '5. Consistency \u2014 identical elements look identical across all screens',
            '6. States \u2014 show empty, loading, error, and success \u2014 not just the happy path',
            '7. Numbering \u2014 every screen is numbered and labeled for easy discussion',
          ],
        },
        {
          type: 'before-after' as const,
          title: 'Wireframe Without Rules vs With Rules',
          before: {
            label: 'Bad wireframe',
            description: 'No numbering, Lorem ipsum, no annotations, only the happy path, inconsistent element styles across screens. The team asks: "What is happening here?"',
          },
          after: {
            label: 'Good wireframe',
            description: 'Numbered screens, real text, behavioral annotations, error states shown, consistent component style. The team says: "Clear, let\u2019s start development."',
          },
        },
        {
          type: 'divider' as const,
        },

        // === MOBILE-FIRST ===
        {
          type: 'heading' as const,
          content: 'Mobile-First Approach in Wireframing',
        },
        {
          type: 'text' as const,
          content:
            '**Mobile-first** is a design strategy where the wireframe is created for the mobile screen first, then expanded for tablet and desktop. This approach forces you to prioritize: only the most important content fits on a small screen.',
        },
        {
          type: 'text' as const,
          content:
            'Why does mobile-first work better than desktop-first? Because **shrinking** is harder than **expanding**. If you start with a desktop where there is plenty of space, transitioning to mobile means sacrificing content. But if you start with mobile, desktop gives you room to grow.',
        },
        {
          type: 'user-flow' as const,
          title: 'Mobile-First Wireframing Process',
          steps: [
            { id: 'start', label: 'Define content', type: 'start' as const },
            { id: 'priority', label: 'Prioritize elements', type: 'action' as const },
            { id: 'mobile', label: 'Mobile wireframe (320\u2013375px)', type: 'action' as const },
            { id: 'test-m', label: 'Does everything fit?', type: 'decision' as const },
            { id: 'cut', label: 'Remove extras', type: 'action' as const },
            { id: 'tablet', label: 'Tablet wireframe (768px)', type: 'action' as const },
            { id: 'desktop', label: 'Desktop wireframe (1280px+)', type: 'action' as const },
            { id: 'end', label: 'Complete wireframe set', type: 'end' as const },
          ],
          connections: [
            { from: 'start', to: 'priority' },
            { from: 'priority', to: 'mobile' },
            { from: 'mobile', to: 'test-m' },
            { from: 'test-m', to: 'cut', label: 'No' },
            { from: 'test-m', to: 'tablet', label: 'Yes' },
            { from: 'cut', to: 'mobile' },
            { from: 'tablet', to: 'desktop' },
            { from: 'desktop', to: 'end' },
          ],
        },
        {
          type: 'divider' as const,
        },

        // === CONTENT-FIRST ===
        {
          type: 'subheading' as const,
          content: 'Content-First Design',
        },
        {
          type: 'text' as const,
          content:
            '**Content-first design** is an approach where the screen structure is built **around the content**, not the other way around. Instead of drawing a beautiful layout and then "squeezing in" the text, the designer first determines: what content the user needs, in what order, and in what volume.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            'Example: when designing a product card, the content-first approach starts with the question "What does the buyer want to see?": name, price, photo, reviews, buy button. Only after that does the designer compose the wireframe. The result is a structure that **works for the user**, not for the designer.',
        },
        {
          type: 'divider' as const,
        },

        // === WIREFRAMING PROCESS ===
        {
          type: 'heading' as const,
          content: 'The Complete Wireframing Process',
        },
        {
          type: 'diagram' as const,
          title: 'From Task to Finished Wireframe',
          description: 'Step-by-step wireframing process from research to handoff',
          items: [
            '1. Research \u2014 study users, competitors, requirements',
            '2. Content plan \u2014 define what should be on each screen',
            '3. Information architecture \u2014 build a screen map and navigation',
            '4. Paper sketch \u2014 draw 3\u20135 variations on paper (Crazy 8s)',
            '5. Digital lo-fi \u2014 transfer the best variation to Figma/Whimsical',
            '6. Feedback \u2014 show the team, capture comments',
            '7. Iteration \u2014 refine the wireframe based on feedback',
            '8. Hi-fi wireframe \u2014 add real content and details',
            '9. Annotations \u2014 describe element behaviors',
            '10. Handoff \u2014 wireframe is ready for visual design',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'The "3 iterations" rule: the first wireframe is a starting point for discussion. The second refines it after feedback. The third is the final version. If you need more than 5 iterations, something is wrong with the process.',
        },

        // === CASE STUDY ===
        {
          type: 'case-study' as const,
          title: 'Wireframing at Airbnb',
          company: 'Airbnb',
          problem: 'In 2009, Airbnb could not attract users \u2014 the conversion rate was under 1%. Pages were overloaded with information, and navigation was confusing.',
          solution: 'The co-founders took paper and sketched the ideal user journey: "I want to find a place \u2192 see photos \u2192 book it." Each step became a separate wireframe. They removed everything unnecessary and focused on property photos.',
          result: 'After the wireframe-based redesign, conversion increased 2.5x. This "wireframe-first" approach became the standard design process at Airbnb.',
          steps: [
            { title: 'Problem analysis', description: 'Studied user behavior: where they drop off, what they search for, what they cannot find' },
            { title: 'Paper sketches', description: 'Drew 50+ variations of the homepage and listing page' },
            { title: 'Testing', description: 'Tested paper prototypes with 10 users' },
            { title: 'Digital wireframe', description: 'Transferred the best ideas to digital format and refined them' },
            { title: 'Result', description: 'A minimalist structure focused on photos and simple booking' },
          ],
        },
        {
          type: 'divider' as const,
        },

        // === FINAL CHECKLIST ===
        {
          type: 'checklist' as const,
          title: 'Checklist: What I Learned in Part 1',
          items: [
            'A wireframe is a screen skeleton, not a visual design',
            'A lo-fi wireframe takes minutes to create; hi-fi takes hours',
            'Crazy 8s helps generate 8 ideas in 8 minutes',
            'A paper prototype is the fastest way to test',
            'The mobile-first approach forces you to prioritize',
            'Content-first: content defines the structure, not the other way around',
            '7 wireframe rules \u2014 from gray-only color to screen numbering',
            'Balsamiq, Whimsical, Figma, Excalidraw \u2014 different tools for different tasks',
          ],
        },
        {
          type: 'iframe-embed' as const,
          src: '/slides/m9-crazy8s.html',
          title: 'Crazy 8s \u00b7 Gaming \u00b7 Game Over screen',
          caption: '\ud83c\udfae Interactive slide: 8 "Game Over" screens in 8 minutes. Hit \u25b6 to start the timer \u2014 example cards flip open one per minute. Use them AFTER your own sketches, not instead.',
          aspectRatio: '16 / 9',
        },
      ],
      quiz: [
        {
          question: 'What is a wireframe?',
          options: [
            { id: 'a', text: 'A finished visual design with colors and images' },
            { id: 'b', text: 'A schematic skeleton of a screen showing the structure and placement of elements' },
            { id: 'c', text: 'Interface code in HTML and CSS' },
            { id: 'd', text: 'A marketing presentation of a product' },
          ],
          correctId: 'b',
          explanation:
            'A wireframe is a schematic representation of a screen focused on structure, content hierarchy, and navigation, without visual styling.',
        },
        {
          question: 'How many variations do you draw in the Crazy 8s method?',
          options: [
            { id: 'a', text: '3 variations in 3 minutes' },
            { id: 'b', text: '5 variations in 10 minutes' },
            { id: 'c', text: '8 variations in 8 minutes' },
            { id: 'd', text: '10 variations in 15 minutes' },
          ],
          correctId: 'c',
          explanation:
            'Crazy 8s means 8 variations in 8 minutes (1 minute each). The goal is to move beyond the first obvious idea and find unconventional solutions.',
        },
        {
          question: 'Why is mobile-first better than desktop-first for wireframing?',
          options: [
            { id: 'a', text: 'Mobile screens look better than desktop ones' },
            { id: 'b', text: 'A small screen forces you to prioritize \u2014 expanding is easier than shrinking' },
            { id: 'c', text: 'Mobile means less work for the designer' },
            { id: 'd', text: 'No one uses desktop sites anymore' },
          ],
          correctId: 'b',
          explanation:
            'Mobile-first forces you to identify what matters most. There is no room for extras on a small screen. Expanding to desktop is easier than cramming a desktop design into mobile.',
        },
        {
          question: 'Which tool is specifically designed for lo-fi wireframes with a "hand-drawn" style?',
          options: [
            { id: 'a', text: 'Figma' },
            { id: 'b', text: 'Photoshop' },
            { id: 'c', text: 'Balsamiq' },
            { id: 'd', text: 'Sketch' },
          ],
          correctId: 'c',
          explanation:
            'Balsamiq is a specialized wireframing tool with an intentionally "hand-drawn" style that emphasizes that it is a skeleton, not a final design.',
        },
        {
          question: 'What is the key difference between a lo-fi and a hi-fi wireframe?',
          options: [
            { id: 'a', text: 'Lo-fi is on paper, hi-fi is only in Figma' },
            { id: 'b', text: 'Lo-fi is a rough skeleton (fast, cheap, to validate structure); hi-fi is detailed with real content and spacing (close to final)' },
            { id: 'c', text: 'Lo-fi is for mobile, hi-fi for desktop' },
            { id: 'd', text: 'No difference, they are synonyms' },
          ],
          correctId: 'b',
          explanation:
            'Lo-fi = low detail: gray blocks, placeholder text, fast and cheap; ideal for early structure and flow validation. Hi-fi = high detail: real content, precise spacing, states; close to the final design.',
        },
        {
          question: 'What does "content-first design" mean in wireframing?',
          options: [
            { id: 'a', text: 'Draw pretty blocks first, then drop in any text' },
            { id: 'b', text: 'Design around real content (real headings, text length, item counts) instead of Lorem ipsum' },
            { id: 'c', text: 'Only copywriters write content, the designer is not involved' },
            { id: 'd', text: 'All content first, then six months of building' },
          ],
          correctId: 'b',
          explanation:
            'Content-first: design is built around real content. Lorem ipsum hides problems — real headings run longer, lists run shorter, and empty states get forgotten entirely. Real content surfaces this at the wireframe stage.',
        },
        {
          question: 'Why annotate a wireframe (add explanatory notes)?',
          options: [
            { id: 'a', text: 'To fill empty space on the canvas' },
            { id: 'b', text: 'A wireframe without notes is a puzzle: devs and stakeholders do not know element behavior, states, and logic' },
            { id: 'c', text: 'Annotations are unnecessary, it is all obvious' },
            { id: 'd', text: 'To show the client how much work it was' },
          ],
          correctId: 'b',
          explanation:
            'Annotations explain what a static image cannot: what happens on click, which states exist (loading/error/empty), where data comes from, validation rules. Without them a wireframe spawns dozens of questions.',
        },
        {
          question: 'What does the rule "start with lo-fi, not straight to hi-fi" mean?',
          options: [
            { id: 'a', text: 'Hi-fi is never needed' },
            { id: 'b', text: 'Do not pour hours into details and pixels before the structure is approved — otherwise rework is costly and you hate to throw it away' },
            { id: 'c', text: 'Lo-fi looks more professional' },
            { id: 'd', text: 'Clients love gray blocks' },
          ],
          correctId: 'b',
          explanation:
            'Polishing pixels before the structure is approved is a classic beginner mistake. Once you sink 5 hours into a beautiful screen, it is psychologically hard to scrap it even if the structure is wrong. Lo-fi is cheap to change — so validate structure there.',
        },
      ],
    },
    {
      id: 'part-2',
      title: 'Wireframe Practice',
      subtitle: 'Wireframing for web, mobile, SaaS, games: patterns, mistakes, accessibility',
      duration: '55 min',
      sections: [
        // === INTRODUCTION ===
        {
          type: 'heading' as const,
          content: 'Wireframing for Real Projects',
        },
        {
          type: 'text' as const,
          content:
            'In the first part, we covered wireframing theory. Now let\u2019s apply that knowledge in practice: we\u2019ll explore wireframing for different project types \u2014 from landing pages to SaaS dashboards. Each type has its own patterns, rules, and common mistakes.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'There is no "universal" wireframe. A landing page, e-commerce site, mobile app, and SaaS dashboard are **different tasks** with different patterns. Understanding these differences is the key to effective wireframing.',
        },
        {
          type: 'divider' as const,
        },

        // === WEB: LANDING PAGE ===
        {
          type: 'heading' as const,
          content: 'Wireframe for a Landing Page',
        },
        {
          type: 'text' as const,
          content:
            'A **landing page** is a single-page site with one goal: conversion. A landing page wireframe must clearly guide the user from the headline to the action. The structure follows the "inverted pyramid" principle: the most important content goes at the top.',
        },
        {
          type: 'diagram' as const,
          title: 'Landing Page Wireframe Structure',
          description: 'Typical landing page blocks in top-to-bottom order',
          items: [
            '1. Hero section \u2014 headline, subheadline, CTA button, image',
            '2. Social proof \u2014 client logos or numbers ("10,000+ users")',
            '3. Benefits \u2014 3\u20134 cards with icons',
            '4. How it works \u2014 3 steps with illustrations',
            '5. Testimonials \u2014 2\u20133 quotes with photos',
            '6. Pricing \u2014 comparison table of plans',
            '7. FAQ \u2014 accordion with common questions',
            '8. Final CTA \u2014 repeated call to action',
            '9. Footer \u2014 contacts, links, social media',
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-09-landing-anatomy.webp',
          alt: 'Wix illustration: landing-page skeleton with nine main sections top-to-bottom',
          caption: 'Landing-page anatomy: nine typical blocks top-to-bottom. Source: Wix, "Anatomy of a Landing Page".',
        },
        {
          type: 'before-after' as const,
          title: 'Landing Page Wireframe: Mistakes vs Correct Approach',
          before: {
            label: 'Bad landing page wireframe',
            description: 'Hero without CTA, 8 benefit items (too many), no social proof, pricing hidden at the bottom, 2 different CTAs competing for attention. The user doesn\u2019t know what to do.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#FAFAF9',
              rows: [
                { text: '[ NAV \u00b7 8 links \u00b7 no CTA ]', fontSize: 11, color: '#78716C' },
                { text: '[ HERO \u00b7 image collage \u00b7 no CTA ]', fontSize: 13, fontWeight: 'semibold', color: '#1C1917', marginTop: 8 },
                { text: '[ Benefits: 8-item bullet list ]', fontSize: 11, color: '#44403C', marginTop: 6 },
                { text: '[ Benefits: 4 more bullets ]', fontSize: 11, color: '#44403C', marginTop: 4 },
                { text: '[ Long "about us" block ]', fontSize: 11, color: '#44403C', marginTop: 6 },
                { text: '[ CTA #1 "Submit" ]    [ CTA #2 "Buy now" ]', fontSize: 11, fontWeight: 'semibold', color: '#B91C1C', marginTop: 6 },
                { text: '[ Footer ]', fontSize: 10, color: '#A8A29E', marginTop: 8 },
              ],
              footnote: '0 social proof \u00b7 2 competing CTAs \u00b7 no pricing at all',
            },
          },
          after: {
            label: 'Good landing page wireframe',
            description: 'Clear headline + one CTA in the hero, 3 benefits, social proof near the CTA, pricing in a prominent position, one repeated CTA. The user\u2019s path is a straight line to conversion.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#FAFAF9',
              rows: [
                { text: '[ NAV \u00b7 logo \u00b7 3 links \u00b7 CTA "Start free" ]', fontSize: 11, color: '#44403C' },
                { text: '[ HERO \u00b7 H1 \u00b7 sub \u00b7 ONE CTA \u00b7 screenshot ]', fontSize: 13, fontWeight: 'bold', color: '#1C1917', marginTop: 8 },
                { text: '[ Client logos \u00b7 "10,000+ teams" ]', fontSize: 11, color: '#0F766E', marginTop: 6 },
                { text: '[ 3 benefit cards ]', fontSize: 11, color: '#44403C', marginTop: 6 },
                { text: '[ How it works \u00b7 3 steps ]', fontSize: 11, color: '#44403C', marginTop: 4 },
                { text: '[ Testimonials \u00b7 2 quotes ]', fontSize: 11, color: '#44403C', marginTop: 4 },
                { text: '[ Pricing \u00b7 3 plans ]', fontSize: 11, color: '#44403C', marginTop: 4 },
                { text: '[ FAQ accordion ]', fontSize: 11, color: '#44403C', marginTop: 4 },
                { text: '[ Repeated CTA \u00b7 "Start free" ]', fontSize: 11, fontWeight: 'semibold', color: '#0F766E', marginTop: 6 },
                { text: '[ Footer ]', fontSize: 10, color: '#A8A29E', marginTop: 6 },
              ],
              footnote: '9 Wix-style blocks \u00b7 one CTA \u00b7 proof up top',
            },
          },
        },
        {
          type: 'iframe-embed' as const,
          src: '/slides/m9-wf-landing.html',
          title: 'Landing page wireframe \u2014 bad vs good (annotated)',
          caption: '\ud83d\udd0d Interactive wireframe: same blocks with numbered callouts. The Hide / Show annotations button at the top \u2014 hide the callouts, ask "what\'s wrong?", then reveal.',
          aspectRatio: '9 / 5',
        },
        {
          type: 'divider' as const,
        },

        // === WEB: E-COMMERCE ===
        {
          type: 'subheading' as const,
          content: 'Wireframe for E-Commerce',
        },
        {
          type: 'text' as const,
          content:
            'An e-commerce wireframe is more complex than a landing page: you need to design the catalog, product card, cart, and checkout. The key principle is **minimum steps to purchase**. Every extra click reduces conversion by 10\u201315%.',
        },
        {
          type: 'user-flow' as const,
          title: 'E-Commerce User Journey',
          steps: [
            { id: 'home', label: 'Home / Catalog', type: 'start' as const },
            { id: 'search', label: 'Search / Filter', type: 'action' as const },
            { id: 'product', label: 'Product card', type: 'action' as const },
            { id: 'decide', label: 'Add to cart?', type: 'decision' as const },
            { id: 'browse', label: 'Continue browsing', type: 'action' as const },
            { id: 'cart', label: 'Cart', type: 'action' as const },
            { id: 'checkout', label: 'Checkout', type: 'action' as const },
            { id: 'confirm', label: 'Payment confirmation', type: 'action' as const },
            { id: 'success', label: 'Order placed', type: 'end' as const },
          ],
          connections: [
            { from: 'home', to: 'search' },
            { from: 'search', to: 'product' },
            { from: 'product', to: 'decide' },
            { from: 'decide', to: 'browse', label: 'No' },
            { from: 'decide', to: 'cart', label: 'Yes' },
            { from: 'browse', to: 'search' },
            { from: 'cart', to: 'checkout' },
            { from: 'checkout', to: 'confirm' },
            { from: 'confirm', to: 'success' },
          ],
        },
        {
          type: 'divider' as const,
        },

        // === MOBILE: ONBOARDING ===
        {
          type: 'heading' as const,
          content: 'Wireframe for Mobile Apps',
        },
        {
          type: 'text' as const,
          content:
            'A mobile wireframe differs from its web counterpart: less space, navigation via tabs or hamburger menu, gestures instead of clicks. The two most important screens for wireframing are **onboarding** and the **feed**.',
        },
        {
          type: 'subheading' as const,
          content: 'Onboarding: The First 30 Seconds',
        },
        {
          type: 'text' as const,
          content:
            'Onboarding is the user\u2019s first experience in the app. **77% of users delete an app within 3 days** if onboarding doesn\u2019t convince them of its value. An onboarding wireframe should be as simple as possible: 3\u20135 screens with one message on each.',
        },
        {
          type: 'diagram' as const,
          title: 'Onboarding Wireframe Structure',
          description: 'Typical sequence of mobile onboarding screens',
          items: [
            '1. Splash screen \u2014 logo, 1\u20132 seconds',
            '2. Value #1 \u2014 main benefit + illustration',
            '3. Value #2 \u2014 second benefit + illustration',
            '4. Value #3 \u2014 third benefit + illustration',
            '5. Sign up \u2014 email/Google/Apple, minimal fields',
            '6. Personalization \u2014 1\u20132 questions for customization',
            '7. Done \u2014 first useful screen of the app',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            'A common mistake is making onboarding too long. If you have more than 5 screens before the "aha moment" (the moment the user understands the value), cut it down. **The best onboarding is the one that doesn\u2019t exist.**',
        },
        {
          type: 'divider' as const,
        },

        // === MOBILE: FEED ===
        {
          type: 'subheading' as const,
          content: 'Feed: The Infinite Scroll Pattern',
        },
        {
          type: 'text' as const,
          content:
            'A feed wireframe should show: content type (text, photo, video), user actions (like, comment, share), navigation (tabs, search), and **states** \u2014 empty feed, loading, network error.',
        },
        {
          type: 'before-after' as const,
          title: 'Mobile Feed Wireframe',
          before: {
            label: 'Bad feed wireframe',
            description: 'Only one post shown without context, no navigation, no states (empty feed, error), no scroll indicator. The developer doesn\u2019t understand how the feed behaves.',
            visual: {
              kind: 'typography-stack',
              frame: 'phone',
              background: '#FFFFFF',
              rows: [
                { text: 'App', fontSize: 12, fontWeight: 'bold', color: '#1C1917' },
                { text: '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500', fontSize: 9, color: '#E7E5E4', marginTop: 6 },
                { text: '\u25a2 Post (no avatar, no time)', fontSize: 10, color: '#44403C', marginTop: 6 },
                { text: '[ image placeholder ]', fontSize: 10, color: '#A8A29E', marginTop: 4 },
                { text: 'Lorem ipsum dolor sit amet\u2026', fontSize: 10, color: '#78716C', marginTop: 4 },
                { text: '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500', fontSize: 9, color: '#E7E5E4', marginTop: 6 },
                { text: '(no other posts)', fontSize: 9, color: '#B91C1C', marginTop: 8 },
                { text: '(no tab bar)', fontSize: 9, color: '#B91C1C', marginTop: 2 },
                { text: '(no states \u2014 loading / empty / error)', fontSize: 9, color: '#B91C1C', marginTop: 2 },
              ],
              footnote: '1 post \u00b7 0 navigation \u00b7 0 states',
            },
          },
          after: {
            label: 'Good feed wireframe',
            description: '2\u20133 posts of different types shown (text, photo, video), bottom navigation (tab bar), pull-to-refresh, skeleton loading, empty state with CTA, error with a "Retry" button.',
            visual: {
              kind: 'typography-stack',
              frame: 'phone',
              background: '#FFFFFF',
              rows: [
                { text: 'Feed                \ud83d\udd0d   \ud83d\udd14', fontSize: 12, fontWeight: 'bold', color: '#1C1917' },
                { text: '\u21bb Pull to refresh', fontSize: 9, color: '#0F766E', marginTop: 4 },
                { text: '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500', fontSize: 9, color: '#E7E5E4', marginTop: 4 },
                { text: '\u25cf Alice \u00b7 2h', fontSize: 10, fontWeight: 'semibold', color: '#1C1917', marginTop: 4 },
                { text: '[ photo ]   \u2764 24   \ud83d\udcac 8   \u2197', fontSize: 10, color: '#44403C', marginTop: 3 },
                { text: '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500', fontSize: 9, color: '#E7E5E4', marginTop: 4 },
                { text: '\u25cf Boris \u00b7 3h', fontSize: 10, fontWeight: 'semibold', color: '#1C1917', marginTop: 4 },
                { text: '[ \u25b6 video card ]', fontSize: 10, color: '#44403C', marginTop: 3 },
                { text: '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500', fontSize: 9, color: '#E7E5E4', marginTop: 4 },
                { text: '\u25b1\u25b1\u25b1 skeleton loading\u2026', fontSize: 10, color: '#A8A29E', marginTop: 4 },
                { text: '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500', fontSize: 9, color: '#E7E5E4', marginTop: 4 },
                { text: '\ud83c\udfe0 \ud83d\udd0d \u2795 \u2709 \ud83d\udc64', fontSize: 11, color: '#1C1917', marginTop: 6 },
              ],
              footnote: '3 post types \u00b7 pull-to-refresh \u00b7 skeleton \u00b7 tab bar',
            },
          },
        },
        {
          type: 'iframe-embed' as const,
          src: '/slides/m9-wf-feed.html',
          title: 'Mobile feed wireframe \u2014 bad vs good (annotated)',
          caption: '\ud83d\udd0d Interactive wireframe in phone frames: one post with no states vs a feed with content types, pull-to-refresh, skeleton and a tab bar. Annotation toggle at the top.',
          aspectRatio: '3 / 2',
        },
        {
          type: 'divider' as const,
        },

        // === SAAS: DASHBOARD ===
        {
          type: 'heading' as const,
          content: 'Wireframe for SaaS',
        },
        {
          type: 'text' as const,
          content:
            'A SaaS dashboard is one of the most complex wireframe types. You need to display **a lot of data** simultaneously without overwhelming the user. The two key screens are the **dashboard** (overview panel) and **settings**.',
        },
        {
          type: 'subheading' as const,
          content: 'Dashboard: Key Metrics Overview',
        },
        {
          type: 'text' as const,
          content:
            'A dashboard wireframe follows the "general to specific" principle: KPI cards first (the most important numbers), then charts (trends), then a table (details). The user scans the screen top to bottom, from macro to micro.',
        },
        {
          type: 'diagram' as const,
          title: 'Typical Dashboard Layout',
          description: 'SaaS dashboard wireframe zones',
          items: [
            'Sidebar \u2014 section navigation (left, 240px)',
            'Header \u2014 search, notifications, profile (top)',
            'KPI row \u2014 4 cards with key metrics',
            'Chart area \u2014 1\u20132 charts (line chart, bar chart)',
            'Table \u2014 detailed data table with filters',
            'Action bar \u2014 action buttons (export, filter, add)',
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-09-saas-dashboard-layout.webp',
          alt: 'Bootstrapdash Pollux SaaS-dashboard template: left sidebar, top header, KPI cards, charts and a data table',
          caption: 'Typical SaaS dashboard layout: sidebar, KPIs, charts, table. Source: Bootstrapdash, Pollux template. The same structure powers Stripe, Linear, Mixpanel.',
        },
        {
          type: 'before-after' as const,
          title: 'SaaS Dashboard: Overload vs Scannable Hierarchy',
          before: {
            label: 'Bad dashboard',
            description:
              '16 KPI cards with no hierarchy, 6 charts crammed into one row, a 14-column table — the user has no idea what to look at first. Information noise, not information.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#FAFAF9',
              rows: [
                { text: '▮ NAV · 12 items · all the same weight', fontSize: 10, color: '#78716C' },
                { text: '[ KPI ] [ KPI ] [ KPI ] [ KPI ]', fontSize: 11, fontWeight: 'semibold', color: '#1C1917', marginTop: 8 },
                { text: '[ KPI ] [ KPI ] [ KPI ] [ KPI ]', fontSize: 11, fontWeight: 'semibold', color: '#1C1917', marginTop: 3 },
                { text: '[ KPI ] [ KPI ] [ KPI ] [ KPI ]', fontSize: 11, fontWeight: 'semibold', color: '#1C1917', marginTop: 3 },
                { text: '[ KPI ] [ KPI ] [ KPI ] [ KPI ]', fontSize: 11, fontWeight: 'semibold', color: '#1C1917', marginTop: 3 },
                { text: '[chart] [chart] [chart] [chart] [chart] [chart]', fontSize: 10, color: '#B91C1C', marginTop: 6 },
                { text: '┌── 14 columns · tiny font · no filters ──┐', fontSize: 10, color: '#B91C1C', marginTop: 6 },
                { text: '│ ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓ │', fontSize: 9, color: '#A8A29E', marginTop: 2 },
                { text: '│ ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓ │', fontSize: 9, color: '#A8A29E', marginTop: 2 },
                { text: '└──────────────────────────────────────────┘', fontSize: 9, color: '#A8A29E', marginTop: 2 },
              ],
              footnote: '16 KPIs · 6 charts · 14 columns · no focus',
            },
          },
          after: {
            label: 'Good dashboard',
            description:
              'The 4-2-1 rule: 4 KPI cards (Revenue, MRR, Churn, Users) → 2 charts side by side → 1 details table with filters. The user sees the headline numbers in 0.5s and drills down only when needed. The Stripe / Linear / Mixpanel pattern.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#FAFAF9',
              rows: [
                { text: '▮ Sidebar · logo · 5 sections · ⊞ active', fontSize: 10, color: '#44403C' },
                { text: 'Header · breadcrumbs · 🔍 · 🔔 · 👤', fontSize: 10, color: '#78716C', marginTop: 6 },
                { text: '[ Revenue $48K +12% ]  [ MRR $12K +3% ]', fontSize: 12, fontWeight: 'bold', color: '#0F766E', marginTop: 8 },
                { text: '[ Churn 2.1% −0.4% ]   [ Active 1,240 +180 ]', fontSize: 12, fontWeight: 'bold', color: '#0F766E', marginTop: 3 },
                { text: '┌── Revenue (line) ──┐  ┌── Plans (bar) ──┐', fontSize: 10, color: '#1C1917', marginTop: 8 },
                { text: '│  ╱╲      ╱╲╱╲    │  │  ▮▮ ▮▮▮▮ ▮▮ ▮  │', fontSize: 10, color: '#1C1917', marginTop: 2 },
                { text: '└────────────────────┘  └──────────────────┘', fontSize: 10, color: '#1C1917', marginTop: 2 },
                { text: 'Latest customers · filter · CSV export', fontSize: 10, fontWeight: 'semibold', color: '#1C1917', marginTop: 8 },
                { text: '─────────────────────────────────────────────', fontSize: 9, color: '#E7E5E4', marginTop: 2 },
                { text: 'Alice · Pro · $99 · 12 May    🟢', fontSize: 10, color: '#44403C', marginTop: 2 },
                { text: 'Bob   · Team · $499 · 11 May  🟡', fontSize: 10, color: '#44403C', marginTop: 2 },
                { text: 'Carol · Pro · $99 · 10 May    🟢', fontSize: 10, color: '#44403C', marginTop: 2 },
              ],
              footnote: '4-2-1 rule · general to specific · focus is visible',
            },
          },
        },
        {
          type: 'iframe-embed' as const,
          src: '/slides/m9-wf-dashboard.html',
          title: 'SaaS dashboard wireframe — bad vs good (annotated)',
          caption: '🔍 Interactive wireframe: overload (16 KPIs, 6 charts, 14 columns) vs the 4-2-1 rule. Annotation toggle at the top.',
          aspectRatio: '2 / 1',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            '**Where to find ready-made SaaS skeletons:** *Bootstrapdash* (dozens of free templates with structural breakdowns), *Cruip*, *Tailwind UI*, *Figma Community ("SaaS dashboard")*. The goal isn\'t to copy the visuals but to **study the zone layout** and proportions (sidebar 240px, header 64px, KPI 120px, gap 24px). After 10-15 dashboards reviewed, your own structure comes together in minutes.',
        },
        {
          type: 'divider' as const,
        },

        // === SAAS: SETTINGS ===
        {
          type: 'subheading' as const,
          content: 'Settings: Structure',
        },
        {
          type: 'text' as const,
          content:
            'The settings page is a frequent source of UX problems in SaaS. The wireframe should account for: grouping settings by category (profile, security, notifications, integrations), saving changes (auto-save vs a "Save" button), and navigation within settings.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            'The Stripe/GitHub pattern: vertical tabs on the left (Profile, Security, Notifications...) + content on the right. Each section is a separate form with a "Save" button at the bottom. Simple, proven, familiar to users.',
        },
        {
          type: 'divider' as const,
        },

        // === GAMES: HUD, MENUS, GAME LOOP ===
        {
          type: 'heading' as const,
          content: 'Wireframe for Games',
        },
        {
          type: 'text' as const,
          content:
            'Game UI is a separate wireframing discipline. In games, UI works on two levels: **out-of-game** (main menu, character select, store, settings) and **in-game** (HUD — health, score, minimap, abilities). The wireframe must cover both levels plus the **transitions** between them: loading screens, pause, victory and game-over screens. A game flow is not a line, it is a **loop**: after game-over the player returns to the match, after victory — to the rewards screen and back into play.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**The diegetic UI principle:** the best game interface is one built into the game world, not overlaid on top of it. *Dead Space* shows the health bar on the back of the hero\'s suit; *Metro Exodus* shows ammo in the real magazine the character pulls out. Mark in the wireframe which elements can be made diegetic — it reduces cognitive load and deepens immersion.',
        },
        {
          type: 'subheading' as const,
          content: 'Three layers of game UI',
        },
        {
          type: 'text' as const,
          content:
            'It helps to wireframe a game in three layers. **Front-end** — screens before and after gameplay (main menu, character select, settings, store). **HUD** — the persistent overlay during play. **Pop-ups** — windows that interrupt gameplay (pause, level-up, mission briefing, inventory). Each layer has its own rules for information density and acceptable visual weight.',
        },
        {
          type: 'diagram' as const,
          title: 'HUD zones for action/RPG',
          description: 'Typical in-game HUD layout by screen corner',
          items: [
            'Top-left — health, mana, status effects',
            'Top-right — minimap, compass, mission objective',
            'Bottom-left — inventory, active abilities, hot-bar',
            'Bottom-right — ammo, quick-slots, action button',
            'Center — crosshair (only when needed), critical alerts',
            'Top-center — timer, wave or round progress',
          ],
        },
        {
          type: 'before-after' as const,
          title: 'In-game HUD: "everything on screen" vs contextual HUD',
          before: {
            label: 'Bad HUD',
            description:
              'Health, mana, minimap, inventory, chat, quests, buffs, debuffs — all on screen 100% of the time. UI eats 40% of the area, the player can\'t see the game itself, and critical info (low HP) gets lost in the noise.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#0F172A',
              rows: [
                { text: '❤ 78/100   💧 42/60   ⭐ 12,480   🎯 Quest 2/5', fontSize: 11, color: '#FCA5A5' },
                { text: '🗺 [minimap]    🎒 [bag]    ⚔ [skills]    💬 [chat]', fontSize: 11, color: '#94A3B8', marginTop: 6 },
                { text: '🔮 Buffs: Haste · Shield · Crit+15% · Speed · Regen', fontSize: 10, color: '#FCD34D', marginTop: 6 },
                { text: '⚠ Debuffs: Poison · Slow · Burn · Curse', fontSize: 10, color: '#FCA5A5', marginTop: 4 },
                { text: '[ GAME WORLD — barely visible ]', fontSize: 11, color: '#475569', marginTop: 10 },
              ],
              footnote: 'everything visible at once · 40% of screen eaten · low-HP lost',
            },
          },
          after: {
            label: 'Good HUD',
            description:
              'Health is always visible, but compact. Mana appears only when used; inventory opens on a key. Buffs are icons without labels, low HP pulses red. 80% of the screen is the game.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#0F172A',
              rows: [
                { text: '❤ 78', fontSize: 18, fontWeight: 'bold', color: '#FCA5A5' },
                { text: '[ GAME WORLD — 80% of screen ]', fontSize: 13, color: '#94A3B8', marginTop: 14 },
                { text: '🗺                                              ⚔', fontSize: 14, color: '#94A3B8', marginTop: 14 },
              ],
              footnote: 'health always · the rest on demand · the game breathes',
            },
          },
        },
        {
          type: 'iframe-embed' as const,
          src: '/slides/m9-wf-hud.html',
          title: 'In-game HUD — bad vs good (annotated)',
          caption: '🔍 Interactive wireframe over a dark "game world": everything-on-screen vs a contextual HUD. Annotation toggle at the top.',
          aspectRatio: '2 / 1',
        },
        {
          type: 'subheading' as const,
          content: 'The game loop: core user flow',
        },
        {
          type: 'text' as const,
          content:
            'Unlike the linear flows of web apps, a game cycle is a **loop**: the player returns from game-over back into a match, from victory — to the rewards screen and then back into play. The wireframe must show **every exit** from the in-game state, otherwise the developer won\'t know where to send the player after death or victory.',
        },
        {
          type: 'user-flow' as const,
          title: 'Core gameplay loop',
          steps: [
            { id: 'menu', label: 'Main menu', type: 'start' as const },
            { id: 'select', label: 'Level / character select', type: 'action' as const },
            { id: 'loading', label: 'Loading screen', type: 'action' as const },
            { id: 'play', label: 'In-game (HUD)', type: 'action' as const },
            { id: 'pause', label: 'Pause menu', type: 'action' as const },
            { id: 'decide', label: 'Match outcome', type: 'decision' as const },
            { id: 'win', label: 'Victory + rewards', type: 'action' as const },
            { id: 'lose', label: 'Game over', type: 'action' as const },
            { id: 'restart', label: 'Restart or menu', type: 'end' as const },
          ],
          connections: [
            { from: 'menu', to: 'select' },
            { from: 'select', to: 'loading' },
            { from: 'loading', to: 'play' },
            { from: 'play', to: 'pause', label: 'Esc' },
            { from: 'pause', to: 'play', label: 'Resume' },
            { from: 'pause', to: 'menu', label: 'Quit' },
            { from: 'play', to: 'decide' },
            { from: 'decide', to: 'win', label: 'Win' },
            { from: 'decide', to: 'lose', label: 'Death' },
            { from: 'win', to: 'restart' },
            { from: 'lose', to: 'restart' },
            { from: 'restart', to: 'play', label: 'Replay' },
            { from: 'restart', to: 'menu', label: 'To menu' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '**Game UI ≠ Game UX.** UI is menus, buttons, HUD. Game UX is the entire gameplay: difficulty curve, hit feedback, juice (impact animation, screen shake, particle bursts), the feel of the weapon. A wireframe covers UI; game UX requires a prototype or playtest — that\'s no longer a job for the interface designer alone.',
        },
        {
          type: 'subheading' as const,
          content: 'Mobile-game patterns',
        },
        {
          type: 'text' as const,
          content:
            'Mobile games add their own rules. **Thumb zones** — primary controls live only in the bottom third of the screen, where thumbs reach. **Portrait** — for casual (Match-3, hyper-casual, idle); **landscape** — for core (MOBA, shooter, MMO). The **F2P loop**: every match feeds rewards → store → battle pass — the wireframe must treat monetization screens as **part of the core flow**, not an optional branch.',
        },
        {
          type: 'before-after' as const,
          title: 'Main menu of a mobile game',
          before: {
            label: 'Overloaded menu',
            description:
              '12 same-sized buttons: Play, Shop, Daily, Battle Pass, Friends, Clan, Events, Inventory, Settings, Profile, News, Support. The player can\'t tell that Play is the primary action. Time-to-first-match grows, retention drops.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#1E293B',
              rows: [
                { text: 'GAME LOGO', fontSize: 16, fontWeight: 'bold', color: '#F8FAFC' },
                { text: '[ Play ]  [ Shop ]  [ Daily ]  [ BP ]', fontSize: 11, color: '#94A3B8', marginTop: 14 },
                { text: '[ Friends ]  [ Clan ]  [ Events ]  [ Inv ]', fontSize: 11, color: '#94A3B8', marginTop: 6 },
                { text: '[ Settings ]  [ Profile ]  [ News ]  [ ? ]', fontSize: 11, color: '#94A3B8', marginTop: 6 },
              ],
              footnote: '12 equal buttons · Play drowns in the noise',
            },
          },
          after: {
            label: 'Menu with hierarchy',
            description:
              'A huge PLAY button in the center; secondary actions (Shop, Battle Pass, Clan) as icons below; profile and settings — tiny icons in the corner. Hierarchy is obvious in 0.5 seconds, one tap to the match.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#1E293B',
              rows: [
                { text: '⚙           GAME LOGO           👤', fontSize: 11, color: '#94A3B8' },
                { text: '▶  PLAY', fontSize: 28, fontWeight: 'bold', color: '#F8FAFC', marginTop: 20 },
                { text: 'Tap to enter battle', fontSize: 11, color: '#94A3B8', marginTop: 6 },
                { text: '🛒 Shop      🎟 Battle Pass      👥 Clan', fontSize: 12, color: '#CBD5E1', marginTop: 22 },
              ],
              footnote: 'one big action · secondaries as icons · obvious instantly',
            },
          },
        },
        {
          type: 'iframe-embed' as const,
          src: '/slides/m9-wf-menu.html',
          title: 'Mobile game main menu — bad vs good (annotated)',
          caption: '🔍 Interactive wireframe in phone frames: 12 equal buttons vs one big PLAY + icons. Annotation toggle at the top.',
          aspectRatio: '3 / 2',
        },
        {
          type: 'subheading' as const,
          content: 'Three reference HUDs: live examples to study',
        },
        {
          type: 'text' as const,
          content:
            'Before you look at your own wireframe, study these three frames — three different in-game UI philosophies on one page.',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-09-hud-hades.webp',
          alt: 'In-game Hades screenshot: boss fight against Megaera with a minimalist corner HUD',
          caption: 'Hades — a minimalist HUD. Bottom-left: HP 23/100 + Cast 1/1; vertical column on the left — Lv.3 and Lv.2 boons (active abilities). Bottom-right: coins and obol. Top-center: boss name with her red HP bar. Everything else (40+ boons, 17 keepsakes, rewards) is tucked into the pause menu. The player sees the game.',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-09-hud-stspire.webp',
          alt: 'In-game Slay the Spire screenshot: The Defect mid-combat with cards in hand and a hovered Zap card',
          caption: 'Slay the Spire — card UI with hover tooltips. Top bar: HP 47/82, gold 86, relics, 11th Floor. Bottom: a hand of 4 cards with explicit energy costs, Energy 4/3 on the left, "End Turn" on the right, draw/discard piles in the corners. The hovered Zap+ card pops up in the center with a full description — the classic tooltip-on-hover pattern.',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-09-hud-deadspace.webp',
          alt: 'In-game Dead Space (2023) screenshot: Isaac viewed from behind, a glowing diegetic HP bar on his suit',
          caption: 'Dead Space — the textbook case of diegetic UI. There is NOT A SINGLE overlay element in this frame. The HP bar is woven into Isaac\'s suit spine (visible as a blue glow down the middle of his back); ammo appears as a hologram above the gun when firing. This changes the role of UI: the interface doesn\'t cover the world, it lives inside it — immersion goes up, the screen stays clear.',
        },
        {
          type: 'text' as const,
          content:
            'Full Dead Space UI breakdown (main menu, hologram inventory, RIG suit) → [gameuidatabase.com/Dead Space](https://www.gameuidatabase.com/gameData.php?id=581). Game UI Database is a catalog of a thousand-plus games with frame-by-frame screenshots of every screen.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            '**Where else to look:** *Among Us* (diegetic tasks as mini-games), *Vampire Survivors* (the entire HUD in a single line), *Disco Elysium* (DOM-like text UI as part of the style). On Figma Community search "game UI" — there are hundreds of breakdown decks with author annotations.',
        },
        {
          type: 'divider' as const,
        },

        // === DATA: CHARTS & FILTERS ===
        {
          type: 'heading' as const,
          content: 'Wireframe for Data: Charts and Filters',
        },
        {
          type: 'text' as const,
          content:
            'Wireframing data pages (analytics, reports) is a separate discipline. The important thing is to show not specific numbers, but **visualization types** and **interactivity**: which filters are available, how the chart changes when the time period is adjusted, what happens when you click on a chart segment.',
        },
        {
          type: 'text' as const,
          content:
            'When wireframing charts, use **placeholder labels**: a rectangle with a caption like "Line chart \u2014 Revenue" instead of trying to draw a realistic chart. The wireframe\u2019s goal is to show **what data** and **in what format**, not how it looks.',
        },
        {
          type: 'before-after' as const,
          title: 'Analytics Page Wireframe',
          before: {
            label: 'Bad analytics wireframe',
            description: 'One large chart taking the entire screen, no filters, no export, no way to change the time period, no axis labels. The user cannot interact with the data.',
          },
          after: {
            label: 'Good analytics wireframe',
            description: 'Period filter (7d/30d/90d/year), 3 KPI cards at the top, line chart + bar chart side by side, table at the bottom with sorting, CSV export button. Every element is annotated.',
          },
        },
        {
          type: 'divider' as const,
        },

        // === PATTERNS ===
        {
          type: 'heading' as const,
          content: 'Common Wireframe Patterns',
        },
        {
          type: 'text' as const,
          content:
            'There is no need to reinvent the wheel. Most interfaces are composed of standard patterns. Knowing these patterns speeds up wireframing by 3\u20135x.',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'Navigation',
              items: [
                'Top bar \u2014 horizontal navigation at the top',
                'Sidebar \u2014 vertical menu on the left',
                'Tab bar \u2014 bottom tabs (mobile)',
                'Hamburger \u2014 hidden side menu',
                'Breadcrumbs \u2014 navigation path',
                'Mega menu \u2014 dropdown menu with groups',
              ],
            },
            {
              title: 'Forms',
              items: [
                'Single-column \u2014 fields in one column',
                'Multi-step \u2014 step-by-step form with progress',
                'Inline validation \u2014 errors next to the field',
                'Floating labels \u2014 label inside the field',
                'Auto-complete \u2014 suggestions while typing',
                'Progressive disclosure \u2014 fields appear as you fill in',
              ],
            },
            {
              title: 'Cards',
              items: [
                'Media card \u2014 image + text',
                'Stat card \u2014 KPI with icon',
                'Profile card \u2014 avatar + name + actions',
                'Action card \u2014 CTA inside the card',
                'List card \u2014 title + description',
                'Pricing card \u2014 plan + features + button',
              ],
            },
            {
              title: 'Tables and Modals',
              items: [
                'Data table \u2014 sorting, filtering, pagination',
                'Responsive table \u2014 horizontal scroll on mobile',
                'Confirmation modal \u2014 "Are you sure?" + 2 buttons',
                'Form modal \u2014 form inside a modal window',
                'Side panel \u2014 slide-out panel from the right',
                'Bottom sheet \u2014 slide-up panel from the bottom (mobile)',
              ],
            },
          ],
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=qpH7-KFWZRI',
          title: 'UI Design Patterns You Should Know',
          caption: 'An overview of key UI design patterns every designer should know',
        },
        {
          type: 'divider' as const,
        },

        // === BEFORE-AFTER IMPROVEMENTS ===
        {
          type: 'heading' as const,
          content: 'Before and After: Improving Wireframes',
        },
        {
          type: 'text' as const,
          content:
            'Let\u2019s look at common wireframe mistakes and how to fix them. Each example is a real-world situation from practice.',
        },
        {
          type: 'before-after' as const,
          title: 'Registration Form Wireframe',
          before: {
            label: 'Before: 12 fields on one screen',
            description: 'First name, last name, email, password, confirm password, phone, date of birth, gender, country, city, zip code, newsletter consent \u2014 all on one screen. The user sees a "wall" of fields and leaves.',
          },
          after: {
            label: 'After: 3-step form',
            description: 'Step 1: Email + password (2 fields). Step 2: Name + phone. Step 3: The rest (optional). Progress bar at the top. The user fills it out easily without feeling overwhelmed.',
          },
        },
        {
          type: 'before-after' as const,
          title: 'SaaS Navigation Wireframe',
          before: {
            label: 'Before: 15 items in the sidebar',
            description: 'All sections in a flat list: Dashboard, Analytics, Users, Settings, Reports, Billing, Integrations, API, Logs, Team, Notifications, Help, Profile, Security, Export. The user gets lost.',
          },
          after: {
            label: 'After: Grouped by category',
            description: 'Groups: "Core" (Dashboard, Analytics, Reports), "Management" (Users, Team, Billing), "Settings" (Settings, Security, Integrations). Dividers and icons help with orientation.',
          },
        },
        {
          type: 'divider' as const,
        },

        // === ACCESSIBILITY IN WIREFRAMES ===
        {
          type: 'heading' as const,
          content: 'Accessibility in Wireframes',
        },
        {
          type: 'text' as const,
          content:
            'Accessibility must be built in **at the wireframe stage**, not "added later." If the wireframe has no space for error text, alt text for images, or focus states, the final design won\u2019t have them either.',
        },
        {
          type: 'text' as const,
          content:
            'Key accessibility principles in wireframes: (1) **Reading order** \u2014 the wireframe should read top to bottom, left to right in a logical sequence. (2) **Touch target size** \u2014 buttons must be at least 44x44px. (3) **Form labels** \u2014 every input field is labeled, not just using a placeholder. (4) **Alternatives** \u2014 every visual element has a text equivalent.',
        },
        {
          type: 'checklist' as const,
          title: 'Wireframe Accessibility Checklist',
          items: [
            'All images have alt text annotations',
            'Buttons and links are labeled with clear actions (not "Click here")',
            'Forms have visible labels (not just placeholders)',
            'Tab order is marked (1, 2, 3...)',
            'Focus states are shown for interactive elements',
            'Touch target sizes are at least 44x44px',
            'Text error messages are provided next to fields',
            'Keyboard navigation is described in annotations',
            'Headings have a clear hierarchy (H1 \u2192 H2 \u2192 H3)',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '15% of the population has some form of disability. If your wireframe doesn\u2019t account for accessibility, you\u2019re losing 15% of your audience before a single line of code is written.',
        },
        {
          type: 'divider' as const,
        },

        // === CASE STUDY: REAL PROJECT ===
        {
          type: 'case-study' as const,
          title: 'Wireframing the Duolingo App',
          company: 'Duolingo',
          problem: 'Duolingo needed to redesign the app\u2019s main screen \u2014 the lesson tree had become too linear and boring, and users were losing motivation after the first 2 weeks.',
          solution: 'The design team created 200+ wireframes for the new format. They tested variations with paper prototypes, then moved to Figma. The result was "Path" (a non-linear lesson map) with gamification and visual progress.',
          result: 'Day-14 retention increased by 17%. Time spent in the app grew by 22%. The new format became Duolingo\u2019s signature feature.',
          steps: [
            { title: 'Research', description: 'Analyzed data: where users drop off, which lessons they skip, what motivates them' },
            { title: 'Crazy 8s', description: '30 designers ran 5 rounds of Crazy 8s = 1,200 variations' },
            { title: 'Paper testing', description: 'Top 10 variations tested with 50 users' },
            { title: 'Digital wireframe', description: 'Final 3 variations detailed in Figma' },
            { title: 'A/B test', description: 'Final wireframes turned into prototypes and tested in production' },
          ],
        },
        {
          type: 'divider' as const,
        },

        // === VIDEO ===
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=pN92rnO_n5U',
          title: 'Wireframing for UX \u2014 What It Is and How to Get Better at It',
          caption: 'A detailed breakdown of wireframing from NNGroup: methods, tools, and best practices',
        },
        {
          type: 'divider' as const,
        },

        // === UX WRITING / MICROCOPY ===
        {
          type: 'heading' as const,
          content: 'UX Writing: copy IS part of the design',
        },
        {
          type: 'text' as const,
          content:
            'A wireframe with "Click here", "Submit", "Error" is a **half-done wireframe**. Real users read those words and decide whether to trust your product. **Microcopy** is short interface text: buttons, placeholders, toasts, empty states, errors. One verb can double a conversion or kill trust.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**MailChimp Voice & Tone rule:** *Voice* is the constant personality of the brand (friendly / serious / playful). *Tone* shifts with context (bright in hero, grave in an error). Voice stays the same at checkout and on Twitter; tone is different.',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Specific beats abstract',
              definition:
                '**"Submit" → "Pay $12.60"**. Verb + object + number. The user sees what will happen. Conversion lifts 10-30% (dozens of A/B tests at Booking, Airbnb, Shopify).',
            },
            {
              term: 'Active voice, second person',
              definition:
                '**"Your order is being processed" → "We\'re processing your order"** OR **"Processing your order…"**. Active voice is shorter, clearer, warmer. "You" and "we" are the words of UX writing.',
            },
            {
              term: 'No jargon',
              definition:
                '**"Authentication failed" → "That password didn\'t match"**. Users do not know what authentication is. "Cache", "token", "session" are developer words. Keep user-facing copy in user language.',
            },
            {
              term: 'Own the error, offer a way out',
              definition:
                '**"Error 500" → "Something broke on our side. Already fixing it. Try again in a minute — or [contact us]"**. Explain what, own the blame, propose an action. Do not dump the failure on the user.',
            },
          ],
        },
        {
          type: 'before-after' as const,
          title: 'CTA button — generic vs specific',
          before: {
            label: 'Weak copy',
            description:
              'Generic verb with no object. Users have to **guess** what will happen. They click cautiously — conversion drops 15-30%.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              rows: [
                { text: 'Total · $12.60', fontSize: 14, fontWeight: 'semibold', color: '#0F172A' },
                { text: 'Shipping in 2 business days', fontSize: 12, color: '#64748B', marginTop: 4 },
              ],
              cta: { label: 'Submit', bg: '#4F46E5', color: '#FFFFFF', size: 14 },
              footnote: '"Submit" · zero info · user does not know what happens',
            },
          },
          after: {
            label: 'Strong copy',
            description:
              'Verb + object + amount. The user **sees** the outcome before they click — a psychological contract. Booking and Shopify measured +12-25% conversion swapping copy alone.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              rows: [
                { text: 'Total · $12.60', fontSize: 14, fontWeight: 'semibold', color: '#0F172A' },
                { text: 'Shipping in 2 business days', fontSize: 12, color: '#64748B', marginTop: 4 },
              ],
              cta: { label: 'Pay $12.60 →', bg: '#4F46E5', color: '#FFFFFF', size: 14 },
              footnote: '"Pay $12.60 →" · verb + object + amount · contract visible',
            },
          },
        },
        {
          type: 'iframe-embed' as const,
          src: '/slides/m9-wf-cta.html',
          title: 'CTA button — generic vs specific (annotated)',
          caption: '🔍 Interactive wireframe: "Submit" vs "Pay $12.60 →". Annotation toggle at the top.',
          aspectRatio: '4 / 1',
        },
        {
          type: 'before-after' as const,
          title: 'Error state — blame vs help',
          before: {
            label: 'Weak error',
            description:
              'Technical jargon ("invalid", "error code"), no instruction on what to do. The user feels blamed and lost. High bounce.',
            visual: {
              kind: 'typography-stack',
              frame: 'plain',
              background: '#FEF2F2',
              rows: [
                { text: '⚠ ERROR 422', fontSize: 12, fontWeight: 'bold', color: '#991B1B', letterSpacing: '0.05em', textTransform: 'uppercase' },
                { text: 'Invalid input. Authentication failed.', fontSize: 14, color: '#7F1D1D', marginTop: 8 },
                { text: 'Please contact support@example.com', fontSize: 12, color: '#7F1D1D', marginTop: 4 },
              ],
              footnote: 'jargon · blame on the user · no path forward',
            },
          },
          after: {
            label: 'Strong error',
            description:
              'Specific about what is wrong, the system owns it, clear next step. Trust actually goes UP on an error — the paradox of good UX copy.',
            visual: {
              kind: 'typography-stack',
              frame: 'plain',
              background: '#FFFBEB',
              rows: [
                { text: 'Hmm, that password doesn\'t match', fontSize: 15, fontWeight: 'semibold', color: '#92400E' },
                { text: 'Probably a typo. Give it another go — or reset your password in one click.', fontSize: 13, color: '#78350F', lineHeight: 1.5, marginTop: 6 },
              ],
              cta: { label: 'Reset password', bg: '#F59E0B', color: '#78350F', size: 13 },
              footnote: 'what · we are with you · here is the next step',
            },
          },
        },
        {
          type: 'iframe-embed' as const,
          src: '/slides/m9-wf-error.html',
          title: 'Error state — blame vs help (annotated)',
          caption: '🔍 Interactive wireframe: jargon and blame vs "what went wrong + next step". Annotation toggle at the top.',
          aspectRatio: '4 / 1',
        },
        {
          type: 'before-after' as const,
          title: 'Empty state — "nothing" vs "invitation"',
          before: {
            label: 'Empty empty state',
            description:
              'Just "No items". User thinks "something broke" or "I do not understand what to do". Backs out or leaves.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              rows: [
                { text: 'No items.', fontSize: 14, color: '#94A3B8', lineHeight: 1.5 },
              ],
              footnote: 'bare statement · 0 context · 0 actions',
            },
          },
          after: {
            label: 'Empty state as invitation',
            description:
              'Explain why it is empty, give a **specific first action**. An empty state is an **onboarding moment**, not a hole in the product. Dropbox, Slack, Notion live on great empty states.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              rows: [
                { text: '📁', fontSize: 32, color: '#94A3B8' },
                { text: 'It is empty here — let\'s fix that', fontSize: 16, fontWeight: 'bold', color: '#0F172A', marginTop: 8 },
                { text: 'Upload your first file or import a project from Dropbox/Notion.', fontSize: 13, color: '#475569', lineHeight: 1.5, marginTop: 6 },
              ],
              cta: { label: '+ Upload file', bg: '#4F46E5', color: '#FFFFFF', size: 13 },
              footnote: 'explanation + warmth + specific action = "let\'s start"',
            },
          },
        },
        {
          type: 'iframe-embed' as const,
          src: '/slides/m9-wf-empty.html',
          title: 'Empty state — "empty" vs invitation (annotated)',
          caption: '🔍 Interactive wireframe: bare "No items" vs an invitation with a first action. Annotation toggle at the top.',
          aspectRatio: '4 / 1',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            '**Microcopy sanity check:** read every button and placeholder out loud. If it sounds like a robot or a bank manager, rewrite. If it sounds like one human talking to another, ship it. Error messages and empty states are the two places where beginners lose 80% of their writing score.',
        },
        {
          type: 'divider' as const,
        },

        // === COMMON MISTAKES ===
        {
          type: 'heading' as const,
          content: 'Top 7 Wireframing Mistakes',
        },
        {
          type: 'diagram' as const,
          title: 'Mistakes That Kill a Wireframe',
          description: 'The most common mistakes beginner designers make when creating wireframes',
          items: [
            '1. Starting with hi-fi \u2014 spending hours on details before the structure is approved',
            '2. Forgetting states \u2014 showing only the "ideal" scenario',
            '3. Ignoring real content \u2014 "Lorem ipsum" hides problems',
            '4. Not annotating \u2014 a wireframe without explanations = a puzzle',
            '5. Not testing \u2014 "I like it" \u2260 "the user finds it convenient"',
            '6. Blindly copying competitors \u2014 their solutions may not suit your users',
            '7. Not thinking about accessibility \u2014 a wireframe without a11y = design without 15% of the audience',
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-09-wireframe-fail-humor.webp',
          alt: 'Humorous illustration of a designer skipping the wireframe stage',
          caption: 'When you skip research and jump straight to hi-fi.',
        },
        {
          type: 'divider' as const,
        },

        // === FINAL CHECKLIST ===
        {
          type: 'checklist' as const,
          title: 'Checklist: What I Learned in Part 2',
          items: [
            'A landing page follows the "inverted pyramid" principle',
            'E-commerce: minimum steps from catalog to purchase',
            'Mobile onboarding: 3\u20135 screens, one message on each',
            'Feed: show different content types and all states',
            'SaaS dashboard: KPI \u2192 charts \u2192 table (general to specific)',
            'Settings: grouped by category, vertical tabs',
            'Games: three UI layers (front-end / HUD / pop-ups), a loop not a line, diegetic interface',
            'Data page: visualization type + filters + interactivity',
            'Standard patterns speed up wireframing by 3\u20135x',
            'Accessibility is built in at the wireframe stage',
            'Wireframe testing is mandatory before moving to visual design',
          ],
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=XrF7-Ds-0YQ',
          title: '🎮 Bonus: game prototypes in Figma with Interactive Components',
          caption: 'How to turn a wireframe into a clickable game prototype in Figma using interactive components.',
        },
      ],
      quiz: [
        {
          question: 'What principle underlies the structure of a landing page wireframe?',
          options: [
            { id: 'a', text: 'Random block placement for a surprise effect' },
            { id: 'b', text: 'Inverted pyramid \u2014 the most important content at the top, details below' },
            { id: 'c', text: 'All blocks the same size for symmetry' },
            { id: 'd', text: 'CTA button only at the bottom of the page' },
          ],
          correctId: 'b',
          explanation:
            'A landing page wireframe follows the "inverted pyramid" principle: the hero with the main message and CTA at the top, supporting content below.',
        },
        {
          question: 'What is the recommended minimum touch target size (buttons) for mobile wireframes?',
          options: [
            { id: 'a', text: '24x24 pixels' },
            { id: 'b', text: '32x32 pixels' },
            { id: 'c', text: '44x44 pixels' },
            { id: 'd', text: '64x64 pixels' },
          ],
          correctId: 'c',
          explanation:
            'WCAG recommends a minimum touch target size of 44x44px. This ensures comfortable tapping for all users, including those with motor impairments.',
        },
        {
          question: 'How should a chart be represented in a wireframe?',
          options: [
            { id: 'a', text: 'Draw a realistic chart with real data' },
            { id: 'b', text: 'Leave an empty space with a note "chart goes here"' },
            { id: 'c', text: 'A rectangle with a label indicating the visualization type and data description' },
            { id: 'd', text: 'Don\u2019t include charts in the wireframe \u2014 that\u2019s a visual design task' },
          ],
          correctId: 'c',
          explanation:
            'In wireframes, charts are represented as placeholders: a rectangle + label (e.g., "Line chart \u2014 Revenue by month"). The goal is to show the data type and format, not the exact appearance.',
        },
        {
          question: 'How many screens are recommended for mobile onboarding before the "aha moment"?',
          options: [
            { id: 'a', text: 'No more than 2 screens' },
            { id: 'b', text: '3\u20135 screens' },
            { id: 'c', text: '7\u201310 screens' },
            { id: 'd', text: 'As many as needed to describe all features' },
          ],
          correctId: 'b',
          explanation:
            'The optimal number is 3\u20135 screens before the moment the user understands the app\u2019s value. A longer onboarding increases the drop-off rate.',
        },
        {
          question: 'A button in the UI says "Submit". How do you improve this microcopy?',
          options: [
            { id: 'a', text: 'Leave it \u2014 "Submit" is universal' },
            { id: 'b', text: 'Replace with verb + object: "Pay $12.60", "Create account", "Send message" \u2014 the user sees what will happen' },
            { id: 'c', text: 'Make it caps: "SUBMIT"' },
            { id: 'd', text: 'Replace with an icon, no text' },
          ],
          correctId: 'b',
          explanation:
            'Specific beats abstract. "Submit" does not say what happens. "Pay $12.60" / "Create account" \u2014 verb + object \u2014 form a psychological contract: the user sees the outcome before clicking. Conversion lifts 10-30%.',
        },
        {
          question: 'How do you write a good error message (error state)?',
          options: [
            { id: 'a', text: '"Error 422. Authentication failed."' },
            { id: 'b', text: 'Explain in plain words what is wrong, own it as a system, give a clear next step' },
            { id: 'c', text: 'Just "Something went wrong"' },
            { id: 'd', text: 'Show the stack trace for accuracy' },
          ],
          correctId: 'b',
          explanation:
            'A good error: no jargon (the user does not know "authentication"), owns the system fault, gives a way out. "Hmm, that password does not match. Maybe a typo \u2014 try again or [reset your password]." Trust rises even on an error.',
        },
        {
          question: 'Why is a bare empty state "No items" bad, and how do you improve it?',
          options: [
            { id: 'a', text: 'You cannot, "No items" is complete' },
            { id: 'b', text: 'An empty state is an onboarding moment: explain why it is empty + give a specific first action ("Upload your first file")' },
            { id: 'c', text: 'Hide the section until there is data' },
            { id: 'd', text: 'Show a 404 error' },
          ],
          correctId: 'b',
          explanation:
            'A bare "No items" triggers "it is broken" or "I do not know what to do." A good empty state explains the situation warmly and offers a first action \u2014 turning the void into an invitation. Dropbox, Slack, Notion live on this.',
        },
        {
          question: 'What do Voice and Tone mean in UX writing?',
          options: [
            { id: 'a', text: 'Voice = notification volume, Tone = text color' },
            { id: 'b', text: 'Voice = the constant brand personality; Tone = shifts with context (upbeat in hero, serious in an error)' },
            { id: 'c', text: 'They are synonyms' },
            { id: 'd', text: 'Voice for voice interfaces, Tone for text ones' },
          ],
          correctId: 'b',
          explanation:
            'Voice is the constant brand personality (friendly/serious/playful), the same everywhere. Tone is the mood that adapts to context: upbeat on a landing, calm and serious in an error or a data-deletion message.',
        },
        {
          question: 'What fundamentally separates a game wireframe from a web-app wireframe?',
          options: [
            { id: 'a', text: 'Nothing — same screens, just prettier' },
            { id: 'b', text: 'It covers three layers (front-end / HUD / pop-ups), describes a gameplay loop instead of a line, and flags which elements can be made diegetic' },
            { id: 'c', text: 'Games don\'t need a wireframe — they jump straight to art' },
            { id: 'd', text: 'Game wireframes are always black-and-white and unannotated' },
          ],
          correctId: 'b',
          explanation:
            'A game is not a linear scenario but a loop: matchmaking → play → pause/win/death → play again. The wireframe has to cover three UI layers (menus, in-game HUD, pop-ups) and show every exit from the in-game state. Diegetic UI (like the health bar on Dead Space\'s suit) is a separate, important note made specifically at the wireframe stage.',
        },
      ],
    },
  ],
}
