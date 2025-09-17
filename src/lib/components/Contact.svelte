<!--

<script lang="ts">
	import { browser } from '$app/environment';
	import { sendMail } from './utils/mail';
	import { useForm, Hint, validators, required, email, HintGroup } from 'svelte-use-form';

	const form = useForm();

	let status: 'error' | 'loading' | 'success' | 'none' = 'none';

	function gtag_report_conversion(url: any) {
		var callback = function () {
			if (typeof url != 'undefined') {
				window.location = url;
			}
		};
		// @ts-ignore
		gtag('event', 'conversion', {
			send_to: 'AW-16755659389/nw6ACNrxs-IZEP2k3LU-',
			value: 1.0,
			currency: 'EUR',
			event_callback: callback
		});
		return false;
	}
</script>

<div id="contact" class="flex items-center justify-center">
	<div class="max-w-default flex w-full flex-col items-center justify-center gap-8 md:flex-row">
		<div
			class="flex flex-col items-center justify-center gap-8 text-center md:items-end md:text-right"
		>
			<h2 class="h2-heading font-bold">Scrivici.</h2>
			<h4 class="h4-heading">Il tuo successo online è la nostra missione. Parliamone insieme.</h4>
			<div class="flex flex-col">
				<p>Link cliccabili</p>
				<a href="https://wa.me/393333218804" target="_blank" class="link link-hover underline">
					<div class="flex gap-1">
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
						<p>Whatsapp +39 333 3218804</p>
					</div>
				</a>
				<a href="mailto:info@virgosites.com" target="_blank" class="link link-hover underline">
					<div class="flex justify-center gap-1 lg:justify-end">
						<div class="grid place-content-center">
							<svg height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<title />

								<g id="Complete">
									<g id="mail">
										<g>
											<polyline
												fill="none"
												points="4 8.2 12 14.1 20 8.2"
												stroke="#ffffff"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
											/>

											<rect
												fill="none"
												height="14"
												rx="2"
												ry="2"
												stroke="#ffffff"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												width="18"
												x="3"
												y="6.5"
											/>
										</g>
									</g>
								</g>
							</svg>
						</div>
						<p>info@virgosites.com</p>
					</div>
				</a>
			</div>
		</div>
		<div class="card w-full max-w-sm flex-shrink-0 flex-grow">
			<form
				use:form
				id="homeform"
				class="card-body p-4 md:p-8"
				on:submit|preventDefault={(e) => {
					gtag_report_conversion(undefined);
					status = 'loading';
					sendMail('homeform')
						.then((res) => {
							if (res.status == 200) {
								status = 'success';
							} else {
								status = 'error';
							}
						})
						.catch((e) => {
							console.log(e);
							status = 'error';
						});
				}}
			>
				<div class="form-control">
					<input type="hidden" name="form_source" value="Home" />
					<input type="hidden" name="url" value={browser ? window.location.href : 'boh'} />
					<div class="flex gap-3">
						<div class="gap-inherit flex max-w-min flex-col">
							<span class="flex h-12 w-full items-center">Nome </span>
							<span class="flex h-12 w-full items-center">Email</span>
							<span class="flex h-12 w-full items-center">Richiesta</span>
						</div>
						<div class="gap-inherit flex flex-grow flex-col">
							<input
								id="name_input"
								type="text"
								placeholder="Nome e cognome"
								name="customer_name"
								class="input input-bordered w-full"
								use:validators={[required]}
							/>

							<input
								id="mail_input"
								type="text"
								placeholder="Email"
								name="email"
								use:validators={[required, email]}
								class="input input-bordered w-full"
							/>

							<input
								id="request_input"
								type="text"
								placeholder="Includi dettagli!"
								name="richiesta"
								class="input input-bordered w-full"
								use:validators={[required]}
							/>
						</div>
					</div>
					<div class="hintGroup">
						<HintGroup for="customer_name">
							<Hint on="required">
								<style>
									#name_input {
										border-color: hsl(var(--er));
									}
								</style>
							</Hint>
						</HintGroup>
					</div>
					<div class="hintGroup">
						<HintGroup for="email">
							<Hint on="required">
								<style>
									#mail_input {
										border-color: hsl(var(--er));
									}
								</style>
							</Hint>
							<Hint on="email">
								<style>
									#mail_input {
										border-color: hsl(var(--er));
									}
								</style>
							</Hint>
						</HintGroup>
					</div>
					<div class="hintGroup">
						<HintGroup for="richiesta">
							<Hint on="required">
								<style>
									#request_input {
										border-color: hsl(var(--er));
									}
								</style>
							</Hint>
						</HintGroup>
					</div>
				</div>

				{#if !$form.valid}
					<div class="text-xs">Compila tutti i campi obbligatori</div>
				{:else if status == 'success'}
					<div class="text-xs">Inviato correttamente. Ti ricontatteremo al più presto.</div>
				{:else if status == 'error'}
					<div class="text-error text-xs">
						C'è stato un errore; ti preghiamo di contattarci direttamente tramite mail.
					</div>
				{/if}
				<div class="form-control mt-6">
					<button
						disabled={!$form.valid ||
							status == 'success' ||
							status == 'error' ||
							status == 'loading'}
						class="btn btn-primary"
						>{#if status == 'loading'}
							<span class="loading loading-dots loading-md" />
						{:else}
							<p
								class="inline-block w-fit max-w-[200px] rounded-full bg-brand-600 px-6 py-2 text-white! hover:bg-brand-700 lg:max-w-fit"
							>
								Invia
							</p>
						{/if}
					</button>
				</div>
			</form>
		</div>
	</div>
</div>


-->