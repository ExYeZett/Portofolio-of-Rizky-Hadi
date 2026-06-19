'use client'

import { FileText, ExternalLink, BadgeCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { publication } from '@/lib/portfolio-data'

export function Publication() {
  return (
    <section id="publication" className="relative py-24">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-80 w-80 rounded-full bg-primary/15 blur-[130px]" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Publication" title="Published research" />

        <Reveal className="mt-14">
          <article className="glass relative overflow-hidden rounded-2xl border border-border p-7 transition-all hover:border-primary/50 hover:glow-ring sm:p-9">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
              <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/40">
                <FileText className="size-7" />
              </div>

              <div className="flex-1">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <BadgeCheck className="size-3.5" />
                  IEEE Conference Paper
                </div>

                <h3 className="text-balance font-heading text-lg font-bold leading-snug sm:text-xl">
                  {publication.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-primary">
                  {publication.venue}
                </p>

                <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {publication.description}
                </p>

                <a
                  href={publication.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-ring"
                >
                  Read on IEEE Xplore
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
