export interface LogoProps {
  variant?: 'mark' | 'full'
  size?: number
  className?: string
}

const sources = {
  mark: '/logo-mark.png',
  full: '/logo-full.png',
}

export function Logo({ variant = 'full', size = 48, className = '' }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sources[variant]}
      alt="Jasmynejr Consulting"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  )
}
