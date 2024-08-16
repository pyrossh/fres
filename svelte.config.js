import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import github from 'remark-github';
import { getHighlighter } from 'shiki';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [
		[
			github,
			{
				repository: 'https://github.com/pyrossh/pyrossh.dev',
			},
		],
	],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter({
				themes: ['dracula'],
				langs: ['javascript', 'typescript', 'go', 'shell', 'tsx'],
			});
			await highlighter.loadLanguage('javascript', 'typescript', 'go');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'dracula' }));
			return `{@html \`${html}\` }`;
		},
	},
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
			strict: true,
			fallback: '404.html',
		}),
	},
};

export default config;
