import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  type: 'keynote' | 'workshop' | 'break' | 'networking' | 'entertainment';
  duration: string;
}

const day1Events: TimelineEvent[] = [
  {
    time: "8:00 AM",
    title: "Registration & Welcome Breakfast",
    description: "Check-in, networking, and light breakfast",
    type: "networking",
    duration: "60 min"
  },
  {
    time: "9:00 AM",
    title: "Opening Keynote: Sarah Chen",
    description: "Technology for Social Good: Starting Your Impact Journey",
    type: "keynote",
    duration: "45 min"
  },
  {
    time: "10:00 AM",
    title: "Workshop Block 1",
    description: "Choose from: Leadership Fundamentals, Public Speaking, or Project Management",
    type: "workshop",
    duration: "90 min"
  },
  {
    time: "11:30 AM",
    title: "Morning Break",
    description: "Refreshments and networking",
    type: "break",
    duration: "30 min"
  },
  {
    time: "12:00 PM",
    title: "Panel Discussion",
    description: "Young Entrepreneurs Share Their Stories",
    type: "keynote",
    duration: "60 min"
  },
  {
    time: "1:00 PM",
    title: "Lunch & Networking",
    description: "Structured networking with mentors and peers",
    type: "networking",
    duration: "90 min"
  },
  {
    time: "2:30 PM",
    title: "Workshop Block 2",
    description: "Choose from: Financial Literacy, Social Media Strategy, or Team Building",
    type: "workshop",
    duration: "90 min"
  },
  {
    time: "4:00 PM",
    title: "Leadership Games",
    description: "Interactive team challenges and problem-solving activities",
    type: "entertainment",
    duration: "60 min"
  },
  {
    time: "5:00 PM",
    title: "Day 1 Wrap-up",
    description: "Reflection and preview of Day 2",
    type: "keynote",
    duration: "30 min"
  }
];

const day2Events: TimelineEvent[] = [
  {
    time: "9:00 AM",
    title: "Energizer & Recap",
    description: "Morning activities and Day 1 highlights",
    type: "networking",
    duration: "30 min"
  },
  {
    time: "9:30 AM",
    title: "Keynote: Marcus Rodriguez",
    description: "From Passion to Action: The Young Entrepreneur's Journey",
    type: "keynote",
    duration: "45 min"
  },
  {
    time: "10:30 AM",
    title: "Workshop Block 3",
    description: "Choose from: Innovation Lab, Community Organizing, or Digital Marketing",
    type: "workshop",
    duration: "90 min"
  },
  {
    time: "12:00 PM",
    title: "Lunch & Mentor Meetings",
    description: "One-on-one time with industry mentors",
    type: "networking",
    duration: "90 min"
  },
  {
    time: "1:30 PM",
    title: "Keynote: Dr. Amelia Johnson",
    description: "Developing Your Leadership Style",
    type: "keynote",
    duration: "45 min"
  },
  {
    time: "2:30 PM",
    title: "Action Planning Session",
    description: "Create your personal leadership action plan",
    type: "workshop",
    duration: "60 min"
  },
  {
    time: "3:30 PM",
    title: "Entertainment & Music",
    description: "Live performances and celebration",
    type: "entertainment",
    duration: "60 min"
  },
  {
    time: "4:30 PM",
    title: "Closing Ceremony",
    description: "Awards, recognition, and next steps",
    type: "keynote",
    duration: "60 min"
  },
  {
    time: "5:30 PM",
    title: "Final Networking",
    description: "Exchange contacts and continue conversations",
    type: "networking",
    duration: "30 min"
  }
];

const getEventColor = (type: string) => {
  switch (type) {
    case 'keynote': return 'border-primary bg-primary/10';
    case 'workshop': return 'border-secondary bg-secondary/10';
    case 'networking': return 'border-accent bg-accent/10';
    case 'entertainment': return 'border-purple-500 bg-purple-500/10';
    case 'break': return 'border-muted bg-muted/10';
    default: return 'border-border bg-card';
  }
};

export function ProgramSection() {
  return (
    <section id="program" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Event Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two days packed with inspiring talks, hands-on workshops, and networking opportunities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Day 1 */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Day 1</h3>
              <p className="text-muted-foreground flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                March 15, 2025
              </p>
            </div>
            
            <div className="space-y-4">
              {day1Events.map((event, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${getEventColor(event.type)} transition-all duration-200 hover:scale-[1.02]`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <Clock className="w-4 h-4 text-primary" />
                      {event.time}
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted/20 px-2 py-1 rounded">
                      {event.duration}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white mb-1">
                    {event.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Day 2 */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-secondary mb-2">Day 2</h3>
              <p className="text-muted-foreground flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                March 16, 2025
              </p>
            </div>
            
            <div className="space-y-4">
              {day2Events.map((event, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${getEventColor(event.type)} transition-all duration-200 hover:scale-[1.02]`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <Clock className="w-4 h-4 text-secondary" />
                      {event.time}
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted/20 px-2 py-1 rounded">
                      {event.duration}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white mb-1">
                    {event.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Venue Info */}
        <div className="mt-16 bg-card/50 rounded-2xl p-8 border border-border/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                Venue Location
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="font-medium text-white">Sydney Convention Centre</p>
                <p>14 Darling Drive, Sydney NSW 2000</p>
                <p>Darling Harbour, Sydney</p>
                <div className="flex items-center gap-2 mt-4">
                  <Users className="w-4 h-4 text-secondary" />
                  <span className="text-sm">Capacity: 1,200 attendees</span>
                </div>
              </div>
            </div>
            
            {/* Embedded Map Placeholder */}
            <div className="bg-muted/20 rounded-lg h-48 flex items-center justify-center border border-border/30">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Interactive map would be embedded here</p>
                <p className="text-xs mt-1">
                  <a 
                    href="https://maps.google.com/maps?q=Sydney+Convention+Centre" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}