import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ValueProposition from '@/components/ValueProposition'
import Training from '@/components/Training'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <ValueProposition />
        <Training />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
