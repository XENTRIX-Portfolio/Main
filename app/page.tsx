import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Technologies from '@/components/sections/Technologies'
import Contact from '@/components/sections/Contact'
import { fetchRepositories } from '@/lib/github'

export default async function Home() {
  const repositories = await fetchRepositories()

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects repositories={repositories} />
      <Technologies />
      <Contact />
    </>
  )
}
