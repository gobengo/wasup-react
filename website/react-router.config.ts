import type { Config } from "@react-router/dev/config";

const basename = process.env.BASE_URL ?? undefined
if (basename) console.debug('react-router: using basename from BASE_URL', basename)

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  // prerender: true,
  basename,
  future: {
  }
} satisfies Config;
