<h1 id="my-stack">My stack</h1>

<div id="stacks">
	<div id="confident-stack">
		<h3 class="center-text">I know</h3>
		<ol>
			<li>HTML/CSS</li>
			<li>Javascript</li>
			<li>React</li>
			<li>Vite, webpack</li>
			<li>Git</li>
		</ol>
	</div>

	<div id="familiar-stack">
		<h3 class="center-text">I'm familiar</h3>
		<ol>
			<li>Typescript</li>
			<li>C++</li>
			<li>Java</li>
			<li>Python, django</li>
			<li>MongoDB</li>
		</ol>
	</div>
</div>

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

	h1 {
		width: 100vw;
		text-align: center;
		margin: 4vh 0 4vh 0;
		font-size: min(7vh, 3.5vw);
	}

	#stacks {
		width: 100vw;
		display: flex;
		justify-content: center;
		font-size: min(6vh, 3vw);
	}

	#confident-stack,
	#familiar-stack {
		background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='15' ry='15' stroke='white' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
		border-radius: 15px;
		padding: 2vh;
		margin: 0 5vw 0 5vw;
	}

	.center-text {
		text-align: center;
	}

	ol {
		list-style: none;
		counter-reset: steps;
	}
	ol li {
		counter-increment: steps;
	}
	ol li::before {
		content: counter(steps);
		margin-right: 0.3rem;
		background: white;
		color: black;
		width: 0.8em;
		height: 0.8em;
		border-radius: 50%;
		display: inline-grid;
		place-items: center;
		line-height: 0.8em;
	}
</style>
