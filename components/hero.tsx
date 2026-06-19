'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { UnsplashImage } from '@/components/unsplash-image'
import { profile } from '@/lib/portfolio-data'

const scrollTo = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background image + glow */}
      <div className="absolute inset-0 -z-10">
        <UnsplashImage
          query="artificial-intelligence"
          fallbackSrc="/images/hero-ai.png"
          alt="Abstract artificial intelligence neural network visualization"
          className="h-full w-full"
          imgClassName="opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute left-1/2 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-1.5 text-xs font-medium text-primary"
        >
          <Sparkles className="size-3.5" />
          Available for AI / ML opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 max-w-4xl text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 text-xl font-semibold text-primary text-glow sm:text-2xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-ring"
          >
            View My Work
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:glow-ring"
          >
            Connect
          </button>

          <div className="flex items-center gap-2 sm:ml-2">
            {[
              { icon: GithubIcon, href: `https://${profile.github}`, label: 'GitHub' },
              {
                icon: LinkedinIcon,
                href: `https://${profile.linkedin}`,
                label: 'LinkedIn',
              },
              { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:glow-ring"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
