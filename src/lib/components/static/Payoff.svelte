<!-- PAYOFF -->
<div class="h-svh w-full snap-center p-4 lg:p-12" id="people-beyond-ai">
	<div
		class="grid h-full w-full flex-col place-items-center gap-0 overflow-hidden rounded-[24px] border border-gray-200/50 bg-gray-200/8 p-4 lg:p-12"
	>
		<div class="relative">
			<div class="onscroll-enter relative z-100 flex h-full w-full flex-col items-center">
				<h1 class="mb-4 p-8 text-center text-4xl font-medium lg:p-0">People Beyond AI</h1>
				<p class="pb-4 text-center text-xl! lg:max-w-2/5">
					Una visione che mette al centro i tuoi collaboratori e il tuo team, miglioriamo le
					performance con strumenti avanzati ma che aiutano concretamente il tuo lavoro.
				</p>
			</div>
			<span class="absolute -top-[25%] left-[50%] z-10 flex size-120 -translate-x-[50%] lg:-top-40">
				<span
					class="animate-ping-v2 absolute inline-flex h-full w-full rounded-full border-1 border-brand-500 bg-radial from-transparent from-[65%] to-brand-500/80"
				></span>
			</span>
			<span class="absolute top-0 left-[50%] z-10 flex size-80 -translate-x-[50%] lg:-top-20">
				<span
					class="animate-ping-v1 absolute inline-flex h-full w-full rounded-full border-1 border-brand-500 bg-radial from-transparent from-[65%] to-brand-500/80"
				></span>
			</span>
		</div>
	</div>
</div>

<style>
	.animate-ping-v1 {
		animation: ping 5s cubic-bezier(0, 0, 0.2, 1) infinite;
	}
	.animate-ping-v2 {
		animation: ping 5s cubic-bezier(0, 0, 0.8, 1) infinite;
	}

	@keyframes ping {
		55% {
			opacity: 1;
		}
		100% {
			transform: scale(2);
			opacity: 0;
		}
	}
</style>
