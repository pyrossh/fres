<script>
	import { formatDateLong } from '$lib/dateUtils';
	export let data;
</script>

<svelte:head>
	<title>pyros.sh | {data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
	<meta name="keywords" content={data.meta.tags} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="post-page">
	<hgroup class="flex flex-1 flex-col font-serif">
		<h1 class="font-bold text-2xl">
			{data.meta.title}
		</h1>
		<h2 class="mt-1 font-normal text-base text-slate-700">{data.meta.description}</h2>
		<p class="text-md">
			<span class="font-semibold">Published on: </span>
			{formatDateLong(data.meta.date)}
		</p>
	</hgroup>
	<div class="mb-6">
		<span class="font-semibold">Tags:</span>
		{#each data.meta.tags as tag}
			<span
				class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-base font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10 mr-3"
				>{tag}</span
			>
		{/each}
	</div>
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	.post-page {
		display: flex;
		flex-direction: column;
		width: 100%;

		& code {
			font-family:
				Menlo,
				Monaco,
				Courier New,
				monospace;
			font-size: 0.9em;
		}

		& p {
			margin-top: 1rem;
			margin-bottom: 1rem;
		}

		& pre {
			max-width: 64rem;
			font-family: monospace;
			font-size: 14px;
			border-radius: 16px;
			padding: 16px;
			margin: 8px;
			line-height: 20px;
			overflow-x: auto;
		}

		& img {
			width: auto;
			@media (--mobile) {
				width: 100%;
			}
		}

		& .title-container {
			display: flex;
			flex: 1;
			font-family: serif;
			flex-direction: column;

			& h1 {
				color: var(--black-light);
				margin: 0;
				line-height: 3rem;
			}

			& h2 {
				color: var(--yellow-dark);
				font-size: 1.5rem;
				font-weight: 500;
				margin-top: 20px;
				margin-bottom: 20px;
			}

			& h3 {
				color: var(--black-light);
				font-size: 1.5rem;
				font-weight: 500;
				margin: 0;
			}

			& .date {
				display: flex;
				flex: 1;
				flex-direction: row;
				justify-content: flex-end;
				margin-right: var(--space-10);

				@media (--mobile) {
					justify-content: flex-start;
					margin-top: 0.5rem;
					margin-bottom: 0.5rem;
				}
			}
		}
	}

	.tag {
		background-color: var(--black-light);
		color: white;
		display: inline-block;
		padding-left: 8px;
		padding-right: 8px;
		text-align: center;
		margin-right: 1rem;
	}
</style>
