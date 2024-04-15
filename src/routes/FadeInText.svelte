<script lang="ts">
	import { onMount } from 'svelte';

	let cur_text = '';
	export let text: string;
	export let delay = 100;

	onMount(() => {
		let index = 0;
		const interval = setInterval(() => {
			cur_text += text[index];
			index++;
			if (index === text.length) {
				clearInterval(interval);
			}
		}, delay);

		return () => clearInterval(interval);
	});
</script>

{cur_text}
