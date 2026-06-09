import type { Meeting } from '../../types'

export const meeting08: Meeting = {
  id: '8',
  number: 8,
  title: 'Visual Hierarchy',
  description:
    'Principles of visual hierarchy: contrast, size, scanning patterns, Gestalt principles, icons, illustrations, and composition in interfaces.',
  icon: 'Eye',
  color: 'bg-orange-500/10 text-orange-600',
  parts: [
    // =============================================
    // PART 1: Contrast, Size, and Patterns
    // =============================================
    {
      id: 'part-1',
      title: 'Contrast, Size, and Patterns',
      subtitle: 'Principles of visual hierarchy, F/Z-patterns, and Gestalt principles',
      duration: '45 min',
      sections: [
        // === INTRODUCTION ===
        {
          type: 'heading' as const,
          content: 'What Is Visual Hierarchy',
        },
        {
          type: 'text' as const,
          content:
            'Every time you open a website or app, your brain decides where to look first in a **split second**. This is not random — it is the result of **visual hierarchy**. A designer controls the user\'s attention by arranging elements in order of importance using contrast, size, color, and placement.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'Visual hierarchy is a "roadmap" for the user\'s eyes. Without it, the interface turns into chaos where everything screams equally loud.',
        },
        {
          type: 'quote' as const,
          text: 'Design is not decoration. Design is communication.',
          author: 'Mike Monteiro',
          role: 'Author of "Design Is a Job"',
        },
        {
          type: 'image' as const,
          src: '/images/meeting-08-visual-hierarchy.webp',
          alt: 'Example: the same page with and without visual hierarchy',
          caption: 'Left — chaos without hierarchy. Right — a clearly structured interface.',
        },
        {
          type: 'divider' as const,
        },

        // === 9 CORE VISUAL ELEMENTS ===
        {
          type: 'heading' as const,
          content: 'What every design is built from: the 9 core elements',
        },
        {
          type: 'text' as const,
          content:
            'Before you can build a hierarchy, you need to know **what it is built from**. Every interface, poster or illustration is a combination of just **9 visual elements**. Strong designers pick them deliberately; beginners grab everything and wonder why nothing reads.',
        },
        {
          type: 'nine-visual-elements' as const,
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'Whenever you see an interface and think "looks great, but why?" — break it apart into these 9 elements. Which are active, which are dialed down, which are missing entirely? It is the shortest exercise that trains your design eye.',
        },
        {
          type: 'divider' as const,
        },

        // === SIZE CONTRAST ===
        {
          type: 'heading' as const,
          content: 'Tool #1: Size Contrast',
        },
        {
          type: 'text' as const,
          content:
            '**Size** is the most powerful hierarchy tool. Larger elements attract attention first. A 48px heading always "shouts" louder than 14px body text. The difference between levels should be **noticeable** — at least a 1.5x difference for clear separation.',
        },
        {
          type: 'before-after' as const,
          title: 'Size contrast in headings',
          before: {
            label: 'No contrast',
            description:
              'Heading 18px, subheading 16px, body 15px — all elements are nearly the same size, the user cannot tell what is more important.',
          },
          after: {
            label: 'With contrast',
            description:
              'Heading 36px bold, subheading 20px medium, body 16px regular — three clear levels, the eye instantly reads the structure.',
          },
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            'Apple.com is a master of size contrast. On the iPhone page, the heading "iPhone 16 Pro" takes up enormous space, while technical details are set in small type. You **first** see the name, **then** read the details.',
        },
        {
          type: 'divider' as const,
        },

        // === COLOR CONTRAST ===
        {
          type: 'heading' as const,
          content: 'Tool #2: Color Contrast',
        },
        {
          type: 'text' as const,
          content:
            '**Color** attracts attention instantly. A bright accent element on a neutral background immediately becomes the focal point. But color contrast works not only through brightness — **saturation** and **temperature** (warm vs cool) also create hierarchy.',
        },
        {
          type: 'before-after' as const,
          title: 'Color accent in a CTA button',
          before: {
            label: 'Weak contrast',
            description:
              'A gray "Buy" button on a gray background — it blends in with the surroundings, the user does not notice the call to action.',
          },
          after: {
            label: 'Strong contrast',
            description:
              'A bright blue "Buy" button on a white background — it instantly attracts the eye, conversion increases by 20-30%.',
          },
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Accent color',
              definition: 'A single bright color that highlights key actions (CTA, links, notifications).',
            },
            {
              term: 'Contrast ratio',
              definition: 'WCAG requires a minimum of 4.5:1 for text and 3:1 for large text (18px+). This is not just about accessibility — it is about readability.',
            },
            {
              term: 'Color temperature',
              definition: 'Warm colors (red, orange) appear closer and more active. Cool colors (blue, green) recede into the background.',
            },
          ],
        },
        {
          type: 'divider' as const,
        },

        // === WEIGHT AND SPACE CONTRAST ===
        {
          type: 'heading' as const,
          content: 'Tool #3: Weight and Whitespace Contrast',
        },
        {
          type: 'text' as const,
          content:
            'Font **weight** creates hierarchy without changing size. Bold, semibold, regular, light — four levels of text "loudness." And **whitespace** around an element increases its perceived importance: the more "air," the more important the element.',
        },
        {
          type: 'before-after' as const,
          title: 'Whitespace as a hierarchy tool',
          before: {
            label: 'Everything crammed together',
            description:
              'Heading, text, button, and image with no spacing — visual clutter, the eye does not know where to stop.',
          },
          after: {
            label: 'Generous spacing',
            description:
              'Heading with 48px top margin, text with 24px, button with 32px — each element "breathes," the hierarchy is obvious.',
          },
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'The Stripe designers\' rule: "When in doubt — add more whitespace." Space is a free resource that makes an interface feel premium.',
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=wIuVvCuiJhU',
          title: 'Visual Hierarchy in Design — Juxtopposed',
          caption: 'A detailed breakdown of visual hierarchy tools with real product examples.',
        },
        {
          type: 'divider' as const,
        },

        // === F-PATTERN ===
        {
          type: 'heading' as const,
          content: 'F-Pattern and Z-Pattern: How Eyes Move',
        },
        {
          type: 'text' as const,
          content:
            '**Eye-tracking** research has shown that users scan pages in predictable patterns. The two main ones are the **F-pattern** for text-heavy pages and the **Z-pattern** for landing pages and advertisements.',
        },
        {
          type: 'subheading' as const,
          content: 'F-Pattern (text content)',
        },
        {
          type: 'text' as const,
          content:
            'When reading text-heavy pages (articles, search results), the eye moves in an **F** shape: a horizontal line at the top, a second horizontal line slightly below, then a vertical scan down the left edge. This means the **first words of each paragraph** are critically important — the user may not read a line to the end.',
        },
        {
          type: 'diagram' as const,
          title: 'F-pattern scanning',
          description: 'How the user\'s eyes move across a text page',
          items: [
            '-> Horizontal line at the top (heading, first line)',
            '-> Second horizontal line (subheading, start of second paragraph)',
            'v Vertical scan of the left edge (line beginnings, lists)',
            'x Bottom-right corner — "dead zone," the eye rarely reaches here',
          ],
        },
        {
          type: 'case-study' as const,
          title: 'F-Pattern in Google search results',
          company: 'Google',
          problem: 'How to arrange 10 search results so the user quickly finds the right one?',
          solution:
            'Google leverages the F-pattern: link headings (blue) form the first "horizontal," descriptions form the second, and the vertical scan lets users quickly skim all results.',
          result: 'Average time to click is under 8 seconds. Users scan 3-5 results within seconds.',
        },
        {
          type: 'subheading' as const,
          content: 'Z-Pattern (visual content)',
        },
        {
          type: 'text' as const,
          content:
            'On pages with minimal text (landing pages, ads, hero sections), the eye moves in a **Z** shape: top-left corner, top-right, diagonal down, bottom-left, bottom-right. This is why the **logo** goes in the top left and the **CTA button** in the bottom right.',
        },
        {
          type: 'before-after' as const,
          title: 'Landing page using the Z-pattern',
          before: {
            label: 'Against the pattern',
            description:
              'Logo in the bottom right, CTA button in the top left, heading in the center — the user is disoriented, conversion drops.',
          },
          after: {
            label: 'Following the Z-pattern',
            description:
              'Logo top-left -> navigation top-right -> heading center -> CTA button bottom-right — natural eye movement, conversion +35%.',
          },
        },
        {
          type: 'image' as const,
          src: '/images/meeting-08-f-z-patterns.webp',
          alt: 'Heatmap comparison of F-pattern and Z-pattern',
          caption: 'F-pattern for text, Z-pattern for landing pages.',
        },
        {
          type: 'divider' as const,
        },

        // === GESTALT PRINCIPLES ===
        {
          type: 'heading' as const,
          content: 'Gestalt Principles of Perception',
        },
        {
          type: 'text' as const,
          content:
            '**Gestalt psychology** (from the German Gestalt — "form, shape") studies how the brain groups individual elements into coherent wholes. Designers use these principles to create intuitively understandable interfaces **without a single word of explanation**.',
        },
        {
          type: 'diagram' as const,
          title: 'Gestalt principles in interface design',
          description: 'Six key principles and how they work in UI',
          items: [
            'Proximity — elements placed close together are perceived as a group. Example: form fields with labels.',
            'Similarity — identical elements are perceived as related. Example: all buttons in the same style.',
            'Closure — the brain fills in missing parts. Example: the IBM logo made of stripes.',
            'Continuity — the eye follows lines and curves. Example: horizontal card scroll.',
            'Figure-Ground — the brain separates an object from its background. Example: a modal window over a dimmed background.',
            'Symmetry — symmetrical elements are perceived as a related, balanced group. Example: paired "Cancel / OK" buttons.',
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-08-gestalt-principles.webp',
          alt: 'Six gestalt-principle illustrations: Good Figure, Proximity, Similarity, Continuation, Closure, Symmetry',
          caption: 'Six gestalt principles of perception in design.',
        },
        {
          type: 'subheading' as const,
          content: 'Principle of Proximity',
        },
        {
          type: 'text' as const,
          content:
            'Elements placed **close to each other** are automatically perceived as a group. This is the most important Gestalt principle for UI: it determines which form fields belong to one block and which cards belong to one category.',
        },
        {
          type: 'before-after' as const,
          title: 'Proximity in a registration form',
          before: {
            label: 'Equal spacing',
            description:
              'All form fields (name, email, password, city, phone) are placed with equal 16px spacing — it is unclear that "Name + Email" are personal data and "Password" is security.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#FFFFFF',
              rows: [
                { text: '▢ Name', fontSize: 13, color: '#475569' },
                { text: '▢ Email', fontSize: 13, color: '#475569', marginTop: 16 },
                { text: '▢ Password', fontSize: 13, color: '#475569', marginTop: 16 },
                { text: '▢ Confirm password', fontSize: 13, color: '#475569', marginTop: 16 },
                { text: '▢ Phone', fontSize: 13, color: '#475569', marginTop: 16 },
                { text: '▢ City', fontSize: 13, color: '#475569', marginTop: 16 },
              ],
              footnote: 'every gap = 16px · 6 fields as one "wall" · no groups visible',
            },
          },
          after: {
            label: 'Grouping through spacing',
            description:
              '"Personal Data" group (name, email) with 8px between fields. 32px gap. "Security" group (password, confirmation). 32px gap. "Contacts" group (phone, city). The structure is obvious.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#FFFFFF',
              rows: [
                { text: 'PERSONAL DATA', fontSize: 10, fontWeight: 'semibold', color: '#94A3B8', letterSpacing: '0.08em', textTransform: 'uppercase' },
                { text: '▢ Name', fontSize: 13, color: '#475569', marginTop: 8 },
                { text: '▢ Email', fontSize: 13, color: '#475569', marginTop: 8 },
                { text: 'SECURITY', fontSize: 10, fontWeight: 'semibold', color: '#94A3B8', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 28 },
                { text: '▢ Password', fontSize: 13, color: '#475569', marginTop: 8 },
                { text: '▢ Confirm password', fontSize: 13, color: '#475569', marginTop: 8 },
                { text: 'CONTACTS', fontSize: 10, fontWeight: 'semibold', color: '#94A3B8', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 28 },
                { text: '▢ Phone', fontSize: 13, color: '#475569', marginTop: 8 },
                { text: '▢ City', fontSize: 13, color: '#475569', marginTop: 8 },
              ],
              footnote: '8px inside groups · 32px between · 3 groups read instantly',
            },
          },
        },
        {
          type: 'subheading' as const,
          content: 'Principle of Similarity',
        },
        {
          type: 'text' as const,
          content:
            'Elements of the same **color, shape, or size** are perceived as related. In interfaces, this means: all clickable elements are the same color, all headings share the same style, all cards follow the same format.',
        },
        {
          type: 'before-after' as const,
          title: 'Similarity in product cards',
          before: {
            label: 'Mixed styles',
            description:
              'One card with a shadow, another with a border, a third with no frame. One with a round image, another with a square. The user does not perceive them as a unified catalog.',
          },
          after: {
            label: 'Consistent style',
            description:
              'All cards: white background, shadow-md, rounded-xl, 1:1 image, 18px semibold title, 24px bold price. Instantly reads as a catalog.',
          },
        },
        {
          type: 'subheading' as const,
          content: 'Figure-Ground Principle',
        },
        {
          type: 'text' as const,
          content:
            'The brain **automatically** separates an image into "figure" (the main object) and "ground." In UI this is critical for **modal windows**, **dropdown menus**, and **tooltips** — they must clearly "stand out" above the rest of the content.',
        },
        {
          type: 'before-after' as const,
          title: 'Figure-ground in a modal window',
          before: {
            label: 'Weak separation',
            description:
              'A modal window without a dimmed background, thin border — it blends with the page, the user does not realize it is layered above the main content.',
          },
          after: {
            label: 'Clear separation',
            description:
              'A modal window with a bg-black/50 backdrop, shadow-2xl, rounded-2xl — it instantly "pops" to the foreground, the background recedes.',
          },
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=DwR0SZTBMTU',
          title: 'Gestalt Principles for UI Design',
          caption: 'Practical application of Gestalt principles in web design.',
        },
        {
          type: 'divider' as const,
        },

        // === COGNITIVE PSYCHOLOGY LAWS ===
        {
          type: 'heading' as const,
          content: 'Psychology laws in UI: Fitts, Hick, Miller',
        },
        {
          type: 'text' as const,
          content:
            'Gestalt principles cover **how the brain groups** what it sees. But there are also three "laws" that **dictate sizes, counts, and speed**. You do not memorize them — you understand them once, and they start answering "how big should this CTA be?", "how many menu items?", "how many steps in this form?".',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Fitts\'s Law',
              definition:
                '**Time to reach a target ∝ distance / size**. The bigger the element and the closer to the finger/cursor, the faster you hit it. So the primary CTA is large and near the thumb; "Delete account" is small and far away.',
            },
            {
              term: 'Hick\'s Law',
              definition:
                '**Decision time ∝ log₂(options)**. Doubling the choices adds one tick. A 5-item menu is fast, a 20-item menu paralyzes. Group into 5–7, hide rare features behind "More".',
            },
            {
              term: 'Miller\'s Law (7±2)',
              definition:
                'Working memory holds **7 ± 2 items** at once. A long card number is chunked into 4 groups of 4. A long form into 3–5 field steps. A nav menu stays under 7 items per level.',
            },
            {
              term: 'Jakob\'s Law',
              definition:
                '**Users spend most of their time on OTHER sites, not yours**. They arrive with built-in expectations: logo left, cart right, search up top. Breaking conventions = learning tax = churn. Invent something new only when the gain ≥ the re-learning cost.',
            },
          ],
        },
        {
          type: 'before-after' as const,
          title: 'Fitts\'s Law — CTA size on mobile',
          before: {
            label: 'Weak Fitts',
            description:
              'A 28×80px CTA in the top-right corner. The thumb has to reach across the screen, hits are unreliable. Conversion drops 15-25% vs. optimal geometry.',
            visual: {
              kind: 'typography-stack',
              frame: 'phone',
              rows: [
                { text: 'Order summary', fontSize: 16, fontWeight: 'bold', color: '#0F172A' },
                { text: 'Latte × 2 · $9.40', fontSize: 13, color: '#64748B', marginTop: 8 },
                { text: 'Croissant · $3.20', fontSize: 13, color: '#64748B', marginTop: 4 },
                { text: 'Total · $12.60', fontSize: 14, fontWeight: 'semibold', color: '#0F172A', marginTop: 12 },
              ],
              cta: { label: 'Pay', bg: '#4F46E5', color: '#FFFFFF', size: 11 },
              footnote: 'button ≈ 28px tall · easy to miss with a thumb',
            },
          },
          after: {
            label: 'Strong Fitts',
            description:
              'A 48×288px CTA spanning the full width, pinned to the bottom. The thumb naturally rests on it — one-handed reach without shifting your grip. Apple HIG minimum 44pt, Material 48dp.',
            visual: {
              kind: 'typography-stack',
              frame: 'phone',
              rows: [
                { text: 'Order summary', fontSize: 16, fontWeight: 'bold', color: '#0F172A' },
                { text: 'Latte × 2 · $9.40', fontSize: 13, color: '#64748B', marginTop: 8 },
                { text: 'Croissant · $3.20', fontSize: 13, color: '#64748B', marginTop: 4 },
                { text: 'Total · $12.60', fontSize: 14, fontWeight: 'semibold', color: '#0F172A', marginTop: 12 },
              ],
              cta: { label: 'Pay $12.60', bg: '#4F46E5', color: '#FFFFFF', size: 16 },
              footnote: 'button 48px tall · full width · in the thumb-zone · cannot miss',
            },
          },
        },
        {
          type: 'before-after' as const,
          title: 'Hick\'s Law — top-level navigation',
          before: {
            label: 'Weak Hick',
            description:
              '14 items in a horizontal nav with no grouping. Users scan all 14, taking 2-3 seconds to decide. On mobile this collapses into a hamburger with a long list — even worse.',
            visual: {
              kind: 'typography-stack',
              frame: 'plain',
              rows: [
                { text: 'Home · Products · Solutions · Industries · Resources · Pricing · Customers · Partners · Developers · About · Blog · Careers · Support · Login', fontSize: 12, color: '#475569', lineHeight: 1.6 },
              ],
              footnote: '14 items · log₂(14) ≈ 3.8 ticks · paralysis',
            },
          },
          after: {
            label: 'Strong Hick',
            description:
              '5 top-level items (Hick fires instantly, log₂(5) ≈ 2.3), rare features tucked under Resources/More. Less cognitive load, faster access to key sections.',
            visual: {
              kind: 'typography-stack',
              frame: 'plain',
              rows: [
                { text: 'Product   ·   Solutions   ·   Pricing   ·   Resources ▾   ·   Login', fontSize: 14, fontWeight: 'semibold', color: '#0F172A', lineHeight: 1.6 },
                { text: '↑ 5 top-level items. Everything else lives under "Resources ▾".', fontSize: 11, color: '#94A3B8', marginTop: 8 },
              ],
              footnote: '5 items · log₂(5) ≈ 2.3 ticks · instant choice',
            },
          },
        },
        {
          type: 'before-after' as const,
          title: 'Miller\'s Law — onboarding form length',
          before: {
            label: 'Weak Miller',
            description:
              'One page with 12 required fields in a row: first name, last name, email, phone, company, role, company size, industry, country, city, interest, source. Users see a "wall" and bounce.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              rows: [
                { text: 'Sign up · Step 1 of 1', fontSize: 12, fontWeight: 'semibold', color: '#64748B', letterSpacing: '0.05em', textTransform: 'uppercase' },
                { text: 'Tell us about yourself', fontSize: 22, fontWeight: 'bold', color: '#0F172A', marginTop: 8 },
                { text: '☐ First name  ☐ Last name  ☐ Email  ☐ Phone  ☐ Company  ☐ Job title  ☐ Company size  ☐ Industry  ☐ Country  ☐ City  ☐ Interest  ☐ Source', fontSize: 12, color: '#475569', lineHeight: 1.8, marginTop: 12 },
              ],
              footnote: '12 fields at once · brain sees "too much" and gives up',
            },
          },
          after: {
            label: 'Strong Miller',
            description:
              'The same 12 fields split into 3 steps of 4 (You · Company · Goals). Each screen fits inside working memory. Progress is visible, "almost done" feeling — completion rate 2-3× higher.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              rows: [
                { text: 'Sign up · Step 1 of 3', fontSize: 12, fontWeight: 'semibold', color: '#4F46E5', letterSpacing: '0.05em', textTransform: 'uppercase' },
                { text: 'About you', fontSize: 22, fontWeight: 'bold', color: '#0F172A', marginTop: 8 },
                { text: '☐ First name', fontSize: 13, color: '#475569', lineHeight: 1.7, marginTop: 12 },
                { text: '☐ Last name', fontSize: 13, color: '#475569', lineHeight: 1.7 },
                { text: '☐ Email', fontSize: 13, color: '#475569', lineHeight: 1.7 },
                { text: '☐ Phone', fontSize: 13, color: '#475569', lineHeight: 1.7 },
                { text: '●○○  ← progress indicator', fontSize: 11, color: '#94A3B8', marginTop: 12 },
              ],
              cta: { label: 'Next →', bg: '#4F46E5', color: '#FFFFFF', size: 13 },
              footnote: '4 fields per step · ≤ 7±2 · visible progress · users complete',
            },
          },
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**These four laws are your first "engineering" toolkit for UX.** When a design "looks fine but conversion is bad" — run it through them: is the CTA hittable (Fitts), are users overloaded with choices (Hick), is working memory blown (Miller), are conventions broken (Jakob). 9 out of 10 entry-level UX mistakes are violations of one of these four.',
        },
        {
          type: 'divider' as const,
        },

        // === CASE STUDIES ===
        {
          type: 'heading' as const,
          content: 'Case Studies: Visual Hierarchy in Real Products',
        },
        {
          type: 'case-study' as const,
          title: 'Airbnb — hierarchy in a listing card',
          company: 'Airbnb',
          image: '/images/meeting-08-airbnb-listing.webp',
          imageAlt: 'Airbnb listing card: hero photo with a "Guest favorite" badge, title, rating on the right, gray description, and an underlined price',
          problem: 'How to fit a photo, title, rating, description, and price into one card — without overwhelming the user?',
          solution:
            'Airbnb uses strict hierarchy: 1) hero photo (~60% of the card) with a "Guest favorite" badge and a favorite icon; 2) title — bold, left-aligned; 3) rating — star + number (4.92) on the right, on the same line as the title; 4) description — gray supporting text below the title; 5) price — bold and underlined, bottom-left.',
          result: 'The user reads key information in 2-3 seconds. Card conversion is 40% higher than competitors with "flat" listings.',
          steps: [
            { title: 'Hero photo', description: 'Takes up ~60% of the card + a "Guest favorite" badge and a heart — the main "hook"' },
            { title: 'Title', description: 'Bold, left-aligned, directly below the photo ("Apartment in Mexico City")' },
            { title: 'Rating', description: '★ + number (4.92) on the right, on the same line as the title — edge-aligned' },
            { title: 'Description', description: 'Gray supporting text: neighborhood, cancellation terms' },
            { title: 'Price', description: 'Bold and underlined, bottom-left — the first thing the eye catches after the photo' },
          ],
        },
        {
          type: 'case-study' as const,
          title: 'Notion — hierarchy through typography',
          company: 'Notion',
          problem: 'How to create a readable document without rigid visual frames and borders?',
          solution:
            'Notion relies on pure typography: H1 (40px bold) -> H2 (30px semibold) -> H3 (24px medium) -> body (16px regular). Hierarchy is created exclusively through font size and weight.',
          result: 'Notion became the documentation standard in IT. Users intuitively create structured documents thanks to the built-in visual hierarchy.',
        },
        {
          type: 'divider' as const,
        },

        // === CHECKLIST ===
        {
          type: 'checklist' as const,
          title: 'Checklist: visual hierarchy review',
          items: [
            'Is there one main element (focal point) on the page?',
            'Can you understand what the page is about within 5 seconds?',
            'Are heading sizes at least 1.5x larger than body text?',
            'Is the CTA button the most contrasting element on screen?',
            'Are elements grouped by meaning (proximity principle)?',
            'Do similar elements look the same (similarity principle)?',
            'Are there no more than 3-4 hierarchy levels on the page?',
          ],
        },
      ],
      quiz: [
        {
          question: 'Which scanning pattern is typical for text-heavy pages (articles, search results)?',
          options: [
            { id: 'a', text: 'Z-pattern' },
            { id: 'b', text: 'F-pattern' },
            { id: 'c', text: 'Circular pattern' },
            { id: 'd', text: 'Diagonal pattern' },
          ],
          correctId: 'b',
          explanation:
            'The F-pattern is characteristic of text content: two horizontal lines at the top and a vertical scan down the left edge. The Z-pattern is used for visual landing pages.',
        },
        {
          question: 'Which Gestalt principle explains why a modal window with a dimmed background is perceived as being "on top of" the page?',
          options: [
            { id: 'a', text: 'Proximity' },
            { id: 'b', text: 'Similarity' },
            { id: 'c', text: 'Figure-Ground' },
            { id: 'd', text: 'Closure' },
          ],
          correctId: 'c',
          explanation:
            'The figure-ground principle: the brain automatically separates an image into the main object (modal window) and the background (dimmed page). Dimming the background reinforces this effect.',
        },
        {
          question: 'What is the minimum text contrast ratio required by WCAG 2.1 Level AA for regular text?',
          options: [
            { id: 'a', text: '2:1' },
            { id: 'b', text: '3:1' },
            { id: 'c', text: '4.5:1' },
            { id: 'd', text: '7:1' },
          ],
          correctId: 'c',
          explanation:
            'WCAG 2.1 AA requires a minimum contrast ratio of 4.5:1 for regular text and 3:1 for large text (18px+ or 14px bold). Level AAA requires 7:1.',
        },
        {
          question: 'Why do Stripe designers recommend "when in doubt — add more whitespace"?',
          options: [
            { id: 'a', text: 'White space saves bandwidth' },
            { id: 'b', text: 'Space around an element increases its perceived importance and creates a premium feel' },
            { id: 'c', text: 'Users prefer empty pages' },
            { id: 'd', text: 'It reduces load time' },
          ],
          correctId: 'b',
          explanation:
            'Whitespace is a powerful visual hierarchy tool. Space around an element highlights it, creates "breathing room," and a sense of quality. Premium brands always use generous spacing.',
        },
        {
          question: 'A nav menu grew to 16 items and users now take longer to choose. Which law explains it and what do you do?',
          options: [
            { id: 'a', text: 'Fitts\'s Law — make the menu items bigger' },
            { id: 'b', text: 'Hick\'s Law — choice time grows with options; group into 5-7 items, hide rare ones under "More"' },
            { id: 'c', text: 'Miller\'s Law — add more items to reach exactly 20' },
            { id: 'd', text: 'Jakob\'s Law — make the menu different from competitors' },
          ],
          correctId: 'b',
          explanation:
            'Hick\'s Law: decision time ∝ log₂(options). 16 items = a long scan. Group into 5-7 per level, hide rare features under "More"/"Resources".',
        },
        {
          question: 'A designer places a 28px "Pay" CTA in the top corner of a mobile screen. Which principle is violated?',
          options: [
            { id: 'a', text: 'Fitts\'s Law — the target is small and far from the thumb zone, hard to hit' },
            { id: 'b', text: 'Gestalt proximity' },
            { id: 'c', text: 'Rule of thirds' },
            { id: 'd', text: 'Nothing — that is fine' },
          ],
          correctId: 'a',
          explanation:
            'Fitts\'s Law: time-to-target ∝ distance / size. A small button far from the thumb = misses and frustration. A primary mobile CTA should be large (44-48px min) in the bottom thumb-zone.',
        },
        {
          question: 'Which of these is NOT one of the 9 core visual elements?',
          options: [
            { id: 'a', text: 'Point' },
            { id: 'b', text: 'Texture' },
            { id: 'c', text: 'Value (lightness)' },
            { id: 'd', text: 'Conversion' },
          ],
          correctId: 'd',
          explanation:
            'The 9 core elements: point, line, shape, form, color, value, texture, space, type. Conversion is a business metric, not a visual element.',
        },
        {
          question: 'A card feed feels "jolty": card heights and gaps between them vary. Which composition principle is broken?',
          options: [
            { id: 'a', text: 'Rhythm — repeated intervals create predictability and easy scanning' },
            { id: 'b', text: 'Radial balance' },
            { id: 'c', text: 'Figure-ground' },
            { id: 'd', text: 'Golden ratio' },
          ],
          correctId: 'a',
          explanation:
            'Rhythm is the repetition of elements at consistent intervals. When gaps and heights "drift," the eye stumbles. Equal card height + a constant gap (e.g. 16px) = a steady "beat" and fast scanning.',
        },
      ],
    },

    // =============================================
    // PART 2: Icons, Illustrations, and Composition
    // =============================================
    {
      id: 'part-2',
      title: 'Icons, Illustrations, and Composition',
      subtitle: 'Icon systems, illustration styles, and composition principles in interfaces',
      duration: '45 min',
      sections: [
        // === INTRODUCTION ===
        {
          type: 'heading' as const,
          content: 'Icons in Interfaces: Small but Powerful',
        },
        {
          type: 'text' as const,
          content:
            'Icons are **visual shortcuts**. They save space, speed up recognition, and give the interface personality. But a bad icon is worse than no icon at all — it confuses the user and slows them down.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          content:
            'An icon without a label is only clear if it is **universally recognizable**: magnifying glass = search, trash can = delete, house = home. For everything else — always add a text label.',
        },
        {
          type: 'divider' as const,
        },

        // === ICON STYLES ===
        {
          type: 'heading' as const,
          content: 'Three Icon Styles: Line, Filled, Duotone',
        },
        {
          type: 'text' as const,
          content:
            'Modern UI design distinguishes three main icon styles. Each style creates a different mood and is suited for different contexts. The key rule is to **never mix styles** within one interface.',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'Line (outline)',
              items: [
                'Thin lines without fill',
                'Light, airy feel',
                'Great for light themes',
                'Examples: Lucide, Feather, Phosphor Light',
                'Best for: SaaS, dashboards, minimalism',
              ],
            },
            {
              title: 'Filled (solid)',
              items: [
                'Solid shape fill',
                'Heavy, "weighty" icons',
                'Highly visible on bright backgrounds',
                'Examples: Material Filled, Font Awesome Solid',
                'Best for: mobile apps, navigation bars',
              ],
            },
            {
              title: 'Duotone (two-tone)',
              items: [
                'Two colors/shades in one icon',
                'Modern, stylish look',
                'Add depth and character',
                'Examples: Phosphor Duotone, Hero Icons',
                'Best for: landing pages, marketing, features',
              ],
            },
          ],
        },
        {
          type: 'before-after' as const,
          title: 'Mixing icon styles',
          before: {
            label: 'Mixed styles',
            description:
              'In navigation: "Home" — line, "Search" — filled, "Profile" — duotone, "Cart" — line with a different stroke width. Chaotic and unprofessional.',
          },
          after: {
            label: 'Consistent style',
            description:
              'All navigation icons — line, stroke-width 1.5, size 24px, color gray-600 (active: blue-600). A cohesive, professional look.',
          },
        },
        {
          type: 'divider' as const,
        },

        // === ICON CONSISTENCY ===
        {
          type: 'heading' as const,
          content: 'Icon Consistency: 5 Rules',
        },
        {
          type: 'text' as const,
          content:
            'Even after choosing a single style, you can still break consistency. Here are **5 rules** that guarantee your icons will look like a unified system rather than a random collection.',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Uniform grid size',
              definition: 'All icons are drawn on the same grid (typically 24x24 or 20x20 px). Even if the visual size differs, the bounding box stays the same.',
            },
            {
              term: 'Consistent stroke width',
              definition: 'Stroke width of 1.5px or 2px for all icons. Mixing 1px and 3px icons destroys unity.',
            },
            {
              term: 'Uniform corner style',
              definition: 'If corners are rounded — all icons are rounded. If sharp — all sharp. Do not mix.',
            },
            {
              term: 'Optical balance',
              definition: 'Triangular icons (play) should be slightly larger than square ones (stop) so they appear the same size.',
            },
            {
              term: 'One library',
              definition: 'Use icons from a single set (Lucide, Phosphor, Material). Do not mix Font Awesome with Feather.',
            },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'Lucide Icons is the recommended library for React projects. 1400+ icons, consistent style, tree-shakable, MIT license. Install: npm install lucide-react.',
        },
        {
          type: 'divider' as const,
        },

        // === ILLUSTRATIONS ===
        {
          type: 'heading' as const,
          content: 'Illustrations: When Icons Are Not Enough',
        },
        {
          type: 'text' as const,
          content:
            '**Illustrations** convey emotions, tell stories, and create brand identity. They appear on empty states, onboarding screens, error pages, and marketing pages. Unlike icons, illustrations are **unique** to the brand.',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'When to use icons',
              items: [
                'Navigation and actions (menus, buttons)',
                'Status and states (success, error)',
                'Lists and categories',
                'Inputs and forms',
                'When compactness is needed',
              ],
            },
            {
              title: 'When to use illustrations',
              items: [
                'Empty states',
                'Onboarding and tutorials',
                'Error pages (404, 500)',
                'Marketing landing pages',
                'When an emotional connection is needed',
              ],
            },
          ],
        },
        {
          type: 'case-study' as const,
          title: 'Slack — illustrations for emotional connection',
          company: 'Slack',
          problem: 'How to make a corporate messenger feel "human" and friendly?',
          solution:
            'Slack uses unique illustrations with soft lines, pastel colors, and "lively" characters. Every empty state is accompanied by an illustration with a positive message.',
          result: 'Slack became one of the most "loved" corporate tools. The illustrations are part of the brand, recognizable even without the logo.',
          steps: [
            { title: 'Empty channel', description: 'Illustration with a cheerful character + "This is the beginning of something wonderful"' },
            { title: 'No search results', description: 'A sad but cute character + a constructive hint' },
            { title: 'Onboarding', description: 'Step-by-step illustrations — each step with a unique character' },
          ],
        },
        {
          type: 'before-after' as const,
          title: 'Empty state: icon vs illustration',
          before: {
            label: 'Icon only',
            description:
              'A gray Inbox icon at 48px + "No messages" text — cold, formal, evokes no emotions.',
          },
          after: {
            label: 'With illustration',
            description:
              'A colorful illustration (person checking mail) + "All caught up! Time for coffee" — warm, friendly, memorable.',
          },
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=9At1yFg901Y',
          title: 'Icon Design',
          caption: 'A masterclass on icon design: grid, consistency, optical balance.',
        },
        {
          type: 'divider' as const,
        },

        // === COMPOSITION ===
        {
          type: 'heading' as const,
          content: 'Composition: How to Arrange Elements Harmoniously',
        },
        {
          type: 'text' as const,
          content:
            '**Composition** is the art of arranging elements on a canvas (screen) to create a harmonious, balanced, and purposeful impression. In UI design, composition determines where the user looks and in what order.',
        },
        {
          type: 'subheading' as const,
          content: 'Rule of Thirds',
        },
        {
          type: 'text' as const,
          content:
            'Divide the screen into **9 equal parts** with two horizontal and two vertical lines. Place key elements at the **intersections** of these lines — these points naturally attract the eye. A hero image with text on the left at the 1/3 intersection is a classic landing page technique.',
        },
        {
          type: 'diagram' as const,
          title: 'Rule of Thirds in UI',
          description: 'Four "power points" at line intersections — ideal placement for key elements',
          items: [
            '┌───────┬───────┬───────┐',
            '│       │       │       │',
            '│   ●   │       │   ●   │  <- top points: logo, CTA',
            '├───────┼───────┼───────┤',
            '│       │       │       │',
            '├───────┼───────┼───────┤',
            '│   ●   │       │   ●   │  <- bottom points: navigation, price',
            '└───────┴───────┴───────┘',
          ],
        },
        {
          type: 'image' as const,
          src: '/images/meeting-08-rule-of-thirds.webp',
          alt: 'Layout with rule-of-thirds grid and power points',
          caption: 'Rule of thirds: key elements sit on the line intersections.',
        },
        {
          type: 'subheading' as const,
          content: 'Golden Ratio',
        },
        {
          type: 'text' as const,
          content:
            'The **golden ratio** (1:1.618) is a proportion found in nature and perceived as harmonious. In UI it is used to determine column ratios (e.g., content 62% + sidebar 38%), font sizes, and spacing.',
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            'Twitter (X) uses the golden ratio in its desktop layout: main feed ~62%, trends sidebar ~38%. This creates a natural balance — content dominates, but the sidebar is not lost.',
        },
        {
          type: 'divider' as const,
        },

        // === VISUAL WEIGHT ===
        {
          type: 'heading' as const,
          content: 'Visual Weight and Balance',
        },
        {
          type: 'text' as const,
          content:
            'Every element on screen has a **visual weight** — a subjective "heaviness" determined by size, color, contrast, and density. A large dark block "weighs" more than a small light one. The designer\'s task is to **balance** these weights so the interface does not "tip" to one side.',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Symmetrical balance',
              definition: 'Elements are mirrored along an axis. Creates a sense of stability and formality. Example: corporate websites, forms.',
            },
            {
              term: 'Asymmetrical balance',
              definition: 'Different elements counterbalance each other (large photo on the left + several text blocks on the right). Creates dynamics and interest.',
            },
            {
              term: 'Radial balance',
              definition: 'Elements radiate from a central point. Rare in UI, but used in dashboards with circular charts.',
            },
          ],
        },
        {
          type: 'before-after' as const,
          title: 'Balance in a landing page hero section',
          before: {
            label: 'Imbalance',
            description:
              'A huge photo on the left (70% width) + a small heading on the right (30%). The page "tips" to the left, the text gets lost.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#FFFFFF',
              rows: [
                { text: '◼ ◼ ◼ photo block (huge) ◼ ◼ ◼', fontSize: 24, fontWeight: 'bold', color: '#312E81', lineHeight: 1.0 },
                { text: 'Tiny headline', fontSize: 12, fontWeight: 'normal', color: '#9CA3AF', marginTop: 8 },
              ],
              footnote: 'photo = 70% · text = 30% · composition tips to the left',
            },
          },
          after: {
            label: 'Asymmetrical balance',
            description:
              'Photo on the left (55%) + large heading, subheading, and CTA button on the right (45%). The photo is "heavier," but three text elements compensate for its weight.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#FFFFFF',
              rows: [
                { text: '◼ photo (55%) ◼', fontSize: 18, fontWeight: 'bold', color: '#312E81' },
                { text: 'Build better products, faster', fontSize: 24, fontWeight: 'bold', color: '#0F172A', lineHeight: 1.1, marginTop: 10 },
                { text: 'A platform that helps teams ship without burnout.', fontSize: 13, color: '#4B5563', lineHeight: 1.4, marginTop: 6 },
              ],
              cta: { label: 'Get started', bg: '#4F46E5', color: '#FFFFFF', size: 13 },
              footnote: 'photo 55% + (heading + subhead + CTA) 45% · three elements offset one',
            },
          },
        },
        {
          type: 'subheading' as const,
          content: 'Three types of balance — visually',
        },
        {
          type: 'before-after' as const,
          title: 'Symmetrical vs Asymmetrical balance',
          before: {
            label: 'Symmetrical (formal)',
            description:
              'Mirrored along a central axis. Reads as **stable, formal, trustworthy**. Fits corporate sites, payment forms, banks. Downside — can feel boring.',
            visual: {
              kind: 'typography-stack',
              frame: 'plain',
              background: '#F8FAFC',
              rows: [
                { text: 'Bank of Trust', fontSize: 22, fontWeight: 'bold', color: '#0F172A', lineHeight: 1.1 },
                { text: 'Secure · Reliable · Since 1872', fontSize: 12, color: '#64748B', marginTop: 8 },
              ],
              cta: { label: 'Open an account', bg: '#1E3A8A', color: '#FFFFFF', size: 13 },
              footnote: 'centered stack · single axis of symmetry · corporate tone',
            },
          },
          after: {
            label: 'Asymmetrical (dynamic)',
            description:
              'Different elements balance each other by visual weight, not geometry. **Energy and motion**, modern feel. Fits startups, product landings, creative agencies.',
            visual: {
              kind: 'typography-stack',
              frame: 'plain',
              background: '#FFFFFF',
              rows: [
                { text: 'NEW · Beta', fontSize: 10, fontWeight: 'semibold', color: '#DC2626', letterSpacing: '0.1em', textTransform: 'uppercase' },
                { text: 'Ship faster, sleep better', fontSize: 26, fontWeight: 'bold', color: '#0F172A', lineHeight: 1.05, marginTop: 6 },
                { text: 'Replace 5 tools with one workflow.', fontSize: 13, color: '#475569', marginTop: 8 },
              ],
              cta: { label: 'Try free →', bg: '#0F172A', color: '#FFFFFF', size: 13 },
              footnote: 'left-aligned · varied element weights · modern/dynamic',
            },
          },
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          content:
            '**Radial balance** is rare in UI but recognizable: a dashboard with a donut chart in the center surrounded by KPIs, the Apple Watch face with a central focal element, a loading screen with a centered spinner. Elements radiate from the center, the eye keeps returning to focus.',
        },
        {
          type: 'divider' as const,
        },

        // === RHYTHM & REPETITION ===
        {
          type: 'heading' as const,
          content: 'Rhythm and repetition',
        },
        {
          type: 'text' as const,
          content:
            'If **balance** is about distributing weight, **rhythm** is about repeating elements at consistent intervals. Rhythm creates **predictability** (the user knows what to expect) and **scannability** (the eye glides across the list). And **repetition** = the same element with the same styling reused across the interface — the foundation of design systems.',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Rhythm',
              definition:
                'Repetition of **intervals** — equal spacing between similar elements. The 8px grid from M7 IS rhythm. A list of 320×180 cards with gap-16px reads like "beat-beat-beat."',
            },
            {
              term: 'Repetition',
              definition:
                'Repetition of **elements** — the same button, icon, or card pattern used in dozens of places. Cuts cognitive load: the user learns it once and applies it everywhere.',
            },
            {
              term: 'Progressive rhythm',
              definition:
                'Intervals or sizes **change by a rule** (e.g. growing by 8px each step). Feels like motion, acceleration. The typographic scale (M7) is a progressive rhythm.',
            },
            {
              term: 'Break the pattern',
              definition:
                'Deliberately breaking the rhythm once draws **all attention**. A contrast-colored CTA in a list of muted rows. Use sparingly and deliberately.',
            },
          ],
        },
        {
          type: 'before-after' as const,
          title: 'Rhythm in a feed list',
          before: {
            label: 'No rhythm',
            description:
              'Cards of different heights, gap drifts (8 / 14 / 22px). The eye stumbles, the list "jolts." Users scan it more slowly.',
            visual: {
              kind: 'typography-stack',
              frame: 'phone',
              rows: [
                { text: '▢ Card · short', fontSize: 14, fontWeight: 'bold', color: '#0F172A' },
                { text: '▢ Card · medium height variant', fontSize: 14, fontWeight: 'bold', color: '#0F172A', marginTop: 8 },
                { text: '▢ Card · tall variant with extra info', fontSize: 14, fontWeight: 'bold', color: '#0F172A', marginTop: 14 },
                { text: '▢ Card · short', fontSize: 14, fontWeight: 'bold', color: '#0F172A', marginTop: 22 },
                { text: '▢ Card · medium', fontSize: 14, fontWeight: 'bold', color: '#0F172A', marginTop: 10 },
              ],
              footnote: 'gap = 8/14/22/10px · no beat',
            },
          },
          after: {
            label: 'With rhythm',
            description:
              'All cards the same height, gap = 16px. The list reads evenly, like a metronome. When you need to highlight something, break the rhythm deliberately (a larger promo card).',
            visual: {
              kind: 'typography-stack',
              frame: 'phone',
              rows: [
                { text: '▢ Card', fontSize: 14, fontWeight: 'bold', color: '#0F172A' },
                { text: '▢ Card', fontSize: 14, fontWeight: 'bold', color: '#0F172A', marginTop: 16 },
                { text: '▢ Card', fontSize: 14, fontWeight: 'bold', color: '#0F172A', marginTop: 16 },
                { text: '▢ Card', fontSize: 14, fontWeight: 'bold', color: '#0F172A', marginTop: 16 },
                { text: '▢ Card', fontSize: 14, fontWeight: 'bold', color: '#0F172A', marginTop: 16 },
              ],
              footnote: 'gap = 16/16/16/16px · steady beat · fast to scan',
            },
          },
        },
        {
          type: 'divider' as const,
        },

        // === POSITIVE & NEGATIVE SPACE ===
        {
          type: 'heading' as const,
          content: 'Positive and negative space',
        },
        {
          type: 'text' as const,
          content:
            '**Positive space** is **what is drawn**: text, buttons, images. **Negative space** (whitespace) is **what is NOT drawn**: the air between elements. Beginners fear the void and fill it. Pros know: **the void is a tool**, not a leftover.',
        },
        {
          type: 'key-concepts' as const,
          concepts: [
            {
              term: 'Whitespace ≠ emptiness',
              definition:
                'It is an active hero of the design, not "what is left over." Apple uses massive air on its product pages — it signals premium.',
            },
            {
              term: 'Macro vs Micro whitespace',
              definition:
                '**Macro** — large gaps between sections (64–128px). Give the page room to breathe. **Micro** — small padding inside components (4–16px). Make each element readable.',
            },
            {
              term: 'Negative space in branding',
              definition:
                'The arrow between E and x in the FedEx logo, the elegant curve in the WWF logo — it is negative space that "makes" them. The eye sees what is not there.',
            },
            {
              term: 'Law of Proximity in action',
              definition:
                'Remember Gestalt proximity? It is exactly the art of managing negative space: close = group, far = separate groups. Covered in M7 P2.',
            },
          ],
        },
        {
          type: 'before-after' as const,
          title: 'Whitespace in a hero section',
          before: {
            label: 'Cramped — no air',
            description:
              'Heading right against the subhead, subhead right against the CTA. Everything "sticks together," the page reads as cheap and stressful. The eye cannot settle.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#FFFFFF',
              rows: [
                { text: 'Modern accounting for modern teams', fontSize: 22, fontWeight: 'bold', color: '#0F172A', lineHeight: 1.15 },
                { text: 'Manage invoices, expenses, and payroll in one place.', fontSize: 13, color: '#475569', lineHeight: 1.35, marginTop: 2 },
              ],
              cta: { label: 'Try it free', bg: '#4F46E5', color: '#FFFFFF', size: 13 },
              footnote: 'gap = 2/0px · glued stack · feels cheap',
            },
          },
          after: {
            label: 'Breathing — space works',
            description:
              'Generous gaps: 16px between heading and subhead, 24px before the CTA. Each element has its own air. The eye focuses step by step — premium feel.',
            visual: {
              kind: 'typography-stack',
              frame: 'browser',
              background: '#FFFFFF',
              rows: [
                { text: 'Modern accounting for modern teams', fontSize: 24, fontWeight: 'bold', color: '#0F172A', lineHeight: 1.1 },
                { text: 'Manage invoices, expenses, and payroll in one place.', fontSize: 14, color: '#475569', lineHeight: 1.5, marginTop: 16 },
              ],
              cta: { label: 'Try it free', bg: '#4F46E5', color: '#FFFFFF', size: 13 },
              footnote: 'gap = 16/24px · elements breathe · premium feel',
            },
          },
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            '**"Remove and look" heuristic:** if you remove an element and the page is not worse — it was clutter. If you remove the air and the page IS worse — that air was working. Train your eye: open 3 favorite product landings and estimate what % of the screen is content vs space. A great landing = ~30-40% content, the rest is whitespace.',
        },
        {
          type: 'divider' as const,
        },

        // === COMPOSITION — EXAMPLES ===
        {
          type: 'heading' as const,
          content: 'Composition in Real Products',
        },
        {
          type: 'case-study' as const,
          title: 'Spotify — playlist card composition',
          company: 'Spotify',
          problem: 'How to display hundreds of playlists so each one draws attention without overwhelming the user?',
          solution:
            'Spotify uses a grid with identical cards (similarity principle), horizontal scrolling (continuity principle), and large cover art with minimal text. Each row is a thematic group (proximity principle).',
          result: 'Users find the right playlist in seconds. Average session time is 26 minutes — one of the best metrics among streaming services.',
        },
        {
          type: 'before-after' as const,
          title: 'Dashboard composition',
          before: {
            label: 'No structure',
            description:
              'All widgets are the same size, placed in random order. Key metrics (revenue, users) get lost among secondary charts.',
          },
          after: {
            label: 'With visual hierarchy',
            description:
              'Main KPIs — large cards at the top (rule of thirds). Charts — middle block. Detailed tables — at the bottom. Z-pattern from KPIs to actions.',
          },
        },
        {
          type: 'case-study' as const,
          title: 'Apple — golden ratio in product design',
          company: 'Apple',
          problem: 'How to create a sense of perfection and harmony on every page of apple.com?',
          solution:
            'Apple applies the golden ratio in hero section proportions, typography sizing (heading/subheading ratio of approximately 1.618), and CTA button placement. Each section is a complete composition.',
          result: 'Apple.com is considered the gold standard of web design. Online sales conversion is among the highest in e-commerce ($394 billion revenue in 2022).',
        },
        {
          type: 'divider' as const,
        },

        // === PRACTICAL TIPS ===
        {
          type: 'heading' as const,
          content: 'Practical Composition Tips',
        },
        {
          type: 'columns' as const,
          columns: [
            {
              title: 'Do',
              items: [
                'Define one focal point per screen',
                'Use a grid (8px or 4px base)',
                'Group related elements together',
                'Leave "breathing room" between groups',
                'Check balance by squinting your eyes',
              ],
            },
            {
              title: 'Avoid',
              items: [
                'Multiple competing focal points',
                'Chaotic layout without a grid',
                'Equal spacing everywhere',
                'Content-packed screens with no pauses',
                'Centering everything "just in case"',
              ],
            },
          ],
        },
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=a5KYlHNKQB8',
          title: 'Composition in Design — The Futur',
          caption: 'Composition principles by Chris Do: balance, contrast, rhythm, movement.',
        },
        {
          type: 'divider' as const,
        },

        // === FINAL CHECKLIST ===
        {
          type: 'heading' as const,
          content: 'Lesson Summary Checklist',
        },
        {
          type: 'checklist' as const,
          title: 'Visual hierarchy: what to check in your design',
          items: [
            'All icons are from a single library and style',
            'Unlabeled icons are only universally understood ones (magnifying glass, house, trash can)',
            'Illustrations are used for emotional moments (empty state, onboarding)',
            'The rule of thirds or golden ratio is applied to key screens',
            'Visual weight is balanced (does not "tip" to one side)',
            'There is a clear focal point on every screen',
            'A 4px or 8px grid is applied to all spacing',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          content:
            'The "squint test": squint while looking at your design. If you see blurred shapes of roughly the same size and brightness — there is no hierarchy. If one shape clearly dominates — the hierarchy works.',
        },
      ],
      quiz: [
        {
          question: 'Why should you not mix icon styles (line + filled + duotone) in one interface?',
          options: [
            { id: 'a', text: 'It increases the bundle size' },
            { id: 'b', text: 'It violates the similarity principle — icons stop being perceived as a unified system' },
            { id: 'c', text: 'Browsers do not support mixing' },
            { id: 'd', text: 'It is prohibited by icon licenses' },
          ],
          correctId: 'b',
          explanation:
            'The Gestalt principle of similarity: identical elements are perceived as related. If icons look different, the brain does not group them into a system, and the interface looks unprofessional.',
        },
        {
          question: 'When is it better to use an illustration instead of an icon?',
          options: [
            { id: 'a', text: 'In a navigation menu' },
            { id: 'b', text: 'On action buttons' },
            { id: 'c', text: 'On empty states and onboarding screens' },
            { id: 'd', text: 'In data tables' },
          ],
          correctId: 'c',
          explanation:
            'Illustrations create an emotional connection and work best in moments where the interface needs to feel "human": empty states, onboarding, error pages, marketing pages.',
        },
        {
          question: 'What is the "rule of thirds" in the context of UI design?',
          options: [
            { id: 'a', text: 'A maximum of three colors in the palette' },
            { id: 'b', text: 'The screen is divided into 9 parts, and key elements are placed at line intersections' },
            { id: 'c', text: 'Each element is repeated three times' },
            { id: 'd', text: 'A maximum of three navigation levels' },
          ],
          correctId: 'b',
          explanation:
            'The rule of thirds: the screen is divided by two horizontal and two vertical lines into 9 parts. The four intersection points are "power points" that naturally attract the eye.',
        },
        {
          question: 'A corporate bank site wants to convey trust and stability. Which type of balance fits best?',
          options: [
            { id: 'a', text: 'Symmetrical — a mirrored composition reads as formal, stable, reliable' },
            { id: 'b', text: 'Asymmetrical — it is more dynamic' },
            { id: 'c', text: 'Radial — elements from a center' },
            { id: 'd', text: 'Balance does not matter for banks' },
          ],
          correctId: 'a',
          explanation:
            'Symmetrical balance (mirrored along an axis) creates a sense of stability, formality, and trust — exactly what a bank needs. Asymmetry is for startups and creative brands where dynamism matters.',
        },
        {
          question: 'What ratio does the golden ratio approximately give, used for column proportions?',
          options: [
            { id: 'a', text: '1:1 (50/50)' },
            { id: 'b', text: '1:1.618 (roughly 62/38)' },
            { id: 'c', text: '1:2 (33/67)' },
            { id: 'd', text: '1:3 (25/75)' },
          ],
          correctId: 'b',
          explanation:
            'The golden ratio ≈ 1:1.618, which as percentages is ~62/38. Twitter (X) uses it on desktop: feed ~62%, sidebar ~38%. It reads as naturally harmonious.',
        },
        {
          question: 'What characterizes "positive" and "negative" space in composition?',
          options: [
            { id: 'a', text: 'Positive = light elements, negative = dark ones' },
            { id: 'b', text: 'Positive = what is drawn (content); negative = the air between elements (whitespace)' },
            { id: 'c', text: 'Positive = good reviews, negative = bad ones' },
            { id: 'd', text: 'They are synonyms for margin and padding' },
          ],
          correctId: 'b',
          explanation:
            'Positive space is the content (text, buttons, images). Negative space (whitespace) is the void between them. Negative space is an active tool, not a "leftover": it creates focus, grouping, and a premium feel.',
        },
        {
          question: 'The FedEx logo (arrow between E and x) and the WWF logo are famous examples of using what?',
          options: [
            { id: 'a', text: 'The golden ratio' },
            { id: 'b', text: 'Negative space — the eye "completes" the image from the void' },
            { id: 'c', text: 'The rule of thirds' },
            { id: 'd', text: 'Radial balance' },
          ],
          correctId: 'b',
          explanation:
            'Both the FedEx arrow and the WWF panda silhouette are formed by negative space — what is NOT drawn. The brain (Gestalt closure) completes the image. It is the peak of mastery in working with empty space.',
        },
        {
          question: 'What does "break the pattern" mean in composition and why do designers do it?',
          options: [
            { id: 'a', text: 'It is a mistake, rhythm must never be broken' },
            { id: 'b', text: 'Deliberately disrupt a repeating pattern in one spot to draw all attention to that element' },
            { id: 'c', text: 'Reduce the number of animations' },
            { id: 'd', text: 'Change the font on every line' },
          ],
          correctId: 'b',
          explanation:
            'A broken rhythm is a powerful accent: when everything repeats identically, the single "odd one out" element instantly grabs the eye. E.g. a contrast CTA in a list of muted rows. Use deliberately and sparingly.',
        },
      ],
    },
  ],
}
