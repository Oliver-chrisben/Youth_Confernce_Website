import { useState } from "react";
import { Mic, Users, Gamepad2, Music, Network } from "lucide-react";

interface Highlight {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string;
  color: string;
}

const highlights: Highlight[] = [
  {
    id: "keynote",
    title: "Keynote Speakers",
    icon: <Mic className="w-8 h-8" />,
    description: "Inspiring talks from industry leaders",
    details: "Get motivated by successful entrepreneurs, activists, and innovators who will share their journeys and insights on leadership, innovation, and making a difference.",
    color: "from-primary to-primary/70"
  },
  {
    id: "workshops",
    title: "Interactive Workshops",
    icon: <Users className="w-8 h-8" />,
    description: "Hands-on learning experiences",
    details: "Participate in practical workshops covering topics like project management, public speaking, financial literacy, and social entrepreneurship.",
    color: "from-secondary to-secondary/70"
  },
  {
    id: "games",
    title: "Leadership Games",
    icon: <Gamepad2 className="w-8 h-8" />,
    description: "Fun team-building activities",
    details: "Engage in strategic games and challenges designed to develop teamwork, problem-solving, and decision-making skills in a fun, competitive environment.",
    color: "from-accent to-accent/70"
  },
  {
    id: "music",
    title: "Entertainment",
    icon: <Music className="w-8 h-8" />,
    description: "Live performances and music",
    details: "Enjoy live music performances, DJ sets, and entertainment that celebrate youth culture and provide energizing breaks between sessions.",
    color: "from-purple-500 to-purple-400"
  },
  {
    id: "networking",
    title: "Networking",
    icon: <Network className="w-8 h-8" />,
    description: "Connect with peers and mentors",
    details: "Build lasting connections with fellow student leaders, mentors, and industry professionals through structured networking sessions and social activities.",
    color: "from-green-500 to-emerald-400"
  }
];

export function HighlightsSection() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  return (
    <section id="highlights" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Conference Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience a dynamic mix of learning, networking, and entertainment designed specifically for young leaders
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="relative h-64 perspective-1000"
              onMouseEnter={() => setFlippedCard(highlight.id)}
              onMouseLeave={() => setFlippedCard(null)}
              onClick={() => setFlippedCard(flippedCard === highlight.id ? null : highlight.id)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCard === highlight.id ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden">
                  <div className={`w-full h-full bg-gradient-to-br ${highlight.color} rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <div className="text-white mb-4">
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="w-full h-full bg-card border border-border rounded-2xl p-6 flex flex-col justify-center shadow-lg">
                    <div className={`text-transparent bg-gradient-to-r ${highlight.color} bg-clip-text mb-3`}>
                      {highlight.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile instruction */}
        <div className="text-center mt-8 md:hidden">
          <p className="text-sm text-muted-foreground">
            Tap cards to see more details
          </p>
        </div>
      </div>
    </section>
  );
}