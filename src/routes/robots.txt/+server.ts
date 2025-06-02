import { DEFAULT_PROTOCOL, DOMAIN } from '$lib/generalConfig';

const site = DEFAULT_PROTOCOL + '://' + DOMAIN;
const pages: string[] = ['', 'en', 'fa', 'skills', 'stacks', 'projects'];

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const body = `User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml`;
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'text/plain');
	return response;
}
