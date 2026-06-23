# COMSATS UNIVERSITY ISLAMABAD CAMPUS WEBSITE — COMPLETE PRODUCT, DESIGN & DEVELOPMENT SPECIFICATION

## PROJECT OVERVIEW

Design and develop a premium, modern, enterprise-grade university website for **COMSATS University Islamabad (CUI) – Islamabad Campus**.

The website should immediately communicate:

- Academic Excellence
- Innovation & Research
- Student Success
- Institutional Trust
- Global Standards
- Future-Focused Education

The visual quality should be comparable to leading universities such as:

- MIT
- Stanford
- NUS
- KAUST
- University of Melbourne

while preserving COMSATS branding and identity.

The design should NOT look like:

- Generic WordPress university themes
- Government-style websites
- Outdated educational portals
- Template-based university websites

The website should feel:

- Premium
- Modern
- Professional
- Research-focused
- Clean
- Trustworthy
- Responsive
- Fast

---

# TECHNOLOGY STACK

## Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React

## Requirements

- Server Components where appropriate
- SEO Friendly
- Fully Responsive
- Accessibility Focused
- Modular Architecture
- Reusable Components
- Optimized Performance

---

# PROJECT ARCHITECTURE

Homepage-specific sections should remain inside a dedicated home folder.

Reusable components that can be used across multiple pages should be placed inside ui.

```txt
src/
│
├── app/
│
├── components/
│
│   ├── home/
│   │   ├── hero.tsx
│   │   ├── media-insights.tsx
│   │   ├── admissions.tsx
│   │   ├── campus-life.tsx
│   │   ├── leadership-message.tsx
│   │   ├── latest-news.tsx
│   │   ├── about-comsats.tsx
│   │   ├── upcoming-events.tsx
│   │   ├── academic-departments.tsx
│   │   ├── academics.tsx
│   │   ├── services.tsx
│   │   ├── cta.tsx
│   │   ├── library.tsx
│   │   ├── testimonials.tsx
│   │   └── contact.tsx
│
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── mobile-menu.tsx
│
│   └── ui/
│       ├── section-header.tsx
│       ├── primary-button.tsx
│       ├── secondary-button.tsx
│       ├── social-button.tsx
│       ├── glass-card.tsx
│       ├── content-card.tsx
│       ├── department-card.tsx
│       ├── statistic-card.tsx
│       ├── testimonial-card.tsx
│       ├── marquee.tsx
│       ├── section-container.tsx
│       ├── icon-box.tsx
│       └── loading-skeleton.tsx
│
├── constants/
│   ├── colors.ts
│   ├── navigation.ts
│   ├── testimonials.ts
│   ├── departments.ts
│   ├── events.ts
│   └── news.ts
│
├── lib/
│
└── types/
```

---

# BRAND COLORS

Create a centralized color file.

```ts
export const COLORS = {
  primaryPurple: "#4C227B",
  primaryBlue: "#0F5EA6",
  white: "#FFFFFF",
  black: "#000000",
};
```

---

# DESIGN SYSTEM

## Border Radius

Cards

```txt
24px
```

Buttons

```txt
999px
```

Sections

```txt
32px
```

Images

```txt
24px
```

---

## Container Width

```txt
max-width: 1440px
```

---

## Section Padding

Desktop

```txt
120px
```

Tablet

```txt
80px
```

Mobile

```txt
60px
```

---

# TYPOGRAPHY

Hero Heading

```txt
72px
Bold
```

Section Heading

```txt
48px
Bold
```

Card Title

```txt
24px
Semibold
```

Body Text

```txt
18px
```

Section Label

```txt
14px
Uppercase
Letter Spacing
```

---

# GLOBAL DESIGN PRINCIPLES

Use:

- Consistent spacing
- Strong hierarchy
- Clean typography
- Subtle glass effects
- Soft shadows
- Consistent card styles
- Consistent button styles

Avoid:

- Random colors
- Inconsistent cards
- Excessive animations
- Heavy gradients
- Over-designed sections

---

# ANIMATION SYSTEM

Use Framer Motion.

Every section should animate on viewport entry.

Animations:

- Fade Up
- Stagger Children
- Hover Lift
- Scale Hover
- Subtle Parallax

Never use:

- Flashy effects
- Rotating elements
- Excessive motion

Only Hero Scroll Indicator may continuously bounce.

---

# NAVBAR

## Behavior

Initial State:

- Full Width
- Transparent
- Positioned Absolute
- Glass Blur Effect

```css
backdrop-filter: blur(20px);
```

---

## Scrolled State

When scrolling:

Navbar transforms into floating pill container.

Properties:

```txt
Width: 85%
Position: Center
Border Radius: 999px
Transition: 400ms
```

Glassmorphism:

```css
background: rgba(255, 255, 255, 0.08);
backdrop-filter: blur(24px);
```

---

## Left Side

- COMSATS Logo
- COMSATS University Islamabad
- Islamabad Campus

---

## Center Navigation

- Home
- News
- Academics
- Admissions
- Research
- Library
- Healthcare
- Campus Life
- About

---

## Right Side

Lucide Search Icon Button

---

# HERO SECTION

Height

```txt
100vh
Minimum Height: 900px
```

---

## Layout

Two Columns

Left

```txt
60%
```

Right

```txt
40%
```

---

## Left Content

Small Tag

```txt
Leading University of Pakistan
```

Main Heading

```txt
Empowering Future Leaders Through Innovation, Research & World-Class Education
```

Description

Introduce COMSATS Islamabad Campus and its role in education, innovation, and research.

---

## Buttons

Primary

```txt
Apply Now
```

Secondary

```txt
Explore Programs
```

---

## Social Icons

Rounded Buttons

48px

Use Lucide Icons

- Youtube
- Instagram
- Facebook
- Twitter/X

Hover

- Scale Up
- Shadow Increase

---

## Scroll Indicator

Centered at bottom of hero.

Contains:

- Arrow Down Icon
- Explore More Campus

Continuous floating animation.

---

## Hero Media Area

Large media placeholder.

Will later support:

- Campus Video
- Campus Slideshow
- Interactive Showcase

Aspect Ratio

```txt
16:9
```

---

# MEDIA & INSIGHTS

Section Label

```txt
MEDIA & INSIGHTS
```

Heading

```txt
Explore Campus
```

Description

Watch highlights, lectures, achievements, events and student experiences from COMSATS University Islamabad.

---

## Content

Infinite marquee.

Mixed cards:

- Images
- Videos

Video Cards

- Play Button Overlay

Behavior

- Auto Scroll
- Infinite Loop
- Pause On Hover

---

# ADMISSIONS

Heading

```txt
Start Your Journey With Us
```

Description

Explore programs and admission criteria. Begin your application today.

---

## Program Cards

1. Undergraduate Programs
2. Graduate Programs
3. PhD Programs

Each Card Includes

- Icon
- Title
- Description

---

## CTA Buttons

Primary

```txt
Apply Now
```

Secondary

```txt
How To Apply
```

Secondary

```txt
Fee Structure
```

Apply button should be visually dominant.

---

# CAMPUS LIFE

Label

```txt
Campus Life
```

Heading

```txt
Discover a Vibrant Campus Environment
```

Description

Discover a vibrant campus environment designed for growth, wellness and community.

---

## Cards

Student Affairs

Modern Wellness & Healthcare

Student Service Center

Each Card

- Image
- Title
- Description
- Explore Button

Section CTA

```txt
Explore Campus Life
```

---

# LEADERSHIP MESSAGE

Director

```txt
Prof. Dr. Raheel Qamar
```

Layout

2 Columns

Image

40%

Content

60%

Message

"As the Director of this esteemed institution comprising seven campuses across Pakistan, it is my privilege to invite you to join COMSATS University Islamabad. Here, knowledge knows no bounds and possibilities are limitless. We take pride in fostering an environment that encourages creativity, critical thinking and lifelong learning."

---

# LATEST NEWS

Heading

```txt
Latest News
```

Cards Include

- News Image
- Title
- Publication Date

CTA

```txt
Explore More COMSATS News
```

Responsive Grid

Desktop

```txt
3 Columns
```

Tablet

```txt
2 Columns
```

Mobile

```txt
1 Column
```

---

# ABOUT COMSATS

Background

Large Campus Image

Blue Overlay

```txt
70% Opacity
```

---

## Heading

```txt
About COMSATS University Islamabad
```

Description

COMSATS University Islamabad is a leading institution dedicated to advancing education, research and innovation. With a strong national presence and global outlook, the university empowers students through academic excellence, technological advancement and impactful research.

---

## Statistics Cards

- 7+ Campuses
- Top Ranked University in Pakistan
- Future Ready Education
- AI & Innovation Driven

Use Glassmorphism Cards.

---

# UPCOMING EVENTS

Heading

```txt
Upcoming Events
```

Continuous marquee.

Cards Include

- Event Image
- Event Title
- Event Description
- Event Date

Reuse same card design as News.

---

# ISLAMABAD CAMPUS ACADEMIC DEPARTMENTS

Heading

```txt
Islamabad Campus Academic Departments
```

Description

Discover world-class departments driving innovation, research and future education.

---

## Departments

- Computer Science
- Electrical Engineering
- Architecture
- Art & Design
- Management Sciences
- Mathematics
- Physics
- Chemistry

Each Card

- Lucide Icon
- Department Name

CTA

```txt
View All Departments
```

---

# ACADEMICS

Cards

- Faculty & Departments
- Centers & Offices
- Course Catalogue

Each Card

- Image
- Title
- Description
- Read More Button

Maintain same card language.

---

# SERVICES & FACILITIES

Heading

```txt
Our Services & Facilities
```

Initially show 6 cards.

View More loads additional services.

Services

- Safety First
- Regular Classes
- Highly Qualified Teachers
- Modern Classrooms
- Cafeteria
- Transport
- Sports Facilities
- State-of-the-Art Labs
- Student Support Services
- Research Facilities

Each Card

- Icon
- Title
- Description

---

# UNIVERSITY CTA

Large conversion section.

Heading

```txt
Join Our Amazing Campus Community
```

Description

COMSATS University Islamabad is ranked among Pakistan's top universities and continues to shape future leaders through innovation and academic excellence.

CTA

```txt
Apply Now
```

Background

```txt
Purple → Blue Brand Gradient
```

---

# JUNAID ZAIDI LIBRARY

Two Column Layout

Image on one side.

Content on the other.

Heading

```txt
Junaid Zaidi Library
```

Description

The Junaid Zaidi Library serves as a vital part of COMSATS University Islamabad's academic mission. It provides access to extensive print and digital resources, supports curriculum requirements, and offers an environment that encourages learning, research, and intellectual growth. The library also delivers customized information services tailored to the needs of students, faculty, and researchers.

---

# TESTIMONIALS

Background

Campus Image

Dark Overlay

```txt
85%
```

Heading

```txt
What Our Students Say
```

Create 9–10 testimonials.

Each Card

- Student Image
- Student Name
- Program
- Testimonial

Infinite auto-scrolling marquee.

---

# CONTACT US

Two Columns

Left

Google Maps Embed

Right

Cards

- Location
- Email
- Phone Number
- Admissions Contact

Use Lucide Icons.

---

# FOOTER

University Information

COMSATS University Islamabad

Park Road, Islamabad, Pakistan

Phone:

```txt
+92 51 90495032-5
```

Admissions Email

```txt
admissions@comsats.edu.pk
```

Admissions Phone

```txt
+92 51 9247000-3
```

---

## Resources

- HEC
- Refund Policy
- POLs
- Online SOPs
- Degree Verification
- Undergraduate Admissions
- Graduate Admissions

---

## Student Life

- Rules & Regulations
- Hostel Reservation
- Telephone Directory
- Reader Society
- QEC

---

## Support

- Office 365 Setup
- SECP Guide
- Statutory Information
- Elections

---

## Follow Us

- YouTube
- Instagram
- Facebook
- X

---

## Footer Bottom

```txt
© 2026 COMSATS University Islamabad. All Rights Reserved.
```

---

# RESPONSIVENESS

Breakpoints

Desktop

```txt
1440px+
```

Laptop

```txt
1024px+
```

Tablet

```txt
768px+
```

Mobile

```txt
375px+
```

Requirements

- No horizontal overflow
- No layout shifts
- Responsive typography
- Responsive spacing
- Responsive cards
- Mobile-friendly navigation
- Touch-friendly buttons

---

# PERFORMANCE REQUIREMENTS

- Use Next/Image everywhere
- Lazy Load Images
- Lazy Load Videos
- Dynamic Imports where appropriate
- Optimized Framer Motion animations
- Lighthouse Score 90+
- SEO Optimized
- Accessible Components
- Fast Initial Load

---

# IMPORTANT DESIGN RULE

Create ONE unified card design system and reuse it throughout:

- Campus Life
- News
- Events
- Academics

Create ONE unified section header component and reuse it throughout.

Create ONE unified button system and reuse it throughout.

All colors, spacing, typography, animations and shadows must come from centralized constants to maintain consistency and scalability throughout the website.

# MEDIA & INSIGHTS SECTION — IMPLEMENTATION REQUIREMENTS

The **Media & Insights** section should showcase major student activities, events, lectures, achievements, and campus experiences through an engaging horizontal media carousel.

This section is intended to make the homepage feel active, vibrant, and student-focused while giving visitors immediate insight into campus culture.

---

## SECTION HEADER

### Label

```txt
MEDIA & INSIGHTS
```

### Heading

```txt
Explore Campus
```

### Description

```txt
Watch highlights, lectures, student events, achievements, and campus experiences from COMSATS University Islamabad.
```

---

# SECTION LAYOUT

Create a full-width section with a centered container.

The section should contain:

1. Section Header
2. Infinite Horizontal Carousel
3. Mixed Media Cards

The carousel should continuously scroll horizontally and pause when hovered.

Use Framer Motion for smooth movement.

---

# MEDIA DATA

Use the following media entries.

These are videos, but the provided images should act as their thumbnail covers.

```ts
const mediaItems = [
  {
    title: "Student Week 2026",
    thumbnail: "/student_week_1.webp",
    videoUrl: "https://www.youtube.com/watch?v=ko-o0A6Cx7c",
    type: "video",
  },

  {
    title: "Sports Week 2026",
    thumbnail: "/sports_week_2.webp",
    videoUrl: "https://www.youtube.com/watch?v=oQpaKxrjte4",
    type: "video",
  },

  {
    title: "Qawali Night 2026",
    thumbnail: "/qawali_night_2026.webp",
    videoUrl: "https://www.youtube.com/watch?v=DFOUeIgR_0U",
    type: "video",
  },

  {
    title: "Heroes of the Mountains",
    thumbnail: "/heros_of_the_mountains.webp",
    videoUrl: "https://www.youtube.com/watch?v=30zKsP4O6vA",
    type: "video",
  },
];
```

---

# CARD DESIGN

Each media card should follow the unified website card system.

### Structure

```txt
Thumbnail Image
Video Overlay
Category Badge
Title
```

---

## Thumbnail

Use the image provided in the public folder.

Examples:

```txt
/student_week_1.webp
/sports_week_2.webp
/qawali_night_2026.webp
/heros_of_the_mountains.webp
```

Use Next Image.

Image Ratio:

```txt
16:9
```

Border Radius:

```txt
24px
```

---

## Video Overlay

Since these represent videos:

Display a centered play button overlay.

Requirements:

- Circular button
- Glassmorphism effect
- White play icon
- Slight scale animation on hover

```css
backdrop-filter: blur(12px);
background: rgba(255, 255, 255, 0.15);
```

---

## Hover Interaction

On card hover:

- Image zooms slightly
- Play button scales up
- Card elevates
- Shadow increases

Animation should be subtle and premium.

---

## Click Behavior

When clicked:

Open the corresponding YouTube video.

Options:

Preferred:

- Open in modal video player

Fallback:

- Open YouTube link in new tab

---

# CAROUSEL BEHAVIOR

The carousel should feel modern and continuous.

Requirements:

- Infinite loop
- Auto-scroll
- Pause on hover
- Drag support on desktop
- Touch swipe support on mobile
- Smooth Framer Motion animation

Do not use traditional slider arrows.

Avoid abrupt resets.

---

# RESPONSIVE BEHAVIOR

Desktop

```txt
4 cards visible
```

Laptop

```txt
3 cards visible
```

Tablet

```txt
2 cards visible
```

Mobile

```txt
1 card visible
```

---

# PUBLIC FOLDER IMAGE USAGE

For the rest of the homepage sections, use the images already provided in the public folder whenever relevant.

Examples:

- Hero Section → campus hero image/video assets
- Campus Life → student affairs related images
- Leadership Message → director image
- About COMSATS → campus overview image
- Library Section → Junaid Zaidi Library image
- Latest News → news-related images
- Events → event images
- Testimonials → student images
- Contact Section → campus/location imagery

Do not use random placeholders if a relevant image already exists in the public folder.

The implementation should intelligently map available assets from the public folder to their corresponding sections while maintaining visual consistency across the website.

---

# DESIGN OBJECTIVE

This section should immediately communicate:

- Active Student Life
- Campus Culture
- University Events
- Student Engagement
- Academic & Extracurricular Excellence

The overall feel should be similar to the media showcase sections found on premium university websites, with a polished, modern, and immersive experience rather than a traditional image gallery.
