import type { ProjectEntry, Tech } from "./types";

export let technologies : {[key: string]: Tech} = {
	React: {
		name: 'React',
		logo: 'https://placehold.co/32x32/FFF/00ffff?font=noto-sans&text=React'
	},
	Vue: {
		name: 'Vue',
		logo: 'https://placehold.co/32x32/FFF/ffff00?font=noto-sans&text=Vue'
	},
	NodeJS: {
		name: 'Node.js',
		logo: 'https://placehold.co/32x32/FFF/00ff00?font=noto-sans&text=Node.js'
	},
	MongoDB: {
		name: 'MongoDB',
		logo: 'https://placehold.co/32x32/FFF/00ff00?font=noto-sans&text=MongoDB'
	},
	Firebase: {
		name: 'Firebase',
		logo: 'https://placehold.co/32x32/FFF/ffff00?font=noto-sans&text=Firebase'
	},
	TailwindCSS: {
		name: 'Tailwind CSS',
		logo: 'https://placehold.co/32x32/FFF/0000ff?font=noto-sans&text=Tailwind'
	},
	HTML: {
		name: 'HTML',
		logo: 'https://placehold.co/32x32/FFF/ff7f50?font=noto-sans&text=HTML'
	},
	CSS: {
		name: 'CSS',
		logo: 'https://placehold.co/32x32/FFF/4682b4?font=noto-sans&text=CSS'
	},
	JavaScript: {
		name: 'JavaScript',
		logo: 'https://placehold.co/32x32/FFF/ffff00?font=noto-sans&text=JS'
	},
	PHP: {
		name: 'PHP',
		logo: 'https://placehold.co/32x32/FFF/ff4500?font=noto-sans&text=PHP'
	},
	Laravel: {
		name: 'Laravel',
		logo: 'https://placehold.co/32x32/FFF/ff4500?font=noto-sans&text=Laravel'
	},
	MySQL: {
		name: 'MySQL',
		logo: 'https://placehold.co/32x32/FFF/ff4500?font=noto-sans&text=MySQL'
	},
	Redis: {
		name: 'Redis',
		logo: 'https://placehold.co/32x32/FFF/ff4500?font=noto-sans&text=Redis'
	},
	Docker: {
		name: 'Docker',
		logo: 'https://placehold.co/32x32/FFF/ff4500?font=noto-sans&text=Docker'
	},
	RESTfulAPI: {
		name: 'RESTful API',
		logo: 'https://placehold.co/32x32/FFF/ff4500?font=noto-sans&text=REST'
	},
	Git: {
		name: 'Git',
		logo: 'https://placehold.co/32x32/FFF/ff4500?font=noto-sans&text=Git'
	},
	CICD: {
		name: 'CI/CD',
		logo: 'https://placehold.co/32x32/FFF/ff4500?font=noto-sans&text=CI/CD'
	},
	Linux: {
		name: 'Linux',
		logo: 'https://placehold.co/32x32/FFF/ff4500?font=noto-sans&text=Linux'
	}
};

export let projects_fa: ProjectEntry[] = [
	{
		title: 'تسمینو – پلتفرم انتشار رپورتاژ آگهی و بک‌لینک',
		description:
			'توسعه و بهینه‌سازی زیرساخت بک‌اند پلتفرم تسمینو با تمرکز بر بهبود عملکرد، مقیاس‌پذیری و ارتقاء تجربه کاربری در مدیریت کمپین‌های رپورتاژ آگهی و بک‌لینک.',
		full_description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		image: '/images/projects/tesmino-logo.svg',
		screenshots: [
			'/images/projects/tesmino.webp',
			'/images/projects/tesmino.webp',
			'/images/projects/tesmino.webp',
			'/images/projects/tesmino.webp'
		],
		techs: [
			// PHP، Laravel، MySQL، Redis، Docker، RESTful API، Git، CI/CD، Linux
			technologies.PHP,
			technologies.Laravel,
			technologies.MySQL,
			technologies.Redis,
			technologies.Docker,
			technologies.RESTfulAPI,
			technologies.Git,
			technologies.CICD,
			technologies.Linux
		]
	}
];

export let projects_en = [
	{
		title: 'Tesmino – PR and Backlink Platform',
		description:
			'Developed and optimized the backend infrastructure of Tesmino platform, focusing on performance, scalability, and enhancing user experience in managing PR and backlink campaigns.',
		image: 'https://tesmino.com/_nuxt/labled-logo.1bfc2b1b.svg',
		techs: [
			// PHP، Laravel، MySQL، Redis، Docker، RESTful API، Git، CI/CD، Linux
			technologies.PHP,
			technologies.Laravel,
			technologies.MySQL,
			technologies.Redis,
			technologies.Docker,
			technologies.RESTfulAPI,
			technologies.Git,
			technologies.CICD,
			technologies.Linux
		]
	},
	{
		title: 'E-commerce App',
		description: 'A mock e-commerce application with a modern UI.',
		image: 'https://placehold.co/600x400',
		techs: [technologies.React, technologies.NodeJS, technologies.MongoDB]
	},
	{
		title: 'Blog Platform',
		description: 'A blogging platform with markdown support.',
		image: 'https://placehold.co/600x400',
		techs: [technologies.Vue, technologies.Firebase, technologies.TailwindCSS]
	}
];
