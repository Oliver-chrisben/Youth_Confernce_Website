import { Button } from "./ui/button";
import { CheckCircle, School, User, Mail, Phone } from "lucide-react";

const requirements = [
  {
    icon: <School className="w-5 h-5 text-primary" />,
    title: "School Enrollment",
    description: "Must be currently enrolled in a secondary school (Years 9-12)"
  },
  {
    icon: <User className="w-5 h-5 text-secondary" />,
    title: "Leadership Role",
    description: "Hold or aspire to a leadership position (student council, clubs, sports, etc.)"
  },
  {
    icon: <Mail className="w-5 h-5 text-accent" />,
    title: "Contact Information",
    description: "Valid email address and emergency contact details required"
  },
  {
    icon: <Phone className="w-5 h-5 text-purple-500" />,
    title: "Parental Consent",
    description: "Parent/guardian approval required for students under 18"
  }
];

export function RegistrationSection() {
  const handleRegistration = () => {
    // In a real implementation, this would open the actual Google Form
    window.open('https://forms.google.com/your-registration-form-id', '_blank');
  };

  const handleBackupContact = () => {
    window.location.href = 'mailto:register@youngleaders.org?subject=Registration Inquiry';
  };

  return (
    <section id="registration" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Register Now
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join 1,000 student leaders from across 100 schools for this transformative experience
            </p>
          </div>
          
          {/* Registration Requirements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {requirements.map((req, index) => (
              <div key={index} className="bg-background/50 rounded-xl p-6 border border-border/50">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-card rounded-lg">
                    {req.icon}
                  </div>
                  <h3 className="font-semibold text-white">
                    {req.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {req.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Registration CTA */}
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-border/50">
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to Transform Your Leadership Journey?
                </h3>
                <p className="text-muted-foreground">
                  Registration includes all sessions, meals, materials, and networking events
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                  onClick={handleRegistration}
                >
                  Register Now - $75
                </Button>
                <div className="text-sm text-muted-foreground">
                  <p>Early bird pricing until February 1st</p>
                  <p className="line-through">Regular price: $125</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/30">
                <p className="text-sm text-muted-foreground mb-4">
                  Having trouble with registration? 
                </p>
                <Button 
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                  onClick={handleBackupContact}
                >
                  Contact Us for Help
                </Button>
              </div>
            </div>
          </div>
          
          {/* What's Included */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="p-3 bg-primary/20 rounded-full w-fit mx-auto">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-white">All Sessions</h4>
              <p className="text-sm text-muted-foreground">Keynotes, workshops, and panels</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="p-3 bg-secondary/20 rounded-full w-fit mx-auto">
                <CheckCircle className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-semibold text-white">Meals & Refreshments</h4>
              <p className="text-sm text-muted-foreground">Breakfast, lunch, and all breaks</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="p-3 bg-accent/20 rounded-full w-fit mx-auto">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-white">Resources & Materials</h4>
              <p className="text-sm text-muted-foreground">Digital toolkit and take-home materials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}