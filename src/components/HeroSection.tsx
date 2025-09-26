import { Button } from "./ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-white">Young Leaders</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Conference
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-accent font-semibold">
                create something
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground items-center justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>March 15-16, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Sydney Convention Centre</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center lg:justify-start">
                <Users className="w-4 h-4 text-secondary" />
                <span className="font-medium">100 schools • 1,000 student leaders — for secondary schools</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                onClick={() => window.open('https://forms.google.com/your-registration-form', '_blank')}
              >
                Register Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-200"
                onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Program
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758272959994-f1a4beffa257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGRpdmVyc2UlMjB0ZWVuYWdlcnMlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc1ODYzODE1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Young diverse teenagers at conference"
                className="relative z-10 w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-60 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}