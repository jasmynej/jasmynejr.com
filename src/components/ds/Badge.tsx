type BadgeVariant = 'available' | 'progress' | 'new' | 'archived'

export interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  available: 'bg-sage-100 text-sage-600',
  progress: 'bg-peach-100 text-peach-500',
  new: 'bg-rose-100 text-rose-700',
  archived: 'bg-cream-200 text-fg-muted',
}

export function Badge({ variant = 'available', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-body text-12 font-semibold leading-none rounded-pill px-[11px] py-[5px] ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export interface TechChipProps {
  children: React.ReactNode
  className?: string
}

export function TechChip({ children, className = '' }: TechChipProps) {
  return (
    <span
      className={`inline-flex items-center font-mono text-[11px] leading-none rounded-pill px-[10px] py-1 bg-cream-100 text-ink-700 border border-border ${className}`}
    >
      {children}
    </span>
  )
}
