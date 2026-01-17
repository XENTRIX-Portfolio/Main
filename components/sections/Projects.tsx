'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useMemo } from 'react'
import { ExternalLink, Star } from 'lucide-react'
import { getLanguageColor, type GitHubRepo } from '@/lib/github'

interface ProjectsProps {
  repositories: GitHubRepo[]
}

export default function Projects({ repositories }: ProjectsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [repos] = useState<GitHubRepo[]>(repositories)
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)

  // Get unique languages from repositories
  const languages = useMemo(() => {
    const unique = new Set<string>()
    repos.forEach((repo) => {
      if (repo.language) {
        unique.add(repo.language)
      }
    })
    return Array.from(unique).sort()
  }, [repos])

  // Filter repositories by selected language
  const filteredRepos = useMemo(() => {
    if (!selectedLanguage) return repos
    return repos.filter((repo) => repo.language === selectedLanguage)
  }, [repos, selectedLanguage])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  if (repos.length === 0) {
    return (
      <section id="projects" className="relative py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            No projects available at the moment.
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-section-mobile md:py-section section-bg section-border"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-section font-normal mb-4 text-foreground">
            Our Projects
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto mb-8 opacity-70">
            Showcasing our engineering work and open-source contributions
          </p>

          {/* Language Filter */}
          {languages.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setSelectedLanguage(null)}
                className={`px-4 py-2 rounded-md text-small font-medium transition-colors duration-200 focus-visible:outline-none ${
                  selectedLanguage === null
                    ? 'bg-primary text-white dark:text-black'
                    : 'bg-card-bg border text-text-secondary hover:border-primary'
                }`}
              >
                All
              </button>
              {languages.map((language) => (
                <button
                  key={language}
                  onClick={() => setSelectedLanguage(language)}
                  className={`px-4 py-2 rounded-md text-small font-medium transition-colors duration-200 focus-visible:outline-none ${
                    selectedLanguage === language
                      ? 'bg-primary text-white dark:text-black'
                      : 'bg-card-bg border text-text-secondary hover:border-primary'
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredRepos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08, 
                ease: [0.33, 1, 0.68, 1] 
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-premium p-8 group relative"
            >
              <div className="flex items-start justify-between mb-5">
                <h3 className="text-h3 font-medium text-foreground group-hover:text-primary transition-colors duration-300 flex-1 pr-2">
                  {repo.name}
                </h3>
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-200 focus-visible:outline-none flex-shrink-0"
                  aria-label={`View ${repo.name} on GitHub`}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={20} />
                </motion.a>
              </div>

              <p className="text-body text-text-secondary mb-6 leading-relaxed line-clamp-3">
                {repo.description || 'No description available'}
              </p>

              <div className="flex items-center justify-between mt-8 pt-6 border-t">
                <div className="flex items-center space-x-4">
                  {repo.language && (
                    <div className="flex items-center space-x-2 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      />
                      <span className="text-small text-text-secondary font-medium">{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1.5 text-text-secondary">
                    <Star size={14} className="fill-current" />
                    <span className="text-small font-medium">{repo.stargazers_count}</span>
                  </div>
                </div>
                <div className="text-tiny text-text-tertiary">
                  {formatDate(repo.updated_at)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center text-text-secondary mt-12">
            No projects found for the selected language.
          </div>
        )}
      </div>
    </section>
  )
}
