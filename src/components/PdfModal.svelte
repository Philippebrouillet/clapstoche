<script>
	export let selectedPdf;
	export let closeMenu;
</script>

<div class="fixed w-screen h-screen top-0 left-0 z-[100]">
	<button
		on:click={closeMenu}
		class="absolute top-2 right-32 py-1 px-3 bg-white text-gray-800 rounded-full hover:text-primary transition-colors duration-300"
		aria-label="Close menu"
	>
		<i class="fas fa-times text-xl"></i>
	</button>
	<iframe
		title="menu"
		src={selectedPdf}
		class="w-full h-full rounded-lg shadow-lg"
		frameborder="0"
		allow="fullscreen"
	></iframe>
</div>
