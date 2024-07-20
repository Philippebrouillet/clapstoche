<script>
	import articles from '../../../utils/articles';
	import { page } from '$app/stores';

	let index = $page.params.index;
	let textContent;

	$: article = articles[index];
	$: if (textContent) textContent.innerHTML = article?.content;
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
		<div class="col-span-2">
			{#if article}
				<div>
					<h1 class="text-4xl font-bold mb-4">{article.title}</h1>
					<img
						src={article.image}
						alt="article"
						class="w-full h-[500px] object-cover mb-6 rounded-lg"
					/>
					<span class="text-gray-500 text-sm block mb-2">{article.date}</span>
					<div class="text-gray-700 text-base mb-4" bind:this={textContent}></div>
				</div>
			{/if}
		</div>

		<aside class="  bg-white shadow-lg rounded-lg p-6">
			<h2 class="text-3xl font-extrabold text-gray-900 mb-6 py-2">Autres articles</h2>
			<ul class="">
				{#each articles as article, i}
					<li class:bg-gray-100={index === i} class="mb-6 p-2 rounded-lg hover:bg-gray-50">
						<button
							class="text-left"
							on:click={() => {
								index = i;
							}}
						>
							<h2
								class="block text-primary hover:text-primaryPalet-600 transition duration-300
							ease-in-out text-lg font-semibold mb-1"
							>
								{article.title}
							</h2>
							<span class="text-gray-500 text-sm">{article.date}</span>
						</button>
					</li>
				{/each}
			</ul>
		</aside>
	</div>
</div>
