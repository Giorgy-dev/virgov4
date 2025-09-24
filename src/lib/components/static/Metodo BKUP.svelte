<script lang="ts">
	import { Card } from 'flowbite-svelte';

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

<!--Metodo-->
<div class="h-fit w-full snap-center overflow-hidden p-12" id={metodo.id}>
	<div
		class="flex h-fit w-full flex-col rounded-[24px] border border-gray-200/50 bg-gray-200/8 p-12"
	>
		<div class="items-left flex h-fit w-fit flex-col gap-1 lg:p-4 text-left lg:p-1 lg:p-4">
			<h1 class="mb-4 text-4xl font-medium">{metodo.title}</h1>
			<div class="flex flex-row gap-1 lg:p-4 pt-10">
				{#each metodo.steps as step, index}
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
		</div>
	</div>
</div>
