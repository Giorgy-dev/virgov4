<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	//* FOOTER IMPORTS *//
	import logo_ext_3 from '$lib/assets/svgs/QST3_LOGHI/QST3_EXTENDED_2.svg';
	import {
		Footer,
		FooterBrand,
		FooterLinkGroup,
		FooterLink,
		FooterCopyright,
		FooterIcon
	} from 'flowbite-svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Virgo</title>
</svelte:head>

{@render children?.()}

<!--* FOOTER *-->
<Footer footerType="socialmedia" class="bg-gray-50 dark:bg-black">
	<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
	<div class="flex flex-col gap-12 lg:flex-row lg:gap-24 lg:pr-24">
		<div class="mr-24">
			<FooterBrand href="/" src={logo_ext_3} alt="Virgo" aClass="flex mb-6" />
			<p class="text-gray-600 dark:text-gray-400">People Beyond AI</p>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Brands</h2>
			<FooterLinkGroup>
				<FooterLink target="_blank" class="mb-4" href="https://qdesign.it/">Q Design</FooterLink>
			</FooterLinkGroup>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Social</h2>
			<FooterLinkGroup>
				<FooterLink target="_blank" class="mb-4" href="https://www.instagram.com/virgo.solutions/"
					>Instagram</FooterLink
				>
				<FooterLink
					target="_blank"
					class="mb-4"
					href="https://www.linkedin.com/company/virgosolutions/posts/?feedView=all"
					>LinkedIn</FooterLink
				>
				<FooterLink target="_blank" class="mb-4" href="https://wa.me/393333218804"
					>WhatsApp</FooterLink
				>
			</FooterLinkGroup>
		</div>

		<!-- <div>
			<h2 class="mb-6 text-sm font-semibold uppercase text-gray-400 dark:text-white">Legal</h2>
			<FooterLinkGroup>
				<FooterLink
					class="mb-4"
					href="https://github.com/themesberg/flowbite-svelte-blocks/blob/main/License"
					>LICENSE</FooterLink
				>
			</FooterLinkGroup>
		</div> -->
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
</Footer>
