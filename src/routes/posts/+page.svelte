<script>
	import { formatDate } from '$lib/dateUtils';
	export let data;
</script>

<svelte:head>
	<title>pyrossh | posts</title>
	<meta name="description" content="Peter John's Posts" />
</svelte:head>
<div>
	<h1 class="font-bold text-3xl">Posts</h1>
	<ul class="flex flex-col">
		{#each data.posts as { title, description, image, date, slug, tags }}
			<li class="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-start items-end mt-5 leading-6">
				<div class="flex flex-col">
					<a class="text-black underline underline-offset-4" href={`/posts/${slug}`}>
						{title}
					</a>
					<span class="hover:cursor-default">{description}</span>
				</div>
				<span class="flex flex-1 justify-end sm:ml-4 text-md text-gray-900">{formatDate(date)}</span
				>
			</li>
		{/each}
	</ul>
	<div class="h-[24rem]" />
</div>
