<script>
	import PdfModal from '../../components/PdfModal.svelte';
	import photo from '$lib/images/food.png';

	let selectedTarif = null;

	function selectTarif(tarif) {
		selectedTarif = tarif;
	}

	function closeMenu() {
		selectedTarif = null;
	}
	const optionsLiberté = [
		{
			name: 'Formule 1 plat',
			price: '10.95',
			infos: '1 Plat garni de légumes'
		},
		{ name: 'Formule MINI', price: '11.75', infos: '1 Plat garni de légumes + 1 composant' },
		{ name: 'Formule MEDIUM', price: '12.55', infos: '1 Plat garni de légumes + 2 Composants' },
		{
			name: 'Formule DEJEUNER',
			price: '13.35',
			infos: '1 Plat garni de légumes + 3 Composants'
		},
		{
			name: 'Formule DEJEUNER & COLLATION DU SOIR',
			price: '14.95',
			infos: '1 Plat garni de légumes + 5 composants'
		}
	];
	const optionsDuo = [
		{
			name: 'Formule COUPLE-MINI',
			price: '20.95',
			infos: '2 Plats garnis de légumes + 2 composants'
		},
		{
			name: 'Formule COUPLE-MEDIUM',
			price: '22.55',
			infos: '2 Plats garnis de légumes + 4 composants'
		},
		{
			name: 'Formule COUPLE-DEJEUNER',
			price: '24.15',
			infos: '2 Plats garnis de légumes + 6 composants'
		}
	];

	let plans = [
		{
			title: 'FORMULE LIBERTÉ',
			description: 'Sélectionnez la formule que vous aimez',
			image: photo,
			savings: "Jusqu’à 6% d'économies",
			options: [
				{
					name: 'Formule 1 plat',
					price: '10.95',
					infos: '1 Plat garni de légumes'
				},
				{ name: 'Formule MINI', price: '11.75', infos: '1 Plat garni de légumes + 1 composant' },
				{ name: 'Formule MEDIUM', price: '12.55', infos: '1 Plat garni de légumes + 2 Composants' },
				{
					name: 'Formule DEJEUNER',
					price: '13.35',
					infos: '1 Plat garni de légumes + 3 Composants'
				},
				{
					name: 'Formule DEJEUNER & COLLATION DU SOIR',
					price: '14.95',
					infos: '1 Plat garni de légumes + 5 composants'
				}
			],
			weeks: [1, 2, 3],
			numberWeekSelected: 1,
			selectedOption: optionsLiberté[0],
			total: 0,
			price_per_meal: '11.16'
		},
		{
			title: 'FORMULE DUO',
			description: 'Partagez et savourez ensemble nos formules exclusives.',
			savings: '',
			image: photo,
			options: optionsDuo,
			selectedOption: optionsDuo[0],
			weeks: [1, 2, 3],
			numberWeekSelected: 1,
			total: 0,
			price_per_meal: '6.40'
		}
	];

	const handleTotal = (prix, numberWeek, plan) => {
		const numberDayInOneWeek = 7;
		const totalDays = numberDayInOneWeek * numberWeek;
		const total = prix * totalDays;
		plan.total = total.toFixed(2);
		plan.price_per_meal = prix;

		return total.toFixed(2);
	};
</script>

<div class="text-center my-8 mt-20">
	<h2 class="text-3xl font-extrabold mb-8">NOS TARIFS</h2>
	<p class="text-lg mx-24">
		Découvrez nos formules de repas et tarifs, et commandez en ligne pour bénéficier de remises
		exclusives web.
	</p>
</div>
<div class="flex justify-center">
	<div class="pt-10 max-w-7xl flex-col justify-center items-center mx-20 rounded-lg">
		<h3 class="text-xl font-semibold text-center">JE COMMANDE PONCTUELLEMENT</h3>
		<div class="flex flex-col md:flex-row justify-center gap-8 px-4 py-8 pt-6">
			{#each plans as plan, planIndex}
				<div
					class="bg-white flex flex-col justify-between p-6 rounded-lg shadow-md w-full md:w-1/2"
				>
					<div class="relative mb-4">
						<img src={plan.image} alt={plan.title} class="w-full h-48 object-cover rounded-t-lg" />
						{#if plan.savings}
							<div class="absolute top-0 left-0 bg-yellow-500 text-white p-2 rounded-br-lg">
								{plan.savings}
							</div>
						{/if}
					</div>
					<h3 class="text-2xl font-bold mb-2">{plan.title}</h3>
					<p class="text-gray-700 mb-4">{plan.description}</p>
					<div>
						<p class="font-bold mb-2">Choisir les repas</p>
						{#each plan.options as option, optionIndex}
							<label class="block">
								<input
									checked={optionIndex === 0}
									on:change={() => {
										plans[planIndex].selectedOption = option;
									}}
									type="radio"
									name="meal-{plan.title}"
									class=""
								/>
								{option.name}
							</label>
							<p class="mb-2 text-sm text-gray-400">{option.infos}</p>
						{/each}
					</div>

					<div class="mb-4">
						<p class="font-bold mb-2">Choisir le nombre de semaines</p>
						<div class="flex space-x-2">
							{#each plan.weeks as week}
								<button
									on:click={() => {
										plan.numberWeekSelected = week;
									}}
									class:bg-yellow-400={plan.numberWeekSelected === week}
									class="py-2 px-4 border rounded">{week}</button
								>
							{/each}
						</div>
					</div>
					<div class="text-2xl font-bold mb-2">
						{handleTotal(plan.selectedOption.price, plan.numberWeekSelected, plan)}€
					</div>
					<p class="text-sm text-gray-600 mb-4">
						{plan.price_per_meal} € / plat après crédit d'impôt*
					</p>
					<p class="text-xs text-gray-500 mb-4">
						*Pour bénéficier du crédit d’impôt, la livraison doit se réaliser à la résidence
						principale et au moins un des bénéficiaires doit être âgé de 65 ans minimum ou en
						situation de handicap.
					</p>
					<button
						class="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
						>CHOISIR CETTE FORMULE</button
					>
				</div>
			{/each}
		</div>
	</div>
</div>

<main class="py-10 px-4 sm:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto">
		<!-- Informations générales -->
		<div class="mb-12 text-center bg-white p-16 rounded-lg shadow-sm">
			<p class="text-lg text-gray-700 mb-6">
				Une facture vous est présentée le dernier mardi de chaque mois soit :
			</p>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
				<div class="bg-gray-50 p-6 rounded-lg shadow-md">
					<div class="flex flex-col items-center">
						<i class="fas fa-user-tie text-primary text-4xl mb-4"></i>
						<p class="text-lg font-semibold text-gray-800">
							Par le livreur qui vous la remet en main propre
						</p>
					</div>
				</div>
				<div class="bg-gray-50 p-6 rounded-lg shadow-md">
					<div class="flex flex-col items-center">
						<i class="fas fa-envelope text-primary text-4xl mb-4"></i>
						<p class="text-lg font-semibold text-gray-800">Par courrier postal</p>
					</div>
				</div>
				<div class="bg-gray-50 p-6 rounded-lg shadow-md">
					<div class="flex flex-col items-center">
						<i class="fas fa-user-alt text-primary text-4xl mb-4"></i>
						<p class="text-lg font-semibold text-gray-800">Sur votre espace client</p>
					</div>
				</div>
				<div class="bg-gray-50 p-6 rounded-lg shadow-md">
					<div class="flex flex-col items-center">
						<i class="fas fa-paper-plane text-primary text-4xl mb-4"></i>
						<p class="text-lg font-semibold text-gray-800">Par mail</p>
					</div>
				</div>
			</div>
		</div>

		<!--  Tarifs -->
		<div class="mb-12 grid grid-cols-1 gap-12">
			<button
				on:click={() => selectTarif('$lib/pdf/tarif/tarifs-autres-prestations.pdf')}
				class="bg-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:bg-primaryPalet-600 focus:outline-none"
			>
				<div class="flex justify-center items-center space-x-4">
					<i class="fas fa-file-pdf text-white text-4xl"></i>
					<div>
						<h3 class="text-2xl font-semibold text-white mb-2">TARIFS AUTRES PRESTATIONS</h3>
						<p class="text-lg text-white">
							Découvrez les tarifs pour les autres prestations que nous proposons.
						</p>
					</div>
				</div>
			</button>
		</div>

		<!-- Modes de règlement -->
		<div class="text-center mb-12 bg-white p-16 rounded-lg shadow-sm">
			<p class="text-lg text-gray-700 mb-6">Plusieurs modes de règlement :</p>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				<div class="bg-primaryPalet-50 p-6 rounded-lg shadow-md">
					<i class="fas fa-credit-card text-primary text-4xl mb-4"></i>
					<p class="text-lg font-semibold text-gray-800">Carte bancaire</p>
				</div>
				<div class="bg-primaryPalet-50 p-6 rounded-lg shadow-md">
					<i class="fas fa-money-bill text-primary text-4xl mb-4"></i>
					<p class="text-lg font-semibold text-gray-800">Chèque</p>
				</div>
				<div class="bg-primaryPalet-50 p-6 rounded-lg shadow-md">
					<i class="fas fa-cash-register text-primary text-4xl mb-4"></i>
					<p class="text-lg font-semibold text-gray-800">Virement bancaire</p>
				</div>
			</div>
		</div>

		<!-- Alerte -->
		<div class="bg-red-100 text-red-700 p-6 rounded-lg shadow-md text-center">
			<p class="text-lg font-semibold mb-4">ATTENTION !</p>
			<p class="text-lg">
				Le règlement en espèces ne permet pas de bénéficier de la réduction fiscale.
			</p>
		</div>
	</div>
</main>

<!-- Affichage du PDF sélectionné -->
{#if selectedTarif}
	<PdfModal selectedPdf={selectedTarif} {closeMenu} />
{/if}
