# nextjs-auth

Lightweight Next.js (App Router) authentication example with a protected dashboard, cookie-based login, and a minimal UI.

- Tech stack: Next.js 16 · React 19 · TypeScript · Tailwind CSS (PostCSS) · Zod
- Auth style: Email/password login, HttpOnly cookie, protected routes via proxy and server components

## Quick Start

- Install dependencies:

```sh
pnpm install
```

- Copy environment file:

```sh
cp .env.example .env.local
```

- Run in development:

```sh
pnpm run dev
```

- Build for production:

```sh
pnpm run build
```

- Start in production:

```sh
pnpm run start
```

Other scripts:

- Lint: `pnpm run lint`

## Prerequisites

- Node.js 18+ (recommended)
- pnpm (this repo includes a `pnpm-lock.yaml`)

Create a `.env.local` file for any secrets your app requires (e.g. API keys or backend URLs). This project does not include real credentials by default.

## Project Structure

High-level layout:

- `app/` – App Router entrypoint, routes, layouts, loading and error UI
- `components/` – Reusable React components (login form, etc.)
- `lib/` – Auth and data-fetching helpers
- `config/` – App configuration and constants
- `types/` – Shared TypeScript types and Zod schemas
- Root config – Next.js, TypeScript, ESLint, Tailwind/PostCSS, proxy

Full tree:

```sh
.
├── app
│   ├── actions
│   │   └── auth.ts
│   ├── dashboard
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── error.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── login
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components
│   └── LoginForm.tsx
├── config
│   └── config.ts
├── lib
│   ├── fetch-users.ts
│   ├── login-user.ts
│   └── logout.ts
├── types
│   ├── schema.ts
│   └── types.ts
├── proxy.ts
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
├── package.json
├── pnpm-lock.yaml
├── README.md
└── SRS.md
```

## Routes & Behavior

- `/` – Simple landing page with links to Login and Dashboard.
- `/login`
  - Public login page with the `LoginForm` component.
  - If a valid auth cookie is already present, the page redirects to `/dashboard`.
  - Uses a server action in `app/actions/auth.ts` to:
    - Validate credentials with Zod.
    - Call the mock login endpoint (`lib/login-user.ts`).
    - Set an HttpOnly auth cookie.
- `/dashboard`
  - Protected route.
  - The `proxy.ts` file (Next.js 16 proxy, previously middleware) checks for the auth cookie and redirects unauthenticated users to `/login`.
  - The `DashboardPage` server component:
    - Uses `lib/fetch-users.ts` to read the cookie and fetch mock user data from `https://reqres.in/api/users/2`.
    - Displays the user’s name, email, and avatar.
    - Includes a Logout button.

## Auth & Helpers

- `app/actions/auth.ts`
  - Server action handling login form submissions.
  - Validates input with Zod schemas from `types/schema.ts`.
  - Sets an HttpOnly, secure cookie (name from `config/config.ts`) when login succeeds.

- `lib/login-user.ts`
  - Thin wrapper around a mock auth API (e.g. ReqRes).
  - Returns a token shape consumed by the login action.

- `lib/fetch-users.ts`
  - Server-side helper that:
    - Reads the auth token from the cookie.
    - Redirects to `/login` if the token is missing or invalid.
    - Fetches mock user data and returns it for the dashboard UI.

- `lib/logout.ts`
  - Server-side logout helper (used as a server action) that:
    - Deletes the auth cookie.
    - Redirects the user to `/login`.

- `config/config.ts`
  - Central place for configuration constants like `AUTH_COOKIE_NAME` and any environment-driven values.

- `types/schema.ts` and `types/types.ts`
  - Zod schemas for validating login input.
  - Shared TypeScript types for auth state, API responses, and login payloads.

## Developing & Editing

- Pages and layouts:
  - Edit files under `app/` to change routes, layouts, loading states, and error handling.
  - `app/layout.tsx` defines the root layout and global styles via `app/globals.css`.

- Components:
  - Add or modify UI components in `components/`.
  - `LoginForm.tsx` is a client component using React hooks and server actions.

- Styles:
  - Tailwind CSS is configured via `postcss.config.mjs` and `globals.css`.
  - Utility classes are used throughout the components and pages.

- Linting and types:
  - Run `pnpm run lint` to check for lint errors.
  - TypeScript is configured via `tsconfig.json` and `next-env.d.ts`.

## Deploy

This app is ready to deploy to Vercel or any platform that supports Next.js 16:

- Push your repository to GitHub.
- Import it in Vercel and select the project.
- Set environment variables in the Vercel dashboard to match `.env.local` if needed.
- Vercel will handle build (`pnpm run build`) and start.

For other platforms, use their Next.js deployment guides and ensure Node 18+ and `pnpm` are available.

## Troubleshooting

- Port in use:
  - By default, the dev server runs on port `3000`. If it is in use, stop the other process or start with a custom port (e.g. `PORT=3001 pnpm run start`).

- TypeScript or ESLint errors:
  - Make sure dependencies are installed with `pnpm install`.
  - Check `tsconfig.json` and `eslint.config.mjs` for custom rules.
  - Fix reported type errors before deploying.

- Auth not working as expected:
  - Confirm that the auth cookie name in `config/config.ts` matches the one set in `app/actions/auth.ts`.
  - Ensure `proxy.ts` is present at the project root and that its matcher targets the correct routes (e.g. `/dashboard/:path*`).
