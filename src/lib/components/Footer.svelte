<script>
	import SocialLinks from './SocialLinks.svelte';
</script>

<footer class="flex w-full flex-1 flex-row justify-center text-xl leading-6 bg-black-lighter">
	<div class="flex flex-row flex-1 py-4 max-w-5xl">
		<div class="flex-1">
			<SocialLinks />
		</div>
		<div class="flex">
			<span class="text-base text-#f1fa8c hover:no-underline"> powered by </span>
			<a class="mx-2 -mt-3" href="https://fresh.deno.dev">
				<!-- <LemonDrop /> -->
			</a>
		</div>
	</div>
</footer>
