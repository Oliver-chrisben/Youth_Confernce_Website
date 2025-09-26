import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Speakers", href: "#speakers" },
    { label: "Program", href: "#program" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegisterClick = () => {
    window.open('https://forms.google.com/your-registration-form', '_blank');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xl font-bold text-white hover:text-primary transition-colors duration-200"
              >
                YLC 2025
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-muted-foreground hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                onClick={handleRegisterClick}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                Register Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-primary transition-colors duration-200"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-white block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 pb-2">
                <Button
                  onClick={handleRegisterClick}
                  className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-16"></div>
    </>
  );
}