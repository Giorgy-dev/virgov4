<script lang="ts">
	import { Label, Input } from 'flowbite-svelte';
	import { Radio } from 'flowbite-svelte';
	import { Textarea } from 'flowbite-svelte';

	let subject = {
		id: 'subject',
		name: 'subject',
		label: 'Cosa vorresti proporre?',
		rows: 4,
		placeholder: 'Cosa vorresti proporre?'
	};

	let name = $state('');
	let surname = $state('');
	let company = $state('');
	let website = $state('');
	let email = $state('');
	let phone = $state('');

	let isRadioEmail = $state(true);

	const sendReq = () => {
		const data = {
			name: name,
			surname: surname,
			company: company,
			website: website,
			subject: subject,
			contact: isRadioEmail ? email : phone
		};
		fetch('/.netlify/functions/mail', {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(data)
		});
	};
</script>

<div class="grid w-screen place-content-center overflow-hidden">
	<div class="h-fit w-screen snap-center p-1 lg:p-4 lg:p-12" id="people-beyond-ai">
		<div
			class="grid h-full w-full flex-col gap-0 rounded-[24px] border border-gray-200/50 bg-gray-200/8 p-1 lg:p-4 lg:p-12"
		>
			<div class="flex w-full flex-col flex-wrap gap-10 p-1 lg:p-4 lg:flex-row lg:gap-0 lg:p-10">
				<div class="mb-4 flex flex-col gap-10 lg:max-w-1/2 lg:grow lg:p-0">
					<h1 class="text-4xl font-medium">Parliamone!</h1>
					<p class=" text-xl! lg:max-w-2/3">
						Siamo pronti ad ascoltare le tue esigenze e offrirti soluzioni su misura, contattaci per
						trasformare insieme le tue idee in risultati concreti e duraturi.
					</p>
				</div>
				<div class="flex w-full flex-col gap-10 lg:w-1/2">
					<div class="flex w-full grid-cols-2 grid-rows-2 flex-col gap-1 lg:p-4 lg:grid">
						<div>
							<!--NOME-->
							<Label class="mb-2 block">Nome</Label>
							<Input
								id="name"
								name="name"
								bind:value={name}
								required
								placeholder="Inserisci qui il tuo nome"
							/>
						</div>
						<div class="col-start-1 row-start-2">
							<!--COGNOME-->
							<Label class="mb-2 block">Cognome</Label>
							<Input
								id="surname"
								name="surname"
								bind:value={surname}
								required
								placeholder="Inserisci qui il tuo cognome"
							/>
						</div>
						<div class="col-start-2 row-start-1">
							<!--AZIENDA-->
							<Label class="mb-2 block">Azienda</Label>
							<Input
								id="company"
								name="company"
								bind:value={company}
								placeholder="Come si chiama la tua azienda?"
							/>
						</div>
						<div>
							<!--SITOWEB-->
							<Label class="mb-2 block">Sito web</Label>
							<Input
								id="website"
								name="website"
								bind:value={website}
								placeholder="Se hai un sito web inseriscilo qui"
							/>
						</div>
					</div>

					<div class="w-full">
						<!--SUBJECT-->
						<Label class="mb-2 block">Anticipaci di cosa vorresti parlarci!</Label>
						<Textarea {...subject} class="w-full" />
					</div>
					<div>
						<!--RADIOBTN: EMAIL/TEL-->
						<Label class="mb-2 block">Come preferisci essere ricontattato?</Label>

						<div class="flex w-full flex-col gap-0">
							<div class="grow">
								<Radio
									classes={{ label: 'p-3' }}
									class="text-brand-500 focus:ring-brand-500"
									bind:group={isRadioEmail}
									value={true}
									checked={true}>Email</Radio
								>
							</div>
							<div class="grow">
								<Radio
									classes={{ label: 'p-3' }}
									class="text-brand-500 focus:ring-brand-500"
									bind:group={isRadioEmail}
									value={false}>Telefono</Radio
								>
							</div>
						</div>
					</div>
					{#if isRadioEmail}
						<div>
							<Label class="mb-2 block">Email</Label>
							<Input
								id="email"
								name="email"
								bind:value={email}
								required
								placeholder="Inserisci qui la tua email"
							/>
						</div>
					{:else}
						<div>
							<Label class="mb-2 block">Telefono</Label>
							<Input
								id="phone"
								name="phone"
								bind:value={phone}
								required
								placeholder="Inserisci qui il tuo numero di telefono"
							/>
						</div>
					{/if}
					<button
						class="inline-block w-full rounded-[11px] bg-brand-600 px-6 py-2 text-white transition-all duration-200 hover:scale-101 hover:bg-brand-700"
						onclick={() => sendReq()}
					>
						Invia
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
