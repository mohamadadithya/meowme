<script>
	let isOpen = false;
</script>

<nav class="py-5 sticky z-20 top-0 bg-white mb-3">
	<ul class="flex text-xl justify-between items-center">
		<li>
			<button on:click={() => (isOpen = !isOpen)}><i class="fas fa-fw fa-bars" /></button>
		</li>
		<li>
			<a href="/" class="font-bold">MeowMe</a>
		</li>
		<li>
			<button>
				<i class="fas fa-fw fa-moon" />
			</button>
		</li>
	</ul>
</nav>

<aside
	class="fixed flex flex-col justify-between bg-white shadow-lg h-screen top-0 left-0 px-8 py-10 z-20 duration-500 {isOpen
		? '-translate-x-0 opacity-100'
		: '-translate-x-full opacity-0'}"
>
	<div>
		<button
			on:click={() => (isOpen = !isOpen)}
			class="absolute bg-amber-500 rounded-bl-xl px-1 rounded-tl-xl text-black right-0 z-0 text-xl"
		>
			<i class="fas fa-fw fa-chevron-left" />
		</button>
		<h2 class="font-bold text-3xl mb-6">MeowMe</h2>
		<ul>
			<li>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://m-adithya.my.id"
					class="hover:text-amber-700 inline-block">About the Developer</a
				>
			</li>
		</ul>
	</div>
	<div class="text-center">
		<p class="text-sm text-gray-700 mb-1">&copy; 2022 Mohamad Adithya</p>
		<p class="text-xs text-gray-500">Powered by <a href="https://cataas.com">cataas.com</a></p>
	</div>
</aside>
