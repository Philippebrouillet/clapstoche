<script>
	import menuImg from '$lib/images/menu.png';
	import PdfModal from '../../components/PdfModal.svelte';
	import menus from '../../utils/menu';

	let selectedMenu = null;

	function selectMenu(menu) {
		selectedMenu = menu;
	}

	function closeMenu() {
		selectedMenu = null;
	}
</script>

<main class="py-20 px-4 sm:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto">
		<!-- Titre de la section -->
		<h1 class="text-4xl font-extrabold text-gray-800 text-center mb-12">Nos Menus</h1>

		<!-- Photo -->
		<div class="relative mb-12">
			<img src={menuImg} alt="nourriture" class="w-full h-80 object-cover rounded-lg shadow-lg" />
		</div>

		<!-- Description -->
		<div class="text-lg text-gray-700 mb-12">
			<p class="mb-6">
				Nos repas sont conçus par une diététicienne et cuisinés dans un laboratoire dans le respect
				:
			</p>
			<ul class="list-disc list-inside space-y-2 mb-6">
				<li>Des normes d’hygiène et de traçabilité (HACCP)</li>
				<li>Des recommandations nutritionnelles (GEMRCN, PNNS)</li>
				<li>De la Certification ISO 9001</li>
			</ul>
			<p class="mb-6">
				Les menus ci-dessous varient quotidiennement, vous permettant de faire vos choix selon vos
				goûts et vos impératifs alimentaires. Si vous ne trouvez pas satisfaction, consultez notre
				carte de remplacement : les entrées, plats garnis, fromages et desserts qui la composent
				peuvent se substituer aux propositions quotidiennes.
			</p>
			<p class="mb-6 font-semibold">Tous nos menus se déclinent sans porc.</p>
			<p>Notre équipe est à votre disposition pour vous conseiller.</p>
		</div>

		<!-- Liste des PDF -->
		<div class="flex flex-col items-center">
			<div class="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Consultez nos Menus</h2>
				<ul class="space-y-4 mb-12">
					{#each menus as { name, path }, i}
						<li>
							<a
								href="/menus/{i}"
								class="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 w-full text-left"
							>
								<div class="text-lg text-gray-700 flex gap-5">
									{name}
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<!-- svelte-ignore a11y-no-static-element-interactions -->
									<i
										class="fas fa-file-pdf text-xl hover:text-primary"
										on:click|preventDefault={() => selectMenu(path)}
									/>
								</div>

								<svg
									class="w-6 h-6 text-gray-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 16l4-4m0 0l-4-4m4 4H6"
									></path>
								</svg>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</main>

<!-- Affichage du PDF sélectionné -->
{#if selectedMenu}
	<PdfModal selectedPdf={selectedMenu} {closeMenu} />
{/if}
