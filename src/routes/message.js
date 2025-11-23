import express from "express";
import { extractExpense } from "../services/groq.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "O campo 'text' é obrigatório." });
    }

    const rawJson = await extractExpense(text);

    // Converter resposta da IA para objeto
    const expenseData = JSON.parse(rawJson);

    return res.json({ success: true, data: expenseData });

  } catch (error) {
    console.error("Erro na IA:", error);
    return res.status(500).json({
      error: "Erro ao processar mensagem",
      details: error.message,
    });
  }
});

export default router;
