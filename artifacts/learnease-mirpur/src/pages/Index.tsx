import { HeroSection } from "@/components/sections/HeroSection";
import { NoticeBoardSection } from "@/components/sections/NoticeBoardSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PrincipalMessageSection } from "@/components/sections/PrincipalMessageSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { AdmissionsSection } from "@/components/sections/AdmissionsSection";
import { FacultySection } from "@/components/sections/FacultySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Index() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <NoticeBoardSection />
      <AboutSection />
      <PrincipalMessageSection />
      <ProgramsSection />
      <AchievementsSection />
      <AdmissionsSection />
      <FacultySection />
      <TestimonialsSection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
