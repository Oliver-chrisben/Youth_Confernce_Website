import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { HighlightsSection } from "./components/HighlightsSection";
import { SpeakersSection } from "./components/SpeakersSection";
import { ProgramSection } from "./components/ProgramSection";
import { RegistrationSection } from "./components/RegistrationSection";
import { FAQSection } from "./components/FAQSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Toast notifications */}
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: 'rgb(56, 56, 65)',
            color: 'rgb(255, 255, 255)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <SpeakersSection />
        <ProgramSection />
        <RegistrationSection />
        <FAQSection />
        <SponsorsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}