import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionSection } from '../components/SolutionSection';
import { DifferentiationSection } from '../components/DifferentiationSection';
import { TractionSection } from '../components/TractionSection';
import { RoadmapSection } from '../components/RoadmapSection';
import { BusinessModelSection } from '../components/BusinessModelSection';
import { TeamSection } from '../components/TeamSection';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/Contact';
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <DifferentiationSection />
      <TractionSection />
      <RoadmapSection />
      <BusinessModelSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
