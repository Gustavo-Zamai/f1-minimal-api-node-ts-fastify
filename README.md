# 🏎️ F1 Minimal API — Node.js + TypeScript + Fastify

A minimal REST API for Formula 1 teams and drivers, built using **Node.js**, **Fastify**, and **TypeScript**. Includes data about current F1 teams and drivers, and provides basic endpoints for listing and querying by name or ID.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/Gustavo-Zamai/f1-minimal-api-node-ts-fastify.git
cd f1-minimal-api-node-ts-fastify
npm install
```
### Running the Project
```bash
Copiar
Editar
# Run in development
npm run start:dev

# Run with watch mode (hot reload)
npm run start:watch

# Build the project
npm run build

# Run built app
npm run start:build
```
## 📦 Scripts

| Script         | Description                    |
|----------------|--------------------------------|
| `start:dev`    | Run with tsx and .env support  |
| `start:watch`  | Run with tsx and hot-reload    |
| `build`        | Compile TypeScript using tsup  |
| `start:build`  | Execute the compile build      |


## 📚 API Endpoints
### Teams
- `GET /teams` — List all teams

- `GET /teams/id/:id` — Get a team by ID

- `GET /teams/name/:name` — Get a team by name

### Drivers
- `GET /drivers` — List all drivers

- `GET /drivers/:id` — Get a driver by ID

## 🛠️ Technologies
- Node.js

- TypeScript

- Fastify

- @fastify/cors

- tsx / tsup

## ✅ To-Do (Future Improvements)
- [ ] Add testing with **Vitest** or **Jest**

- [ ] Add **Swagger** documentation

- [ ] Add **Docker** support

- [ ] Configure **CI with GitHub Actions**

- [ ] Add **Husky + lint-staged** for pre-commit checks

## 📄 License
- ISC License

## 👤 Author
[Gustavo Zamai](https://github.com/Gustavo-Zamai)
