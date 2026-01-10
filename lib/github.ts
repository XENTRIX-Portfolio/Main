export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
  html_url: string
  topics: string[]
}

const GITHUB_ORG = 'XENTRIX-Portfolio'
const GITHUB_API_BASE = 'https://api.github.com'

// Curated list of repositories to showcase (in priority order)
// This should be manually maintained
const CURATED_REPOS: string[] = [
  // Add repository names here in order of priority
  // Example: 'repo-name-1', 'repo-name-2', etc.
]

export async function fetchRepositories(): Promise<GitHubRepo[]> {
  try {
    // Fetch all repositories from the organization
    const response = await fetch(
      `${GITHUB_API_BASE}/orgs/${GITHUB_ORG}/repos?per_page=100&sort=updated&direction=desc`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 43200 }, // Revalidate every 12 hours
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()

    // If curated list exists, use it to filter and sort
    if (CURATED_REPOS.length > 0) {
      const curatedMap = new Map(
        CURATED_REPOS.map((name, index) => [name.toLowerCase(), index])
      )
      
      return repos
        .filter((repo) => curatedMap.has(repo.name.toLowerCase()))
        .sort(
          (a, b) =>
            (curatedMap.get(a.name.toLowerCase()) ?? Infinity) -
            (curatedMap.get(b.name.toLowerCase()) ?? Infinity)
        )
        .slice(0, 9) // Maximum 9 repositories
    }

    // Otherwise, return most recently updated (limited to 9)
    return repos.slice(0, 9)
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error)
    return []
  }
}

export function getLanguageColor(language: string | null): string {
  const colors: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f7df1e',
    Python: '#3776ab',
    Java: '#ed8b00',
    'C++': '#00599c',
    Rust: '#000000',
    Go: '#00add8',
    Ruby: '#cc342d',
    PHP: '#777bb4',
    Swift: '#fa7343',
    Kotlin: '#7f52ff',
    Dart: '#0175c2',
    HTML: '#e34c26',
    CSS: '#1572b6',
    SCSS: '#c6538c',
    Vue: '#4fc08d',
    React: '#61dafb',
    'C#': '#239120',
    Shell: '#89e051',
    Other: '#8b5cf6',
  }

  return colors[language || 'Other'] || colors.Other
}
