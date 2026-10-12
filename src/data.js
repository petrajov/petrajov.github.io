// Edit this file to update the content of your portfolio.

export const profile = {
  name: "Petra Jović",
  location: "Belgrade, Serbia",
  status: "Open to new roles",
  badge: ["5+ years", "React & TS"],
  intro:
    "Senior frontend engineer with a product mindset. I build fast, scalable web platforms across iGaming, EdTech and SaaS, and care as much about why a feature exists as how it's built.",
  email: "petrajov99@gmail.com",
  linkedin: "https://linkedin.com/in/petra-jovic/",
};

export const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Zustand",
  "Redux",
  "WebSockets",
  "GraphQL",
  "Performance",
  "Vite",
  "Jest",
  "CI/CD",
  "Docker",
];

// Content of the About page (#/about).
export const about = {
  // Drop a photo in public/ (e.g. "photo.jpg") and set it here. Empty shows your initials.
  photo: "photo.jpg",
  // Drop your CV in public/ (e.g. "cv.pdf") and set it here. Empty hides the download button.
  cv: "petra-jovic-cv.pdf",
  paragraphs: [
    "I'm a senior frontend engineer with 5+ years of React and TypeScript, from customer retention and live betting platforms to a learning system used by millions.",
    "I work with a product mindset. In fast-moving teams I've owned features end to end, from the problem to the release and beyond. I'm comfortable making decisions, I like to research before I build, and I always keep the bigger picture in view: code is only part of the job.",
  ],
  principles: [
    {
      n: "01",
      title: "Product before code",
      text: "I start with the problem and the people it affects, then shape the solution with product, design and backend. Code is how the idea ships, not the idea itself.",
    },
    {
      n: "02",
      title: "Own it end to end",
      text: "From discovery and research to decisions, delivery and follow-up. I'm comfortable making the call and standing behind it.",
    },
    {
      n: "03",
      title: "Built to grow",
      text: "Reusable components, consistent patterns and performance budgets, so the frontend stays fast and easy to extend as the product scales.",
    },
    {
      n: "04",
      title: "Teach as I go",
      text: "Hands-on mentoring and thoughtful code reviews raise code quality and the whole team's delivery speed.",
    },
  ],
  toolkit: [
    {
      title: "Core",
      items: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Next.js",
        "Preact",
      ],
    },
    {
      title: "State & data",
      items: ["Zustand", "Redux", "RESTful APIs", "GraphQL", "WebSockets"],
    },
    {
      title: "Tooling & quality",
      items: [
        "Webpack",
        "Vite",
        "Jest",
        "React Testing Library",
        "ESLint",
        "Husky",
      ],
    },
    {
      title: "Delivery",
      items: ["GitHub Actions", "GitLab CI", "CI/CD", "Docker", "Firebase"],
    },
  ],
  education: {
    degree: "BA, Electrical and Computer Engineering",
    school:
      "School of Electrical and Computer Engineering of Applied Studies, Belgrade",
    years: "2018 — 2021",
  },
  languages: [
    { name: "Serbian", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "Conversational" },
    { name: "Italian", level: "Beginner" },
  ],
};

// Each project gets a case study page at #/work/<slug>.
// `blurb` is shown on the home page card, `intro` under the title on the project page,
// `tagline` on the "next project" card. `overview` is a string or a list of paragraphs.
// `gallery` is optional and only shown when present.
export const projects = [
  {
    n: "01",
    slug: "stopchurn",
    title: "StopChurn",
    img: "illustrations/stopchurn.svg",
    alt: "Illustration: a grid of reusable UI components beside color and spacing tokens",
    blurb:
      "A customer retention platform that automates post-purchase engagement. Frontend architecture and a reusable component library in React and TypeScript.",
    intro:
      "Frontend architecture and a reusable component library for a platform that helps online businesses turn one-time buyers into repeat customers.",
    tagline: "Frontend architecture and a reusable component library.",
    meta: {
      role: "Lead Front-End Engineer",
      company: "167Pluto",
      domain: "SaaS",
    },
    overview: [
      "StopChurn is a customer retention platform for online businesses in SaaS, ecommerce, education and services. It plugs into a company's existing system, segments customers by real behavior, and runs automated journeys across email, SMS and on-site offers to re-engage, upsell or win back customers, with analytics showing which campaigns bring people back.",
      "I engineered its frontend architecture with React, TypeScript and Zustand, and delivered the reusable component library that keeps its user-facing and backoffice screens consistent. I owned features from discovery to delivery and contributed to roadmap, scope and implementation decisions.",
    ],
    built: [
      {
        title: "Frontend architecture",
        text: "Structured with React, TypeScript and Zustand so features stay consistent as the platform grows.",
      },
      {
        title: "Reusable component library",
        text: "Shared building blocks, so new screens do not start from scratch.",
      },
      {
        title: "Consistent UI patterns",
        text: "One set of patterns applied across the user-facing app and the backoffice.",
      },
      {
        title: "Campaign control",
        text: "Where cross-channel campaigns and on-site promotions are set up, connected to the embeddable popup script.",
      },
      {
        title: "Mentoring and workflows",
        text: "Mentored junior developers and improved code-review workflows, raising code quality and delivery speed.",
      },
    ],
    gallery: [
      {
        img: "illustrations/architecture.svg",
        alt: "Illustration: UI components, a state store and API services connected in layers",
      },
      {
        img: "illustrations/campaigns.svg",
        alt: "Illustration: a campaign control panel with toggles connected to a popup on a website",
      },
    ],
    approach:
      "The frontend is organized around a reusable component library and one consistent set of UI patterns, with Zustand managing state. I partnered with stakeholders, design and backend to turn product requirements into components the whole team can reuse.",
    outcome:
      "Admins can segment customers by behavior and build automated journeys without technical help: complex retention logic turned into interfaces that feel simple. As the product expands quickly, the architecture and component library let new features ship fast while the platform stays consistent and stable.",
    stack: ["React", "TypeScript", "Zustand", "Component library"],
  },
  {
    n: "02",
    slug: "promo-popup",
    title: "Promo popup script",
    img: "illustrations/popup.svg",
    alt: "Illustration: a promo popup appearing over a website, triggered by an embedded script",
    blurb:
      "A lightweight, platform-agnostic Preact script that embeds on any website to show targeted promotions, controlled from StopChurn.",
    intro:
      "A lightweight, platform-agnostic Preact script that embeds on any website to show targeted promotions.",
    tagline: "A lightweight Preact script that embeds on any website.",
    meta: {
      role: "Front-End Engineer",
      company: "167Pluto",
      domain: "SaaS",
    },
    overview:
      "A small script that clients add to their website to show targeted promotions. Integration is quick, which matters to clients: one snippet, no changes to their own stack. Everything else is configured from the StopChurn backoffice, and popups can be triggered from user journeys, right after a customer finishes a step, or at predefined events.",
    built: [
      {
        title: "Easy integration",
        text: "A single embed that works on any website or platform, so clients are live without touching their own code base.",
      },
      {
        title: "Lightweight and fast",
        text: "Built with Preact and kept small, so it loads quickly and stays light on the host site.",
      },
      {
        title: "Fully configurable",
        text: "Layout, content, duration and appearance are all set in the backoffice, with no code changes needed.",
      },
      {
        title: "Journey and event triggers",
        text: "Popups fire from StopChurn user journeys after a customer completes a step, or at predefined events.",
      },
    ],
    gallery: [
      {
        img: "illustrations/embed.svg",
        alt: "Illustration: one embedded script showing popups on three different websites",
      },
      {
        img: "illustrations/campaigns.svg",
        alt: "Illustration: a campaign control panel with toggles connected to a popup on a website",
      },
    ],
    approach:
      "The script had to be easy for clients to add and invisible in terms of cost, so it is built with Preact, kept lightweight and has no dependency on the host site's platform. All decisions about what to show, how it looks and when it appears live in the StopChurn backoffice, and the script simply renders what it is told, so a new promotion never needs a new release.",
    outcome:
      "Clients add it once with a single snippet and never have to touch it again. Marketing teams design and launch popups themselves, choosing layout, content, duration and appearance in the backoffice, and promotions reach customers at the right moment because they are triggered by their journey or by predefined events.",
    stack: ["Preact", "Embeddable script", "Campaign integration"],
  },
  {
    n: "03",
    slug: "live-betting-platform",
    title: "Live funded betting platform",
    img: "illustrations/realtime.svg",
    alt: "Illustration: a live line chart and a feed of odds updates fed by a real-time connection",
    blurb:
      "Sportsbook live feed interfaces and a backoffice where administrators manage bets, users, reporting and risk.",
    intro:
      "Sportsbook live feed interfaces that stay smooth under high-frequency updates, and the backoffice that runs the platform.",
    tagline: "Live sportsbook feeds kept smooth at high update rates.",
    meta: {
      role: "Front-End Engineer",
      company: "167Pluto",
      domain: "iGaming",
    },
    overview:
      "A funded betting platform with live sportsbook feeds, where data arrives at high frequency over WebSockets. I developed the live feed interfaces and the backoffice administrators use to manage bets, users, reporting, risk and operational workflows, and optimized real-time performance so updates stay smooth across devices.",
    built: [
      {
        title: "Live feed interfaces",
        text: "Complex sportsbook screens built for high-frequency data updates.",
      },
      {
        title: "Memoization",
        text: "Stable components skip re-rendering when their data has not changed.",
      },
      {
        title: "Narrow subscriptions",
        text: "Each component subscribes only to the data it displays.",
      },
      {
        title: "Sports and competition filters",
        text: "Many filters by sport, competition and more, so players reach the events they want in a few taps.",
      },
      {
        title: "Fiat and crypto payments",
        text: "Payment provider integrations for both traditional currencies and crypto.",
      },
      {
        title: "Backoffice",
        text: "Tools for administrators to manage bets, users, reporting, risk and operations.",
      },
    ],
    gallery: [
      {
        img: "illustrations/rendering.svg",
        alt: "Illustration: a screen where every cell re-renders compared with one where only three changed cells update",
      },
      {
        img: "illustrations/backoffice.svg",
        alt: "Illustration: an admin backoffice with a data table and settings toggles",
      },
    ],
    approach:
      "With high-frequency updates, every unnecessary render costs. Memoization keeps unchanged components from re-rendering, and narrow subscriptions mean each component listens only to the data it shows.",
    outcome:
      "Players get a fast sportsbook feed that stays smooth under high-frequency live data, and filters by sport, competition and more make any event easy to find. Players can pay with both fiat and crypto through the integrated payment providers, and administrators run bets, users, reporting and risk from one backoffice.",
    stack: [
      "React",
      "TypeScript",
      "WebSockets",
      "Memoization",
      "Narrow subscriptions",
    ],
  },
  {
    n: "04",
    slug: "white-label-casino",
    title: "White-label casino platform",
    img: "illustrations/platform.svg",
    alt: "Illustration: three app windows in different client themes, with payment, reward and settings icons",
    blurb:
      "An online casino platform and customizable backoffice, with extensive white-label configuration for different clients.",
    intro:
      "A configurable online casino platform with a backoffice, built from scratch and deployed for multiple clients.",
    tagline:
      "A white-label platform with a backoffice, deployed for multiple clients.",
    meta: {
      role: "Lead Front-End Engineer",
      company: "167Pluto",
      domain: "iGaming",
    },
    overview:
      "I led the development of a white-label online casino platform and its customizable backoffice, built from scratch. One codebase serves multiple clients, each with its own configuration, and I also built the landing and campaign websites around it. I acted as the bridge between product vision and frontend execution.",
    built: [
      {
        title: "Multi-client configuration",
        text: "One codebase, deployed for multiple clients with their own settings.",
      },
      {
        title: "Payment provider integrations",
        text: "Payment flows wired to external providers.",
      },
      {
        title: "Game integrations",
        text: "Casino games integrated into the platform.",
      },
      {
        title: "Bonus and reward systems",
        text: "Front-end for bonuses and rewards, built from scratch.",
      },
      {
        title: "Backoffice",
        text: "A customizable internal tool for operating the platform.",
      },
      {
        title: "Landing and campaign websites",
        text: "Marketing sites for each client's launches and promotions, built alongside the platform.",
      },
      {
        title: "Fully responsive UI",
        text: "Consistent behavior from phones to desktop.",
      },
    ],
    gallery: [
      {
        img: "illustrations/backoffice.svg",
        alt: "Illustration: an admin backoffice with a data table and settings toggles",
      },
      {
        img: "illustrations/responsive.svg",
        alt: "Illustration: the same layout on desktop, tablet and phone",
      },
    ],
    approach:
      "The platform is one configurable codebase rather than a separate build per client. Client settings drive the casino, its backoffice and the landing and campaign websites, so each deployment is set up through configuration. Shared, reusable components keep every client's interface responsive and consistent.",
    outcome:
      "The same platform is deployed for multiple clients, each with its own configuration, payment providers and campaign websites, built and maintained by one team.",
    stack: [
      "React",
      "TypeScript",
      "Zustand",
      "REST APIs",
      "GraphQL",
      "Vite",
      "GitHub Actions",
      "Jest",
    ],
  },
  {
    n: "05",
    slug: "blackboard-lms",
    title: "Blackboard LMS",
    img: "illustrations/lms.svg",
    alt: "Illustration: a course page with modules and a progress bar, split into separate microfrontend panels",
    blurb:
      "Features for Blackboard, the learning management system used by around 32 million people every month, built with a USA-based agile team.",
    intro:
      "Features for Blackboard, a learning management system used by around 32 million students, instructors and administrators every month.",
    tagline: "Accessible, fast features for a large-scale LMS.",
    meta: {
      role: "Front-End Engineer",
      company: "IT Labs",
      domain: "EdTech",
    },
    overview:
      "Blackboard is one of the most widely used learning management systems in the world: around 32 million students, instructors and administrators use it every month, across more than 8,000 organizations and institutions. As part of an agile, USA-based team, I contributed features in its microfrontend architecture, with a focus on accessibility and performance.",
    built: [
      {
        title: "Angular to React",
        text: "Reworked legacy drag-and-drop features in React, keeping the experience consistent for users.",
      },
      {
        title: "Accessibility",
        text: "Semantic HTML and CSS, keyboard navigation and screen-reader support.",
      },
      {
        title: "Performance budgets",
        text: "Features built to stay within strict performance budgets.",
      },
      {
        title: "Distributed agile team",
        text: "Agile planning and code reviews with the Product Owner and teammates across the USA.",
      },
    ],
    approach:
      "I worked inside an existing microfrontend architecture with a distributed team. Legacy drag-and-drop features were reworked from Angular to React without changing how they behaved for users, with semantic HTML, keyboard navigation and screen-reader support built in, and every change held to strict performance budgets.",
    outcome:
      "Modernized features in React that stayed consistent for millions of existing users, accessible to keyboard and screen-reader users, and within the platform's performance budgets. At this scale, even a small change reaches students and teachers in thousands of institutions, so reliability and accessibility were never optional.",
    stack: [
      "React",
      "Angular",
      "Microfrontends",
      "Accessibility",
      "Performance",
    ],
  },
  {
    n: "06",
    slug: "lucky6",
    title: "Lucky6 casino game",
    img: "illustrations/lucky6.svg",
    alt: "Illustration: a board of numbered lottery balls with six drawn balls rolling into a tray",
    blurb:
      "The frontend of Lucky6, an animation-heavy casino number game, alongside web interfaces for casino and sportsbook platforms.",
    intro:
      "The frontend of Lucky6, a casino number game, focused on animation and usability.",
    tagline: "An animation-heavy casino game frontend.",
    meta: {
      role: "Front-End Engineer",
      company: "Neotech Solutions",
      domain: "iGaming",
    },
    overview:
      "At Neotech Solutions I engineered the frontend of Lucky6, a casino number game, focusing on animation, usability and client-driven features. Alongside it I developed responsive web interfaces for online casino and sportsbook platforms and their backoffice systems.",
    built: [
      {
        title: "Game frontend",
        text: "The Lucky6 game UI, with client-driven features.",
      },
      {
        title: "Complex animations",
        text: "Draw sequences and game-state transitions that carry the gameplay while staying easy to follow.",
      },
      {
        title: "Performance optimization",
        text: "Animations tuned to stay smooth across browsers and devices, without blocking the rest of the UI.",
      },
      {
        title: "Responsive interfaces",
        text: "Cross-browser web interfaces for casino and sportsbook platforms.",
      },
    ],
    approach:
      "In a game like Lucky6 the animation is the experience, so it has to look rich without costing frames. I built the draw and game-state animations with performance in mind from the start and tested them across browsers and devices, while delivering the features the client asked for. The project ran in Docker, so the setup was the same on every machine.",
    outcome:
      "A game frontend with complex animations that stay smooth and fast across browsers and devices, so the gameplay feels fluid on any screen.",
    stack: ["Game UI", "Animation", "Performance", "Docker"],
  },
];

export const experience = [
  {
    when: "06/2023 — Now",
    where: "167Pluto · Remote",
    role: "Front-End Engineer",
    text: "Lead front-end developer on StopChurn, a customer retention platform, and its embeddable Preact promo popup script. Also built a live funded betting platform and a white-label online casino, each with its own backoffice. Mentors junior developers and acts as the bridge between product vision and frontend execution.",
  },
  {
    when: "05/2022 — 06/2023",
    where: "IT Labs · Remote",
    role: "Front-End Engineer",
    text: "Developed Blackboard LMS, a large-scale learning management system, with a USA-based agile team. Built features in a microfrontend architecture with a focus on accessibility and performance.",
  },
  {
    when: "07/2021 — 05/2022",
    where: "Neotech Solutions · Belgrade",
    role: "Front-End Engineer",
    text: "Web interfaces for online casino and sportsbook platforms and their backoffice systems. Built the frontend of the Lucky6 casino game.",
  },
  {
    when: "10/2020 — 06/2021",
    where: "School of Electrical & Computer Engineering · Belgrade",
    role: "Laboratory Demonstrator",
    text: "Taught and mentored students in Engineering Mathematics and Object-Oriented Programming.",
  },
];
