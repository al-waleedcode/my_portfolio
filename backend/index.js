const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const profileData = {
  name: 'AL-WALEED ZEAH',
  title: 'Full-Stack Web Developer',
  skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'Next.js', 'Tailwind CSS', 'C++', 'Python', 'Git'],
  projects: [
    {
      title: 'Dynamic Task Management System',
      description: 'A modern web application for managing tasks with real-time updates, built using React and Node.js.',
      github: 'https://github.com/al-waleedcode/task-management-system'
    },
    {
      title: 'Modern Personal Portfolio',
      description: 'A clean, minimalist portfolio website showcasing web development projects, created with Next.js and Tailwind CSS.',
      github: 'https://github.com/al-waleedcode/personal-portfolio'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with user authentication, payment integration, and responsive design.',
      github: 'https://github.com/al-waleedcode/ecommerce-platform'
    }
  ]
};

app.get('/api/profile', (req, res) => {
  res.status(200).json({ success: true, data: profileData });
});

app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
