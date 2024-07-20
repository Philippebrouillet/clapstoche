<script>
	import articles from '../utils/articles';

	let textContent;
</script>

<section class=" relative py-56 pt-22">
	<div class="absolute right-0 top-0 w-1/4 bg-primary h-full z-0"></div>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-4xl font-bold mb-16 text-center">Clapstoche vous informe</h2>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<!-- three first articles  -->
			{#each articles.slice(0, 3) as article}
				<a
					href="/actualites"
					class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
				>
					<img class="w-full h-48 object-cover" src={article.image} alt={article.title} />
					<div class="p-6">
						<h3 class="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
						<p class="text-gray-600 mb-2">{article.date}</p>
						<p class="text-gray-700">{article.litleContent}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
