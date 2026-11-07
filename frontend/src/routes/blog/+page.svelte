<script lang="ts">
	import { resolve } from '$app/paths';
	import PostList from '$lib/components/PostList.svelte';
	import TextSizeControl from '$lib/components/TextSizeControl.svelte';
	import { site } from '$lib/site';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Field notes · {site.name}</title>
	<meta name="description" content="Notes by {site.name}." />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Field notes · {site.name}" />
	<meta property="og:description" content="Notes by {site.name}." />
</svelte:head>

<main id="main" tabindex="-1" class="blog-page">
	<div class="page-bar">
		<nav class="page-nav" aria-label="Site navigation">
			<a href={resolve('/')}>home</a>
			<span aria-hidden="true">/</span>
			<a href={resolve('/blog')} aria-current="page">field notes</a>
		</nav>
		<TextSizeControl />
	</div>

	<header class="page-header">
		<p class="page-kicker">concurrency, runtime behavior, and distributed systems</p>
		<h1>Field notes</h1>
	</header>

	{#if data.posts.length === 0}
		<p class="muted">Nothing published yet.</p>
	{:else}
		<PostList posts={data.posts} />
	{/if}
</main>

<style>
	.blog-page {
		margin-top: 0;
		font-family: 'Open Sauce Sans', Arial, Helvetica, sans-serif;
		font-size: calc(1.09375rem * var(--reader-scale, 1));
		line-height: 1.5;
	}

	.page-bar {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2.5rem;
	}

	.page-nav {
		display: flex;
		align-items: center;
		gap: 0.5rem;
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

	.page-header h1 {
		font-size: 1.43em;
	}

	.page-kicker {
		margin: 0 0 0.5rem;
		font-size: 0.9em;
		color: #444;
	}

	@media (max-width: 900px) {
		.blog-page {
			font-size: calc(1rem * var(--reader-scale, 1));
		}

		.page-header h1 {
			font-size: 1.25em;
		}
	}
</style>
