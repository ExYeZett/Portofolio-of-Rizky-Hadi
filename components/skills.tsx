'use client'

import { motion } from 'framer-motion'
import { Code2, Heart } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { technicalSkills, softSkills } from '@/lib/portfolio-data'

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-accent/15 blur-[130px]" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & strengths I bring to every project"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Technical skills with progress bars */}
          <Reveal>
            <div className="glass h-full rounded-2xl border border-border p-7">
              <div className="mb-6 flex items-center gap-2 text-primary">
                <Code2 className="size-5" />
                <h3 className="font-heading text-lg font-semibold">
                  Technical Skills
                </h3>
              </div>
              <div className="space-y-5">
                {technicalSkills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                        style={{
                          boxShadow:
                            '0 0 12px color-mix(in oklab, var(--glow) 60%, transparent)',
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: i * 0.06,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Soft skills badges */}
          <Reveal delay={0.1}>
            <div className="glass flex h-full flex-col rounded-2xl border border-border p-7">
              <div className="mb-6 flex items-center gap-2 text-primary">
                <Heart className="size-5" />
                <h3 className="font-heading text-lg font-semibold">
                  Non-Technical Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="cursor-default rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary/20 hover:text-primary hover:glow-ring"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  Beyond code, I thrive in collaborative teams — communicating
                  clearly, adapting quickly, and thinking critically to ship AI
                  solutions that matter.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
