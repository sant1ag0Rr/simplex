const axios = require('axios');

const chat = async (req, res) => {
  const { message } = req.body;

  try {
    // Integración con OpenAI (ejemplo)
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('Error en el chat:', error);
    res.status(500).json({ message: 'Error al procesar la solicitud' });
  }
};

module.exports = { chat };