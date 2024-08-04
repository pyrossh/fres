<script>
	import { getStores } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	// let { children } = $props();

	const { page } = getStores();
	let url = `https://pyrossh.dev${$page.url.pathname}`;
	$: isAppPage = $page.url.pathname.includes('only-bible-app');
</script>

<svelte:head>
	<meta name="author" content="pyrossh" />
	<meta name="keywords" content="pyrossh.dev,pyrossh,svelte,website" />
	<link rel="canonical" href={url} />
	<meta property="og:site_name" content="pyrossh.dev" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
</svelte:head>
{#if !isAppPage}
	<div class="leading-8 flex flex-1 flex-col text-base sm:leading-7 m-0">
		<Header />
		<main class="flex flex-1 bg-white">
			<div class="flex flex-1 flex-row justify-center">
				<div class="flex flex-1 flex-row max-w-5xl my-4 p-4">
					<!-- {@render children()} -->
					<slot />
				</div>
			</div>
		</main>
		<Footer />
	</div>
{:else}
	<slot />
{/if}
