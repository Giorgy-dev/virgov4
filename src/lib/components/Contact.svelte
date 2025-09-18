<script lang="ts">
	import { Label, Input, Helper } from 'flowbite-svelte';
</script>

<form action="?/mail" method="post">
	<!--RADIO-->

	<!--MAIL-->
	<Label class="mb-2 block">Your email</Label>
	<Input id="email" name="email" required placeholder="name@flowbite.com" />
	<!--TEL-->
	<Label class="mb-2 block">Your email</Label>
	<Input id="email" name="email" required placeholder="name@flowbite.com" />

	<Helper class="mt-2 text-sm">
		We’ll never share your details. Read our <a
			href="/"
			class="font-medium text-primary-600 hover:underline dark:text-primary-500">Privacy Policy</a
		>
		.
	</Helper>
	<input type="submit" value="invia" />
</form>
