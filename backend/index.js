const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS مقيّد — يقبل فقط من موقعك
const allowedOrigins = [
  'https://my-portfolio-ten-xi-14.vercel.app',
  'https://waleedzaih.dev',
  'http://localhost:3000',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

app.use(express.json());

// ── البيانات — متزامنة مع page.jsx ──
const profileData = {
  name: 'AL-WALEED ZAIH',
  title: 'Full-Stack Web Developer',
  age: 20,
  location: "Sana'a, Yemen",
  github: 'https://github.com/al-waleedcode',
  skills: [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML', level: 'Proficient' },
        { name: 'CSS', level: 'Proficient' },
        { name: 'JavaScript', level: 'Proficient' },
        { name: 'Tailwind CSS', level: 'Proficient' },
        { name: 'Next.js', level: 'Intermediate' },
        { name: 'React', level: 'Intermediate' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 'Proficient' },
        { name: 'Express', level: 'Proficient' },
      ],
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', level: 'Proficient' },
        { name: 'GitHub', level: 'Proficient' },
      ],
    },
  ],
  projects: [
    {
      id: '01',
      title: 'Dynamic Task Management System',
      description:
        'A full-stack task manager with a Node.js/Express backend and vanilla JS frontend. Features: add, edit, delete, and filter tasks — with data saved to a real database.',
      github: 'https://github.com/al-waleedcode/Task-Management-System',
      liveDemo: null,
      image: '/task-manager.webp',
      stack: ['JavaScript', 'Node.js', 'Express', 'CSS'],
    },
    {
      id: '02',
      title: 'Minimalist Personal Portfolio',
      description:
        'Built with Next.js & Tailwind CSS — achieved 100/100 Lighthouse Score using Static Site Generation.',
      github: 'https://github.com/al-waleedcode/my-portfolio',
      liveDemo: 'https://my-portfolio-ten-xi-14.vercel.app',
      image: '/portfolio.webp',
      stack: ['Next.js', 'Tailwind CSS', 'React'],
    },
    {
      id: '03',
      title: 'Modern Landing Page',
      description:
        'A high-conversion landing page for small businesses. Mobile-first responsive design with clean, maintainable code architecture.',
      github: 'https://github.com/al-waleedcode/Landing-Page',
      liveDemo: null,
      image: '/landing-page.webp',
      stack: ['HTML5', 'CSS3', 'JavaScript ES6+'],
    },
  ],
};

// ── Routes ──
app.get('/', (req, res) => {
  res.json({ status: 'online', message: 'AL-WALEED ZAIH Portfolio API' });
});

app.get('/api/profile', (req, res) => {
  res.status(200).json({ success: true, data: profileData });
});

// 404
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
