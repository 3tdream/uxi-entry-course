import type { Meeting } from '../../types'

export const meeting03: Meeting = {
  id: '3',
  number: 3,
  title: 'UX Research: Fundamentals',
  description:
    'User personas, empathy maps, Jobs to Be Done, and User Journey Maps — tools that help you understand real people and design for them.',
  icon: 'Users',
  color: 'bg-emerald-500/10 text-emerald-600',
  parts: [
    // ============================
    // PART 1 — Personas and Empathy
    // ============================
    {
      id: 'part-1',
      title: 'Personas and Empathy',
      subtitle: 'How to understand the user before the first pixel',
      duration: '45 min',
      sections: [
        // --- Introduction ---
        {
          type: 'heading' as const,
          content: 'Why Do We Need Personas?',
        },
        {
          type: 'text' as const,
          content:
            'When a team says "our user," everyone pictures someone different. A **persona** is a documented portrait of a typical user that keeps the entire team aligned. Without personas, designers design for themselves, developers build for themselves, and marketing writes copy into the void.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'A persona is not fiction. It is a **synthesis of data** from interviews, analytics, and observations, packaged into an understandable format.',
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=XnG4c4gXaQY',
          title: 'Introduction to UX Personas',
          caption:
            'How to create personas based on real data — an overview of the method',
        },
        {
          type: 'divider' as const,
        },

        // --- Key Concepts ---
        {
          type: 'heading' as const,
          content: 'Key Concepts',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'User Persona',
              definition:
                'A semi-fictional user archetype based on real research data. Includes demographics, goals, pain points, and the context of product usage.',
            },
            {
              term: 'Empathy Map',
              definition:
                'A visual tool with 4 quadrants (Thinks, Feels, Says, Does) plus pains and gains. Helps you "walk in the user\'s shoes."',
            },
            {
              term: 'Jobs to Be Done (JTBD)',
              definition:
                'A framework that focuses not on who the user is, but on the job they "hire" the product to accomplish.',
            },
            {
              term: 'Proto-Persona',
              definition:
                'A quick hypothetical persona created by the team without research. Used as a starting point that is later validated with data.',
            },
            {
              term: 'Behavioral Archetype',
              definition:
                'Grouping users by behavior (usage frequency, scenarios) rather than by demographics.',
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // --- Empathy Map ---
        {
          type: 'heading' as const,
          content: 'Empathy Map',
        },
        {
          type: 'text' as const,
          content:
            'An empathy map is a structured way to organize knowledge about the user. It consists of **4 main quadrants** and two additional blocks: **Pains** and **Gains**.',
        },
        {
          type: 'subheading' as const,
          content: '4 quadrants around the user',
        },
        {
          type: 'columns' as const,
          variant: 'grid' as const,
          columns: [
            {
              title: '🧠 THINKS',
              items: [
                'Internal thoughts and beliefs',
                'Doubts and hopes',
                'What they don\'t say out loud',
                '*Example:* "What if this is a knockoff?"',
              ],
            },
            {
              title: '💬 SAYS',
              items: [
                'Direct quotes from interviews',
                'What they write in reviews and chats',
                'Words they often repeat',
                '*Example:* "I need something simple"',
              ],
            },
            {
              title: '❤️ FEELS',
              items: [
                'Emotional state',
                'Fear, joy, frustration',
                'Confidence level',
                '*Example:* anxiety before paying',
              ],
            },
            {
              title: '👀 DOES',
              items: [
                'Observable actions',
                'Behavior in the product',
                'Clicks, gestures, screen flow',
                '*Example:* opens 3 tabs to compare',
              ],
            },
          ],
        },
        {
          type: 'subheading' as const,
          content: 'Pains and Gains — what drives the decision',
        },
        {
          type: 'columns' as const,
          variant: 'stacked' as const,
          columns: [
            {
              title: '⬇️ PAINS — what gets in the way',
              items: [
                'Obstacles on the way to the goal',
                'Fears and risks',
                'Negative past experiences',
                'Example: "got burned on a return last time"',
              ],
            },
            {
              title: '⬆️ GAINS — what they want',
              items: [
                'Desired outcomes',
                'Dreams and aspirations',
                'Success criteria',
                'Example: "I want my order in 2 days"',
              ],
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            '**Example for an online store shopper:**\n— Thinks: "I hope this isn\'t a knockoff"\n— Says: "I need delivery by the end of the week"\n— Feels: excitement and impatience\n— Does: compares prices across 3 websites, reads reviews\n— Pains: fear of getting the wrong size, complicated returns\n— Gains: fast delivery, honest reviews, easy returns',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-03-empathy-map-canvas.png',
          alt: 'Empathy Map Canvas: 4 quadrants (think&feel · see · hear · say&do) + Pains/Gains',
          caption:
            'Empathy Map Canvas — the classic template. 4 quadrants around the persona: what they think and feel, see, hear, say and do. At the bottom — Pains and Gains.',
        },
        {
          type: 'divider' as const,
        },

        // --- Jobs to Be Done ---
        {
          type: 'heading' as const,
          content: 'Jobs to Be Done (JTBD)',
        },
        {
          type: 'text' as const,
          content:
            'JTBD focuses on the **job**, not the person. The formula: **"When [situation], I want [motivation], so that [expected outcome]"**. This approach complements personas and helps avoid fixating on demographics.',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-03-jtbd-formula.webp',
          alt: 'Jobs To Be Done diagram with three connected blocks',
          caption: 'JTBD formula: situation → motivation → outcome.',
        },
        {
          type: 'columns' as const,
          variant: 'stacked' as const,
          columns: [
            {
              title: '✅ JTBD Examples for Different Products',
              items: [
                '🌐 Web: "When I\'m looking for a gift, I want to quickly compare options so I can stay within budget"',
                '📱 Mobile: "When I\'m hungry at work, I want to order food in 3 taps so I don\'t waste my lunch break"',
                '💼 SaaS: "When a new lead comes in, I want to see their history so I can prepare for the call"',
                '📊 Data: "When conversion drops, I want to understand the cause in 2 minutes so I can fix it right away"',
              ],
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // ============================================================
        // 💀 Anti-patterns JTBD — full deep-dive
        // ============================================================
        {
          type: 'heading' as const,
          content: '💀 Anti-patterns JTBD: what people get wrong',
        },
        {
          type: 'text' as const,
          content:
            'Half the internet explains JTBD like it\'s a magic spell, not a tool. As a result, people write "When I open app I want fun so I can enjoy" and think they just performed product magic. **No.** That\'s just text for the sake of text. Let\'s lay out the anti-patterns so you spot them on sight and destroy them.',
        },

        // --- 1. Want a feature ---
        {
          type: 'subheading' as const,
          content: '1. ❌ "I want a feature" instead of a job',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '**Bad:** "When I play, I want more levels so it\'s more interesting."\n\nThat\'s not a JTBD — that\'s a **wishlist**, like the user just got promoted to PM. You\'re describing a solution, not a problem.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**Good:** "When I have 2 minutes on the road, I want to quickly entertain myself so I don\'t get bored."\n\n👉 See the difference? You can come up with **10 different solutions** for one job.',
        },

        // --- 2. Too abstract ---
        {
          type: 'subheading' as const,
          content: '2. ❌ Too abstract (about nothing)',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '**Bad:** "I want to have fun."\n\nCongratulations, you just described **99% of humanity**. No context, no constraint, no action.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**Good:** "When I\'m on the subway, I want to quickly distract myself so the time flies."\n\n👉 **Context = power.**',
        },

        // --- 3. No trigger ---
        {
          type: 'subheading' as const,
          content: '3. ❌ No trigger (when?)',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '**Bad:** "I want to play games."\n\nWhen? Where? In what state? On Mars?',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**Good:** "When I\'m waiting for transport or riding the subway…"\n\n👉 A JTBD always **starts with a situation**.',
        },

        // --- 4. No outcome ---
        {
          type: 'subheading' as const,
          content: '4. ❌ No outcome (why?)',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '**Bad:** "When I open the game, I want to clear a level."\n\nAnd? You just described an action.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**Good:** "…so I don\'t get bored and the commute goes faster."\n\n👉 **JTBD = the reason, not the process.**',
        },

        // --- 5. One JTBD for everyone ---
        {
          type: 'subheading' as const,
          content: '5. ❌ One JTBD "for everyone"',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '**Bad:** "The user wants to play in order to have fun."\n\nNo. In the morning he wants one thing. In the evening — another.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**Good (Artem):**\n— 🌅 morning → "switch the brain on"\n— 🌙 evening → "wind down"\n\n👉 **One user ≠ one JTBD.**',
        },

        // --- 6. Emotions and actions in a soup ---
        {
          type: 'subheading' as const,
          content: '6. ❌ Mixing emotions and actions into mush',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '**Bad:** "I want to relax and clear a level and earn a reward and level up."\n\nYou didn\'t write a JTBD — you caught a **stream of consciousness**.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**Good:** "When I\'m tired after work, I want a simple action so I can relax."\n\n👉 Crisp. No salad.',
        },

        // --- 7. Formula for the formula's sake ---
        {
          type: 'subheading' as const,
          content: '7. ❌ Formula for the formula\'s sake',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '**Bad:** "When I open the app, I want to have fun, so I can enjoy my time."\n\nThat looks like: 👉 "I filled in the template, now hand me the diploma." No specifics, no pain, no meaning.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '👉 That\'s not a JTBD — it\'s a **LinkedIn post at the level of "be yourself"**.',
        },

        {
          type: 'divider' as const,
        },

        // --- 🧠 Self-check ---
        {
          type: 'heading' as const,
          content: '🧠 How to tell your JTBD is solid',
        },
        {
          type: 'checklist' as const,
          title: 'Walk through the checklist',
          items: [
            'There\'s a specific moment (when)',
            'There\'s an action (what they\'re doing)',
            'There\'s a reason (why)',
            'You can come up with **several different solutions** for this job',
          ],
        },

        // --- 🎯 Example on Artem ---
        {
          type: 'heading' as const,
          content: '🎯 A solid JTBD example, on Artem',
        },
        {
          type: 'before-after' as const,
          title: 'Evolution of a JTBD statement',
          before: {
            label: 'Bad JTBD',
            description: '"I want to play a game in order to have fun" — no moment, no reason, no constraint. You could build anything from chess to a VR shooter on top of this.',
          },
          after: {
            label: 'Good JTBD',
            description: '"When I\'m on the subway and I have 2–3 minutes, I want to quickly entertain myself so I don\'t get bored and stop thinking about work." 👉 That you can already turn into a product — short sessions, low cognitive load, offline-first.',
          },
        },

        // --- ⚡ Bottom line ---
        {
          type: 'heading' as const,
          content: '⚡ Bottom line, no philosophy',
        },
        {
          type: 'columns' as const,
          variant: 'grid' as const,
          columns: [
            {
              title: '💀 JTBD breaks when you',
              items: [
                'Write about features instead of the job',
                'Write too abstractly',
                'Forget context / trigger',
                'Fill the template just to check a box',
                'Describe an action, not the reason',
              ],
            },
            {
              title: '✅ JTBD works when you',
              items: [
                'Describe a **real situation**',
                'Show the moment when the user feels bad',
                'Specify what they want to achieve',
                'Leave room for different solutions',
                'Can verify "job done / not done"',
              ],
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '**JTBD isn\'t "what the user wants."**\n\n👉 It\'s "**at what moment things start to suck and what they do to make it normal again**."\n\nYes, it sounds blunt. It also works.',
        },
        {
          type: 'divider' as const,
        },

        // --- Persona: Web ---
        {
          type: 'subheading' as const,
          content: 'Persona 1: Online Store Shopper (Web)',
        },
        {
          type: 'user-persona' as const,
          persona: {
            name: 'Anna Kovaleva',
            age: 34,
            role: 'Marketing specialist, mother of two',
            bio: 'Works remotely, buys 80% of family essentials online. Values speed, honest reviews, and easy returns. Alternates between laptop and phone.',
            goals: [
              'Find the right product in 5 minutes',
              'Be confident in quality before purchasing',
              'Receive the order on the exact date',
              'Easily return items if they don\'t fit',
            ],
            frustrations: [
              'Fake reviews and inflated ratings',
              'Hidden shipping costs',
              'Complicated return process',
              'Product pages without real photos',
            ],
            traits: [
              { label: 'Technical literacy', value: 'Moderate' },
              { label: 'Online purchase frequency', value: '3-4 times per month' },
              { label: 'Primary device', value: 'Laptop + smartphone' },
              { label: 'Deciding factor', value: 'Reviews and ratings' },
            ],
            quote: 'If I can\'t understand the price in 3 seconds — I leave.',
          },
        },

        // --- Persona: Mobile ---
        {
          type: 'subheading' as const,
          content: 'Persona 2: Mobile App User (Mobile)',
        },
        {
          type: 'user-persona' as const,
          persona: {
            name: 'Dmitry Sergeev',
            age: 27,
            role: 'Developer, freelancer',
            bio: 'Lives in a big city, always on the go. Orders food through apps 5 times a week. Impatient — if an app is slow, he deletes it.',
            goals: [
              'Order food in 2 minutes max',
              'Track delivery in real time',
              'Save favorite orders for reordering',
              'Pay with one tap (Apple Pay / Google Pay)',
            ],
            frustrations: [
              'Slow app loading times',
              'No courier tracking on the map',
              'Mandatory registration before the first order',
              'Notifications about irrelevant discounts',
            ],
            traits: [
              { label: 'Technical literacy', value: 'High' },
              { label: 'Tolerance for UX issues', value: 'Very low' },
              { label: 'Primary device', value: 'iPhone 15' },
              { label: 'Deciding factor', value: 'Speed and convenience' },
            ],
            quote: 'If I can\'t complete an order in 3 taps — the app is bad.',
          },
        },

        // --- Persona: SaaS ---
        {
          type: 'subheading' as const,
          content: 'Persona 3: SaaS Product User (CRM)',
        },
        {
          type: 'user-persona' as const,
          persona: {
            name: 'Elena Petrova',
            age: 41,
            role: 'Head of Sales, B2B',
            bio: 'Manages a team of 12 sales reps. Works in the CRM 4-6 hours every day. Values automation and predictability. Dislikes "pretty but useless" interfaces.',
            goals: [
              'See the pipeline and revenue forecast on one screen',
              'Automate routine tasks for the sales team',
              'Receive alerts about at-risk deals',
              'Quickly generate reports for the director',
            ],
            frustrations: [
              'Too many clicks for simple actions',
              'Data scattered across different screens',
              'Slow dashboard loading',
              'No mobile version for off-site meetings',
            ],
            traits: [
              { label: 'Technical literacy', value: 'Medium-high' },
              { label: 'Hours in CRM per day', value: '4-6 hours' },
              { label: 'Primary device', value: 'Windows laptop' },
              { label: 'Deciding factor', value: 'Time savings for the team' },
            ],
            quote:
              'I don\'t need a beautiful interface — I need an interface that saves my team 2 hours a day.',
          },
        },
        {
          type: 'divider' as const,
        },

        // --- Top-10 mobile games + Gaming persona ---
        {
          type: 'heading' as const,
          content: 'Case: Mobile Gaming — top 10 games by revenue',
        },
        {
          type: 'text' as const,
          content:
            'Mobile games are the largest segment of the mobile market ($82B in 2025 per Sensor Tower). Understanding **who** these games make the most money on helps you see real behavior patterns and design a strong gaming persona.',
        },
        {
          type: 'table' as const,
          title: '🏆 Top 10 mobile games by monthly revenue',
          headers: ['#', 'Game', 'Publisher', 'Genre', 'Revenue / month'],
          rows: [
            ['1', '**Last War: Survival**', 'Funfly', '4X strategy, war', '~$160M'],
            ['2', '**Whiteout Survival**', 'Century Games', 'Survival strategy', '~$140M'],
            ['3', '**Royal Match**', 'Dream Games', 'Match-3 puzzle', '~$120M'],
            ['4', '**MONOPOLY GO!**', 'Scopely', 'Social board game', '~$110M'],
            ['5', '**Honor of Kings**', 'Tencent', 'MOBA (China)', '~$110M'],
            ['6', '**Candy Crush Saga**', 'King', 'Match-3', '~$80M'],
            ['7', '**Coin Master**', 'Moon Active', 'Slot + social', '~$70M'],
            ['8', '**Roblox**', 'Roblox Corp', 'UGC platform (mobile)', '~$60M'],
            ['9', '**Game for Peace**', 'Tencent', 'Battle Royale (China)', '~$60M'],
            ['10', '**Pokémon TCG Pocket**', 'DeNA / Pokémon', 'Digital TCG', '~$40M'],
          ],
          caption: 'December 2025, Sensor Tower estimate. Numbers are rounded; actual values fluctuate month to month.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**What the top 10 share:** they\'re all built around **short 5–15 min sessions**, **daily events** (live-ops), and **microtransactions**. That means the main mobile game persona isn\'t a "hardcore gamer" — it\'s **an ordinary person between things**: on a commute, in line, before bed. Source: [Sensor Tower Top 10, Dec 2025](https://sensortower.com/blog/top-10-worldwide-mobile-games-by-revenue-and-downloads-in-december-2025).',
        },

        // --- Persona: Mobile Gamer (Commute) ---
        {
          type: 'subheading' as const,
          content: 'Persona 4: Game Commuter (Mobile Gaming, Commute)',
        },
        {
          type: 'user-persona' as const,
          persona: {
            name: 'Artem Lebedev',
            age: 29,
            role: 'System administrator, 1-hour commute each way',
            bio: '2 hours on the subway/bus every day. Plays mobile games on the commute — morning to wake the brain up, evening to wind down after work. Prefers games with short sessions: one match = one subway stop. Spends $10-30/month on games — battle pass and cosmetics, occasionally boosters.',
            goals: [
              'Make the commute pass productively/enjoyably',
              'Level up during a session — feel the progress',
              'Don\'t depend on the internet (tunnels happen)',
              'Compete with friends in spare time',
            ],
            frustrations: [
              'Long game load times — wastes precious minutes',
              'Pay-to-win — losing only because he didn\'t pay',
              '30-second ads after every match',
              'Game interrupted in a tunnel without saving progress',
            ],
            traits: [
              { label: 'Play time per day', value: '40-90 min (two sessions: morning + evening)' },
              { label: 'Length of one session', value: '5-15 min (stop to stop)' },
              { label: 'Primary device', value: 'Android smartphone + headphones' },
              { label: 'Favorite genres', value: 'Battle Royale (Brawl Stars, PUBG Mobile), Match-3 (Royal Match)' },
              { label: 'Willing to pay for', value: 'Battle Pass ($10/mo), cosmetics, ad removal' },
              { label: 'Trigger to delete a game', value: 'Pay-to-win, aggressive ads, 5+ sec load times' },
            ],
            quote: 'If a game doesn\'t launch in 3 seconds — my next stop is already coming, and I delete it.',
          },
        },
        {
          type: 'image' as const,
          src: '/images/meeting-03-game-commuter.webp',
          alt: 'Young man playing a mobile game on the subway',
          caption: 'Game Commuter — short sessions on the road, morning and evening.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            '**JTBD for Artem:** "When I\'m on the subway heading to work, I want to play 1-2 matches in 10 minutes, so I walk into the office not feeling like the day started in boredom." You can see how the **context** (subway, limited time, no stable internet) drives every game design decision — from match length to offline mode.',
        },
        {
          type: 'divider' as const,
        },

        // --- Before/After: good vs bad persona ---
        {
          type: 'heading' as const,
          content: 'Good Persona vs Bad Persona',
        },
        {
          type: 'text' as const,
          content:
            'Not every document with a name and a photo is a useful persona. Let\'s compare two approaches:',
        },
        {
          type: 'before-after' as const,
          title: 'Persona Description Quality',
          before: {
            label: 'Bad Persona',
            description:
              'Name: Ivan. Age: 30. Likes technology. Wants a convenient website. — No specifics, no pain points, no usage context. This persona is impossible to use for decision-making.',
          },
          after: {
            label: 'Good Persona',
            description:
              'Anna, 34, marketing specialist, mother of two. Shops 3-4 times a month from a laptop. Main pain point — fake reviews. If she can\'t see the price in 3 seconds — she leaves. JTBD: "When looking for a gift for my child, I want to find a verified product in 5 minutes." — Specific, actionable, with a quote and JTBD.',
          },
        },
        {
          type: 'before-after' as const,
          title: 'Amount of Data in a Persona',
          before: {
            label: 'Too little data',
            description:
              '"The user is a male, 25-35 years old, who uses the internet." No pain points, no goals, no behavior. This describes half the population, not a persona.',
          },
          after: {
            label: 'Right level of detail',
            description:
              'Dmitry, 27, freelance developer, iPhone 15, orders food 5 times a week. Deletes an app if it takes longer than 3 seconds to load. Favorite pattern — repeat last order. JTBD: "When hungry on a deadline, I want to order food without getting distracted from code."',
          },
        },
        {
          type: 'divider' as const,
        },

        // --- Anti-patterns ---
        {
          type: 'heading' as const,
          content: 'Anti-patterns in Persona Creation',
        },
        {
          type: 'checklist' as const,
          title: 'What to Avoid When Creating Personas',
          items: [
            'Elastic User — a persona that fits any scenario (too vague)',
            'Persona Non Grata — a persona that was created but nobody uses',
            'Self-Referential Design — "I am the user" (projecting yourself)',
            'Demographic Trap — focusing on age/gender instead of behavior and goals',
            'Too Many Personas — more than 4-5 personas = nobody remembers any of them',
            'No Validation — persona based solely on assumptions, without data',
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-03-persona-card.webp',
          alt: 'User persona card on a desk',
          caption: 'Persona card: avatar, goals, frustrations, quote.',
        },
        {
          type: 'divider' as const,
        },

        // --- Case Study ---
        {
          type: 'heading' as const,
          content: 'Case Study: Spotify and Behavioral Personas',
        },
        {
          type: 'case-study' as const,
          title: 'How Spotify Builds Personas Based on Behavior',
          company: 'Spotify',
          problem:
            'Classic demographic segmentation (age, country) failed to explain why people listen to different music at different times of the day.',
          solution:
            'Spotify switched to behavioral archetypes: "Morning Runner" (upbeat music in the morning), "Background Listener" (ambient at work), "Playlist Curator" (creates and shares playlists). Each archetype represents a usage context, not a demographic.',
          result:
            'Personalized playlists (Discover Weekly, Daily Mix) became the backbone of the product. Retention grew by 30% after implementing behavior-based recommendations.',
          steps: [
            {
              title: 'Data Collection',
              description:
                'Analyzing listening patterns: time of day, genres, skip rate, repeat rate',
            },
            {
              title: 'Clustering',
              description:
                'Identifying 6 behavioral archetypes instead of demographic groups',
            },
            {
              title: 'Validation',
              description:
                'A/B testing recommendations by archetype vs. by demographics',
            },
            {
              title: 'Product Decisions',
              description:
                'Discover Weekly, Daily Mix, contextual playlists for each archetype',
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // --- User Flow: persona creation ---
        {
          type: 'heading' as const,
          content: 'Persona Creation Process: User Flow',
        },
        {
          type: 'user-flow' as const,
          title: 'Steps to Create a Persona',
          steps: [
            {
              id: 'start',
              label: 'Begin research',
              type: 'start' as const,
            },
            {
              id: 'interviews',
              label: 'Conduct 5-8 interviews',
              type: 'action' as const,
            },
            {
              id: 'analytics',
              label: 'Gather behavioral analytics',
              type: 'action' as const,
            },
            {
              id: 'enough-data',
              label: 'Enough data?',
              type: 'decision' as const,
            },
            {
              id: 'cluster',
              label: 'Identify patterns and clusters',
              type: 'action' as const,
            },
            {
              id: 'draft',
              label: 'Create persona draft',
              type: 'action' as const,
            },
            {
              id: 'validate',
              label: 'Team agrees?',
              type: 'decision' as const,
            },
            {
              id: 'empathy',
              label: 'Fill in the empathy map',
              type: 'action' as const,
            },
            {
              id: 'jtbd',
              label: 'Add JTBD statements',
              type: 'action' as const,
            },
            {
              id: 'finalize',
              label: 'Finalize and distribute',
              type: 'end' as const,
            },
          ],
          connections: [
            { from: 'start', to: 'interviews' },
            { from: 'interviews', to: 'analytics' },
            { from: 'analytics', to: 'enough-data' },
            { from: 'enough-data', to: 'cluster', label: 'Yes' },
            { from: 'enough-data', to: 'interviews', label: 'No' },
            { from: 'cluster', to: 'draft' },
            { from: 'draft', to: 'validate' },
            { from: 'validate', to: 'empathy', label: 'Yes' },
            { from: 'validate', to: 'draft', label: 'No, revise' },
            { from: 'empathy', to: 'jtbd' },
            { from: 'jtbd', to: 'finalize' },
          ],
        },
        {
          type: 'divider' as const,
        },

        // ============================================================
        // 10 STEPS IN PRACTICE — the real playbook
        // ============================================================
        {
          type: 'heading' as const,
          content: '10 steps in practice: how you actually build a persona',
        },
        {
          type: 'text' as const,
          content:
            'Above is the process diagram. Below is the **playbook with no sugar**: each step + what you actually do + where people usually fall apart. Final demo — on our persona Artem.',
        },

        // --- Step 1: Begin research ---
        {
          type: 'subheading' as const,
          content: 'Step 1 — Begin research',
        },
        {
          type: 'text' as const,
          content:
            'Sounds like "well, just start," but there\'s a catch. First you need to answer: **what do you actually want to learn?** Not "about the user" — specifically: why does he play on the commute, what breaks the session, what does he pay for.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '👉 Without that, you walk into the interview like a tourist without a map.',
        },
        {
          type: 'divider' as const,
        },

        // --- Step 2: Conduct 5-8 interviews (with full UX script for Artem) ---
        {
          type: 'subheading' as const,
          content: 'Step 2 — Conduct 5–8 interviews',
        },
        {
          type: 'text' as const,
          content:
            'Classic. Bare minimum so you\'re not talking to yourself. But here\'s the truth:\n\n— **5 interviews** — you\'re only starting to see something\n— **8 interviews** — first patterns appear\n— **10+** — you can actually draw conclusions\n\nAnd yes, one weird respondent can break your whole picture if you\'re inexperienced.',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-03-interview-questionnaire.webp',
          alt: 'Interview template with a recorder and coffee',
          caption: 'Keep the question template in front of you during the interview.',
        },

        // --- 🎯 UX Interview for Artem — 7 blocks ---
        {
          type: 'heading' as const,
          content: '🎯 UX Interview for UJP — script on the Artem persona',
        },
        {
          type: 'text' as const,
          content:
            'A ready-made script in **7 blocks**, tailored to the Artem persona (mobile gaming, commute). Swap "games" for your domain — the template works for any product.',
        },

        {
          type: 'subheading' as const,
          content: '1. Warm-up — life context (without an FBI-grade interrogation)',
        },
        {
          type: 'text' as const,
          content: '**Goal:** understand real lifestyle, not "I sometimes play."',
        },
        {
          type: 'checklist' as const,
          title: 'Questions',
          items: [
            'Tell me about your typical weekday — how does it go?',
            'When are you most likely to open games?',
            'What else do you usually do on transport besides games?',
            'How tiring is your commute on a scale of "fine" → "I want a teleporter"?',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content: '👉 Here you\'re hunting for: **fatigue, habits, triggers**.',
        },

        {
          type: 'subheading' as const,
          content: '2. In-game behavior — reality, not fantasy',
        },
        {
          type: 'text' as const,
          content:
            '**Goal:** understand how he actually plays, not how he "thinks he plays."',
        },
        {
          type: 'checklist' as const,
          title: 'Questions',
          items: [
            'What are you playing right now? Why specifically that?',
            'When did you last delete a game? Why?',
            'How long does one play session usually last?',
            'Does it happen that you don\'t finish a match? What do you do then?',
            'How do you choose a new game?',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '👉 This is where the meat starts: **retention, churn, session fit**.',
        },

        {
          type: 'subheading' as const,
          content: '3. Usage context — the most important thing, by the way',
        },
        {
          type: 'text' as const,
          content:
            '**Goal:** understand environment constraints (the subway is not a couch with a blanket).',
        },
        {
          type: 'checklist' as const,
          title: 'Questions',
          items: [
            'Do you have internet all the time, or does it drop sometimes?',
            'Do you play standing or sitting?',
            'How comfortable is one-handed play?',
            'Are there moments when you have to bail out of the game suddenly?',
            'How important is sound in the game?',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '👉 If you don\'t ask this — you\'ll end up designing UI that only works in a vacuum.',
        },

        {
          type: 'subheading' as const,
          content: '4. Emotions and motivation — why he\'s doing it at all',
        },
        {
          type: 'text' as const,
          content:
            '**Goal:** understand why he plays. Not "to kill time" — that\'s the lazy answer.',
        },
        {
          type: 'checklist' as const,
          title: 'Questions',
          items: [
            'What do you want from a game in the morning? And in the evening?',
            'What makes a game "relaxing" for you?',
            'What pisses you off most in mobile games?',
            'When does a game start to feel boring?',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '👉 Here you pull out the **core loop and emotional payoff**.',
        },

        {
          type: 'subheading' as const,
          content: '5. Money — where people suddenly become logical',
        },
        {
          type: 'text' as const,
          content: '**Goal:** understand monetization without rose-tinted glasses.',
        },
        {
          type: 'checklist' as const,
          title: 'Questions',
          items: [
            'What do you most often pay for in games?',
            'What has to happen for you to spend?',
            'Was there a moment when you regretted a purchase?',
            'How OK are you with "pay to progress"?',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '👉 This is where you understand how to build **LTV**, instead of just dreaming about it.',
        },

        {
          type: 'subheading' as const,
          content: '6. Problems and screw-ups — UX gold',
        },
        {
          type: 'text' as const,
          content: '**Goal:** find real pain, not "everything\'s fine."',
        },
        {
          type: 'checklist' as const,
          title: 'Questions',
          items: [
            'Recall the last time a game made you furious.',
            'Was there a moment when you wanted to play but couldn\'t? Why?',
            'What stops you from playing more often?',
            'Which games did you drop even though they were "fine"?',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '👉 This is straight gold. If you don\'t use it — well, then why bother with the interview at all.',
        },

        {
          type: 'subheading' as const,
          content: '7. Hypothesis check — if you have a product/idea',
        },
        {
          type: 'text' as const,
          content: '**Goal:** not to sell the idea, but to test it.',
        },
        {
          type: 'checklist' as const,
          title: 'Questions',
          items: [
            'How do you feel about a game where one session = 2–3 minutes?',
            'How important is progress between short sessions?',
            'Would you rather continue the same game on the commute or play something new each time?',
            'How important is offline mode?',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '👉 And don\'t pitch. Just watch **where he winces**.',
        },

        // --- Bonus: what you should pull out ---
        {
          type: 'subheading' as const,
          content: '🧠 Bonus — what you should actually walk away with',
        },
        {
          type: 'text' as const,
          content:
            'If you don\'t have these after the interview — you just had a nice chat.',
        },
        {
          type: 'columns' as const,
          variant: 'stacked' as const,
          columns: [
            {
              title: 'Must-have insights after the interview with Artem',
              items: [
                '**Session constraint** — 1–3 minutes',
                '**Interruptibility** — can bail out at any moment',
                '**One-hand UX** — plays one-handed',
                '**Cognitive load** — low in the evening, higher in the morning',
                '**Offline-first** — subway, tunnels, no internet',
                '**Fast reward loop** — short pleasure cycle',
                '**Safe monetization** — not annoying, not pay-to-win',
              ],
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '⚡ **Reality check:** if after this you ship a game with long matches, mandatory internet, complex UI and "wait 30 seconds for the ad" — Artem will delete it before you can open Figma.',
        },
        {
          type: 'divider' as const,
        },
        {
          type: 'columns' as const,
          variant: 'stacked' as const,
          columns: [
            {
              title: '1️⃣ CONTEXT — who the person is and where they live',
              items: [
                'Briefly tell me about yourself — what do you do, what does a typical day look like?',
                'Where and when do you usually run into [our task]?',
                'What devices/tools do you use for it?',
                'Who else is involved in this process (colleagues, family)?',
              ],
            },
            {
              title: '2️⃣ BEHAVIOR — what they actually do',
              items: [
                'Tell me about the last time you [did X]?',
                'Show me how you usually do this (ask them to share screen/object)?',
                'What do you do if something goes wrong?',
                'How often does this happen — once a day, week, month?',
              ],
            },
            {
              title: '3️⃣ GOALS — why the person does this',
              items: [
                'What is a "successful" outcome for this task?',
                'How do you know the task was done well?',
                'What do you do right after you finish?',
                'How does this outcome affect your day/work?',
              ],
            },
            {
              title: '4️⃣ PAINS — what frustrates them',
              items: [
                'What annoys you most in this process?',
                'Tell me about the worst case that ever happened?',
                'What takes the most time?',
                'What do you do when [tool] lets you down?',
              ],
            },
            {
              title: '5️⃣ TRIGGERS — what kicks the action off',
              items: [
                'What usually happens **right before** you [do X]?',
                'How did you find out about your current tool/method?',
                'What would have to happen for you to switch?',
                'Who do you tell when you find a good solution?',
              ],
            },
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-03-interview-questionnaire.webp',
          alt: 'Interview question template on a tablet next to a recorder and coffee',
          caption: 'Template with 5 question groups — print it and keep it in front of you during the interview.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '**Anti-questions (don\'t do this):** "Would you like a dark theme?", "Would you pay $10 for this feature?", "What would you add to the product?". People lie in hypothetical questions — ask about **past behavior**, not future intentions.',
        },
        {
          type: 'divider' as const,
        },

        // --- Step 3: Analytics ---
        {
          type: 'subheading' as const,
          content: 'Step 3 — Gather behavioral analytics',
        },
        {
          type: 'text' as const,
          content:
            'Here is where most people fall apart. Interviews = "what people say," analytics = "what they actually do."',
        },
        {
          type: 'columns' as const,
          variant: 'grid' as const,
          columns: [
            {
              title: '📊 If you have a product',
              items: [
                '**session length** — session duration',
                '**retention** — who comes back on day 7 / day 30',
                '**churn points** — where people drop off',
                'Events in [Google Analytics 4](https://analytics.google.com/) (free)',
                '[Hotjar](https://www.hotjar.com/) for heatmaps + session recordings',
                '[Mixpanel](https://mixpanel.com/) or [Amplitude](https://amplitude.com/) for cohorts',
              ],
            },
            {
              title: '🕵️ If there\'s no product yet',
              items: [
                '**App Store / Play Market** — competitor reviews (gold)',
                '**Reddit** — yes, a dump, but a useful one',
                '**YouTube comments** — under game reviews',
                '**Discord servers** — community gold',
                '**Twitter/X** — search by themed hashtags',
              ],
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '👉 **People lie. Data lies less.** If interviews say one thing and analytics say another — trust analytics.',
        },
        {
          type: 'divider' as const,
        },

        // --- Step 4: Enough data ---
        {
          type: 'subheading' as const,
          content: 'Step 4 — Enough data?',
        },
        {
          type: 'text' as const,
          content:
            'Favorite moment, where everyone goes: "well, kinda." **No.**',
        },
        {
          type: 'columns' as const,
          variant: 'grid' as const,
          columns: [
            {
              title: '✅ Ready to move on if',
              items: [
                'You start hearing the same answers',
                'You\'re already annoyed that people are repeating themselves',
                '5–8 interviews within one group',
                'Analytics confirms hypotheses from interviews',
              ],
            },
            {
              title: '⚠️ You\'re still raw if',
              items: [
                'Every new answer "surprises" you',
                'Less than 5 interviews per group',
                'Analytics and interviews contradict each other',
                'Several subgroups are mashed into one',
              ],
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '👉 If every new answer "surprises" you — you\'re still raw. Run more interviews.',
        },
        {
          type: 'divider' as const,
        },

        // --- Step 5: Patterns and clusters ---
        {
          type: 'subheading' as const,
          content: 'Step 5 — Identify patterns and clusters',
        },
        {
          type: 'text' as const,
          content:
            'This is where real UX kicks in. You **aren\'t looking for types of people**. You\'re looking for **types of behavior**.',
        },
        {
          type: 'columns' as const,
          variant: 'stacked' as const,
          columns: [
            {
              title: 'Comparison: what to look for vs what doesn\'t work',
              items: [
                '✅ "I play 2–3 minutes"',
                '✅ "I bail out without regret"',
                '✅ "I play one-handed"',
                '❌ "Male, 29, likes coffee" (that\'s not a pattern, that\'s a form)',
              ],
            },
            {
              title: 'Affinity Mapping (60–90 min with the team in Miro/FigJam)',
              items: [
                '**1.** Each observation/quote → a separate sticky note (1 fact = 1 note)',
                '**2.** Throw the notes onto the board with no structure',
                '**3.** Group similar ones nearby — without naming the groups',
                '**4.** When the groups stabilize — name each one briefly',
                '**5.** Out of 5–7 groups — pick 2–3 main patterns = future personas',
              ],
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '👉 **Rule of 3–5 personas:** fewer than 3 — you lose nuance; more than 5 — nobody remembers any of them.',
        },
        {
          type: 'divider' as const,
        },

        // --- Step 6: Draft persona (with A4 demo) ---
        {
          type: 'subheading' as const,
          content: 'Step 6 — Create persona draft',
        },
        {
          type: 'text' as const,
          content:
            'And here everyone suddenly turns into a Dribbble designer. **Don\'t.**\n\nA persona = **goals · behavior · constraints · motivation**.\n\nNOT: "loves Netflix and pizza" (nobody cares).',
        },
        {
          type: 'columns' as const,
          variant: 'stacked' as const,
          columns: [
            {
              title: '📝 Minimal persona card template (1 A4 page)',
              items: [
                '**Name + photo** (stock) — increases empathy',
                '**Age / role / life context** — 1 line',
                '**Bio** — 2–3 sentences',
                '**Goals** — 3–4 items (what they want)',
                '**Frustrations** — 3–4 items (what gets in the way)',
                '**Behavioral traits** — device, frequency, triggers',
                '**Quote** — real words from the interview',
                '**JTBD** — "When [context], I want [motivation], so that [outcome]"',
              ],
            },
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-03-persona-card-filled.webp',
          alt: 'A4 persona card demo with filled-in fields for Artem',
          caption:
            'Demo: how a filled-in Artem persona card looks on A4. The interactive template is below.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '📚 **Ready-made templates and references:**\n\n— [Figma Community → User Persona templates ↗](https://www.figma.com/community/diagramming/user-persona?resource_type=files&editor_type=figjam&price=all&sort_by=all_time&creators=all) — dozens of free FigJam templates from the community. Copy a favorite and adapt it to your persona.\n\n— [Buyer Persona Journey — Gonarrative ↗](https://www.gonarrative.com/business-storytelling-blog/map-it-out-understanding-your-buyer-personas-journey) — an advanced 6-stage persona journey model (see Part 2 below).',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '👉 If your persona **doesn\'t affect the product** — it\'s just fanfiction.',
        },
        {
          type: 'divider' as const,
        },

        // --- Step 7: Team agrees? ---
        {
          type: 'subheading' as const,
          content: 'Step 7 — Team agrees?',
        },
        {
          type: 'text' as const,
          content:
            'Half the projects break here. If the team doesn\'t believe in the persona — they ignore it, and you\'re working in a vacuum.',
        },
        {
          type: 'columns' as const,
          variant: 'grid' as const,
          columns: [
            {
              title: '✅ Signs the persona stuck',
              items: [
                'A developer says "yeah, I know people like that"',
                'PM refers to the persona by name in discussions',
                'Designer defends a decision via her goals',
                'A quote from the card gets repeated in chat',
              ],
            },
            {
              title: '❌ Signs the persona needs a rewrite',
              items: [
                '"Wait, does anyone actually do that?"',
                'Team argues about persona details instead of the product',
                'PM ignores it and writes about the "average user"',
                'Two weeks later nobody remembers her',
              ],
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '👉 The persona should be so obvious that a developer says: **"yeah, I know people like that"**.',
        },
        {
          type: 'divider' as const,
        },

        // --- Step 8: Empathy map ---
        {
          type: 'subheading' as const,
          content: 'Step 8 — Empathy map',
        },
        {
          type: 'text' as const,
          content:
            'Sounds like something out of psychotherapy, but ok. You structure what the persona **thinks, feels, does, and what pisses them off** — for one specific scenario. This is so you don\'t build a product "for logic" but for reality.',
        },
        {
          type: 'columns' as const,
          variant: 'grid' as const,
          columns: [
            {
              title: '🧠 THINKS (Artem on the morning subway)',
              items: [
                '"Another 30-second ad…"',
                '"Will I finish the event before work?"',
                '"As long as my phone doesn\'t die"',
              ],
            },
            {
              title: '💬 SAYS',
              items: [
                '"This game doesn\'t distract me from work"',
                '"Best decompression after the office"',
                '"Donation banners drive me nuts"',
              ],
            },
            {
              title: '❤️ FEELS',
              items: [
                'Mild anticipation before starting',
                'Irritation at the ads',
                'Satisfaction from a win',
              ],
            },
            {
              title: '👀 DOES',
              items: [
                'Launches the game a second before departure',
                'Plays with headphones',
                'Closes the game at the transfer station',
              ],
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            '**Pains:** 30-sec ads, long load, interruption in a tunnel. **Gains:** short 5–15 min matches, progress per session, offline, minimal pay-to-win.',
        },
        {
          type: 'divider' as const,
        },

        // --- Step 9: JTBD ---
        {
          type: 'subheading' as const,
          content: 'Step 9 — JTBD (this is where you level up)',
        },
        {
          type: 'text' as const,
          content:
            'Forget "the user wants to play." The right level — **the reason the product exists at all**.\n\nFormula: **When [trigger], I want [motivation], so that [outcome]**. A good statement is testable and not tied to a solution (no words like "button," "screen," "filter").',
        },
        {
          type: 'columns' as const,
          variant: 'stacked' as const,
          columns: [
            {
              title: '✅ Artem — two different JTBDs by context',
              items: [
                '🌅 *Morning:* "When I\'m on the subway heading to work, I want to switch the brain on through 1–2 matches in 10 minutes, so I don\'t walk into the office in zombie mode"',
                '🌙 *Evening:* "When I\'m coming back from work, I want to switch off through short low-pressure matches, so I flip from work mode to home mode"',
              ],
            },
            {
              title: '❌ Don\'t do this',
              items: [
                '"I want to be happy" — too abstract',
                '"I want a filter button" — tied to a solution',
                '"I want to order food" — no context and no outcome',
                '"When I\'m tired, I want to open the app" — no "so that what"',
              ],
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '👉 JTBD = **the reason the product exists at all**. If you can\'t state it — the product isn\'t needed.',
        },
        {
          type: 'divider' as const,
        },

        // --- Step 10: Finalization and distribution ---
        {
          type: 'subheading' as const,
          content: 'Step 10 — Finalize and distribute',
        },
        {
          type: 'text' as const,
          content:
            'And here\'s the saddest moment: **90% of personas die in Notion**. To prevent that — embed it into the team\'s processes.',
        },
        {
          type: 'columns' as const,
          variant: 'stacked' as const,
          columns: [
            {
              title: '🎯 So the persona stays alive',
              items: [
                '**1.** Drop it into the PRD of every feature',
                '**2.** Tie tickets to the persona ("This feature is for Artem")',
                '**3.** Use it in discussions instead of the abstract "user"',
                '**4.** Print and pin it next to the team',
                '**5.** Get sign-off from 3 key roles: PM, design, engineering',
                '**6.** Refresh every 6–12 months (behavior shifts)',
              ],
            },
            {
              title: '☠️ Signs the persona is already dead',
              items: [
                'Nobody mentions her name in retros',
                'PM writes tickets "for the user" instead of "for Artem"',
                'The card\'s quote never gets quoted',
                'The persona hasn\'t been updated in over a year',
              ],
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**Live persona test:** in a product discussion, ask "What would Artem say about this feature?". If someone answers in detail — alive. Silence — resuscitate.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '👉 If the persona **isn\'t involved in decisions** — it doesn\'t exist.',
        },
        {
          type: 'divider' as const,
        },

        // --- ⚡ Reality nobody tells you ---
        {
          type: 'heading' as const,
          content: '⚡ The reality nobody tells you',
        },
        {
          type: 'text' as const,
          content:
            'You\'re not building a "persona." You\'re building a **decision-making tool**.\n\nIf after all this you can\'t answer:',
        },
        {
          type: 'checklist' as const,
          title: 'Persona usefulness test',
          items: [
            'Should we do long sessions?',
            'Do we need offline mode?',
            'How do we monetize without annoying people?',
            'What\'s the optimal match length?',
            'Where and when do we show ads?',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '...then you just **prettily formatted an interview**. The persona has to answer product questions — otherwise why bother.',
        },
        {
          type: 'divider' as const,
        },

        // --- Artem example: the essence ---
        {
          type: 'heading' as const,
          content: '🎮 Artem summary: what actually drives the product',
        },
        {
          type: 'text' as const,
          content:
            'Doesn\'t matter: "Artem, 29, sysadmin." That\'s a form. What matters — what follows from it for the product:',
        },
        {
          type: 'table' as const,
          title: 'Artem: trait → product decision',
          headers: ['Trait', 'Type', 'What follows for design'],
          rows: [
            [
              '**Plays in short 5–15 min sessions**',
              'constraint',
              'Match ≤ 5 min · fast load · autosave on every step',
            ],
            [
              '**Often interrupted (subway, tunnels)**',
              'context',
              'Pause anytime · progress recovery · offline cache',
            ],
            [
              '**Pays for boosts and cosmetics**',
              'monetization trigger',
              'Battle Pass $10/mo · skins · ad removal. **NO** pay-to-win',
            ],
            [
              '**Tired in the evening, fresh in the morning**',
              'emotional state',
              'Morning — challenge · evening — chill mode with reduced difficulty',
            ],
            [
              '**Plays one-handed with headphones**',
              'physical UX',
              'Taps on the right side only · large hit-zones · key feedback via sound',
            ],
          ],
          caption:
            'This — is already a decision-making tool. Not just a card with a photo and a quote.',
        },
        {
          type: 'divider' as const,
        },

        // --- PDF template with explicit URL ---
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '📄 **[Open the PDF persona + empathy map + JTBD template ↗](/meeting/3/template)**\n\nDirect link to copy: **uxi-entry-course.vercel.app/meeting/3/template**\n\nPrint 3–5 copies and fill them in during the interview itself. Includes all three tools from this lesson + a ready question template.',
        },

        // --- Quote ---
        {
          type: 'quote' as const,
          text: 'You are not your user. If you don\'t understand that, you\'re not doing UX.',
          author: 'Alan Cooper',
          role: 'Father of interaction design, creator of the persona concept',
        },

        // --- Practical checklist ---
        {
          type: 'heading' as const,
          content: 'Checklist: Creating a Persona',
        },
        {
          type: 'checklist' as const,
          title: 'Minimum Requirements for a Working Persona',
          items: [
            'Name and photo (increases empathy)',
            'Role and context (not just the job title, but the situation)',
            '3-4 goals (what they want to achieve with the product)',
            '3-4 frustrations (what gets in their way)',
            'A quote from a real user',
            'JTBD statement (When... I want... so that...)',
            'Key behavioral traits (device, frequency, triggers)',
            'Empathy map (Thinks / Says / Feels / Does)',
          ],
        },
      ],

      // --- Quiz Part 1 ---
      quiz: [
        {
          question: 'What is a persona in UX design?',
          options: [
            {
              id: 'a',
              text: 'A real user who tests the product',
            },
            {
              id: 'b',
              text: 'A user archetype based on research data',
            },
            {
              id: 'c',
              text: 'A fictional character for marketing materials',
            },
            {
              id: 'd',
              text: 'A user avatar in the interface',
            },
          ],
          correctId: 'b',
          explanation:
            'A persona is a semi-fictional archetype based on real research data (interviews, analytics, observations). It is neither a real person nor pure fiction.',
        },
        {
          question:
            'What are the 4 quadrants of an Empathy Map?',
          options: [
            { id: 'a', text: 'Goals, Pains, Tasks, Results' },
            { id: 'b', text: 'Thinks, Feels, Says, Does' },
            { id: 'c', text: 'Who, What, Where, When' },
            {
              id: 'd',
              text: 'Awareness, Interest, Decision, Action',
            },
          ],
          correctId: 'b',
          explanation:
            'The Empathy Map consists of four quadrants: Thinks, Feels, Says, and Does. Additionally, Pains and Gains are included.',
        },
        {
          question: 'What format describes Jobs to Be Done?',
          options: [
            {
              id: 'a',
              text: '"As a [role], I want [feature], so that [benefit]"',
            },
            {
              id: 'b',
              text: '"When [situation], I want [motivation], so that [outcome]"',
            },
            {
              id: 'c',
              text: '"If [condition], then [action], else [alternative]"',
            },
            {
              id: 'd',
              text: '"User [name] needs [feature] for [goal]"',
            },
          ],
          correctId: 'b',
          explanation:
            'JTBD uses the formula "When [situation], I want [motivation], so that [expected outcome]." This distinguishes it from User Stories (option A), which are tied to roles.',
        },
        {
          question:
            'Which of the following anti-patterns is the most dangerous when creating personas?',
          options: [
            {
              id: 'a',
              text: 'Self-Referential Design — designing for yourself, not for the user',
            },
            {
              id: 'b',
              text: 'Using photos in personas',
            },
            {
              id: 'c',
              text: 'Including user quotes',
            },
            {
              id: 'd',
              text: 'Limiting the number of personas to 3-5',
            },
          ],
          correctId: 'a',
          explanation:
            'Self-Referential Design is one of the most dangerous anti-patterns: the designer thinks "I am the user" and designs for themselves. Photos, quotes, and limiting the number of personas are, on the contrary, good practices.',
        },
      ],
    },

    // ============================
    // PART 2 — User Journey Map
    // ============================
    {
      id: 'part-2',
      title: 'User Journey Map',
      subtitle: 'The user\'s path from first contact to loyalty',
      duration: '45 min',
      sections: [
        {
          type: 'heading' as const,
          content: 'What Is a User Journey Map?',
        },
        {
          type: 'text' as const,
          content:
            '**User Journey Map (UJM)** is a visualization of the user\'s path through a product or service. It shows all **touchpoints**, **emotions**, **pain points**, and **moments of delight** at each stage. A UJM helps you see the product through the user\'s eyes and find areas for improvement.',
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=mSxpVRo3BLg',
          title: 'How to Create a Customer Journey Map',
          caption: 'A step-by-step process for building a user journey map',
        },
        {
          type: 'divider' as const,
        },

        // --- Key Concepts ---
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Touchpoint',
              definition:
                'Any moment of interaction between the user and the product: advertising, website, app, email, support, packaging.',
            },
            {
              term: 'Pain Point',
              definition:
                'A moment where the user experiences frustration, confusion, or disappointment. The main goal of a UJM is to find and eliminate these points.',
            },
            {
              term: 'Moment of Delight',
              definition:
                'A moment that exceeds the user\'s expectations and evokes positive emotions. Creates loyalty.',
            },
            {
              term: 'Emotional Curve',
              definition:
                'A line on the UJM showing fluctuations in user emotions from negative to positive at each stage.',
            },
            {
              term: 'Channel',
              definition:
                'The medium through which a touchpoint occurs: website, mobile app, email, chat, phone, offline.',
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // --- UJM Structure ---
        {
          type: 'heading' as const,
          content: 'What Makes Up a Journey Map',
        },
        {
          type: 'diagram' as const,
          title: 'User Journey Map Layers',
          description:
            'Each column is a stage of the journey. Each row is a layer of information.',
          items: [
            '📋 STAGES — Awareness → Consideration → Decision → Purchase → Usage → Loyalty',
            '🎯 GOALS — What the user wants at each stage',
            '👆 TOUCHPOINTS — Specific points of contact (ads, website, chat)',
            '💭 THOUGHTS — What the user thinks at each stage',
            '😊😤 EMOTIONS — Emotional curve (from frustration to delight)',
            '🔴 PAIN POINTS — Problems and obstacles at each stage',
            '💡 OPPORTUNITIES — Ideas for improving each stage',
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-03-journey-map-layers.webp',
          alt: 'User Journey Map structure with emotional curve',
          caption: 'Journey Map layers: stages, emotions, pain points, opportunities.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**Golden rule of UJM:** the map is created for **one persona** and **one scenario**. Don\'t try to fit all users into a single map — it will turn into a mess.',
        },
        {
          type: 'divider' as const,
        },

        // --- Advanced model: 6 stages (Gonarrative) ---
        {
          type: 'heading' as const,
          content: 'Advanced model: 6 stages instead of the classic 4',
        },
        {
          type: 'text' as const,
          content:
            'The classic **AIDA** funnel (Awareness → Interest → Desire → Action) is for marketing, not UX. For a deep Journey Map there\'s a more accurate 6-stage model from [Gonarrative ↗](https://www.gonarrative.com/business-storytelling-blog/map-it-out-understanding-your-buyer-personas-journey). It describes not only "what the person does" but also **what they feel** at each step — and decisions are made by emotion, not logic.',
        },
        {
          type: 'table' as const,
          title: '6 stages of the persona journey (Gonarrative framework)',
          headers: ['#', 'Stage', 'What happens', 'Emotion'],
          rows: [
            [
              '1',
              '**Awareness**',
              'Realizing a problem or need ("something\'s off / something\'s missing")',
              'Discomfort',
            ],
            [
              '2',
              '**Realize**',
              'Understanding that solutions exist. The market research begins',
              'Curiosity',
            ],
            [
              '3',
              '**Internalize**',
              'Matching external options against internal constraints (budget, time, risk)',
              'Doubt',
            ],
            [
              '4',
              '**Visualize**',
              'Picturing the future outcome through case studies, reviews, comparisons',
              'Hope',
            ],
            [
              '5',
              '**Decide**',
              'Emotional decision → rational justification ("I picked X because…")',
              'Confidence',
            ],
            [
              '6',
              '**Evangelize**',
              'Becoming a brand advocate: telling friends, leaving reviews, recommending',
              'Pride',
            ],
          ],
          caption:
            'For each stage you map 4 dimensions: Story (one sentence) · Thinking (questions of the moment) · Feeling (emotion) · Action (what they actually do).',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            '**Example from the article (Dorco razor):** the author walks through his own razor purchase journey — from Awareness ("razor is dull, annoying") through Internalize (budget vs quality) and Visualize (reads YouTube reviews) to Evangelize (tells friends about the subscription service). A real consumer case with emotional markup of every step.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**When to use 6 stages instead of 4:** for expensive purchases, B2B deals, or subscriptions — where the decision plays out over time and emotions swing. For impulse purchases (mobile app, fast food) the classic 4 are enough.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '⚡ **Gonarrative\'s key insight:** "There are no decisions based on reason and logic alone — every choice carries an emotional component." Content has to address the emotion first, then provide rational support.',
        },
        {
          type: 'divider' as const,
        },

        // --- How to Build a UJM ---
        {
          type: 'heading' as const,
          content: 'How to Build a Journey Map: Step-by-Step Process',
        },
        {
          type: 'user-flow' as const,
          title: 'User Journey Map Creation Process',
          steps: [
            {
              id: 'choose-persona',
              label: 'Choose a persona and scenario',
              type: 'start' as const,
            },
            {
              id: 'define-stages',
              label: 'Define the journey stages',
              type: 'action' as const,
            },
            {
              id: 'map-touchpoints',
              label: 'List all touchpoints',
              type: 'action' as const,
            },
            {
              id: 'add-emotions',
              label: 'Add emotions at each stage',
              type: 'action' as const,
            },
            {
              id: 'find-pains',
              label: 'Pain points found?',
              type: 'decision' as const,
            },
            {
              id: 'prioritize',
              label: 'Prioritize the issues',
              type: 'action' as const,
            },
            {
              id: 'opportunities',
              label: 'Formulate opportunities',
              type: 'action' as const,
            },
            {
              id: 'validate-map',
              label: 'Validate with users',
              type: 'action' as const,
            },
            {
              id: 'validated',
              label: 'Map validated?',
              type: 'decision' as const,
            },
            {
              id: 'done',
              label: 'Journey Map complete',
              type: 'end' as const,
            },
          ],
          connections: [
            { from: 'choose-persona', to: 'define-stages' },
            { from: 'define-stages', to: 'map-touchpoints' },
            { from: 'map-touchpoints', to: 'add-emotions' },
            { from: 'add-emotions', to: 'find-pains' },
            { from: 'find-pains', to: 'prioritize', label: 'Yes' },
            {
              from: 'find-pains',
              to: 'opportunities',
              label: 'No (rare)',
            },
            { from: 'prioritize', to: 'opportunities' },
            { from: 'opportunities', to: 'validate-map' },
            { from: 'validate-map', to: 'validated' },
            { from: 'validated', to: 'done', label: 'Yes' },
            {
              from: 'validated',
              to: 'map-touchpoints',
              label: 'No, refine',
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // --- Example 1: E-commerce (Web) ---
        {
          type: 'heading' as const,
          content: 'Journey Map Example: Online Store (Web)',
        },
        {
          type: 'subheading' as const,
          content:
            'Persona: Anna Kovaleva — buying sneakers for her child',
        },
        {
          type: 'timeline' as const,
          events: [
            {
              year: 'Stage 1',
              title: 'Awareness',
              description:
                'Anna sees an ad on Instagram. Touchpoint: targeted ad. Emotion: curiosity. Thought: "Oh, they have kids\' sneakers."',
            },
            {
              year: 'Stage 2',
              title: 'Search and Comparison',
              description:
                'Visits the website, searches for the right size. Touchpoint: catalog + filters. Emotion: neutral → frustration (size filter is hidden). Pain point: non-obvious navigation.',
            },
            {
              year: 'Stage 3',
              title: 'Product Selection',
              description:
                'Reads reviews, looks at photos. Touchpoint: product page. Emotion: doubt → trust (video review from a mother). Moment of Delight: size chart with foot measurement instructions.',
            },
            {
              year: 'Stage 4',
              title: 'Checkout',
              description:
                'Adds to cart, proceeds to payment. Touchpoint: checkout. Emotion: frustration — mandatory registration. Pain point: 5 fields to fill in + email confirmation.',
            },
            {
              year: 'Stage 5',
              title: 'Delivery',
              description:
                'Waits for the order. Touchpoint: SMS tracking. Emotion: impatience → joy (delivered a day early). Moment of Delight: early delivery + a note in the box.',
            },
            {
              year: 'Stage 6',
              title: 'Post-Purchase',
              description:
                'Receives an email asking for a review. Touchpoint: email + website. Emotion: loyalty. Opportunity: 10% discount on the next order for leaving a review.',
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '**Anna\'s pain points:** hidden size filter (stage 2) and mandatory registration (stage 4). Both can be fixed in 1 sprint and significantly improve conversion.',
        },
        {
          type: 'divider' as const,
        },

        // --- Example 2: Food Delivery (Mobile) ---
        {
          type: 'heading' as const,
          content: 'Journey Map Example: Food Delivery (Mobile)',
        },
        {
          type: 'subheading' as const,
          content: 'Persona: Dmitry Sergeev — ordering lunch at work',
        },
        {
          type: 'timeline' as const,
          events: [
            {
              year: 'Stage 1',
              title: 'Trigger',
              description:
                'Dmitry is hungry, 2 hours until deadline. Opens the app. Touchpoint: home screen icon. Emotion: hunger + urgency. Thought: "Order fast and get back to code."',
            },
            {
              year: 'Stage 2',
              title: 'Restaurant Selection',
              description:
                'Sees "Reorder last order" on the first screen. Touchpoint: home screen. Moment of Delight: 1 tap — and the order is in the cart. Emotion: relief.',
            },
            {
              year: 'Stage 3',
              title: 'Payment',
              description:
                'Apple Pay with one tap. Touchpoint: payment screen. Emotion: satisfaction — zero data entry. Thought: "This is how it should be."',
            },
            {
              year: 'Stage 4',
              title: 'Waiting',
              description:
                'Real-time courier tracking on the map. Touchpoint: tracking screen. Emotion: calm → impatience (courier is stuck for 5 minutes). Pain point: courier "frozen" on the map.',
            },
            {
              year: 'Stage 5',
              title: 'Delivery',
              description:
                'Courier arrives, food is hot. Touchpoint: push notification + intercom. Emotion: joy. Thought: "25 minutes from order to food — perfect."',
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // --- Example 3: Mobile Gaming (Artem) ---
        {
          type: 'heading' as const,
          content: 'Journey Map Example: Mobile Gaming (Artem)',
        },
        {
          type: 'subheading' as const,
          content:
            'Persona: Artem — finding and getting hooked on a new mobile game during commute',
        },
        {
          type: 'timeline' as const,
          events: [
            {
              year: 'Stage 1',
              title: 'Trigger — bored on the subway',
              description:
                'Artem is on his daily commute again. The previous game got stale, deleted it a week ago. Touchpoint: home screen without his go-to game. Emotion: mild irritation and boredom. Thought: "What can I install so I don\'t get sucked into Instagram?"',
            },
            {
              year: 'Stage 2',
              title: 'Discovery — heard about the game',
              description:
                'Sees an ad for a new game in a mobile-gaming Reddit thread + a friend drops the link in Telegram. Touchpoint: social network + friend recommendation. Moment of Delight: friend reference removes the pay-to-win fear — "if he plays it, it\'s probably ok." Emotion: curiosity.',
            },
            {
              year: 'Stage 3',
              title: 'Install + first session on the subway',
              description:
                'Downloaded from App Store, opened it on his next ride. Touchpoint: store page → first launch. Pain point: 12-second splash screen before the main menu — missed his stop. Emotion: impatience. Saved by a short, skippable tutorial.',
            },
            {
              year: 'Stage 4',
              title: 'Hooked — three matches in a row',
              description:
                'In one ride he managed 3 matches of 4 minutes each. Touchpoint: core gameplay loop. Moment of Delight: an automatic progress bar fills to 30%, immediately showing "where to grow." Emotion: mild addiction, added the icon to the home screen.',
            },
            {
              year: 'Stage 5',
              title: 'First monetization offer',
              description:
                'On day 5, a Battle Pass pop-up shows up: $9.99 with a 50% discount and a 24-hour timer. Touchpoint: main-menu pop-up. Pain point: the close-pop-up button is smaller than the buy icon — "tap it by accident and you\'re charged." Emotion: a mix of interest and irritation. Opportunity: make the "Not now" button equal-sized with "Buy."',
            },
            {
              year: 'Stage 6',
              title: 'Habit or churn',
              description:
                'Two weeks in — one of two outcomes. **Scenario A (retention):** Artem plays every morning + evening, bought the Battle Pass. **Scenario B (churn):** the game starts pay-to-walling him at level 7 → he deletes it. Emotion in both cases: decisiveness. Opportunity: at level 5–7, give a "fair" non-pay way to progress so he doesn\'t churn.',
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '**Where Artem most often drops off:** stage 3 (long loading) and stage 5 (aggressive pop-up). Both are **design decisions**, not features. UJM exposes them clearly — without the map they look like "random errors."',
        },
        {
          type: 'divider' as const,
        },

        // --- Case Study Part 2 ---
        {
          type: 'heading' as const,
          content: 'Case Study: Airbnb and the Journey Map',
        },
        {
          type: 'case-study' as const,
          title: 'How Airbnb Used a Journey Map to Transform Their Service',
          company: 'Airbnb',
          problem:
            'In 2009, Airbnb was stagnating. Bookings weren\'t growing despite a large catalog. The team didn\'t understand where users were dropping off.',
          solution:
            'The founders created a detailed Journey Map for both guests and hosts. They discovered that the main pain point was poor-quality property photos. Users weren\'t booking because they didn\'t trust dark, grainy snapshots. The solution: free professional photography for hosts.',
          result:
            'After introducing professional photos, bookings increased 2.5x. The Journey Map revealed what analytics couldn\'t — an emotional trust barrier.',
          steps: [
            {
              title: 'Creating the UJM',
              description:
                'Walked through the entire guest journey: from search to post-trip review. 11 stages.',
            },
            {
              title: 'Discovering the Barrier',
              description:
                'The "viewing listing" stage had the highest drop-off. Reason: poor photos.',
            },
            {
              title: 'Hypothesis and Experiment',
              description:
                'Free professional photography for 20 hosts in New York. A/B test.',
            },
            {
              title: 'Scaling',
              description:
                'The results held: +2.5x bookings. The program was rolled out globally.',
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // --- Approach Comparison ---
        {
          type: 'heading' as const,
          content: 'UJM for Different Product Types: Comparison',
        },
        {
          type: 'comparison' as const,
          title: 'Journey Map Specifics by Product Type',
          items: [
            {
              label: 'Map Focus',
              ux: 'Web/E-commerce: conversion from ad to purchase',
              ui: 'Mobile: speed and minimal taps',
            },
            {
              label: 'Key Pain Point',
              ux: 'SaaS: onboarding and time-to-value',
              ui: 'Data: loading speed and data clarity',
            },
            {
              label: 'Primary Touchpoint',
              ux: 'Web: website pages, email, chat',
              ui: 'Mobile: push notifications, gestures, screens',
            },
            {
              label: 'Moment of Delight',
              ux: 'SaaS: automating routine tasks',
              ui: 'Data: insight in 2 clicks',
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // --- Practical checklist ---
        {
          type: 'heading' as const,
          content: 'Checklist: Building a Journey Map',
        },
        {
          type: 'checklist' as const,
          title: 'Minimum Steps for a Working UJM',
          items: [
            'One persona and one scenario selected',
            '4-7 journey stages defined',
            'Touchpoints listed for each stage',
            'Emotional curve mapped (positive/neutral/negative)',
            'At least 2-3 pain points identified',
            'Moments of delight identified (or their absence noted)',
            'An improvement idea exists for each pain point',
            'Map validated with real users',
          ],
        },
        {
          type: 'divider' as const,
        },

        // --- Tools ---
        {
          type: 'subheading' as const,
          content: 'Tools for Creating a UJM',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'Free',
              items: [
                '[Miro ↗](https://miro.com/templates/customer-journey-map/) — UJM templates out of the box',
                '[FigJam ↗](https://www.figma.com/community/tag/customer%20journey%20map/files) — for teams already using Figma',
                '[Google Sheets ↗](https://docs.google.com/spreadsheets/) — a spreadsheet = the simplest UJM',
                '[Canva ↗](https://www.canva.com/templates/?query=user-journey-map) — beautiful visualization for presentations',
              ],
            },
            {
              title: 'Paid / Advanced',
              items: [
                '[Smaply ↗](https://www.smaply.com/) — a specialized UJM tool',
                '[UXPressia ↗](https://uxpressia.com/) — templates + collaboration',
                '[Lucidchart ↗](https://www.lucidchart.com/pages/templates/user-journey-map) — diagrams + integrations',
                '[Notion ↗](https://www.notion.so/templates/category/customer-journey) — for documentation and storage',
              ],
            },
          ],
        },

        // --- Quote ---
        {
          type: 'quote' as const,
          text: 'A customer journey map is not about a pretty picture. It\'s about empathy, data, and action.',
          author: 'Kerry Bodine',
          role: 'Author of "Mapping Experiences," O\'Reilly',
        },

        // --- Final reflection ---
        {
          type: 'heading' as const,
          content: 'Lesson 3 Summary',
        },
        {
          type: 'text' as const,
          content:
            'Today we mastered **three UX researcher tools**: personas, empathy maps, and User Journey Maps. Together they form a complete picture: **who** your user is (persona), **what they feel** (empathy map), and **how they interact** with your product (UJM). In the next lesson, we will move on to wireframing — turning these insights into the first interface sketches.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**📄 Homework:** Choose a product you use every day. Create: (1) one persona with an empathy map and JTBD, (2) a Journey Map with 5-6 stages including touchpoints, emotions, and pain points.\n\n**[Open the ready PDF template ↗](/meeting/3/template)** — 4 A4 pages (persona + empathy + interview + UJM). Direct copyable link: **uxi-entry-course.vercel.app/meeting/3/template**\n\nPrint 3-5 copies and fill them in during the interview itself.',
        },
      ],

      // --- Quiz Part 2 ---
      quiz: [
        {
          question: 'What is a touchpoint in the context of a User Journey Map?',
          options: [
            {
              id: 'a',
              text: 'The moment a user touches the screen',
            },
            {
              id: 'b',
              text: 'Any moment of interaction between the user and the product or service',
            },
            {
              id: 'c',
              text: 'A Call to Action button',
            },
            {
              id: 'd',
              text: 'The company\'s contact information on the website',
            },
          ],
          correctId: 'b',
          explanation:
            'A touchpoint is any point of contact between the user and the product/service: advertising, website, email, chat, phone call, packaging, push notification, etc.',
        },
        {
          question:
            'For how many personas should a single Journey Map be created?',
          options: [
            { id: 'a', text: 'For all personas at once' },
            { id: 'b', text: 'For one persona and one scenario' },
            { id: 'c', text: 'For 2-3 primary personas' },
            { id: 'd', text: 'Personas are not needed for a Journey Map' },
          ],
          correctId: 'b',
          explanation:
            'The golden rule of UJM: one map = one persona + one scenario. Combining multiple personas dilutes the map and makes it useless.',
        },
        {
          question: 'Which element is NOT a layer of a User Journey Map?',
          options: [
            { id: 'a', text: 'Emotional curve' },
            { id: 'b', text: 'Touchpoints at each stage' },
            { id: 'c', text: 'Business model (unit economics)' },
            { id: 'd', text: 'Pain points and opportunities' },
          ],
          correctId: 'c',
          explanation:
            'A UJM focuses on the user experience: stages, touchpoints, emotions, pain points, and opportunities. Business models and unit economics are separate tools that are not part of a standard Journey Map.',
        },
        {
          question:
            'In the Airbnb case study, what pain point did the Journey Map reveal?',
          options: [
            { id: 'a', text: 'High accommodation prices' },
            {
              id: 'b',
              text: 'Poor property photos that reduced trust',
            },
            { id: 'c', text: 'A complicated registration process' },
            { id: 'd', text: 'Lack of a mobile app' },
          ],
          correctId: 'b',
          explanation:
            'The Journey Map showed that the highest drop-off occurred at the listing viewing stage due to poor photos. Users didn\'t trust dark, amateur snapshots. The solution — free professional photography — led to a 2.5x increase in bookings.',
        },
      ],
    },
  ],
}
