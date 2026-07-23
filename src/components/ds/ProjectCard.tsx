export interface ProjectCardProps {
  eyebrow: string
  title: string
  description: string
  tags: string[]
  thumbnailLabel?: string
}

export function ProjectCard({
  eyebrow,
  title,
  description,
  tags,
  thumbnailLabel = 'project preview',
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-all duration-base ease-out-soft hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex h-[110px] items-center justify-center bg-gradient-to-br from-rose-100 to-sage-100 font-mono text-[11px] text-stone-500">
        {thumbnailLabel}
      </div>
      <div className="px-[18px] pb-[18px] pt-4">
        <div className="mb-1.5 text-[10px] font-bold uppercase tracking-eyebrow text-primary">
          {eyebrow}
        </div>
        <h3 className="m-0 mb-1.5 font-display text-xl font-extrabold leading-tight tracking-tight text-ink-900">
          {title}
        </h3>
        <p className="m-0 mb-3 text-[13px] leading-relaxed text-ink-700">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-pill bg-cream-100 px-2 py-[3px] font-mono text-[10px] text-ink-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
