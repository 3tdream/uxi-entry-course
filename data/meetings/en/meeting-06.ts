import type { Meeting } from '../../types'

export const meeting06: Meeting = {
  id: '6',
  number: 6,
  title: 'Color Theory',
  description:
    'Itten color wheel, harmonies, color psychology in industries, the 60-30-10 rule, palettes for web, mobile, and SaaS, accessibility and dark theme.',
  icon: 'Palette',
  color: 'bg-purple-500/10 text-purple-600',
  parts: [
    // ========================================================
    // PART 1 — Color Wheel and Harmonies
    // ========================================================
    {
      id: 'part-1',
      title: 'Color Wheel and Harmonies',
      subtitle:
        'Itten color wheel, primary and derived colors, types of harmonies, warm and cool colors, color psychology',
      duration: '45 min',
      sections: [
        // === INTRODUCTION ===
        {
          type: 'heading' as const,
          content: 'Why Color Is a Designer\'s Superpower',
        },
        {
          type: 'text' as const,
          content:
            'Color is the first thing the human brain processes. Research shows that **up to 90% of a first impression** about a product is formed by color alone. The right color choice increases brand recognition by 80%, improves conversion, and influences user emotions.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'Color is not a matter of taste. It is a system with clear rules that can be learned and applied consciously. After this lesson, you will see color in a completely different way.',
        },
        {
          type: 'quote' as const,
          text: 'Color is the keyboard, the eyes are the hammers, the soul is the piano with many strings.',
          author: 'Wassily Kandinsky',
          role: 'Artist, art theorist',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-06-color-emotions.webp',
          alt: 'Color spectrum with emotional associations (Red — Strength/Passion, Orange — Playful/Warmth, Yellow — Happiness, Green — Health, Blue — Trust, Purple — Elegance, Black — Power) paired with real brand logos under each color (Marvel, Dunkin\', McDonald\'s, Whole Foods, PayPal, Hallmark, Nike)',
          caption: 'Color forms a first impression in 50 milliseconds — the brand picks here are not random',
        },
        {
          type: 'divider' as const,
        },

        // === ITTEN COLOR WHEEL ===
        {
          type: 'heading' as const,
          content: 'The Itten Color Wheel',
        },
        {
          type: 'text' as const,
          content:
            '**Johannes Itten** — a Swiss artist and Bauhaus instructor — created the color wheel in 1961, which became the foundation of color theory in design. The wheel systematizes relationships between colors and helps choose harmonious combinations.',
        },
        {
          type: 'timeline' as const,
          events: [
            {
              year: '1666',
              title: 'Newton and the Prism',
              description:
                'Isaac Newton split white light into a spectrum and proposed the first color wheel with 7 colors.',
            },
            {
              year: '1810',
              title: 'Goethe\'s "Theory of Colors"',
              description:
                'Johann Goethe studied the psychological perception of color, linking colors to emotions.',
            },
            {
              year: '1961',
              title: 'Itten\'s Color Wheel',
              description:
                'Johannes Itten published "The Art of Color" — a foundational work on color theory for designers.',
            },
            {
              year: '2000+',
              title: 'Color in Digital Design',
              description:
                'Itten\'s theory adapted for screens: RGB, HSL, color systems like Material Design and Apple HIG.',
            },
          ],
        },
        {
          type: 'diagram' as const,
          title: 'Structure of the Itten Color Wheel (12 Colors)',
          description:
            'The wheel consists of three levels: primary, secondary, and tertiary colors',
          items: [
            'Primary: red, yellow, blue — cannot be created by mixing',
            'Secondary: orange, green, violet — mixing two primaries',
            'Tertiary: red-orange, yellow-orange, yellow-green, blue-green, blue-violet, red-violet',
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-06-itten-color-wheel.webp',
          alt: 'Canonical Itten color wheel: inner triangle — 3 primary colors (Y, R, B), middle ring — 3 secondary (Y+R, Y+B, B+R), outer ring — 6 tertiary ((Y+R)+Y, (Y+R)+R, etc.)',
          caption:
            'The Itten color wheel is your primary tool for selecting color harmonies',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '🎨 **Try it yourself — Adobe Color Wheel** → [color.adobe.com/create/color-wheel](https://color.adobe.com/create/color-wheel). Pick a base color, choose a harmony type (analogous / monochromatic / triad / complementary / split-complementary / square / shades) — the palette recalculates instantly. Hit Save → export to CSS / Figma. Free, no signup.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            'In digital design we work with **RGB** (for screens) and **HSL** (hue, saturation, lightness — convenient for creating palettes). The Itten wheel is based on RYB (red-yellow-blue), but the principles of harmony work the same way.',
        },
        {
          type: 'divider' as const,
        },

        // === COLOR CHARACTERISTICS ===
        {
          type: 'heading' as const,
          content: 'Three Color Characteristics: HSL',
        },
        {
          type: 'text' as const,
          content:
            'Every color is described by three parameters. Understanding these parameters is the key to creating professional palettes.',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Hue',
              definition:
                'The position of a color on the color wheel (0-360\u00B0). Red = 0\u00B0, green = 120\u00B0, blue = 240\u00B0.',
            },
            {
              term: 'Saturation',
              definition:
                'The intensity of a color (0-100%). 0% is gray, 100% is a pure, vivid color.',
            },
            {
              term: 'Lightness',
              definition:
                'The amount of light in a color (0-100%). 0% is black, 50% is the pure color, 100% is white.',
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'Use HSL instead of HEX when creating palettes. To make variations of a single color, simply adjust Saturation and Lightness while keeping Hue unchanged. Example: `hsl(220, 70%, 50%)` \u2192 `hsl(220, 70%, 30%)` for a darker variant.',
        },
        {
          type: 'divider' as const,
        },

        // === TYPES OF HARMONIES ===
        {
          type: 'heading' as const,
          content: 'Types of Color Harmonies',
        },
        {
          type: 'text' as const,
          content:
            'Color harmony is a combination of colors that is perceived as **pleasant and balanced**. Itten described six main types of harmonies, each suited to different design tasks.',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Complementary',
              definition:
                'Two colors positioned opposite each other on the wheel (180\u00B0). Maximum contrast. Example: blue + orange. Ideal for CTA buttons and accents.',
            },
            {
              term: 'Analogous',
              definition:
                'Three colors positioned next to each other on the wheel (30\u00B0 apart). A calm, harmonious palette. Example: blue, blue-green, green. Suited for natural, tranquil interfaces.',
            },
            {
              term: 'Triadic',
              definition:
                'Three colors equally spaced on the wheel (120\u00B0 apart). A vibrant, energetic palette. Example: red, yellow, blue. Suited for creative and children\'s products.',
            },
            {
              term: 'Split-Complementary',
              definition:
                'One color + two colors flanking its complement. Contrast without aggression. Example: blue + yellow-orange + red-orange.',
            },
            {
              term: 'Tetradic (Rectangle)',
              definition:
                'Four colors forming a rectangle on the wheel. A rich palette that is challenging to balance. Example: blue, orange, red, green.',
            },
            {
              term: 'Square',
              definition:
                'Four colors equally spaced on the wheel (90\u00B0 apart). Example: red, yellow-green, blue, red-violet.',
            },
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-06-color-harmonies.webp',
          alt: '7 types of color harmonies on the wheel with swatch examples: 1. Complementary (opposite), 2. Split-Complementary, 3. Analogous (neighbours), 4. Monochromatic, 5. Triadic (triangle), 6. Tetradic (rectangle), 7. Square + a real-world application example',
          caption:
            'Each type of harmony creates its own mood and is suited for different tasks',
        },
        {
          type: 'before-after' as const,
          title: 'Choosing a Harmony for a Landing Page',
          before: {
            label: 'Random Colors',
            description:
              'The designer picked 5 different colors "by eye": pink, green, brown, teal, purple. The palette is chaotic, there is no visual connection, and the interface looks unprofessional.',
          },
          after: {
            label: 'Analogous Harmony',
            description:
              'The designer chose a base blue (220\u00B0) and added two analogous colors: blue-green (195\u00B0) and blue-violet (245\u00B0). The palette is calm, professional, and elements are visually connected.',
          },
        },
        {
          type: 'subheading' as const,
          content: '\uD83C\uDFAE Rarity colors in gaming: the universal loot-tier code',
        },
        {
          type: 'text' as const,
          content:
            "If you've played any RPG in the last 20 years \u2014 you subconsciously know this scale. **White \u2192 green \u2192 blue \u2192 purple \u2192 orange** isn't an accident, it's a **split-complementary progression with rising chroma**, inherited from Diablo (1996) and locked in by World of Warcraft (2004). Today it's the de-facto standard for loot systems.",
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: '\u26AA Common',
              items: [
                'Hex: `#9D9D9D` (neutral grey)',
                'Saturation = 0%',
                'Basic gear, consumables',
                '~70% drops from regular mobs',
              ],
            },
            {
              title: '\uD83D\uDFE2 Uncommon',
              items: [
                'Hex: `#1EFF00` (bright green)',
                'Hue 120\u00B0 + max saturation',
                'First "oh, lucky" threshold',
                '~25% drops',
              ],
            },
            {
              title: '\uD83D\uDD35 Rare',
              items: [
                'Hex: `#0070DD` (saturated blue)',
                'Hue 220\u00B0 \u2014 complementary to legendary orange',
                'Bosses and dungeons',
                '~4% drops',
              ],
            },
            {
              title: '\uD83D\uDFE3 Epic',
              items: [
                'Hex: `#A335EE` (bright purple)',
                'Hue 280\u00B0 \u2014 bridge between blue and orange',
                'Raids, events',
                '~0.9% drops',
              ],
            },
            {
              title: '\uD83D\uDFE0 Legendary',
              items: [
                'Hex: `#FF8000` (fiery orange)',
                'Hue 30\u00B0 \u2014 opposite of blue',
                'The warm "peak" of the scale',
                '~0.1% drops',
              ],
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**Building a rarity scale principle:** each step must (a) differ **by hue** (not just lightness), (b) be **distinguishable in greyscale** for color-blind players, (c) obey **warmth psychology** \u2014 the last tier is warm (passion, value), the first is cool-neutral. Designing your own loot system? Don\'t reinvent \u2014 use the proven code. In Astral Symphony this maps to brawler-tier and star-drop rarity.',
        },
        {
          type: 'divider' as const,
        },

        // === WARM AND COOL ===
        {
          type: 'heading' as const,
          content: 'Warm and Cool Colors',
        },
        {
          type: 'text' as const,
          content:
            'The color wheel is divided in half: **warm colors** (red \u2192 yellow) are associated with energy, warmth, and passion. **Cool colors** (green \u2192 violet) are associated with calmness, professionalism, and reliability.',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'Warm Colors',
              items: [
                'Red \u2014 energy, urgency, passion',
                'Orange \u2014 friendliness, optimism, creativity',
                'Yellow \u2014 joy, attention, warning',
                'Visually "bring elements closer"',
                'Increase heart rate and appetite',
                'Common uses: CTAs, promotions, food, entertainment',
              ],
            },
            {
              title: 'Cool Colors',
              items: [
                'Green \u2014 nature, growth, health, money',
                'Blue \u2014 trust, stability, professionalism',
                'Violet \u2014 luxury, mystique, creativity',
                'Visually "push elements away"',
                'Calm and reduce anxiety',
                'Common uses: finance, health, technology, SaaS',
              ],
            },
          ],
        },
        {
          type: 'subheading' as const,
          content: '\ud83c\udfae Faction colors in gaming: why NOT red + green',
        },
        {
          type: 'before-after' as const,
          title: 'Team colors: warm/cool pair vs red-green',
          before: {
            label: '\u274c Red faction vs green faction',
            description:
              'Team A \u2014 red (#E63946), Team B \u2014 green (#2ECC71). Theoretically sound (warm vs cool), but **8% of men with deuteranopia** can\'t tell them apart. On the minimap, friend and enemy merge into a single swampy shade. Friendly-fire incidents spike, App Store reviews fill with "can\'t tell teams apart". Apex Legends Year 1 case: Respawn shipped a fix after 4 months of negative reviews.',
          },
          after: {
            label: '\u2705 Red-blue pairing (like Astral Symphony)',
            description:
              'Team A \u2014 red (#FF4136), Team B \u2014 blue (#0074D9). **Warm + cool** + a clear lightness gap. The pair passes all three color-blindness simulations and reads even in greyscale (the master test: if it\'s distinguishable in black-and-white, it\'s distinguishable in any color-blindness form). Same trick \u2014 Overwatch (red vs blue), CS:GO (T vs CT).',
          },
        },
        {
          type: 'divider' as const,
        },

        // === COLOR PSYCHOLOGY ===
        {
          type: 'heading' as const,
          content: 'Color Psychology in Industries',
        },
        {
          type: 'text' as const,
          content:
            'Different industries use specific colors deliberately. Behind this lie decades of consumer behavior research and established associations.',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'Healthcare',
              items: [
                'Dominant: blue, light blue, white',
                'Associations: cleanliness, calmness, trust',
                'Examples: Pfizer, Johnson & Johnson, WebMD',
                'Avoid: bright red (association with blood)',
              ],
            },
            {
              title: 'Food & Restaurants',
              items: [
                'Dominant: red, orange, yellow',
                'Associations: appetite, warmth, pleasure',
                'Examples: McDonald\'s, KFC, Burger King',
                'Avoid: blue (suppresses appetite)',
              ],
            },
            {
              title: 'Finance & Banking',
              items: [
                'Dominant: dark blue, green, gray',
                'Associations: stability, growth, reliability',
                'Examples: PayPal, Chase, Fidelity',
                'Avoid: bright, neon colors',
              ],
            },
            {
              title: 'Entertainment',
              items: [
                'Dominant: bright, saturated, gradients',
                'Associations: joy, energy, dynamism',
                'Examples: Spotify, Netflix, Twitch',
                'Avoid: dull, washed-out palettes',
              ],
            },
          ],
        },
        {
          type: 'subheading' as const,
          content: 'Real app palettes — industry by industry',
        },
        {
          type: 'color-palette' as const,
          data: {
            appName: 'Calm',
            appUrl: 'https://www.calm.com/',
            industry: 'Healthcare • meditation',
            rationale:
              'Deep midnight **blue** = calm and sleep (the core use-case). Lavender soothes without aggression, warm peach breaks the cold and removes any "clinical" feel. No red anywhere — it would kill the state.',
            swatches: [
              { hex: '#1C2752', role: 'Primary', name: 'Midnight Blue' },
              { hex: '#6A89E0', role: 'Secondary', name: 'Calm Lavender' },
              { hex: '#FED6B0', role: 'Accent', name: 'Soft Peach' },
              { hex: '#FFFFFF', role: 'Surface', name: 'White' },
            ],
          },
        },
        {
          type: 'color-palette' as const,
          data: {
            appName: "McDonald's",
            appUrl: 'https://www.mcdonalds.com/',
            industry: 'Food • quick service',
            rationale:
              'The classic "appetite" combo: **yellow** excites + **red** speeds up decision-making (research shows: people order faster and leave faster — higher table throughput). Black for typography, white so the food in photos stays the hero.',
            swatches: [
              { hex: '#FFC72C', role: 'Primary', name: 'Golden Yellow' },
              { hex: '#DA291C', role: 'Secondary', name: 'Big Mac Red' },
              { hex: '#27251F', role: 'Text', name: 'Near Black' },
              { hex: '#FFFFFF', role: 'Surface', name: 'White' },
            ],
          },
        },
        {
          type: 'color-palette' as const,
          data: {
            appName: 'PayPal',
            appUrl: 'https://www.paypal.com/',
            industry: 'Finance • payments',
            rationale:
              '**Dark blue** = trust and stability (a must-have for money). Sky blue lightens it up and makes the UI feel "tech, not bank." Yellow is the only CTA color — used exclusively on the "Pay" button to anchor attention at the moment of truth.',
            swatches: [
              { hex: '#003087', role: 'Primary', name: 'PayPal Blue' },
              { hex: '#009CDE', role: 'Secondary', name: 'Sky Blue' },
              { hex: '#FFC439', role: 'CTA', name: 'Pay Yellow' },
              { hex: '#FFFFFF', role: 'Surface', name: 'White' },
            ],
          },
        },
        {
          type: 'color-palette' as const,
          data: {
            appName: 'Spotify',
            appUrl: 'https://www.spotify.com/',
            industry: 'Entertainment • music',
            rationale:
              '**Vivid green** = energy and recognizability from 5 meters away (perfect for a "brand-in-your-pocket"). Near-black background lets album covers "glow" like on a stage. Gray for secondary metadata — so it never steals attention from the music.',
            swatches: [
              { hex: '#1DB954', role: 'Primary', name: 'Spotify Green' },
              { hex: '#191414', role: 'Background', name: 'True Black' },
              { hex: '#FFFFFF', role: 'Text', name: 'White' },
              { hex: '#535353', role: 'Muted', name: 'Grey' },
            ],
          },
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**Pattern check:** all 4 palettes use 1 dominant + 1 accent + 2 neutrals. No "seven colors of the rainbow." The **60-30-10 rule** holds even for billion-dollar brands.',
        },
        {
          type: 'case-study' as const,
          title: 'Why Is Facebook Blue?',
          company: 'Facebook (Meta)',
          problem:
            'Mark Zuckerberg has color blindness (protanopia) \u2014 blue is the color he sees best. But the decision turned out to be brilliant.',
          solution:
            'Blue evokes trust, is associated with communication and professionalism. It does not fatigue the eyes during prolonged use and works well as a background.',
          result:
            'Blue became the color of social networks: Twitter, LinkedIn, Telegram, VK \u2014 all chose shades of blue. This color became synonymous with "digital trust."',
        },
        {
          type: 'divider' as const,
        },

        // === TOOLS ===
        {
          type: 'heading' as const,
          content: 'Tools for Working with Color',
        },
        {
          type: 'text' as const,
          content:
            'Modern tools allow you to generate palettes, check contrast, and select harmonies in seconds. Here are three must-have tools for a UI designer.',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: '[Coolors.co ↗](https://coolors.co/)',
              items: [
                'Palette generator on spacebar tap',
                'Lock individual colors and regenerate the rest',
                'Fine-tune hue / saturation / lightness',
                'Export to CSS / SCSS / Figma / Adobe',
                'Free tier with no limits',
              ],
            },
            {
              title: '[Adobe Color ↗](https://color.adobe.com/)',
              items: [
                'Color wheel with harmony type picker',
                'Extract palette from a photo',
                'Trending palette library from Adobe Stock',
                'Photoshop / Illustrator / Figma integration',
                'Free, requires Adobe ID',
              ],
            },
            {
              title: '[Realtime Colors ↗](https://www.realtimecolors.com/)',
              items: [
                'Applies the palette directly on a landing-page mockup',
                'Change primary / secondary / accent — see the result on a real UI',
                'Perfect for presenting a palette to a client',
                'Export CSS variables in one click',
                'Free',
              ],
            },
            {
              title: '[Khroma ↗](https://www.khroma.co/)',
              items: [
                'AI palette generator trained on thousands of designer combos',
                'Pick 50 favorite colors — the algorithm generates pairs/triplets',
                'Personal "taste" improves with use',
                'Saves history, exports to Figma / Sketch',
                'Free, sign-up required',
              ],
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'Start with Realtime Colors \u2014 it best demonstrates how a palette looks on a real interface. Then use Coolors for fine-tuning and Adobe Color for verifying harmonies.',
        },
        {
          type: 'divider' as const,
        },

        // === VIDEOS ===
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=KMS3VwGh3HY',
          title: 'Color Theory for Designers \u2014 The Futur',
          caption:
            'A detailed breakdown of color theory with practical examples',
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=QkCVrNoqcBU',
          title: 'Color in UI Design \u2014 A Practical Framework',
          caption:
            'A practical framework for working with color in interfaces',
        },
        {
          type: 'divider' as const,
        },

        // === SPOTIFY CASE ===
        {
          type: 'case-study' as const,
          title: 'Color as Part of a Brand',
          company: 'Spotify',
          problem:
            'In 2013, Spotify needed to stand out among competitors (Apple Music, Deezer) and create a memorable identity.',
          solution:
            'Spotify chose a vibrant green (#1DB954) \u2014 a color of energy, freshness, and growth. Combined with a black background, it creates a sense of premium quality and modernity. The green stands out among "blue" competitors.',
          result:
            'Spotify green became one of the most recognizable colors in the tech industry. The brand is associated with music, youth, and innovation.',
        },
        {
          type: 'subheading' as const,
          content: '🎮 Color as a gaming-brand identity',
        },
        {
          type: 'text' as const,
          content:
            "Same 'claim an unowned color' strategy — applied to the gaming market. Games compete for attention on the App Store / Steam shelf, and **the first recognition impulse** comes through icon/logo color.",
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: '🟪 Fortnite — purple (#8A2BE2)',
              definition:
                'Battle royale category: Apex Legends — orange/red, PUBG — khaki, CoD: Warzone — grey/green. Fortnite claimed **purple** — no competitor staked a claim. Today purple = Fortnite on a shelf.',
            },
            {
              term: '🟡 Brawl Stars — yellow (#FFC857)',
              definition:
                'Mobile shooters are dominated by blue (CoD Mobile, Critical Ops). Supercell picked **sun-yellow** — a triadic complement to the blue map skies and orange brawlers. Spotting a yellow icon among grey ones on a home screen is a reflex.',
            },
            {
              term: '🌈 Among Us — 12-color player palette',
              definition:
                'Not one color, **the whole spectrum**. 12 maximally-distinct hues from the Itten wheel (red, blue, green, pink, orange, yellow, black, white, purple, brown, cyan, lime). The brand = the entire palette. Rare move — it only works because the game is built around "pick your color".',
            },
            {
              term: '🟢 Roblox — green-grey',
              definition:
                'A platform, not a game — needs an "infrastructure" neutral tone. Green-grey = trust + growth (the educational connotation for parents). Compare with competitors: Minecraft — earthy, Fortnite — purple, Roblox holds the empty note.',
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            "**Artem's takeaway:** game brand color is a **strategic choice**, the same way Airbnb coral or Spotify green is. Open the App Store → your category → look at the top-20 icons. Which colors are taken? Which are empty? If you're branding your game — head into the empty space. If competitors are all blue — your shot is green, purple, orange, or pink.",
        },
      ],
      quiz: [
        {
          question: 'Which colors are primary in the Itten color wheel?',
          options: [
            { id: 'a', text: 'Red, green, blue (RGB)' },
            { id: 'b', text: 'Red, yellow, blue (RYB)' },
            { id: 'c', text: 'Cyan, magenta, yellow (CMY)' },
            { id: 'd', text: 'Orange, green, violet' },
          ],
          correctId: 'b',
          explanation:
            'The Itten wheel is based on the RYB system: red, yellow, blue are the three primary colors that cannot be created by mixing.',
        },
        {
          question: 'What is complementary harmony?',
          options: [
            { id: 'a', text: 'Three colors next to each other on the wheel' },
            { id: 'b', text: 'Two colors opposite each other on the wheel (180\u00B0)' },
            { id: 'c', text: 'Three colors 120\u00B0 apart' },
            { id: 'd', text: 'One color at different saturation levels' },
          ],
          correctId: 'b',
          explanation:
            'Complementary harmony consists of two colors positioned opposite each other on the color wheel. They create maximum contrast.',
        },
        {
          question:
            'Why do fast food chains (McDonald\'s, KFC) use red and yellow?',
          options: [
            { id: 'a', text: 'These colors are cheaper to print' },
            {
              id: 'b',
              text: 'Red and yellow stimulate appetite and attract attention',
            },
            { id: 'c', text: 'It is simply tradition with no scientific basis' },
            { id: 'd', text: 'These colors are more visible at night' },
          ],
          correctId: 'b',
          explanation:
            'Red increases heart rate and stimulates appetite, yellow attracts attention and is associated with joy. Together they create a feeling of energy and the desire to eat.',
        },
        {
          question: 'What does the letter H stand for in the HSL model?',
          options: [
            { id: 'a', text: 'Height' },
            { id: 'b', text: 'Harmony' },
            { id: 'c', text: 'Hue' },
            { id: 'd', text: 'Highlight' },
          ],
          correctId: 'c',
          explanation:
            'H stands for Hue \u2014 the position of a color on the wheel from 0\u00B0 to 360\u00B0. S is Saturation, L is Lightness.',
        },
        {
          question: 'What happens if you set Saturation = 0% in HSL?',
          options: [
            { id: 'a', text: 'The color becomes maximally bright' },
            { id: 'b', text: 'The color turns into a shade of grey (or black/white)' },
            { id: 'c', text: 'The color becomes transparent' },
            { id: 'd', text: 'Hue flips to the opposite' },
          ],
          correctId: 'b',
          explanation:
            'Saturation = 0% strips out the "colorness", leaving only the grey scale. Hue is irrelevant at that point — only Lightness matters. Handy trick: test a palette in greyscale — if elements stop being distinguishable, you\'re leaning on color instead of contrast.',
        },
        {
          question: 'Triadic harmony — 3 colors 120° apart. Which products is it most natural for?',
          options: [
            { id: 'a', text: 'Minimalist banking apps' },
            { id: 'b', text: 'Corporate SaaS dashboards' },
            { id: 'c', text: "Kids' games, entertainment apps, energetic brands" },
            { id: 'd', text: 'Premium jewelry stores' },
          ],
          correctId: 'c',
          explanation:
            'Triadic harmony delivers maximum visual variety while staying systematic — that\'s why Mario (red/blue/yellow), kids\' edu apps, and game landing pages love it. Premium goes monochromatic or analogous; triadic is too "loud" for it.',
        },
        {
          question: 'Which harmony is recommended for designing a high-impact CTA button?',
          options: [
            { id: 'a', text: 'Analogous — neighbouring colors' },
            { id: 'b', text: 'Complementary — opposite on the wheel (180°)' },
            { id: 'c', text: 'Monochromatic — shades of one color' },
            { id: 'd', text: 'Triadic — three colors 120° apart' },
          ],
          correctId: 'b',
          explanation:
            'Complementary colors deliver **maximum contrast** — exactly what a CTA needs to pop out of the interface. Example: blue primary + orange "Buy" button. IKEA, Stripe, Notion — all use this trick.',
        },
        {
          question:
            'What does Spotify\'s pick of green (#1DB954) in 2013 demonstrate from a brand-strategy perspective?',
          options: [
            { id: 'a', text: 'A random pick, no strategy' },
            { id: 'b', text: 'Claiming a "free" color in a category where every competitor was using blue/black' },
            { id: 'c', text: 'A trend of the season' },
            { id: 'd', text: 'Cheap printing' },
          ],
          correctId: 'b',
          explanation:
            'Apple Music — white/pink, Deezer — blue, Pandora — blue. Spotify claimed **green** — the only "free" lane in the category. Brand rule: own a color no competitor uses. Same trick — Fortnite (purple), Twitch (purple), Slack (purple/aubergine).',
        },
      ],
    },

    // ========================================================
    // PART 2 — Color in Practice
    // ========================================================
    {
      id: 'part-2',
      title: 'Color in Practice',
      subtitle:
        'The 60-30-10 rule, color in UI, palettes for different products, accessibility and dark theme',
      duration: '45 min',
      sections: [
        // === THE 60-30-10 RULE ===
        {
          type: 'heading' as const,
          content: 'The 60-30-10 Rule',
        },
        {
          type: 'text' as const,
          content:
            'The **60-30-10** rule originated from interior design and has become the gold standard in UI design. It defines the proportions of color usage in an interface to create visual balance.',
        },
        {
          type: 'diagram' as const,
          title: 'The 60-30-10 Color Distribution',
          description:
            'Three color levels form the visual hierarchy of an interface',
          items: [
            '60% \u2014 Dominant color (background, large surfaces). Usually neutral: white, light gray, dark gray.',
            '30% \u2014 Secondary color (cards, navigation, sections). Supports the dominant, adds depth.',
            '10% \u2014 Accent color (CTA buttons, links, indicator icons). Draws attention to key actions.',
          ],
        },
        {
          type: 'before-after' as const,
          title: 'Applying the 60-30-10 Rule',
          before: {
            label: 'Without the Rule',
            description:
              'All interface elements are painted in bright colors in roughly equal proportions. Blue background, red buttons, green navigation, orange cards. The eye has nothing to focus on, everything screams, the CTA gets lost.',
          },
          after: {
            label: 'With the 60-30-10 Rule',
            description:
              'White background (60%), light gray cards and navigation (30%), blue CTA buttons and accents (10%). The eye immediately finds the main action, the interface breathes.',
          },
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            'Notion example: white background (60%), light gray sidebar and dividers (30%), black text + blue links as accents (10%). Minimalism that works.',
        },
        {
          type: 'divider' as const,
        },

        // === COLOR IN UI ===
        {
          type: 'heading' as const,
          content: 'Color Roles in an Interface',
        },
        {
          type: 'text' as const,
          content:
            'In UI design, every color serves a specific **function**. A designer doesn\'t just "paint" elements \u2014 they create a system where color conveys information.',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Background',
              definition:
                'Main background: white / off-white (#FAFAFA) in light theme, dark gray (#121212) in dark theme. Not pure white or pure black \u2014 this reduces eye strain.',
            },
            {
              term: 'Text',
              definition:
                'Primary text: dark gray (#1A1A1A) on light background, light gray (#E0E0E0) on dark background. Secondary text is 40\u201350% less contrasting.',
            },
            {
              term: 'Primary (Main Brand Color)',
              definition:
                'The main accent color: CTA buttons, active states, links. There should be one \u2014 two at most.',
            },
            {
              term: 'States',
              definition:
                'Hover: primary + 10% darker. Active: primary + 20% darker. Disabled: 40% opacity. Focus: ring / outline in primary color.',
            },
            {
              term: 'Feedback Colors',
              definition:
                'Success \u2014 green (#22C55E). Error \u2014 red (#EF4444). Warning \u2014 yellow (#EAB308). Info \u2014 blue (#3B82F6). These colors are universal.',
            },
          ],
        },
        {
          type: 'subheading' as const,
          content: '\ud83c\udfae Color roles in a gaming HUD: HP / Mana / Shield',
        },
        {
          type: 'text' as const,
          content:
            "These three colors are the **universal language of gaming UIs**. From Diablo and Warcraft to Astral Symphony \u2014 players see a red bar and understand 'health' without words, a blue one \u2014 'resource', a yellow one \u2014 'protection'. This is **the direct port of color psychology** into gaming UX: warm = biological danger, cool = controlled resource, neutral-warning = temporary state.",
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: '\u2764\ufe0f HP / Health \u2014 red',
              definition:
                'Hex: `#EF4444` (or `hsl(0, 84%, 60%)`). Biological danger signal \u2014 pulse, blood. Below 20% HP, a **pulse animation** plus a screen-edge vignette in the same hue kicks in. Universal: Diablo, WoW, CS:GO, Destiny, Astral Symphony.',
            },
            {
              term: '\ud83d\udc99 Mana / Energy \u2014 blue',
              definition:
                'Hex: `#3B82F6` (or `hsl(220, 85%, 60%)`). A cool, controlled, "magical" resource. Recovers over time \u2014 no urgency. Tip: if your game has no mana, use blue for the secondary resource (XP to next level, energy for daily quests).',
            },
            {
              term: '\ud83d\udee1 Shield / Armor \u2014 yellow/gold',
              definition:
                'Hex: `#FFC857` (or `hsl(45, 95%, 55%)`). **Warm but not alarming** \u2014 warning without alarm. Temporary state (shield buff), a separate layer above HP. Apex Legends, Overwatch, Astral Symphony \u2014 gold shield indicator everywhere.',
            },
            {
              term: '\ud83d\udc9c Ultimate / Special \u2014 purple',
              definition:
                'Hex: `#A855F7` (or `hsl(280, 90%, 60%)`). The "magical", rare, special state \u2014 when an ult is ready. Purple reads premium and magical, never used for base resources to avoid devaluing it. Overwatch ultimate-ready glow, Brawl Stars Star Power.',
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            '**\ud83c\udfae Game UI rule:** **never make Mana green**, even if "fresh-looking" tempts you. Green = success/ok in UI conventions, mana is a resource you spend. A green mana bar creates cognitive dissonance: "success? no, a resource?". That conflict kills Day-1 onboarding readability.',
        },
        {
          type: 'before-after' as const,
          title: 'Feedback Colors in Forms',
          before: {
            label: 'Without a Feedback System',
            description:
              'All form fields look the same: gray border. On error \u2014 gray-colored text saying "Error." The user doesn\'t understand what exactly is wrong or where.',
          },
          after: {
            label: 'With a Color Feedback System',
            description:
              'Invalid field \u2014 red border + red error text + red icon. Successfully filled \u2014 green checkmark. Warning \u2014 yellow icon. The user instantly reads the status of each field.',
          },
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            "\ud83c\udfae **Critical UI states in gaming:** at low HP (<20%), games apply a **screen-edge vignette** in desaturated red-grey (`hsl(0, 60%, 35%)`) \u2014 so it doesn't destroy ability-icon readability. Pure red (#FF0000) full-screen is a **WCAG violation inside the game itself**: ability cooldown indicators become unreadable. The feedback-color rule from this lesson works **inside the combat scene too**: never rely on hue alone \u2014 add shape, pulse, sound. In Astral Symphony: low-HP = red vignette + 1Hz pulse + heartbeat SFX = triple redundancy.",
        },
        {
          type: 'divider' as const,
        },

        // === PALETTES FOR DIFFERENT PRODUCTS ===
        {
          type: 'heading' as const,
          content: 'Creating Palettes for Different Product Types',
        },
        {
          type: 'text' as const,
          content:
            'Different product types require different approaches to color. Let\'s compare palettes for four typical UI designer tasks.',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'Web Landing Page',
              items: [
                'Primary: bright, saturated (to attract attention)',
                'Background: white or off-white',
                'Accent: contrasting to primary for CTA',
                'Text: dark gray (#1A1A1A)',
                'Few colors: 2\u20133 + neutrals',
                'Gradients are acceptable for hero sections',
              ],
            },
            {
              title: 'Mobile App',
              items: [
                'Primary: medium saturation (comfortable for eyes)',
                'Background: pure white or system default',
                'Navigation: neutral, non-distracting',
                'Accent: one bright color for main actions',
                'Consider system dark mode',
                'Minimum colors: 1 primary + 1 accent',
              ],
            },
            {
              title: 'SaaS Dashboard',
              items: [
                'Primary: calm, professional (blue, indigo)',
                'Sidebar: dark or gray',
                'Content area: light, airy',
                'Many neutral grays for data',
                'Accent only for actions and alerts',
                'Color hierarchy is critical: lots of data',
              ],
            },
            {
              title: 'Data Visualization',
              items: [
                'A set of 6\u20138 distinguishable colors',
                'Colors must differ in grayscale too (for print)',
                'Avoid red-green pairs (color blindness)',
                'Sequential scales: from light to dark',
                'Categorical: maximally different hues',
                'Tool: [ColorBrewer 2.0 ↗](https://colorbrewer2.org/)',
              ],
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // === AIRBNB CASE ===
        {
          type: 'image' as const,
          src: '/images/meeting-06-airbnb-rebrand.webp',
          alt: 'Side-by-side: old blue Airbnb wordmark 2008–2014 vs new coral Bélo mark from 2014',
          caption: 'Before & after: blue Airbnb (2008–2014) → coral Rausch Pink #FF5A5F + Bélo symbol (2014–today)',
        },
        {
          type: 'case-study' as const,
          title: 'Color Palette Rebrand',
          company: 'Airbnb',
          problem:
            'In 2014, Airbnb looked like a typical startup with a blue color \u2014 it blended in among competitors (Booking, Expedia). It needed its own color identity.',
          solution:
            'The team chose "Rausch Pink" (#FF5A5F) \u2014 a warm coral associated with hospitality, the warmth of home, and humanity. They complemented it with dark gray for text and white for the background.',
          result:
            'Airbnb became instantly recognizable. The coral color set the brand apart from the "blue sea" of competitors and conveyed the core idea \u2014 a warm welcome and belonging.',
          steps: [
            {
              title: 'Audit',
              description: 'Analyzed the colors of all competitors in the travel industry \u2014 90% used blue.',
            },
            {
              title: 'Hypothesis',
              description: 'A warm color would better convey the idea of "belong anywhere" (feel at home).',
            },
            {
              title: 'Testing',
              description: 'Tested 5 shades of pink/coral with focus groups.',
            },
            {
              title: 'Implementation',
              description: 'Rausch Pink became the primary color for the logo, buttons, and key elements.',
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // === NOTION ===
        {
          type: 'case-study' as const,
          title: 'A Minimalist Palette as a Competitive Advantage',
          company: 'Notion',
          problem:
            'Notion is a tool for notes, databases, and project management. Users spend hours in it daily. How do you create an interface that doesn\'t cause fatigue?',
          solution:
            'A nearly colorless interface: white background, black text, gray dividers. Color is used minimally \u2014 only for page icons and user labels. This allows content to be the center of attention.',
          result:
            'Notion became the standard of "quiet design." Users describe it as a "blank canvas" that doesn\'t impose a style. Minimalism of color is a competitive advantage.',
        },
        {
          type: 'divider' as const,
        },

        // === ACCESSIBILITY ===
        {
          type: 'heading' as const,
          content: 'Color Accessibility (WCAG)',
        },
        {
          type: 'text' as const,
          content:
            'Approximately **8% of men and 0.5% of women** have color vision deficiencies. The **WCAG 2.1** standard defines minimum contrast requirements so that interfaces are readable for everyone.',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Contrast Ratio',
              definition:
                'The brightness ratio between two colors. For example, black on white = 21:1 (maximum). WCAG AA requires a minimum of 4.5:1 for text, 3:1 for large text.',
            },
            {
              term: 'WCAG AA',
              definition:
                'Minimum standard: text contrast \u2265 4.5:1, large text \u2265 3:1. Required for most products.',
            },
            {
              term: 'WCAG AAA',
              definition:
                'Enhanced standard: text contrast \u2265 7:1, large text \u2265 4.5:1. Recommended for healthcare, government, and education.',
            },
            {
              term: 'Not Just Color',
              definition:
                'Information must not be conveyed by color alone. Use icons, text, and patterns. Example: error = red + \u2715 icon + "Error" text.',
            },
          ],
        },
        {
          type: 'before-after' as const,
          title: 'Text Contrast on a Colored Background',
          before: {
            label: 'Insufficient Contrast',
            description:
              'Light gray text (#999) on a white background (#FFF). Contrast 2.85:1 \u2014 doesn\'t even pass AA. A thin font makes the problem worse. Text is virtually unreadable for users with impaired vision.',
            visual: {
              kind: 'text-sample',
              text: 'This text is nearly impossible to read in bright light or for users with impaired vision.',
              color: '#999999',
              background: '#FFFFFF',
              fontWeight: 'thin',
              ratio: '2.85:1',
              ratioLabel: 'fails AA',
            },
          },
          after: {
            label: 'Sufficient Contrast',
            description:
              'Dark gray text (#4A4A4A) on a white background (#FFF). Contrast 7.73:1 \u2014 passes even AAA. Text is comfortably readable by all users under any lighting conditions.',
            visual: {
              kind: 'text-sample',
              text: 'This text is comfortably readable by all users under any lighting conditions.',
              color: '#4A4A4A',
              background: '#FFFFFF',
              fontWeight: 'normal',
              ratio: '7.73:1',
              ratioLabel: 'passes AAA',
            },
          },
        },
        {
          type: 'before-after' as const,
          title: 'Color as the Only Indicator',
          before: {
            label: 'Color Only',
            description:
              'Required form fields are marked only by a red border. A colorblind person cannot distinguish a red border from a gray one. No text hint is provided.',
            visual: {
              kind: 'required-field',
              label: 'Email',
              showAsterisk: false,
              borderColor: '#DC2626',
              placeholder: 'name@example.com',
            },
          },
          after: {
            label: 'Color + Text + Icon',
            description:
              'Required fields are marked with an asterisk (*), a red border, and the text "Required field." Three channels of information \u2014 color, text, symbol.',
            visual: {
              kind: 'required-field',
              label: 'Email',
              showAsterisk: true,
              borderColor: '#DC2626',
              placeholder: 'name@example.com',
              caption: 'Required field',
            },
          },
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            'Never use red and green as the only way to distinguish "error" and "success." Approximately 4.5% of men cannot tell these colors apart (protanopia and deuteranopia). Always add text or an icon.',
        },
        {
          type: 'subheading' as const,
          content: '🎮 Color-blind mode in gaming: must-have, not nice-to-have',
        },
        {
          type: 'before-after' as const,
          title: 'Color-blind mode for a PvP shooter',
          before: {
            label: '❌ "Color-blind mode isn\'t a priority yet"',
            description:
              'A game with 1M active players: 8% of men = **80,000 players** with deuteranopia. Without color-blind mode: red-green faction markers merge. App Store reviews start: "can\'t tell teams apart", "constant friendly fire". NPS drops 8–12 points in that segment. Case studies: Apex Legends Year 1 (Respawn shipped a fix after 4 months of reviews), pre-Source-2 CS:GO.',
          },
          after: {
            label: '✅ Color-blind mode with 3 presets',
            description:
              '**Protanopia** (no red receptors): faction red → orange (#FF8000), success green → cyan. **Deuteranopia** (green blindness, most common): faction green → blue, success → blue + ✓ icon. **Tritanopia** (no blue): blue → magenta. **Shape redundancy**: on the minimap, ally = circle, enemy = triangle. Astral Symphony surfaces this in the setup menu, not buried in accessibility.',
          },
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '🎮 **Testing a gaming color palette:** run it through [Coblis ↗](https://www.color-blindness.com/coblis-color-blindness-simulator/) — drop a HUD screenshot, see exactly how a color-blind player sees it. Do this **before launch**, not after. Implementing color-blind mode = 3-5 engineer-days; fixing negative reviews post-release = millions in marketing.',
        },
        {
          type: 'divider' as const,
        },

        // === DARK THEME ===
        {
          type: 'heading' as const,
          content: 'Dark Theme: Color Adaptation',
        },
        {
          type: 'text' as const,
          content:
            'A dark theme is not an inversion of the light one. It is a **separate color system** with its own rules. The main mistake is using pure black (#000) as the background and simply inverting colors.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            "🛠 **Don't reinvent dark mode — use the proven systems.** [Material Design 3 dark mode ↗](https://m3.material.io/styles/color/dark-mode) — Google's official rules (elevation, surface, on-color). [Tailwind palette ↗](https://tailwindcss.com/docs/customizing-colors) — production-grade 50–950 scale per hue, half the internet uses it. [Colour & Contrast ↗](https://colourcontrast.cc/) — instantly shows contrast in **both** themes at once. [Accessible Color Matrix (Cloudflare) ↗](https://cloudflare.design/color) — a full background × foreground grid with AA/AAA status. Don't build dark mode from scratch — start from Tailwind or M3.",
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'Dark Theme Rules',
              items: [
                'Background: dark gray (#121212, #1E1E1E), NOT black',
                'Layers: each level 1\u20133% lighter than the previous one',
                'Text: #E0E0E0 (87% opacity), not pure white',
                'Secondary text: #A0A0A0 (60% opacity)',
                'Primary color: reduce saturation by 10\u201320%',
                'Replace shadows with lighter borders',
              ],
            },
            {
              title: 'Common Mistakes',
              items: [
                'Black background (#000) \u2014 too much contrast, causes fatigue',
                'Pure white text (#FFF) \u2014 hard on the eyes',
                'Same saturated colors \u2014 they vibrate on a dark background',
                'Inverting all colors \u2014 breaks the hierarchy',
                'Forgetting about shadows \u2014 elements "sink" into the background',
                'Not testing in real conditions (at night)',
              ],
            },
          ],
        },
        {
          type: 'before-after' as const,
          title: 'Adapting the Primary Color for Dark Theme',
          before: {
            label: 'Same Color',
            description:
              'Primary blue (#2563EB) on a dark background (#121212). The saturated blue "vibrates," creates discomfort, and text on the button is hard to read.',
          },
          after: {
            label: 'Adapted Color',
            description:
              'Primary blue desaturated (#60A5FA) on a dark background (#121212). Soft, comfortable for the eyes, text on the button reads well. Saturation reduced, lightness increased.',
          },
        },
        {
          type: 'divider' as const,
        },

        // === CHECKLIST ===
        {
          type: 'heading' as const,
          content: 'Checklist: Creating an Accessible Color Palette',
        },
        {
          type: 'checklist' as const,
          title: 'Checklist for Creating an Accessible Color Palette',
          items: [
            {
              text: 'Choose a primary color that matches the industry and target audience',
              demo: 'Fintech / banks \u2192 **blue** (trust, security). Wellness / eco \u2192 **green** (health, growth). Premium / luxury \u2192 **black + gold**. Kids\' games \u2192 **yellow + triadic**. Open [Brand Colors of 2024 \u2014 Pantone Color Institute \u2197](https://www.pantone.com/articles/color-trends) to check trends in your industry.',
            },
            {
              text: 'Build a palette based on a harmony type',
              demo: 'Analogous (3 neighbours) \u2192 calm, corporate SaaS. Complementary \u2192 CTA contrast, e-commerce. Triadic \u2192 kids / energetic. Monochromatic \u2192 minimalist premium. Use [Adobe Color Wheel \u2197](https://color.adobe.com/create/color-wheel) \u2014 pick harmony type, see the palette instantly.',
            },
            {
              text: 'Verify 60-30-10 proportions on main screens',
              demo: '60% background + neutral \u00b7 30% secondary (cards, navigation) \u00b7 10% accent (CTA). If the "Buy" button is 30% and background is 10%, the inversion kills hierarchy. Test: look at the home screen from 2 metres away. Just one dominant surface visible? \u2014 proportions work.',
            },
            {
              text: 'Define feedback colors: success, error, warning, info',
              demo: '**Success** = green (#10B981). **Error** = red (#EF4444). **Warning** = amber/orange (#F59E0B). **Info** = blue (#3B82F6). This is a **universal pattern** \u2014 don\'t reinvent it. Tailwind / Material 3 / Apple HIG all use the same hues for feedback states.',
            },
            {
              text: 'Check text contrast against WCAG AA (\u2265 4.5:1) for body text; AAA (\u2265 7:1) when you can',
              demo: 'Paste hex pairs into [WebAIM Contrast Checker \u2197](https://webaim.org/resources/contrastchecker/) \u2014 instant AA/AAA status. Example: `#6B7280` on `#FFFFFF` = 4.72:1 \u2014 passes AA, **fails** AAA. For large text (\u226518pt) the bar is lower \u2014 AA = 3:1, AAA = 4.5:1.',
            },
            {
              text: 'Ensure information is not conveyed by color alone',
              demo: '"Red for error / green for success" \u2014 not enough. Add an icon (\u26a0 / \u2713 / \u2715) and label text. Test: open [Stark Figma plugin \u2197](https://www.getstark.co/) \u2192 enable protanopia/deuteranopia sim \u2192 if the status still reads without color, you\'re passed.',
            },
            {
              text: 'Test the palette through a color blindness simulator',
              demo: '[Stark \u2197](https://www.getstark.co/) \u2014 for Figma/Sketch. [Coblis \u2197](https://www.color-blindness.com/coblis-color-blindness-simulator/) \u2014 online simulator on a PNG. Check all 3 types: protanopia, deuteranopia, tritanopia. 8% of men is your audience.',
            },
            {
              text: 'Create dark theme variants',
              demo: 'Do **not** use `invert: 100%`! Drop saturation 20\u201340%, raise lightness of the base. Pure `#FF0000` on `#121212` "vibrates" \u2014 replace with `hsl(0, 70%, 60%)`. Reference: [Material Design 3 dark mode \u2197](https://m3.material.io/styles/color/dark-mode).',
            },
            {
              text: 'Do not use pure black (#000) or pure white (#FFF)',
              demo: 'Pure black + white text = 21:1 contrast. Eyes burn in minutes. Tailwind, Material 3, Apple HIG all use `#0F0F0F` or `#121212` for dark and `#FAFAFA` for light. Contrast 19:1 \u2014 still AAA, but your eyes don\'t melt.',
            },
            {
              text: 'Test the palette on a real device under different lighting',
              demo: 'Open the mockup on an iPhone outside in sunlight near a window \u2014 then in a room with a single lamp. Colors that look great on a retina monitor in a studio can lose contrast outside. Actually walk around with the prototype \u2014 see it in the sun.',
            },
            {
              text: 'Document the palette: CSS variables / Design Tokens in Figma',
              demo: 'CSS: `--color-primary: #4A90D9; --color-primary-light: hsl(210, 60%, 70%);` etc. In Figma \u2014 **Color Variables** with semantic aliases (`--bg-card`, `--text-primary`, `--border-default`). Reference: [Tailwind palette docs \u2197](https://tailwindcss.com/docs/customizing-colors) \u2014 50\u2013950 scale structure per hue.',
            },
            {
              text: 'Get a review from a colleague or mentor before finalizing',
              demo: 'Show 3 people: a designer, a developer, and someone from the target audience. Ask each: "What color did you notice first? What second? What do you feel like clicking first?" If answers diverge \u2014 hierarchy is broken. Show it in greyscale too \u2014 does structure read without color? If yes, the design is robust.',
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // === VIDEOS ===
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=9S8LGdpNh4Q',
          title: 'How to Choose Colors \u2014 Design Course',
          caption:
            'A step-by-step process for creating a UI color palette',
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=eqZqx6lRPe0',
          title: 'Dark Mode Design \u2014 Tips & Tricks',
          caption:
            'How to properly adapt a palette for dark theme',
        },
        {
          type: 'divider' as const,
        },

        // === BEFORE-AFTER FULL EXAMPLE ===
        {
          type: 'heading' as const,
          content: 'Before and After: A Complete Palette Redesign',
        },
        {
          type: 'before-after' as const,
          title: 'Dental Clinic Landing Page',
          before: {
            label: 'Unprofessional Palette',
            description:
              'Bright red background (#FF0000), yellow text, green buttons. Associations: anxiety, blood, cheapness. Contrast of yellow text on red \u2014 1.5:1 (unreadable). Patients leave the site.',
            visual: {
              kind: 'landing-mock',
              background: '#FF0000',
              heading: 'DENTAL CLINIC #1!!!',
              headingColor: '#FFFF00',
              body: 'Lowest prices in town! Painless extractions! Up to 90% off!',
              bodyColor: '#FFFF00',
              ctaLabel: 'BOOK NOW URGENTLY',
              ctaBg: '#00FF00',
              ctaColor: '#000000',
              accentBg: '#FF00FF',
              paletteSwatches: ['#FF0000', '#FFFF00', '#00FF00', '#FF00FF'],
              footnote: 'yellow on red \u00b7 1.5:1 \u00b7 fails AA',
            },
          },
          after: {
            label: 'Professional Palette',
            description:
              'White background, dark blue text (#1E3A5F), light blue primary (#4A90D9), soft mint accent. Associations: cleanliness, calmness, trust. Text contrast 12.5:1 (AAA). Patients book appointments.',
            visual: {
              kind: 'landing-mock',
              background: '#FFFFFF',
              heading: 'Your healthy smile starts here',
              headingColor: '#1E3A5F',
              body: 'Modern dentistry with care for every patient. Painless treatment, experienced doctors, results you can trust.',
              bodyColor: '#4A6378',
              ctaLabel: 'Book an appointment',
              ctaBg: '#4A90D9',
              ctaColor: '#FFFFFF',
              accentBg: '#A8E6CF',
              paletteSwatches: ['#FFFFFF', '#1E3A5F', '#4A90D9', '#A8E6CF'],
              footnote: '#1E3A5F on #FFF \u00b7 12.5:1 \u00b7 passes AAA',
            },
          },
        },
        {
          type: 'before-after' as const,
          title: 'Analytics Dashboard',
          before: {
            label: 'Color Overload',
            description:
              'Each widget has its own bright background (red, blue, green, orange). Charts in neon colors. 12+ colors with no system. Eyes fatigue within 5 minutes.',
          },
          after: {
            label: 'Systematized Palette',
            description:
              'Neutral background, cards with subtle shadow. One primary (indigo) for actions. Charts in a sequential scale of a single hue (from light blue to dark blue). 5 colors + neutrals.',
          },
        },
        {
          type: 'divider' as const,
        },

        // === SUMMARY ===
        {
          type: 'heading' as const,
          content: 'Summary: Key Principles of Working with Color',
        },
        {
          type: 'diagram' as const,
          title: 'The Formula for a Successful Color Palette',
          description:
            'Five steps from idea to finished palette',
          items: [
            '1. Determine the mood and industry \u2192 choose a hue range',
            '2. Select a harmony type \u2192 build a palette of 3\u20135 colors',
            '3. Apply the 60-30-10 rule \u2192 distribute across the interface',
            '4. Add feedback colors \u2192 success, error, warning, info',
            '5. Verify accessibility \u2192 contrast, color blindness, dark theme',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'The best way to learn to work with color is to analyze palettes of real products. Install the ColorZilla extension for Chrome and start "deconstructing" the colors of your favorite websites and apps.',
        },
      ],
      quiz: [
        {
          question: 'What does the 60-30-10 rule mean?',
          options: [
            {
              id: 'a',
              text: '60% animations, 30% static, 10% video',
            },
            {
              id: 'b',
              text: '60% dominant color, 30% secondary, 10% accent',
            },
            {
              id: 'c',
              text: '60px heading, 30px subheading, 10px text',
            },
            {
              id: 'd',
              text: '60 colors in a palette, 30 in light theme, 10 in dark theme',
            },
          ],
          correctId: 'b',
          explanation:
            'The 60-30-10 rule defines proportions: 60% is the dominant color (usually background), 30% is secondary (navigation, cards), 10% is accent (buttons, links).',
        },
        {
          question:
            'What is the minimum text contrast required by WCAG AA?',
          options: [
            { id: 'a', text: '2:1' },
            { id: 'b', text: '3:1' },
            { id: 'c', text: '4.5:1' },
            { id: 'd', text: '7:1' },
          ],
          correctId: 'c',
          explanation:
            'WCAG AA requires a contrast of \u2265 4.5:1 for regular text and \u2265 3:1 for large text (\u2265 18pt). WCAG AAA requires \u2265 7:1 for regular text.',
        },
        {
          question: 'What background is recommended for dark theme?',
          options: [
            { id: 'a', text: 'Pure black (#000000)' },
            {
              id: 'b',
              text: 'Dark gray (#121212 or #1E1E1E)',
            },
            { id: 'c', text: 'Dark blue (#000033)' },
            { id: 'd', text: 'Any dark color \u2014 it makes no difference' },
          ],
          correctId: 'b',
          explanation:
            'A pure black background (#000) creates too much contrast with white text \u2014 the eyes fatigue. Dark gray (#121212) is softer and allows building hierarchy through "elevation" of layers.',
        },
        {
          question:
            'Why can\'t information be conveyed by color alone?',
          options: [
            { id: 'a', text: 'It looks unattractive' },
            {
              id: 'b',
              text: 'About 8% of men have color vision deficiencies',
            },
            { id: 'c', text: 'Colors look different on different monitors' },
            { id: 'd', text: 'WCAG prohibits the use of color entirely' },
          ],
          correctId: 'b',
          explanation:
            'About 8% of men and 0.5% of women have color vision deficiencies (color blindness). If information is conveyed only by color, these users will not receive it. Always supplement color with text or an icon.',
        },
        {
          question: 'In the 60-30-10 rule, what role does the 30% secondary color usually play?',
          options: [
            { id: 'a', text: 'Main CTA buttons' },
            { id: 'b', text: 'Card backgrounds, navigation, sections — structuring content without dominating' },
            { id: 'c', text: 'Body text' },
            { id: 'd', text: 'Chart and illustration colors' },
          ],
          correctId: 'b',
          explanation:
            '60% — main background (usually neutral). **30% — secondary**, usually navigation, cards, sections, headings — it structures. 10% — accent, primary CTAs and important highlights. Swap 30% and 10% and the interface becomes "noisy" and loses hierarchy.',
        },
        {
          question:
            'What WCAG contrast level is required for text to pass AAA — the strictest tier?',
          options: [
            { id: 'a', text: '3:1' },
            { id: 'b', text: '4.5:1' },
            { id: 'c', text: '7:1' },
            { id: 'd', text: '12:1' },
          ],
          correctId: 'c',
          explanation:
            'AAA = **7:1** for normal-size text (4.5:1 is AA, the minimum). AAA matters for apps aimed at low-vision users, government services, medical and financial platforms. General web is fine at AA. Verify: [WebAIM Contrast Checker ↗](https://webaim.org/resources/contrastchecker/).',
        },
        {
          question: 'What are "vibrating colors" in dark mode?',
          options: [
            { id: 'a', text: 'Colors with CSS animation' },
            { id: 'b', text: 'Highly-saturated colors (like pure #FF0000) on a dark background — the eye perceives them as "vibrating", text becomes hard to read' },
            { id: 'c', text: 'A stroboscopic video effect' },
            { id: 'd', text: 'Colors that change on scroll' },
          ],
          correctId: 'b',
          explanation:
            'On a dark background (#121212) pure #FF0000 or #00FF00 "vibrate" — the edges literally shimmer for the eye due to luminance mismatch. Dark mode rule: **drop saturation 20–40%** and raise lightness. Save pure primary colors for light mode only.',
        },
        {
          question: 'For a sequential data scale (heatmap from low → high), what is the best-practice resource?',
          options: [
            { id: 'a', text: 'Adobe Color' },
            { id: 'b', text: 'Coolors' },
            { id: 'c', text: 'ColorBrewer 2.0 — academic tool for data-viz palettes' },
            { id: 'd', text: 'Any generator will do' },
          ],
          correctId: 'c',
          explanation:
            '[ColorBrewer 2.0 ↗](https://colorbrewer2.org/) by Cynthia Brewer — the academic standard. Palettes are deliberately picked for **sequential** (one scale), **diverging** (two sides of a neutral), and **qualitative** (categorical) — with color-blindness and greyscale printing in mind. Adobe Color and Coolors are built for design, not data-viz.',
        },
      ],
    },
  ],
}
