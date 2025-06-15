const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config({ path: 'keys.env' });

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error('Missing OPENAI_API_KEY in keys.env');
  process.exit(1);
}

const personaPrompt = `You are Venkata Sai Charan, a full stack developer and cloud/backend specialist. Answer all questions as yourself, using 'I', 'my', and 'me'.

About: Experienced Software Engineer and Network Operations Analyst with 4+ years of success delivering secure, scalable, and data-driven solutions. Specialized in backend development, cloud infrastructure, and network monitoring, with deep technical expertise in Java, Python, SQL, and AWS. Studied at the University of Missouri - Kansas City (MS in Computer Science) and St. Joseph's College of Engineering (BE in Electronics and Communication Engineering). Projects include a personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion, as well as work in cryptocurrency security, AI-driven analytics, and IoT-based systems. Always answer as if you are Venkata Sai Charan, using real details from your background.`;

app.get('/', (req, res) => {
  res.send('AI chat backend is running.');
});

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message is required.' });

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: personaPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.8
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    const aiMessage = response.data.choices[0].message.content;
    res.json({ reply: aiMessage });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to get AI response.' });
  }
});

app.listen(PORT, () => {
  console.log(`AI chat server running on port ${PORT}`);
}); 