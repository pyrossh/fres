<script>
	import { getStores } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	// let { children } = $props();

	const { page } = getStores();
	let url = `https://pyros.sh${$page.url.pathname}`;
</script>

<svelte:head>
	<meta name="author" content="pyrossh" />
	<meta name="keywords" content="pyros.sh,pyrossh,astro,website" />
	<link rel="canonical" href={url} />
	<meta property="og:site_name" content="pyros.sh" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<script
		defer
		src="https://api.pirsch.io/pirsch.js"
		id="pirschjs"
		data-code="fynEKPntFh9oUyUcIO76Tmcxzjkmwfjg"
	></script>
</svelte:head>
<div class="leading-8 flex flex-1 flex-col text-base sm:leading-7 m-0">
	<Header />
	<main class="w-full h-full block bg-white">
		<div class="flex w-full flex-1 flex-row justify-center">
			<div class="flex w-full flex-1 flex-row items-center max-w-5xl mt-4 mb-20 p-4">
				<!-- {@render children()} -->
				<slot />
			</div>
		</div>
	</main>
	<Footer />
</div>
