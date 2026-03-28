# pocketfinn-backend

Backend para um aplicativo de finanças pessoais com entrada inteligente via linguagem natural (chatbot).

🚧 Status: Em desenvolvimento — funcionalidades principais ainda em evolução.

📌 Visão Geral

Este projeto fornece uma API REST para:

Registrar despesas manualmente
Listar despesas por usuário
Interpretar mensagens em linguagem natural e convertê-las em dados estruturados

A proposta central é reduzir fricção no input financeiro usando IA.

🧠 Chatbot (IA)

O sistema utiliza um modelo LLM (via Groq API) para transformar textos como:

"Gastei 50 reais com almoço"

em:

{
  "amount": 50,
  "category": "food",
  "description": "almoço"
}
🛠️ Stack Tecnológica
Node.js
Express
Supabase (PostgreSQL)
Groq SDK (LLM)
dotenv
📂 Estrutura do Projeto
src/
  routes/
    expenses.js
    message.js
  services/
    groq.js
    supabase.js
⚙️ Funcionalidades
✅ Implementadas
Criação de despesas
Listagem de despesas por usuário
Extração de dados financeiros via IA
Integração com Supabase
🚧 Em desenvolvimento
Validação de dados
Autenticação
Persistência automática via chatbot
Tratamento de erros da IA
📡 Endpoints
➤ Criar despesa
POST /expenses

Body:

{
  "user_id": "uuid",
  "amount": 50,
  "description": "almoço",
  "category": "food"
}
➤ Listar despesas por usuário
GET /expenses/:user_id
➤ Processar mensagem (IA)
POST /message

Body:

{
  "text": "gastei 30 com uber"
}

Resposta:

{
  "success": true,
  "data": {
    "amount": 30,
    "category": "transport",
    "description": "uber"
  }
}
🔌 Integrações
Supabase

Responsável pelo armazenamento das despesas.

Tabela esperada: expenses

Campos:

user_id
amount
description
category
created_at
Groq (LLM)

Responsável por interpretar texto livre e retornar JSON estruturado.

🔐 Variáveis de Ambiente

Crie um arquivo .env:

SUPABASE_URL=your_url
SUPABASE_ANON_KEY=your_key
GROQ_API_KEY=your_key
🚀 Como rodar
git clone https://github.com/seu-usuario/seu-repo
cd seu-repo

npm install

npm run dev
⚠️ Limitações Atuais
Sem autenticação
Possível retorno inválido da IA (JSON pode quebrar)
Sem validação de entrada
Categorias não padronizadas
