import { getPosts } from '$lib/server/blog-api';
import { projects } from '$lib/projects';
import { renderMarkdown } from '$lib/markdown';
import type { PageServerLoad } from './$types';
import type { PostSummary } from '$lib/types/post';

const RECENT_COUNT = 5;

// Same caching rationale as the blog list route (see blog/+page.server.ts):
// the Go API runs on a free-tier host that can blip or cold-start, so the edge
// keeps the last-known-good page for 10 minutes and may serve stale for a day
// while revalidating. An outage must not 500 the homepage — it is reported
// through `unavailable` instead of looking like an empty blog.
export const load: PageServerLoad = async ({ setHeaders }) => {
	setHeaders({ 'cache-control': 'public, max-age=0, s-maxage=600, stale-while-revalidate=86400' });

	let recentPosts: PostSummary[] = [];
	let unavailable = false;
	try {
		const summaries = await getPosts();
		// The API already orders newest-first — just take the head.
		recentPosts = summaries.slice(0, RECENT_COUNT);
	} catch (err) {
		console.error('Failed to load recent posts for the homepage:', err);
		unavailable = true;
	}

	return {
		recentPosts,
		unavailable,
		projects: projects.map((project) => ({ ...project, briefHtml: renderMarkdown(project.brief) }))
	};
};
