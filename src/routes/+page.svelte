<script>
	import FadeInText from './FadeInText.svelte';
	import cat_png from '$lib/images/cat.png';
</script>

<div id="main-page">
	<nav>
		<p>Portfolio</p>
		<p>Contact me</p>
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

<style>
	:root {
		background: url($lib/images/main_background.png) #1b1b1b no-repeat bottom left / 100% auto;
		width: 100vw;
		height: 100vh;
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
</style>
