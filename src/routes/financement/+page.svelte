<script>
	import habitat from '$lib/images/financeHabitat.png';
	import senior from '$lib/images/financeSenior.png';
	import handicap from '$lib/images/financeHandicap.png';
	import { page } from '$app/stores';

	const href = $page.url.href;
</script>

<main>
	<div class="container mx-auto px-4 py-20">
		<h1 class="text-4xl font-bold text-center text-gray-800 mb-12">Financement</h1>

		<div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
			<!-- Financement seniors -->
			<div class="bg-white rounded-lg shadow-lg p-6 flex flex-col">
				<img
					src={senior}
					alt="Allocation Personnalisée d’Autonomie"
					class="w-full h-48 object-cover rounded-lg mb-4"
				/>
				<h2 class="text-2xl font-bold text-gray-800 mb-4">
					Financement seniors : Allocation Personnalisée d’Autonomie (APA)
				</h2>
				<p class="text-gray-700 mb-4">
					L’APA concerne les personnes âgées de plus de 60 ans, nécessitant une aide au quotidien,
					soit en raison d’une perte d’autonomie ponctuelle ou durable, soit parce que leur état de
					santé nécessite une surveillance régulière.
				</p>
				<a href="{href}/seniors" class="mt-auto self-end linkButton">EN SAVOIR PLUS</a>
			</div>

			<!-- Financement handicap -->
			<div class="bg-white rounded-lg shadow-lg p-6 flex flex-col">
				<img
					src={handicap}
					alt="Prestation de compensation du Handicap"
					class="w-full h-48 object-cover rounded-lg mb-4"
				/>
				<h2 class="text-2xl font-bold text-gray-800 mb-4">
					Financement handicap : Prestation de compensation du Handicap (PCH)
				</h2>
				<p class="text-gray-700 mb-4">
					La PCH est destinée aux personnes qui ont besoin d’une aide dans la réalisation des actes
					de la vie quotidienne du fait d’un handicap. La prise en charge des dépenses liées au
					handicap peut être totale ou partielle, et concernent certaines aides.
				</p>
				<a href="{href}/handicap" class=" mt-auto self-end linkButton">EN SAVOIR PLUS</a>
			</div>

			<!-- Financement habitat -->
			<div class="bg-white rounded-lg shadow-lg p-6 flex flex-col">
				<img
					src={habitat}
					alt="Les aides au logement"
					class="w-full h-48 object-cover rounded-lg mb-4"
				/>
				<h2 class="text-2xl font-bold text-gray-800 mb-4">
					Financement habitat : Les aides au logement
				</h2>
				<p class="text-gray-700 mb-4">
					Les aides financières au logement ont pour but de réduire la dépense de logement. Les
					seniors peuvent percevoir cette aide lorsqu’ils vivent à leur domicile ou en
					établissement, soit : L’APL et L’ALS.
				</p>
				<a href="{href}/habitat" class="mt-auto self-end linkButton">EN SAVOIR PLUS</a>
			</div>
		</div>
	</div>
</main>
