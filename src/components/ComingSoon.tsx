import { Logo } from './ds/Logo'

const RESUME_URL = 'https://0ktz2aplahgx0zvx.public.blob.vercel-storage.com/jeanremy-resume-2026.pdf'
const CONTACT_EMAIL = 'jasmynej14@gmail.com'

export function ComingSoon() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-6 py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[10%] -right-[10%] h-[60%] w-[60%] rounded-full bg-radial from-rose-100 to-transparent opacity-[0.08]"
      />
      <div className="relative max-w-[560px] text-center">
        <div className="mx-auto mb-8 h-[72px] w-[72px]">
          <Logo variant="mark" size={72} />
        </div>

        <div className="mb-5 inline-flex items-center gap-2 text-12 font-bold tracking-eyebrow text-stone-500 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
          Site under construction
        </div>

        <h1 className="mb-4 text-balance font-display text-36 leading-tight font-extrabold text-ink-900">
          Something new is <span className="text-rose-500">growing</span> here.
        </h1>

        <p className="mx-auto mb-9 text-18 leading-relaxed text-ink-700">
          I&apos;m rebuilding my site — projects, writing, and more, soon. In the meantime, here&apos;s
          my resume.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-rose-500 px-6 py-3 font-body font-bold text-white transition-all duration-fast ease-out-soft hover:bg-rose-600"
          >
            View resume
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-md border border-border-strong px-6 py-3 font-body font-bold text-ink-900 transition-all duration-fast ease-out-soft hover:bg-cream-100"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-10 text-14 text-stone-500">Jasmyne Jean-Remy · Software Engineer</div>
      </div>
    </div>
  )
}
