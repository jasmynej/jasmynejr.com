export interface BlogCardProps {
  tag: string
  date: string
  readTime: string
  title: string
  excerpt: string
  href?: string
}

export function BlogCard({ tag, date, readTime, title, excerpt, href = '#' }: BlogCardProps) {
  return (
    <a
      href={href}
      className="group grid grid-cols-[1fr_auto] items-center gap-4 rounded-lg border border-border bg-cream-100 px-6 py-[22px] no-underline transition-all duration-base ease-out-soft hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="min-w-0">
        <div className="mb-2 flex items-center gap-[10px] text-[11px] text-fg-subtle">
          <span className="rounded-pill border border-border bg-white px-[9px] py-[3px] font-mono text-[10px] text-plum-500">
            {tag}
          </span>
          <span>{date}</span>
          <span className="h-[3px] w-[3px] rounded-full bg-stone-400" />
          <span>{readTime}</span>
        </div>
        <h3 className="m-0 mb-1.5 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink-900">
          {title}
        </h3>
        <p className="m-0 text-[13px] leading-relaxed text-ink-700">{excerpt}</p>
      </div>
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-base text-ink-700 transition-transform duration-base ease-out-soft group-hover:translate-x-0.5">
        →
      </div>
    </a>
  )
}
