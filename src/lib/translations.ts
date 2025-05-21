interface Translations {
	[locale: string]: {
		[key: string]: any;
	};
}

import {projects_en, projects_fa} from '$lib/projects';

export default {
	en: {
		title: 'Amir Ghamari - Backend Developer',
		description:
			'Amir Ghamari - Backend Developer, Laravel, PHP, Python, Django, API Development, Microservices, Application Security',
		keywords:
			'Amir Ghamari, Backend Developer, Laravel, PHP, Python, Django, API Development, Microservices, Application Security',
		'header.full_name': 'Amir Hossein Ghamari',
		'header.profession': 'Backend Developer',
		'header.location': 'Location',
		'header.location_desc': 'Guilan, Iran',
		'header.current_position': 'Current Position',
		'header.available_for': 'Available for',
		'header.current_position_desc': 'Freelance Backend Developer & Programming Instructor',
		'header.available_for_desc': 'Remote Backend Roles',
		'header.get_in_touch': 'Get in Touch',
		'nav.resume': 'Resume',
		'nav.skills': 'Skills and Competencies',
		'nav.stacks': 'Tech Stacks',
		'nav.projects': 'Projects',
		'resume.brief': 'A brief overview about me and my professional background',
		'resume.brief_desc':
			'<strong>Backend developer with {{years_of_experience}}+ years of experience</strong> focused on Laravel and scalable web architecture.<br />I have built <strong>robust APIs</strong>, developed a <strong>custom document converter</strong> supporting Farsi encoding using headless LibreOffice and Unoconv, and <strong>transformed high-load systems</strong> into microservices capable of serving tens of thousands of users.<br />I’m also familiar with <strong>frontend technologies</strong> and <strong>Python/Django</strong> for API development.<br />Passionate about <strong>application security</strong>, especially OWASP best practices.<br />Currently seeking opportunities to <strong>join a team</strong> or work in <strong>remote backend roles</strong>.',
		'resume.experience': 'Experiences',
		'resume.experience_desc': [
			`<p class="font-bold">Freelance Backend Developer & Programming Instructor</p>
			<p class="text-sm text-gray-500">Remote · {{start_date_freelance_3}} – Present</p>
			<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">
				<li>Developing Laravel-based web applications, WordPress websites, and scalable backend APIs for clients.</li>	
				<li>Mentoring and teaching junior developers in Python and PHP through personalized sessions and project-based learning.</li>	
				<li>Handling client projects independently from planning to deployment with focus on performance and maintainability.</li>
				</ul>`,

			`<p class="font-bold">Senior Backend Developer</p>
			<p class="text-sm text-gray-500">Jajiga · Lahijan · {{start_date_jajiga}} – {{end_date_jajiga}}</p>
			<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">	
				<li>Refactored the core search functionality into a Laravel-based microservice architecture.</li>	
				<li>Optimized performance to handle 50,000+ simultaneous users without server crashes (previous limit: ~3,000 users).</li>	
				<li>Collaborated with frontend and DevOps teams to improve system scalability and reliability.</li>
			</ul>`,

			`<p class="font-bold">Freelance Web & IoT Developer</p>
			<p class="text-sm text-gray-500">Remote · {{start_date_freelance_2}} – {{end_date_freelance_2}}</p>
			<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">	
				<li>Worked on advanced Laravel and WordPress projects, including custom plugin development and API integrations.</li>	
				<li>Started building microcontroller-based electronics projects, including automation tools and IoT prototypes.</li>	
				<li>Balanced freelancing and R&D work to expand skillset in software and hardware integration.</li>
			</ul>`,

			`<p class="font-bold">Junior Backend Developer</p>
			<p class="text-sm text-gray-500">Tesmino · Rasht · {{start_date_tesmino}} – {{end_date_tesmino}}</p>
			<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">	
				<li>Developed and maintained scalable backend APIs using Laravel.</li>	
				<li>Built a custom document converter using headless LibreOffice and Unoconv to support Farsi PDF/DOCX exports and imports from HTML/Blade templates.</li>	
				<li>Applied design patterns, clean code principles, and architectural best practices in large-scale Laravel projects.</li>
			</ul>`,

			`<p class="font-bold">Freelance Web Developer</p>
			<p class="text-sm text-gray-500">Ponisha · Remote · {{start_date_freelance_1}} – {{end_date_freelance_1}}</p>
			<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">	
				<li>Developed custom websites using vanilla PHP and WordPress for various clients on Ponisha platform.</li>	
				<li>Built lightweight CMS and business tools tailored to client needs on the LAMP stack.</li>	
				<li>Improved skills in backend development and client communication through hands-on projects.</li>
			</ul>`
		],
		last_updated: 'Last updated: {{date}}',
		'sidecard.personal_information': 'Personal Information',
		'sidecard.education_information': 'Educational Information',
		'sidecard.email': 'Email',
		'sidecard.phone': 'Phone',
		'sidecard.birthdate': 'Birthdate',
		'sidecard.age': 'Age',
		'sidecard.tel': '(+98) 9376976841',
		'sidecard.place_of_graduation': 'Place of graduation',
		'sidecard.qualification': 'Qualification',
		'sidecard.date_of_graduation': 'Date',
		'sidecard.place_of_graduation_desc': 'Shahram Toloui Technical and Vocational High School',
		'sidecard.qualification_desc': 'Diploma in Computer Software Engineering',
		'sidecard.date_of_graduation_desc': '{{year}}',
		'projects.note':
			'Most projects showcased here are personal or freelancing projects. Due to NDA agreements, some professional projects cannot be displayed.',
		'projects.list': projects_en
	},
	fa: {
		title: 'امیر قمری - توسعه‌دهنده‌ی بک‌اند',
		description:
			'امیر قمری - توسعه‌دهنده‌ی بک‌اند، لاراول، PHP، پایتون، جنگو، توسعه API، میکروسرویس‌ها، امنیت نرم‌افزار',
		keywords:
			'امیر قمری، توسعه‌دهنده‌ی بک‌اند، لاراول، PHP، پایتون، جنگو، توسعه API، میکروسرویس‌ها، امنیت نرم‌افزار',
		'header.full_name': 'امیرحسین قمری',
		'header.profession': 'توسعه‌دهنده‌ی بک‌اند',
		'header.location': 'محل سکونت',
		'header.location_desc': 'گیلان، ایران',
		'header.current_position': 'سمت فعلی',
		'header.available_for': 'آماده همکاری به صورت',
		'header.current_position_desc': 'بک‌اند فریلنسر و مدرس برنامه‌نویسی',
		'header.available_for_desc': 'دورکاری (توسعه‌دهنده بک‌اند)',
		'header.get_in_touch': 'تماس با من',
		'nav.resume': 'رزومه',
		'nav.skills': 'مهارت‌ها و توانمندی‌ها',
		'nav.stacks': 'تکنولوژی‌ها',
		'nav.projects': 'پروژه‌ها',
		'resume.brief': 'خلاصه‌ای از من و سوابق حرفه‌ای‌ام',
		'resume.brief_desc': `<strong>توسعه‌دهنده‌ی بک‌اند با بیش از {{years_of_experience}} سال تجربه</strong> هستم و بیشتر با Laravel کار می‌کنم.<br />
								توی این مدت APIهای مختلفی توسعه دادم، یه <strong>مبدل سند اختصاصی</strong> با پشتیبانی از زبان فارسی نوشتم (با استفاده از LibreOffice و Unoconv) و <strong>جستجوی پرترافیک یه استارتاپ بزرگ</strong> رو به میکروسرویس بهینه‌ای تبدیل کردم که بتونه هم‌زمان چند ده هزار کاربر رو پاسخ بده.<br />
								با تکنولوژی‌های فرانت‌اند آشنا هستم و همکاری مؤثری با تیم فرانت دارم. همچنین تجربه‌ی کار با <strong>Python و Django</strong> برای ساخت API رو هم دارم.<br />
								به <strong>امنیت نرم‌افزار</strong>، مخصوصاً اصول OWASP، علاقه‌ی زیادی دارم.<br />
								در حال حاضر دنبال همکاری با یه تیم حرفه‌ای یا پروژه‌های <strong>دورکاری بک‌اند</strong> هستم.`,
		'resume.experience': 'تجریبات',
		'resume.experience_desc': [
			`<p class="font-medium">فریلنسر توسعه‌دهنده بک‌اند و مدرس برنامه‌نویسی</p>
			<p class="text-sm text-gray-500">دورکاری · {{start_date_freelance_3}} تا {{end_date_freelance_3}}</p>
			<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">
				<li>توسعه وب‌اپلیکیشن با لاراول، سایت‌های وردپرس و APIهای بک‌اند برای پروژه‌های مختلف.</li>
				<li>آموزش برنامه‌نویسی پایتون و PHP به برنامه‌نویس‌های تازه‌کار با رویکرد پروژه‌محور.</li>
				<li>مدیریت کامل پروژه‌ها از مرحله برنامه‌ریزی تا پیاده‌سازی و استقرار نهایی با تمرکز بر عملکرد و نگهداری آسان.</li>
			</ul>
			`,

			`<p class="font-medium">توسعه‌دهنده ارشد بک‌اند</p>
			<p class="text-sm text-gray-500">جاجیگا · ایران · {{start_date_jajiga}} تا {{end_date_jajiga}}</p>
			<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">
				<li>بازنویسی کامل بخش جست‌وجوی اصلی سامانه و تبدیل آن به یک میکروسرویس مستقل با استفاده از لاراول.</li>
				<li>بهینه‌سازی عملکرد سیستم برای پشتیبانی از بیش از ۵۰٬۰۰۰ کاربر همزمان، در حالی که قبل از آن، تنها ۳٬۰۰۰ کاربر باعث اختلال کامل در سرور و پایگاه داده می‌شد.</li>
				<li>همکاری نزدیک با تیم‌های فرانت‌اند و زیرساخت برای افزایش پایداری و مقیاس‌پذیری سامانه.</li>
			</ul>
			`,

			`<p class="font-medium">فریلنسر وب و اینترنت اشیاء</p>
			<p class="text-sm text-gray-500">Freelancer.com · دورکاری · {{start_date_freelance_2}} تا {{end_date_freelance_2}}</p>
			<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">
				<li>انجام پروژه‌های پیشرفته با لاراول و وردپرس، از جمله توسعه افزونه و اتصال به APIها.</li>
				<li>شروع پروژه‌های برنامه‌نویسی میکروکنترلر و ساخت ابزارهای الکترونیکی و نمونه‌های اولیه IoT.</li>
				<li>ترکیب کار فریلنس با تحقیقات و یادگیری برای گسترش مهارت‌ها در نرم‌افزار و سخت‌افزار.</li>
			</ul>
			`,

			`<p class="font-medium">توسعه‌دهنده بک‌اند</p>
			<p class="text-sm text-gray-500">تسمینو · ایران · {{start_date_tesmino}} تا {{end_date_tesmino}}</p>
			<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">
				<li>طراحی و پیاده‌سازی APIهای مقیاس‌پذیر بک‌اند با استفاده از فریم‌ورک لاراول.</li>
				<li>ساخت یک سیستم تبدیل اسناد با استفاده از LibreOffice و Unoconv که امکان تبدیل قالب‌های HTML/Blade به فرمت‌هایی مثل PDF و DOCX (و بالعکس) را با پشتیبانی کامل از زبان فارسی فراهم می‌کرد.</li>
				<li>رعایت اصول طراحی نرم‌افزار، کدنویسی تمیز و الگوهای معماری برای توسعه‌ی پروژه‌های بزرگ لاراول.</li>
			</ul>
			`,

			`<p class="font-bold">فریلنسر وب</p>
			<p class="text-sm text-gray-500">پونیشا · دورکاری · {{start_date_freelance_1}} تا {{end_date_freelance_1}}</p>
			<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">
				<li>طراحی و توسعه وب‌سایت با PHP وانیلا و وردپرس برای مشتریان مختلف در پلتفرم پونیشا.</li>
				<li>ساخت سیستم‌های مدیریت محتوا و ابزارهای کاربردی متناسب با نیاز مشتریان با استفاده از LAMP stack.</li>
				<li>تقویت مهارت‌های بک‌اند و ارتباط با مشتریان از طریق پروژه‌های واقعی.</li>
			</ul>
			`
		],
		last_updated: 'آخرین به‌روزرسانی: {{date}}',
		'sidecard.personal_information': 'اطلاعات شخصی',
		'sidecard.education_information': 'اطلاعات تحصیلی',
		'sidecard.email': 'ایمیل',
		'sidecard.phone': 'تلفن',
		'sidecard.birthdate': 'تاریخ تولد',
		'sidecard.age': 'سن',
		'sidecard.tel': '۰۹۳۷۶۹۷۶۸۴۱',
		'sidecard.place_of_graduation': 'محل تحصیل',
		'sidecard.qualification': 'مدرک تحصیلی',
		'sidecard.date_of_graduation': 'تاریخ فارغ‌التحصیلی',
		'sidecard.place_of_graduation_desc': 'مدرسه‌ی فنی و حرفه‌ای شهید شهرام طلوعی',
		'sidecard.qualification_desc': 'دیپلم نرم‌افزار کامپیوتر',
		'sidecard.date_of_graduation_desc': '{{year}}',
		'projects.note':
			'پروژه‌های نمایش داده شده در اینجا عمدتاً پروژه‌های شخصی یا فریلنسی هستند. به دلیل قرارداد محرمانگی، امکان نمایش برخی از پروژه‌های حرفه‌ای وجود ندارد.',
		'projects.list': projects_fa
	}
} as Translations;
