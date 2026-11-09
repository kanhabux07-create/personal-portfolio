/**
 * ==============================================================================
 * PORTFOLIO CONTENT & CONFIGURATION FILE (content.js)
 * ==============================================================================
 * Welcome! This is the ONE AND ONLY file you need to edit to customize your
 * personal portfolio website. 
 *
 * HOW TO EDIT:
 * 1. Find the information you want to update (e.g., your name, bio, projects).
 * 2. Replace the placeholder text between the quotes "like this" with your own.
 * 3. Save this file (Ctrl + S or Cmd + S).
 * 4. Refresh your browser to see your changes immediately!
 *
 * NOTE FOR BEGINNERS:
 * - Always keep quotes around text (e.g. "My Name").
 * - Do not remove the commas at the ends of lines.
 * - To add your own photos, place them in the 'assets/images/' folder and update
 *   the image path here (e.g., "assets/images/my-photo.jpg").
 * ==============================================================================
 */

const PORTFOLIO_CONTENT = {

  // ============================================================================
  // 1. WEBSITE THEME & COLOURS
  // ============================================================================
  // Change your brand colors here. You can use Hex codes (like #C85A32) or standard names.
  theme: {
    // Primary accent color (used for buttons, highlights, badges, and accents)
    accentColor: "#C85A32",       // Warm terracotta / rust orange
    accentHover: "#AD4823",       // Slightly darker shade for button hovers
    
    // Background colors (warm editorial cream palette)
    bgPrimary: "#FBF9F5",         // Alabaster warm cream (main page background)
    bgSecondary: "#F3EFE6",       // Warm stone / soft beige (card backgrounds)
    bgCard: "#FFFFFF",            // Pure crisp white for elevated cards
    
    // Typography colors
    textPrimary: "#141413",       // Rich deep charcoal / ink black
    textSecondary: "#65625D",     // Warm editorial grey for body text and descriptions
    textMuted: "#8E887E",         // Subtle grey for metadata, dates and coordinates
    
    // Borders & dividers
    borderColor: "rgba(20, 20, 19, 0.08)", // Subtle hair-thin editorial border
    
    // Dark section colors (used for the 2026 highlight section and footer)
    darkBg: "#151514",            // Obsidian charcoal
    darkText: "#FBF9F5"           // Warm off-white text
  },

  // ============================================================================
  // 2. PERSONAL IDENTITY & NAVIGATION
  // ============================================================================
  personal: {
    // Your display name (appears in navigation, hero, about, and footer)
    name: "Alex Rivera",
    
    // Short initials or personal logo text
    monogram: "AR",
    
    // Subtitle shown next to your name in the navigation bar
    navSubtitle: "PORTFOLIO // 2026",
    
    // Your main professional title
    title: "Creative Developer & Digital Creator",
    
    // Current availability status (the green glowing pill in the header)
    availability: {
      isAvailable: true,          // Set to false if you are currently booked
      statusText: "Available for Q1/Q2 2026",
      location: "New York / Remote Worldwide"
    },
    
    // Path to your profile photograph.
    // Replace with "assets/images/my-photo.jpg" when you have your own photo!
    profileImage: "assets/images/profile-placeholder.svg",
    
    // Path to an artistic or secondary about image
    aboutImage: "assets/images/about-image.svg"
  },

  // ============================================================================
  // 3. NAVIGATION LINKS
  // ============================================================================
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Graphic Design", href: "#graphic-design" },
    { label: "Web Dev", href: "#web-dev" },
    { label: "Contact", href: "#contact" }
  ],

  // ============================================================================
  // 4. HERO SECTION
  // ============================================================================
  hero: {
    badge: "CREATIVE PORTFOLIO 2026",
    greeting: "Hi, I'm",
    name: "Alex Rivera.",
    profession: "Creative Developer & Digital Creator",
    shortBio: "Crafting thoughtful digital experiences, minimalist web architecture, and evocative visual identities at the intersection of design and technology.",
    
    // Action buttons in the Hero
    primaryButton: {
      text: "Let's Collaborate",
      href: "#contact"
    },
    secondaryButton: {
      text: "Explore Works",
      href: "#projects"
    },
    
    // Editorial tags shown beneath your portrait
    portraitTags: [
      "Editorial Web Design",
      "Creative Frontend",
      "Brand Systems"
    ]
  },

  // ============================================================================
  // 5. ABOUT ME SECTION
  // ============================================================================
  about: {
    eyebrow: "ABOUT ME // PHILOSOPHY",
    heading: "Bridging the gap between fine editorial aesthetics and resilient code.",
    
    // Your personal story paragraphs (you can add or edit these)
    paragraphs: [
      "I am an independent creative developer and designer with a deep curiosity for high-fashion typography, minimalist layouts, and smooth interactive web experiences.",
      "My work focuses on helping brands, founders, and studios establish a memorable digital presence that feels timeless rather than trendy. I believe websites should feel as tactile and thoughtful as a beautifully printed magazine.",
      "When I am not designing interfaces or writing clean code, you will find me exploring architectural photography, collecting vinyl records, and studying generative creative systems."
    ],
    
    // A highlighted quote or personal manifesto
    quote: "Whitespace is not empty space; it is the silence between musical notes that gives the melody its power.",
    
    // Quick statistics / milestones (shown as clean counters)
    stats: [
      { number: "04+", label: "Years Designing & Coding" },
      { number: "35+", label: "Projects Delivered" },
      { number: "100%", label: "Client Dedication" },
      { number: "A11Y", label: "Accessible & Clean Code" }
    ],
    
    // Core tools you use daily
    toolsList: [
      "HTML5 / CSS3 / Modern JS",
      "GSAP / ScrollTrigger",
      "Figma / FigJam",
      "Adobe Illustrator & Photoshop",
      "Responsive Layouts",
      "Git & GitHub Pages"
    ]
  },

  // ============================================================================
  // 6. SKILLS & SERVICES SECTION
  // ============================================================================
  // Honest, visually attractive service cards. 
  // No exaggerated guru claims — professional, clear, and client-focused.
  services: [
    {
      id: "web-dev",
      number: "01",
      title: "Web Development",
      description: "Building fast, accessible, responsive websites with clean semantic HTML, modern CSS, and performant JavaScript. Built to look stunning on every screen.",
      skills: ["Semantic HTML5", "Modern CSS & Flexbox/Grid", "Vanilla JavaScript", "Responsive Design", "Performance Optimization"]
    },
    {
      id: "ui-ux",
      number: "02",
      title: "UI/UX Design",
      description: "Designing intuitive user flows, elegant wireframes, and high-fidelity interface prototypes that balance visual beauty with practical usability.",
      skills: ["User Flows & Wireframing", "High-Fidelity Mockups", "Design Systems & Tokens", "Figma Prototyping", "Information Architecture"]
    },
    {
      id: "graphic-design",
      number: "03",
      title: "Graphic Design",
      description: "Creating cohesive visual identities, editorial poster layouts, digital assets, and brand guidelines that give projects a distinct personality.",
      skills: ["Brand Identity Systems", "Typography & Editorial", "Social Media Kits", "Poster & Print Layouts", "Vector Art & Iconography"]
    },
    {
      id: "creative-dev",
      number: "04",
      title: "Creative Development",
      description: "Adding life and delight to the web through subtle micro-interactions, smooth scrolling, entrance reveals, and tasteful GSAP motion design.",
      skills: ["GSAP Animations", "ScrollTrigger Effects", "Micro-Interactions", "Smooth Page Transitions", "CSS Canvas Effects"]
    },
    {
      id: "ai-automation",
      number: "05",
      title: "AI & Automation",
      description: "Leveraging modern AI tools and workflow automations to accelerate content structuring, streamline repetitive tasks, and optimize developer pipelines.",
      skills: ["Workflow Automation", "AI Integration", "Prompt Engineering", "Static Site Deployment", "Automated Asset Pipelines"]
    }
  ],

  // ============================================================================
  // 7. SELECTED PROJECTS SECTION
  // ============================================================================
  // Add, edit, or remove projects here. Each project displays on your website!
  projects: [
    {
      id: "project-1",
      title: "Luminary Atelier",
      subtitle: "Haute Couture E-Commerce Experience",
      category: "Web Development / UI Design",
      year: "2026",
      image: "assets/images/projects/project-1.svg",
      description: "A luxury digital storefront pairing editorial typography with lightning-fast catalog navigation, subtle micro-interactions, and refined ceramic showcase pages.",
      tags: ["HTML5", "CSS Grid", "JavaScript", "GSAP Motion"],
      liveUrl: "#",
      demoNote: "Interactive Prototype Available"
    },
    {
      id: "project-2",
      title: "Atelier Culture",
      subtitle: "Architecture & Design Exhibition Platform",
      category: "Creative Development",
      year: "2025",
      image: "assets/images/projects/project-2.svg",
      description: "An immersive digital exhibition catalog celebrating modern minimalist architecture with kinetic typography, smooth scrolling, and spatial grid layouts.",
      tags: ["Creative Code", "ScrollTrigger", "Editorial Layout", "Responsive Design"],
      liveUrl: "#",
      demoNote: "Award-Winning Concept"
    },
    {
      id: "project-3",
      title: "Kroma UI System",
      subtitle: "Multi-Brand Design System & Tokens",
      category: "UI/UX & Frontend Architecture",
      year: "2025",
      image: "assets/images/projects/project-3.svg",
      description: "A scalable, accessible component library and token framework engineered for high consistency across web applications with 99.8% accessibility compliance.",
      tags: ["Design System", "CSS Variables", "Accessibility (WCAG)", "Vanilla JS"],
      liveUrl: "#",
      demoNote: "Open Source Documentation"
    }
  ],

  // ============================================================================
  // 8. GRAPHIC DESIGN SHOWCASE (Inspired by the Reference Reel)
  // ============================================================================
  // Showcase your graphic design work, posters, branding, and editorial layouts.
  graphicDesign: {
    eyebrow: "VISUAL IDENTITY & EDITORIAL",
    heading: "Form, void & typographic rhythm.",
    description: "A curated collection of poster design studies, packaging concepts, and editorial publications exploring negative space and brutalist elegance.",
    items: [
      {
        id: "gd-1",
        title: "Form & Void Exhibition Poster",
        category: "Swiss Typography / Exhibition",
        year: "2026",
        image: "assets/images/graphic-design/poster-1.svg",
        description: "Brutalist typographic poster exploring asymmetric balance and high-contrast geometric intersections for an international design biennial."
      },
      {
        id: "gd-2",
        title: "Botanical Essence Identity",
        category: "Packaging & Brand Identity",
        year: "2026",
        image: "assets/images/graphic-design/poster-2.svg",
        description: "Eco-luxury cosmetic packaging suite printed on raw cotton paper with foil-stamped typography and soy ink."
      },
      {
        id: "gd-3",
        title: "Motion in Stasis Study",
        category: "Geometric Poster Series",
        year: "2025",
        image: "assets/images/graphic-design/poster-3.svg",
        description: "Experimental poster series capturing dynamic motion vectors through static geometric layers and warm earth-tone duotones."
      },
      {
        id: "gd-4",
        title: "Atelier Quarterly Issue 04",
        category: "Editorial Publication Spread",
        year: "2025",
        image: "assets/images/graphic-design/poster-4.svg",
        description: "Cover and feature spread layout celebrating the return of the tactile, editorial web with rich serif typesetting."
      }
    ]
  },

  // ============================================================================
  // 9. WEB DEVELOPMENT SECTION (Browser-Style Mockups)
  // ============================================================================
  // Interactive website showcases presented in realistic browser window frames.
  webDevSection: {
    eyebrow: "ENGINEERING & CREATIVE CODE",
    heading: "Bespoke web applications built for speed & elegance.",
    description: "Clean code architectures, responsive browser layouts, and interactive platforms engineered with precision.",
    showcases: [
      {
        id: "web-mock-1",
        title: "CloudPulse Telemetry Dashboard",
        browserUrl: "https://cloudpulse.agency/analytics/v2",
        category: "SaaS Dashboard / Data Visualization",
        description: "A real-time telemetry dashboard monitoring 42 edge regions with dynamic SVG waveforms, sub-second query rendering, and responsive dark aesthetics.",
        image: "assets/images/web-dev/browser-mock-1.svg",
        techStack: ["Vanilla JS", "SVG Charts", "CSS Grid", "Performance API"],
        liveDemoUrl: "#",
        githubUrl: "#"
      },
      {
        id: "web-mock-2",
        title: "Editorial Narrative Press",
        browserUrl: "https://editorial-narrative.press/stories",
        category: "Digital Publication & Magazine",
        description: "An editorial reading platform inspired by vintage print layouts, featuring soft cream contrast, distraction-free typography, and fluid responsive scaling.",
        image: "assets/images/web-dev/browser-mock-2.svg",
        techStack: ["Semantic HTML", "Modern Typography", "IntersectionObserver", "CSS Variables"],
        liveDemoUrl: "#",
        githubUrl: "#"
      },
      {
        id: "web-mock-3",
        title: "Synthesis Audio Visualizer",
        browserUrl: "https://synth-audio.studio/generative",
        category: "Web Audio & Creative Canvas",
        description: "A real-time frequency spectrum visualizer rendered in hardware-accelerated canvas at 60 frames per second with interactive audio frequency toggles.",
        image: "assets/images/web-dev/browser-mock-3.svg",
        techStack: ["Web Audio API", "HTML5 Canvas", "GSAP Timelines", "GPU Acceleration"],
        liveDemoUrl: "#",
        githubUrl: "#"
      }
    ]
  },

  // ============================================================================
  // 10. PERSONAL HIGHLIGHT SECTION (Bold "2026" Typography)
  // ============================================================================
  highlight2026: {
    year: "2026",
    eyebrow: "CREATIVE VISION // 2026",
    title: "Intentional Simplicity in an Era of Digital Noise.",
    quote: "Every pixel, every transition, and every typeface serves a purpose. Committed to building the next generation of warm, high-craft web experiences.",
    highlightsList: [
      "Subtle cream aesthetics that respect user eye comfort",
      "Zero bloat: lightning fast loading without bloated frameworks",
      "Accessible by design: built for everyone on every device",
      "Crafted with lasting care and modern web standards"
    ],
    // Marquee ticker words scrolling smoothly in the background
    tickerWords: [
      "CREATIVE DIRECTION", "•", "EDITORIAL DESIGN", "•",
      "CLEAN ARCHITECTURE", "•", "ACCESSIBILITY", "•",
      "HIGH CRAFT", "•", "GSAP MOTION", "•", "TYPOGRAPHY", "•"
    ]
  },

  // ============================================================================
  // 11. CONTACT SECTION
  // ============================================================================
  contact: {
    eyebrow: "LET'S WORK TOGETHER",
    heading: "Got a project in mind?",
    subheading: "Let's create something meaningful.",
    description: "Whether you have an upcoming project, need design consultation, or just want to chat about web aesthetics and creative code, my inbox is always open.",
    
    // Your contact email (users can click or copy with one button!)
    email: "hello@alexrivera.design",
    
    // Optional phone number or messaging handle
    phone: "+1 (555) 234-5678",
    
    // Your physical / remote location
    locationText: "Based in New York // Available Worldwide for Remote Projects",
    
    // Social media links. Change urls to your real accounts or leave '#'
    socialLinks: [
      { name: "GitHub", url: "https://github.com", handle: "github.com/alexrivera" },
      { name: "LinkedIn", url: "https://linkedin.com", handle: "linkedin.com/in/alexrivera" },
      { name: "Instagram", url: "https://instagram.com", handle: "@alexrivera.design" },
      { name: "Twitter / X", url: "https://x.com", handle: "@alexriveradev" },
      { name: "Dribbble", url: "https://dribbble.com", handle: "dribbble.com/alexrivera" }
    ]
  },

  // ============================================================================
  // 12. FOOTER SECTION
  // ============================================================================
  footer: {
    copyrightText: "© 2026 Alex Rivera. All rights reserved.",
    colophon: "Designed with editorial warmth • Built with clean HTML, CSS & Vanilla JS.",
    showBackToTop: true
  }
};

// Prevent accidental modification in runtime
if (typeof Object.freeze === 'function') {
  // Can be unfrozen if dynamic editing is needed, kept open for ease of access
}
