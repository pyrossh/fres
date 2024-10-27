<script>
	import Icon from '@iconify/svelte';

	/**
	 * @typedef {Object} Props
	 * @property {any} title - let { title, link, children } = $props();
	 * @property {any} link - let { title, link, children } = $props();
	 * @property {boolean} [isExternal] - let { title, link, children } = $props();
	 * @property {import('svelte').Snippet} [icon]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { title, link, isExternal = true, icon, children } = $props();
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
				{#if icon}{@render icon()}{:else}
					<Icon icon="mdi-github" class="mr-2" width="36" />
				{/if}
				<h2>{title}</h2>
			</a>
			{@render children?.()}
		</div>
	</div>
</article>
