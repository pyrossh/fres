<script>
	import Copyright from '$lib/components/Copyright.svelte';
</script>

<div class="prose h-full sm:w-6/12 mx-auto">
	<header class="flex flex-col mx-4 text-sm mt-4">
		<nav class="flex flex-1 justify-between" aria-label="Global">
			<div class="flex flex-1">
				<a
					class="flex flex-1 items-center text-xl font-semibold text-gray-200 no-underline focus:outline-none focus:ring-1 focus:ring-gray-600"
					href="/only-bible-app"
					aria-label="Brand"
				>
					<div class="flex flex-1">Only Bible App</div>
				</a>
			</div>
			<div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0">
				<a
					class="text-gray-300 font-medium focus:outline-none focus:ring-1 no-underline hover:text-neutral-100 focus:ring-neutral-200"
					href="/only-bible-app/privacy-policy">Privacy Policy</a
				>
				<a
					class="text-gray-300 font-medium focus:outline-none focus:ring-1 no-underline hover:text-neutral-100 focus:ring-neutral-200"
					href="/only-bible-app/terms-and-conditions">Terms & Conditions</a
				>
			</div>
		</nav>
	</header>
	<main class="flex flex-col mx-4 mt-10 sm:mt-0">
		<slot />
	</main>
	<footer class="not-prose text-center py-5 mt-20">
		<Copyright />
	</footer>
</div>

<style lang="postcss">
	:global(html) {
		background-color: #482929;
	}
</style>
