import type { ProjectEntry, Tech } from '$lib/types';
import { Technologies } from './technologies';

let tesminoScreenshots : string[] = [
	'/images/projects/tesmino.webp',
	'/images/projects/tesmino.webp',
	'/images/projects/tesmino.webp',
	'/images/projects/tesmino.webp'
];

let tesminoTechs : Tech[] = [
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
];

let jajigaScreenshots : string[] = [
	'/images/projects/jajiga-shot1.webp',
	'/images/projects/jajiga-shot2.webp'
];

let jajigaTechs : Tech[] = [
	Technologies.PHP,
	Technologies.Laravel,
	Technologies.MySQL,
	Technologies.Redis,
	Technologies.Docker,
	Technologies.RESTfulAPI,
	Technologies.Git,
	Technologies.CICD,
	Technologies.Linux
];

let spyCreedScreenshots : string[] = [
	'/images/projects/spycreed-shot1.webp',
	'/images/projects/spycreed-shot2.webp',
	'/images/projects/spycreed-shot3.webp',
	'/images/projects/spycreed-shot4.webp',
	'/images/projects/spycreed-shot5.webp'
];

let spyCreedTechs : Tech[] = [
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
];

let eloraScreenshots : string[] = [
	'/images/projects/elora-shot1.webp',
	'/images/projects/elora-shot2.webp',
	'/images/projects/elora-shot3.webp'
];
let eloraTechs : Tech[] = [];

export let ptest = "qwertyui";

export let projects_fa: ProjectEntry[] = [
	{
		title: 'تسمینو – پلتفرم انتشار رپورتاژ آگهی و بک‌لینک',
		description:
			'بهینه‌سازی و توسعه‌ی بخش بک‌اند برای افزایش پایداری و سرعت سیستم در مدیریت رپورتاژها و کمپین‌های بک‌لینک. پیاده‌سازی چندین بهبود ساختاری در پردازش درخواست‌ها و مدیریت داده‌ها با هدف افزایش کارایی و مقیاس‌پذیری.',
		full_description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		image: '/images/projects/tesmino-logo.svg',
		screenshots: tesminoScreenshots,
		techs: tesminoTechs
	},
	{
		title: 'جاجیگا – پلتفرم رزرو آنلاین اقامتگاه‌های مردمی در ایران',
		description:
			'رفع مشکلات بحرانی عملکرد با بهینه‌سازی کوئری‌ها و ساختار بک‌اند، کاهش شدید فشار روی دیتابیس و سرور در ترافیک بالا. طراحی و پیاده‌سازی میکروسرویس جستجو با Laravel برای افزایش سرعت پاسخ‌گویی و استقلال‌پذیری، که باعث ارتقاء ظرفیت سیستم از حدود ۳٬۰۰۰ به بیش از ۵۰٬۰۰۰ کاربر همزمان شد.',
		full_description: '',
		image: '/images/projects/jajiga-logo.webp',
		screenshots: jajigaScreenshots,
		techs: jajigaTechs
	},
	{
		title: 'جاسوس - بازی آنلاین جاسوس',
		description: `طراحی و پیاده‌سازی نسخه‌ی آنلاین بازی Spyfall با استفاده از Svelte و معماری Serverless در Vercel. بهره‌گیری از NeonDB برای مدیریت داده‌ها و اطمینان از عملکرد سریع و مقیاس‌پذیر در محیط‌های بدون سرور.`,
		image: '/images/projects/spycreed-logo.webp',
		full_description: '',
		screenshots: spyCreedScreenshots,
		techs: spyCreedTechs
	},
	{
		title: 'Elora Finance',
		description: 'TODO: Description yet to be added',
		image: '/images/projects/elora-logo.webp',
		full_description: '',
		screenshots: eloraScreenshots,
		techs: eloraTechs
	}
];

export let projects_en: ProjectEntry[] = [
	{
		title: 'Tesmino – PR and Backlink Platform',
		description:
			'Developed and optimized the backend infrastructure of Tesmino platform, focusing on performance, scalability, and enhancing user experience in managing PR and backlink campaigns.',
		full_description: '',
		screenshots: tesminoScreenshots,
		image: 'https://tesmino.com/_nuxt/labled-logo.1bfc2b1b.svg',
		techs: tesminoTechs
	},
	{
		title: 'Jajiga – Online Booking Platform for Accommodation rentals',
		description: `Resolved major backend and database bottlenecks through query optimization and architecture tuning, significantly reducing server load under high traffic. Designed and implemented a dedicated Laravel-based microservice for search, increasing the platform's capacity from ~3,000 to over 50,000 concurrent users`,
		image: '/images/projects/jajiga-logo.webp',
		full_description: '',
		screenshots: jajigaScreenshots,
		techs: jajigaTechs
	},
	{
		title: 'SpyCreed – Online Spyfall Game',
		description: `Designed and implemented an online version of the Spyfall game using Svelte and a serverless architecture on Vercel. Utilized NeonDB for data management, ensuring fast and scalable performance in a serverless environment.`,
		image: '/images/projects/spycreed-logo.webp',
		full_description: '',
		screenshots: spyCreedScreenshots,
		techs: spyCreedTechs
	},
	{
		title: 'Elora Finance - ',
		description: 'TODO: Description yet to be added',
		image: '/images/projects/elora-logo.webp',
		full_description: '',
		screenshots: eloraScreenshots,
		techs: eloraTechs
	}
];
