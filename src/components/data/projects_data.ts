
const Data: Object[] = [
	{
		title: 'Summit Calculator',
		stack: ['React', 'Vite'],
		description:
			"A line based calculator where every line is its own calculator. The result is generated as you type a formula. It is smart enough to know what's math and what isn't, so go ahead and make some notes with your equations. One line can also reference another, so you can build complex sequences of calculations very easily. In the future, I plan to add support for saving multiple sheets, namable variables, and some other features. Did I mention there's a dark mode??",
		image_src: "/images/stacked-calculator.jpg",
		live_url: 'https://chartley1988.github.io/chartleys-calculator/',
		github_url: 'https://github.com/chartley1988/chartleys-calculator',
		key_value: 'calculator',
	},
	{
		title: 'Solitaire',
		stack: ['HTML', 'CSS', 'Javascript'],
		description:
			'Classic Solitaire! Built using vanilla Javascript. I had two main objectives with this project, the primary one was to learn to collaborate with another developer and learn the processes for sharing a github repo. The other was to learn a wider set of developer tools including webpack and linters, and refine the process of code splitting. The biggest challenges were probably the animations! It took a while to get them right, but I think they distinguish this version of Solitiare from many others out there. The ultimate purpose of this project is not actually Solitaire, but a framework for creating any card game, so future updates will concentrate on making more reusable components and functions for rapid prototyping.',
		image_src: '/images/solitaire_screenshot.jpg',
		live_url: 'https://daver067.github.io/card-games/',
		github_url: 'https://github.com/Daver067/card-games',
		key_value: 'solitaire',
	},
	{
		title: 'Chartley Designs',
		stack: ['Next.JS'],
		description:
			'This website is also a current project! Built with react using NextJS. This is really my first major foray into react. The blog is powered by Sanity CMS as a backend. This website is also my first time using a CMS.',
		image_src: "/images/chartleys_website_screenshot.jpg",
		live_url: 'https://chartley1988.github.io/chartley-website/',
		github_url: 'https://github.com/chartley1988/chartley-website',
		key_value: 'website',
	},
/* 	{
		title: 'OldGrowth, the Game',
		stack: [],
		description:
			'A game very early in development. Built with Godot. Chronicles an old man planting trees, as he tries to redeem himself from a troubled past.',
		image_src: "/images/oldgrowth_screenshot.png",
		live_url: 'https://www.oldgrowthgame.com/',
		github_url: undefined,
		key_value: 'oldgrowth',
	}, */
];

export default Data;
