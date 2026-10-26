<script lang="ts">
	import '../app.css';
	import { resolve } from '$app/paths';
	import { site } from '$lib/site';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	const year = new Date().getFullYear();
</script>

<svelte:head>
	<title>{site.name}</title>
	<meta name="description" content={site.description} />
</svelte:head>

<div class="wrap">
	<header class="site-head">
		<a class="home" href={resolve('/')}>{site.name}</a>
		<nav>
			<a href={resolve('/blog')}>Blog</a>
			<a href={site.github}>GitHub</a>
			<a href="mailto:{site.email}">Email</a>
		</nav>
	</header>

	<main>
		{@render children()}
	</main>

	<footer>
		<p>© {year} {site.name}</p>
	</footer>
</div>

<style>
	.site-head {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: 0.5rem 1.5rem;
		margin-bottom: 2.5rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid var(--line);
	}

	.home {
		font-weight: 600;
		text-decoration: none;
	}

	nav {
		display: flex;
		gap: 1rem;
	}

	footer {
		margin-top: 4rem;
		padding-top: 0.75rem;
		border-top: 1px solid var(--line);
		color: var(--muted);
		font-size: 0.9rem;
	}

	footer p {
		margin: 0;
	}
</style>
