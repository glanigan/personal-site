This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploying

This site builds as a static export (`output: "export"` in `next.config.ts`) and deploys to Cloudflare Pages.

`.github/workflows/deploy.yml` builds the site and runs `wrangler pages deploy` on every push to `main`. It needs two repository secrets:

- `CLOUDFLARE_API_TOKEN` — a token with the "Cloudflare Pages: Edit" permission
- `CLOUDFLARE_ACCOUNT_ID` — found on the Cloudflare dashboard's right sidebar

One-time setup before the first deploy:

1. In the Cloudflare dashboard, create a Pages project named `personal-site` (Workers & Pages → Create → Pages → connect to Git, or create it empty and let the workflow's first `wrangler pages deploy` populate it).
2. Add the two secrets above under the GitHub repo's Settings → Secrets and variables → Actions.
3. In the Pages project's Custom domains settings, attach your domain (already on Cloudflare, so DNS is automatic).

To build and preview locally:

```bash
bun run build
bunx wrangler pages dev out
```
