<script>
	import Icon from '@iconify/svelte';
	import SocialLinks from './SocialLinks.svelte';
</script>

<footer class="flex w-full flex-1 flex-row justify-center text-xl leading-6 bg-black">
	<div class="flex flex-row flex-1 py-4 px-3 max-w-5xl">
		<div class="flex-1">
			<SocialLinks />
		</div>
		<div class="flex">
			<span class="text-base text-[#8D8D93] hover:no-underline"> powered by </span>
			<a class="mx-2 -mt-3" href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer">
				<Icon icon="logos:svelte-kit" width="120px" height="50px" />
			</a>
		</div>
	</div>
</footer>
