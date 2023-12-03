import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

export default defineConfig({
  plugins: [tailwind()],
});

// import { defineConfig } from 'astro/config';
// import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';
// import prefetch from "@astrojs/prefetch";

// // https://astro.build/config
// export default defineConfig({
//   site: 'https://pyros.sh/',
//   markdown: {
//     shikiConfig: {
//       theme: 'dark-plus'
//     }
//   },
//   integrations: [
//     mdx(),
//     prefetch(),
//     sitemap()
//   ],
// });
