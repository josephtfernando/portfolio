<!--
	Home: intro, projects, recent writing. Nothing else.
	The intro paragraph is placeholder copy — rewrite it.
-->
<script lang="ts">
	import { resolve } from '$app/paths';
	import PostList from '$lib/components/PostList.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Joseph Fernando</h1>

<p class="intro">
	I work on backends, simulation and real-time systems. This is where I keep notes and a short list
	of the things I've built.
</p>

<section>
	<h2>Projects</h2>

	<ul class="projects">
		{#each data.projects as project (project.name)}
			<li>
				<h3>
					{#if project.href}
						<a href={project.href}>{project.name}</a>
					{:else}
						{project.name}
					{/if}
				</h3>
				<p class="meta">{project.stack} · {project.year}</p>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -- brief is sanitized server-side in renderMarkdown() -->
				<div class="brief">{@html project.briefHtml}</div>
			</li>
		{/each}
	</ul>
</section>

<section>
	<h2>Writing</h2>

	{#if data.unavailable}
		<p class="muted">Writing is temporarily unavailable. Try again later.</p>
	{:else if data.recentPosts.length === 0}
		<p class="muted">Nothing published yet.</p>
	{:else}
		<PostList posts={data.recentPosts} />
		<p class="more"><a href={resolve('/blog')}>All posts</a></p>
	{/if}
</section>

<style>
	.intro {
		max-width: 60ch;
		font-size: 1.05rem;
	}

	.projects li + li {
		margin-top: 1.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--line);
	}

	.meta {
		margin: 0.15rem 0 0.5rem;
		color: var(--muted);
		font-size: 0.9rem;
	}

	.brief {
		max-width: 65ch;
	}

	.brief :global(p:last-child) {
		margin-bottom: 0;
	}

	.more {
		margin-top: 1.25rem;
	}
</style>
