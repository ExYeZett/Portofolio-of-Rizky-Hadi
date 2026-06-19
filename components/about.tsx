'use client'

import { GraduationCap, Award, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { AnimatedCounter } from '@/components/animated-counter'
import { about, stats } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="About Me"
          title="Turning data into intelligent decisions"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Description */}
          <Reveal className="lg:col-span-3">
            <div className="glass h-full rounded-2xl border border-border p-7">
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {about.description}
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-secondary/40 p-4">
                  <div className="flex items-center gap-2 text-primary">
                    <GraduationCap className="size-5" />
                    <span className="text-sm font-semibold">Education</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    {about.education.degree}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {about.education.school}
                  </p>
                  <p className="mt-1 font-mono text-xs text-primary">
                    {about.education.period}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-secondary/40 p-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Award className="size-5" />
                    <span className="text-sm font-semibold">GPA</span>
                  </div>
                  <p className="mt-2 font-heading text-3xl font-bold text-glow">
                    {about.gpa}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Cumulative grade point
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Organizations + stats */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="glass flex h-full flex-col gap-5 rounded-2xl border border-border p-7">
              <div className="flex items-center gap-2 text-primary">
                <Users className="size-5" />
                <span className="text-sm font-semibold">Organizations</span>
              </div>
              <ul className="space-y-3">
                {about.organizations.map((org) => (
                  <li
                    key={org}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {org}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="glass rounded-2xl border border-border p-5 text-center transition-all hover:border-primary/50 hover:glow-ring">
                <p className="font-heading text-3xl font-bold text-primary text-glow sm:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-2 text-xs font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
