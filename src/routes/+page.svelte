<script lang="ts">
	import home from '$lib/jsons/home.json';
	import { Card, Hr, Video } from 'flowbite-svelte';
	import heroVideo from '$lib/assets/videos/abstract-hero-3.mp4';
	import logo from '$lib/assets/svgs/QST3_LOGHI/QST3_EXTENDED_3.svg';
	//import Section from '$lib/components/Section.svelte';
	//import Contact from '$lib/components/Contact.svelte';
	import { page } from '$app/stores';
	import Contact from '$lib/components/Contact.svelte';

	const metodo = {
		title: 'Il metodo Virgo',
		id: 'il-metodo-virgo',
		steps: [
			{
				title: 'Strategia e analisi del contesto',
				description: [
					'Ogni progetto parte da una fase di valutazione e pianificazione, in cui analizziamo la maturità digitale della tua azienda e gli obiettivi che desideri raggiungere.',
					'Attraverso workshop e confronti diretti con il tuo team, costruiamo una roadmap strategica che bilancia innovazione e concretezza.',
					'Questo approccio ci permette di identificare le opportunità a maggior impatto, evitando soluzioni improvvisate o non collaudate. L’obiettivo è creare basi solide affinché la tecnologia diventi un alleato reale, in linea con i tuoi processi e con la tua visione di crescita.'
				]
			},
			{
				title: 'Progettazione collaborativa e soluzioni su misura',
				description: [
					'Non crediamo in modelli standardizzati, ma in soluzioni che nascono dalla conoscenza interna della tua azienda e dalle competenze delle persone che vi lavorano.',
					'Per questo, ci immergiamo nel tuo settore, nei processi e nelle sfide quotidiane, così da capire come l’AI possa generare valore concreto.',
					'Disegniamo architetture scalabili e integrate con gli strumenti che già utilizzi, scegliendo tecnologie affidabili e testate sul campo. In questo modo, l’AI diventa un supporto intelligente che amplifica l’esperienza delle persone, senza sostituirla, rendendo i flussi di lavoro più fluidi ed efficienti.'
				]
			},
			{
				title: 'Implementazione, adozione, miglioramento continuo',
				description: [
					'Trasformiamo le idee in sistemi funzionanti, progettati per adattarsi al contesto reale della tua azienda e non solo a scenari teorici.',
					'Seguiamo passo dopo passo l’adozione delle nuove soluzioni, affiancando il tuo team con formazione mirata e strumenti di change management. Questo garantisce che la tecnologia venga accolta e compresa, anziché percepita come un ostacolo.',
					'Una volta implementato il sistema, monitoriamo i risultati attraverso KPI e cicli di miglioramento continuo, così da ottimizzare le performance e generare valore crescente nel tempo. L’AI diventa così un percorso evolutivo, in cui le persone restano sempre al centro.'
				]
			},
			{
				title: 'Support non stop, 24/7!',
				description: [
					'Mettici alla prova e scoprirai che il nostro team di assistenza - fatto di persone - sarà sempre al tuo fianco.',
					'Ti garantiamo un supporto costante, monitorando le soluzioni implementate e intervenendo tempestivamente ogni volta che serve.',
					'La nostra presenza non si limita alla fase iniziale: restiamo al tuo fianco nel tempo, accompagnandoti in ogni evoluzione. E se ti serve una mano fuori dagli orari tradizionali, puoi contare su di noi anche durante il weekend.'
				]
			}
		]
	};
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

		<div class="absolute bottom-0 left-0 hidden w-full flex-row gap-4 p-12 lg:flex">
			{#each home.labels as item}
				<a
					href="{$page.url.pathname}#{item.link}"
					class="flex w-full flex-row items-center gap-2 rounded-[12px] border border-white bg-black/16 px-4 py-2
					text-white! transition-all duration-200 hover:scale-101 hover:bg-brand-500/100 hover:text-white! lg:flex"
				>
					<h1 class="grow text-xl font-medium text-inherit!">{item.label}</h1>
					<svg
						class="h-6 w-6 text-inherit! transition-all duration-200 hover:scale-120"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 12H5m14 0-4 4m4-4-4-4"
						/>
					</svg>
				</a>
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

	<div class="flex w-full flex-row flex-wrap gap-4 p-4 lg:hidden">
		{#each home.labels as item}
			<a
				href="{$page.url.pathname}#{item.link}"
				class="flex w-full flex-row items-center gap-2 rounded-[12px] border border-brand-500 bg-brand-500/16 px-4 py-2
					text-brand-500! transition-all duration-200 hover:scale-101 hover:bg-brand-500/100 hover:text-white! lg:flex"
			>
				<h1 class="grow text-xl font-medium text-inherit!">{item.label}</h1>
				<svg
					class="h-6 w-6 text-inherit! transition-all duration-200 hover:scale-120"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 12H5m14 0-4 4m4-4-4-4"
					/>
				</svg>
			</a>
		{/each}
	</div>

	<!--Metodo-->
	<div class="h-fit w-full snap-center overflow-hidden p-12" id={metodo.id}>
		<div
			class="flex h-fit w-full flex-col rounded-[24px] border border-gray-200/50 bg-gray-200/8 p-12"
		>
			<div class="items-left flex h-fit w-fit flex-col gap-4 text-left lg:p-4">
				<h1 class="mb-4 text-4xl font-medium">{metodo.title}</h1>
				<div class="flex flex-row gap-4 pt-10">
					{#each metodo.steps as step, index}
						<div class="flex grow flex-col gap-10 even:pt-20">
							<div class="flex flex-col gap-4">
								<h1 class="text-4xl font-medium">
									{index + 1}.
								</h1>
								<h1 class="text-xl font-medium lg:max-w-[340px]">
									{step.title}
								</h1>
							</div>
							<div class="flex flex-row flex-wrap gap-4">
								{#each step.description as desc}
									<Card class="max-w-[460px] px-8 py-6">
										<p class="pb-4 text-xl!">{desc}</p>
									</Card>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- PAYOFF -->
	<div class="h-svh w-full snap-center p-4 lg:p-12" id="people-beyond-ai">
		<div
			class="grid h-full w-full flex-col place-items-center gap-0 overflow-hidden rounded-[24px] border border-gray-200/50 bg-gray-200/8 p-4 lg:p-12"
		>
			<div class="relative">
				<div class="onscroll-enter relative z-100 flex h-full w-full flex-col items-center">
					<h1 class="mb-4 p-8 text-center text-4xl font-medium lg:p-0">People Beyond AI</h1>
					<p class="pb-4 text-center text-xl! lg:max-w-2/3">
						Una visione che mette al centro i tuoi collaboratori e il tuo team, miglioriamo le
						performance con strumenti avanzati ma che aiutano concretamente il tuo lavoro.
					</p>
				</div>
				<span
					class="absolute -top-[25%] left-[50%] z-10 flex size-120 -translate-x-[50%] lg:-top-40"
				>
					<span
						class="animate-ping-v2 absolute inline-flex h-full w-full rounded-full border-1 border-brand-500"
					></span>
				</span>
				<span class="absolute top-0 left-[50%] z-10 flex size-80 -translate-x-[50%] lg:-top-20">
					<span
						class="animate-ping-v1 absolute inline-flex h-full w-full rounded-full border-1 border-brand-500"
					></span>
				</span>
			</div>
		</div>
	</div>

	<!-- <div class="snap-y snap-mandatory overflow-y-auto">
		{#each home.sections as item}
			<Section {...item} />
		{/each}
	</div> -->

	<Contact />

	<div class="-my-20 p-10">
		<Hr class="w-full">Oppure</Hr>
	</div>

	<div class="grid w-screen place-content-center overflow-hidden">
		<div class="h-fit w-screen snap-center p-4 lg:p-12" id="people-beyond-ai">
			<div
				class="flex h-full w-full flex-col place-items-center gap-8 rounded-[24px] border border-gray-200/50 bg-gray-200/8 p-4 lg:p-12"
			>
				<p class="grow text-center text-xl!">
					Perché proporti una scarrellata di domande e risposte se puoi farci direttamente uno
					squillo o mandarci un whatsapp?
				</p>
				<a
					target="_blank"
					href="https://wa.me/393333218804"
					class="link link-hover inline-block w-fit max-w-[200px] rounded-[11px] bg-brand-600 px-6 py-2 text-white transition-all duration-200 hover:scale-101 hover:bg-brand-700 hover:text-white! lg:max-w-fit"
				>
					<div class="flex flex-row gap-3">
						<div class="grid place-content-center">
							<svg
								fill="#ffffff"
								height="14px"
								version="1.1"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 308 308"
								xml:space="preserve"
							>
								<g id="XMLID_468_">
									<path
										id="XMLID_469_"
										d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"
									/>
									<path
										id="XMLID_470_"
										d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"
									/>
								</g>
							</svg>
						</div>
						WhatsApp +39 393333218804
					</div>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.animate-ping-v1 {
		animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
	}
	.animate-ping-v2 {
		animation: ping 3s cubic-bezier(0, 0, 0.8, 1) infinite;
	}

	@keyframes ping {
		75%,
		100% {
			transform: scale(2);
			opacity: 0;
		}
	}
</style>
