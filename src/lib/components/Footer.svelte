<script>
	import SocialLinks from './SocialLinks.svelte';
</script>

<footer class="flex flex-row justify-center text-xl leading-6 bg-black">
	<div class="flex flex-row flex-1 py-4 px-3 max-w-5xl">
		<div class="flex-1">
			<SocialLinks />
		</div>
		<div class="flex items-center justify-center mx-2">
			<span class="text-base text-gray-200 hover:no-underline mr-2"
				>Copyright © {new Date().getFullYear()}
				<a
					class="decoration-2 underline underline-offset-2 font-medium hover:text-gray-400 hover:decoration-gray-400"
					href="https://github.com/pyrossh"
				>
					pyrossh
				</a>
			</span>
		</div>
	</div>
</footer>
