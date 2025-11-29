// Mock API to simulate Backend Requirements
const mockData = {
    projects: [
        {
            id: 1,
            title: "Student Library Manager",
            description: "A CRUD application to manage book records for a college library. Features include adding, updating, and deleting books.",
            techStack: ["Node.js", "Express", "MongoDB", "EJS"],
            imageUrl: "https://images.unsplash.com/photo-1507842217121-9e9f1929c5f7?w=800&auto=format&fit=crop&q=60",
            liveLink: "#",
            githubLink: "#",
            createdAt: new Date().toISOString()
        },
        {
            id: 2,
            title: "Weather Dashboard",
            description: "A real-time weather application that fetches data from the OpenWeatherMap API. Displays current conditions and forecast.",
            techStack: ["HTML", "CSS", "JavaScript", "REST API"],
            imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=60",
            liveLink: "#",
            githubLink: "#",
            createdAt: new Date().toISOString()
        },
        {
            id: 3,
            title: "Personal Portfolio",
            description: "My personal portfolio website designed to showcase my skills and projects. Fully responsive and SEO optimized.",
            techStack: ["HTML", "CSS", "JavaScript"],
            imageUrl: "https://images.unsplash.com/photo-1467232004581-1f1d381e6398?w=800&auto=format&fit=crop&q=60",
            liveLink: "#",
            githubLink: "#",
            createdAt: new Date().toISOString()
        }
    ],
    messages: [
        {
            id: 1,
            name: "College Professor",
            email: "prof.sharma@college.edu",
            message: "Great work on the library project, Rishi. Keep it up!",
            createdAt: new Date().toISOString()
        }
    ]
};

const mockApi = {
    projects: {
        getAll: () => new Promise(resolve => setTimeout(() => resolve(mockData.projects), 500)),
        getOne: (id) => new Promise(resolve => setTimeout(() => resolve(mockData.projects.find(p => p.id === id)), 300)),
        create: (project) => new Promise(resolve => {
            const newProject = { id: Date.now(), ...project, createdAt: new Date().toISOString() };
            mockData.projects.unshift(newProject);
            setTimeout(() => resolve(newProject), 500);
        }),
        update: (id, updates) => new Promise(resolve => {
             const index = mockData.projects.findIndex(p => p.id === id);
             if (index !== -1) {
                 mockData.projects[index] = { ...mockData.projects[index], ...updates };
                 setTimeout(() => resolve(mockData.projects[index]), 500);
             }
        }),
        delete: (id) => new Promise(resolve => {
            mockData.projects = mockData.projects.filter(p => p.id !== id);
            setTimeout(resolve, 500);
        })
    },
    messages: {
        getAll: () => new Promise(resolve => setTimeout(() => resolve(mockData.messages), 500)),
        create: (msg) => new Promise(resolve => {
            const newMessage = { id: Date.now(), ...msg, createdAt: new Date().toISOString() };
            mockData.messages.unshift(newMessage);
            setTimeout(() => resolve(newMessage), 500);
        })
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
        }),
        verify: (token) => new Promise((resolve, reject) => {
             if (token === 'mock-jwt-token-123') resolve(true);
             else reject(false);
        })
    }
};

const skills = [
    { name: "HTML5", icon: "layout" },
    { name: "CSS3", icon: "palette" },
    { name: "JavaScript", icon: "code" },
    { name: "Node.js", icon: "server" },
    { name: "Express", icon: "box" },
    { name: "MongoDB", icon: "database" },
    { name: "Git", icon: "git-branch" },
    { name: "Deployment", icon: "upload-cloud" }
];
