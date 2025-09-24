<script lang="ts">
	import SectionBtn from './SectionBtn.svelte';
	import SectionSteps from './SectionSteps.svelte';
	import type { Section } from './Types';
	let section: Section = $props();
</script>

<!-- content here -->
<div class="w-full snap-center h-svh p-12" id={section.id}>
	<div
		class="flex h-full w-full flex-col rounded-[24px] border border-gray-200/50 bg-gray-200/8 p-12"
	>
		<div class="items-lrft flex w-fit flex-col gap-1 lg:p-4 text-left lg:p-1 lg:p-4">
			<h1 class="text-4xl font-medium mb-4">{section.title}</h1>
			{#if section.description}
				<div class="flex flex-col gap-2">
					{#each section.description as desc}
						<p class=" pb-4 text-left text-xl! lg:max-w-1/2">{desc}</p>
					{/each}
				</div>
			{/if}
			{#if section.steps}
				<SectionSteps {...section.steps} />
			{/if}
			{#if section.cta}
				<SectionBtn {...section.cta} />
			{/if}
		</div>
	</div>
</div>
