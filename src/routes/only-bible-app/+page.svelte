<script>
	import PlayStoreIcon from '$lib/assets/icons/playstore.svg?component';
	import AppStoreIcon from '$lib/assets/icons/appstore.svg?component';
	import AppIconPng from '$lib/assets/images/app_icon.png';
	import AppImagePng from '$lib/assets/images/app_image.png?enhanced';
</script>

<svelte:head>
	<title>Only Bible App</title>
	<meta name="description" content="The only bible app you will ever need" />
</svelte:head>

<div class="flex flex-1 flex-col sm:flex-row items-center">
	<div class="flex flex-col items-center sm:items-start">
		<div class="block mb-4">
			<h1
				class="flex flex-col items-center sm:items-start sm:m-0 text-3xl font-bold text-center sm:text-left lg:leading-tight text-white"
			>
				<img class="w-40 m-0 rounded-xl mb-8" src={AppIconPng} alt="Only Bible App" />
				The only bible app you will ever need
			</h1>
			<div class="text-center sm:text-left flex flex-col text-lg text-neutral-100 sm:mt-5">
				<span>No ads,</span>
				<span>No in-app purchases,</span>
				<span>No distractions.</span>
				<span>Works completely offline.</span>
			</div>
		</div>
		<div class="flex flex-col items-center sm:items-start">
			<h3 class="text-gray-200 m-0 my-4">Get it now!</h3>
			<div class="flex flex-col sm:flex-row">
				<a
					class="mt-4 sm:mt-0 sm:mr-2"
					href="https://play.google.com/store/apps/details?id=dev.pyrossh.onlyBible"
					rel="noopener noreferrer"
					target="blank"
				>
					<PlayStoreIcon class="w-48 sm:w-44" />
				</a>
				<a
					class="mt-8 sm:mt-0"
					href="https://apps.apple.com/us/app/only-bible-app/id6467606465?itsct=apps_box_badge&itscg=30200"
					rel="noopener noreferrer"
					target="blank"
				>
					<AppStoreIcon class="w-48 sm:w-44" />
				</a>
			</div>
		</div>
	</div>
	<div
		class="not-prose flex items-center mt-10 sm:mt-20 sm:flex-row [&>picture]:flex [&>picture]:justify-center sm:[&>picture]:justify-end"
	>
		<enhanced:img class="w-9/12" src={AppImagePng} alt="app screenshot" />
	</div>
</div>
