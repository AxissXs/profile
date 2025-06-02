export function GET() {
	return new Response(null, {
		status: 302,
		headers: {
			Location: '/',
			'Set-Cookie': 'lang=fa; Path=/; Max-Age=31536000'
		}
	});
}
