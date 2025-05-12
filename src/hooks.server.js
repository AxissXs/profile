/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// Get language from cookie header
	const cookies = event.request.headers.get('cookie') || '';
	const langMatch = cookies.match(/lang=([^;]+)/);
	const lang = langMatch ? langMatch[1] : 'en';

	// Set lang attribute on html, but dir on body
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			// Set language attribute on html
			let modifiedHtml = html.replace('<html', `<html lang="${lang}"`);

			// Set direction attribute on body
			if (lang === 'fa') {
				modifiedHtml = modifiedHtml.replace('<body', '<body class="rtl" dir="rtl"');
			} else {
				modifiedHtml = modifiedHtml.replace('<body', '<body dir="ltr"');
			}

			return modifiedHtml;
		}
	});

	return response;
}
