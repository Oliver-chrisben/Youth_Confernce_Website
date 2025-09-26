interface Sponsor {
  name: string;
  logo: string;
  website?: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'partner';
}

const sponsors: Sponsor[] = [
  // Platinum Sponsors
  {
    name: "TechCorp Australia",
    logo: "https://via.placeholder.com/200x80/FF6B35/FFFFFF?text=TechCorp",
    website: "https://techcorp.com.au",
    tier: "platinum"
  },
  {
    name: "Future Leaders Foundation",
    logo: "https://via.placeholder.com/200x80/4A90E2/FFFFFF?text=FLF",
    website: "https://futureleaders.org.au",
    tier: "platinum"
  },
  
  // Gold Sponsors
  {
    name: "Innovation Hub Sydney",
    logo: "https://via.placeholder.com/180x70/FFDD44/2A2A2E?text=IHS",
    website: "https://innovationhub.sydney",
    tier: "gold"
  },
  {
    name: "Youth Bank Australia",
    logo: "https://via.placeholder.com/180x70/6BCF7F/FFFFFF?text=YBA",
    website: "https://youthbank.com.au",
    tier: "gold"
  },
  {
    name: "Digital Natives Co",
    logo: "https://via.placeholder.com/180x70/B794F6/FFFFFF?text=Digital",
    tier: "gold"
  },
  
  // Silver Sponsors
  {
    name: "Student Success Network",
    logo: "https://via.placeholder.com/160x60/FF6B35/FFFFFF?text=SSN",
    tier: "silver"
  },
  {
    name: "Green Future Initiative",
    logo: "https://via.placeholder.com/160x60/4A90E2/FFFFFF?text=GFI",
    tier: "silver"
  },
  {
    name: "Creative Minds Agency",
    logo: "https://via.placeholder.com/160x60/FFDD44/2A2A2E?text=Creative",
    tier: "silver"
  },
  {
    name: "NextGen Ventures",
    logo: "https://via.placeholder.com/160x60/6BCF7F/FFFFFF?text=NextGen",
    tier: "silver"
  },
  
  // Partners
  {
    name: "Sydney Convention Centre",
    logo: "https://via.placeholder.com/140x50/B794F6/FFFFFF?text=SCC",
    tier: "partner"
  },
  {
    name: "Youth Media Network",
    logo: "https://via.placeholder.com/140x50/FF6B35/FFFFFF?text=YMN",
    tier: "partner"
  },
  {
    name: "Student Transport",
    logo: "https://via.placeholder.com/140x50/4A90E2/FFFFFF?text=Transport",
    tier: "partner"
  },
  {
    name: "Healthy Eats Catering",
    logo: "https://via.placeholder.com/140x50/FFDD44/2A2A2E?text=Healthy",
    tier: "partner"
  }
];

const tierConfig = {
  platinum: {
    title: "Platinum Sponsors",
    subtitle: "Our premier partners making this conference possible",
    gridCols: "grid-cols-1 sm:grid-cols-2",
    logoSize: "h-20"
  },
  gold: {
    title: "Gold Sponsors",
    subtitle: "Supporting youth leadership development",
    gridCols: "grid-cols-2 sm:grid-cols-3",
    logoSize: "h-16"
  },
  silver: {
    title: "Silver Sponsors",
    subtitle: "Contributing to our mission",
    gridCols: "grid-cols-2 sm:grid-cols-4",
    logoSize: "h-14"
  },
  bronze: {
    title: "Bronze Sponsors",
    subtitle: "",
    gridCols: "grid-cols-3 sm:grid-cols-5",
    logoSize: "h-12"
  },
  partner: {
    title: "Partners",
    subtitle: "Supporting services and collaboration",
    gridCols: "grid-cols-2 sm:grid-cols-4",
    logoSize: "h-12"
  }
};

export function SponsorsSection() {
  const sponsorsByTier = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {} as Record<string, Sponsor[]>);

  const handleSponsorClick = (sponsor: Sponsor) => {
    if (sponsor.website) {
      window.open(sponsor.website, '_blank');
    }
  };

  return (
    <section id="sponsors" className="py-20 bg-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Sponsors & Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thank you to our amazing sponsors who believe in empowering the next generation of leaders
          </p>
        </div>
        
        <div className="space-y-16">
          {Object.entries(tierConfig).map(([tier, config]) => {
            const tierSponsors = sponsorsByTier[tier];
            if (!tierSponsors || tierSponsors.length === 0) return null;
            
            return (
              <div key={tier} className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {config.title}
                  </h3>
                  {config.subtitle && (
                    <p className="text-muted-foreground">
                      {config.subtitle}
                    </p>
                  )}
                </div>
                
                <div className={`grid ${config.gridCols} gap-6 items-center justify-items-center`}>
                  {tierSponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className={`group cursor-pointer transition-all duration-300 hover:scale-110 ${
                        sponsor.website ? 'cursor-pointer' : 'cursor-default'
                      }`}
                      onClick={() => handleSponsorClick(sponsor)}
                    >
                      <div className="bg-white/95 hover:bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <img
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          className={`${config.logoSize} w-auto object-contain mx-auto filter transition-all duration-300 ${
                            sponsor.website ? 'group-hover:brightness-110' : ''
                          }`}
                        />
                      </div>
                      <p className="text-center text-sm text-muted-foreground mt-2 group-hover:text-white transition-colors duration-300">
                        {sponsor.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Become a Sponsor CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in Sponsoring?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our mission to empower young leaders and gain exposure to the next generation of changemakers. 
            Multiple sponsorship packages available to suit your organization's goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
              onClick={() => window.location.href = 'mailto:sponsors@youngleaders.org?subject=Sponsorship Inquiry'}
            >
              Become a Sponsor
            </button>
            <button
              className="px-6 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg font-medium transition-all duration-200"
              onClick={() => {
                // In a real app, this would download a PDF
                alert('Sponsorship package PDF would download here');
              }}
            >
              Download Sponsorship Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}