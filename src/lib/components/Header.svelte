<script>
	import SocialLinks from './SocialLinks.svelte';
</script>

<header>
	<nav class="spy-2 m:py-0 flex w-full flex-1 flex-row justify-center bg-black font-mono">
		<div class="flex flex-row flex-1 items-center p-3 max-w-5xl">
			<a class="flex text-#f1fa8c pr-4 hover:no-underline ml-0 pl-0" href="/">
				<span class="mr-1 font-logo font-bold">木</span> pyros.sh
			</a>
			<div
				class="flex flex-row flex-1 items-center text-white sm:[&>a]:mx-1 [&>a]:px-2 [&>a:hover]:bg-gray-600 data-current:child:bg-gray-600"
			>
				<div>|</div>
				<a href="/cv" rel="prefetch"> cv </a>
				<div>|</div>
				<a href="/posts" rel="prefetch"> posts </a>
			</div>
			<div class="hidden sm:flex">
				<SocialLinks />
			</div>
		</div>
	</nav>
</header>
