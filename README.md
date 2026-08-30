# Ekano

### Enterprise Knowledge Assistant

**Ask. Discover. Know.**

Ekano is a full-stack Retrieval-Augmented Generation (RAG) application that lets teams turn internal documents into a searchable knowledge base and ask questions using natural language.

Instead of relying on the language model's general knowledge for organization-specific questions, Ekano retrieves relevant information from uploaded documents and uses that context to generate grounded answers with source references.

🌐 **Live Demo:** https://ekano.vercel.app

---

## ✨ Features

- 📄 Upload PDF documents to build a knowledge base
- 🧠 Automatic document chunking and embedding generation
- 🔎 Semantic search using vector similarity
- 💬 Ask questions in natural language
- 📚 Grounded AI responses based on retrieved company knowledge
- 🔗 Source attribution for generated answers
- 🛡️ Refuses to invent organization-specific information when relevant context is unavailable
- 🔐 Cookie-based authentication
- 📱 Responsive dashboard and landing experience

---

## 🧠 How Ekano Works

Ekano uses a **Retrieval-Augmented Generation (RAG)** pipeline that transforms uploaded documents into searchable knowledge and uses the most relevant information to answer user questions.

```mermaid
flowchart LR
    A[📄 PDF Upload] --> B[PDF Parsing]
    B --> C[Text Chunking]
    C --> D[Generate Embeddings]
    D --> E[(PostgreSQL + pgvector)]

    F[💬 User Question] --> G[Query Embedding]
    G --> H[Vector Similarity Search]
    E --> H
    H --> I[Relevant Document Chunks]
    I --> J[LLM + Retrieved Context]
    J --> K[✨ Grounded Answer + Sources]
```

When a user uploads a document, Ekano extracts its content, splits it into smaller chunks, generates vector embeddings, and stores them in **PostgreSQL using pgvector**.

When a question is asked, Ekano embeds the query and performs a **vector similarity search** to retrieve the most relevant document chunks. Those chunks are then supplied to the LLM as context, allowing Ekano to generate answers grounded in the organization's knowledge base.

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express
- TypeScript
- PostgreSQL
- pgvector

### AI

- OpenRouter
- NVIDIA Nemotron embedding model
- NVIDIA Nemotron language model
- Retrieval-Augmented Generation (RAG)

### Infrastructure

- Vercel — frontend
- Render — backend API
- Render PostgreSQL — database and vector storage

---

## 🏗️ Project Structure

```text
ekano/
├── frontend/        # Next.js web application
├── backend/         # Express API and RAG pipeline
├── docs/            # Project documentation
├── infrastructure/  # Infrastructure configuration
└── README.md
```

---

## 🚀 Running Locally

### Prerequisites

Make sure you have:

- Node.js
- PostgreSQL
- pgvector
- An OpenRouter API key

### 1. Clone the repository

```bash
git clone https://github.com/Rush-K15/ekano.git
cd ekano
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Create a `.env` file using `.env.example` as the reference.

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/ekano
OPENROUTER_API_KEY=your_openrouter_api_key
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

Run the database migrations:

```bash
npm run migrate
```

Start the backend:

```bash
npm run dev
```

The API runs on:

```text
http://localhost:8080
```

### 3. Configure the frontend

From the project root:

```bash
cd frontend
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

Start the frontend:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🧪 Example Questions

Once documents have been uploaded, Ekano can answer questions such as:

```text
How many remote days can employees take?

How much annual leave can be carried forward?

What should I do if my company laptop is stolen?

What is the reimbursement policy for home-office equipment?
```

If the answer cannot be found in the retrieved organizational knowledge, Ekano is instructed not to fabricate company-specific information.

---

## 📌 V1 Scope

Ekano V1 focuses on the core end-to-end RAG workflow:

**Upload → Process → Embed → Retrieve → Generate → Cite**

The goal of this release is to provide a small but complete implementation of an enterprise knowledge assistant rather than simulate features that are not yet implemented.

Future iterations may explore richer document management, improved retrieval strategies, conversation history, access control, streaming responses, observability, and evaluation tooling.

---

## 🔒 Security

- Authentication tokens are stored using HTTP-only cookies.
- Production cookies use secure cross-site configuration.
- Secrets and API keys are managed through environment variables.
- Uploaded documents are processed server-side.
- Database changes are managed through versioned migrations.

> Ekano is currently an MVP and should not be used to store sensitive production or confidential enterprise data without additional security hardening.

---

## 📖 Documentation

Detailed architecture and engineering documentation is planned separately and will cover topics such as:

- RAG architecture and request lifecycle
- document ingestion pipeline
- vector search and retrieval strategy
- database design
- authentication flow
- API architecture
- deployment architecture
- design decisions and trade-offs

---

## 👨‍💻 Author

Built by **Rushabh Kunte**

GitHub: https://github.com/Rush-K15

LinkedIn : https://www.linkedin.com/in/rushabh-kunte-a09059216/

---

## 📄 License

This project is currently intended for educational, portfolio, and demonstration purposes.