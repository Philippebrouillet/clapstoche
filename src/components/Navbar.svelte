<script>
	import phone from '$lib/images/phone.png';
	import login from '$lib/images/login.png';
	import logo from '$lib/images/logo.png';
	import combosireduc from '$lib/images/combosireduc.png';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	let showMenu = false;
	let widthNav;

	$: links = [
		{ href: '/', title: 'Accueil' },
		{ href: '/infos', title: 'Qui sommes-nous ?' },
		// { href: '/livraison', title: 'Livraison' },
		{ href: '/menus', title: 'Menus' },
		{ href: '/tarifs', title: 'Tarifs' },
		{ href: '/agence', title: 'Votre agence' },
		{ href: '/financement', title: 'Financement' },
		{ href: '/actualites', title: 'Actualités' }
		// { href: '/partenaires', title: 'Partenaires' }
	];

	function toggleMenu(boolean) {
		showMenu = typeof boolean !== 'object' ? boolean : !showMenu;
	}

	$: if (widthNav >= 1024) showMenu = false;
</script>

<nav
	bind:clientWidth={widthNav}
	class="flex flex-col justify-center items-center sticky top-0 showMenu z-20"
>
	<!-- top side bar  -->
	<div class="w-full bg-primary flex justify-center items-center z-20">
		<div class="max-w-7xl w-full flex items-center justify-between text-white py-2 px-10">
			<div class="flex gap-2">
				<img src={phone} alt="phone icon" class="w-6 h-6 whiteImg" />
				<span>01 45 18 93 98</span>
			</div>
			<div class="hidden text-xs md:flex gap-1 items-center">
				<img
					src={combosireduc}
					alt="combo si et reduction"
					class="w-14 h-6 rounded-full object-contain"
				/>
				Agrément service à la personne*
			</div>
			<a href="https://portage.clapstoche.com/PORTAGE_DE_REPAS/" class="flex gap-2">
				<img src={login} alt="login icon" class=" w-6 h-6 whiteImg" />
				Espace client
			</a>
		</div>
	</div>

	<!-- links  -->
	<div class="w-full h-24 bg-white flex justify-center items-center shadow-xl z-20">
		<div class="max-w-7xl w-full h-full flex justify-between text-gray-700 pr-10 pl-2">
			<a href="/" class="bg-white h-28 shadow-lg px-2 z-10">
				<img src={logo} alt="login icon" class="w-48 min-w-48 h-full object-contain" />
			</a>

			<ul class="hidden lg:flex gap-6 items-center">
				{#each links as { href, title }}
					<li
						class:activeLink={$page.url.pathname === href ||
							($page.url.pathname.includes(href) && href !== '/')}
						class="transition-transform duration-100 hoverLink"
					>
						<a {href}>{title}</a>
					</li>
				{/each}
			</ul>

			<div class="flex items-center lg:hidden">
				<button on:click={toggleMenu} class="border px-3 py-1.5 w-11 flex justify-center">
					{#if showMenu}
						<i class="fa-solid fa-xmark text-lg"></i>
					{:else}
						<i class="fa-solid fa-bars text-lg"></i>
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if showMenu}
		<div
			in:fly={{ x: 500, duration: 200 }}
			class="bg-white h-screen fixed top-0 flex items-center justify-center w-full"
		>
			<ul class="flex flex-col gap-6 text-xl pt-10">
				{#each links as { href, title }}
					<li
						class:activeLink={$page.url.pathname === href ||
							($page.url.pathname.includes(href) && href !== '/')}
						class="transition-transform duration-100 hoverLink"
					>
						<a on:click={() => toggleMenu(false)} {href}>{title}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
