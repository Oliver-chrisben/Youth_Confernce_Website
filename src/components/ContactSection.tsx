import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Instagram, MessageCircle, Mail, Send } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    if (!formData.message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, you would send this to your backend
      console.log('Form submitted:', formData);
      
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/youngleadersconf",
      handle: "@youngleadersconf",
      color: "hover:bg-pink-600"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      url: "https://wa.me/61412345678",
      handle: "+61 412 345 678",
      color: "hover:bg-green-600"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:info@youngleaders.org",
      handle: "info@youngleaders.org",
      color: "hover:bg-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-bold text-white mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="bg-background/50 border-border text-white placeholder:text-muted-foreground resize-none"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Social Links & Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">
                  Connect With Us
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 bg-card hover:bg-card/80 rounded-lg border border-border/50 transition-all duration-200 hover:scale-[1.02] ${social.color} group`}
                    >
                      <div className="p-2 bg-background/50 rounded-lg group-hover:bg-white/10 transition-colors duration-200">
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-medium text-white">
                          {social.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {social.handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Quick Info */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-border/50">
                <h4 className="font-bold text-white mb-4">
                  Quick Information
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Response Time:</p>
                    <p className="text-white font-medium">Within 24 hours</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Office Hours:</p>
                    <p className="text-white font-medium">Mon-Fri, 9AM-5PM AEST</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Emergency Contact:</p>
                    <p className="text-white font-medium">+61 412 345 678</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}