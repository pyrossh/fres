<script>
	import PlayStoreIcon from '$lib/assets/icons/playstore.svg?component';
	import AppStoreIcon from '$lib/assets/icons/appstore.svg?component';
	import lightPng from '$lib/assets/images/light.png?enhanced';
	import logoPng from '$lib/assets/logos/onlybible.png';
	import Intro from '$lib/components/Intro.svelte';
</script>

<svelte:head>
	<title>Only Bible App</title>
	<meta name="description" content="The only bible app you will ever need" />
</svelte:head>

<div class="flex flex-col mx-4">
	<div class="flex flex-1 flex-col sm:flex-row items-center sm:items-start">
		<div class="flex flex-col items-center sm:items-start sm:mt-10">
			<img class="mr-2 w-40 m-0 rounded-xl" src={logoPng} alt="Only Bible App" />
			<div
				class="flex flex-1 items-center text-5xl font-semibold no-underline focus:outline-none focus:ring-1 focus:ring-gray-600"
				aria-label="Brand"
			>
				<div class="flex flex-1 mt-8">Only Bible App</div>
			</div>
			<div class="mb-4">
				<Intro />
			</div>
			<div class="flex flex-col items-center sm:items-start">
				<h3 class="m-0 my-4 font-semibold">Download it now.</h3>
				<div class="flex flex-col sm:flex-row">
					<a
						class="mt-4 sm:mt-0 sm:mr-2"
						href="https://play.google.com/store/apps/details?id=sh.pyros.only_bible_app"
						rel="noopener noreferrer"
						target="blank"
					>
						<PlayStoreIcon class="w-48 sm:w-44" />
					</a>
					<a
						class="mt-8 sm:mt-0"
						href="https://apps.apple.com/us/app/only-bible-app/id6467606465?itsct=apps_box_badge&amp;itscg=30200"
						rel="noopener noreferrer"
						target="blank"
					>
						<AppStoreIcon class="w-48 sm:w-44" />
					</a>
				</div>
			</div>
		</div>
		<div
			class="not-prose flex items-center sm:flex-row [&>picture]:flex [&>picture]:justify-center sm:[&>picture]:justify-end mt-10 sm:mt-0"
		>
			<enhanced:img class="w-6/12" src={lightPng} alt="app screenshot" />
		</div>
	</div>
</div>
