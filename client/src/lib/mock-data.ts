export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveLink: string;
  githubLink: string;
  createdAt: string;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

// Mock Data to simulate Backend
export const mockProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers featuring real-time sales tracking and inventory management.",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    liveLink: "#",
    githubLink: "#",
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Social Media App",
    description: "Full-stack social platform with real-time messaging, post sharing, and user authentication.",
    techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60",
    liveLink: "#",
    githubLink: "#",
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "Portfolio v1",
    description: "My first portfolio website built with vanilla HTML, CSS, and JavaScript.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
    liveLink: "#",
    githubLink: "#",
    createdAt: new Date().toISOString()
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Kanban-style task manager for remote teams with drag-and-drop functionality.",
    techStack: ["React", "Redux", "Express", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60",
    liveLink: "#",
    githubLink: "#",
    createdAt: new Date().toISOString()
  }
];

export const mockMessages: Message[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message: "Hi, I'd like to discuss a potential project with you. Are you available?",
    createdAt: new Date(Date.now() - 86400000).toISOString() // 1 day ago
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@techcorp.com",
    message: "Love your portfolio! We are looking for a frontend developer.",
    createdAt: new Date(Date.now() - 172800000).toISOString() // 2 days ago
  }
];

export const mockSkills = [
  { name: "JavaScript", icon: "SiJavascript" },
  { name: "React", icon: "SiReact" },
  { name: "Node.js", icon: "SiNodedotjs" },
  { name: "MongoDB", icon: "SiMongodb" },
  { name: "HTML5", icon: "SiHtml5" },
  { name: "CSS3", icon: "SiCss3" },
  { name: "Git", icon: "SiGit" },
  { name: "TypeScript", icon: "SiTypescript" }
];

export const services = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and secure websites using modern technologies.",
    icon: "Code"
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces.",
    icon: "Palette"
  },
  {
    title: "Backend Systems",
    description: "Developing robust server-side logic and database architectures.",
    icon: "Server"
  }
];
