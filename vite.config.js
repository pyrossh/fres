import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg'
import UnoCSS from '@unocss/svelte-scoped/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    enhancedImages(),
    sveltekit(),
    UnoCSS({
      injectReset: '@unocss/reset/tailwind.css'
    }),
    svg(),
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
