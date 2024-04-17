<script lang="ts">
	import FadeInText from './FadeInText.svelte';
	import cat_png from '$lib/images/cat.png';
	import { fly } from 'svelte/transition';
	import { onDestroy, onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let isLoading = true;
	onMount(() => {
		isLoading = false;
	});

	onDestroy(() => {
		isLoading = true;
	});

	const goto_fade = (addr: string) => {
		goto(addr);
		isLoading = true;
	};
</script>

{#if !isLoading}
	<div id="main-page" out:fly={{ y: 500, duration: 1000 }}>
		<nav>
			<button on:click={() => goto_fade('/portfolio')} class="main-button">Portfolio</button>
			<button on:click={() => goto_fade('/contacts')} class="main-button">Contact me</button>
		</nav>
		<main>
			<h1><FadeInText text="> Hello, I'm Roman Pogrebnyak" /></h1>
			<div id="short-bio">
				<p><FadeInText text="> Cybersecurity student" /></p>
				<p><FadeInText text="> Fullstack webdev enthusiast" /></p>
				<p><FadeInText text="> Love to code in general" /></p>
			</div>
			<img src={cat_png} alt="cute pfp" id="cat-pfp" />
		</main>
	</div>
{:else}
	Your website is loading...
{/if}

<style>
	:root {
		background-color: #1b1b1b;
	}
	#main-page {
		background: url($lib/images/main_background.svg) #1b1b1b no-repeat bottom left / 100% auto;
		width: 100vw;
		height: 100vh;
		display: flex;
	}
	#main-page {
		color: white;
		font-family: 'Roboto Light', serif;
		font-weight: bold;
	}
	#main-page nav {
		display: inline-flex;
		font-size: xxx-large;
		gap: 100px;
		position: absolute;
		right: 100px;
		top: 50px;
	}
	#main-page h1 {
		font-size: 80px;
		position: absolute;
		left: 25%;
		top: 17%;
	}
	#main-page #short-bio {
		width: 35%;
		font-size: 50px;
		position: absolute;
		right: 5%;
		top: 40%;
		line-height: 40px;
	}
	#cat-pfp {
		position: absolute;
		bottom: 3vh;
		left: 7%;
	}
	.main-button {
		background-color: transparent;
		border-width: 0;
		font-family: inherit;
		font-size: inherit;
		font-style: inherit;
		font-weight: inherit;
		line-height: inherit;
		color: white;
	}
</style>
