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

<div class="blog-page">
	<nav class="page-nav" aria-label="Site navigation">
		<a href={resolve('/')}>home</a>
		<span aria-hidden="true">/</span>
		<a href={resolve('/blog')}>field notes</a>
	</nav>

	<article>
		<header class="post-header">
			<p class="post-kicker">field note</p>
			<h1>{data.post.title}</h1>
			<time datetime={data.post.date}>{formatDate(data.post.date)}</time>
		</header>

		<div class="content">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- sanitized server-side in renderMarkdown() -->
			{@html data.html}
		</div>
	</article>
</div>

<style>
	.page-nav {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 2.5rem;
		font-size: 1em;
		line-height: 1.5;
	}

	.blog-page {
		font-family: 'Open Sauce Sans', Arial, Helvetica, sans-serif;
		font-size: 24px;
		line-height: 1.5;
	}

	.post-header {
		max-width: 65ch;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--foreground);
	}

	.post-kicker {
		margin: 0 0 0.5rem;
		font-size: 0.9rem;
		color: #444;
	}

	.post-header h1 {
		margin: 0 0 0.25rem;
		font-size: 1.5em;
	}

	.post-header time {
		display: block;
		font-size: 0.9em;
		color: #444;
	}

	.content {
		max-width: 65ch;
		margin-top: 2rem;
		font-family: 'Open Sauce Sans', Arial, Helvetica, sans-serif;
		line-height: 1.6;
	}

	.content :global(h2) {
		margin: 2rem 0 0.75rem;
		font-family: 'Open Sauce Sans', Arial, Helvetica, sans-serif;
		font-size: 1.25em;
	}

	.content :global(h3) {
		margin: 1.75rem 0 0.5rem;
		font-family: 'Open Sauce Sans', Arial, Helvetica, sans-serif;
		font-size: 1.05em;
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
		border: 1px solid var(--foreground);
		font-size: 0.9em;
	}

	.content :global(code) {
		font-family: inherit;
		font-size: 0.92em;
	}

	.content :global(blockquote) {
		margin: 0 0 1rem;
		padding-left: 1rem;
		border-left: 2px solid var(--foreground);
		color: #444;
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
		border: 1px solid var(--foreground);
		text-align: left;
	}
</style>
