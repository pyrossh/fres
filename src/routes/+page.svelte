<script>
	import Slide from '$lib/components/Slide.svelte';
	import stats from '$lib/assets/logos/stats.png';
	import brave from '$lib/assets/logos/brave.png';
	import code from '$lib/assets/logos/code.png';
	import helix from '$lib/assets/logos/helix.png';
	import fish from '$lib/assets/logos/fish.png';
	import iterm from '$lib/assets/logos/iterm.png';
	import slurp from '$lib/assets/logos/slurp.png';
	import curve from '$lib/assets/logos/curve.png';
</script>

<div class="mx-auto">
	<title>pyros.sh</title>
	<meta
		name="description"
		content="A fullstack developer from Bangalore who likes to create frameworks and programming languages."
	/>
	<div>
		<h1 class="text-3xl font-bold mb-4">Hello!</h1>
		<p>
			I{"'"}m{' '}
			<a class="underline" href="https://www.linkedin.com/in/peter-john-in">
				<strong>Peter John</strong>
			</a>
			, a fullstack developer from Bengaluru, India. I love writing code and I am lucky enough to do
			this as my job.
		</p>
		<p>
			I currently work for Equal Experts. I have a strong passion for golang but I also work with
			react and nodejs. I{"'"}ve mostly worked with startups and product based companies. I have
			gained a lot of domain specific knowledge in healthcare and finance during these startup
			years.
		</p>
		<p>
			I like to work on open source and hobby projects. Over the course of
			{' '}
			{new Date().getFullYear() - 2014}{' '}
			years I{"'"}ve accumulated a lot of useful projects used by many people around the world.
		</p>
		<div>
			<div class="flex items-center mt-8 mb-4">
				<div class="i-ic-outline-space-dashboard text-pink-800 w-8 h-8 mr-2" />
				<h2>Projects</h2>
			</div>
			<div
				class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 child-section:flex child-section:flex-col child-section:mt-4 child-section:mx-1"
			>
				<Slide title="rust-embed" link="https://github.com/pyrossh/rust-embed">
					<p>
						A rust proc-macro which loads files into the rust binary at compile time during release
						and loads the file from the fs during dev
					</p>
				</Slide>
				<Slide title="pyros.sh" link="https://github.com/pyrossh/pyros.sh">
					<p>木 Personal website of pyrossh</p>
				</Slide>
				<Slide title="pacos.sh" link="https://github.com/pyrossh/pacos.sh">
					<p>👾 A statically typed, functional programming language inspired by rust, koka.</p>
					<p>WIP to support compilation to WASM.</p>
				</Slide>
				<Slide title="onlybible.app" link="https://github.com/pyrossh/onlybible.app">
					<p>
						The only bible app you will ever need. No ads, No in-app purchases, No distractions.
					</p>
					<div class="flex mt-4">
						<a
							class="mr-4"
							href="https://play.google.com/store/apps/details?id=sh.pyros.only_bible_app"
							rel="noopener noreferrer"
							target="blank"
						>
							<!-- <GooglePlayIcon /> -->
						</a>
						<a
							href="https://apps.apple.com/us/app/only-bible-app/id6467606465"
							rel="noopener noreferrer"
							target="blank"
						>
							<!-- <AppStoreIcon /> -->
						</a>
					</div>
				</Slide>
				<section>
					<div class="flex items-center child-svg:mr-2 child-svg:text-green-800">
						<!-- <HardwareIcon size="32" /> -->
						<h2>Hardware</h2>
					</div>
					<ul
						class="grid gap-2 grid-cols-1 text-center mt-4 heir-a:text-blue-900 child:bg-gray-200 child:p-1"
					>
						<li>M2 Macbook Air</li>
						<li>Raspberry Pi 4B</li>
						<li>Raspberry Pi Zero 2W</li>
					</ul>
				</section>
				<section>
					<div class="flex items-center child-svg:mr-2 child-svg:text-blue-800">
						<!-- <SoftwareIcon size="32" /> -->
						<h2>Software</h2>
					</div>
					<ul
						class="grid gap-2 grid-cols-3 text-center mt-4 heir-img:w-12 heir-a:text-base heir-a:text-blue-900 heir-a:flex heir-a:flex-col heir-a:items-center child:bg-gray-200 child:p-2 child:pb-4"
					>
						<li>
							<a href="https://github.com/exelban/stats" target="_blank" rel="noopener noreferrer">
								Stats
								<img class="w-12 h-12" src={stats} alt="Stats" />
							</a>
						</li>
						<li>
							<a
								href="https://github.com/brave/brave-browser"
								target="_blank"
								rel="noopener noreferrer"
							>
								Brave
								<img class="w-12 h-12" src={brave} alt="Brave" />
							</a>
						</li>
						<li>
							<a
								href="https://github.com/microsoft/vscode"
								target="_blank"
								rel="noopener noreferrer"
							>
								VS Code
								<img class="w-12 h-12" src={code} alt="VsCode" />
							</a>
						</li>
						<li>
							<a
								href="https://github.com/helix-editor/helix"
								target="_blank"
								rel="noopener noreferrer"
							>
								Helix
								<img class="w-12 h-12" src={helix} alt="Helix" />
							</a>
						</li>
						<li>
							<a
								href="https://github.com/fish-shell/fish-shell"
								target="_blank"
								rel="noopener noreferrer"
							>
								Fish
								<img class="w-12 h-12" src={fish} alt="Fish" />
							</a>
						</li>
						<li>
							<a
								href="https://github.com/gnachman/iTerm2"
								target="_blank"
								rel="noopener noreferrer"
							>
								iTerm2
								<img class="w-12 h-12" src={iterm} alt="iterm2" />
							</a>
						</li>
						<li>
							<a href="https://colorslurp.com" target="_blank" rel="noopener noreferrer">
								Slurp
								<img class="w-12" src={slurp} alt="slurp" />
							</a>
						</li>
						<li>
							<a href="https://www.vectornator.io" target="_blank" rel="noopener noreferrer">
								Curve
								<img class="w-12" src={curve} alt="curve" />
							</a>
						</li>
					</ul>
				</section>
				<section>
					<div class="flex items-center child-svg:mr-2 child-svg:text-amber-900">
						<!-- <TreeIcon size="36" /> -->
						<h2>Interests</h2>
					</div>
					<ul class="grid gap-2 grid-cols-3 text-center mt-4 child:bg-slate-100 child:p-1">
						<li>HTML</li>
						<li>CSS</li>
						<li>Tailwind</li>
						<li>Javascript</li>
						<li>React</li>
						<li>Flutter</li>
						<li>Go</li>
						<li>Rust</li>
						<li>Kotlin</li>
						<li>Firestore</li>
						<li>Kubernetes</li>
						<li>Istio</li>
					</ul>
				</section>
				<section>
					<div class="flex items-center child-svg:mr-2 child-svg:text-cyan-950">
						<!-- <ContactIcon size="36" /> -->
						<h2>Contact</h2>
					</div>
					<ul
						class="grid gap-2 grid-cols-1 text-lg text-left mt-4 heir-strong:mr-2 child:bg-slate-100 child:p-2 child:flex child:flex-col child:sm:flex-row"
					>
						<li>
							<strong>Email:</strong>
							<span>pyros2097@gmail.com</span>
						</li>
						<li>
							<strong>Github:</strong>
							<a class="text-blue-900" href="https://github.com/pyrossh">
								https://github.com/pyrossh
							</a>
						</li>
						<li>
							<strong>LinkedIn:</strong>
							<a class="text-blue-900" href="https://www.linkedin.com/in/peter-john-in">
								https://www.linkedin.com/in/pyrossh
							</a>
						</li>
					</ul>
				</section>
			</div>
		</div>
	</div>
</div>

<style>
	h2 {
		--at-apply: text-xl font-semibold middle;
	}
</style>
