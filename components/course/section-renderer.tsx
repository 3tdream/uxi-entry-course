'use client'

import { type Section } from '@/data/types'
import { useLanguage } from '@/lib/language'
import {
  Lightbulb,
  AlertTriangle,
  BookOpen,
  User,
  Target,
  Frown,
  Quote,
  CheckCircle2,
  ArrowRight,
  Play,
  ImageIcon,
} from 'lucide-react'

// ---- Helpers ----

function RichText({ content }: { content: string }) {
  const parts = content.split(/(\*\*.*?\*\*|\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-semibold text-foreground">
              {part.slice(2, -2)}
            </strong>
          )
        }
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (linkMatch) {
          return (
            <a
              key={i}
              href={linkMatch[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              {linkMatch[1]}
            </a>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

function useSectionLabels() {
  const { lang } = useLanguage()
  return {
    tip: lang === 'en' ? 'Tip' : 'Совет',
    warning: lang === 'en' ? 'Important' : 'Важно',
    example: lang === 'en' ? 'Example' : 'Пример',
    keyConcepts: lang === 'en' ? 'Key Concepts' : 'Ключевые понятия',
    caseStudy: lang === 'en' ? 'Case Study' : 'Кейс-стади',
    problem: lang === 'en' ? 'Problem' : 'Проблема',
    solution: lang === 'en' ? 'Solution' : 'Решение',
    steps: lang === 'en' ? 'Steps' : 'Шаги',
    result: lang === 'en' ? 'Result' : 'Результат',
    goals: lang === 'en' ? 'Goals' : 'Цели',
    frustrations: lang === 'en' ? 'Frustrations' : 'Фрустрации',
    demo: lang === 'en' ? 'Demo:' : 'Демо:',
  }
}

// ---- Section Components ----

function TextSection({ content }: { content: string }) {
  return (
    <p className="text-base leading-relaxed text-foreground/80">
      <RichText content={content} />
    </p>
  )
}

function HeadingSection({ content }: { content: string }) {
  return <h2 className="text-2xl font-bold text-foreground mt-2">{content}</h2>
}

function SubheadingSection({ content }: { content: string }) {
  return <h3 className="text-xl font-semibold text-foreground mt-1">{content}</h3>
}

function CalloutSection({
  variant,
  content,
}: {
  variant: 'tip' | 'warning' | 'example'
  content: string
}) {
  const labels = useSectionLabels()
  const styles = {
    tip: {
      bg: 'bg-emerald-50 border-emerald-200',
      icon: <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0" />,
      label: labels.tip,
      labelColor: 'text-emerald-700',
    },
    warning: {
      bg: 'bg-amber-50 border-amber-200',
      icon: <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />,
      label: labels.warning,
      labelColor: 'text-amber-700',
    },
    example: {
      bg: 'bg-blue-50 border-blue-200',
      icon: <BookOpen className="w-5 h-5 text-blue-600 shrink-0" />,
      label: labels.example,
      labelColor: 'text-blue-700',
    },
  }

  const s = styles[variant]

  return (
    <div className={`rounded-xl border p-4 ${s.bg}`}>
      <div className="flex items-center gap-2 mb-2">
        {s.icon}
        <span className={`text-sm font-semibold ${s.labelColor}`}>{s.label}</span>
      </div>
      <p className="text-sm leading-relaxed text-foreground/70">
        <RichText content={content} />
      </p>
    </div>
  )
}

function KeyConceptsSection({
  concepts,
}: {
  concepts: { term: string; definition: string }[]
}) {
  const labels = useSectionLabels()
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-foreground">{labels.keyConcepts}</h3>
      <div className="grid gap-3">
        {concepts.map((c) => (
          <div
            key={c.term}
            className="flex gap-3 p-3 rounded-lg bg-accent/50 border border-border/50"
          >
            <div className="w-1.5 rounded-full bg-primary shrink-0 self-stretch" />
            <div>
              <span className="font-semibold text-sm text-foreground">{c.term}</span>
              <p className="text-sm text-muted-foreground mt-0.5"><RichText content={c.definition} /></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ComparisonSection({
  title,
  items,
}: {
  title: string
  items: { label: string; ux: string; ui: string }[]
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="rounded-xl border overflow-hidden">
        <div className="grid grid-cols-3 bg-muted/50 text-sm font-semibold">
          <div className="p-3 text-muted-foreground"></div>
          <div className="p-3 text-center text-purple-600">UX</div>
          <div className="p-3 text-center text-blue-600">UI</div>
        </div>
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}
          >
            <div className="p-3 font-medium text-foreground">{item.label}</div>
            <div className="p-3 text-center text-muted-foreground">{item.ux}</div>
            <div className="p-3 text-center text-muted-foreground">{item.ui}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TimelineSection({
  events,
}: {
  events: { year: string; title: string; description: string }[]
}) {
  return (
    <div className="space-y-3">
      <div className="relative pl-6 space-y-6">
        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border" />
        {events.map((event) => (
          <div key={event.year} className="relative">
            <div className="absolute left-[-21px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background" />
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                {event.year}
              </span>
              <h4 className="font-semibold text-sm text-foreground">{event.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <RichText content={event.description} />
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ImagePlaceholderSection({ alt, caption }: { alt: string; caption: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center">
      <ImageIcon className="w-8 h-8 text-muted-foreground/40 mx-auto mb-2" />
      <div className="text-muted-foreground text-sm mb-1">{alt}</div>
      <div className="text-xs text-muted-foreground/60">{caption}</div>
    </div>
  )
}

function ImageSection({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="rounded-xl overflow-hidden border">
      <img src={src} alt={alt} className="w-full h-auto" loading="lazy" />
      {caption && (
        <figcaption className="text-xs text-muted-foreground text-center py-2 px-4 bg-muted/30">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

function VideoSection({ src, title, caption }: { src: string; title: string; caption?: string }) {
  const isYoutube = src.includes('youtube.com') || src.includes('youtu.be')
  const embedUrl = isYoutube
    ? src.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')
    : src

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <Play className="w-4 h-4 text-primary" />
        <span className="text-sm font-semibold text-foreground">{title}</span>
      </div>
      {isYoutube ? (
        <div className="relative aspect-video rounded-xl overflow-hidden border bg-black">
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      ) : (
        <div className="relative aspect-video rounded-xl overflow-hidden border bg-black">
          <video controls className="w-full h-full" preload="metadata">
            <source src={src} />
          </video>
        </div>
      )}
      {caption && (
        <p className="text-xs text-muted-foreground text-center">{caption}</p>
      )}
    </div>
  )
}

type BeforeAfterVisualProp =
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
      paletteSwatches?: string[]
      footnote?: string
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
        barFill: number
      }[]
      paletteSwatches?: string[]
      footnote?: string
    }

function VisualDemo({ visual }: { visual: BeforeAfterVisualProp }) {
  if (visual.kind === 'text-sample') {
    const weightCls =
      visual.fontWeight === 'thin'
        ? 'font-thin'
        : visual.fontWeight === 'semibold'
          ? 'font-semibold'
          : visual.fontWeight === 'bold'
            ? 'font-bold'
            : 'font-normal'
    return (
      <div className="mb-3 rounded-lg border border-stone-200 overflow-hidden">
        <div
          className="p-4 md:p-5"
          style={{ backgroundColor: visual.background }}
        >
          <p
            className={`text-sm md:text-[15px] leading-relaxed ${weightCls}`}
            style={{ color: visual.color }}
          >
            {visual.text}
          </p>
        </div>
        {(visual.ratio || visual.ratioLabel) && (
          <div className="px-3 py-1.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-2 text-[11px]">
            <span className="font-mono text-stone-600">
              {visual.color} on {visual.background}
            </span>
            {visual.ratio && (
              <span className="font-mono font-bold text-stone-800">
                {visual.ratio}
                {visual.ratioLabel && (
                  <span className="ml-1 font-normal text-stone-500">· {visual.ratioLabel}</span>
                )}
              </span>
            )}
          </div>
        )}
      </div>
    )
  }
  if (visual.kind === 'required-field') {
    const border = visual.borderColor || '#DC2626'
    return (
      <div className="mb-3 rounded-lg border border-stone-200 bg-white p-4">
        <label className="block text-xs font-semibold text-stone-700 mb-1.5">
          {visual.label}
          {visual.showAsterisk && <span className="text-red-600 ml-0.5">*</span>}
        </label>
        <input
          type="text"
          placeholder={visual.placeholder || ''}
          readOnly
          className="w-full px-3 py-2 text-sm rounded-md bg-stone-50 outline-none"
          style={{ border: `2px solid ${border}` }}
        />
        {visual.caption && (
          <p className="mt-1 text-[11px] text-red-600 font-medium">{visual.caption}</p>
        )}
      </div>
    )
  }
  if (visual.kind === 'dashboard-mock') {
    return (
      <div className="mb-3 rounded-lg border border-stone-200 overflow-hidden shadow-sm">
        {/* fake browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 border-b border-stone-200">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <div className="ml-2 flex-1 h-3 rounded bg-stone-200/60" />
        </div>
        {/* dashboard area */}
        <div className="p-3 md:p-4" style={{ backgroundColor: visual.background }}>
          <div className="grid grid-cols-2 gap-2 md:gap-2.5">
            {visual.cards.map((c, i) => (
              <div
                key={i}
                className="rounded-md p-2.5 md:p-3"
                style={{ backgroundColor: c.bg }}
              >
                <div
                  className="text-[10px] md:text-[11px] font-semibold uppercase tracking-wider mb-0.5 truncate"
                  style={{ color: c.labelColor }}
                >
                  {c.label}
                </div>
                <div
                  className="text-base md:text-lg font-bold leading-tight mb-1.5"
                  style={{ color: c.valueColor }}
                >
                  {c.value}
                </div>
                <div className="h-1.5 w-full rounded-full bg-black/10 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.max(0, Math.min(1, c.barFill)) * 100}%`,
                      backgroundColor: c.barColor,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* palette strip */}
        {(visual.paletteSwatches || visual.footnote) && (
          <div className="px-3 py-1.5 bg-white border-t border-stone-200 flex items-center justify-between gap-2 text-[11px]">
            {visual.paletteSwatches && visual.paletteSwatches.length > 0 ? (
              <div className="flex items-center gap-1 flex-wrap">
                {visual.paletteSwatches.map((s, i) => (
                  <span
                    key={i}
                    className="w-4 h-4 rounded border border-stone-300"
                    style={{ backgroundColor: s }}
                    title={s}
                  />
                ))}
              </div>
            ) : (
              <span />
            )}
            {visual.footnote && (
              <span className="font-mono text-stone-600">{visual.footnote}</span>
            )}
          </div>
        )}
      </div>
    )
  }
  // landing-mock
  return (
    <div className="mb-3 rounded-lg border border-stone-200 overflow-hidden shadow-sm">
      {/* fake browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 border-b border-stone-200">
        <span className="w-2 h-2 rounded-full bg-red-400" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-green-400" />
        <div className="ml-2 flex-1 h-3 rounded bg-stone-200/60" />
      </div>
      {/* hero */}
      <div className="p-5 md:p-6" style={{ backgroundColor: visual.background }}>
        <h4
          className="text-base md:text-lg font-bold mb-1.5 leading-tight"
          style={{ color: visual.headingColor }}
        >
          {visual.heading}
        </h4>
        <p
          className="text-[12px] md:text-sm mb-3 leading-snug"
          style={{ color: visual.bodyColor }}
        >
          {visual.body}
        </p>
        <button
          type="button"
          className="px-3 py-1.5 text-xs md:text-sm font-semibold rounded-md shadow-sm"
          style={{ backgroundColor: visual.ctaBg, color: visual.ctaColor }}
        >
          {visual.ctaLabel}
        </button>
        {visual.accentBg && (
          <div
            className="mt-3 h-1.5 w-1/2 rounded"
            style={{ backgroundColor: visual.accentBg }}
          />
        )}
      </div>
      {/* palette strip */}
      {(visual.paletteSwatches || visual.footnote) && (
        <div className="px-3 py-1.5 bg-white border-t border-stone-200 flex items-center justify-between gap-2 text-[11px]">
          {visual.paletteSwatches && visual.paletteSwatches.length > 0 ? (
            <div className="flex items-center gap-1">
              {visual.paletteSwatches.map((s, i) => (
                <span
                  key={i}
                  className="w-4 h-4 rounded border border-stone-300"
                  style={{ backgroundColor: s }}
                  title={s}
                />
              ))}
            </div>
          ) : (
            <span />
          )}
          {visual.footnote && (
            <span className="font-mono text-stone-600">{visual.footnote}</span>
          )}
        </div>
      )}
    </div>
  )
}

function BeforeAfterSection({
  title,
  before,
  after,
}: {
  title: string
  before: { label: string; description: string; image?: string; visual?: BeforeAfterVisualProp }
  after: { label: string; description: string; image?: string; visual?: BeforeAfterVisualProp }
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border-2 border-red-200 bg-red-50/50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-600 text-xs font-bold">✗</span>
            </div>
            <span className="text-sm font-semibold text-red-700">{before.label}</span>
          </div>
          {before.image && (
            <img src={before.image} alt={before.label} className="w-full rounded-lg mb-2" loading="lazy" />
          )}
          {before.visual && <VisualDemo visual={before.visual} />}
          <p className="text-sm text-foreground/70"><RichText content={before.description} /></p>
        </div>
        <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="text-emerald-600 text-xs font-bold">✓</span>
            </div>
            <span className="text-sm font-semibold text-emerald-700">{after.label}</span>
          </div>
          {after.image && (
            <img src={after.image} alt={after.label} className="w-full rounded-lg mb-2" loading="lazy" />
          )}
          {after.visual && <VisualDemo visual={after.visual} />}
          <p className="text-sm text-foreground/70"><RichText content={after.description} /></p>
        </div>
      </div>
    </div>
  )
}

function DiagramSection({
  title,
  description,
  items,
}: {
  title: string
  description: string
  items: string[]
}) {
  return (
    <div className="rounded-xl border bg-gradient-to-br from-primary/5 to-accent/30 p-6 space-y-4">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground"><RichText content={description} /></p>
      <div className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="px-3 py-2 rounded-lg bg-background border text-sm font-medium text-foreground shadow-sm">
              {item}
            </div>
            {i < items.length - 1 && (
              <ArrowRight className="w-4 h-4 text-primary shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function CaseStudySection({
  title,
  company,
  problem,
  solution,
  result,
  steps,
}: {
  title: string
  company: string
  problem: string
  solution: string
  result: string
  steps?: { title: string; description: string }[]
}) {
  const labels = useSectionLabels()
  return (
    <div className="rounded-xl border bg-card overflow-hidden">
      <div className="bg-primary/10 px-5 py-3 border-b">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{labels.caseStudy}</span>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <span className="text-sm text-muted-foreground">{company}</span>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <span className="text-xs font-semibold text-red-600 uppercase">{labels.problem}</span>
          <p className="text-sm text-foreground/80 mt-1"><RichText content={problem} /></p>
        </div>
        <div>
          <span className="text-xs font-semibold text-blue-600 uppercase">{labels.solution}</span>
          <p className="text-sm text-foreground/80 mt-1"><RichText content={solution} /></p>
        </div>
        {steps && steps.length > 0 && (
          <div className="space-y-2">
            <span className="text-xs font-semibold text-muted-foreground uppercase">{labels.steps}</span>
            {steps.map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">{i + 1}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-foreground">{step.title}</span>
                  <p className="text-sm text-muted-foreground"><RichText content={step.description} /></p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3">
          <span className="text-xs font-semibold text-emerald-700 uppercase">{labels.result}</span>
          <p className="text-sm text-emerald-800 mt-1"><RichText content={result} /></p>
        </div>
      </div>
    </div>
  )
}

function UserPersonaSection({ persona }: { persona: import('@/data/types').PersonaData }) {
  const labels = useSectionLabels()
  return (
    <div className="rounded-xl border bg-card overflow-hidden">
      <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 px-5 py-4 border-b">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">{persona.name}, {persona.age}</h3>
            <span className="text-sm text-muted-foreground">{persona.role}</span>
          </div>
        </div>
      </div>
      <div className="p-5 space-y-4">
        <p className="text-sm text-foreground/80"><RichText content={persona.bio} /></p>

        {persona.quote && (
          <div className="flex gap-2 px-3 py-2 rounded-lg bg-muted/50 border-l-2 border-primary">
            <Quote className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p className="text-sm italic text-muted-foreground">&laquo;{persona.quote}&raquo;</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Target className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-foreground">{labels.goals}</span>
            </div>
            <ul className="space-y-1">
              {persona.goals.map((g, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">+</span> <RichText content={g} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Frown className="w-4 h-4 text-red-500" />
              <span className="text-sm font-semibold text-foreground">{labels.frustrations}</span>
            </div>
            <ul className="space-y-1">
              {persona.frustrations.map((f, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span> <RichText content={f} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {persona.traits.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {persona.traits.map((t) => (
              <div key={t.label} className="flex justify-between text-sm px-3 py-1.5 rounded bg-muted/40">
                <span className="text-muted-foreground">{t.label}</span>
                <span className="font-medium text-foreground">{t.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function UserFlowSection({
  title,
  steps,
}: {
  title: string
  steps: { id: string; label: string; type: 'start' | 'action' | 'decision' | 'end' }[]
  connections: { from: string; to: string; label?: string }[]
}) {
  const stepStyles = {
    start: 'bg-emerald-100 border-emerald-300 text-emerald-800 rounded-full',
    action: 'bg-blue-50 border-blue-200 text-blue-800 rounded-lg',
    decision: 'bg-amber-50 border-amber-200 text-amber-800 rounded-lg rotate-0',
    end: 'bg-red-100 border-red-300 text-red-800 rounded-full',
  }

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="flex flex-wrap items-center gap-2 p-4 rounded-xl bg-muted/30 border">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-center gap-2">
            <div className={`px-4 py-2 border text-sm font-medium ${stepStyles[step.type]}`}>
              {step.label}
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function ChecklistSection({
  title,
  items,
}: {
  title: string
  items: (string | { text: string; demo?: string })[]
}) {
  const labels = useSectionLabels()
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="space-y-2">
        {items.map((item, i) => {
          const text = typeof item === 'string' ? item : item.text
          const demo = typeof item === 'string' ? undefined : item.demo
          return (
            <div
              key={i}
              className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted/30 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="text-sm text-foreground/80">
                  <RichText content={text} />
                </div>
                {demo && (
                  <div className="mt-1.5 pl-3 border-l-2 border-emerald-200 text-xs text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-emerald-700 mr-1">{labels.demo}</span>
                    <RichText content={demo} />
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Static class map to avoid Tailwind purge issues with dynamic classes
const colsClass: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
}

function ColumnsSection({
  columns,
  variant = 'grid',
}: {
  columns: { title: string; items: string[] }[]
  variant?: 'grid' | 'stacked'
}) {
  if (variant === 'stacked') {
    return (
      <div className="space-y-3">
        {columns.map((col) => (
          <div key={col.title} className="rounded-xl border bg-card p-4">
            <h4 className="font-semibold text-sm text-foreground mb-2"><RichText content={col.title} /></h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
              {col.items.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                  <RichText content={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }
  const cls = colsClass[Math.min(columns.length, 4)] || colsClass[2]
  return (
    <div className={`grid gap-4 ${cls}`}>
      {columns.map((col) => (
        <div key={col.title} className="rounded-xl border bg-card p-4">
          <h4 className="font-semibold text-sm text-foreground mb-3"><RichText content={col.title} /></h4>
          <ul className="space-y-1.5">
            {col.items.map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                <RichText content={item} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function QuoteSection({ text, author, role }: { text: string; author: string; role?: string }) {
  return (
    <blockquote className="border-l-4 border-primary pl-4 py-2">
      <p className="text-base italic text-foreground/80 mb-2">&laquo;{text}&raquo;</p>
      <footer className="text-sm text-muted-foreground">
        — {author}{role && <span className="text-muted-foreground/60">, {role}</span>}
      </footer>
    </blockquote>
  )
}

function ColorPaletteSection({
  data,
}: {
  data: {
    appName: string
    appUrl?: string
    industry?: string
    imageSrc?: string
    imageAlt?: string
    swatches: { hex: string; role: string; name?: string }[]
    rationale?: string
  }
}) {
  // pick black or white text per swatch for contrast
  const onColor = (hex: string) => {
    const m = hex.match(/^#([0-9a-f]{6})$/i)
    if (!m) return '#000'
    const n = parseInt(m[1], 16)
    const r = (n >> 16) & 0xff
    const g = (n >> 8) & 0xff
    const b = n & 0xff
    // perceived luminance
    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255
    return lum > 0.6 ? '#1f2937' : '#FFFFFF'
  }

  return (
    <div className="rounded-2xl border-2 border-stone-200 bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row gap-0">
        {data.imageSrc && (
          <div className="md:w-2/5 bg-stone-50 flex items-center justify-center p-6 md:p-10 border-b md:border-b-0 md:border-r border-stone-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.imageSrc}
              alt={data.imageAlt || data.appName}
              className="max-w-full max-h-[180px] object-contain"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex-1 p-6 md:p-8">
          <div className="flex items-baseline gap-3 flex-wrap mb-1">
            {data.industry && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                {data.industry}
              </span>
            )}
            <h3 className="text-xl font-bold">{data.appName}</h3>
            {data.appUrl && (
              <a
                href={data.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-700 hover:text-emerald-900 underline underline-offset-2"
              >
                live ↗
              </a>
            )}
          </div>

          {data.rationale && (
            <p className="text-sm text-stone-600 mb-4 leading-relaxed">
              <RichText content={data.rationale} />
            </p>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
            {data.swatches.map((s, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden border border-stone-200 shadow-sm flex flex-col"
              >
                <div
                  className="aspect-square flex items-end justify-start p-2"
                  style={{ backgroundColor: s.hex }}
                >
                  <span
                    className="text-[11px] font-mono font-bold uppercase tracking-tight"
                    style={{ color: onColor(s.hex) }}
                  >
                    {s.hex}
                  </span>
                </div>
                <div className="px-2.5 py-2 bg-white">
                  <div className="text-[11px] font-bold text-stone-800 uppercase tracking-wider">
                    {s.role}
                  </div>
                  {s.name && <div className="text-[10px] text-stone-500 mt-0.5">{s.name}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DividerSection() {
  return <hr className="border-border my-2" />
}

function TableSection({
  title,
  headers,
  rows,
  caption,
}: {
  title?: string
  headers: string[]
  rows: string[][]
  caption?: string
}) {
  return (
    <div className="space-y-2">
      {title && <h3 className="text-lg font-semibold text-foreground">{title}</h3>}
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-accent/60">
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="text-left font-semibold text-foreground px-3 py-2 border-b border-border"
                >
                  <RichText content={h} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="odd:bg-background even:bg-accent/20">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="px-3 py-2 align-top text-foreground/80 border-b border-border/60"
                  >
                    <RichText content={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <p className="text-xs text-muted-foreground italic">
          <RichText content={caption} />
        </p>
      )}
    </div>
  )
}

// ---- Main Renderer ----

// Text-heavy sections render at a comfortable reading line length (max 1280px,
// matching ~75 chars on body type). Visual sections (images, diagrams, multi-
// column grids, case-study cards) fill the wider 1440px article container so
// dense infographics don't get squished.
const NARROW_TYPES: ReadonlyArray<Section['type']> = [
  'text',
  'heading',
  'subheading',
  'callout',
  'quote',
  'key-concepts',
  'checklist',
  'divider',
]

function renderSection(section: Section) {
  switch (section.type) {
    case 'text':
      return <TextSection content={section.content} />
    case 'heading':
      return <HeadingSection content={section.content} />
    case 'subheading':
      return <SubheadingSection content={section.content} />
    case 'callout':
      return <CalloutSection variant={section.variant} content={section.content} />
    case 'key-concepts':
      return <KeyConceptsSection concepts={section.concepts} />
    case 'comparison':
      return <ComparisonSection title={section.title} items={section.items} />
    case 'timeline':
      return <TimelineSection events={section.events} />
    case 'image-placeholder':
      return <ImagePlaceholderSection alt={section.alt} caption={section.caption} />
    case 'image':
      return <ImageSection src={section.src} alt={section.alt} caption={section.caption} />
    case 'video':
      return <VideoSection src={section.src} title={section.title} caption={section.caption} />
    case 'before-after':
      return <BeforeAfterSection title={section.title} before={section.before} after={section.after} />
    case 'diagram':
      return <DiagramSection title={section.title} description={section.description} items={section.items} />
    case 'case-study':
      return <CaseStudySection title={section.title} company={section.company} problem={section.problem} solution={section.solution} result={section.result} steps={section.steps} />
    case 'user-persona':
      return <UserPersonaSection persona={section.persona} />
    case 'user-flow':
      return <UserFlowSection title={section.title} steps={section.steps} connections={section.connections} />
    case 'checklist':
      return <ChecklistSection title={section.title} items={section.items} />
    case 'columns':
      return <ColumnsSection columns={section.columns} variant={section.variant} />
    case 'table':
      return (
        <TableSection
          title={section.title}
          headers={section.headers}
          rows={section.rows}
          caption={section.caption}
        />
      )
    case 'quote':
      return <QuoteSection text={section.text} author={section.author} role={section.role} />
    case 'color-palette':
      return <ColorPaletteSection data={section.data} />
    case 'divider':
      return <DividerSection />
    default:
      return null
  }
}

export function SectionRenderer({ section }: { section: Section }) {
  const rendered = renderSection(section)
  if (!rendered) return null
  const isNarrow = NARROW_TYPES.includes(section.type)
  return (
    <div className={isNarrow ? 'mx-auto w-full max-w-[1280px]' : ''}>
      {rendered}
    </div>
  )
}
