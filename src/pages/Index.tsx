import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";
import FloatingWhatsApp from "@/components/portfolio/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      
      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-75">
            ©Sandesh Paudel. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-xs mt-2 opacity-60">
            Ready to build your next MVP? Let's create something amazing together.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;