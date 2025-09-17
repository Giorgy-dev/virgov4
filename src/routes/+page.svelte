<script lang="ts">
	import home from '$lib/jsons/home.json';

	import { Video } from 'flowbite-svelte';
	import heroVideo from '$lib/assets/videos/abstract-hero-2.mp4';
	import logo from '$lib/assets/svgs/QST3_LOGHI/QST3_EXTENDED_2.svg';
	import Section from '$lib/components/Section.svelte';
	import Contact from '$lib/components/Contact.svelte';
	//import grid from '$lib/assets/svgs/grid.svg';
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

		<div class="absolute bottom-0 hidden w-full flex-row gap-12 bg-white p-12 lg:flex">
			{#each home.highlited as item}
				<div class="flex max-w-1/4 flex-col gap-4">
					<h1 class="text-xl font-bold text-black!">{item.title}</h1>
					<p class="text-lg text-black!">{item.description}</p>
				</div>
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

	<div class="flex w-full flex-col gap-12 p-4 lg:hidden">
		{#each home.highlited as item}
			<div class="flex-col">
				<h1 class="text-xl font-bold">{item.title}</h1>
				<p class="text-lg">{item.description}</p>
			</div>
		{/each}
	</div>

	{#each home.sections as item}
		<Section {...item} />
	{/each}
	<Contact />
</div>
<!--
	<img src={grid} alt="" class="mb-12 w-full" />
-->
