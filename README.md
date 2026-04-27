# Walid's Cyber Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

A cutting-edge, full-stack personal portfolio website showcasing modern web development with a cybersecurity-inspired aesthetic. Built for high performance, security-focused design, and seamless user experience.

## 🚀 Key Features

- **Ultra-Modern UI**: Responsive design featuring Glassmorphism effects, Bento Box layouts, and subtle neon accents for a hacker-chic vibe.
- **Dynamic Data Integration**: Fetches profile data dynamically from a custom Node.js API, ensuring real-time updates and modularity.
- **Performance Optimized**: Engineered for 100/100 Lighthouse scores with optimized images, semantic HTML, and efficient rendering.
- **Security-First Aesthetic**: Dark mode by default with deep slate gradients, cyan/emerald glows, and a technical, cybersecurity-themed design.
- **Interactive Elements**: Dynamic typing effects, hover animations, and terminal-inspired contact forms for an engaging user experience.

## 🛠 Tech Stack

### Frontend

- **Next.js (App Router)**: Server-side rendering and routing for optimal performance.
- **Tailwind CSS**: Utility-first CSS framework for rapid, responsive styling with custom animations and glassmorphism effects.

### Backend

- **Node.js**: Runtime environment for scalable server-side logic.
- **Express.js**: Lightweight web framework for building RESTful APIs with CORS and JSON middleware.

## 📁 Project Structure

```
Walid's Cyber Portfolio/
├── backend/                 # Node.js Express API server
│   ├── index.js            # Main server file with profile API endpoint
│   └── package.json        # Backend dependencies and scripts
├── frontend/                # Next.js application
│   ├── app/                # App Router pages and components
│   │   ├── globals.css     # Global styles and Tailwind utilities
│   │   ├── layout.jsx      # Root layout with metadata
│   │   └── page.jsx        # Main portfolio page with sections
│   ├── package.json        # Frontend dependencies and scripts
│   ├── tailwind.config.js  # Tailwind configuration with custom colors and animations
│   └── postcss.config.js   # PostCSS setup for Tailwind
└── README.md               # Project documentation
```

- **frontend/**: Contains the Next.js application with pages, styles, and configuration. The `app/` directory uses the App Router for routing and includes the main portfolio page with hero, bento grid, projects, and contact sections.
- **backend/**: Houses the Express server providing a REST API endpoint (`/api/profile`) that serves profile data, skills, and projects in JSON format.

## 🏃‍♂️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The API will be available at `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The portfolio will be accessible at `http://localhost:3000`.

### Full Project Run

To run both frontend and backend simultaneously:

1. Start the backend in one terminal as described above.
2. Start the frontend in another terminal as described above.
3. Visit `http://localhost:3000` to view the portfolio.

## 📖 Usage

- **Hero Section**: Introduces the portfolio with a dynamic typing effect and call-to-action buttons.
- **Bento Grid**: Displays skills and about information in a modern, card-based layout.
- **Projects Showcase**: Highlights key projects with tech stacks and links.
- **Contact Form**: Terminal-styled form for inquiries, with form handling for submissions.

The site is fully responsive and optimized for desktop and mobile devices.

## 👨‍💻 Author

**Walid**  
Information Security and Web Development Student  
Passionate about building secure, high-performance web applications with a focus on cybersecurity and modern UI/UX design.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

_Built with precision, security, and style._
