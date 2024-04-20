<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>pyrossh | {$page.error?.message}</title>
	<meta name="description" content="${$page.error?.message}" />
</svelte:head>

<div class="px-4 mx-auto h-screen">
	<div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
		<img
			class="my-6"
			src="/favicon.png"
			width="128"
			height="128"
			alt="the Fresh logo: a sliced lemon dripping with juice"
		/>
		<h1 class="text-4xl font-bold">{$page.status} - {$page.error?.message}</h1>
		<p class="my-4">
			{#if $page.status === 404}
				The page you were looking for doesn't exist.
			{:else}
				Something went wrong. Please try again later.
			{/if}
		</p>
		<a href="{base}/" class="underline mt-4"> Go back home </a>
	</div>
</div>
