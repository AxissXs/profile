import type { ProjectEntry, Tech } from './types';
// import PHP from "virtual:icons/catppuccin/php"

export let technologies: { [key: string]: Tech } = {
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
	},
	Svelte: {
		name: 'Svelte',
		logo: 'https://placehold.co/32x32/FFF/ff4500?font=noto-sans&text=Svelte'
	},
	Serverless: {
		name: 'Serverless',
		logo: 'https://placehold.co/32x32/FFF/ff4500?font=noto-sans&text=Serverless'
	},
	Vercel: {
		name: 'Vercel',
		logo: 'https://placehold.co/32x32/FFF/ff4500?font=noto-sans&text=Vercel'
	},
	NeonDB: {
		name: 'NeonDB',
		logo: 'https://placehold.co/32x32/FFF/ff4500?font=noto-sans&text=NeonDB'
	},
	TypeScript: {
		name: 'TypeScript',
		logo: 'https://placehold.co/32x32/FFF/ff4500?font=noto-sans&text=TypeScript'
	},
	PostgreSQL: {
		name: 'PostgreSQL',
		logo: 'https://placehold.co/32x32/FFF/ff4500?font=noto-sans&text=PostgreSQL'
	}
};

export let projects_fa: ProjectEntry[] = [
	{
		title: 'تسمینو – پلتفرم انتشار رپورتاژ آگهی و بک‌لینک',
		description:
			'بهینه‌سازی و توسعه‌ی بخش بک‌اند برای افزایش پایداری و سرعت سیستم در مدیریت رپورتاژها و کمپین‌های بک‌لینک. پیاده‌سازی چندین بهبود ساختاری در پردازش درخواست‌ها و مدیریت داده‌ها با هدف افزایش کارایی و مقیاس‌پذیری.',
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
	},
	{
		title: 'جاجیگا – پلتفرم رزرو آنلاین اقامتگاه‌های مردمی در ایران',
		description:
			'رفع مشکلات بحرانی عملکرد با بهینه‌سازی کوئری‌ها و ساختار بک‌اند، کاهش شدید فشار روی دیتابیس و سرور در ترافیک بالا. طراحی و پیاده‌سازی میکروسرویس جستجو با Laravel برای افزایش سرعت پاسخ‌گویی و استقلال‌پذیری، که باعث ارتقاء ظرفیت سیستم از حدود ۳٬۰۰۰ به بیش از ۵۰٬۰۰۰ کاربر همزمان شد.',
		full_description: '',
		image: '/images/projects/jajiga-logo.png',
		screenshots: [
			'/images/projects/tesmino.webp',
			'/images/projects/tesmino.webp',
			'/images/projects/tesmino.webp',
			'/images/projects/tesmino.webp'
		],
		techs: [
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
		title: 'جاسوس - بازی آنلاین جاسوس',
		description: `طراحی و پیاده‌سازی نسخه‌ی آنلاین بازی Spyfall با استفاده از Svelte و معماری Serverless در Vercel. بهره‌گیری از NeonDB برای مدیریت داده‌ها و اطمینان از عملکرد سریع و مقیاس‌پذیر در محیط‌های بدون سرور.`,
		image: '/images/projects/spycreed-logo.webp',
		full_description: '',
		screenshots: ['/images/projects/spycreed.webp'],
		techs: [
			// PHP، Laravel، MySQL، Redis، Docker، RESTful API، Git، CI/CD، Linux
			technologies.Svelte,
			technologies.Serverless,
			technologies.Vercel,
			technologies.NeonDB,
			technologies.TypeScript,
			technologies.PostgreSQL
		]
	}
];

export let projects_en: ProjectEntry[] = [
	{
		title: 'Tesmino – PR and Backlink Platform',
		description:
			'Developed and optimized the backend infrastructure of Tesmino platform, focusing on performance, scalability, and enhancing user experience in managing PR and backlink campaigns.',
		full_description: '',
		screenshots: [''],
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
		title: 'Jajiga – Online Booking Platform for Accommodation rentals',
		description: `Resolved major backend and database bottlenecks through query optimization and architecture tuning, significantly reducing server load under high traffic. Designed and implemented a dedicated Laravel-based microservice for search, increasing the platform's capacity from ~3,000 to over 50,000 concurrent users`,
		image: '/images/projects/jajiga-logo.png',
		full_description: '',
		screenshots: [''],
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
		title: 'SpyCreed – Online Spyfall Game',
		description: `Designed and implemented an online version of the Spyfall game using Svelte and a serverless architecture on Vercel. Utilized NeonDB for data management, ensuring fast and scalable performance in a serverless environment.`,
		image: '/images/projects/spycreed-logo.webp',
		full_description: '',
		screenshots: ['/images/projects/spycreed.webp'],
		techs: [
			technologies.Svelte,
			technologies.Serverless,
			technologies.Vercel,
			technologies.NeonDB,
			technologies.TypeScript,
			technologies.PostgreSQL
		]
	}
];
