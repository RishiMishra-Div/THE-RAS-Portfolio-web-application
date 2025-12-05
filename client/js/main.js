// Theme Toggle Logic
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<i data-lucide="sun"></i>';
themeToggle.setAttribute('aria-label', 'Toggle Theme');

// Add to navbar
const navbar = document.querySelector('.nav-container');
if (navbar) {
    // Insert before hamburger or at the end
    const hamburger = document.querySelector('.hamburger');
    if(hamburger) {
        navbar.insertBefore(themeToggle, hamburger);
    } else {
        navbar.appendChild(themeToggle);
    }
}

// Check saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    lucide.createIcons();
});

function updateThemeIcon(theme) {
    themeToggle.innerHTML = theme === 'dark' ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
}

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
            <span class="font-medium text-muted">${skill.name}</span>
        </div>
    `).join('');
}

// <----------------------------------------- Dynamic Projects Rendering ------------------------------------------>

async function loadProjects(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const res = await fetch(`${API_URL}/api/projects`);
        let projects = await res.json();
        
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
                        <a href="/projectDetail.html?id=${project._id}" class="btn btn-primary btn-card"><i data-lucide="external-link"></i> Demo</a>
                        <a href="${project.githubLink}" class="btn btn-outline btn-card"><i data-lucide="github"></i> Code</a>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Re-initialize icons for newly added content
        lucide.createIcons();
    } catch (error) {
        container.innerHTML = '<div class="error">Failed to load projects</div>';
        console.error("Error loading projects:", error);
    }
}

// Initialize Home Page Projects
const featuredProjects = document.getElementById('featured-projects');
if (featuredProjects) {
    loadProjects('featured-projects', 3);
}



// <--------------------------------------------------Contact Form Submission--------------------------------------- --------->

const form = document.getElementById("contact-form");
const successBox = document.getElementById("contact-success");
const errorBox = document.getElementById("contact-error");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const originalBtnText = btn.innerHTML;

    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    // ---- UI: Show sending state ----
    btn.disabled = true;
    btn.classList.add("loading");
    btn.innerHTML = `<span class="spinner"></span> Sending...`;

    // Hide previous alerts
    successBox.classList.add("hidden");
    errorBox.classList.add("hidden");

    try {
        const res = await fetch(`${API_URL}/api/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        if (res.ok) {
            // Show success message
            successBox.textContent = "Message sent successfully! we will reach out sortly";
            successBox.classList.remove("hidden");

            // Clear form with small delay for natural flow
            setTimeout(() => form.reset(), 500);
            // Auto fade-out
            setTimeout(() => {
                successBox.style.opacity = "0";
                setTimeout(() => {
                    successBox.classList.add("hidden");
                    successBox.style.opacity = "1"; // reset for next time
                }, 300);
            }, 5000);


        } else {
            errorBox.textContent = data.message || "Something went wrong. Try again.";
            errorBox.classList.remove("hidden");
        }

    } catch (err) {
        errorBox.textContent = "⚠ Unexpected error. Please try later.";
        errorBox.classList.remove("hidden");

    } finally {
        // ---- Reset button ----
        setTimeout(() => {
            btn.disabled = false;
            btn.classList.remove("loading");
            btn.innerHTML = originalBtnText;
            lucide.createIcons(); // refresh icons if button has one
        }, 1200);
    }
});



// Admin Link Handling (Deployed Version)

  document.getElementById("adminLink").addEventListener("click", async () => {

    document.getElementById("adminLink").innerText = "Checking...";

    try {
      const res = await fetch(`${API_URL}/api/admin/isAdmin`, {
        credentials: "include"
      });

      const data = await res.json();

      if (data.success) {
        // User is verified -> Go to protected admin panel
        window.location.href = `${API_URL}/getadmin`;
      } else {
        // Not logged in -> Go to login page stored in client folder
        window.location.href = "/login.html";
      }

    } catch (err) {
      console.error(err);
      window.location.href = "/login.html"; // fallback
    }
  });
        