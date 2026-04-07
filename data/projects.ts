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
    title: "Neo-Store E-commerce",
    description: "A modern Neo-Brutalism E-commerce platform featuring bold UI, product collections, cart functionality, and responsive design built with Next.js and Tailwind CSS.",
    image: "/Image/project-placeholder-5.png",
    link: "https://e-com-hazel-sigma.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "MySQL"],
    category: "E-commerce",

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