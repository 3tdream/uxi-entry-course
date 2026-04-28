#!/usr/bin/env node
/**
 * Generate course illustrations via FAL.ai Flux
 * Usage: node scripts/generate-images.mjs
 */

import { writeFile, readFile, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'public', 'images');

if (!process.env.FAL_KEY && !process.env.FAL_API_KEY) {
  try {
    const env = await readFile(join(ROOT, '.env.local'), 'utf8');
    for (const line of env.split('\n')) {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
      if (m) process.env[m[1]] = m[2].trim();
    }
  } catch {}
}
const FAL_KEY = process.env.FAL_KEY || process.env.FAL_API_KEY;
if (!FAL_KEY) {
  console.error('❌ FAL key not found. Set FAL_KEY/FAL_API_KEY in env or in .env.local at the project root.');
  process.exit(1);
}

const IMAGES = [
  {
    filename: 'meeting-01-user-devices.webp',
    prompt: 'Clean modern flat illustration of a person interacting with multiple digital devices: smartphone, laptop, tablet, smartwatch. Soft pastel colors, minimalist UX/UI design style, educational course illustration. White background, no text.',
  },
  {
    filename: 'meeting-01-ux-ui-venn.webp',
    prompt: 'Clean Venn diagram showing the overlap between UX Design and UI Design. Two overlapping circles — left circle labeled UX (blue), right circle labeled UI (pink), overlap area in purple. Minimalist flat design, educational illustration, white background. Labels: UX Design, UI Design, overlap area shows shared skills.',
  },
  {
    filename: 'meeting-01-ux-roi-graph.webp',
    prompt: 'Clean business graph showing ROI from UX design investment. Upward trending line chart with dollar signs, showing every $1 invested in UX returns $100. Modern flat infographic style, blue and green colors, white background, educational illustration. No complex text.',
  },
  {
    filename: 'meeting-02-cli-vs-gui.webp',
    prompt: 'Split-screen comparison illustration: left side shows a dark terminal/CLI interface with green text on black (1970s Unix style), right side shows colorful Macintosh 1984 GUI desktop with windows, icons, mouse pointer. Retro computing aesthetic, educational illustration, clean design.',
  },
  {
    filename: 'meeting-06-color-emotions.webp',
    prompt: 'Color psychology spectrum illustration for UX design education. Horizontal gradient of colors from red to violet, each color connected to an emotion icon: red=passion, orange=energy, yellow=happiness, green=calm, blue=trust, purple=luxury. Clean flat design, white background, educational infographic style.',
  },
  {
    filename: 'meeting-06-itten-color-wheel.webp',
    prompt: 'Johannes Itten color wheel diagram with 12 colors arranged in a circle. Three concentric levels: primary colors (red, yellow, blue) in center triangle, secondary colors in middle ring, tertiary colors in outer ring. Clean educational illustration, flat design, white background, labeled color wheel.',
  },
  {
    filename: 'meeting-06-color-harmonies.webp',
    prompt: 'Six types of color harmonies shown on small color wheels: complementary, analogous, triadic, split-complementary, tetradic, monochromatic. Each shown as a mini color wheel with lines/shapes indicating the harmony pattern. Clean flat design grid layout, educational illustration, white background.',
  },
  {
    filename: 'meeting-07-font-anatomy.webp',
    prompt: 'Typography anatomy diagram showing a large letter "Hxgp" with labeled parts: baseline, x-height, cap height, ascender line, descender line, serif, stem, counter, bowl. Clean educational illustration with red guide lines and labels, white background, professional typography reference.',
  },
  {
    filename: 'meeting-07-12col-grid.webp',
    prompt: 'Web design 12-column grid system visualization on a desktop browser mockup. Shows 12 vertical columns with gutters between them and margins on sides. Columns in light blue, gutters labeled, margins labeled. Clean flat design, educational illustration, responsive web design concept.',
  },
  {
    filename: 'meeting-08-visual-hierarchy.webp',
    prompt: 'Split-screen comparison of a web page: left side shows chaotic layout with no visual hierarchy (all text same size, no contrast, cluttered), right side shows the same content with clear visual hierarchy (headline large, subheads medium, body small, proper spacing, CTA button prominent). Clean flat UI design illustration, educational.',
  },
  {
    filename: 'meeting-09-wireframe-evolution.webp',
    prompt: 'Three-stage evolution of a mobile app design: left shows rough pencil sketch on paper (lo-fi), center shows clean digital wireframe in gray boxes (mid-fi), right shows polished high-fidelity mockup with colors and images (hi-fi). Arrow progression left to right. Clean educational illustration, UX design process.',
  },
  {
    filename: 'meeting-10-prototype-fidelity.webp',
    prompt: 'Horizontal spectrum of prototype fidelity levels from left to right: paper sketch, post-it notes, simple wireframe, clickable wireframe, visual mockup, interactive prototype, near-final app. Gradient from rough/gray on left to polished/colorful on right. Clean flat educational illustration, UX design course.',
  },
  {
    filename: 'meeting-12-dashboards-comparison.webp',
    prompt: 'Three dashboard tool interfaces side by side: Tableau (enterprise, colorful charts), Metabase (clean open-source, simple graphs), Grafana (dark DevOps theme, monitoring panels). Each shown as a small screen mockup. Clean flat illustration, data visualization comparison, educational.',
  },
  {
    filename: 'meeting-02-7-eras-timeline.webp',
    prompt: 'Horizontal timeline illustration: 7 eras of interface design from 1960s to 2020s. Each era a small icon: 1960s green CLI terminal, 1970s Xerox Alto, 1984 Macintosh, 1990s Web 1.0 page, 2000s Web 2.0 with widgets, 2007+ iPhone, 2020s AI/voice/AR headset. Connected by an evolving line. Flat educational illustration, soft pastel colors, minimalist style, white background, no text labels.',
  },
  {
    filename: 'meeting-02-rams-braun-vs-ios.webp',
    prompt: 'Side-by-side comparison illustration: left — Braun ET66 calculator (1987) by Dieter Rams in beige/cream with black buttons; right — iOS Calculator app on iPhone with same minimalist black grid and orange operation buttons. Clean industrial design aesthetic, white background, educational illustration, no text.',
  },
  {
    filename: 'meeting-03-empathy-map.webp',
    prompt: 'Clean educational diagram of an Empathy Map, divided into four quadrants around a central head silhouette: top-left "Thinks" with thought-bubble icon, top-right "Says" with speech-bubble icon, bottom-left "Feels" with heart icon, bottom-right "Does" with hand icon. Bottom strip split in two: down-arrow "Pains" and up-arrow "Gains". Flat minimalist UX design illustration, soft pastel colors (lavender, mint, peach), white background, no text labels.',
  },
  {
    filename: 'meeting-03-jtbd-formula.webp',
    prompt: 'Clean educational illustration of the Jobs To Be Done formula as three connected blocks: a clock icon labelled "Situation", arrow to a heart-with-arrow icon labelled "Motivation", arrow to a target-with-flag icon labelled "Outcome". Above, a small figure of a customer "hiring" a product card. Flat minimalist UX education style, soft pastel colors blue and orange, white background, no decorative text.',
  },
  {
    filename: 'meeting-03-journey-map-layers.webp',
    prompt: 'Clean educational illustration of a User Journey Map shown as a horizontal table: top row icons for stages (Awareness → Consideration → Decision → Use → Loyalty), beneath them rows for goals, touchpoints, thoughts, an emotional curve drawn as a wavy line going from frown to smile, pain points marked as red dots, opportunities marked as light bulbs. Flat minimalist infographic, soft pastel palette, white background, no decorative labels.',
  },
  {
    filename: 'meeting-03-persona-card.webp',
    prompt: 'Clean flat illustration of a UX persona card on a desk: avatar circle with a friendly face on the left, three text-block placeholders on the right (no readable text, just lines indicating Goals, Frustrations, Quote), a small phone icon, a coffee cup, and a sticky note with a heart. Flat minimalist UX design illustration, soft pastel colors lavender and peach, white background, gentle shadows.',
  },
  {
    filename: 'meeting-04-five-users-curve.webp',
    prompt: 'Clean educational line chart showing the Nielsen "5 users" curve: x-axis labelled with user count from 1 to 15, y-axis labelled "problems found" from 0 to 100 percent. Smooth logarithmic curve rising steeply at first then flattening. Five small user-silhouette icons under the x-axis, with a dashed vertical line at user 5 marking 85 percent. Flat minimalist infographic, blue and white, soft pastel accents, white background, only axis numbers visible.',
  },
  {
    filename: 'meeting-04-think-aloud.webp',
    prompt: 'Clean flat illustration of a usability test in progress: a person sitting at a laptop with a thought bubble showing gears and a question mark above their head, a researcher next to them with a notepad. Screen-recording icon and a small microphone above the laptop. Friendly, focused atmosphere, soft pastel colors, white background, minimalist UX education style, no readable text.',
  },
  {
    filename: 'meeting-04-nielsen-10-heuristics.webp',
    prompt: 'Clean educational poster-style infographic showing 10 numbered cards arranged in a 5x2 grid, each card with a simple icon representing a Nielsen usability heuristic: eye for visibility, world-globe for real-world match, undo-arrow for user control, equal-sign for consistency, shield for error prevention, lightbulb for recognition, rabbit for efficiency, sparkle for aesthetic minimalism, broken-link for error recovery, life-buoy for help. Each card numbered 1 to 10. Flat minimalist UX design illustration, soft pastel palette, white background.',
  },
  {
    filename: 'meeting-04-ux-metrics-dashboard.webp',
    prompt: 'Clean dashboard-style illustration with four small KPI cards arranged 2x2: top-left a horizontal SUS gauge from 0 to 100 with marker around 75, top-right an NPS scale from minus 100 to plus 100 with marker around plus 30, bottom-left a green smiley showing CSAT, bottom-right a stopwatch icon labelled "Time on Task". Flat minimalist data-visualisation style, soft pastel colors, white background, only numeric scale markings visible.',
  },
  {
    filename: 'meeting-05-interview-types.webp',
    prompt: 'Clean educational illustration comparing three interview formats as three rectangular cards side by side. Left card shows a strict ladder of identical question marks (structured). Middle card shows a flexible tree branching outward from a few core questions (semi-structured). Right card shows a free-flowing wavy conversation line (unstructured). Each card has a tiny pair of facing speech-bubble silhouettes at the top. Flat minimalist UX research style, soft pastel colors blue, green, orange, white background.',
  },
  {
    filename: 'meeting-05-card-sorting.webp',
    prompt: 'Clean flat illustration of a card-sorting exercise on a desk: a stack of small rectangular cards in the centre, three labelled groupings on the right (each a colored bin with three cards inside), and a hand placing one card. Above the bins, a simple dendrogram tree showing groupings. Soft pastel colors green, blue, yellow bins, white background, minimalist UX research style, no readable text on cards.',
  },
  {
    filename: 'meeting-05-user-story-formula.webp',
    prompt: 'Clean educational illustration of a User Story formula card: three colored chips arranged horizontally with arrows between them — first chip shows a person silhouette with crown labelled "Role", second chip shows a hand pointing at a button labelled "Action", third chip shows a target with checkmark labelled "Value". Above the chips, the words "As a... I want... so that..." in a light handwritten style. Below, three small "Given / When / Then" tags. Flat minimalist Agile-style illustration, soft pastel colors, white background.',
  },
  {
    filename: 'meeting-05-moscow-priority.webp',
    prompt: 'Clean educational pyramid diagram showing the MoSCoW prioritisation method as four colored horizontal bands stacked top-to-bottom: red "Must have" at the top widest band labelled 60 percent, yellow "Should have" labelled 20 percent, green "Could have" labelled 20 percent, grey "Won\'t have" small band at the bottom. Each band has a tiny task-card icon. Flat minimalist project-management style, soft pastel palette, white background, only the percentages visible.',
  },
  {
    filename: 'meeting-11-design-to-dev-bridge.webp',
    prompt: 'Clean flat illustration of a stylised bridge connecting two islands: left island has a Figma-like design canvas with shapes and a colour palette, right island has code brackets and component cards. On the bridge, design-token chips and arrows flow between the islands. A designer figure on the left, a developer figure on the right, both reaching toward each other. Flat minimalist UX education style, soft pastel colors blue and orange, white background, no readable text.',
  },
  {
    filename: 'meeting-11-button-spec-sheet.webp',
    prompt: 'Clean illustration of a "spec sheet" for a button: a single primary button in the centre surrounded by callout lines pointing to its properties — padding 12 by 24, border radius 8, font size 16, background colour token chip, hover state preview, focus ring preview, disabled state preview. Each property shown as a tiny labelled chip. Flat minimalist design-handoff style, soft pastel palette, white background, only short property tags visible.',
  },
  {
    filename: 'meeting-11-ab-test-flow.webp',
    prompt: 'Clean educational diagram of an A/B test split: at the top, a single icon of a website. An arrow splits to two parallel paths labelled "Group A" and "Group B" — left path shows a screen mockup with a grey button, right path shows the same screen with a green button. Each path leads down to a metric counter ("conversions") and the higher counter is highlighted with a trophy. Flat minimalist analytics illustration, soft pastel colors, white background, only "A" and "B" labels visible.',
  },
  {
    filename: 'meeting-11-iteration-loop.webp',
    prompt: 'Clean educational illustration of a continuous improvement loop drawn as a circular arrow with six labelled stages around the circle: Design (pencil), Build (gear), Launch (rocket), Measure (chart), Analyse (magnifier), Decide (check-mark). Centre of the loop labelled "Iteration". Flat minimalist product-design style, soft pastel colors, white background, only short stage labels around the ring.',
  },
  {
    filename: 'meeting-13-course-roadmap.webp',
    prompt: 'Clean horizontal roadmap illustration with thirteen numbered milestone dots connected by a winding path. Dots grouped into four colored sections corresponding to course blocks: Foundations 1-3 (blue), Research 4-5 (green), Design 7-10 (orange), Profession 11-13 (purple). Tiny relevant icon above each milestone (book, history, palette, microscope, persona, IA tree, wireframe, components, prototype, motion, design-system, handoff, trophy). Flat minimalist education-roadmap style, soft pastel colors, white background, only milestone numbers visible.',
  },
  {
    filename: 'meeting-13-career-ladder.webp',
    prompt: 'Clean illustration of a four-step ascending staircase, each step labelled with a UX career level: Junior (small figure with sketchbook), Middle (figure with laptop), Senior (figure with laptop and team-icon), Lead/Director (figure on top with team of three behind). Above the ladder, three smaller side branches with icons for alternative tracks: research magnifier, writing pen, design-engineering brackets. Flat minimalist career-illustration style, soft pastel colors, white background, only step labels visible.',
  },
  {
    filename: 'meeting-13-rubric-radar.webp',
    prompt: 'Clean radar (spider) chart illustration with six axes labelled: Research, Define, Design, Prototype, Testing, Presentation. A filled translucent polygon shows a balanced student score reaching about 4 out of 5 on each axis. Each axis tip has a small relevant icon (magnifier, persona head, palette, layers, stopwatch, microphone). Flat minimalist data-visualisation style, soft pastel teal fill, white background, only axis labels visible.',
  },
  {
    filename: 'meeting-13-graduation-toolkit.webp',
    prompt: 'Clean flat celebratory illustration of a designer\'s "graduation toolkit" laid out on a desk: an open laptop showing a Figma-like canvas, a sketchbook, a colour swatch fan, a tiny diploma scroll with a ribbon, a small trophy, a pen, sticky notes, and a coffee mug. Confetti dots floating above. Warm, friendly, end-of-course feel. Flat minimalist education-illustration style, soft pastel colors with gold and lavender accents, white background, no readable text.',
  },
  {
    filename: 'meeting-08-f-z-patterns.webp',
    prompt: 'Clean educational illustration with two browser-window mockups side by side. Left window has a heatmap overlay forming the letter F: two horizontal red bands across the top and a vertical band down the left edge, lighter cool blue elsewhere. Right window has a heatmap overlay forming the letter Z: from top-left to top-right, diagonal down to bottom-left, then across to bottom-right. Title-area placeholders are abstract grey blocks, no readable text. Flat minimalist UX education style, white background, soft red-orange heatmap on light grey wireframe.',
  },
  {
    filename: 'meeting-08-gestalt-principles.webp',
    prompt: 'Clean educational poster showing five gestalt principles in a 5-cell strip. Cell 1 "Proximity": dots clustered into two groups. Cell 2 "Similarity": three rows where one row uses circles and others use squares. Cell 3 "Closure": three pac-man shapes arranged so the brain perceives a triangle. Cell 4 "Continuity": a curve passing through points. Cell 5 "Figure-Ground": a vase silhouette that doubles as two faces. Flat minimalist black-and-white educational illustration with one accent color, white background, only short principle name under each cell.',
  },
  {
    filename: 'meeting-08-rule-of-thirds.webp',
    prompt: 'Clean illustration of a webpage hero mockup with the rule-of-thirds grid overlay: two horizontal and two vertical thin lines dividing the screen into nine equal cells. Four small accent dots placed at the line intersections. A sample hero shows a headline placeholder on the upper-left intersection and a CTA button on the lower-right intersection, plus a flat hero-image silhouette. Flat minimalist UX layout illustration, soft pastel colors, white background, only thin grid lines and dots.',
  },
  {
    filename: 'meeting-09-crazy-8s.webp',
    prompt: 'Clean illustration of a sheet of paper folded into eight rectangles in a 4x2 grid, each rectangle containing a different rough wireframe sketch (header bar, list, card grid, form, dashboard, profile, modal, calendar) drawn in loose pencil-style strokes. A small pencil and a stopwatch in the corner showing 8 minutes. Flat minimalist sketch style, monochrome with one accent color, white background.',
  },
  {
    filename: 'meeting-09-landing-anatomy.webp',
    prompt: 'Clean wireframe illustration of a landing page anatomy as a tall vertical mockup with labelled blocks stacked from top to bottom: hero with headline placeholder + CTA, social-proof logo strip, three-card benefits row, three-step "how it works" row, two testimonial quotes, three-tier pricing table, FAQ accordion, final CTA, footer. Each block represented by simple grey shapes. Flat minimalist wireframe style, monochrome with one teal accent on CTAs, white background, no readable text.',
  },
  {
    filename: 'meeting-09-saas-dashboard-layout.webp',
    prompt: 'Clean wireframe illustration of a SaaS dashboard layout: left vertical sidebar with five icon placeholders, top horizontal header with search bar and avatar circle, main area divided into a row of four KPI cards on top, two large chart placeholders below (line chart and bar chart), and a wide data table at the bottom. All elements in grey wireframe style with thin borders, one accent color for active sidebar item. Flat minimalist UX wireframe, white background, no readable text.',
  },
  {
    filename: 'meeting-10-microinteraction-anatomy.webp',
    prompt: 'Clean educational illustration showing the four parts of a microinteraction as a horizontal flow: 1) Trigger — a finger tap on a button, 2) Rules — two gears representing logic, 3) Feedback — a button morphing from spinner to green checkmark, 4) Loops — a circular arrow with a small clock. Each part connected by a thin arrow. Flat minimalist UI design illustration, soft pastel colors, white background, only stage-name labels under each icon.',
  },
  {
    filename: 'meeting-10-easing-curves.webp',
    prompt: 'Clean educational chart showing four easing curves on the same coordinate plane: ease-in (slow start steep end) in red, ease-out (steep start slow end) in blue, ease-in-out (S-curve) in green, linear (straight diagonal) in grey. X-axis labelled "time", Y-axis labelled "progress". Tiny moving-ball icon on each curve. Flat minimalist motion-design illustration, soft pastel colors, white background, only the curve-name labels visible.',
  },
  {
    filename: 'meeting-10-atomic-design.webp',
    prompt: 'Clean educational illustration of Atomic Design as five horizontal layers stacked from bottom to top, each labelled and represented by a chemistry-inspired icon: Atoms (single atom — dot), Molecules (two atoms bonded — search field), Organisms (atom cluster — header with logo, nav, search), Templates (page wireframe outline), Pages (filled mockup with content). Flat minimalist design-system illustration, soft pastel colors blue and lavender, white background.',
  },
  {
    filename: 'meeting-12-ios-vs-material.webp',
    prompt: 'Clean side-by-side comparison illustration of two phones: left phone in iOS style with rounded square app icons, top navigation bar, bottom tab bar with subtle blur, and a label "iOS HIG" with an Apple-style aesthetic; right phone in Material Design 3 style with a top app bar, floating action button on bottom right, bottom navigation bar with bold pill highlight, and a label "Material 3". Flat minimalist UI illustration, soft pastel colors blue tones for iOS and purple tones for Material, white background.',
  },
  {
    filename: 'meeting-12-platform-spectrum.webp',
    prompt: 'Clean horizontal spectrum illustration showing six platform types from left to right with small device icons: static website (browser), SPA (browser with refresh icon), PWA (browser with install arrow), Hybrid app (phone with browser inside), React Native or Flutter (phone with cross-platform symbol), Native (iPhone and Android phones). A gradient strip beneath labels two arrows — "Reach" decreasing to the right, "Capabilities" increasing to the right. Flat minimalist tech-education style, soft pastel colors, white background, only short labels under each device.',
  },
  {
    filename: 'meeting-12-kpi-card-anatomy.webp',
    prompt: 'Clean illustration of a single dashboard KPI card enlarged in the centre with callout arrows pointing to its parts: small label at the top ("Revenue"), large value in the middle ("$142K"), green up-arrow with percentage ("+12.5%"), tiny sparkline graph at the bottom right, and a period note ("vs last month"). Flat minimalist data-dashboard style, soft pastel green and blue accents, white background, only the example numeric values visible.',
  },
  {
    filename: 'meeting-09-wireframe-fail-humor.webp',
    prompt: 'Comic-card style illustration: a designer at a desk proudly presenting a beautifully detailed pixel-perfect mockup, while a small thought bubble shows the user-research persona that was never made and a wireframe step that was skipped. The mockup is gorgeous but a tiny developer character is scratching his head holding a question-mark sign. Tasteful, gentle humour, flat illustration style, soft pastel palette, white background, no readable text.',
  },
  {
    filename: 'meeting-11-handoff-broken-telephone-humor.webp',
    prompt: 'Comic-card style illustration playing on the "broken telephone" idea: on the left, a designer holds up a beautiful Figma mockup with a clean rounded button; in the middle a tangled string passes between two paper cups; on the right, a developer proudly holds up the implemented version where the same button is mysteriously square, off-color, and slightly tilted. Both characters smile awkwardly. Tasteful, gentle humour, flat illustration style, soft pastel colors, white background, no readable text.',
  },
  {
    filename: 'meeting-02-ux-team-roles.webp',
    prompt: 'Clean educational poster: six perfectly identical rectangular cards arranged in a strict 3x2 grid, each card the EXACT same size with EXACT same internal padding and centred content. Each card contains a centred circular avatar of a flat character silhouette (head and shoulders) above a small centred tool icon, and a short role label centred at the bottom. Roles in order: UX Researcher (magnifier), UX Designer (wireframe), UI Designer (palette), Product Designer (strategy chart), Design System Lead (lego bricks), UX Writer (quote bubble). All six characters drawn in the SAME flat illustration style with consistent body proportions and head sizes. Uniform 16px gap between cards, generous margin around the grid. Flat minimalist UX education style, soft pastel palette (lavender, mint, peach, blue), white background, only the short role labels visible, no extra decoration. Clean, symmetrical, poster-like composition.',
  },
  {
    filename: 'meeting-02-double-diamond.webp',
    prompt: 'Cyclic 4-step process diagram drawn as a smooth circular arrow forming a closed loop with arrowheads showing the direction of movement. Four labelled phases positioned at 12, 3, 6, 9 o\'clock around the circle. Plain English sans-serif labels: "Discover" at top, "Define" on right, "Develop" at bottom, "Deliver" on left. Each phase has a small accompanying icon next to its label: Discover (magnifying glass), Define (target with crosshair), Develop (three light-bulbs), Deliver (rocket). Soft pastel gradient on the arrow ring (teal → blue → orange → coral). Flat minimalist UX education style, white background, only the four English phase labels and icons visible, NO Cyrillic, no other text.',
  },
  {
    filename: 'meeting-02-artefact-user-flow.webp',
    prompt: 'Clean educational illustration of a User Flow diagram example: 6 connected boxes representing screens (Login, Search, Product, Cart, Checkout, Confirmation) connected by arrows showing the path. Two side branches with decision-diamonds for "Logged in?" and "Payment OK?". Flat wireframe-style illustration, monochrome grey boxes with one teal accent on the active path, white background, minimalist, no readable text on screens.',
  },
  {
    filename: 'meeting-02-artefact-wireframes.webp',
    prompt: 'Clean educational illustration of a wireframe example: a single mid-fidelity webpage wireframe centred on the canvas. Shows a header bar with logo placeholder and 3 nav items, a hero block with grey rectangle for image and 2 lines of placeholder bars for headline + paragraph and a CTA button outline, a 3-card row beneath, and a footer strip. All shapes in light grey strokes with no fill colours. Flat minimalist wireframe style, white background, monochrome with one teal accent on CTA button, no readable text.',
  },
  {
    filename: 'meeting-02-artefact-information-architecture.webp',
    prompt: 'Clean educational illustration of an Information Architecture sitemap: a tree diagram with one root node "Home" at the top, branching into 4 main category nodes ("About", "Products", "Pricing", "Support"), each branching into 2-3 child page nodes. Connecting lines drawn cleanly. Each node a small rounded rectangle with a tiny page-icon. Flat minimalist UX-education style, soft pastel teal nodes, white background, no readable text, only the hierarchy visible.',
  },
  {
    filename: 'meeting-02-artefact-user-story-map.webp',
    prompt: 'Clean educational illustration of a User Story Map structure with NO text anywhere on the image. Top row: 5 large activity cards in soft blue, each card showing a different distinct icon (eye for browse, magnifier for search, balance-scale for compare, shopping-cart for buy, location-pin for track). Below each activity, a vertical column of 3-4 small yellow sticky-note rectangles. A clearly visible horizontal dashed line cuts across after the first row of stickies, with a small horizontal banner-shape on the left indicating the slice. Two more rows of stickies below. Flat minimalist Agile-design style, soft pastel palette, white background, ONLY shapes and icons — no readable letters or words at all.',
  },
  {
    filename: 'meeting-02-artefact-prototypes.webp',
    prompt: 'Clean educational illustration of an interactive prototype example: three smartphone mockups arranged horizontally, each showing a DIFFERENT screen content. Left phone: a product list (rows of small image + line). Centre phone: a product detail view (large image at top, action button below, small text rows). Right phone: a checkout / order-confirmation screen with a big check-mark and a price summary. Curved arrows connect the central phone to both side phones, showing transitions. A small finger-tap icon hovers over a button on the central screen. Above the phones, a tiny gear-icon and a play-button suggesting Figma prototype mode. Each screen visually distinct from the others — NOT identical copies. Flat minimalist UX-education style, soft pastel palette, white background, minimal UI shapes only, no readable text.',
  },
  {
    filename: 'meeting-02-team-by-product-type.webp',
    prompt: 'Clean comparison illustration of four design team compositions arranged horizontally as four columns. Column 1 "Startup": 1 small designer-figure wearing a hat with multiple tool-icons (jack of all trades). Column 2 "Agency": 3 figures with rotating-arrow icons indicating projects rotating in and out. Column 3 "B2B SaaS": 4 figures grouped around a dashboard mockup with researcher, UX, UI, writer roles. Column 4 "Enterprise": 8+ figures organised into pods with manager and specialised silos. Above each column a tiny tag with the team type and average size. Flat minimalist business-illustration style, soft pastel colors, white background, only short team-type labels visible.',
  },
];

async function generateImage(item) {
  const outPath = join(OUT_DIR, item.filename);
  try {
    await access(outPath);
    console.log(`\n⏭  Skipped (exists): ${item.filename}`);
    return 'skipped';
  } catch {}
  console.log(`\n🎨 Generating: ${item.filename}`);
  console.log(`   Prompt: ${item.prompt.substring(0, 80)}...`);

  const response = await fetch('https://fal.run/fal-ai/flux/schnell', {
    method: 'POST',
    headers: {
      'Authorization': `Key ${FAL_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: item.prompt,
      image_size: 'landscape_16_9',
      num_inference_steps: 4,
      num_images: 1,
      enable_safety_checker: true,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`   ❌ FAL API error ${response.status}: ${err}`);
    return false;
  }

  const result = await response.json();

  if (!result.images || result.images.length === 0) {
    console.error(`   ❌ No image returned`);
    return false;
  }

  const imageUrl = result.images[0].url;
  console.log(`   📥 Downloading from: ${imageUrl.substring(0, 60)}...`);

  // Download the image
  const imgResponse = await fetch(imageUrl);
  if (!imgResponse.ok) {
    console.error(`   ❌ Download failed: ${imgResponse.status}`);
    return false;
  }

  const buffer = Buffer.from(await imgResponse.arrayBuffer());
  await writeFile(outPath, buffer);

  console.log(`   ✅ Saved: ${outPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
  return 'generated';
}

async function main() {
  console.log(`🚀 Generating ${IMAGES.length} course illustrations via FAL.ai Flux`);
  console.log(`📁 Output: ${OUT_DIR}\n`);

  let generated = 0;
  let skipped = 0;
  let fail = 0;

  for (const item of IMAGES) {
    try {
      const r = await generateImage(item);
      if (r === 'generated') generated++;
      else if (r === 'skipped') skipped++;
      else fail++;
    } catch (err) {
      console.error(`   ❌ Error: ${err.message}`);
      fail++;
    }
    await new Promise(r => setTimeout(r, 1000));
  }

  console.log(`\n📊 Done: ${generated} generated, ${skipped} skipped, ${fail} failed (of ${IMAGES.length})`);
}

main().catch(console.error);
