# Tailwind Prettier Plugin VS Code Repro

[https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/244](https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/244)

```bash
npm run bootstrap
```

## Repro

- Run `yarn prettier:watch-write`
- Uncomment the `example` colors in the [`tailwind.config.cjs`](./tailwind.config.cjs)
- Open [`src/example.tsx`](./src/example.tsx)
- Hit save in VS Code
  - VS Code fights with Prettier over the order
