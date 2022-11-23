<script>
	import PawLabel from '../components/PawLabel.svelte';
	import { PUBLIC_IMAGE_BASE_URL } from '$env/static/public';
	import { cats, tags, isLoading, getCats } from '../stores/catsStore';
	import Image from '../components/Image.svelte';
    let tag = '';
</script>

<svelte:head>
	<title>MeowMe</title>
</svelte:head>

<section id="home">
	<div class="flex items-center justify-between mb-6">
        <PawLabel text="Featured Memes" />
        <div class="bg-gray-200 w-full rounded-lg flex justify-between flex-[0.6] px-3 py-1.5 items-center">
            <select bind:value={tag} on:change={() => getCats(tag)} id="tag" class="appearance-none cursor-pointer bg-transparent w-full outline-none">
                {#each $tags as tag }
                    <option value={tag}>{tag == "" ? "Mix" : tag}</option>
                {/each}
            </select>
            <i class="fas fa-fw fa-chevron-down text-gray-400"></i>
        </div>
    </div>
	<div class="columns-2 md:columns-3 gap-3 mb-10">
		{#if !$isLoading}
			{#if $cats }
				{#each $cats as cat}
					<Image src="{PUBLIC_IMAGE_BASE_URL}/{cat._id}" alt={cat._id} {cat} />
				{/each}
			{:else}
				<p>Memes not available with {tag} tag</p>
			{/if}
		{:else}
            <i class="fas fa-fw fa-spin fa-spinner-third text-3xl"></i>
        {/if}
	</div>
</section>
