<script lang="ts">
	import email_svg from '$lib/images/email.svg';
	import telegram_svg from '$lib/images/telegram.svg';
	import { fly } from 'svelte/transition';
	import Navbar from '../Navbar.svelte';
	import { onMount } from 'svelte';

	const customRoutes = [
		{ route: '/', name: 'Back' },
		{ route: '/portfolio', name: 'Portfolio' }
	];

	let isLoading = true;
	onMount(() => (isLoading = false));
</script>

<div id="contact-page" in:fly={{ y: 500, duration: 2000 }} out:fly={{ y: 500, duration: 1000 }}>
	<Navbar bind:isLoading routes={customRoutes} />
	<div id="contact-ways" class="center">
		<div class="contact-way center">
			<img src={email_svg} alt="email" />
			<a href="mailto:grabberisonfire@gmail.com">Email</a>
		</div>
		<div class="contact-way center">
			<img src={telegram_svg} alt="telegram" />
			<a href="https://t.me/ropero_2">Telegram</a>
		</div>
	</div>
</div>

<style>
	#contact-page {
		background-color: #1b1b1b;
		width: 100vw;
		height: 100vh;
		color: white;
	}
	.contact-way {
		width: 50%;
		height: 100px;
		font-size: 50px;
		gap: 30px;
	}
	.center {
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: center;
	}
	.contact-way img {
		width: 20%;
		height: auto;
	}
	#contact-ways {
		position: absolute;
		top: 40%;
		left: 12.5%;
		gap: 100px;
		width: 75%;
	}
	#contact-ways a {
		text-decoration: none;
		color: white;
	}
</style>
