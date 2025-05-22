import type { ProjectEntry } from './types';
import { Technologies } from './technologies';

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
			Technologies.PHP,
			Technologies.Laravel,
			Technologies.MySQL,
			Technologies.Redis,
			Technologies.Docker,
			Technologies.DevOps,
			Technologies.RESTfulAPI,
			Technologies.Git,
			Technologies.CICD,
			Technologies.Linux,
			Technologies.Server
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
			Technologies.PHP,
			Technologies.Laravel,
			Technologies.MySQL,
			Technologies.Redis,
			Technologies.Docker,
			Technologies.RESTfulAPI,
			Technologies.Git,
			Technologies.CICD,
			Technologies.Linux
		]
	},
	{
		title: 'جاسوس - بازی آنلاین جاسوس',
		description: `طراحی و پیاده‌سازی نسخه‌ی آنلاین بازی Spyfall با استفاده از Svelte و معماری Serverless در Vercel. بهره‌گیری از NeonDB برای مدیریت داده‌ها و اطمینان از عملکرد سریع و مقیاس‌پذیر در محیط‌های بدون سرور.`,
		image: '/images/projects/spycreed-logo.webp',
		full_description: '',
		screenshots: ['/images/projects/spycreed.webp'],
		techs: [
			Technologies.CICD,
			Technologies.NodeJS,
			Technologies.Svelte,
			Technologies.Serverless,
			Technologies.Vercel,
			Technologies.NeonDB,
			Technologies.TypeScript,
			Technologies.PostgreSQL,
			Technologies.TailwindCSS,
			Technologies.HTML,
			Technologies.CSS,
			Technologies.JavaScript
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
			Technologies.PHP,
			Technologies.Laravel,
			Technologies.MySQL,
			Technologies.Redis,
			Technologies.Docker,
			Technologies.DevOps,
			Technologies.RESTfulAPI,
			Technologies.Git,
			Technologies.CICD,
			Technologies.Linux,
			Technologies.Server
		]
	},
	{
		title: 'Jajiga – Online Booking Platform for Accommodation rentals',
		description: `Resolved major backend and database bottlenecks through query optimization and architecture tuning, significantly reducing server load under high traffic. Designed and implemented a dedicated Laravel-based microservice for search, increasing the platform's capacity from ~3,000 to over 50,000 concurrent users`,
		image: '/images/projects/jajiga-logo.png',
		full_description: '',
		screenshots: [''],
		techs: [
			Technologies.PHP,
			Technologies.Laravel,
			Technologies.MySQL,
			Technologies.Redis,
			Technologies.Docker,
			Technologies.RESTfulAPI,
			Technologies.Git,
			Technologies.CICD,
			Technologies.Linux
		]
	},
	{
		title: 'SpyCreed – Online Spyfall Game',
		description: `Designed and implemented an online version of the Spyfall game using Svelte and a serverless architecture on Vercel. Utilized NeonDB for data management, ensuring fast and scalable performance in a serverless environment.`,
		image: '/images/projects/spycreed-logo.webp',
		full_description: '',
		screenshots: ['/images/projects/spycreed.webp'],
		techs: [
			Technologies.CICD,
			Technologies.NodeJS,
			Technologies.Svelte,
			Technologies.Serverless,
			Technologies.Vercel,
			Technologies.NeonDB,
			Technologies.TypeScript,
			Technologies.PostgreSQL,
			Technologies.TailwindCSS,
			Technologies.HTML,
			Technologies.CSS,
			Technologies.JavaScript
		]
	}
];
