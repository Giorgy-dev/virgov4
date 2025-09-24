<script lang="ts">
	import Marquee from 'svelte-fast-marquee';
	import Icons from './Icons.svelte';
	const play = true;
	const speed = 150;
</script>

<div class="h-fit w-full snap-center p-4 lg:p-12" id="easy-fast-virgo">
	<div
		class="grid h-full w-full flex-col place-items-center gap-0 overflow-hidden rounded-[24px] border border-gray-200/50 bg-gray-200/8 p-4 lg:p-12"
	>
		<div class="flex w-full flex-col gap-0 overflow-hidden lg:flex-row">
			<div class="h-fit w-full lg:w-2/3">
				<div class="relative z-100 flex h-full w-full flex-col items-start p-6 lg:p-10">
					<h1 class="mb-4 text-4xl font-medium lg:p-0">Easy, fast, VIRGO</h1>
					<p class="pb-4 text-xl! lg:max-w-2/5">
						Dai una super carica al tuo Team grazie al nostro software interno!
					</p>
					<p class="pb-4 text-xl! lg:max-w-2/5 animate-fade text-brand-500!">Coming soon...</p>
				</div>
			</div>
			<div class="relative h-fit w-full grow overflow-hidden">
				<div class="absolute z-20 h-full w-full">
					<div class="relative flex h-full w-full flex-row">
						<div class="w-60 bg-linear-to-r from-white from-20% to-transparent"></div>
						<div class="grow"></div>
						<div class="w-60 bg-linear-to-l from-white from-20% to-transparent"></div>
					</div>
				</div>
				<div class="relative z-10 flex flex-col gap-8 lg:pt-40">
					<Marquee pauseOnHover={false} direction="left" {speed} {play}>
						<Icons />
					</Marquee>
					<Marquee pauseOnHover={false} direction="right" {speed} {play}>
						<Icons />
					</Marquee>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.animate-fade {
		animation: fade 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
	}
	@keyframes fade {
		0% {
			opacity: .5;
		}
		50% {
			opacity: 0.1;
		}
		to {
			opacity: .5;
		}
	}
</style>
