<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { site } from '$lib/site';
</script>

<svelte:head>
	<title>{page.status} · {site.name}</title>
	<meta name="description" content="That page could not be found." />
	<meta name="robots" content="noindex" />
</svelte:head>

<main id="main" tabindex="-1">
	<p class="kicker">error {page.status}</p>
	<h1>{page.status === 404 ? 'Page not found.' : 'Something went wrong.'}</h1>
	<p>
		{#if page.status === 404}
			That page doesn't exist. It may have moved, or the link may be wrong.
		{:else}
			{page.error?.message ?? 'An unexpected error occurred.'}
		{/if}
	</p>
	<p><a href={resolve('/')}>Back to the homepage</a></p>
</main>

<style>
	main {
		max-width: 60ch;
	}

	.kicker {
		margin-bottom: 0.5rem;
		font-size: 0.9em;
		color: #444;
	}

	h1 {
		margin-bottom: 1rem;
	}

	p {
		margin-bottom: 0.75rem;
	}
</style>
