<script>
	import login from '$lib/images/login.png';
	import logo from '$lib/images/logo.png';

	import combosireduc from '$lib/images/combosireduc.png';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import menus from '../utils/menu';

	let showMenu = false;
	let isOpenTabMenu = false;
	let widthNav;

	const breakpointToMobileView = 1000;

	const links = [
		{ href: '/', title: 'Accueil' },
		{ href: '/infos', title: 'à propos' },
		{ href: '/menus', title: 'Menus' },
		{ href: '/tarifs', title: 'Tarifs' },
		{ href: '/agence', title: 'Votre agence' },
		{ href: '/financement', title: 'Financement' },
		{ href: '/actualites', title: 'Actualités' }
	];

	function toggleMenu(boolean) {
		showMenu = typeof boolean !== 'object' ? boolean : !showMenu;
	}

	$: if (widthNav >= breakpointToMobileView) showMenu = false;
	$: if (widthNav <= breakpointToMobileView) isOpenTabMenu = false;
</script>

<nav
	bind:clientWidth={widthNav}
	class="flex flex-col justify-center items-center sticky top-0 z-20"
>
	<!-- top side bar  -->
	<div class="w-full bg-primary flex justify-center items-center z-20">
		<div class="max-w-navbar relative w-full flex items-center justify-between text-white px-6">
			<div class="flex items-center gap-2 py-2.5 px-6 bg-secondary">
				<div class="rounded-full bg-white px-1.5 py-0">
					<i class="fa-solid fa-phone text-sm text-secondary"></i>
				</div>

				<span>01 45 18 93 98</span>
			</div>
			<div class="hidden text-sm md:flex gap-0.5 items-center">
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
	<div
		class="w-full h-28 {isOpenTabMenu || showMenu
			? 'shadow-md'
			: 'shadow-xl'} bg-white flex justify-center items-center z-20"
	>
		<div
			class="max-w-navbar w-full h-full flex gap-2 justify-between lg:inline-flex text-gray-700 px-6"
		>
			<a href="/" class=" px-2 z-10">
				<img
					src={logo}
					alt="login icon"
					class="w-48 min-w-48 h-full object-contain transfrom translate-y-[-5%]"
				/>
			</a>

			<ul class="hidden lg:flex lg:gap-4 xl:gap-8 2xl:gap-10 justify-center items-center">
				{#each links as { href, title }}
					<li
						class:activeLink={$page.url.pathname === href ||
							($page.url.pathname.includes(href) && href !== '/')}
						class="linkNav text-center"
					>
						<a
							on:click={(e) => {
								if (title === 'Menus') {
									e.stopPropagation();
									e.preventDefault();
									isOpenTabMenu = !isOpenTabMenu;
								} else {
									isOpenTabMenu = false;
								}
							}}
							{href}>{title}</a
						>
					</li>
				{/each}
			</ul>
			<div class=" hidden lg:flex items-center">
				<a
					class="linkButton px-3 2xl:px-8 2xl:text-sm py-5 uppercase rounded-md text-xs"
					href="/menus">Commander en ligne</a
				>
			</div>

			<div class="flex items-center lg:hidden">
				<button on:click={toggleMenu} class="border-2 rounded px-3 py-1.5 w-11 flex justify-center">
					{#if showMenu}
						<i class="fa-solid fa-xmark text-lg"></i>
					{:else}
						<i class="fa-solid fa-bars text-lg"></i>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- MENUS tab -->
	{#if isOpenTabMenu}
		<div
			transition:fly={{ y: -500, duration: 400 }}
			class="w-full shadow-lg pt-[156px] flex justify-center bg-gray-50 absolute top-0"
		>
			<div class=" w-full max-w-navbar px-6 py-2 flex gap-4">
				<div class="w-1/2 bg-white p-6 text-sm font-light shadow-sm">
					<h2 class="uppercase">Nos Menus</h2>
					<div class="w-full border border-gray-500 mb-10"></div>
					<ul class="grid grid-cols-2 gap-6 mb-36">
						{#each menus as menu, i}
							<li class="">
								<a
									on:click={() => {
										isOpenTabMenu = false;
									}}
									href="/menus/{i}"
									class="block hover:text-secondary w-full text-left transition duration-150"
								>
									{menu.name}
								</a>
							</li>
						{/each}
					</ul>
					<a href="/menus" on:click={() => (isOpenTabMenu = false)} class="text-sm text-secondary"
						>Voir tous nos menus</a
					>
				</div>

				<div
					class="w-1/2 relative h-full bg-[url('/src/lib/images/food.png')] bg-no-repeat bg-cover bg-right shadow-sm font-light flex justify-center items-end"
				>
					<div class="absolute top-0 left-0 h-full w-full bg-gray-800/10"></div>
					<div
						class="py-10 uppercase text-white font-bold flex justify-center items-center flex-col"
					>
						<div class="bg-secondary mb-2 px-1 text-center py-1 w-[80%] text-sm">
							Menus du moment
						</div>
						<h3 class="uppercase text-lg">Découvrez nos repas</h3>
					</div>
				</div>
			</div>
		</div>
	{/if}

	<!-- mobile menu -->
	{#if showMenu}
		<div in:fly={{ x: 500, duration: 200 }} class="bg-white h-screen fixed top-0 w-full pt-[158px]">
			<ul class="flex flex-col text-xl">
				{#each links as { href, title }}
					<a
						on:click={() => toggleMenu(false)}
						{href}
						class:activeLink={$page.url.pathname === href ||
							($page.url.pathname.includes(href) && href !== '/')}
						class="linkNav cursor-pointer border-b w-full border-gray-300 px-6 py-8 mb-0 hover:scale-[1.02]"
					>
						{title}
					</a>
				{/each}
			</ul>
		</div>
	{/if}
</nav>

<!-- bottom button commande mobile only -->
<a
	href="/menus"
	class="fixed z-[100] bg-secondary hover:bg-pink-800 flex justify-center items-center bottom-0 h-20 w-full lg:hidden border-t border-gray-400 shadow-md"
>
	<div class="flex items-center gap-3 text-white text-lg font-bold">
		Commander en ligne

		<div class=" py-0.5 px-2.5 rounded-lg border-2 border-white">
			<i class="fa-solid fa-plus text-sm text-white"></i>
		</div>
	</div>
</a>
