<script>
	import partners from '../utils/partners';
</script>

<section class="py-56 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-primary mb-8 text-center">Nos Partenaires</h2>
		<div class="relative">
			<div class="overflow-hidden">
				<div class="scrolling-content mb-2">
					{#each partners as partner}
						<div class="flex-shrink-0 px-4">
							<img class="w-32 h-auto" src={partner.logo} alt={partner.alt} />
						</div>
					{/each}
				</div>
				<div class="scrolling-content reverse">
					{#each partners as partner}
						<div class="flex-shrink-0 px-4">
							<img class="w-32 h-auto" src={partner.logo} alt={partner.alt} />
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
