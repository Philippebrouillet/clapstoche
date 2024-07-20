<script>
	import contribuer from '$lib/images/contribuer.png';
	import ceasar from '$lib/images/ceasar.png';
	import service from '$lib/images/service.png';
	import apporter from '$lib/images/apporter.png';
</script>

<main>
	<section class="py-20 px-6 md:px-8 lg:px-12">
		<div class="max-w-5xl mx-auto">
			<!-- Titre -->
			<h1 class="text-4xl font-extrabold text-center mb-16">Qui sommes-nous ?</h1>

			<!-- Sections -->
			<div class="space-y-16">
				<!-- Section 1 -->
				<div
					class="flex flex-col md:flex-row items-stretch space-y-8 md:space-y-0 md:space-x-8 mb-16"
				>
					<!-- Card 1 -->
					<div
						class="flex-1 bg-white p-6 rounded-lg text-center shadow-md flex flex-col justify-between"
					>
						<div class="flex justify-center">
							<div
								class="mb-4 inline-block p-4 px-5 bg-primaryPalet-200/50 text-primary rounded-full shadow-sm"
							>
								<i class="fa-solid fa-calendar text-3xl"></i>
							</div>
						</div>
						<h2 class="text-2xl font-semibold mb-4">2004 - Création de Clapstoche</h2>
						<p class="text-base text-gray-600">Création de Clapstoche par Linda Kalfon-Majman</p>
					</div>

					<!-- Card 2 -->
					<div
						class="flex-1 bg-white p-6 rounded-lg text-center shadow-md flex flex-col justify-between"
					>
						<div class="flex justify-center">
							<div
								class="mb-4 inline-block p-4 px-5 bg-primaryPalet-200/50 text-primary rounded-full shadow-sm"
							>
								<i class="fa-solid fa-calendar text-3xl"></i>
							</div>
						</div>
						<h2 class="text-2xl font-semibold mb-4">2006 - Agrément Service à la personne</h2>
						<p class="text-base text-gray-600">Ouvrant droit aux avantages fiscaux</p>
					</div>
				</div>

				<!-- Section 2 -->
				<div
					class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-16"
				>
					<div class="flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
						<img
							src={contribuer}
							alt="Maintien à domicile"
							class="w-full h-auto object-cover transition-transform transform hover:scale-105"
						/>
					</div>
					<div class="flex-1">
						<h2 class="text-3xl font-semibold text-gray-800 mb-4">
							Contribuer au maintien à domicile de nos aînés
						</h2>
						<p class="text-lg text-gray-700 mb-4">
							Grâce à notre savoir-faire et notre expérience du portage de repas à domicile, nous
							proposons des repas adaptés aux nécessités du grand âge :
						</p>
						<ul class="list-disc list-inside text-gray-700 mt-4 space-y-2">
							<li>Équilibre nutritif</li>
							<li>Qualité gustative</li>
							<li>Respect de la prescription médicale</li>
							<li>
								Régularité et qualité du service de livraison dans le respect de la chaîne du froid
							</li>
						</ul>
					</div>
				</div>

				<!-- Section 3 -->
				<div
					class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-16"
				>
					<div class="flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
						<img
							src={ceasar}
							alt="Troubles de l'alimentation"
							class="w-full h-auto object-cover transition-transform transform hover:scale-105"
						/>
					</div>
					<div class="flex-1">
						<h2 class="text-3xl font-semibold text-gray-800 mb-4">
							Prévenir les troubles de l’alimentation dus à l’avancée en âge
						</h2>
						<p class="text-lg text-gray-700 mb-4">
							L’alimentation joue un rôle déterminant dans la prévention de la perte d’appétit, dont
							les causes sont multiples :
						</p>
						<ul class="list-disc list-inside text-gray-700 mt-4 space-y-2">
							<li>Causes socio-environnementales</li>
							<li>Causes physiologiques</li>
						</ul>
						<p class="mt-4 text-lg text-gray-700">
							Notre ambition est de prévenir ces troubles pour les uns, redécouvrir l’appétit pour
							ceux qui l’ont perdu.
						</p>
					</div>
				</div>

				<!-- Section 4 -->
				<div
					class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-16"
				>
					<div class="flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
						<img
							src={service}
							alt="Service personnalisé"
							class="w-full h-auto object-cover transition-transform transform hover:scale-105"
						/>
					</div>
					<div class="flex-1">
						<h2 class="text-3xl font-semibold text-gray-800 mb-4">
							Proposer un service personnalisé
						</h2>
						<p class="text-lg text-gray-700 mb-4">
							Nos repas sont conçus par une diététicienne, en adéquation avec les impératifs d’une
							clientèle fragile :
						</p>
						<ul class="list-disc list-inside text-gray-700 mt-4 space-y-2">
							<li>Un grand éventail de choix</li>
							<li>Des repas à base de produits de saison</li>
							<li>Des repas équilibrés</li>
						</ul>
					</div>
				</div>

				<!-- Section 5 -->
				<div
					class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-16"
				>
					<div class="flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
						<img
							src={apporter}
							alt="Soutien aux aidants familiaux"
							class="w-full h-auto object-cover transition-transform transform hover:scale-105"
						/>
					</div>
					<div class="flex-1">
						<h2 class="text-3xl font-semibold text-gray-800 mb-4">
							Apporter notre soutien aux aidants familiaux
						</h2>
						<p class="text-lg text-gray-700 mb-4">
							La nutrition n’est qu’un aspect des différentes problématiques liées au maintien à
							domicile. Nous travaillons en relation avec divers acteurs :
						</p>
						<ul class="list-disc list-inside text-gray-700 mt-4 space-y-2">
							<li>Les Conseils départementaux</li>
							<li>Les CCAS de mairies</li>
							<li>Les Centres Locaux d’Information et de Coordination (CLIC)</li>
							<li>Les services sociaux des hôpitaux</li>
							<li>Les réseaux de santé plurithématiques</li>
						</ul>
						<p class="mt-4 text-lg text-gray-700">
							Nous vous offrons une écoute attentive, un conseil expérimenté.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
