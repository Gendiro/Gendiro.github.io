<div id="general-info">
	<div id="socials">
		<h3 class="center-text">My socials</h3>
		<div class="links-box">
			<a href="https://twitter.com/Gendiro2" class="black-font">
				<img src="images/twitter-logo.png" alt="twitter link" class="logo" />
			</a>
			<a href="https://www.linkedin.com/mwlite/in/roman-pogrebnyak-1822b421a" class="black-font">
				<img src="images/linkedin-logo.png" alt="linkedin link" class="logo" />
			</a>
			<a href="https://www.instagram.com/ropero_mage/" class="black-font">
				<img src="images/instagram-logo.png" alt="instagram link" class="logo" />
			</a>
		</div>
	</div>

	<div id="bio">
		Welcome! I'm an aspiring full-stack developer currently studying at Innopolis University,
		fueling my passion for coding at the age of 19.
	</div>

	<div id="contacts">
		<h3>Contact me</h3>
		<div class="links-box">
			<a href="https://github.com/Gendiro" class="black-font">
				<img src="images/github-logo.png" alt="github link" class="logo" />
			</a>
			<a href="https://t.me/ropero_2" class="black-font">
				<img src="images/telegram-logo.png" alt="telegram link" class="logo" />
			</a>
			<a href="mailto:grabberisonfire@gmail.com" class="black-font">
				<img src="images/gmail-logo.png" alt="email link" class="logo" />
			</a>
		</div>
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

	#general-info {
		margin-top: 2vh;
		width: 100vw;
		display: flex;
		justify-content: space-evenly;
		text-align: center;
	}

	#socials,
	#contacts {
		background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='15' ry='15' stroke='white' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
		width: 20vw;
		height: 18vh;
		border-radius: 10px;
		font-size: min(3vh, 1.8vw);
		padding-top: 0.5vh;
	}

	.logo {
		margin-top: 2vh;
		width: min(9vh, 4.5vw);
		height: auto;
	}

	a {
		color: inherit;
		text-decoration: inherit;
	}

	#bio {
		background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='15' ry='15' stroke='white' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
		border-radius: 15px;
		font-size: min(3.6vh, 1.8vw);
		width: 40vw;
		height: 18vh;
		text-align: center;
		padding: 0.8vw 1vw 0 1vw;
	}
	.links-box {
		display: flex;
		justify-content: space-evenly;
	}

	.black-font {
		color: #0d1117;
	}
</style>
