<script lang="ts">
	import { page } from '$app/stores';
	import { Animated, PixelMap } from 'svelte-animated-pixels';
	import Marquee from 'svelte-fast-marquee';
	const FRAMES = [
		`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . .
    . . . x . . x x . . . . x . . x . . x x . . . . x . . . 
    . . . x . . x x . . . . x . . x . . x x . . . . x . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . . 
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . . . . . . . . . . x x . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `,
		`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . .
    . . . x . . x x . . . . x . . x . . x x . . . . x . . . 
    . . . x . . x x . . . . x . . x . . x x . . . . x . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . . 
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . . . . . . . . . . x x . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `,
		`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . .
    . . . x . . x x x . . . x . . x . . x x x . . . x . . . 
    . . . x . . x x x . . . x . . x . . x x x . . . x . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . . 
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . . . . . . . . . . x x . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `,
		`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . .
    . . . x . . . x x . . . x . . x . . . x x . . . x . . . 
    . . . x . . . x x . . . x . . x . . . x x . . . x . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . . 
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . . . . . . . . . . x x . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `,
		`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . .
    . . . x . . . x x . . . x . . x . . . x x . . . x . . . 
    . . . x . . . x x . . . x . . x . . . x x . . . x . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . . 
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . . . . . . . . . . x x . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `,
		`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . .
    . . . x . . . x x x . . x . . x . . . x x x . . x . . . 
    . . . x . . . x x x . . x . . x . . . x x x . . x . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . . 
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . . . . . . . . . . x x . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `,
		`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . .
    . . . x . . . . x x . . x . . x . . . . x x . . x . . . 
    . . . x . . . . x x . . x . . x . . . . x x . . x . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . . 
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . . . . . . . . . . x x . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `,
		`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . .
    . . . x . . . . x x . . x . . x . . . . x x . . x . . . 
    . . . x . . . . x x . . x . . x . . . . x x . . x . . . 
    . . . . x x . . . . x x . . . . x x . . . . x x . . . . 
    . . . . . . x x x x . . . . . . . . x x x x . . . . . . 
    . . . . . . . . . . . . . x x . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `
	];
</script>

<!-- CSAISection -->
<div class="h-fit w-full snap-center p-4 lg:p-12" id="trasforma-la-tua-visione">
	<div
		class="flex h-full w-full flex-col gap-0 overflow-hidden rounded-[24px] border border-gray-200/50 bg-gray-200/8"
	>
		<div class="flex flex-col gap-4 lg:flex-row lg:gap-10">
			<div class="relative flex h-full w-full flex-col gap-10 p-24 lg:max-w-1/2">
				<h1 class="text-4xl font-medium lg:p-0 lg:px-0">Trasforma la tua visione</h1>
				<p class="text-xl!">
					Strategia, agenti personalizzati, sistemi di ricerca e molto altro. Costruiamo soluzioni
					AI su misura che automatizzano i processi e forniscono interazioni più intelligenti.
					Questo sistema ti permetterà di azzerare i tempi morti e aumentare la produttività della
					tua azienda.
				</p>
				<a
					href="{$page.url.pathname}#contact"
					class="link link-hover inline-block w-fit rounded-[11px] bg-brand-600 px-6 py-2 text-white transition-all duration-200 hover:scale-101 hover:bg-brand-700 hover:text-white! lg:max-w-fit"
					>Il primo passo è una chiacchierata</a
				>
			</div>
			<div class=" grow bg-gray-200/18 py-12 lg:py-40">
				<div class=" flex h-full w-full flex-col items-center">
					<Marquee pauseOnHover={false} direction="left" speed={120} play={true}>
						<Animated frames={FRAMES} let:using={{ map }}>
							<PixelMap scale={10} {map} color={'rgb(201, 201, 201)'} />
						</Animated>
					</Marquee>
				</div>
			</div>
		</div>
	</div>
</div>
