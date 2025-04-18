# Dashboard Example w/ Next.js, TypeScript, shadcn/ui

## Get started

1. Run `npm i` in root directory to install dependencies.
2. Run `npm run dev` to start dev server (w/ hot reoading ofc)

## Routing

Simply add files by creating a directory in `/app` with your desired route name and creating a `page.tsx` file in the new directory.
Find out more here: https://nextjs.org/docs/app/building-your-application/routing

## Styling

We are using Tailwind and Radix UI under the hood with Shadcn/ui. Tailwind is a game changer when writing CSS, may look ugly initially but saves so much time.

Shadcn/ui just took the primatives from Radix UI (unstyled but highly accessible components) and styled them. You can add components or even whole "blocks" or templates with commands (i.e. `npx shadcn@latest add button` or `npx shadcn@latest add login-01`)

Again, TailwindCSS is being used under the hood with that comes a robust styling system to manage your themes and colors (`tailwind.config.js`)
