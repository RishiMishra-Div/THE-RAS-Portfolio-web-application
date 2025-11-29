# Rishi - Full Stack Developer Portfolio

A professional, high-performance portfolio website built with vanilla HTML, CSS, and JavaScript. Designed to showcase development skills, projects, and services with a modern, polished aesthetic.

## 🚀 Features

- **Modern Design**: Custom "Indigo to Cyan" gradient theme with glassmorphism effects.
- **Responsive Layout**: Fully mobile-friendly with a custom hamburger menu and fluid grids.
- **Vanilla Stack**: No frontend frameworks (React/Vue/Angular) - just pure, fast DOM manipulation.
- **Admin Dashboard**: Protected area to manage projects and view contact messages.
- **Mock Backend**: Client-side simulation of a Node.js/Express API with JWT authentication.
- **Dynamic Content**: Projects and skills are rendered dynamically via JavaScript.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Variables, Flexbox, Grid), JavaScript (ES6+)
- **Icons**: Lucide Icons
- **Fonts**: Inter (Body) & Montserrat (Headings)
- **Backend (Simulated)**: Mock API handling CRUD operations and Auth

## 📂 Project Structure

```
/public
  /css
    style.css       # Global styles and variables
  /js
    main.js         # DOM manipulation and UI logic
    mock-backend.js # Simulated API and Database
  index.html        # Landing page
  projects.html     # Projects list
  admin.html        # Protected dashboard
  login.html        # Admin authentication
  404.html          # Error page
```

## 🔧 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Environment Variables**
   Copy the example environment file (for the future backend):
   ```bash
   cp .env.example .env
   ```

3. **Run Locally**
   Since this is a static site, you can open `index.html` directly in your browser or serve it with a simple server:
   ```bash
   # using python
   python3 -m http.server
   
   # using node
   npx serve .
   ```

## 🔐 Admin Access

To test the restricted Admin Dashboard:
1. Go to `/login.html`
2. Email: `admin@example.com`
3. Password: `password`

## 📝 Backend API (Planned/Simulated)

The `js/mock-backend.js` file simulates the following Node.js/Express endpoints:

- `GET /api/projects` - Fetch all projects
- `POST /api/projects` - Create new project (Protected)
- `DELETE /api/projects/:id` - Delete project (Protected)
- `GET /api/messages` - Get contact form messages (Protected)
- `POST /api/contact` - Submit new message
- `POST /api/auth/login` - Authenticate admin

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!
