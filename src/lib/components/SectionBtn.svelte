<script lang="ts">
	import { page } from '$app/stores';

	let cta: CTA = $props();

	type CTA = {
		label: string;
		isInside?: boolean;
		link: string;
	};

	// svelte-ignore non_reactive_update
	let button: HTMLAnchorElement;
</script>

{#if cta.isInside}
	<a
		bind:this={button}
		class="inline-block w-fit lg:max-w-fit max-w-[240px] rounded-[11px] bg-brand-600 px-6 py-2 text-white hover:bg-brand-700"
		href="{$page.url.pathname}#{cta.link}">{cta.label}</a
	>
{:else}
	<a
		target="_blank"
		href={cta.link}
		class="inline-block w-fit lg:max-w-fit max-w-[200px] rounded-[11px] bg-brand-600 px-6 py-2 text-white hover:bg-brand-700"
	>
		{cta.label}
	</a>
{/if}
