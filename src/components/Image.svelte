<script>
	export let src, alt, cat;
	let isWrite = false;
	let inputText;
	let imageURL;
	let isLoading = false;
	import { PUBLIC_IMAGE_BASE_URL } from '$env/static/public';

	const addText = async () => {
        if(inputText == "") inputText = ' '
		try {
			isLoading = true;
			const response = await fetch(
				`${PUBLIC_IMAGE_BASE_URL}/${cat._id}/says/${encodeURIComponent(
					inputText
				)}?s=50&html=false&json=true`
			);
			const result = await response.json();
			imageURL = `https://cataas.com/${result.url}`;
			isLoading = false;
		} catch (error) {
            console.log(error)
        }
	};
</script>

<div class="relative group overflow-hidden mb-3 rounded-bl-xl rounded-br-xl">
	<img
		loading="lazy"
		class="w-full aspect-auto object-cover rounded-xl"
		src={imageURL && inputText ? imageURL : src}
		{alt}
	/>
	<div
		class="overlay absolute duration-300 bg-black/70 group-hover:-bottom-0 group-hover:opacity-100 group-hover:pointer-events-auto -bottom-10 opacity-0 pointer-events-none text-white z-10 w-full p-3"
	>
		<div class="actions flex justify-between items-center">
			<a
				class={isWrite ? 'hidden' : 'block'}
				href={imageURL && inputText ? imageURL : src}
				download
			>
				<i class="fas fa-fw fa-download" />
			</a>
			<button type="button" disabled={isLoading} on:click={() => (isWrite = !isWrite)} title="Add Text"
				><i class="fas fa-fw {isLoading ? 'fa-spin fa-spinner-third' : 'fa-pen'}" /></button
			>
			<textarea
				bind:value={inputText}
				on:input={() => addText()}
				spellcheck="false"
				class="w-full text-sm h-auto ml-2 bg-transparent border-b border-gray-800 outline-none {isWrite
					? 'block'
					: 'hidden'}"
				placeholder="Add Text"
			/>
		</div>
	</div>
</div>
