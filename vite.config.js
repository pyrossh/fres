import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from '@unocss/svelte-scoped/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    sentrySvelteKit({
      sourceMapsUploadOptions: {
        org: 'pyrossh',
        project: 'pyros-sh'
      }
    }),
    sveltekit(),
    UnoCSS({
      injectReset: '@unocss/reset/tailwind.css'
    })
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
