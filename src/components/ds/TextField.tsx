import type { InputHTMLAttributes } from 'react'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export function TextField({ label, error, id, className = '', ...props }: TextFieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={fieldId} className="font-body text-xs font-semibold text-ink-700">
        {label}
      </label>
      <input
        id={fieldId}
        className={`w-full rounded-md border bg-surface px-[14px] py-[11px] font-body text-sm text-ink-900 outline-none transition-all duration-fast placeholder:text-stone-400 disabled:bg-cream-100 disabled:text-stone-400 ${
          error
            ? 'border-danger focus:shadow-[0_0_0_4px_rgba(181,56,78,0.12)]'
            : 'border-border-strong focus:border-rose-500 focus:shadow-[0_0_0_4px_rgba(233,106,133,0.18)]'
        } ${className}`}
        {...props}
      />
      {error && <span className="text-[11px] text-danger">{error}</span>}
    </div>
  )
}
