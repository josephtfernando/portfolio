<script lang="ts">
	import PostList from '$lib/components/PostList.svelte';
	import { site } from '$lib/site';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Writing — {site.name}</title>
	<meta name="description" content="Notes by {site.name}." />
</svelte:head>

<h1>Writing</h1>

{#if data.unavailable}
	<p class="muted">Writing is temporarily unavailable. Try again later.</p>
{:else if data.posts.length === 0}
	<p class="muted">Nothing published yet.</p>
{:else}
	<PostList posts={data.posts} />
{/if}
