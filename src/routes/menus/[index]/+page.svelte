<script>
	import menus from '../../../utils/menu';
	import { page } from '$app/stores';
	import dayjs from 'dayjs';
	import 'dayjs/locale/fr';
	import Carousel from 'svelte-carousel';
	import PdfModal from '../../../components/PdfModal.svelte';

	$: menu = menus[$page.params.index];

	let selectedMenu = null;

	function selectMenu(menu) {
		selectedMenu = menu;
	}

	function closeMenu() {
		selectedMenu = null;
	}
	//rendre la page dynamique en fonction du menu
	//remplir les menus avec les bonne data dans menu.js
	//remplacer weekMenu par menu

	// let menuDescription = `Notre menu Gourmet s’adresse à tout sénior qui n’a pas de contrainte alimentaire spécifique ou de pathologie nécessitant un régime alimentaire particulier. Notre menu Gourmet est mijoté par nos Chefs cuisiniers et validé par notre diététicienne, en tenant compte des recommandations du Plan National Nutrition Santé et des besoins énergétiques et nutritionnels des seniors. Laissez-vous tenter par notre menu de la semaine, entre les plats traditionnels et les plus exotiques il y en a pour tous les goûts. Bon appétit !`;

	const today = dayjs().locale('fr');
	const menu__ = {
		logo: '/src/lib/images/saveur_et_vie.png',
		meals: {
			entree: 'Terrine de volaille',
			plat: "Jarret de boeuf sauce à l'oignon et petits pois",
			laitage: "Fourme d'ambert",
			dessert: ''
		},
		date: undefined
	};
	const weekMenu = [];
	for (let i = 0; i < 7; i++) {
		if (i > 0) today.add(i, 'day');
		weekMenu.push({ ...menu__, date: i > 0 ? today.add(i, 'day') : today });
	}

	let numberParticules = 3;
	let clientWidth;

	$: if (clientWidth <= 1000 && clientWidth > 600) {
		numberParticules = 2;
	} else if (clientWidth <= 600) {
		numberParticules = 1;
	} else numberParticules = 3;
</script>

<div bind:clientWidth class="relative flex justify-center">
	<div class="absolute left-0 w-full lg:w-[30%] bg-white h-full"></div>
	<div class="absolute invisible lg:visible right-0 w-[70%] bg-gray-100 h-full"></div>
	<!-- Section de l'image principale et des images de plats -->

	<div class=" flex relative flex-col lg:flex-row gap-20 py-32 p-20 max-w-7xl">
		<div class="lg:w-1/2 flex justify-center items-center">
			<div class="flex gap-3.5 items-center lg:ml-6">
				<img
					src="/src/lib/images/food2.png"
					alt="Senior eating"
					class="  rounded-md mb-4 w-[180px] min-w-[180px] h-[300px] lg:w-[240px] lg:min-w-[240px] lg:h-[400px] object-cover"
				/>
				<div class="grid grid-cols-1 gap-2 w-full transfrom translate-y-[15%]">
					<img
						src="/src/lib/images/food2.png"
						alt="Dish 1"
						class="w-[120px] min-w-[120px] h-[140px] lg:w-[160px] lg:min-w-[160px] lg:h-[180px] rounded-md object-cover"
					/>
					<img
						src="/src/lib/images/food2.png"
						alt="Dish 2"
						class=" w-[120px] min-w-[120px] h-[140px] lg:w-[160px] lg:min-w-[160px] lg:h-[180px] rounded-md object-cover"
					/>
				</div>
			</div>
		</div>

		<!-- Section du texte et du bouton -->
		<div class="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8 flex flex-col justify-center text-center">
			<h2 class="text-secondary text-xl font-semibold mb-10 uppercase">{menu?.name}</h2>
			<h1 class="text-4xl font-extrabold text-gray-800 mb-8 uppercase">{menu?.name}</h1>
			<p class="text-gray-600 mb-6 text-sm text-justify">{menu.description}</p>
			<button
				class="bg-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-primaryPalet-600 transition duration-150 mb-4"
			>
				Commander en ligne
			</button>
			<button
				class="bg-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-primaryPalet-600 transition duration-150"
				on:click|preventDefault={() => selectMenu(menu.path)}
				><i class="fas fa-file-pdf text-xl hover:text-primary" /></button
			>
		</div>
	</div>
</div>

<section class="py-20 flex justify-center items-center">
	<div class="max-w-[1400px] w-full bg-white rounded-lg py-10">
		<div class="text-center bg-white">
			<h2 class="sm:text-4xl font-extrabold mb-2 mt-10 text-xl">
				DÉCOUVREZ LE MENU GOURMET DE LA SEMAINE
			</h2>
			<p class="">
				Semaine du {weekMenu[0].date.format('D')} au {weekMenu[weekMenu.length - 1].date.format(
					'D MMMM'
				)}
			</p>
		</div>

		<div class="flex justify-center w-full">
			<div class="py-10 px-4 w-full">
				{#key numberParticules}
					<Carousel particlesToShow={numberParticules} infinite={false}>
						{#each menu.menus as menuu}
							<div class="p-2 w-full">
								<div
									class="bg-gray-100 flex flex-col justify-between px-3 p-6 rounded-md shadow-md h-[600px]"
								>
									<div class="flex flex-col gap-2 items-center">
										<!-- <h3 class="text-xl font-semibold">{menu.date.format('D MMMM')}</h3> -->
										<img
											src={menuu.logo}
											alt="Logo Saveurs et Vie"
											class="h-[150px] w-[150px] object-cover mt-6 mb-10"
										/>
									</div>
									<div class="flex flex-col gap-3">
										<div class="flex flex-col bg-white rounded-md p-4 mb-2">
											<p class="font-bold">ENTRÉE</p>
											<p>{menuu.meals.entree}</p>
										</div>
										<div class="flex flex-col bg-white rounded-md p-4 mb-2">
											<p class="font-bold">PLAT COMPLET</p>
											<p>{menuu.meals.plat}</p>
										</div>
										<div class="flex flex-col bg-white rounded-md p-4 mb-2">
											<p class="font-bold">DESSERT</p>
											<p>{menuu.meals.laitage}</p>
										</div>
										{#if menuu.meals.dessert}
											<div class="flex flex-col bg-white rounded-md p-4 mb-2">
												<p class="font-bold">DESSERT</p>
												<p>{menuu.meals.dessert}</p>
											</div>
										{/if}
									</div>
								</div>
							</div>
						{/each}
					</Carousel>
				{/key}
			</div>
		</div>
		<div class="flex justify-center">
			<button
				class="bg-primary w-full lg:w-1/2 mx-2 lg:mx-auto self-center uppercase text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-primaryPalet-600 transition duration-150"
			>
				Découvrez le menu saveurs du mois
			</button>
		</div>
	</div>
</section>

<!-- Affichage du PDF sélectionné -->
{#if selectedMenu}
	<PdfModal selectedPdf={selectedMenu} {closeMenu} />
{/if}
