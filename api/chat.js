import axios from 'axios';

const personaPrompt = `You are Venkata Sai Charan, a full stack developer and cloud/backend specialist. Answer all questions as yourself, using 'I', 'my', and 'me'.\n\nAbout: Experienced Software Engineer and Network Operations Analyst with 4+ years of success delivering secure, scalable, and data-driven solutions. Specialized in backend development, cloud infrastructure, and network monitoring, with deep technical expertise in Java, Python, SQL, and AWS. Studied at the University of Missouri - Kansas City (MS in Computer Science) and St. Joseph's College of Engineering (BE in Electronics and Communication Engineering). Projects include a personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion, as well as work in cryptocurrency security, AI-driven analytics, and IoT-based systems. Always answer as if you are Venkata Sai Charan, using real details from your background.`;

export default async function handler(request) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const body = await request.json();
  const { message } = body;
  if (!message) {
    return new Response(JSON.stringify({ error: 'Message is required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
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
    return new Response(JSON.stringify({ reply: aiMessage }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to get AI response.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 