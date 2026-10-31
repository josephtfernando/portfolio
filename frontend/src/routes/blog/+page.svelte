<script lang="ts">
	import { resolve } from '$app/paths';
	import PostList from '$lib/components/PostList.svelte';
	import { site } from '$lib/site';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Field notes — {site.name}</title>
	<meta name="description" content="Notes by {site.name}." />
</svelte:head>

<div class="blog-page">
	<nav class="page-nav" aria-label="Site navigation">
		<a href={resolve('/')}>home</a>
		<span aria-hidden="true">/</span>
		<a href={resolve('/blog')} aria-current="page">field notes</a>
	</nav>

	<header class="page-header">
		<p class="page-kicker">concurrency, runtime behavior, and distributed systems</p>
		<h1>Field notes</h1>
	</header>

	{#if data.posts.length === 0}
		<p class="muted">Nothing published yet.</p>
	{:else}
		<PostList posts={data.posts} />
	{/if}
</div>

<style>
	.page-nav {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 2.5rem;
		font-size: 1em;
		line-height: 1.5;
	}

	.page-nav a[aria-current='page'] {
		color: var(--foreground);
		text-decoration: none;
	}

	.page-header {
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--foreground);
	}

	.blog-page {
		font-family: 'Open Sauce Sans', Arial, Helvetica, sans-serif;
		font-size: 24px;
		line-height: 1.5;
	}

	.page-header h1 {
		font-size: 1.5em;
	}

	.page-kicker {
		margin: 0 0 0.5rem;
		font-size: 0.9em;
		color: #444;
	}
</style>
