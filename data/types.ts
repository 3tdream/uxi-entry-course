// ==========================================
// UXI Entry Course — Data Types
// 13 meetings × 2 parts (45+45 min)
// ==========================================

export interface QuizOption {
  id: string
  text: string
}

export interface Quiz {
  question: string
  options: QuizOption[]
  correctId: string
  explanation: string
}

export interface KeyConcept {
  term: string
  definition: string
}

export interface ChecklistItem {
  text: string
  demo?: string
}

export interface ColorSwatch {
  hex: string
  role: string
  name?: string
}

export interface FontFamilyItem {
  name: string // display name, e.g. 'Times New Roman'
  stack: string // CSS font-family stack, e.g. "'Times New Roman', Times, serif"
  description: string // plain-text caption
  sample?: string // optional sample text (defaults to the family name)
}

export interface FontShowcaseGroup {
  title: string // e.g. 'Serif (with serifs)'
  kind: 'serif' | 'sans-serif' | 'monospace'
  families: FontFamilyItem[]
}

export interface FontPair {
  headingName: string
  headingStack: string
  headingSample?: string // text rendered as the heading
  bodyName: string
  bodyStack: string
  bodySample?: string // text rendered as body
  note: string // short rationale
  /** Optional override for visual chaos demos — mixes multiple stacks word-by-word in heading. */
  chaosWords?: { text: string; stack: string }[]
}

export interface TypeScaleStep {
  label: string // e.g. 'xs', 'base', '3xl'
  px: number // computed pixel size
  rem: string // e.g. '0.75rem'
  usage: string // e.g. 'meta-info, captions'
  sample?: string // override sample text
}

export interface SpacingScaleStep {
  px: number // actual pixel width to render
  rem?: string // optional rem token, e.g. '1rem'
  token?: string // optional token alias, e.g. 'p-4'
  usage: string // e.g. 'card padding, list gap'
}

export interface ColumnSplitRow {
  label: string // e.g. '6+6 — двухколоночный (50/50)'
  spans: { span: number; tone?: 'primary' | 'secondary' | 'muted'; label?: string }[]
  note?: string
}

export interface ColorPaletteData {
  appName: string
  appUrl?: string
  industry?: string
  imageSrc?: string
  imageAlt?: string
  swatches: ColorSwatch[]
  rationale?: string
}

export interface ComparisonItem {
  label: string
  ux: string
  ui: string
}

export interface PersonaTrait {
  label: string
  value: string
}

export interface PersonaData {
  name: string
  age: number
  role: string
  photo?: string
  bio: string
  goals: string[]
  frustrations: string[]
  traits: PersonaTrait[]
  quote?: string
}

export type BeforeAfterVisual =
  | {
      kind: 'text-sample'
      text: string
      color: string
      background: string
      fontWeight?: 'thin' | 'normal' | 'semibold' | 'bold'
      ratio?: string
      ratioLabel?: string
    }
  | {
      kind: 'required-field'
      label: string
      showAsterisk?: boolean
      borderColor?: string
      caption?: string
      placeholder?: string
    }
  | {
      kind: 'landing-mock'
      background: string
      heading: string
      headingColor: string
      body: string
      bodyColor: string
      ctaLabel: string
      ctaBg: string
      ctaColor: string
      accentBg?: string
      paletteSwatches?: string[] // hex values shown as a tiny palette strip
      footnote?: string // e.g. "contrast 1.5:1 — fails AA"
    }
  | {
      kind: 'dashboard-mock'
      background: string
      cards: {
        label: string
        value: string
        bg: string
        labelColor: string
        valueColor: string
        barColor: string
        barFill: number // 0..1
      }[]
      paletteSwatches?: string[]
      footnote?: string
    }
  | {
      kind: 'line-height-sample'
      text: string
      lineHeight: number // e.g. 1.0, 1.6
      fontSize?: number // px, default 15
      fontStack?: string
      footnote?: string // e.g. 'line-height 1.0 · слипшиеся строки'
    }
  | {
      kind: 'typography-stack'
      /** Visual frame around the stack. */
      frame?: 'phone' | 'browser' | 'plain'
      background?: string
      rows: {
        text: string
        fontSize: number // px
        fontWeight?: number | 'normal' | 'semibold' | 'bold'
        color?: string
        lineHeight?: number
        fontFamily?: string
        letterSpacing?: string
        textTransform?: 'uppercase' | 'none'
        tabular?: boolean // numeric tabular figures
        marginTop?: number // extra px above
      }[]
      cta?: { label: string; bg: string; color: string; size?: number }
      footnote?: string
    }

export interface BeforeAfterItem {
  label: string
  description: string
  image?: string
  visual?: BeforeAfterVisual
}

export interface CaseStudyStep {
  title: string
  description: string
}

export interface UserFlowStep {
  id: string
  label: string
  type: 'start' | 'action' | 'decision' | 'end'
}

export interface UserFlowConnection {
  from: string
  to: string
  label?: string
}

// ---- Section Types ----

export type Section =
  | { type: 'text'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'subheading'; content: string }
  | { type: 'key-concepts'; concepts: KeyConcept[] }
  | { type: 'comparison'; title: string; items: ComparisonItem[] }
  | { type: 'timeline'; events: { year: string; title: string; description: string }[] }
  | { type: 'callout'; variant: 'tip' | 'warning' | 'example'; content: string }
  | { type: 'image-placeholder'; alt: string; caption: string }
  | { type: 'image'; src: string; alt: string; caption?: string; maxWidth?: number }
  | { type: 'video'; src: string; title: string; caption?: string }
  | { type: 'before-after'; title: string; before: BeforeAfterItem; after: BeforeAfterItem }
  | { type: 'diagram'; title: string; description: string; items: string[] }
  | { type: 'case-study'; title: string; company: string; problem: string; solution: string; result: string; steps?: CaseStudyStep[] }
  | { type: 'user-persona'; persona: PersonaData }
  | { type: 'user-flow'; title: string; steps: UserFlowStep[]; connections: UserFlowConnection[] }
  | { type: 'checklist'; title: string; items: (string | ChecklistItem)[] }
  | { type: 'columns'; variant?: 'grid' | 'stacked'; columns: { title: string; items: string[] }[] }
  | { type: 'table'; title?: string; headers: string[]; rows: string[][]; caption?: string }
  | { type: 'quote'; text: string; author: string; role?: string }
  | { type: 'color-palette'; data: ColorPaletteData }
  | { type: 'font-showcase'; groups: FontShowcaseGroup[] }
  | { type: 'font-pair-showcase'; title?: string; goodLabel?: string; badLabel?: string; good: FontPair[]; bad: FontPair[] }
  | { type: 'type-scale-showcase'; title?: string; description?: string; ratio?: string; base?: string; fontStack?: string; steps: TypeScaleStep[] }
  | { type: 'spacing-scale-showcase'; title?: string; description?: string; baseUnit?: number; steps: SpacingScaleStep[] }
  | { type: 'column-split-showcase'; title?: string; description?: string; total?: number; rows: ColumnSplitRow[] }
  | { type: 'iphone-safe-area-demo'; title?: string; description?: string; labels?: { dynamicIsland?: string; statusBar?: string; safeArea?: string; homeIndicator?: string } }
  | { type: 'divider' }

// ---- Meeting Structure ----

export interface MeetingPart {
  id: string
  title: string
  subtitle: string
  duration: string
  sections: Section[]
  quiz: Quiz[]
}

export interface Meeting {
  id: string
  number: number
  title: string
  description: string
  icon: string
  color: string
  parts: MeetingPart[]
}
