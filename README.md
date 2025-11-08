# SkillForge AI

A minimal full-stack boilerplate for building AI-powered career skill development tools.

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Express.js
- **HTTP Client**: Axios

## Setup

### Backend

```bash
cd backend
npm install
npm start
```

Backend runs on `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`

## Project Structure

```
SkillForge/
├── frontend/          # React app
│   └── src/
│       ├── App.jsx    # Main component
│       └── main.jsx   # Entry point
└── backend/           # Express API
    └── server.js      # API server
```

## API Endpoints

- `GET /` - Health check
- `POST /api/generate` - Generate newsletter (mock response)

## Next Steps

- Add AI integration (OpenAI, Anthropic, etc.)
- Add database for user data
- Add authentication
- Enhance UI/UX

