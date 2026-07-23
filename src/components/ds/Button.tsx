import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-press disabled:bg-rose-200 disabled:text-white',
  secondary:
    'bg-surface text-sage-600 border border-sage-200 hover:bg-sage-50 hover:border-sage-300 disabled:opacity-50',
  ghost: 'bg-transparent text-fg-muted hover:bg-cream-200 disabled:opacity-50',
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`font-body text-16 font-semibold leading-none rounded-md px-[22px] py-3 border border-transparent transition-all duration-base ease-out-soft disabled:cursor-not-allowed active:scale-[0.98] ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
}
