import { Heart, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const partnerLogos = [
    { name: "TechCorp", logo: "https://via.placeholder.com/80x30/4A90E2/FFFFFF?text=Tech" },
    { name: "Future Leaders", logo: "https://via.placeholder.com/80x30/FF6B35/FFFFFF?text=FL" },
    { name: "Innovation Hub", logo: "https://via.placeholder.com/80x30/FFDD44/2A2A2E?text=IH" },
    { name: "Youth Bank", logo: "https://via.placeholder.com/80x30/6BCF7F/FFFFFF?text=YB" }
  ];

  return (
    <footer className="bg-card/80 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Conference Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Young Leaders Conference
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering the next generation of leaders through innovation, 
              collaboration, and meaningful connections.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>March 15-16, 2025</p>
              <p>Sydney Convention Centre</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              <a 
                href="#about" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                About
              </a>
              <a 
                href="#speakers" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Speakers
              </a>
              <a 
                href="#program" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Program
              </a>
              <a 
                href="#registration" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Register
              </a>
              <a 
                href="#contact" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
          </div>
          
          {/* Legal & Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Support</h4>
            <div className="space-y-2">
              <a 
                href="mailto:info@youngleaders.org" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                info@youngleaders.org
              </a>
              <a 
                href="tel:+61-2-1234-5678" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                +61 2 1234 5678
              </a>
              <button 
                onClick={() => alert('Privacy policy would be displayed here')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => alert('Terms of service would be displayed here')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
        
        {/* Partner Logos Bar */}
        <div className="py-6 border-t border-border/30">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <span className="text-xs text-muted-foreground font-medium">Powered by:</span>
            {partnerLogos.map((partner, index) => (
              <img
                key={index}
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-6 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Young Leaders Conference. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for young leaders everywhere</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}