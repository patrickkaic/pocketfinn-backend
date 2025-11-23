import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import expensesRoute from "./routes/expenses.js";
import messageRoute from "./routes/message.js";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/expense", expensesRoute);
app.use("/message", messageRoute);


app.get("/", (req, res) => res.send("API PocketFinn Online"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Server running on port ${port}`);

});
