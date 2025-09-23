<script lang="ts">
	import home from '$lib/jsons/home.json';
	import { Video } from 'flowbite-svelte';
	import heroVideo from '$lib/assets/videos/abstract-hero-3.mp4';
	import logo from '$lib/assets/svgs/QST3_LOGHI/QST3_EXTENDED_3.svg';
	import Section from '$lib/components/Section.svelte';
	//import Contact from '$lib/components/Contact.svelte';
	import { page } from '$app/stores';
</script>

<div class="flex flex-col gap-12">
	<!--* HERO *-->
	<div class="flex h-dvh w-screen items-center justify-center overflow-x-hidden text-4xl">
		<div class="absolute top-12 left-12">
			<img src={logo} alt="Virgo" class="h-8 w-auto" />
		</div>

		<div class="rounded-full p-4 px-6">
			<h2 class="flex flex-col items-start gap-4 text-6xl text-white! lg:flex-row lg:gap-0">
				<div class="rounded-full border-2 border-white p-2 px-4 text-inherit">People</div>
				<div class="p-2 text-inherit">Beyond</div>
				<div class="rounded-full border-2 border-white p-2 px-4 text-inherit">AI</div>
			</h2>
		</div>

		<div class="absolute bottom-0 left-0 hidden w-full flex-row gap-4 p-12 lg:flex">
			{#each home.labels as item}
				<a
					href="{$page.url.pathname}#{item.link}"
					class="flex w-full flex-row items-center gap-2 rounded-[12px] border border-white bg-black/16 px-4 py-2
					text-white! transition-all duration-200 hover:scale-101 hover:bg-brand-500/100 hover:text-white! lg:flex"
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

		<Video
			src={heroVideo}
			trackSrc="abstract-hero-2.mp4"
			muted
			loop
			autoplay
			class="absolute top-0 left-0 -z-10 h-dvh w-screen object-cover"
		/>
	</div>

	<div class="flex w-full flex-row flex-wrap gap-4 p-4 lg:hidden">
		{#each home.labels as item}
			<a
				href="{$page.url.pathname}#{item.link}"
				class="flex w-full flex-row items-center gap-2 rounded-[12px] border border-brand-500 bg-brand-500/16 px-4 py-2
					text-brand-500! transition-all duration-200 hover:scale-101 hover:bg-brand-500/100 hover:text-white! lg:flex"
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

	<!-- content here -->
	<div class="h-svh w-full snap-center lg:p-12 p-4" id="people-beyond-ai">
		<div
			class="grid h-full w-full flex-col place-items-center gap-0 rounded-[24px] border border-gray-200/50 bg-gray-200/8 p-4 lg:p-12"
		>
			<div class="relative">
				<div class="relative z-100 flex w-full h-full flex-col items-center">
					<h1 class="mb-4 text-center text-4xl font-medium lg:p-0 p-8">People Beyond AI</h1>
					<p class="pb-4 text-center text-xl! lg:max-w-2/3">
						Una visione che mette al centro i tuoi collaboratori e il tuo team, miglioriamo le
						performance con strumenti avanzati ma che aiutano concretamente il tuo lavoro.
					</p>
				</div>
				<span class="absolute top-0 left-[50%] z-10 flex size-30 -translate-x-[50%]">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-25"
					></span>
				</span>
				<span class="absolute top-5 left-[50%] z-10 flex size-20 -translate-x-[50%]">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-25"
					></span>
				</span>
			</div>
		</div>
	</div>

	<div class="snap-y snap-mandatory overflow-y-auto">
		{#each home.sections as item}
			<Section {...item} />
		{/each}
	</div>
	<!--
	<Contact />
	-->
</div>
<!--
	<img src={grid} alt="" class="mb-12 w-full" />
-->
