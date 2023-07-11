<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Roman Pogrebnyak's Portfolio</title>
	</head>
	<body>
		<header>
			<h1>Roman Pogrebnyak's portfolio</h1>
			<nav>
				<a href="{base}/" class={$page.url.pathname === '/' ? 'current' : ''}>Homepage</a>
				<a href="{base}/comic" class={$page.url.pathname === '/comic' ? 'current' : ''}>Comic</a>
			</nav>
		</header>
		<slot />
		<footer>
			No rights reservered<br />
			Made by Roman Pogrebnyak for the best front-end course❤️
		</footer>
	</body>
</html>

<style>
	@font-face {
		font-family: 'Outfit-Regular';
		src: local('fonts/Outfit-Regular.ttf');
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Outfit-Regular', serif;
	}

	body {
		background-color: #0d1117;
		color: #e6edf3;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	/* Chrome */
	body::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	body {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	header {
		display: flex;
		flex-wrap: wrap;
		margin-top: 3vh;
		margin-bottom: 3vh;
		font-size: 2rem;
		width: 100vw;
		text-align: center;
		justify-content: center;
	}

	header h1 {
		width: 100vw;
	}

	nav {
		display: flex;
		width: 100vw;
		justify-content: space-evenly;
	}

	nav a {
		margin-top: 3vh;
		color: inherit;
		text-decoration: inherit;
	}

	header a.current {
		border-bottom: 3px solid white;
	}

	footer {
		font-size: 1rem;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		align-content: center;
		width: 100vw;
		height: 10vh;
		border-top: 1px solid gray;
		text-align: center;
	}
</style>
