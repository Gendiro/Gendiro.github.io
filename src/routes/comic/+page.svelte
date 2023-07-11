<script lang="ts">
	import { format, formatDistanceToNowStrict } from 'date-fns';
	import { navigating } from '$app/stores';
	export let data;

	$: imageData = data.imageData;

	$: comicDate = `Posted: ${format(
		imageData.date,
		'dd MMM yyy'
	)}\nIt's been: ${formatDistanceToNowStrict(imageData.date)}`;
</script>

<div id="xkcd-comic-container">
	{#if $navigating}
		<p>The page is loading</p>
	{:else}
		<label for="xkcd-comic-img" id="xkcd-comic-label">{imageData.title}</label>
		<img src={imageData.src} alt={imageData.alt} id="xkcd-comic-img" />
		<div id="xkcd-comic-date">{comicDate}</div>
	{/if}
</div>

<style>
	#xkcd-comic-container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		align-content: center;
	}

	#xkcd-comic-label,
	#xkcd-comic-date {
		display: flex;
		width: 100vw;
		text-align: center;
		justify-content: center;
		font-size: min(7vh, 3.5vw);
		margin: 5vh 0 5vh 0;
	}

	#xkcd-comic-img {
		font-size: min(7vh, 3.5vw);
	}
</style>
