import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(async function _handle({ event, resolve }) {
  const response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace('%unocss-svelte-scoped.global%', 'unocss_svelte_scoped_global_styles')
  });
  return response;
});
