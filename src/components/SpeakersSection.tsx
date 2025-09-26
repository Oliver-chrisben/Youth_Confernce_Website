import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  fullBio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const speakers: Speaker[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "CEO & Founder",
    company: "TechForGood Initiative",
    bio: "Leading social impact through technology innovation",
    fullBio: "Sarah Chen is the CEO and Founder of TechForGood Initiative, a nonprofit organization that empowers young people to use technology for social change. With over 10 years of experience in the tech industry, she has led teams at major companies like Google and Microsoft before pivoting to social impact. Sarah is passionate about bridging the digital divide and has spoken at conferences worldwide about the intersection of technology and social justice. She holds an MBA from Stanford and a Computer Science degree from MIT.",
    image: "https://images.unsplash.com/photo-1585404544089-b386c0723dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzcGVha2VyJTIwd29tYW4lMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzU4NjM4MTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    socials: {
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      website: "https://techforgood.org"
    }
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    title: "Young Entrepreneur",
    company: "GreenStart Ventures",
    bio: "23-year-old environmental activist and startup founder",
    fullBio: "At just 23, Marcus Rodriguez has already made waves in the environmental startup space. As the founder of GreenStart Ventures, he has helped launch over 50 sustainable businesses across Australia. Marcus started his first environmental initiative in high school and has since been recognized as one of Forbes 30 Under 30. He's passionate about showing young people that they can start making a difference right now, not 'someday.' His talk will focus on turning passion into action and overcoming the challenges of being a young leader in established industries.",
    image: "https://images.unsplash.com/photo-1660794483744-d6c7ab2ac6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbGUlMjBlbnRyZXByZW5ldXIlMjBzcGVha2VyfGVufDF8fHx8MTc1ODYzODE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    socials: {
      linkedin: "https://linkedin.com/in/marcusrodriguez",
      twitter: "https://twitter.com/marcusgreens",
      website: "https://greenstart.ventures"
    }
  },
  {
    id: "3",
    name: "Dr. Amelia Johnson",
    title: "Executive Director",
    company: "Youth Leadership Institute",
    bio: "Expert in youth development and leadership psychology",
    fullBio: "Dr. Amelia Johnson is the Executive Director of the Youth Leadership Institute and a leading expert in adolescent development and leadership psychology. With a PhD in Developmental Psychology from Harvard, she has spent over 15 years researching what makes young leaders successful. Her work has been published in numerous academic journals, and she regularly consults with schools and organizations on youth leadership development. Dr. Johnson believes that every young person has leadership potential and focuses on helping them discover and develop their unique strengths.",
    image: "https://images.unsplash.com/photo-1650784855038-9f4d5ed154a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB3b21hbiUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NTg2MzgxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    socials: {
      linkedin: "https://linkedin.com/in/drameliajohnson",
      website: "https://youthleadershipinstitute.org"
    }
  }
];

export function SpeakersSection() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet Our Speakers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from inspiring leaders who are making a difference in their fields and communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <Dialog key={speaker.id}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer">
                  <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-border/50">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <ImageWithFallback
                        src={speaker.image}
                        alt={`${speaker.name} - ${speaker.title}`}
                        className="relative z-10 w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                    
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold text-white">
                        {speaker.name}
                      </h3>
                      <p className="text-primary font-medium">
                        {speaker.title}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {speaker.company}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {speaker.bio}
                      </p>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <span className="text-secondary text-sm font-medium group-hover:text-accent transition-colors duration-200">
                        Click to read full bio →
                      </span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card border-border">
                <DialogHeader>
                  <div className="flex items-start gap-6">
                    <ImageWithFallback
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                    />
                    <div className="flex-1">
                      <DialogTitle className="text-2xl font-bold text-white mb-2">
                        {speaker.name}
                      </DialogTitle>
                      <p className="text-primary font-medium text-lg">
                        {speaker.title}
                      </p>
                      <p className="text-muted-foreground">
                        {speaker.company}
                      </p>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="space-y-6 mt-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">About</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {speaker.fullBio}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Connect</h4>
                    <div className="flex gap-3">
                      {speaker.socials.linkedin && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                          onClick={() => window.open(speaker.socials.linkedin, '_blank')}
                        >
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </Button>
                      )}
                      {speaker.socials.twitter && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                          onClick={() => window.open(speaker.socials.twitter, '_blank')}
                        >
                          <Twitter className="w-4 h-4" />
                          Twitter
                        </Button>
                      )}
                      {speaker.socials.website && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                          onClick={() => window.open(speaker.socials.website, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Website
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}