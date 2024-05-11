/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    fontFamily: {
      sans: 'system-ui',
      serif: 'system-ui',
      mono: 'monospace',
      logo: 'cursive'
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: "70rem",
            h1: {
              fontWeight: "500",
              marginTop: "1rem",
            },
            h2: {
              color: theme('colors.black'),
            },
            pre: {
              padding: "16px",
              borderRadius: "16px",
              fontSize: "0.8rem",
              fontFamily: "monospace",
            },
            '--tw-prose-body': theme('colors.black'),
            '--tw-prose-headings': theme('colors.gray[100]'),
            '--tw-prose-lead': theme('colors.black'),
            '--tw-prose-links': theme('colors.blue[900]'),
            '--tw-prose-bold': theme('colors.black'),
            '--tw-prose-counters': theme('colors.black'),
            '--tw-prose-bullets': theme('colors.black'),
            '--tw-prose-hr': theme('colors.black'),
            '--tw-prose-quotes': theme('colors.black'),
            '--tw-prose-quote-borders': theme('colors.black'),
            '--tw-prose-captions': theme('colors.black'),
            '--tw-prose-code': theme('colors.black'),
            '--tw-prose-pre-code': theme('colors.black'),
            '--tw-prose-pre-bg': theme('colors.black'),
            '--tw-prose-th-borders': theme('colors.black'),
            '--tw-prose-td-borders': theme('colors.black'),
            '--tw-prose-invert-body': theme('colors.black'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.black'),
            '--tw-prose-invert-links': theme('colors.blue[900]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.black'),
            '--tw-prose-invert-bullets': theme('colors.black'),
            '--tw-prose-invert-hr': theme('colors.black'),
            '--tw-prose-invert-quotes': theme('colors.black'),
            '--tw-prose-invert-quote-borders': theme('colors.black'),
            '--tw-prose-invert-captions': theme('colors.black'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.black'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.black'),
            '--tw-prose-invert-td-borders': theme('colors.black'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

