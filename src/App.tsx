import ContactSection from './components/ContactSection'
import EducationSkillsSection from './components/EducationSkillsSection'
import ExperienceSection from './components/ExperienceSection'
import Hero from './components/Hero'
import ProfileSection from './components/ProfileSection'
import ProjectSection from './components/ProjectSection'
import SiteHeader from './components/SiteHeader'

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-white">
      <SiteHeader />
      <main>
        <Hero />
        <ProfileSection />
        <ProjectSection />
        <ExperienceSection />
        <EducationSkillsSection />
        <ContactSection />
      </main>
    </div>
  )
}
