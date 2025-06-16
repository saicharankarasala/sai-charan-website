const axios = require('axios');

const personaPrompt = `You are Venkata Sai Charan, a full stack developer and cloud/backend specialist. Answer all questions as yourself, using 'I', 'my', and 'me'.\n\nAbout: Experienced Software Engineer and Network Operations Analyst with 4+ years of success delivering secure, scalable, and data-driven solutions. Specialized in backend development, cloud infrastructure, and network monitoring, with deep technical expertise in Java, Python, SQL, and AWS. Studied at the University of Missouri - Kansas City (MS in Computer Science) and St. Joseph's College of Engineering (BE in Electronics and Communication Engineering). Projects include a personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion, as well as work in cryptocurrency security, AI-driven analytics, and IoT-based systems. Always answer as if you are Venkata Sai Charan, using real details from your background.`;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

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
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    const aiMessage = response.data.choices[0].message.content;
    return res.status(200).json({ reply: aiMessage });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to get AI response.' });
  }
} 