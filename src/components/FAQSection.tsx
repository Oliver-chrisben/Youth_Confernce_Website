import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What should I bring to the conference?",
    answer: "Bring a notebook, pen, comfortable clothes for activities, business cards if you have them, and your enthusiasm! We'll provide all materials, meals, and refreshments. Don't forget to bring a phone charger and any medications you might need."
  },
  {
    question: "Is accommodation provided?",
    answer: "Accommodation is not included in the registration fee. However, we have partnered with several nearby hotels to offer discounted rates for attendees. Check your registration confirmation email for hotel partner information and booking codes."
  },
  {
    question: "Can I attend if I'm not in a formal leadership role?",
    answer: "Absolutely! While we encourage current student leaders to apply, we also welcome students who are passionate about developing their leadership skills and making a positive impact in their communities. Leadership potential is more important than current titles."
  },
  {
    question: "What if I have dietary restrictions or accessibility needs?",
    answer: "We're committed to making the conference accessible to everyone. Please indicate any dietary restrictions, accessibility needs, or other accommodations in your registration form. Our team will work with you to ensure you have a great experience."
  },
  {
    question: "Are there scholarships or financial assistance available?",
    answer: "Yes! We offer need-based scholarships and payment plans. Contact us at scholarships@youngleaders.org with your school counselor's recommendation. We believe financial constraints shouldn't prevent passionate young leaders from attending."
  },
  {
    question: "What COVID-19 safety measures are in place?",
    answer: "We follow all current health guidelines and venue requirements. This may include vaccination requirements, mask wearing, or capacity limits. We'll send updated health and safety information to all registered attendees 2 weeks before the event."
  },
  {
    question: "Can parents or teachers attend with students?",
    answer: "The conference is designed specifically for student attendees to encourage peer-to-peer learning and networking. However, we offer a special 'Educator Track' for teachers and youth workers who want to support their students' leadership development. Contact us for details."
  },
  {
    question: "Will I receive a certificate of participation?",
    answer: "Yes! All attendees who complete the full conference program will receive a digital certificate of participation and completion. This can be valuable for college applications, scholarship applications, and your leadership portfolio."
  },
  {
    question: "What's the refund policy?",
    answer: "We offer full refunds up to 30 days before the event, 50% refunds up to 14 days before, and no refunds within 14 days of the event unless there are exceptional circumstances. We understand student schedules can be unpredictable - contact us if you have concerns."
  },
  {
    question: "How do I stay connected with other attendees after the conference?",
    answer: "We'll create a private online community for all attendees where you can continue conversations, share resources, and collaborate on projects. You'll also receive information about our alumni network and future leadership opportunities."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about the Young Leaders Conference
            </p>
          </div>
          
          <div className="bg-card/30 rounded-2xl p-8 border border-border/50">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/30 rounded-lg px-6 py-2 bg-background/30 hover:bg-background/50 transition-colors duration-200"
                >
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-primary transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@youngleaders.org"
                className="text-primary hover:text-primary/80 font-medium transition-colors duration-200"
              >
                Email us: info@youngleaders.org
              </a>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <a 
                href="tel:+61-2-1234-5678"
                className="text-secondary hover:text-secondary/80 font-medium transition-colors duration-200"
              >
                Call us: +61 2 1234 5678
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}