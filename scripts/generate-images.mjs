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
