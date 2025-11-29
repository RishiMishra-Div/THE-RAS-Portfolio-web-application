// Mock API to simulate Backend Requirements
const mockData = {
    projects: [
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
        }
    ],
    messages: [
        {
            id: 1,
            name: "Recruiter",
            email: "recruiter@tech.com",
            message: "Hi Rishi, I saw your portfolio and would love to chat.",
            createdAt: new Date().toISOString()
        }
    ]
};

const mockApi = {
    projects: {
        getAll: () => new Promise(resolve => setTimeout(() => resolve(mockData.projects), 500)),
        getOne: (id) => new Promise(resolve => setTimeout(() => resolve(mockData.projects.find(p => p.id === id)), 300)),
        delete: (id) => new Promise(resolve => {
            mockData.projects = mockData.projects.filter(p => p.id !== id);
            setTimeout(resolve, 500);
        })
    },
    messages: {
        getAll: () => new Promise(resolve => setTimeout(() => resolve(mockData.messages), 500))
    },
    auth: {
        login: (creds) => new Promise((resolve, reject) => {
            setTimeout(() => {
                if(creds.email === 'admin@example.com' && creds.password === 'password') {
                    resolve({ token: 'mock-jwt-token-123' });
                } else {
                    reject({ message: 'Invalid email or password' });
                }
            }, 800);
        })
    }
};

const skills = [
    { name: "JavaScript", icon: "code" },
    { name: "Node.js", icon: "server" },
    { name: "MongoDB", icon: "database" },
    { name: "HTML5", icon: "layout" },
    { name: "CSS3", icon: "palette" },
    { name: "Git", icon: "terminal" },
];
