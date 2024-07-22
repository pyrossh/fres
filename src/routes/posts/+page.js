export const load = async ({ params }) => {
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });
	const posts = Object.keys(paths)
		.map((key) => ({ ...paths[key].metadata, slug: key.split('/').at(-1).replace('.md', '') }))
		.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());
	return { posts };
};
