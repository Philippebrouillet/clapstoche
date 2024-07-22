<script>
	import { page } from '$app/stores';
</script>

<div class="flex items-center justify-center min-h-[85vh]">
	<div class="bg-white p-10 md:p-20 rounded-xl shadow-2xl text-center max-w-lg mx-4">
		<div class="flex justify-center mb-8">
			<div class="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
				<span class="text-white text-3xl font-bold">!</span>
			</div>
		</div>
		<h1 class="text-5xl text-red-600 font-extrabold mb-6">Erreur</h1>
		<p class="text-gray-700 text-lg mb-8">{$page.error.message}</p>
		<a href="/" class="linkButton">Retour à l'accueil</a>
	</div>
</div>
