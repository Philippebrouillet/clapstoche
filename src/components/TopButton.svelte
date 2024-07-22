<script>
	import { browser } from '$app/environment';
	import { onDestroy } from 'svelte';

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	let isVisible = false;

	function handleScroll() {
		isVisible = window.scrollY > 300;
	}

	if (browser) window.addEventListener('scroll', handleScroll);

	onDestroy(() => {
		if (browser) window.removeEventListener('scroll', handleScroll);
	});
</script>

<button
	on:click={scrollToTop}
	class={`fixed bottom-24 lg:bottom-6 right-6 py-2.5 px-4 bg-primary text-white rounded-full shadow-lg hover:bg-primaryPalet-600 focus:outline-none transition-transform transform duration-500 active:scale-95 ${
		isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
	}`}
	aria-label="Retour en haut"
>
	<i class="fa-solid fa-arrow-up"></i>
</button>
