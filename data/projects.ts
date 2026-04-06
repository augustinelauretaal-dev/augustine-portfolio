export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  github?: string;
  category?: string;

  // Add these
  problem?: string;
  solution?: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Neo-Brutalism Portfolio",
    description: "A portfolio website with neo-brutalism design using next.js tailwind",
    image: "/Image/project-placeholder-1.png",
    link: "https://neo-brutalism-blush.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",

    problem:
      "Needed a unique portfolio design that stands out from typical developer portfolios.",

    solution:
      "Implemented Neo-Brutalism design with bold typography, strong borders, and modern UI interactions.",

    features: [
      "Responsive Design",
      "Smooth Animations",
      "Modern UI",
      "SEO Optimized",
      "Fast Performance"
    ]
  },

  {
    id: 2,
    title: "Modern Portfolio",
    description: "A portfolio website with modern design using next.js tailwind",
    image: "/Image/project-placeholder-2.png",
    link: "https://ago27.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",

    problem:
      "Needed a clean and professional developer portfolio for showcasing projects.",

    solution:
      "Created a modern UI portfolio using Next.js and Tailwind with responsive layout.",

    features: [
      "Modern UI",
      "Responsive Layout",
      "Fast Loading",
      "Smooth Animations"
    ]
  },

  {
    id: 3,
    title: "BookIt Booking Site",
    description: "A booking website with modern design using next.js tailwind",
    image: "/Image/project-placeholder-3.png",
    link: "https://book-it-kappa-opal.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Prisma"],
    category: "Full Stack",

    problem:
      "Users needed an easy booking system for services.",

    solution:
      "Built a booking system with modern UI and backend database integration.",

    features: [
      "Booking System",
      "Database Integration",
      "Admin Panel",
      "Responsive Design"
    ]
  },

  {
    id: 4,
    title: "Government Portal",
    description: "A Government website with modern design using next.js tailwind mysql",
    image: "/Image/project-placeholder-4.png",
    link: "",
    technologies: ["Next.js", "Tailwind CSS", "MySQL"],
    category: "Full Stack",

    problem:
      "Government agencies needed a centralized portal for managing services.",

    solution:
      "Developed a full-stack portal with MySQL database and admin dashboard.",

    features: [
      "Admin Dashboard",
      "User Management",
      "Service Portal",
      "Database Integration"
    ]
  }
];