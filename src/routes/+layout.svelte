<script>
    import '../app.css'
	import Navbar from '../components/Navbar.svelte';
</script>

<svelte:head>
    <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@44659d9/css/all.min.css" rel="stylesheet" type="text/css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</svelte:head>

<main class="lg:max-w-2xl container mx-auto px-5 font-poppins">
    <Navbar />
    <slot />
</main>