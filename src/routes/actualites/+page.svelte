<script>
	import articles from '../../utils/articles';
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-20">
	<h1 class="text-3xl lg:text-4xl font-bold text-center">Actualités</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each articles as article, i}
			<a
				href="/actualites/{i}"
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
