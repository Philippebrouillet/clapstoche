<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
	import TopButton from '../components/TopButton.svelte';
</script>

<div class="app bg-gray-50 h-full">
	<Navbar />

	<main>
		<slot />
	</main>

	<TopButton />

	<Footer />
</div>
