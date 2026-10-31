import type { Post, PostSummary } from '$lib/types/post';

const postFiles = import.meta.glob('/src/content/posts/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

function parseFrontmatter(
	source: string,
	path: string
): { metadata: Record<string, string>; content: string } {
	const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
	if (!match) throw new Error(`Post ${path} is missing frontmatter`);

	const metadata: Record<string, string> = {};
	for (const line of match[1].split('\n')) {
		const separator = line.indexOf(':');
		if (separator === -1) continue;
		const key = line.slice(0, separator).trim();
		const value = line
			.slice(separator + 1)
			.trim()
			.replace(/^['"]|['"]$/g, '');
		metadata[key] = value;
	}

	return { metadata, content: match[2].trim() };
}

function toPost(source: string, path: string): Post {
	const { metadata, content } = parseFrontmatter(source, path);
	const { title, slug, date } = metadata;
	if (!title || !slug || !date) {
		throw new Error(`Post ${path} needs title, slug, and date frontmatter`);
	}

	return { title, slug, excerpt: metadata.excerpt ?? '', date, content };
}

const posts = Object.entries(postFiles)
	.map(([path, source]) => toPost(source, path))
	.sort((a, b) => b.date.localeCompare(a.date));

export function getPosts(): PostSummary[] {
	return posts.map(({ title, slug, excerpt, date }) => ({ title, slug, excerpt, date }));
}

export function getPost(slug: string): Post | null {
	return posts.find((post) => post.slug === slug) ?? null;
}
