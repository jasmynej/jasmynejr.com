import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta = {
  title: 'Design System/Tokens',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const colorGroups: { label: string; swatches: { name: string; className: string }[] }[] = [
  {
    label: 'Rose',
    swatches: [
      { name: 'rose-50', className: 'bg-rose-50' },
      { name: 'rose-100', className: 'bg-rose-100' },
      { name: 'rose-200', className: 'bg-rose-200' },
      { name: 'rose-300', className: 'bg-rose-300' },
      { name: 'rose-400', className: 'bg-rose-400' },
      { name: 'rose-500', className: 'bg-rose-500' },
      { name: 'rose-600', className: 'bg-rose-600' },
      { name: 'rose-700', className: 'bg-rose-700' },
    ],
  },
  {
    label: 'Sage',
    swatches: [
      { name: 'sage-50', className: 'bg-sage-50' },
      { name: 'sage-100', className: 'bg-sage-100' },
      { name: 'sage-200', className: 'bg-sage-200' },
      { name: 'sage-300', className: 'bg-sage-300' },
      { name: 'sage-400', className: 'bg-sage-400' },
      { name: 'sage-500', className: 'bg-sage-500' },
      { name: 'sage-600', className: 'bg-sage-600' },
    ],
  },
  {
    label: 'Peach',
    swatches: [
      { name: 'peach-50', className: 'bg-peach-50' },
      { name: 'peach-100', className: 'bg-peach-100' },
      { name: 'peach-200', className: 'bg-peach-200' },
      { name: 'peach-300', className: 'bg-peach-300' },
      { name: 'peach-400', className: 'bg-peach-400' },
      { name: 'peach-500', className: 'bg-peach-500' },
    ],
  },
  {
    label: 'Plum',
    swatches: [
      { name: 'plum-300', className: 'bg-plum-300' },
      { name: 'plum-500', className: 'bg-plum-500' },
      { name: 'plum-700', className: 'bg-plum-700' },
    ],
  },
  {
    label: 'Cream & stone',
    swatches: [
      { name: 'cream-50', className: 'bg-cream-50' },
      { name: 'cream-100', className: 'bg-cream-100' },
      { name: 'cream-200', className: 'bg-cream-200' },
      { name: 'stone-300', className: 'bg-stone-300' },
      { name: 'stone-400', className: 'bg-stone-400' },
      { name: 'stone-500', className: 'bg-stone-500' },
    ],
  },
  {
    label: 'Ink',
    swatches: [
      { name: 'ink-700', className: 'bg-ink-700' },
      { name: 'ink-800', className: 'bg-ink-800' },
      { name: 'ink-900', className: 'bg-ink-900' },
    ],
  },
]

function Swatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`h-16 w-full rounded-md border border-border ${className}`} />
      <span className="font-mono text-[11px] text-fg-subtle">{name}</span>
    </div>
  )
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {colorGroups.map((group) => (
        <div key={group.label}>
          <div className="eyebrow mb-3">{group.label}</div>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
            {group.swatches.map((s) => (
              <Swatch key={s.name} {...s} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}

const typeScale = [
  { label: '12', className: 'text-12' },
  { label: '14', className: 'text-14' },
  { label: '16', className: 'text-16' },
  { label: '18', className: 'text-18' },
  { label: '20', className: 'text-20' },
  { label: '24', className: 'text-24' },
  { label: '30', className: 'text-30' },
  { label: '36', className: 'text-36' },
  { label: '48', className: 'text-48' },
  { label: '64', className: 'text-64' },
]

export const Typography: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <div className="eyebrow mb-3">Type scale — font-display / 800</div>
        <div className="flex flex-col gap-3">
          {typeScale.map(({ label, className }) => (
            <div key={label} className="flex items-baseline gap-4">
              <span className="w-12 shrink-0 font-mono text-[11px] text-fg-subtle">{label}</span>
              <span className={`font-display font-extrabold leading-tight text-fg ${className}`}>
                Clean, scalable systems
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="eyebrow mb-3">Families</div>
        <div className="flex flex-col gap-2">
          <p className="font-display text-2xl font-extrabold text-fg">
            Manrope — display / body (font-display, font-body)
          </p>
          <p className="accent-serif text-2xl text-fg">
            Cormorant Garamond Italic — rare accent only (.accent-serif)
          </p>
          <p className="font-mono text-base text-fg">JetBrains Mono — code, tech chips</p>
        </div>
      </div>
    </div>
  ),
}

const spacingScale = [
  { name: 'space-1', label: '4px', className: 'w-1' },
  { name: 'space-2', label: '8px', className: 'w-2' },
  { name: 'space-3', label: '12px', className: 'w-3' },
  { name: 'space-4', label: '16px', className: 'w-4' },
  { name: 'space-5', label: '24px', className: 'w-5' },
  { name: 'space-6', label: '32px', className: 'w-6' },
  { name: 'space-7', label: '40px', className: 'w-7' },
  { name: 'space-8', label: '48px', className: 'w-8' },
  { name: 'space-9', label: '64px', className: 'w-9' },
  { name: 'space-10', label: '80px', className: 'w-10' },
  { name: 'space-11', label: '96px', className: 'w-11' },
  { name: 'space-12', label: '128px', className: 'w-12' },
]

export const Spacing: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {spacingScale.map(({ name, label, className }) => (
        <div key={name} className="flex items-center gap-4">
          <span className="w-24 shrink-0 font-mono text-[11px] text-fg-subtle">
            {name} · {label}
          </span>
          <div className={`h-4 rounded-xs bg-rose-300 ${className}`} />
        </div>
      ))}
    </div>
  ),
}

const radii = [
  { name: 'radius-xs', className: 'rounded-xs' },
  { name: 'radius-sm', className: 'rounded-sm' },
  { name: 'radius-md', className: 'rounded-md' },
  { name: 'radius-lg', className: 'rounded-lg' },
  { name: 'radius-xl', className: 'rounded-xl' },
  { name: 'radius-2xl', className: 'rounded-2xl' },
  { name: 'radius-pill', className: 'rounded-pill' },
]

export const Radii: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      {radii.map(({ name, className }) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <div className={`h-20 w-20 border border-border bg-cream-100 ${className}`} />
          <span className="font-mono text-[11px] text-fg-subtle">{name}</span>
        </div>
      ))}
    </div>
  ),
}

const shadows = [
  { name: 'shadow-xs', className: 'shadow-xs' },
  { name: 'shadow-sm', className: 'shadow-sm' },
  { name: 'shadow-md', className: 'shadow-md' },
  { name: 'shadow-lg', className: 'shadow-lg' },
  { name: 'shadow-xl', className: 'shadow-xl' },
]

export const Shadows: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8 p-6">
      {shadows.map(({ name, className }) => (
        <div key={name} className="flex flex-col items-center gap-3">
          <div className={`h-20 w-20 rounded-lg bg-surface ${className}`} />
          <span className="font-mono text-[11px] text-fg-subtle">{name}</span>
        </div>
      ))}
    </div>
  ),
}

const easings = [
  { name: 'ease-standard', className: 'ease-standard' },
  { name: 'ease-out-soft', className: 'ease-out-soft' },
  { name: 'ease-spring', className: 'ease-spring' },
]

export const Motion: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="eyebrow">Hover a box — duration-slow, per easing curve</div>
      <div className="flex flex-wrap gap-8">
        {easings.map((e) => (
          <div key={e.name} className="flex flex-col items-center gap-3">
            <div
              className={`h-16 w-16 rounded-md bg-rose-500 transition-transform duration-slow hover:translate-x-6 ${e.className}`}
            />
            <span className="font-mono text-[11px] text-fg-subtle">{e.name}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-6 font-mono text-[11px] text-fg-subtle">
        <span>duration-fast · 140ms</span>
        <span>duration-base · 220ms</span>
        <span>duration-slow · 420ms</span>
      </div>
    </div>
  ),
}
