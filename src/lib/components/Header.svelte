<script>
	import { page } from '$app/stores';
	let isActive = $derived((href) => $page.url.pathname.includes(href));
</script>

<header>
	<nav class="flex flex-1 flex-row justify-center bg-black font-mono text-lg">
		<div class="flex flex-row flex-1 items-center p-3 max-w-5xl">
			<a class="flex text-[#f1fa8c] mr-4" href="/">
				<span class="mr-1 font-logo font-bold">木</span> pyrossh
			</a>
			<div
				class="flex flex-row flex-1 items-center text-white sm:[&>a]:mx-1 [&>a]:px-2 [&>a:hover]:underline [&>a:hover]:decoration-[#c3c5b4] decoration-2 underline-offset-8 decoration-[#f1fa8c] data-current:child:bg-gray-600"
			>
				<div>|</div>
				<a href="/cv" class:underline={isActive('/cv')} rel="prefetch"> cv </a>
				<div>|</div>
				<a href="/posts" class:underline={isActive('/posts')} rel="prefetch"> posts </a>
				<div>|</div>
				<a href="https://github.com/pyrossh/pyrossh.dev"> code </a>
			</div>
		</div>
	</nav>
</header>
