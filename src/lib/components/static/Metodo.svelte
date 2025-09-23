<script lang="ts">
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import { animate } from 'animejs';
	import { onMount } from 'svelte';

	onMount(() => {
		animate('.rotate-loop', { duration: 8000, rotate: '-1turn', ease: 'linear', loop: true });
	});
</script>

<div class="h-fit w-full snap-center p-4 lg:p-12" id="people-beyond-ai">
	<div
		class="h-full w-full flex-col gap-0 overflow-hidden rounded-[12px] border border-gray-200/50 bg-gray-200/8 p-4 lg:p-24"
	>
		<h1 class="mb-4 p-8 text-4xl font-medium lg:p-0">Il nostro metodo</h1>
		<p class="pb-4 text-xl! lg:max-w-1/3">
			Una visione che mette al centro i tuoi collaboratori e il tuo team, miglioriamo le performance
			con strumenti avanzati ma che aiutano concretamente il tuo lavoro.
		</p>
		<div class="flex flex-col gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2 lg:flex-row">
			<!--lg:mt-20 lg:-mb-20-->
			<div class="relative lg:row-span-2 lg:min-w-1/3">
				<div class="relative flex h-full flex-col overflow-hidden rounded-[12px]">
					<div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
						<h1 class="text-4xl font-medium">1.</h1>
						<div class="py-4">
							<Accordion flush>
								<AccordionItem>
									{#snippet header()}<p class="mt-2 text-xl! font-medium max-lg:text-center">
											Strategia e analisi del contesto
										</p>{/snippet}
									<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
										Ogni progetto parte da una fase di valutazione e pianificazione, in cui
										analizziamo la maturità digitale della tua azienda e gli obiettivi che desideri
										raggiungere.
									</p>
									<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
										Attraverso workshop e confronti diretti con il tuo team, costruiamo una roadmap
										strategica che bilancia innovazione e concretezza.
									</p>
									<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
										Questo approccio ci permette di identificare le opportunità a maggior impatto,
										evitando soluzioni improvvisate o non collaudate. L’obiettivo è creare basi
										solide affinché la tecnologia diventi un alleato reale, in linea con i tuoi
										processi e con la tua visione di crescita.
									</p>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
					<div class="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
						<div
							class="absolute inset-x-10 top-10 bottom-0 grid place-items-center overflow-hidden rounded-t-[12px] bg-gray-200/18"
						>
							<div
								class="rotate-loop relative -top-[40%] -left-[50%] h-240 w-240 rounded-[39%] border-2 border-brand-500 bg-brand-500/30"
							></div>
							<div
								class="rotate-loop relative -top-[80%] left-[15%] h-240 w-240 rounded-[41%] border-2 border-brand-500 bg-brand-500/30"
							></div>
						</div>
					</div>
				</div>
				<div
					class="pointer-events-none absolute inset-px rounded-[12px] shadow-sm outline outline-black/5"
				></div>
			</div>
			<div class="flex w-full flex-col gap-4">
				<div class="relative max-lg:row-start-1">
					<div class="relative flex h-fit flex-col overflow-hidden rounded-[12px]">
						<div class="px-8 pt-8 sm:px-10 sm:pt-10">
							<h1 class="text-4xl font-medium">2.</h1>
							<div class="py-4">
								<Accordion flush>
									<AccordionItem>
										{#snippet header()}<p class=" text-xl! font-medium max-lg:text-center">
												Progettazione collaborativa e soluzioni su misura
											</p>{/snippet}
										<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
											Non crediamo in modelli standardizzati, ma in soluzioni che nascono dalla
											conoscenza interna della tua azienda e dalle competenze delle persone che vi
											lavorano.
										</p>
										<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
											Per questo, ci immergiamo nel tuo settore, nei processi e nelle sfide
											quotidiane, così da capire come l’AI possa generare valore concreto.
										</p>
										<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
											Disegniamo architetture scalabili e integrate con gli strumenti che già
											utilizzi, scegliendo tecnologie affidabili e testate sul campo. In questo
											modo, l’AI diventa un supporto intelligente che amplifica l’esperienza delle
											persone, senza sostituirla, rendendo i flussi di lavoro più fluidi ed
											efficienti.
										</p>
									</AccordionItem>
								</Accordion>
							</div>
						</div>
						<div class="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
							<div
								class="absolute inset-x-10 top-10 bottom-0 grid place-items-center overflow-hidden rounded-t-[12px] bg-gray-200/18"
							>
								<div
									class="rotate-loop relative -top-[40%] -left-[50%] h-240 w-240 rounded-[39%] border-2 border-brand-500 bg-brand-500/30"
								></div>
								<div
									class="rotate-loop relative -top-[80%] left-[15%] h-240 w-240 rounded-[41%] border-2 border-brand-500 bg-brand-500/30"
								></div>
							</div>
						</div>
					</div>
					<div
						class="pointer-events-none absolute inset-px rounded-[12px] shadow-sm outline outline-black/5"
					></div>
				</div>
				<div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
					<div class="absolute inset-px rounded-lg bg-white"></div>
					<div class="relative flex h-full flex-col overflow-hidden rounded-[12px]">
						<div class="px-8 pt-8 sm:px-10 sm:pt-10">
							<h1 class="text-4xl font-medium">3.</h1>
							<div class="py-4">
								<Accordion flush>
									<AccordionItem>
										{#snippet header()}<p class="mt-2 text-xl! font-medium max-lg:text-center">
												Implementazione, adozione, miglioramento continuo
											</p>{/snippet}
										<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
											Trasformiamo le idee in sistemi funzionanti, progettati per adattarsi al
											contesto reale della tua azienda e non solo a scenari teorici.
										</p>
										<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
											Seguiamo passo dopo passo l’adozione delle nuove soluzioni, affiancando il tuo
											team con formazione mirata e strumenti di change management. Questo garantisce
											che la tecnologia venga accolta e compresa, anziché percepita come un
											ostacolo.
										</p>
										<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
											Una volta implementato il sistema, monitoriamo i risultati attraverso KPI e
											cicli di miglioramento continuo, così da ottimizzare le performance e generare
											valore crescente nel tempo. L’AI diventa così un percorso evolutivo, in cui le
											persone restano sempre al centro.
										</p>
									</AccordionItem>
								</Accordion>
							</div>
						</div>
						<div class="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
							<div
								class="absolute inset-x-10 top-10 bottom-0 grid place-items-center overflow-hidden rounded-t-[12px] bg-gray-200/18"
							>
								<div
									class="rotate-loop relative -top-[40%] -left-[50%] h-240 w-240 rounded-[39%] border-2 border-brand-500 bg-brand-500/30"
								></div>
								<div
									class="rotate-loop relative -top-[80%] left-[15%] h-240 w-240 rounded-[41%] border-2 border-brand-500 bg-brand-500/30"
								></div>
							</div>
						</div>
					</div>
					<div
						class="pointer-events-none absolute inset-px rounded-[12px] shadow-sm outline outline-black/5"
					></div>
				</div>
			</div>
			<!--lg:-mt-20 lg:mb-20-->
			<div class="relative lg:row-span-2 lg:min-w-1/3">
				<div class="absolute inset-px rounded-[12px] bg-white"></div>
				<div class="relative flex h-full flex-col overflow-hidden rounded-[12px]">
					<div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
						<h1 class="text-4xl font-medium">4.</h1>
						<div class="py-4">
							<Accordion flush>
								<AccordionItem>
									{#snippet header()}<p class="mt-2 text-xl! font-medium max-lg:text-center">
											Support non stop, 24/7!
										</p>{/snippet}
									<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
										Mettici alla prova e scoprirai che il nostro team di assistenza - fatto di
										persone - sarà sempre al tuo fianco.
									</p>
									<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
										Ti garantiamo un supporto costante, monitorando le soluzioni implementate e
										intervenendo tempestivamente ogni volta che serve.
									</p>
									<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
										La nostra presenza non si limita alla fase iniziale: restiamo al tuo fianco nel
										tempo, accompagnandoti in ogni evoluzione. E se ti serve una mano fuori dagli
										orari tradizionali, puoi contare su di noi anche durante il weekend.
									</p>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
						<div class="@container relative min-h-120 w-full h-full grow max-lg:mx-auto max-lg:max-w-sm">
						<div
							class="absolute inset-x-10 top-10 bottom-0 grid place-items-center overflow-hidden rounded-t-[12px] bg-gray-200/18"
						>
							<div
								class="rotate-loop relative -top-[40%] -left-[50%] h-240 w-240 rounded-[39%] border-2 border-brand-500 bg-brand-500/30"
							></div>
							<div
								class="rotate-loop relative -top-[80%] left-[15%] h-240 w-240 rounded-[41%] border-2 border-brand-500 bg-brand-500/30"
							></div>
					</div>
					</div>
				</div>
				<div
					class="pointer-events-none absolute inset-px rounded-[12px] shadow-sm outline outline-black/5"
				></div>
			</div>
		</div>
	</div>
</div>
