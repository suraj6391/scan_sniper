const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files (HTML, CSS, JS) from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.post('/scan', (req, res) => {
  const { url } = req.body;

  // TODO: Add real scanning logic here
  // This is a mock response
  if (!url || !url.startsWith('http')) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  res.json({
    url,
    safe: true,
    message: 'This is a placeholder scan result. Implement real logic here.'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
