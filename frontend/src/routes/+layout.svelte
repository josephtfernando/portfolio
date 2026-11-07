<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { site } from '$lib/site';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	const isBlog = $derived(page.url.pathname === '/blog' || page.url.pathname.startsWith('/blog/'));
</script>

<svelte:head>
	<title>{site.name}</title>
	<meta name="description" content={site.description} />
</svelte:head>

<div class="wrap" class:wide={isBlog}>
	{@render children()}
</div>
