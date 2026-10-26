<script lang="ts">
	import { resolve } from '$app/paths';
	import { formatDate } from '$lib/format';
	import { site } from '$lib/site';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.post.title} — {site.name}</title>
	<meta
		name="description"
		content={data.post.excerpt || `${data.post.title} — writing by ${site.name}.`}
	/>
</svelte:head>

<p class="back"><a href={resolve('/blog')}>← All posts</a></p>

<article>
	<h1>{data.post.title}</h1>
	<time datetime={data.post.created_at}>{formatDate(data.post.created_at)}</time>

	<div class="content">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -- sanitized server-side in renderMarkdown() -->
		{@html data.html}
	</div>
</article>

<style>
	.back {
		margin-bottom: 2rem;
		font-size: 0.95rem;
	}

	h1 {
		margin-bottom: 0.25rem;
	}

	time {
		display: block;
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--line);
	}

	.content {
		max-width: 65ch;
	}

	.content :global(h2) {
		margin: 2rem 0 0.75rem;
		font-size: 1.25rem;
	}

	.content :global(h3) {
		margin: 1.75rem 0 0.5rem;
		font-size: 1.05rem;
	}

	.content :global(p) {
		margin: 0 0 1rem;
	}

	.content :global(ul),
	.content :global(ol) {
		margin: 0 0 1rem;
		padding-left: 1.4rem;
		list-style: revert;
	}

	.content :global(li + li) {
		margin-top: 0.35rem;
	}

	.content :global(pre) {
		overflow-x: auto;
		padding: 0.85rem 1rem;
		border: 1px solid var(--line);
		font-size: 0.9rem;
	}

	.content :global(code) {
		font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
		font-size: 0.92em;
	}

	.content :global(blockquote) {
		margin: 0 0 1rem;
		padding-left: 1rem;
		border-left: 2px solid var(--line);
		color: var(--muted);
	}

	.content :global(img) {
		max-width: 100%;
		height: auto;
	}

	.content :global(table) {
		border-collapse: collapse;
		margin-bottom: 1rem;
	}

	.content :global(th),
	.content :global(td) {
		padding: 0.4rem 0.6rem;
		border: 1px solid var(--line);
		text-align: left;
	}
</style>
