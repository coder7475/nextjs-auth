# nextjs-auth

Lightweight Next.js (App Router) authentication example with a protected dashboard and simple login flow.

**Tech stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS (postcss) · Zod

**What this repo contains:** a minimal Next.js app demonstrating an auth flow, with UI components in `components/`, helper libs in `lib/`, and server actions under `app/actions/`.

**Quick Start**

- **Install:**

```bash
pnpm install
```

- **Run (dev):**

```bash
pnpm run dev
```

- **Build:**

```bash
pnpm run build
```

- **Start (production):**

```bash
pnpm run start
```

The `package.json` scripts available are: `dev`, `build`, `start`, and `lint`.

**Prerequisites**

- Node.js 18+ (recommended)
- pnpm (this repo includes a `pnpm-lock.yaml`)

Create a `.env.local` file for any secrets your app requires (e.g. API keys or database URLs). The project does not bundle credentials by default.

**Project Structure (high-level)**

- `app/` : Next.js App Router pages and layouts (`app/login`, `app/dashboard`, `app/actions`)
- `components/` : React UI components (`LoginForm.tsx`)
- `lib/` : helper functions for auth and fetching (`fetch-users.ts`, `login-user.ts`, `logout.ts`)
- `config/` : app configuration (`config.ts`)
- `types/` : shared TypeScript types and Zod schemas

See the repository root for additional config files: `next.config.ts`, `postcss.config.mjs`, `tsconfig.json`, and lint configuration.

**Routes & Behavior**

- `/login` : public login page with `LoginForm` component.
- `/dashboard` : protected area that requires authentication to access.
- Server actions used for authentication are placed under `app/actions/` and small helper functions are in `lib/`.

If you want to adapt this project to your own auth backend, update the implementations in `lib/login-user.ts` and `lib/logout.ts` and the action handlers in `app/actions/auth.ts`.

**Developing & Editing**

- Edit pages under `app/` — the App Router supports layouts, loading and error UI.
- Components live in `components/` and can be reused across pages.
- Use `pnpm run lint` to run the project linter.

**Deploy**

This app is ready to deploy to Vercel or any platform that supports Next.js. For Vercel, push your repo and follow Vercel's import flow — set any required environment variables in the project dashboard.

**Troubleshooting**

- If ports conflict, ensure `3000` is free or set `PORT` when starting in production.
- If TypeScript errors appear, run `pnpm install` to ensure types are available and check `tsconfig.json`.

**Next steps (suggested)**

- Add real session management (JWT or cookie sessions) and persist users to a database.
- Add tests and CI checks.
- Harden auth flows and add CSRF protection for production.

If you'd like, I can:
- add an example `.env.example` with common env keys,
- wire up a simple in-memory user store for local testing, or
- create a Vercel deployment guide tailored to this repo.

---

If you want me to commit these changes and run the app locally, tell me which action you'd like next.
