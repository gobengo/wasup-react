import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const base = process.env.BASE_URL ?? undefined
if (typeof base !== 'undefined') console.debug('vite: using basename from BASE_URL', base)

export default defineConfig({
  build: {
    outDir: 'build/client/',
  },
  base,
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
  ],
});
