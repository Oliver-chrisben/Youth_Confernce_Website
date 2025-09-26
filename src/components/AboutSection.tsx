import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Target, Users, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Empowering the Next Generation of Leaders
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Young Leaders Conference is designed to inspire, educate, and connect secondary school students 
                who are passionate about making a positive impact in their communities. Over two transformative days, 
                participants will engage with industry leaders, develop crucial leadership skills, and create lasting 
                networks with like-minded peers.
              </p>
            </div>
            
            {/* Key features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Innovation</h4>
                  <p className="text-sm text-muted-foreground">Future-focused thinking</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                <div className="p-2 bg-secondary/20 rounded-lg">
                  <Target className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Purpose</h4>
                  <p className="text-sm text-muted-foreground">Mission-driven leadership</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Community</h4>
                  <p className="text-sm text-muted-foreground">Collaborative networking</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Action</h4>
                  <p className="text-sm text-muted-foreground">Real-world impact</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video/Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718224326658-489bbfbeb2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25mZXJlbmNlJTIwdmVudWUlMjBhdWRpdG9yaXVtfGVufDF8fHx8MTc1ODYzODE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern conference venue auditorium"
                className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
              />
              
              {/* Play button overlay for video placeholder */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button 
                  className="bg-white/90 hover:bg-white text-background p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  onClick={() => {
                    // Placeholder for video modal
                    alert('Video player would open here');
                  }}
                  aria-label="Play conference promo video"
                >
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}