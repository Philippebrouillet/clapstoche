<script>
	import reduction from '$lib/images/reduction.png';
	import si from '$lib/images/si.png';
	import cheque from '$lib/images/chéque.png';
	import menus from '../utils/menu';
	import articles from '../utils/articles';
</script>

<footer
	class="bg-gradient-to-b flex justify-center from-gray-800 via-gray-900 to-black text-white py-10"
>
	<div class="flex flex-col gap-20 lg:flex-row container">
		<div class="flex flex-col items-center md:mr-10">
			<img src="/src/lib/images/logo.png" alt="Saveurs et Vie" class="mb-10" />
			<div class="flex space-x-4 mb-4">
				<a
					target="_blank"
					href="https://facebook.com"
					class="hover:text-gray-300 transition-colors duration-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M22 12.072C22 6.486 17.514 2 11.928 2 6.486 2 2 6.486 2 12.072c0 4.992 3.657 9.123 8.437 9.878v-7H8.257V12h2.18v-1.68c0-2.157 1.273-3.34 3.217-3.34.931 0 1.904.166 1.904.166v2.1H14.92c-1.113 0-1.46.692-1.46 1.397V12h2.486l-.398 2.95h-2.088v7C18.343 21.195 22 17.064 22 12.072z"
						/>
					</svg>
				</a>
				<a
					target="_blank"
					href="https://twitter.com"
					class="hover:text-gray-300 transition-colors duration-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M22.46 6c-.77.35-1.6.58-2.46.69a4.302 4.302 0 0 0 1.88-2.37 8.605 8.605 0 0 1-2.73 1.04A4.302 4.302 0 0 0 16.39 4c-2.38 0-4.32 1.93-4.32 4.32 0 .34.04.68.1 1A12.216 12.216 0 0 1 2.88 4.75a4.326 4.326 0 0 0-.58 2.17c0 1.5.76 2.83 1.91 3.61a4.272 4.272 0 0 1-1.96-.54v.06c0 2.09 1.49 3.82 3.46 4.22a4.342 4.342 0 0 1-1.96.07 4.31 4.31 0 0 0 4.03 3 8.636 8.636 0 0 1-5.34 1.85c-.35 0-.7-.02-1.04-.06A12.19 12.19 0 0 0 7.74 22c7.87 0 12.17-6.52 12.17-12.17 0-.18-.01-.36-.02-.54a8.73 8.73 0 0 0 2.15-2.25z"
						/>
					</svg>
				</a>
				<a
					target="_blank"
					href="https://instagram.com"
					class="hover:text-gray-300 transition-colors duration-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.057 1.965.243 2.72.51.756.268 1.405.63 2.034 1.26.63.63.993 1.278 1.26 2.034.267.755.453 1.55.51 2.72.058 1.267.07 1.647.07 4.85 0 3.203-.012 3.584-.07 4.85-.057 1.17-.243 1.965-.51 2.72-.268.756-.63 1.405-1.26 2.034-.63.63-1.278.993-2.034 1.26-.755.267-1.55.453-2.72.51-1.267.058-1.647.07-4.85.07-3.203 0-3.584-.012-4.85-.07-1.17-.057-1.965-.243-2.72-.51-.756-.268-1.405-.63-2.034-1.26-.63-.63-.993-1.278-1.26-2.034-.267-.755-.453-1.55-.51-2.72-.058-1.267-.07-1.647-.07-4.85 0-3.203.012-3.584.07-4.85.057-1.17.243-1.965.51-2.72.268-.756.63-1.405 1.26-2.034.63-.63 1.278-.993 2.034-1.26.755-.267 1.55-.453 2.72-.51 1.267-.058 1.647-.07 4.85-.07zM12 0C8.736 0 8.332.015 7.053.073c-1.28.057-2.157.24-2.91.51-.78.278-1.44.65-2.1 1.31-.66.66-1.032 1.32-1.31 2.1-.27.753-.453 1.63-.51 2.91C.015 8.332 0 8.736 0 12s.015 3.668.073 4.947c.057 1.28.24 2.157.51 2.91.278.78.65 1.44 1.31 2.1.66.66 1.32 1.032 2.1 1.31.753.27 1.63.453 2.91.51 1.28.057 1.684.073 4.947.073s3.668-.015 4.947-.073c1.28-.057 2.157-.24 2.91-.51.78-.278 1.44-.65 2.1-1.31.66-.66 1.032-1.32 1.31-2.1.27-.753.453-1.63.51-2.91.057-1.28.073-1.684.073-4.947s-.015-3.668-.073-4.947c-.057-1.28-.24-2.157-.51-2.91-.278-.78-.65-1.44-1.31-2.1-.66-.66-1.32-1.032-2.1-1.31-.753-.27-1.63-.453-2.91-.51C15.668.015 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-10.845a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z"
						/>
					</svg>
				</a>
			</div>
			<a href="/tarifs" class="bg-transparent border border-white px-4 py-2 mb-2 w-3/4 lg:w-full"
				>NOS TARIFS</a
			>
			<a
				href="https://portage.clapstoche.com/PORTAGE_DE_REPAS/"
				class="bg-transparent border border-white px-4 py-2 mb-2 w-3/4 lg:w-full"
				>JE SUIS DÉJÀ CLIENT</a
			>
			<a href="/menus" class="bg-secondary hover:bg-white text-white px-4 py-2 w-3/4 lg:w-full"
				>COMMANDER EN LIGNE</a
			>
		</div>
		<div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-2">
			<div>
				<h3 class="font-bold mb-4">Nos repas</h3>
				<ul class="space-y-2 text-sm mb-4">
					<li>
						<a href="/menus">Découvrir nos menus </a>
					</li>
					{#each menus as menu, i}
						<li>
							<a href="/menus/{i}">{menu.name}</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h3 class="font-bold mb-4">Articles</h3>
				<ul class="space-y-2 text-sm mb-4">
					<li>
						<a href="/actualites">Découvrir les actualités </a>
					</li>
					{#each articles as actu, i}
						<li>
							<a href="/actualites/{i}">{actu.title}</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h3 class="font-bold mb-4">Financements</h3>
				<ul class="space-y-2 text-sm mb-4">
					<li>
						<a href="/financement">Les financements</a>
					</li>
					<li>
						<a href="/financement/seniors">Financement seniors</a>
					</li>
					<li>
						<a href="/financement/handicap">Financement handicap</a>
					</li>
					<li>
						<a href="/financement/habitat">Financement habitat</a>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="font-bold mb-4">Comment ça marche</h3>
				<ul class="space-y-2 text-sm mb-4">
					<li><a href="/infos">Qui sommes nous?</a></li>
					<li>Préparation des repas</li>
					<li><a href="/#livraison">Livraison</a></li>
					<li>FAQ</li>
				</ul>
				<h3 class="font-bold mb-4">Expertise nutrition</h3>
				<ul class="space-y-2 text-sm mb-4">
					<li><a href="/menus">Nos repas</a></li>
					<li><a href="/infos">L'histoire de Clapstoche</a></li>
				</ul>
			</div>

			<div>
				<h3 class="font-bold mb-4">Qui sommes-nous ?</h3>
				<ul class="space-y-2 text-sm mb-4">
					<li><a href="/#partenaires">Nos partenaires</a></li>
					<li><a href="/agence">Notre agence</a></li>
				</ul>
				<h3 class="font-bold mb-4">Besoin d'aide ?</h3>
				<ul class="space-y-2 text-sm mb-4">
					<li>Contactez-nous</li>
				</ul>
			</div>
		</div>
	</div>
</footer>

<style>
	a {
		transition: color 150ms;
	}

	a:hover {
		color: #be185d;
	}
</style>
