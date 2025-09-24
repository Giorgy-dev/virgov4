<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import type { Section } from './Types';
	let steps: Section['steps'] = $props();
</script>

{#if steps}
	<div class="flex flex-row gap-0 pt-10">
		{#each steps as step, index}
			<div class="flex grow flex-col gap-10 even:pt-20">
				<div class="flex flex-col gap-1 lg:p-4">
					<h1 class="text-4xl font-medium">
						{index + 1}.
					</h1>
					<h1 class="text-xl font-medium lg:max-w-[340px]">
						{step.title}
					</h1>
				</div>
				<div class="flex flex-row flex-wrap gap-1 lg:p-4">
					{#each step.description as desc}
						<Card class="max-w-[460px] px-8 py-6">
							<p class=" pb-4 text-xl!">{desc}</p>
						</Card>
					{/each}
				</div>
			</div>
		{/each}
	</div>
{/if}
