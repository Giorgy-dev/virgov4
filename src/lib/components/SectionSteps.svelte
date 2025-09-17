<script lang="ts">
	import type { Section } from './Types';
	let steps: Section['steps'] = $props();
</script>

{#if steps}
	<div class="flex flex-col gap-8 pt-10">
		{#each steps as step, index}
			<div class="flex flex-col gap-4">
				<h1 class="text-xl font-bold">{index + 1}-{step.title}</h1>
				<p class="pb-4 text-xl! lg:max-w-[840px]">{step.description}</p>
			</div>
		{/each}
	</div>
{/if}
