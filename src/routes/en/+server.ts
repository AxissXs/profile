export function GET() {
	return new Response(null, {
		status: 302,
		headers: {
			Location: '/',
			'Set-Cookie': 'lang=en; Path=/; Max-Age=31536000'
		}
	});
}
