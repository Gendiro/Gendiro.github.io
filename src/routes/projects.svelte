<script lang="ts">
	const IdToDescription: Map<string, string> = new Map();

	IdToDescription.set(
		'react-project-text',
		`
        Embracing the undeniable prominence of React as the leading
        JavaScript component library in the realm of frontend development,
        I embarked on a mission to acquire this indispensable skill.
        Recognizing the magnitude of its influence, I committed myself to mastering
        React, and now proudly present my inaugural project, showcasing the seamless
        integration of components in creating powerful and dynamic user interfaces.
        `
	);

	IdToDescription.set(
		'leetcode-project-text',
		`
        In my quest for success, I came to a profound realization:
        while expertise in cutting-edge technologies like React is valuable,
        the true foundation of achievement lies in mastering the fundamentals.
        With this epiphany in mind, I embarked on a journey to reconnect with
        the essence of computer science by immersing myself in Leetcode.
        This pursuit allowed me to refresh my knowledge of data structures and
        algorithms, while also uncovering new insights along the way.
        `
	);

	IdToDescription.set(
		'discord-project-text',
		`
        What began as a humble experiment within a friend's company
        has blossomed into a powerful and indispensable tool used daily
        by a community of 30 individuals. This Discord bot, designed with
        immersive MMORPG-styled quests, serves as a catalyst, encouraging
        active participation and motivation in various activities.
        `
	);

	let opened: Map<string, boolean> = new Map();

	function toggle_story(project_element_id: string): void {
		opened.set(project_element_id, !opened.get(project_element_id));
		opened = opened;
	}
</script>

<h1>My achievements</h1>

<div id="projects">
	<div class="project">
		<div class="project-text" id="discord-project-text">
			<h3 class="project-title">Quest discord bot, 2022</h3>
			<div class="tags">
				<button
					class="tag"
					on:click={() => toggle_story('discord-project-text')}
					id="discord-project-text-readme">Read the story</button
				>
				<a href="https://github.com/Gendiro/Thoth"><div class="repo tag">Repo</div></a>
			</div>
			{#if opened.get('discord-project-text')}
				<div class="description">
					{IdToDescription.get('discord-project-text')}
				</div>
			{/if}
			<div id="discord-project-text-body">
				Here I learned python, discord API and mongoDB. First time working with async code.
			</div>
		</div>
		<img src="images/python-logo.png" alt="python logo" class="project-logo" />
	</div>
	<div class="project">
		<img src="images/leetcode-logo.png" alt="python logo" class="project-logo" id="leetcode-logo" />
		<div class="project-text" id="leetcode-project-text">
			<h3 class="project-title">Leetcode, 2023</h3>
			<div class="tags">
				<button
					class="tag"
					on:click={() => toggle_story('leetcode-project-text')}
					id="leetcode-project-text-readme">Read the story</button
				>
				<a href="https://leetcode.com/grabberisonfire/"
					><div class="repo website tag">Website</div></a
				>
			</div>
			{#if opened.get('leetcode-project-text')}
				<div class="description">
					{IdToDescription.get('leetcode-project-text')}
				</div>
			{/if}
			<div id="leetcode-project-text-body">
				Here I practice my DSA skills and already solved over 90 problems covering most of the
				topics.
			</div>
		</div>
	</div>
	<div class="project">
		<div class="project-text" id="react-project-text">
			<h3 class="project-title">React calculator, 2023</h3>
			<div class="tags">
				<button
					class="tag"
					on:click={() => toggle_story('react-project-text')}
					id="react-project-text-readme">Read the story</button
				>
				<a href="https://github.com/Gendiro/koalemos"><div class="repo tag">Repo</div></a>
			</div>
			{#if opened.get('react-project-text')}
				<div class="description">
					{IdToDescription.get('react-project-text')}
				</div>
			{/if}
			<div id="react-project-text-body">
				Here I learned js, npm, React and vite and how to use them with html/css.
			</div>
		</div>
		<img src="images/react-logo.png" alt="python logo" class="project-logo" />
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

	#projects {
		display: inline-block;
	}

	.project {
		display: flex;
		justify-content: center;
		width: 100vw;
		font-size: min(4vh, 2vw);
		margin-bottom: 10vh;
	}

	.project-text {
		width: 70vw;
	}

	.tags {
		display: inline-flex;
		width: 70vw;
		margin-bottom: 2vh;
	}

	.tag {
		margin-right: 1vw;
	}

	.tag,
	img {
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */
	}

	.project-logo {
		width: min(18vh, 8.5vw);
		height: min(18vh, 8.5vw);
		margin-top: 2vh;
		margin-left: 5vw;
	}

	.project-logo + div.project-text {
		padding-left: 5vw;
	}

	#leetcode-logo {
		margin-top: 5vh;
	}

	.repo {
		border: 0.3vh dashed white;
		width: 5vw;
		border-radius: 1vh;
		padding-left: 0.4vw;
		padding-bottom: 0.4vh;
	}

	.website {
		border: 0.3vh dashed white;
		width: 8vw;
		border-radius: 1vh;
		padding-left: 0.5vw;
		padding-bottom: 0.5vh;
	}

	.project-title {
		font-size: min(6vh, 3vw);
		font-weight: normal;
		width: 70vw;
		margin-bottom: 2vh;
	}

	.tag:hover {
		opacity: 50% !important;
	}
	a {
		color: inherit;
		text-decoration: inherit;
	}
	.description {
		margin-bottom: 2vh;
		width: 50vw;
		padding: 1vw;
		font-size: 3vh;
		background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='15' ry='15' stroke='white' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
	}
	button {
		background-color: black;
		width: 10vw;
		font-size: 1.5rem;
		color: white;
		border: 1px solid white;
		border-radius: 15px;
	}
</style>
