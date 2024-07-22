<script>
	import fabien from '$lib/images/Fabien.png';
	import { browser } from '$app/environment';

	function initMap() {
		const agencyLocation = { lat: 48.8566, lng: 2.3522 }; // Replace with actual coordinates
		const map = new google.maps.Map(document.getElementById('map'), {
			zoom: 14,
			center: agencyLocation
		});
		new google.maps.Marker({
			position: agencyLocation,
			map: map
		});
	}
	if (browser) window.onload = initMap;
</script>

<svelte:head>
	<script
		src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY"
		defer
	></script></svelte:head
>

<main>
	<div class="max-w-5xl mx-auto px-4 py-20">
		<!-- Section Carte et informations -->

		<div class="bg-white p-8 rounded-lg shadow-md mb-8">
			<h2 class="text-4xl font-extrabold text-gray-800 text-center mb-6">Agence Val-de-Marne</h2>
			<div class="w-full h-96 mb-6">
				<img
					src="https://maps.googleapis.com/maps/api/staticmap?center=48.807,2.434&zoom=14&size=800x600&markers=color:red%7Clabel:A%7C48.807,2.434&key=YOUR_GOOGLE_MAPS_API_KEY"
					alt="Google Map"
					class="w-full h-full rounded-lg"
				/>
			</div>
			<div class="flex flex-col items-center space-y-4">
				<p class="text-lg text-gray-700 flex items-center">
					<i class="fas fa-map-marker-alt text-primary text-2xl mr-2"></i> 87, rue de Normandie, 94700
					Maisons-Alfort
				</p>
			</div>
		</div>

		<div class="bg-white p-10 rounded-lg shadow-lg mb-12">
			<h2 class="text-4xl font-extrabold text-gray-800 text-center mb-8">
				Informations de l'agence
			</h2>
			<div class="text-lg text-gray-700 space-y-6">
				<p>
					Nous vous proposons plusieurs prestations : portage de repas, livraison de courses à
					domicile, assistance informatique, assistance aux démarches administratives.
				</p>
				<p>Notre équipe est à votre écoute : <span class="font-semibold">01 45 18 93 98</span></p>
				<p>Bienvenue sur notre site,</p>
				<p>
					Que vous soyez un aidant familial qui a besoin de souffler, une personne en situation de
					handicap ponctuel ou durable, ou tout simplement désireux de vous épargner de temps en
					temps les contraintes qu’impliquent les préparations de repas, nous vous proposons une
					alternative, adaptée à votre rythme, ainsi qu’à vos habitudes alimentaires.
				</p>
				<p>
					Avec nos menus hebdomadaires qui se déclinent sur une large gamme de choix, de régimes, et
					de textures modifiées, les repas que nous vous proposons garantissent équilibre nutritif,
					fraîcheur et qualité gustative.
				</p>
				<p>
					Mon équipe et moi-même sommes à votre disposition pour étudier avec vous la solution la
					plus adaptée.
				</p>
				<p>A bientôt !</p>
				<p>
					Du lundi au jeudi : 9h00 à 12h30 et 14h30 à 18h30<br />
					Le vendredi : 9h00 à 13h00<br />
					Le dimanche : 15h00 à 18h30 / Permanence téléphonique
				</p>
			</div>
			<div class="flex flex-col items-center space-y-4 mt-8">
				<img src={fabien} alt="chef" class=" mb-4 shadow-lg" />
				<div class="text-center space-y-2">
					<p class="text-lg text-gray-700 flex items-center justify-center space-x-2">
						<i class="fas fa-user text-primary text-xl"></i> <span>Fabien Fellous</span>
					</p>
					<p class="text-lg text-gray-700 flex items-center justify-center space-x-2">
						<i class="fas fa-envelope text-primary text-xl"></i> <span>info@clapstoche.com</span>
					</p>
					<p class="text-lg text-gray-700 flex items-center justify-center space-x-2">
						<i class="fas fa-phone text-primary text-xl"></i> <span>01 45 18 93 98</span>
					</p>
				</div>
			</div>
		</div>

		<!-- Section Formulaire de contact -->
		<div class="bg-white p-8 rounded-lg shadow-md mb-8">
			<h2 class="text-4xl font-extrabold text-gray-800 text-center mb-6">Contactez-nous</h2>
			<form class="space-y-6">
				<div class="flex flex-col">
					<label for="name" class="mb-2 text-lg text-gray-800">Nom</label>
					<input
						type="text"
						id="name"
						name="name"
						class="p-3 rounded border border-gray-300"
						required
					/>
				</div>
				<div class="flex flex-col">
					<label for="email" class="mb-2 text-lg text-gray-800">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						class="p-3 rounded border border-gray-300"
						required
					/>
				</div>
				<div class="flex flex-col">
					<label for="message" class="mb-2 text-lg text-gray-800">Message</label>
					<textarea
						id="message"
						name="message"
						class="p-3 rounded border border-gray-300 h-32"
						required
					></textarea>
				</div>
				<div class="text-center">
					<button
						type="submit"
						class="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primaryPalet-600 transition duration-300"
						>Envoyer</button
					>
				</div>
			</form>
		</div>
	</div>
</main>
