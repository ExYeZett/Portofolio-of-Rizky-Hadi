'use client'

import { Mail, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-heading text-sm font-semibold">
            {profile.name}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} \u2014 Built with Next.js, Tailwind CSS & Framer Motion.`}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { icon: GithubIcon, href: `https://${profile.github}`, label: 'GitHub' },
            { icon: LinkedinIcon, href: `https://${profile.linkedin}`, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:glow-ring"
            >
              <Icon className="size-4" />
            </a>
          ))}
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
            aria-label="Back to top"
            className="grid size-10 place-items-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/40 transition-all hover:bg-primary hover:text-primary-foreground hover:glow-ring"
          >
            <ArrowUp className="size-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
