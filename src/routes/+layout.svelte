<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<meta property="og:site_name" content="pyros.sh" />
	<meta property="og:type" content="website" />
	<!-- <link rel="canonical" href={url.toString()} />
  <meta property="og:url" content={url.toString()} /> -->
</svelte:head>
<div
	style="display: contents"
	class="leading-8 flex flex-1 flex-col font-normal text-lg sm:leading-7 m-0"
>
	<Header />
	<main class="w-full h-full block bg-white">
		<div class="flex w-full flex-1 flex-row justify-center">
			<div class="flex w-full flex-1 flex-row items-center max-w-5xl mt-4 mb-20 p-4">
				{@render children()}
			</div>
		</div>
	</main>
	<Footer />
</div>
