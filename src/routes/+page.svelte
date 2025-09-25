<script lang="ts">
	import home from '$lib/jsons/home.json';
	import { Hr, Video } from 'flowbite-svelte';
	import heroVideo from '$lib/assets/videos/abstract-hero-3.mp4';
	import logo from '$lib/assets/svgs/QST3_LOGHI/QST3_EXTENDED_3.svg';
	import { page } from '$app/stores';
	import Contact from '$lib/components/Contact.svelte';
	import Payoff from '$lib/components/static/Payoff.svelte';
	import ContactWA from '$lib/components/static/ContactWA.svelte';
	import Metodo from '$lib/components/static/Metodo.svelte';
	import MarqueeSection from '$lib/components/static/MarqueeSection.svelte';
	import CSAISection from '$lib/components/static/CSAISection.svelte';
	import DB2BSection from '$lib/components/static/DB2BSection.svelte';
	import AITSection from '$lib/components/static/AITSection.svelte';
</script>

<div class="flex flex-col gap-12">
	<!--* HERO *-->
	<div class="flex h-dvh w-screen items-center justify-center overflow-x-hidden text-4xl">
		<div class="absolute top-12 left-12">
			<img src={logo} alt="Virgo" class="h-8 w-auto" />
		</div>

		<div class="rounded-full p-1 px-6 lg:p-4">
			<h2 class="flex flex-col items-start gap-1 text-6xl text-white! lg:flex-row lg:gap-0 lg:p-4">
				<div class="rounded-full border-2 border-white p-2 px-4 text-inherit">People</div>
				<div class="p-2 text-inherit">Beyond</div>
				<div class="rounded-full border-2 border-white p-2 px-4 text-inherit">AI</div>
			</h2>
		</div>

		<div class="absolute bottom-0 hidden w-full place-content-center p-12 lg:grid">
			<div class="grid grid-cols-2 gap-4">
				{#each home.labels as item}
					<a
						href="{$page.url.pathname}#{item.link}"
						class="flex w-full flex-row items-center gap-2 rounded-[12px] bg-brand-500 px-4 py-2 text-white
					 transition-all duration-200 hover:scale-101 hover:bg-brand-700"
					>
						<h1 class="grow text-xl font-medium text-inherit!">{item.label}</h1>
						<svg
							class="h-6 w-6 text-inherit! transition-all duration-200 hover:scale-120"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 12H5m14 0-4 4m4-4-4-4"
							/>
						</svg>
					</a>
				{/each}
			</div>
		</div>

		<Video
			src={heroVideo}
			trackSrc="abstract-hero-2.mp4"
			muted
			loop
			autoplay
			preload="none"
			disablepictureinpicture
			playsinline
			controlslist="nofullscreen nodownload noremoteplayback"
			class="absolute top-0 left-0 -z-10 h-dvh w-screen object-cover"
		/>
	</div>

	<div class="flex w-full flex-row flex-wrap gap-4 p-4 lg:hidden">
		{#each home.labels as item}
			<a
				href="{$page.url.pathname}#{item.link}"
				class="flex w-full flex-row items-center gap-2 rounded-[12px] bg-brand-500 px-4 py-2 text-white
					 transition-all duration-200 hover:scale-101 hover:bg-brand-700"
			>
				<h1 class="grow text-xl font-medium text-inherit!">{item.label}</h1>
				<svg
					class="h-6 w-6 text-inherit! transition-all duration-200 hover:scale-120"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 12H5m14 0-4 4m4-4-4-4"
					/>
				</svg>
			</a>
		{/each}
	</div>

	<!-- 
	<div class="snap-y snap-mandatory overflow-y-auto">
		{#each home.sections as item}
		<Section {...item} />
		{/each}
	</div> 
	-->

	<CSAISection />
	<Metodo />
	<DB2BSection />
	<AITSection />
	<MarqueeSection />
	<Payoff />
	<Contact />
	<div class="-my-10 px-20">
		<Hr class="w-full"></Hr>
	</div>
	<ContactWA />
</div>
