<script lang="ts">
	import SectionBtn from './SectionBtn.svelte';
	import SectionSteps from './SectionSteps.svelte';
	import type { Section } from './Types';
	let section: Section = $props();
</script>

<!-- content here -->
<div class="grid w-full place-items-center px-10" id={section.id}>
	<div class="flex w-fit flex-col items-center gap-4 text-center lg:p-4">
		<h1 class="text-2xl font-bold">{section.title}</h1>
		{#if section.description}
			<div class="flex flex-col gap-2">
				{#each section.description as desc}
					<p class="pb-4 text-center text-xl! lg:max-w-[840px]">{desc}</p>
				{/each}
			</div>
		{/if}
		{#if section.cta}
			<SectionBtn {...section.cta} />
		{/if}
		<SectionSteps {...section.steps} />
	</div>
</div>
