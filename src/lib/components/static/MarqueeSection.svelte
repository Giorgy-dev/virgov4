<script lang="ts">
	import Marquee from 'svelte-fast-marquee';
	import Icons from './Icons.svelte';
	const play = true;
	const speedDesktop = 100;
	const speedMobile = 40;
</script>

<div class="h-fit w-full snap-center p-4 lg:p-12" id="easy-fast-virgo">
	<div
		class="grid h-full w-full flex-col place-items-center gap-0 overflow-hidden rounded-[24px] border border-gray-200/50 bg-gray-200/8 p-4 lg:p-12"
	>
		<div class="flex w-full flex-col gap-0 overflow-hidden lg:flex-row">
			<div class="h-fit w-full lg:w-2/3">
				<div class="relative z-100 flex h-full w-full flex-col items-start p-6 lg:p-10">
					<h1 class="mb-4 text-4xl font-medium lg:p-0">Easy, fast, Virgo</h1>
					<p class=" pb-4 text-xl! lg:max-w-2/5">
						Dai una super carica al tuo Team grazie al nostro software interno!
					</p>
					<p class=" animate-fade pb-4 text-xl! text-brand-500! lg:max-w-2/5">Coming soon...</p>
				</div>
			</div>
			<div class="relative h-fit w-full grow overflow-hidden">
				<div class="absolute z-20 h-full w-full">
					<div class="relative flex h-full w-full flex-row">
						<div class="w-20 bg-linear-to-r from-white from-20% to-transparent lg:w-60"></div>
						<div class="grow"></div>
						<div class="w-20 bg-linear-to-l from-white from-20% to-transparent lg:w-60"></div>
					</div>
				</div>
				<div class="relative z-10 hidden flex-col gap-8 pb-6 lg:flex lg:pt-40 lg:pb-4">
					<Marquee pauseOnHover={false} gap={'32px'} direction="left" speed={speedDesktop} {play}>
						<Icons />
					</Marquee>
					<Marquee pauseOnHover={false} gap={'32px'} direction="right" speed={speedDesktop} {play}>
						<Icons />
					</Marquee>
				</div>
				<div class="relative z-10 flex flex-col gap-4 pb-6 lg:hidden lg:pt-40 lg:pb-4">
					<Marquee pauseOnHover={false} gap={'16px'} direction="left" speed={speedMobile} {play}>
						<Icons />
					</Marquee>
					<Marquee pauseOnHover={false} gap={'16px'} direction="right" speed={speedMobile} {play}>
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
			opacity: 0.5;
		}
		50% {
			opacity: 0.1;
		}
		to {
			opacity: 0.5;
		}
	}
</style>
