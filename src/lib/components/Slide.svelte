<script>
	// let { title, link, children } = $props();
	export let title, link;
</script>

<article class="overflow-hidden rounded bg-[#f0ede2]">
	<div class="flex flex-col w-full p-4">
		<div class="w-full flex-1 mr-8">
			<a
				href={link}
				class="flex items-center text-lg font-semibold mb-2 text-black underline child-svg:mr-2"
				target="_blank"
				rel="noopener noreferrer"
			>
				<slot name="icon">
					<div class="i-mdi-github mr-2" />
				</slot>
				<h2>{title}</h2>
			</a>
			<!-- {@render children()} -->
			<slot />
		</div>
	</div>
</article>
