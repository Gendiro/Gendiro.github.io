<script lang="ts">
	import { format, formatDistanceToNowStrict } from 'date-fns';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import type { compactImageData } from '$lib/types';

	let imageData: compactImageData;

	let imagePostData: string;
	let imageDiffData: string;

	$: {
		if (imageData) {
			imagePostData = `Posted: ${format(new Date(imageData.date), 'dd MMM yyy')}`;
			imageDiffData = `It's been: ${formatDistanceToNowStrict(new Date(imageData.date))}`;
		}
	}

	onMount(() => {
		nextComic();
	});

	async function nextComic() {
		let imageDataResponse = await fetch(`${base}/comic/next`);
		imageData = (await imageDataResponse.json()) as compactImageData;
	}
</script>

<div id="xkcd-comic-container">
	{#if !imageData}
		<p>The page is loading</p>
	{:else}
		<legend id="xkcd-comic-legend">{imageData.title}</legend>
		<img src={imageData.src} alt={imageData.alt} id="xkcd-comic-img" />
		<div class="xkcd-comic-date">{imagePostData}</div>
		<br />
		<div class="xkcd-comic-date">{imageDiffData}</div>
		<button on:click={nextComic}>Fetch another</button>
	{/if}
</div>

<style>
	#xkcd-comic-container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		align-content: center;
	}

	#xkcd-comic-legend,
	.xkcd-comic-date {
		display: flex;
		width: 100vw;
		text-align: center;
		justify-content: center;
		font-size: min(6vh, 3vw);
		margin: 3vh 0 3vh 0;
	}

	#xkcd-comic-img {
		font-size: min(6vh, 3vw);
	}
	button {
		background-color: black;
		width: 10vw;
		font-size: 1.5rem;
		color: white;
		border: 1px solid white;
		border-radius: 15px;
		margin-bottom: 5vh;
	}
</style>
