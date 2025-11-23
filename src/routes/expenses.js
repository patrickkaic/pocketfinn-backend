import express from "express";
import { supabase } from "../services/supabase.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { user_id, amount, description, category } = req.body;

  const { data, error } = await supabase
    .from("expenses")
    .insert([{ user_id, amount, description, category }])
    .select();

  if (error) return res.status(400).json(error);

  res.json(data);
});

router.get("/:user_id", async (req, res) => {
  const { user_id } = req.params;

  const { data, error } = await supabase
    .from("expenses")
    .select("*")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false });

  if (error) return res.status(400).json(error);

  res.json(data);
});

export default router;
