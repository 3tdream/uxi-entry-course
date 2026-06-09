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

function ImageSection({
  src,
  alt,
  caption,
  maxWidth,
}: {
  src: string
  alt: string
  caption?: string
  maxWidth?: number
}) {
  const figure = (
    <figure className="rounded-xl overflow-hidden border bg-white">
      <img src={src} alt={alt} className="w-full h-auto" loading="lazy" />
      {caption && (
        <figcaption className="text-xs text-muted-foreground text-center py-2 px-4 bg-muted/30">
          {caption}
        </figcaption>
      )}
    </figure>
  )
  if (maxWidth) {
    return (
      <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
        {figure}
      </div>
    )
  }
  return figure
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
  | {
      kind: 'line-height-sample'
      text: string
      lineHeight: number
      fontSize?: number
      fontStack?: string
      footnote?: string
    }
  | {
      kind: 'typography-stack'
      frame?: 'phone' | 'browser' | 'plain'
      background?: string
      rows: {
        text: string
        fontSize: number
        fontWeight?: number | 'normal' | 'semibold' | 'bold'
        color?: string
        lineHeight?: number
        fontFamily?: string
        letterSpacing?: string
        textTransform?: 'uppercase' | 'none'
        tabular?: boolean
        marginTop?: number
      }[]
      cta?: { label: string; bg: string; color: string; size?: number }
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
  if (visual.kind === 'line-height-sample') {
    const fs = visual.fontSize || 15
    return (
      <div className="mb-3 rounded-lg border border-stone-200 overflow-hidden">
        <div className="p-4 md:p-5 bg-white">
          <p
            className="text-stone-800"
            style={{
              fontSize: `${fs}px`,
              lineHeight: visual.lineHeight,
              fontFamily: visual.fontStack || "Inter, system-ui, sans-serif",
            }}
          >
            {visual.text}
          </p>
        </div>
        <div className="px-3 py-1.5 bg-stone-50 border-t border-stone-200 text-[11px] flex items-center justify-between gap-2">
          <span className="font-mono text-stone-600">
            line-height: <strong className="text-stone-900">{visual.lineHeight}</strong>
            <span className="mx-2 text-stone-400">·</span>
            font-size: <strong className="text-stone-900">{fs}px</strong>
          </span>
          {visual.footnote && (
            <span className="text-stone-500 truncate">{visual.footnote}</span>
          )}
        </div>
      </div>
    )
  }
  if (visual.kind === 'typography-stack') {
    const frame = visual.frame || 'plain'
    const inner = (
      <div
        className="p-4 md:p-5"
        style={{ backgroundColor: visual.background || '#FFFFFF' }}
      >
        {visual.rows.map((r, i) => (
          <div
            key={i}
            style={{
              fontSize: `${r.fontSize}px`,
              fontWeight: r.fontWeight ?? 'normal',
              color: r.color || '#0F172A',
              lineHeight: r.lineHeight ?? 1.3,
              fontFamily: r.fontFamily || "Inter, system-ui, sans-serif",
              letterSpacing: r.letterSpacing,
              textTransform: r.textTransform || 'none',
              fontVariantNumeric: r.tabular ? 'tabular-nums' : undefined,
              marginTop: r.marginTop ? `${r.marginTop}px` : i === 0 ? 0 : '4px',
            }}
          >
            {r.text}
          </div>
        ))}
        {visual.cta && (
          <button
            type="button"
            className="mt-3 px-3 py-1.5 font-semibold rounded-md shadow-sm"
            style={{
              backgroundColor: visual.cta.bg,
              color: visual.cta.color,
              fontSize: `${visual.cta.size || 13}px`,
            }}
          >
            {visual.cta.label}
          </button>
        )}
      </div>
    )
    const footer = visual.footnote && (
      <div className="px-3 py-1.5 bg-stone-50 border-t border-stone-200 text-[11px] font-mono text-stone-600">
        {visual.footnote}
      </div>
    )
    if (frame === 'phone') {
      return (
        <div className="mb-3 mx-auto" style={{ maxWidth: 260 }}>
          <div className="rounded-[28px] border-[6px] border-stone-800 overflow-hidden bg-white shadow-md">
            {/* notch */}
            <div className="bg-stone-800 h-4 flex items-center justify-center">
              <div className="w-12 h-1 rounded-full bg-stone-600" />
            </div>
            {inner}
          </div>
          {footer && (
            <div className="mt-2 rounded-md border border-stone-200 overflow-hidden">{footer}</div>
          )}
        </div>
      )
    }
    if (frame === 'browser') {
      return (
        <div className="mb-3 rounded-lg border border-stone-200 overflow-hidden shadow-sm">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 border-b border-stone-200">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <div className="ml-2 flex-1 h-3 rounded bg-stone-200/60" />
          </div>
          {inner}
          {footer}
        </div>
      )
    }
    return (
      <div className="mb-3 rounded-lg border border-stone-200 overflow-hidden shadow-sm">
        {inner}
        {footer}
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
  image,
  imageAlt,
}: {
  title: string
  company: string
  problem: string
  solution: string
  result: string
  steps?: { title: string; description: string }[]
  image?: string
  imageAlt?: string
}) {
  const labels = useSectionLabels()
  const body = (
    <div className="p-5 space-y-4 flex-1 min-w-0">
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
  )
  return (
    <div className="rounded-xl border bg-card overflow-hidden">
      <div className="bg-primary/10 px-5 py-3 border-b">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{labels.caseStudy}</span>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <span className="text-sm text-muted-foreground">{company}</span>
      </div>
      {image ? (
        <div className="flex flex-col md:flex-row">
          {body}
          <div className="md:w-[300px] lg:w-[340px] shrink-0 border-t md:border-t-0 md:border-l border-border bg-muted/30 flex items-center justify-center p-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={imageAlt || title}
              className="max-h-[460px] w-auto rounded-lg shadow-sm"
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        body
      )}
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

function FontShowcaseSection({
  groups,
}: {
  groups: {
    title: string
    kind: 'serif' | 'sans-serif' | 'monospace'
    families: { name: string; stack: string; description: string; sample?: string }[]
  }[]
}) {
  const kindBadge: Record<string, string> = {
    serif: 'bg-amber-50 text-amber-700 border-amber-200',
    'sans-serif': 'bg-sky-50 text-sky-700 border-sky-200',
    monospace: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  }
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((g) => (
        <div key={g.title} className="rounded-xl border-2 border-stone-200 bg-white overflow-hidden">
          <div className="px-4 py-3 border-b border-stone-200 flex items-center justify-between gap-2">
            <h4 className="font-semibold text-sm text-foreground">{g.title}</h4>
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${kindBadge[g.kind] || ''}`}
            >
              {g.kind}
            </span>
          </div>
          <ul className="divide-y divide-stone-200">
            {g.families.map((f) => (
              <li key={f.name} className="px-4 py-3">
                <div
                  className="text-2xl leading-none mb-1 text-stone-900"
                  style={{ fontFamily: f.stack }}
                >
                  {f.sample || f.name}
                </div>
                <div className="text-[11px] text-stone-500 leading-snug">
                  <span className="font-mono text-stone-700 font-semibold">{f.name}</span>
                  <span className="mx-1.5">·</span>
                  <span>{f.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

type FontPairProp = {
  headingName: string
  headingStack: string
  headingSample?: string
  bodyName: string
  bodyStack: string
  bodySample?: string
  note: string
  chaosWords?: { text: string; stack: string }[]
}

function FontPairCard({ pair, verdict }: { pair: FontPairProp; verdict: 'good' | 'bad' }) {
  const tone =
    verdict === 'good'
      ? 'border-emerald-200 bg-emerald-50/30'
      : 'border-red-200 bg-red-50/30'
  const iconTone =
    verdict === 'good'
      ? 'bg-emerald-100 text-emerald-700'
      : 'bg-red-100 text-red-700'
  return (
    <div className={`rounded-xl border-2 ${tone} p-4 md:p-5`}>
      <div className="bg-white rounded-lg border border-stone-200 p-4 mb-3">
        {pair.chaosWords && pair.chaosWords.length > 0 ? (
          <h4 className="text-2xl md:text-[28px] font-bold leading-tight mb-2 text-stone-900">
            {pair.chaosWords.map((w, i) => (
              <span key={i} style={{ fontFamily: w.stack }}>
                {i > 0 ? ' ' : ''}
                {w.text}
              </span>
            ))}
          </h4>
        ) : (
          <h4
            className="text-2xl md:text-[28px] font-bold leading-tight mb-2 text-stone-900"
            style={{ fontFamily: pair.headingStack }}
          >
            {pair.headingSample || 'The quick brown fox'}
          </h4>
        )}
        <p
          className="text-sm md:text-[15px] text-stone-700 leading-relaxed"
          style={{ fontFamily: pair.bodyStack }}
        >
          {pair.bodySample ||
            'Jumps over the lazy dog. Five wizards quickly conjure both pixel-perfect glyphs and a clear visual hierarchy.'}
        </p>
      </div>
      <div className="flex items-start gap-2">
        <span
          className={`inline-flex w-5 h-5 rounded-full items-center justify-center text-xs font-bold shrink-0 ${iconTone}`}
        >
          {verdict === 'good' ? '✓' : '✗'}
        </span>
        <div className="text-xs text-stone-700 leading-snug">
          <span className="font-mono text-stone-900 font-semibold">
            {pair.headingName} + {pair.bodyName}
          </span>
          <span className="block mt-0.5 text-stone-600">{pair.note}</span>
        </div>
      </div>
    </div>
  )
}

function FontPairShowcaseSection({
  title,
  goodLabel,
  badLabel,
  good,
  bad,
}: {
  title?: string
  goodLabel?: string
  badLabel?: string
  good: FontPairProp[]
  bad: FontPairProp[]
}) {
  return (
    <div className="space-y-4">
      {title && <h3 className="text-lg font-semibold text-foreground">{title}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex w-6 h-6 rounded-full items-center justify-center text-xs font-bold bg-emerald-100 text-emerald-700">
              ✓
            </span>
            <span className="text-sm font-semibold text-emerald-700">
              {goodLabel || 'Working pairs'}
            </span>
          </div>
          <div className="space-y-3">
            {good.map((p, i) => (
              <FontPairCard key={i} pair={p} verdict="good" />
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex w-6 h-6 rounded-full items-center justify-center text-xs font-bold bg-red-100 text-red-700">
              ✗
            </span>
            <span className="text-sm font-semibold text-red-700">
              {badLabel || 'Poor combinations'}
            </span>
          </div>
          <div className="space-y-3">
            {bad.map((p, i) => (
              <FontPairCard key={i} pair={p} verdict="bad" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TypeScaleShowcaseSection({
  title,
  description,
  ratio,
  base,
  fontStack,
  steps,
}: {
  title?: string
  description?: string
  ratio?: string
  base?: string
  fontStack?: string
  steps: { label: string; px: number; rem: string; usage: string; sample?: string }[]
}) {
  const stack = fontStack || "Inter, system-ui, -apple-system, sans-serif"
  return (
    <div className="rounded-2xl border-2 border-stone-200 bg-white overflow-hidden">
      {(title || description) && (
        <div className="px-4 md:px-6 py-3 border-b border-stone-200 bg-stone-50/60">
          {title && <h3 className="text-base font-semibold text-foreground">{title}</h3>}
          {(description || ratio || base) && (
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-stone-600">
              {description && <span>{description}</span>}
              {ratio && (
                <span className="font-mono">
                  <span className="text-stone-400">ratio</span> <strong>{ratio}</strong>
                </span>
              )}
              {base && (
                <span className="font-mono">
                  <span className="text-stone-400">base</span> <strong>{base}</strong>
                </span>
              )}
            </div>
          )}
        </div>
      )}
      <table className="w-full">
        <thead className="text-[10px] uppercase tracking-wider text-stone-500 bg-stone-50/40">
          <tr>
            <th className="text-left px-4 md:px-6 py-2 w-16">Step</th>
            <th className="text-left px-2 py-2 w-24">Size</th>
            <th className="text-left px-2 py-2">Sample</th>
            <th className="text-left px-4 md:px-6 py-2 hidden md:table-cell">Usage</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((s) => (
            <tr key={s.label} className="border-t border-stone-100 align-middle">
              <td className="px-4 md:px-6 py-3 font-mono text-xs font-bold text-stone-900">{s.label}</td>
              <td className="px-2 py-3 font-mono text-[11px] text-stone-500 whitespace-nowrap">
                {s.px}px <span className="text-stone-400">· {s.rem}</span>
              </td>
              <td className="px-2 py-3 text-stone-900 leading-none">
                <span
                  className="font-semibold"
                  style={{ fontFamily: stack, fontSize: `${s.px}px`, lineHeight: 1.1 }}
                >
                  {s.sample || 'Aa Bb Cc'}
                </span>
              </td>
              <td className="px-4 md:px-6 py-3 text-xs text-stone-600 hidden md:table-cell">
                {s.usage}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SpacingScaleShowcaseSection({
  title,
  description,
  baseUnit,
  steps,
}: {
  title?: string
  description?: string
  baseUnit?: number
  steps: { px: number; rem?: string; token?: string; usage: string }[]
}) {
  const max = Math.max(...steps.map((s) => s.px), 1)
  return (
    <div className="rounded-2xl border-2 border-stone-200 bg-white overflow-hidden">
      {(title || description) && (
        <div className="px-4 md:px-6 py-3 border-b border-stone-200 bg-stone-50/60">
          {title && <h3 className="text-base font-semibold text-foreground">{title}</h3>}
          {(description || baseUnit) && (
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-stone-600">
              {description && <span>{description}</span>}
              {baseUnit && (
                <span className="font-mono">
                  <span className="text-stone-400">base</span> <strong>{baseUnit}px</strong>
                </span>
              )}
            </div>
          )}
        </div>
      )}
      <ul className="divide-y divide-stone-100">
        {steps.map((s) => {
          const widthPct = (s.px / max) * 100
          return (
            <li key={s.px + (s.token || '')} className="flex items-center gap-3 px-4 md:px-6 py-2.5">
              <div className="flex items-baseline gap-2 w-28 shrink-0">
                <span className="font-mono text-sm font-bold text-stone-900">{s.px}px</span>
                {s.rem && <span className="font-mono text-[11px] text-stone-400">{s.rem}</span>}
              </div>
              {s.token && (
                <span className="font-mono text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-1.5 py-0.5 hidden md:inline-block">
                  {s.token}
                </span>
              )}
              <div className="flex-1 relative">
                <div
                  className="h-3 rounded-sm bg-indigo-500"
                  style={{ width: `${widthPct}%` }}
                  aria-hidden
                />
              </div>
              <span className="text-xs text-stone-600 w-56 md:w-72 shrink-0 truncate">
                {s.usage}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function ColumnSplitShowcaseSection({
  title,
  description,
  total,
  rows,
}: {
  title?: string
  description?: string
  total?: number
  rows: { label: string; spans: { span: number; tone?: 'primary' | 'secondary' | 'muted'; label?: string }[]; note?: string }[]
}) {
  const N = total || 12
  const toneCls: Record<string, string> = {
    primary: 'bg-indigo-500 border-indigo-600 text-white',
    secondary: 'bg-indigo-200 border-indigo-300 text-indigo-900',
    muted: 'bg-stone-200 border-stone-300 text-stone-700',
  }
  return (
    <div className="rounded-2xl border-2 border-stone-200 bg-white overflow-hidden">
      {(title || description) && (
        <div className="px-4 md:px-6 py-3 border-b border-stone-200 bg-stone-50/60">
          {title && <h3 className="text-base font-semibold text-foreground">{title}</h3>}
          {description && <p className="mt-0.5 text-[11px] text-stone-600">{description}</p>}
        </div>
      )}
      <ul className="divide-y divide-stone-100">
        {rows.map((row, ri) => (
          <li key={ri} className="px-4 md:px-6 py-3">
            <div className="flex items-baseline justify-between gap-3 mb-1.5">
              <span className="font-mono text-xs font-semibold text-stone-900">{row.label}</span>
              {row.note && <span className="text-[11px] text-stone-500">{row.note}</span>}
            </div>
            <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${N}, minmax(0, 1fr))` }}>
              {row.spans.map((s, i) => {
                const tone = s.tone || (i % 2 === 0 ? 'primary' : 'secondary')
                return (
                  <div
                    key={i}
                    className={`h-9 md:h-10 rounded-md border flex items-center justify-center text-[10px] md:text-[11px] font-mono font-bold ${toneCls[tone]}`}
                    style={{ gridColumn: `span ${s.span} / span ${s.span}` }}
                  >
                    {s.label || s.span}
                  </div>
                )
              })}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function IphoneSafeAreaDemoSection({
  title,
  description,
  labels,
}: {
  title?: string
  description?: string
  labels?: { dynamicIsland?: string; statusBar?: string; safeArea?: string; homeIndicator?: string }
}) {
  const { lang } = useLanguage()
  const COPY = {
    ru: {
      safeAreaCenter: 'Safe Area',
      safeAreaSub: ['всё, что выше/ниже —', 'системные зоны'],
      dynamicIsland: 'Dynamic Island / Notch',
      statusBar: 'Status Bar',
      safeArea: 'Safe Area (контент)',
      homeIndicator: 'Home Indicator',
      dynamicIslandDesc:
        'Физический «остров» вокруг камеры и сенсоров на iPhone 14 Pro+ (раньше — notch). Туда нельзя класть кликабельные элементы.',
      statusBarDesc:
        'Верхняя полоса с часами, сигналом, батареей. Система рисует её поверх — твой контент туда не должен залезать.',
      safeAreaDesc:
        '«Зелёная» зона = единственная безопасная область для контента. На iOS получают через ',
      safeAreaDescTail: ' в CSS.',
      homeIndicatorDesc:
        'Тонкая полоса внизу для свайпа в Home. На iPhone без Home-кнопки. CTA-кнопки нужно поднять выше неё, иначе тап случайно закроет приложение.',
    },
    en: {
      safeAreaCenter: 'Safe Area',
      safeAreaSub: ['anything above/below =', 'system zones'],
      dynamicIsland: 'Dynamic Island / Notch',
      statusBar: 'Status Bar',
      safeArea: 'Safe Area (content)',
      homeIndicator: 'Home Indicator',
      dynamicIslandDesc:
        'Physical "island" around the camera and sensors on iPhone 14 Pro+ (previously a notch). Never place tappable elements there.',
      statusBarDesc:
        'Top strip with the clock, signal, battery. The system draws it on top — your content must not bleed into it.',
      safeAreaDesc:
        'The green zone = the only safe region for content. On iOS you get it via ',
      safeAreaDescTail: ' in CSS.',
      homeIndicatorDesc:
        'Thin bar at the bottom for swiping Home, on iPhones without a Home button. CTAs must sit above it — otherwise a tap accidentally closes the app.',
    },
  } as const
  const c = COPY[lang]
  const L = {
    dynamicIsland: labels?.dynamicIsland || c.dynamicIsland,
    statusBar: labels?.statusBar || c.statusBar,
    safeArea: labels?.safeArea || c.safeArea,
    homeIndicator: labels?.homeIndicator || c.homeIndicator,
  }
  return (
    <div className="rounded-2xl border-2 border-stone-200 bg-white overflow-hidden">
      {(title || description) && (
        <div className="px-4 md:px-6 py-3 border-b border-stone-200 bg-stone-50/60">
          {title && <h3 className="text-base font-semibold text-foreground">{title}</h3>}
          {description && <p className="mt-0.5 text-[12px] text-stone-600">{description}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 md:p-6 items-center">
        {/* Phone frame */}
        <div className="flex justify-center">
          <div className="relative rounded-[40px] border-[8px] border-stone-900 bg-white shadow-lg" style={{ width: 240, height: 480 }}>
            {/* Dynamic Island */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2 w-24 h-7 rounded-full bg-stone-900 z-10" />
            {/* Status bar zone */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-amber-100/60 border-b border-dashed border-amber-300 flex items-end justify-end px-3 pb-1">
              <span className="text-[9px] font-mono text-amber-800">9:41 · 100%</span>
            </div>
            {/* Safe area / content */}
            <div className="absolute top-12 bottom-10 left-0 right-0 bg-emerald-50/70 border-y border-dashed border-emerald-300 flex items-center justify-center p-3">
              <div className="text-center">
                <div className="text-[11px] font-bold text-emerald-800 mb-1">{c.safeAreaCenter}</div>
                <div className="text-[9px] text-emerald-700/80 leading-snug">
                  {c.safeAreaSub[0]}<br/>{c.safeAreaSub[1]}
                </div>
              </div>
            </div>
            {/* Home indicator zone */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-rose-100/60 border-t border-dashed border-rose-300 flex items-end justify-center pb-1.5">
              <div className="w-20 h-1 rounded-full bg-stone-900" />
            </div>
          </div>
        </div>
        {/* Legend */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="w-3 h-3 rounded-full bg-stone-900 shrink-0 mt-1" />
            <div>
              <div className="text-sm font-bold text-stone-900">{L.dynamicIsland}</div>
              <p className="text-xs text-stone-600 leading-snug mt-0.5">{c.dynamicIslandDesc}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-3 h-3 rounded-sm bg-amber-300 shrink-0 mt-1 border border-amber-400" />
            <div>
              <div className="text-sm font-bold text-stone-900">{L.statusBar}</div>
              <p className="text-xs text-stone-600 leading-snug mt-0.5">{c.statusBarDesc}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-3 h-3 rounded-sm bg-emerald-300 shrink-0 mt-1 border border-emerald-400" />
            <div>
              <div className="text-sm font-bold text-stone-900">{L.safeArea}</div>
              <p className="text-xs text-stone-600 leading-snug mt-0.5">
                {c.safeAreaDesc}
                <span className="font-mono">env(safe-area-inset-*)</span>
                {c.safeAreaDescTail}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-3 h-3 rounded-sm bg-rose-300 shrink-0 mt-1 border border-rose-400" />
            <div>
              <div className="text-sm font-bold text-stone-900">{L.homeIndicator}</div>
              <p className="text-xs text-stone-600 leading-snug mt-0.5">{c.homeIndicatorDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NineVisualElementsSection({ title, description }: { title?: string; description?: string }) {
  const { lang } = useLanguage()
  type Demo = { key: string; name: string; def: string; visual: React.ReactNode }
  const COPY = {
    ru: {
      defaultTitle: '9 базовых визуальных элементов',
      defaultDesc: 'Лексикон, на котором стоит вся графика и интерфейсы. Каждый шрифт, кнопка и иконка — это комбинация этих девяти.',
      items: {
        point: { name: 'Точка', def: 'Самый маленький элемент. Привлекает взгляд. Точка перед текстом в списке.' },
        line: { name: 'Линия', def: 'Соединяет, разделяет, направляет взгляд. Подчёркивания, divider-ы.' },
        shape: { name: 'Форма', def: '2D-фигура с границей. Кнопка, карточка, иконка — это формы.' },
        form: { name: 'Объём', def: '3D-ощущение через тени и градиенты. Skeuomorphism + Material elevation.' },
        color: { name: 'Цвет', def: 'Эмоция и иерархия за миллисекунды. Подробно был в M6.' },
        value: { name: 'Тон (Value)', def: 'Светлота-темнота, независимо от цвета. Основа контраста.' },
        texture: { name: 'Текстура', def: 'Визуальное «ощущение» поверхности. Noise, grain, узоры.' },
        space: { name: 'Пространство', def: 'Воздух между элементами. Самый недооценённый «элемент».' },
        type: { name: 'Шрифт', def: 'Семейство, начертание, размер. Подробно был в M7.' },
      },
    },
    en: {
      defaultTitle: '9 core visual elements',
      defaultDesc: 'The vocabulary that every graphic and interface is built on. Every font, button, icon = a combination of these nine.',
      items: {
        point: { name: 'Point', def: 'The smallest element. Draws the eye. The bullet before a list item.' },
        line: { name: 'Line', def: 'Connects, divides, directs the eye. Underlines, dividers.' },
        shape: { name: 'Shape', def: '2D form with a boundary. A button, a card, an icon — all are shapes.' },
        form: { name: 'Form', def: '3D feel via shadows and gradients. Skeuomorphism + Material elevation.' },
        color: { name: 'Color', def: 'Emotion and hierarchy in milliseconds. Deep dive: M6.' },
        value: { name: 'Value', def: 'Lightness-darkness independent of hue. The foundation of contrast.' },
        texture: { name: 'Texture', def: 'The visual "feel" of a surface. Noise, grain, patterns.' },
        space: { name: 'Space', def: 'The air between elements. The most underrated "element."' },
        type: { name: 'Type', def: 'Family, weight, size. Deep dive: M7.' },
      },
    },
  } as const
  const c = COPY[lang]
  const demos: Demo[] = [
    { key: 'point', ...c.items.point, visual: <span className="w-2.5 h-2.5 rounded-full bg-stone-900 inline-block" /> },
    { key: 'line', ...c.items.line, visual: <span className="block w-12 h-[2px] bg-stone-900" /> },
    { key: 'shape', ...c.items.shape, visual: <span className="block w-7 h-7 bg-indigo-500 rounded-md" /> },
    { key: 'form', ...c.items.form, visual: <span className="block w-7 h-7 rounded-md" style={{ background: 'linear-gradient(135deg, #6366F1, #312E81)', boxShadow: '2px 3px 6px rgba(15,23,42,0.25)' }} /> },
    { key: 'color', ...c.items.color, visual: <span className="flex gap-1"><span className="w-3.5 h-7 bg-rose-500 rounded-sm" /><span className="w-3.5 h-7 bg-amber-400 rounded-sm" /><span className="w-3.5 h-7 bg-emerald-500 rounded-sm" /><span className="w-3.5 h-7 bg-sky-500 rounded-sm" /></span> },
    { key: 'value', ...c.items.value, visual: <span className="block w-14 h-7 rounded-sm" style={{ background: 'linear-gradient(to right, #FFFFFF, #0F172A)', border: '1px solid #d6d3d1' }} /> },
    { key: 'texture', ...c.items.texture, visual: <span className="block w-12 h-7 rounded-sm" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '4px 4px', border: '1px solid #d6d3d1' }} /> },
    { key: 'space', ...c.items.space, visual: <span className="inline-flex items-center gap-5"><span className="w-2.5 h-2.5 rounded-full bg-stone-900 inline-block" /><span className="w-2.5 h-2.5 rounded-full bg-stone-900 inline-block" /></span> },
    { key: 'type', ...c.items.type, visual: <span className="inline-block text-2xl font-bold leading-none text-stone-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Aa</span> },
  ]
  return (
    <div className="rounded-2xl border-2 border-stone-200 bg-white overflow-hidden">
      <div className="px-4 md:px-6 py-3 border-b border-stone-200 bg-stone-50/60">
        <h3 className="text-base font-semibold text-foreground">{title || c.defaultTitle}</h3>
        <p className="mt-0.5 text-[12px] text-stone-600">{description || c.defaultDesc}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        {demos.map((d, i) => (
          <div
            key={d.key}
            className={`p-4 md:p-5 flex items-start gap-4 ${i % 3 !== 2 ? 'lg:border-r' : ''} ${i < demos.length - (demos.length % 3 || 3) ? 'lg:border-b' : ''} border-stone-100`}
          >
            <div className="w-14 h-14 rounded-lg border border-stone-200 bg-stone-50 flex items-center justify-center shrink-0">
              {d.visual}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 mb-0.5">
                <span className="text-[10px] font-mono font-bold text-stone-400">#{i + 1}</span>
                <h4 className="text-sm font-bold text-stone-900">{d.name}</h4>
              </div>
              <p className="text-xs text-stone-600 leading-snug">{d.def}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function UxPatternsLibrarySection({ title, description }: { title?: string; description?: string }) {
  const { lang } = useLanguage()
  type Card = { key: string; name: string; when: string; tip: string; visual: React.ReactNode }
  const COPY = {
    ru: {
      title: 'Каталог UX-паттернов',
      desc: '8 классических паттернов поведения интерфейса. Запоминай не только как выглядит — а **когда применять**.',
      cards: {
        modal: { name: 'Modal / Dialog', when: 'Когда юзеру нужно решить задачу до возврата к основному потоку (подтверждение, выбор, форма).', tip: 'Всегда показывай Esc-close и затемнение backdrop. Не больше 1 на экране.' },
        toast: { name: 'Toast / Snackbar', when: 'Подтверждение действия, которое уже произошло («Сохранено», «Удалено»).', tip: 'Авто-скрытие 3-5 сек. Для критичных ошибок — НЕ toast (юзер не успеет прочитать).' },
        skeleton: { name: 'Skeleton loader', when: 'Загрузка содержимого, у которого известна структура (карточки, лента).', tip: 'Лучше spinner-а: даёт ощущение «уже почти», снижает воспринимаемое время на 20-30%.' },
        empty: { name: 'Empty State', when: 'Первый запуск, отсутствие данных, очищенный фильтр.', tip: 'Объясни почему пусто + дай **конкретное** первое действие. Не оставляй голым.' },
        breadcrumb: { name: 'Breadcrumb', when: 'Глубокая иерархия (3+ уровня): магазин, документация, файловая система.', tip: 'Не нужен для одноуровневых сайтов и линейных мастеров.' },
        tabs: { name: 'Tabs', when: 'Параллельные виды одного объекта (Profile · Activity · Settings).', tip: '≤ 5 табов. Если больше — это не табы, а sidebar или dropdown.' },
        pagination: { name: 'Pagination', when: 'Поисковая выдача, каталог товаров, где порядок важен и юзер хочет вернуться.', tip: 'На бесконечных лентах — infinite scroll. На сравнении/выборе — pagination.' },
        searchSug: { name: 'Search with suggestions', when: 'Большая база, юзер не знает точного запроса (товары, статьи, контакты).', tip: 'Показывай top-5 после 2-х букв. Подсвечивай совпадение.' },
      },
    },
    en: {
      title: 'UX patterns library',
      desc: '8 classic interface behavior patterns. Memorize not just the look — but **when to use each**.',
      cards: {
        modal: { name: 'Modal / Dialog', when: 'When the user must complete one task before returning to the main flow (confirm, choose, fill).', tip: 'Always include Esc-to-close and a backdrop. No more than 1 modal on screen at a time.' },
        toast: { name: 'Toast / Snackbar', when: 'Confirmation that something already happened ("Saved", "Deleted").', tip: 'Auto-dismiss 3-5s. Critical errors should NOT be toasts (the user may miss them).' },
        skeleton: { name: 'Skeleton loader', when: 'Loading content with a known structure (cards, lists, feeds).', tip: 'Better than a spinner: feels "almost there" and cuts perceived wait by 20-30%.' },
        empty: { name: 'Empty State', when: 'First launch, no data, fully filtered out.', tip: 'Explain why empty + give a **specific** first action. Never leave it bare.' },
        breadcrumb: { name: 'Breadcrumb', when: 'Deep hierarchy (3+ levels): a shop, docs, file system.', tip: 'Not needed for flat sites or linear wizards.' },
        tabs: { name: 'Tabs', when: 'Parallel views of one object (Profile · Activity · Settings).', tip: '≤ 5 tabs. More than that is not tabs — it is a sidebar or dropdown.' },
        pagination: { name: 'Pagination', when: 'Search results or catalog where order matters and users want to come back.', tip: 'Infinite feeds → infinite scroll. Choose/compare flows → pagination.' },
        searchSug: { name: 'Search with suggestions', when: 'Large dataset, user does not know the exact query (products, articles, contacts).', tip: 'Show top-5 after 2 characters typed. Highlight the matched substring.' },
      },
    },
  } as const
  const c = COPY[lang]
  // Tiny CSS visuals per pattern
  const v = {
    modal: (
      <div className="relative w-full h-20 bg-stone-900/70 rounded-md overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-12 bg-white rounded-md shadow-lg flex items-center justify-center text-[8px] font-semibold text-stone-700">Confirm?</div>
      </div>
    ),
    toast: (
      <div className="relative w-full h-20 bg-stone-100 rounded-md overflow-hidden">
        <div className="absolute left-1/2 bottom-2 -translate-x-1/2 px-2 py-1 bg-stone-900 text-white text-[9px] rounded-md shadow-md whitespace-nowrap">✓ Saved</div>
      </div>
    ),
    skeleton: (
      <div className="w-full h-20 bg-white border border-stone-200 rounded-md p-2 flex flex-col gap-1.5 overflow-hidden">
        <div className="h-2 w-2/3 bg-stone-200 rounded animate-pulse" />
        <div className="h-2 w-full bg-stone-200 rounded animate-pulse" />
        <div className="h-2 w-1/2 bg-stone-200 rounded animate-pulse" />
        <div className="h-6 w-1/3 bg-stone-200 rounded animate-pulse mt-auto" />
      </div>
    ),
    empty: (
      <div className="w-full h-20 bg-white border border-stone-200 rounded-md flex flex-col items-center justify-center text-stone-500">
        <span className="text-xl">📭</span>
        <span className="text-[9px] mt-0.5">No items yet</span>
        <span className="text-[8px] px-1.5 py-0.5 mt-1 bg-indigo-500 text-white rounded">+ Add first</span>
      </div>
    ),
    breadcrumb: (
      <div className="w-full h-20 bg-white border border-stone-200 rounded-md p-2 flex items-center text-[9px] font-mono text-stone-500 overflow-hidden">
        <span>Home</span><span className="mx-1">›</span><span>Docs</span><span className="mx-1">›</span><span>API</span><span className="mx-1">›</span><span className="text-stone-900 font-bold">Endpoints</span>
      </div>
    ),
    tabs: (
      <div className="w-full h-20 bg-white border border-stone-200 rounded-md overflow-hidden">
        <div className="flex border-b border-stone-200 text-[9px]">
          <div className="px-2 py-1 border-b-2 border-indigo-600 text-indigo-600 font-semibold">Profile</div>
          <div className="px-2 py-1 text-stone-500">Activity</div>
          <div className="px-2 py-1 text-stone-500">Settings</div>
        </div>
        <div className="p-2 text-[9px] text-stone-400">Profile content…</div>
      </div>
    ),
    pagination: (
      <div className="w-full h-20 bg-white border border-stone-200 rounded-md flex items-center justify-center gap-1 text-[10px] font-mono">
        <span className="px-1.5 py-0.5 bg-stone-100 rounded">‹</span>
        <span className="px-1.5 py-0.5">1</span>
        <span className="px-1.5 py-0.5 bg-indigo-500 text-white rounded font-bold">2</span>
        <span className="px-1.5 py-0.5">3</span>
        <span className="px-1 text-stone-400">…</span>
        <span className="px-1.5 py-0.5">10</span>
        <span className="px-1.5 py-0.5 bg-stone-100 rounded">›</span>
      </div>
    ),
    searchSug: (
      <div className="w-full h-20 bg-white border border-stone-200 rounded-md overflow-hidden">
        <div className="px-2 py-1 border-b border-stone-200 text-[9px] text-stone-600 font-mono">🔍 lat…</div>
        <div className="text-[9px]">
          <div className="px-2 py-0.5 bg-indigo-50"><strong>Lat</strong>te macchiato</div>
          <div className="px-2 py-0.5"><strong>Lat</strong>te ice</div>
          <div className="px-2 py-0.5"><strong>Lat</strong>e checkout</div>
        </div>
      </div>
    ),
  }
  const cards: Card[] = [
    { key: 'modal', ...c.cards.modal, visual: v.modal },
    { key: 'toast', ...c.cards.toast, visual: v.toast },
    { key: 'skeleton', ...c.cards.skeleton, visual: v.skeleton },
    { key: 'empty', ...c.cards.empty, visual: v.empty },
    { key: 'breadcrumb', ...c.cards.breadcrumb, visual: v.breadcrumb },
    { key: 'tabs', ...c.cards.tabs, visual: v.tabs },
    { key: 'pagination', ...c.cards.pagination, visual: v.pagination },
    { key: 'searchSug', ...c.cards.searchSug, visual: v.searchSug },
  ]
  return (
    <div className="rounded-2xl border-2 border-stone-200 bg-white overflow-hidden">
      <div className="px-4 md:px-6 py-3 border-b border-stone-200 bg-stone-50/60">
        <h3 className="text-base font-semibold text-foreground">{title || c.title}</h3>
        <p className="mt-0.5 text-[12px] text-stone-600">{description || c.desc}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {cards.map((card, i) => (
          <div
            key={card.key}
            className={`p-4 ${i % 2 !== 1 ? 'sm:border-r' : ''} ${i % 4 !== 3 ? 'lg:border-r' : 'sm:border-r-0 lg:border-r-0'} ${i < cards.length - 2 ? 'sm:border-b' : ''} ${i < cards.length - 4 ? 'lg:border-b lg:border-b-0' : ''} border-stone-100`}
          >
            {card.visual}
            <h4 className="text-sm font-bold text-stone-900 mt-3 mb-1">{card.name}</h4>
            <p className="text-[11px] text-stone-600 leading-snug mb-2"><strong className="text-stone-700">{lang === 'ru' ? 'Когда:' : 'When:'}</strong> {card.when}</p>
            <p className="text-[11px] text-emerald-700 leading-snug"><strong>{lang === 'ru' ? '💡' : '💡'}</strong> {card.tip}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function UiComponentsLibrarySection({ title, description }: { title?: string; description?: string }) {
  const { lang } = useLanguage()
  type Card = { key: string; name: string; states: string; tip: string; visual: React.ReactNode }
  const COPY = {
    ru: {
      title: 'Каталог Core UI Components',
      desc: '10 атомов, из которых собирается любой интерфейс. Каждый имеет варианты и состояния — это то, что закладывают в дизайн-токены.',
      cards: {
        button: { name: 'Button', states: 'primary · secondary · ghost · destructive · sizes sm/md/lg · default/hover/pressed/disabled', tip: '1 primary CTA на экран. Всё остальное — secondary/ghost.' },
        input: { name: 'Text Input', states: 'default · focus · filled · error · disabled · с label и helper text', tip: 'Подпись СВЕРХУ. Placeholder ≠ label (исчезает при вводе).' },
        select: { name: 'Select / Dropdown', states: 'closed · open · selected · search-inside (combobox)', tip: 'Если ≤ 5 опций — лучше radio. Select — для длинных списков.' },
        checkbox: { name: 'Checkbox', states: 'unchecked · checked · indeterminate · disabled', tip: 'Множественный выбор. Для one-of-many — radio.' },
        radio: { name: 'Radio', states: 'unchecked · selected · disabled', tip: 'Только когда выбор взаимоисключающий. Минимум 2 опции.' },
        toggle: { name: 'Toggle / Switch', states: 'on · off · disabled', tip: 'Применяется **мгновенно** (без Save). Если нужен Save — это checkbox.' },
        card: { name: 'Card', states: 'flat · elevated · interactive · selected · loading (skeleton)', tip: 'Радиус, тень и padding — токены дизайн-системы. Не выдумывай свои.' },
        badge: { name: 'Badge / Tag', states: 'success · warning · error · info · neutral · removable (chip)', tip: 'Короткая (1-2 слова). Для длинных meta — обычный текст.' },
        avatar: { name: 'Avatar', states: 'image · initials · icon · with status indicator · sizes xs-xl', tip: 'Fallback на initials когда нет фото. Группа — overlap с +N.' },
        tooltip: { name: 'Tooltip', states: 'hover · focus (a11y!) · top/bottom/left/right placement', tip: 'Никогда не клади туда критичную информацию — на тач-экранах hover нет.' },
      },
    },
    en: {
      title: 'Core UI Components library',
      desc: '10 atoms every interface is built from. Each has variants and states — exactly what design tokens encode.',
      cards: {
        button: { name: 'Button', states: 'primary · secondary · ghost · destructive · sizes sm/md/lg · default/hover/pressed/disabled', tip: 'One primary CTA per screen. Everything else is secondary/ghost.' },
        input: { name: 'Text Input', states: 'default · focus · filled · error · disabled · with label and helper text', tip: 'Label ABOVE the field. Placeholder is not a label (disappears on input).' },
        select: { name: 'Select / Dropdown', states: 'closed · open · selected · searchable (combobox)', tip: '≤ 5 options → use radios. Use Select for long lists.' },
        checkbox: { name: 'Checkbox', states: 'unchecked · checked · indeterminate · disabled', tip: 'Multiple choice. For one-of-many use radios.' },
        radio: { name: 'Radio', states: 'unchecked · selected · disabled', tip: 'Only when choices are mutually exclusive. Minimum 2 options.' },
        toggle: { name: 'Toggle / Switch', states: 'on · off · disabled', tip: 'Applied **instantly** (no Save). If a Save step is needed → checkbox.' },
        card: { name: 'Card', states: 'flat · elevated · interactive · selected · loading (skeleton)', tip: 'Radius, shadow and padding live in design tokens. Do not improvise.' },
        badge: { name: 'Badge / Tag', states: 'success · warning · error · info · neutral · removable (chip)', tip: 'Keep it short (1-2 words). For long meta use plain text.' },
        avatar: { name: 'Avatar', states: 'image · initials · icon · with status dot · sizes xs–xl', tip: 'Fallback to initials when there is no photo. Group avatars overlap with +N.' },
        tooltip: { name: 'Tooltip', states: 'hover · focus (a11y!) · top/bottom/left/right placement', tip: 'Never put critical info in tooltips — touch devices have no hover.' },
      },
    },
  } as const
  const c = COPY[lang]
  const v = {
    button: (
      <div className="flex flex-wrap items-center gap-1.5 w-full h-20 bg-stone-50 border border-stone-200 rounded-md p-2">
        <span className="px-2 py-1 bg-indigo-600 text-white text-[9px] font-semibold rounded">Primary</span>
        <span className="px-2 py-1 bg-white border border-stone-300 text-stone-700 text-[9px] font-semibold rounded">Secondary</span>
        <span className="px-2 py-1 text-stone-600 text-[9px] font-semibold rounded">Ghost</span>
        <span className="px-2 py-1 bg-red-600 text-white text-[9px] font-semibold rounded">Delete</span>
      </div>
    ),
    input: (
      <div className="w-full h-20 bg-stone-50 border border-stone-200 rounded-md p-2">
        <div className="text-[8px] font-semibold text-stone-700 mb-0.5">Email</div>
        <div className="text-[9px] px-2 py-1 bg-white border-2 border-indigo-500 rounded text-stone-700">name@example.com|</div>
        <div className="text-[8px] text-stone-500 mt-0.5">We&apos;ll never share it</div>
      </div>
    ),
    select: (
      <div className="w-full h-20 bg-stone-50 border border-stone-200 rounded-md p-2">
        <div className="text-[8px] font-semibold text-stone-700 mb-0.5">Country</div>
        <div className="text-[9px] px-2 py-1 bg-white border border-stone-300 rounded flex items-center justify-between">
          <span>United States</span><span className="text-stone-400">▾</span>
        </div>
      </div>
    ),
    checkbox: (
      <div className="w-full h-20 bg-stone-50 border border-stone-200 rounded-md p-2 flex flex-col gap-1 text-[9px] text-stone-700">
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-indigo-600 rounded-sm flex items-center justify-center text-white text-[7px]">✓</span> Subscribe</div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-white border border-stone-400 rounded-sm" /> Marketing</div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-indigo-600 rounded-sm flex items-center justify-center text-white text-[8px] leading-none">−</span> Mixed (indeterminate)</div>
      </div>
    ),
    radio: (
      <div className="w-full h-20 bg-stone-50 border border-stone-200 rounded-md p-2 flex flex-col gap-1 text-[9px] text-stone-700">
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full border-2 border-indigo-600 flex items-center justify-center"><span className="w-1.5 h-1.5 rounded-full bg-indigo-600" /></span> Free</div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full border-2 border-stone-400" /> Pro</div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full border-2 border-stone-400" /> Enterprise</div>
      </div>
    ),
    toggle: (
      <div className="w-full h-20 bg-stone-50 border border-stone-200 rounded-md p-2 flex flex-col gap-1.5 text-[9px] text-stone-700">
        <div className="flex items-center gap-2"><span className="w-6 h-3.5 bg-indigo-600 rounded-full relative"><span className="absolute right-0.5 top-0.5 w-2.5 h-2.5 bg-white rounded-full" /></span> Notifications</div>
        <div className="flex items-center gap-2"><span className="w-6 h-3.5 bg-stone-300 rounded-full relative"><span className="absolute left-0.5 top-0.5 w-2.5 h-2.5 bg-white rounded-full" /></span> Dark mode</div>
      </div>
    ),
    card: (
      <div className="w-full h-20 bg-white border border-stone-200 rounded-md p-2 shadow-md">
        <div className="h-7 bg-stone-100 rounded mb-1.5" />
        <div className="text-[9px] font-bold text-stone-900">Card title</div>
        <div className="text-[8px] text-stone-500">Card description text</div>
      </div>
    ),
    badge: (
      <div className="w-full h-20 bg-stone-50 border border-stone-200 rounded-md p-2 flex flex-wrap items-center gap-1 text-[9px] font-semibold">
        <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">✓ Active</span>
        <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded-full">Pending</span>
        <span className="px-1.5 py-0.5 bg-red-100 text-red-700 rounded-full">Failed</span>
        <span className="px-1.5 py-0.5 bg-indigo-100 text-indigo-700 rounded-full">New</span>
      </div>
    ),
    avatar: (
      <div className="w-full h-20 bg-stone-50 border border-stone-200 rounded-md p-2 flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[11px] font-bold">МШ</div>
        <div className="flex -space-x-2">
          <div className="w-7 h-7 rounded-full bg-rose-400 border-2 border-white" />
          <div className="w-7 h-7 rounded-full bg-emerald-400 border-2 border-white" />
          <div className="w-7 h-7 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center text-[9px] font-bold text-amber-900">+3</div>
        </div>
      </div>
    ),
    tooltip: (
      <div className="w-full h-20 bg-stone-50 border border-stone-200 rounded-md p-2 flex items-center justify-center">
        <div className="relative">
          <span className="w-6 h-6 rounded-full bg-stone-300 inline-flex items-center justify-center text-[10px] font-bold text-stone-700">?</span>
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-1 bg-stone-900 text-white text-[8px] rounded whitespace-nowrap shadow-md">Need help?</div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-stone-900" />
        </div>
      </div>
    ),
  }
  const cards: Card[] = [
    { key: 'button', ...c.cards.button, visual: v.button },
    { key: 'input', ...c.cards.input, visual: v.input },
    { key: 'select', ...c.cards.select, visual: v.select },
    { key: 'checkbox', ...c.cards.checkbox, visual: v.checkbox },
    { key: 'radio', ...c.cards.radio, visual: v.radio },
    { key: 'toggle', ...c.cards.toggle, visual: v.toggle },
    { key: 'card', ...c.cards.card, visual: v.card },
    { key: 'badge', ...c.cards.badge, visual: v.badge },
    { key: 'avatar', ...c.cards.avatar, visual: v.avatar },
    { key: 'tooltip', ...c.cards.tooltip, visual: v.tooltip },
  ]
  return (
    <div className="rounded-2xl border-2 border-stone-200 bg-white overflow-hidden">
      <div className="px-4 md:px-6 py-3 border-b border-stone-200 bg-stone-50/60">
        <h3 className="text-base font-semibold text-foreground">{title || c.title}</h3>
        <p className="mt-0.5 text-[12px] text-stone-600">{description || c.desc}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0">
        {cards.map((card) => (
          <div key={card.key} className="p-4 border-stone-100 border-r border-b">
            {card.visual}
            <h4 className="text-sm font-bold text-stone-900 mt-3 mb-1">{card.name}</h4>
            <p className="text-[10px] text-stone-500 leading-snug mb-1.5 font-mono">{card.states}</p>
            <p className="text-[11px] text-emerald-700 leading-snug">💡 {card.tip}</p>
          </div>
        ))}
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
      return (
        <ImageSection
          src={section.src}
          alt={section.alt}
          caption={section.caption}
          maxWidth={section.maxWidth}
        />
      )
    case 'video':
      return <VideoSection src={section.src} title={section.title} caption={section.caption} />
    case 'before-after':
      return <BeforeAfterSection title={section.title} before={section.before} after={section.after} />
    case 'diagram':
      return <DiagramSection title={section.title} description={section.description} items={section.items} />
    case 'case-study':
      return <CaseStudySection title={section.title} company={section.company} problem={section.problem} solution={section.solution} result={section.result} steps={section.steps} image={section.image} imageAlt={section.imageAlt} />
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
    case 'font-showcase':
      return <FontShowcaseSection groups={section.groups} />
    case 'font-pair-showcase':
      return (
        <FontPairShowcaseSection
          title={section.title}
          goodLabel={section.goodLabel}
          badLabel={section.badLabel}
          good={section.good}
          bad={section.bad}
        />
      )
    case 'type-scale-showcase':
      return (
        <TypeScaleShowcaseSection
          title={section.title}
          description={section.description}
          ratio={section.ratio}
          base={section.base}
          fontStack={section.fontStack}
          steps={section.steps}
        />
      )
    case 'spacing-scale-showcase':
      return (
        <SpacingScaleShowcaseSection
          title={section.title}
          description={section.description}
          baseUnit={section.baseUnit}
          steps={section.steps}
        />
      )
    case 'column-split-showcase':
      return (
        <ColumnSplitShowcaseSection
          title={section.title}
          description={section.description}
          total={section.total}
          rows={section.rows}
        />
      )
    case 'iphone-safe-area-demo':
      return (
        <IphoneSafeAreaDemoSection
          title={section.title}
          description={section.description}
          labels={section.labels}
        />
      )
    case 'nine-visual-elements':
      return <NineVisualElementsSection title={section.title} description={section.description} />
    case 'ux-patterns-library':
      return <UxPatternsLibrarySection title={section.title} description={section.description} />
    case 'ui-components-library':
      return <UiComponentsLibrarySection title={section.title} description={section.description} />
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
