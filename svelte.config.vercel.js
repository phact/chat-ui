import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });
dotenv.config({ path: "./.env" });

process.env.PUBLIC_VERSION = process.env.npm_package_version;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: vercel(),

    paths: {
      base: process.env.APP_BASE || "",
    },
    csrf: {
      // handled in hooks.server.ts, because we can have multiple valid origins
      checkOrigin: false,
    },
  },
};

export default config;
