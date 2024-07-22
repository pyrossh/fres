<script>
	import Icon from '@iconify/svelte';
	// let { title, link, children } = $props();
	export let title,
		link,
		isExternal = true;
</script>

<article class="overflow-hidden rounded bg-[#f0ede2]">
	<div class="flex flex-col w-full p-4">
		<div class="w-full flex-1 mr-8">
			<a
				href={link}
				class="flex items-center text-lg font-semibold mb-2 text-black underline child-svg:mr-2"
				target={isExternal ? '_blank' : ''}
				rel={isExternal ? 'noopener noreferrer' : ''}
			>
				<slot name="icon">
					<Icon icon="mdi-github" class="mr-2" width="36" />
				</slot>
				<h2>{title}</h2>
			</a>
			<!-- {@render children()} -->
			<slot />
		</div>
	</div>
</article>
