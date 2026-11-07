import { getPosts } from '$lib/server/blog';
import { site } from '$lib/site';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = () => {
	const entries: { path: string; lastmod?: string }[] = [
		{ path: '/' },
		{ path: '/blog' },
		...getPosts().map((post) => ({ path: `/blog/${post.slug}`, lastmod: post.date }))
	];

	const urls = entries
		.map(({ path, lastmod }) => {
			const loc = `${site.url}${path}`;
			return lastmod
				? `\t<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`
				: `\t<url><loc>${loc}</loc></url>`;
		})
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(body, {
		headers: { 'content-type': 'application/xml; charset=utf-8' }
	});
};
