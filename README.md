# Department Website — MERN Stack

A simple full-stack Department of Computer Science website with:

- **Home** — hero section, featured courses, department notices
- **Login** — authenticates against MongoDB, returns a JWT
- **Registration** — creates a new user account (hashed password)
- **About us** — department mission, stats, and faculty

**Stack:** MongoDB (database) · Express (API server) · React + Vite (front-end) · Node.js (runtime)

```
mern-department-app/
├── backend/          Express API + MongoDB (Mongoose) + JWT auth
│   ├── models/User.js
│   ├── routes/auth.js
│   ├── middleware/auth.js
│   ├── server.js
│   └── .env.example
└── frontend/         React app (Vite) — Home, Login, Register, About
    └── src/
        ├── pages/
        ├── components/
        └── api.js
```

## 1. Prerequisites

- Node.js 18+ and npm
- MongoDB running locally, **or** a free MongoDB Atlas cluster

## 2. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env`:

```
MONGO_URI=mongodb://127.0.0.1:27017/department_db
JWT_SECRET=some_long_random_string
PORT=5000
```

Start the API:

```bash
npm run dev      # with nodemon, auto-restarts on changes
# or
npm start
```

You should see `Connected to MongoDB` and `Server running on http://localhost:5000`.
Check it with: `curl http://localhost:5000/api/health`

## 3. Frontend setup

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). The dev server
proxies any `/api/...` request to `http://localhost:5000`, so the frontend
and backend can run side by side without CORS issues.

## 4. Using the site

1. Go to **Registration**, create an account (name, email, student/staff ID,
   password).
2. Go to **Login** and sign in with that email/password.
3. The navbar shows "Signed in as …" and lets you log out. The JWT and user
   info are kept in `localStorage`.
4. **Home** and **About us** are viewable by anyone, no login required.

## 5. API reference

| Method | Route              | Body                                              | Notes                     |
|--------|--------------------|----------------------------------------------------|---------------------------|
| GET    | `/api/health`      | –                                                  | Health check              |
| POST   | `/api/auth/register` | `fullName, email, studentId, password, confirmPassword` | Creates a user            |
| POST   | `/api/auth/login`  | `email, password`                                  | Returns `{ token, user }` |
| GET    | `/api/auth/me`     | – (header `Authorization: Bearer <token>`)         | Returns the logged-in user|

Passwords are hashed with `bcryptjs` before being stored; plaintext
passwords are never saved to MongoDB.

## 6. Notes / next steps

- This is intentionally simple — one collection (`User`) and one auth
  route file — so it's easy to read end-to-end. Add more collections
  (e.g. `Course`, `Notice`) the same way: a Mongoose model + an Express
  router + a React page that calls it via `src/api.js`.
- For production, serve the built frontend (`npm run build` inside
  `frontend/`, producing `frontend/dist`) from Express, or deploy the
  frontend and backend separately (e.g. Vercel + Render/Railway) and
  point `VITE`'s proxy / `api.js` base URL at the deployed API.
