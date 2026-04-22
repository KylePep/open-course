# Open Course

A learning platform that allows users to create structured courses from YouTube videos, articles, and notes.

## Concept

Users build and follow “courses” made of:

- YouTube videos
- External reading links
- Personal notes and guidance
- Step-by-step progression tracking

The goal is to turn scattered online learning into structured learning paths.

# Tech Stack

### Frontend

- React
- TypeScript
- Vite
- TailwindCSS

### Backend

- Node.js
- Express (or Fastify)
- TypeScript
- Prisma
- SQLite (MVP) → Postgres (later)

### Monorepo

- npm workspaces


# Project Structure

apps/
  web/        # React frontend
  api/        # Node backend

packages/
  shared/     # Shared types (optional)


# Getting Started

## 1. Install dependencies

From root:

`npm install`


## 2. Run development servers

Frontend:

`npm run dev:web`

Backend:

`npm run dev:api`


# 🌐 Service URLs (dev)

- Frontend: http://localhost:8080 (Configured port)
- Backend: http://localhost:3000 (or configured port)


# Environment Variables

### `apps/api/.env`

`DATABASE_URL="file:./dev.db" PORT=3000`

### `apps/web/.env`

`VITE_API_URL=http://localhost:3000`


# API Overview (MVP)

### Courses

- `GET /courses`
- `GET /courses/:id`

### Progress

- `POST /progress`
- `GET /progress/:userId`


# Development Philosophy

This project prioritizes:

- fast iteration
- simple architecture
- strong TypeScript boundaries
- minimal backend complexity

No overengineering early:

- no microservices
- no auth system initially
- no external integrations beyond YouTube embeds


# Future Expansion

Planned upgrades:

- Authentication (Clerk / Auth.js)
- Course sharing system
- GitHub integration for assignments
- AI-assisted course generation
- Community feedback on steps


# Notes

- This is an MVP-first architecture
- Backend and frontend are intentionally decoupled
- Shared types should be moved into `/packages/shared` when needed