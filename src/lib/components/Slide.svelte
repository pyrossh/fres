<script>
	let { title, link, children } = $props();
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
				<div class="i-mdi-github mr-2" />
				<p>{title}</p>
			</a>
			{@render children()}
		</div>
	</div>
</article>
