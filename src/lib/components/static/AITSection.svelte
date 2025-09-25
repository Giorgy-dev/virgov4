<script lang="ts">
	import { page } from '$app/stores';
</script>

<!-- CSAISection -->
<div class="h-fit w-full snap-center p-4 lg:p-12" id="strumenti-complessi-spiegati">
	<div
		class="flex h-full w-full flex-col gap-0 overflow-hidden rounded-[24px] border border-gray-200/50 bg-gray-200/8"
	>
		<div class="flex flex-col-reverse gap-4 lg:flex-row lg:gap-10">
			<div class="relative flex h-full w-full flex-col gap-10 p-10 lg:max-w-1/2 lg:p-24">
				<h1 class="text-4xl font-medium lg:p-0 lg:px-0">
					Strumenti complessi spiegati in modo semplice.
				</h1>
				<p class="text-xl!">
					Organizziamo e strutturiamo percorsi formativi completamente personalizzati dove
					insegniamo ai tuoi collaboratori e ai membri del tuo Team come utilizzare l’intelligenza
					artificiale in modo efficace e produttivo.
				</p>
				<div class="hidden lg:block lg:min-h-10"></div>
				<a
					href="{$page.url.pathname}#contact"
					class="link link-hover inline-block w-fit rounded-[11px] bg-brand-500 px-6 py-2 text-white transition-all duration-200 hover:scale-101 hover:bg-brand-700 lg:max-w-fit"
					>Il primo passo è una chiacchierata</a
				>
			</div>
		</div>
	</div>
</div>
