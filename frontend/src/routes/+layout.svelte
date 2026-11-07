<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { site } from '$lib/site';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	const isBlog = $derived(page.url.pathname === '/blog' || page.url.pathname.startsWith('/blog/'));

	// SvelteKit's default trailing-slash policy means pathname is already the
	// canonical path for every route except the root, which ends in a slash.
	const canonical = $derived(`${site.url}${page.url.pathname}`);
	const socialImage = `${site.url}/og.jpg`;

	// Client-side navigations swap the page without moving focus, which leaves
	// keyboard and screen reader users stranded on the link they just used.
	afterNavigate((navigation) => {
		if (!navigation.from) return;
		document.getElementById('main')?.focus();
	});
</script>

<svelte:head>
	<title>{site.name}</title>
	<link rel="canonical" href={canonical} />
	<meta property="og:url" content={canonical} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:image" content={socialImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Joseph A. T. Fernando" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={socialImage} />
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>

<div class="wrap" class:wide={isBlog}>
	{@render children()}
</div>
