const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const profileData = {
  name: 'Cipher Dev',
  bio: 'Security-first full-stack engineer with a hacker-chic aesthetic, building resilient applications and developer tooling for modern organizations.',
  skills: ['C++', 'JavaScript', 'Python', 'Next.js'],
  projects: [
    {
      title: 'Sentinel SIEM Dashboard',
      description: 'Hardened observability platform delivering threat analytics, anomaly detection, and secure SOC workflows.',
      github: 'https://github.com/yourusername/sentinel-siem'
    },
    {
      title: 'Protocol Hardened API',
      description: 'Secure API gateway with JWT attestation, rate limiting, and encrypted routing for critical services.',
      github: 'https://github.com/yourusername/protocol-hardened-api'
    },
    {
      title: 'Red Team Toolkit',
      description: 'Modular penetration orchestration suite for automation, reporting, and vulnerability triage.',
      github: 'https://github.com/yourusername/red-team-toolkit'
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
