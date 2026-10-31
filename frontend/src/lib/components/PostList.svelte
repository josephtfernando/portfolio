<script lang="ts">
	import { resolve } from '$app/paths';
	import { formatDate } from '$lib/format';
	import type { PostSummary } from '$lib/types/post';

	let { posts }: { posts: PostSummary[] } = $props();
</script>

<ul class="posts">
	{#each posts as post (post.slug)}
		<li>
			<a class="title" href={resolve('/blog/[slug]', { slug: post.slug })}>{post.title}</a>
			<time datetime={post.date}>{formatDate(post.date)}</time>
			{#if post.excerpt}
				<p>{post.excerpt}</p>
			{/if}
		</li>
	{/each}
</ul>

<style>
	.posts {
		margin: 0;
		padding: 0;
		border-bottom: 1px solid var(--foreground);
		list-style: none;
	}

	.posts li {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 0.5rem 1.5rem;
		padding: 1.25rem 0;
		border-top: 1px solid var(--foreground);
	}

	.title {
		font-size: 1.05em;
		font-weight: 600;
	}

	time {
		font-size: 0.9em;
		color: #444;
		white-space: nowrap;
	}

	p {
		grid-column: 1 / -1;
		margin: 0;
		font-family: 'Open Sauce Sans', Arial, Helvetica, sans-serif;
		line-height: 1.5;
		color: #444;
	}

	@media (max-width: 600px) {
		.posts li {
			grid-template-columns: 1fr;
			gap: 0.25rem;
		}

		time {
			grid-row: 2;
			font-size: 0.85em;
		}
	}
</style>
