import { sequence } from '@sveltejs/kit/hooks';
import * as Sentry from '@sentry/sveltekit';

Sentry.init({
  dsn: 'https://c5d07f4181a8450fa2cface73930c4f2@o4504798400348160.ingest.sentry.io/4504798403624960',
  tracesSampleRate: 1
});

export const handleError = Sentry.handleErrorWithSentry();

export const handle = sequence(Sentry.sentryHandle(), async function _handle({ event, resolve }) {
  const response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace('%unocss-svelte-scoped.global%', 'unocss_svelte_scoped_global_styles')
  });
  return response;
});
