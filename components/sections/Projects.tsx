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
      className="relative py-24 sm:py-32 section-bg section-border border-t"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Our Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Showcasing our engineering work and open-source contributions
          </p>

          {/* Language Filter */}
          {languages.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setSelectedLanguage(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none ${
                  selectedLanguage === null
                    ? 'bg-primary text-background'
                    : 'bg-gray-800 dark:bg-gray-800 light:bg-gray-200 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:bg-gray-700 dark:hover:bg-gray-700 light:hover:bg-gray-300'
                }`}
              >
                All
              </button>
              {languages.map((language) => (
                <button
                  key={language}
                  onClick={() => setSelectedLanguage(language)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none ${
                    selectedLanguage === language
                      ? 'bg-primary text-background'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredRepos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -8 }}
              className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex-1">
                  {repo.name}
                </h3>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-200 ml-2 focus-visible:outline-none"
                  aria-label={`View ${repo.name} on GitHub`}
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                {repo.description || 'No description available'}
              </p>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
                <div className="flex items-center space-x-4">
                  {repo.language && (
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      />
                      <span className="text-sm text-gray-400">{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Star size={16} />
                    <span className="text-sm">{repo.stargazers_count}</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Updated {formatDate(repo.updated_at)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center text-gray-400 mt-12">
            No projects found for the selected language.
          </div>
        )}
      </div>
    </section>
  )
}
