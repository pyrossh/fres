<script>
	import { formatDateLong } from '$lib/dateUtils';
	let { data } = $props();
</script>

<svelte:head>
	<title>pyrossh | {data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
	<meta name="keywords" content={data.meta.tags} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="flex flex-col w-full">
	<hgroup class="flex flex-1 flex-col mb-6">
		<h1 class="font-bold text-2xl">
			{data.meta.title}
		</h1>
		<h2 class="mt-1 font-normal text-base text-slate-700">{data.meta.description}</h2>
		<div class="mt-4">
			<span class="text-slate-700 font-semibold mr-1">Published on: </span>
			{formatDateLong(data.meta.date)}
		</div>
		<div class="flex mt-1">
			<span class="text-slate-700 font-semibold mr-1">Tags:</span>
			{#each data.meta.tags as tag}
				<span
					class="inline-flex items-center rounded-sm bg-slate-100 px-1 text-base font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10 mr-3"
					>{tag}</span
				>
			{/each}
		</div>
	</hgroup>
	<div class="prose">
		<data.content />
	</div>
</article>
