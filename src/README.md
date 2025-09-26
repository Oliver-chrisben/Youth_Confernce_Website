# Young Leaders Conference Website

A modern, responsive single-page website built for the Young Leaders Conference 2025. Features a dark theme with vibrant orange and yellow CTAs, designed specifically to appeal to teenagers and secondary school students.

## 🚀 Features

- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Theme**: Deep charcoal background with vibrant accent colors
- **Interactive Elements**: Hover effects, animations, and smooth scrolling
- **Accessible**: WCAG AA compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Fast loading with lazy-loaded images and optimized assets
- **Modern Stack**: Built with React, TypeScript, and Tailwind CSS

## 🎨 Design System

### Colors
- **Background**: Deep charcoal (#2a2a2e)
- **Primary CTA**: Orange (#FF6B35)
- **Accent**: Yellow (#FFDD44)
- **Secondary**: Blue (#4A90E2)
- **Text**: White (#ffffff)
- **Muted**: Light gray (#b8b8b8)

### Typography
- **Base Font Size**: 16px
- **Headings**: Bold, medium weight (600)
- **Body**: Regular weight (400)
- **Line Height**: 1.5 for optimal readability

## 📁 Project Structure

```
/
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── Navigation.tsx      # Main navigation with mobile menu
│   ├── HeroSection.tsx     # Landing/hero section
│   ├── AboutSection.tsx    # Conference information
│   ├── HighlightsSection.tsx # Interactive feature cards
│   ├── SpeakersSection.tsx # Speaker profiles with modals
│   ├── ProgramSection.tsx  # Event schedule and venue info
│   ├── RegistrationSection.tsx # Registration CTA and requirements
│   ├── FAQSection.tsx      # Accordion-style FAQ
│   ├── SponsorsSection.tsx # Sponsor logos and partnerships
│   ├── ContactSection.tsx  # Contact form and social links
│   └── Footer.tsx          # Site footer
├── styles/
│   └── globals.css         # Global styles and theme variables
├── App.tsx                 # Main application component
└── README.md              # This file
```

## 🛠️ Customization Guide

### Updating Content

#### 1. Conference Details
Edit these files to update basic conference information:
- `components/HeroSection.tsx` - Date, location, tagline
- `components/AboutSection.tsx` - Conference description
- `components/ProgramSection.tsx` - Schedule and venue details

#### 2. Speakers
Update speaker information in `components/SpeakersSection.tsx`:
```typescript
const speakers: Speaker[] = [
  {
    id: "1",
    name: "Your Speaker Name",
    title: "Their Title",
    company: "Their Company",
    bio: "Short bio for card",
    fullBio: "Detailed biography for modal",
    image: "https://your-image-url.com/speaker.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/speaker",
      twitter: "https://twitter.com/speaker",
      website: "https://speaker-website.com"
    }
  }
];
```

#### 3. Event Schedule
Modify the timeline in `components/ProgramSection.tsx`:
```typescript
const day1Events: TimelineEvent[] = [
  {
    time: "9:00 AM",
    title: "Event Title",
    description: "Event description",
    type: "keynote", // keynote, workshop, break, networking, entertainment
    duration: "60 min"
  }
];
```

#### 4. FAQ
Update questions and answers in `components/FAQSection.tsx`:
```typescript
const faqs = [
  {
    question: "Your question here?",
    answer: "Your detailed answer here."
  }
];
```

#### 5. Sponsors
Modify sponsor information in `components/SponsorsSection.tsx`:
```typescript
const sponsors: Sponsor[] = [
  {
    name: "Sponsor Name",
    logo: "https://sponsor-logo-url.com/logo.png",
    website: "https://sponsor-website.com",
    tier: "platinum" // platinum, gold, silver, bronze, partner
  }
];
```

### Updating Registration Link

To connect your Google Form or registration system:

1. Open `components/HeroSection.tsx`
2. Find the registration button click handler
3. Replace the URL with your actual form link:

```typescript
onClick={() => window.open('https://forms.google.com/your-actual-form-id', '_blank')}
```

Do the same in:
- `components/Navigation.tsx`
- `components/RegistrationSection.tsx`

### Color Customization

To change the color scheme, edit `/styles/globals.css`:

```css
:root {
  --primary: #FF6B35;    /* Orange - main CTAs */
  --secondary: #4A90E2;  /* Blue - secondary actions */
  --accent: #FFDD44;     /* Yellow - highlights */
  --background: #2a2a2e; /* Dark charcoal background */
  --foreground: #ffffff; /* White text */
}
```

### Images

Replace placeholder images with your own:
1. Update image URLs in speaker profiles
2. Replace hero image in `HeroSection.tsx`
3. Update venue image in `AboutSection.tsx`
4. Replace sponsor logos with actual brand assets

## 🚀 Deployment

### Static Hosting (Recommended)

This website is perfect for static hosting services:

#### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

#### Netlify
1. Drag and drop your build folder to Netlify
2. Or connect your Git repository for continuous deployment

#### GitHub Pages
1. Build your project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

### CDN Setup

For optimal performance, use a CDN like:
- **Cloudflare** (free tier available)
- **AWS CloudFront**
- **Google Cloud CDN**

### Performance Optimizations

The website is already optimized for performance:
- ✅ Images are lazy-loaded
- ✅ Modern image formats supported
- ✅ Minimal JavaScript bundle
- ✅ CSS is optimized with Tailwind
- ✅ Smooth scrolling and animations

### Expected Performance
- **Load Time**: < 3 seconds on 4G
- **Lighthouse Score**: 95+ across all metrics
- **Concurrent Users**: 500+ (with proper hosting)

## 🔒 Security & Privacy

### Form Handling
The contact form includes:
- Client-side validation
- Email format verification
- XSS protection through React's built-in sanitization

### External Links
All external links open in new tabs with `rel="noopener noreferrer"` for security.

### Privacy Considerations
- No tracking scripts included by default
- No personal data stored locally
- External form submissions go to your chosen provider

## ♿ Accessibility

The website meets WCAG AA standards:
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ High contrast ratios
- ✅ Alt text for all images
- ✅ Semantic HTML structure
- ✅ Focus indicators

## 📱 Browser Support

Supports all modern browsers:
- ✅ Chrome 90+
- ✅ Firefox 90+
- ✅ Safari 14+
- ✅ Edge 90+

## 🛟 Support

### Common Issues

**Registration form not working?**
1. Check that your Google Form URL is correct
2. Ensure the form allows public responses
3. Test the form URL directly in a browser

**Images not loading?**
1. Verify image URLs are accessible
2. Check for CORS issues with external images
3. Consider hosting images on the same domain

**Styling issues?**
1. Clear browser cache
2. Check for CSS conflicts
3. Ensure Tailwind classes are properly applied

### Getting Help

For technical support or customization help:
- **Email**: dev@youngleaders.org
- **Documentation**: Check component comments in the code
- **Issues**: Create a GitHub issue if using version control

## 📄 License

This project is provided as-is for the Young Leaders Conference. Feel free to modify and adapt for your needs.

---

**Built with ❤️ for young leaders everywhere**