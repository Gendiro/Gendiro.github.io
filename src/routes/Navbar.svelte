<script lang="ts">
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	export let isLoading: boolean;
	export let routes: { route: string; name: string }[] = [];

	const goto_fade = (addr: string) => {
		isLoading = true;
		goto(addr);
	};
</script>

{#if !isLoading}
	<nav out:fly={{ y: 500, duration: 1000 }}>
		{#each routes as { route, name }}
			<button on:click={() => goto_fade(route)} class="main-button">{name}</button>
		{/each}
	</nav>
{/if}

<style>
	nav {
		display: inline-flex;
		font-size: xxx-large;
		gap: 100px;
		position: absolute;
		right: 100px;
		top: 50px;
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
