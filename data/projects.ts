export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  github?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment integration, inventory management, and real-time analytics.",
    image: "/projects/ecommerce.jpg",
    link: "#",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Comprehensive dashboard application with data visualization, reporting, and user management.",
    image: "/projects/dashboard.jpg",
    link: "#",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
    image: "/projects/fitness.jpg",
    link: "#",
    technologies: ["React Native", "Firebase", "Redux"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with smooth animations and optimized performance.",
    image: "/projects/portfolio.jpg",
    link: "#",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"]
  }
];

