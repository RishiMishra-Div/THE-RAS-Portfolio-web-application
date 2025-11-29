// Main DOM Logic for Vanilla JS Implementation

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
}

// Dynamic Skills Rendering (Home Page)
const skillsGrid = document.querySelector('.skills-grid');
if (skillsGrid && typeof skills !== 'undefined') {
    skillsGrid.innerHTML = skills.map(skill => `
        <div class="glass-card skill-card">
            <i data-lucide="${skill.icon}" class="skill-icon"></i>
            <span class="font-medium text-gray-300">${skill.name}</span>
        </div>
    `).join('');
}

// Dynamic Projects Rendering
async function loadProjects(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        let projects = await mockApi.projects.getAll();
        if (limit) {
            projects = projects.slice(0, limit);
        }

        container.innerHTML = projects.map(project => `
            <div class="glass-card project-card">
                <div class="project-img">
                    <img src="${project.imageUrl}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <div class="tech-stack">
                        ${project.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    </div>
                    <p>${project.description}</p>
                    <div class="project-footer">
                        <a href="${project.liveLink}" class="btn btn-primary btn-card"><i data-lucide="external-link"></i> Demo</a>
                        <a href="${project.githubLink}" class="btn btn-outline btn-card"><i data-lucide="github"></i> Code</a>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Re-initialize icons for newly added content
        lucide.createIcons();
    } catch (error) {
        container.innerHTML = '<div class="error">Failed to load projects</div>';
    }
}

// Initialize Home Page Projects
const featuredProjects = document.getElementById('featured-projects');
if (featuredProjects) {
    loadProjects('featured-projects', 3);
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        
        btn.disabled = true;
        btn.innerHTML = 'Sending...';

        // Simulate API call
        setTimeout(() => {
            alert('Message sent successfully! (Mock)');
            contactForm.reset();
            btn.disabled = false;
            btn.innerHTML = originalText;
            lucide.createIcons(); // re-init icon in button
        }, 1500);
    });
}
