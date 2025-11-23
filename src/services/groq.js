// src/services/groq.js
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function extractExpense(text) {
  const prompt = `
Você é um assistente que extrai gastos pessoais.
Receba um texto e retorne APENAS este JSON:

{
  "amount": número,
  "category": "string",
  "description": "string"
}

Regras:
- amount sempre número
- description curta (1 a 4 palavras)
- category deve ser uma palavra (food, transport, market, health, fun, etc)
- NÃO explique nada, NÃO escreva nada fora do JSON.
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      { role: "system", content: prompt },
      { role: "user", content: text }
    ],
    temperature: 0
  });

  return completion.choices[0].message.content;
}
