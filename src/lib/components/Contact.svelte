<script lang="ts">
	import { Label, Input } from 'flowbite-svelte';

	let name = $state('');

	const sendReq = () => {
		const data = { name: name, data: '' };
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

<div>
	<!--NAME-->
	<Label class="mb-2 block">Nome</Label>
	<Input id="email" name="email" bind:value={name} required placeholder="Antonio" />
	<button onclick={() => sendReq()}> Invia </button>
</div>
