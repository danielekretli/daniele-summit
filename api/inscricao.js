export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  const { nome, email, telefone, cargo, empresa, fonte } = req.body;

  if (!nome || !email || !telefone || !cargo || !fonte) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando' });
  }

  const fonteMap = {
    instagram: 'Instagram',
    email:     'E-mail',
    indicacao: 'Indicação',
    linkedin:  'LinkedIn',
    whatsapp:  'WhatsApp',
    outro:     'Outro',
  };

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: { database_id: process.env.NOTION_DATABASE_ID },
        properties: {
          'Nome':       { title:        [{ text: { content: nome } }] },
          'Email':      { email:        email },
          'Telefone':   { phone_number: telefone },
          'Cargo':      { rich_text:    [{ text: { content: cargo } }] },
          'Empresa':    { rich_text:    [{ text: { content: empresa || '' } }] },
          'Como soube': { select:       { name: fonteMap[fonte] || 'Outro' } },
        },
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error('Notion error:', err);
      return res.status(500).json({ error: 'Erro ao salvar no Notion' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Erro interno' });
  }
}
