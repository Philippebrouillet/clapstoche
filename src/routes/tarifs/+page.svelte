<script>
	import PdfModal from '../../components/PdfModal.svelte';

	let selectedTarif = null;

	function selectTarif(tarif) {
		selectedTarif = tarif;
	}

	function closeMenu() {
		selectedTarif = null;
	}
</script>

<main class="py-20 px-4 sm:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto">
		<!-- Titre de la section -->
		<h2 class="text-4xl font-extrabold text-gray-800 text-center mb-12">Nos tarifs</h2>

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
		<div class="mb-12 grid grid-cols-1 md:grid-cols-2 gap-12">
			<button
				on:click={() => selectTarif('/src/lib/pdf/tarif/tarifs-portage-de-repas.pdf')}
				class="bg-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:bg-primaryPalet-600 focus:outline-none"
			>
				<div class="flex items-center space-x-4">
					<i class="fas fa-file-pdf text-white text-4xl"></i>
					<div>
						<h3 class="text-2xl font-semibold text-white mb-2">TARIFS PORTAGE DE REPAS</h3>
						<p class="text-lg text-white">
							Consultez nos tarifs pour le portage de repas en fonction de vos besoins spécifiques.
						</p>
					</div>
				</div>
			</button>

			<button
				on:click={() => selectTarif('/src/lib/pdf/tarif/tarifs-autres-prestations.pdf')}
				class="bg-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:bg-primaryPalet-600 focus:outline-none"
			>
				<div class="flex items-center space-x-4">
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
