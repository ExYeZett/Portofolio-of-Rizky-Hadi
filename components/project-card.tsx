'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { UnsplashImage } from '@/components/unsplash-image'
import type { Project } from '@/lib/portfolio-data'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group glass relative flex flex-col overflow-hidden rounded-2xl border border-border transition-colors hover:border-primary/50 hover:glow-ring"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <UnsplashImage
          query={project.query}
          fallbackSrc={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full"
          imgClassName="group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

        {/* Hover-to-reveal metrics */}
        {project.metrics && (
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
            {project.metrics.map((m) => (
              <span
                key={m.label}
                className="glass rounded-lg border border-primary/40 px-3 py-1.5 text-xs font-medium text-foreground"
              >
                <span className="text-muted-foreground">{m.label}: </span>
                <span className="font-semibold text-primary">{m.value}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
          {project.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.details}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-primary/40 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:glow-ring"
        >
          <GithubIcon className="size-4" />
          View Repository
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </motion.article>
  )
}
