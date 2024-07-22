<script>
	import Icon from '@iconify/svelte';
	import Slide from '$lib/components/Slide.svelte';
	import PlayStoreIcon from '$lib/assets/icons/playstore.svg?component';
	import AppStoreIcon from '$lib/assets/icons/appstore.svg?component';
	import onlyBiblePng from '$lib/assets/logos/onlybible.png?enhanced';
	import pyrosshPng from '$lib/assets/logos/pyrossh.png?enhanced';
	import stats from '$lib/assets/logos/stats.png?enhanced';
	import brave from '$lib/assets/logos/brave.png?enhanced';
	import code from '$lib/assets/logos/code.png?enhanced';
	import helix from '$lib/assets/logos/helix.png?enhanced';
	import fish from '$lib/assets/logos/fish.png?enhanced';
	import iterm from '$lib/assets/logos/iterm.png?enhanced';
	import slurp from '$lib/assets/logos/slurp.png?enhanced';
	import curve from '$lib/assets/logos/curve.png?enhanced';
</script>

<svelte:head>
	<title>pyrossh</title>
	<meta
		name="description"
		content="A fullstack developer from Bangalore who likes to create frameworks and programming languages."
	/>
</svelte:head>

<div class="mx-auto mb-10">
	<div>
		<h1 class="text-3xl font-bold mb-4">Hello!</h1>
		<p>
			I'm a full-stack engineer from Bengaluru, India named
			<a
				class="underline"
				href="https://www.linkedin.com/in/pyrossh"
				target="_blank"
				rel="noopener noreferrer"
			>
				<strong>Peter John</strong>
			</a>. I have the good fortune to write code for a living.
		</p>
		<p>
			At the moment, Equal Experts employs me. While I've experimented with functional programming
			languages like Haskell, Idris, and Koka, I prefer to use statically typed imperative
			programming languages like Rust, Go, and Java. I've generally worked for new businesses and
			corporations that focus on products. Throughout these early years of launch, I have learned a
			great deal about the healthcare and financial industries.
		</p>
		<p>
			I enjoy working on open-source projects, and during the last decade, I've created a number of
			valuable projects that are extensively utilized by people worldwide.
		</p>
		<div>
			<div class="flex items-center mt-8 mb-4">
				<Icon class="text-pink-800 mr-2" icon="ant-design:project-outlined" width="36" />
				<h2>Projects</h2>
			</div>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
				<Slide title="rust-embed" link="https://github.com/pyrossh/rust-embed">
					<p>
						A rust proc-macro which loads files into the rust binary at compile time during release
						and loads the file from the fs during dev
					</p>
				</Slide>
				<Slide title="pyrossh.dev" link="https://github.com/pyrossh/pyrossh.dev">
					<div slot="icon">
						<enhanced:img class="mr-2 w-9 rounded-xl" src={pyrosshPng} alt="pyrossh website" />
					</div>
					<p>
						木 Personal website of pyrossh. Built with
						<span class="*:underline">
							<a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer"
								>sveltekit</a
							>,
							<a href="https://unocss.dev/" target="_blank" rel="noopener noreferrer">unocss</a>,
							<a href="https://iconify.design/" target="_blank" rel="noopener noreferrer">iconify</a
							>,
							<a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">vite</a>.
						</span>
					</p>
				</Slide>
				<Slide title="pacos.sh" link="https://github.com/pyrossh/pacos.sh">
					<p>👾 A statically typed, functional programming language inspired by rust, koka.</p>
					<p>WIP to support compilation to WASM.</p>
				</Slide>
				<Slide title="onlybible.app" link="/only-bible-app" isExternal={false}>
					<div slot="icon">
						<enhanced:img class="mr-2 w-9 rounded-xl" src={onlyBiblePng} alt="Only Bible App" />
					</div>
					<p>
						The only bible app you will ever need. No ads, No in-app purchases, No distractions.
					</p>
				</Slide>
				<section>
					<div class="flex items-center">
						<Icon class="text-green-800 mr-2" icon="eos-icons:hardware-circuit" width="36" />
						<h2>Hardware</h2>
					</div>
					<ul class="grid gap-2 grid-cols-1 text-center mt-4 *:bg-gray-200 *:p-1">
						<li>Macbook Pro M3 Laptop</li>
						<li>LG 27 inch Ultrafine Ergo 4K Monitor</li>
						<li>Logitech Mx Keys Mini Keyboard</li>
						<li>Logitech MX Anywhere 3S Mouse</li>
						<li>Anker PowerConf C300 Webcam</li>
					</ul>
				</section>
				<section>
					<div class="flex items-center">
						<Icon class="text-blue-800 mr-2" icon="eos-icons:software-outlined" width="36" />
						<h2>Software</h2>
					</div>
					<ul class="grid gap-2 grid-cols-3 text-center mt-4 *:bg-gray-200 *:p-2 *:pb-4">
						<li>
							<a
								class="soft-link"
								href="https://github.com/exelban/stats"
								target="_blank"
								rel="noopener noreferrer"
							>
								Stats
								<enhanced:img class="soft-icon" src={stats} alt="Stats" />
							</a>
						</li>
						<li>
							<a
								class="soft-link"
								href="https://github.com/brave/brave-browser"
								target="_blank"
								rel="noopener noreferrer"
							>
								Brave
								<enhanced:img class="soft-icon" src={brave} alt="Brave" />
							</a>
						</li>
						<li>
							<a
								class="soft-link"
								href="https://github.com/microsoft/vscode"
								target="_blank"
								rel="noopener noreferrer"
							>
								VS Code
								<enhanced:img class="soft-icon" src={code} alt="VsCode" />
							</a>
						</li>
						<li>
							<a
								class="soft-link"
								href="https://github.com/helix-editor/helix"
								target="_blank"
								rel="noopener noreferrer"
							>
								Helix
								<enhanced:img class="soft-icon" src={helix} alt="Helix" />
							</a>
						</li>
						<li>
							<a
								class="soft-link"
								href="https://github.com/fish-shell/fish-shell"
								target="_blank"
								rel="noopener noreferrer"
							>
								Fish
								<enhanced:img class="soft-icon" src={fish} alt="Fish" />
							</a>
						</li>
						<li>
							<a
								class="soft-link"
								href="https://github.com/gnachman/iTerm2"
								target="_blank"
								rel="noopener noreferrer"
							>
								iTerm2
								<enhanced:img class="soft-icon" src={iterm} alt="iterm2" />
							</a>
						</li>
						<li>
							<a
								class="soft-link"
								href="https://colorslurp.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								Slurp
								<enhanced:img class="soft-icon" src={slurp} alt="slurp" />
							</a>
						</li>
						<li>
							<a
								class="soft-link"
								href="https://www.vectornator.io"
								target="_blank"
								rel="noopener noreferrer"
							>
								Curve
								<enhanced:img class="soft-icon" src={curve} alt="curve" />
							</a>
						</li>
					</ul>
				</section>
				<section>
					<div class="flex items-center">
						<Icon class="text-amber-900 mr-2" icon="mdi:file-tree-outline" width="36" />
						<h2>Interests</h2>
					</div>
					<ul class="grid gap-2 grid-cols-3 text-center mt-4 *:bg-slate-100 *:p-1">
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
					<div class="flex items-center">
						<Icon class="text-cyan-950 mr-2" icon="mdi-contact-outline" width="36" />
						<h2>Contact</h2>
					</div>
					<ul
						class="grid gap-2 grid-cols-1 text-left mt-4 *:bg-slate-100 *:p-2 *:flex *:flex-col *:items-baseline *:sm:flex-row"
					>
						<li>
							<strong class="mr-2">Email:</strong>
							<span>pyros2097@gmail.com</span>
						</li>
						<li>
							<strong class="mr-2">Github:</strong>
							<a class="text-blue-900" href="https://github.com/pyrossh">
								https://github.com/pyrossh
							</a>
						</li>
						<li>
							<strong class="mr-2">LinkedIn:</strong>
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

<style lang="postcss">
	h2 {
		@apply text-xl font-semibold;
	}

	section {
		@apply flex flex-col mt-4 mx-1;
	}

	.soft-link {
		@apply text-base text-blue-900 flex flex-col items-center;
	}

	.soft-icon {
		@apply w-12 h-12;
	}
</style>
