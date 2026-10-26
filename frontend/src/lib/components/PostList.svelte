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
			<time datetime={post.created_at}>{formatDate(post.created_at)}</time>
			{#if post.excerpt}
				<p>{post.excerpt}</p>
			{/if}
		</li>
	{/each}
</ul>

<style>
	.posts li + li {
		margin-top: 1.25rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--line);
	}

	.title {
		display: block;
		font-weight: 500;
	}

	p {
		margin: 0.25rem 0 0;
		color: var(--muted);
	}
</style>
