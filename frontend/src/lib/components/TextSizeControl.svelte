<script lang="ts">
	import { onMount } from 'svelte';

	const STORAGE_KEY = 'blog-text-scale';
	const MIN = 100;
	const MAX = 150;
	const STEP = 12.5;

	let scale = $state(100);

	function apply(value: number) {
		scale = value;
		document.documentElement.style.setProperty('--reader-scale', String(value / 100));
	}

	onMount(() => {
		let stored = MIN;
		try {
			stored = Number(localStorage.getItem(STORAGE_KEY));
		} catch {
			// Storage can be unavailable; keep the default size.
		}
		apply(Number.isFinite(stored) && stored >= MIN && stored <= MAX ? stored : MIN);
	});

	function change(delta: number) {
		const next = Math.min(MAX, Math.max(MIN, scale + delta));
		apply(next);
		try {
			localStorage.setItem(STORAGE_KEY, String(next));
		} catch {
			// Storage can be unavailable; the size still applies for this page.
		}
	}
</script>

<div class="text-size" role="group" aria-label="Text size">
	<button
		type="button"
		aria-label="Decrease text size"
		disabled={scale <= MIN}
		onclick={() => change(-STEP)}>A−</button
	>
	<button
		type="button"
		aria-label="Increase text size"
		disabled={scale >= MAX}
		onclick={() => change(STEP)}>A+</button
	>
</div>

<style>
	.text-size {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		margin-left: auto;
	}

	button {
		appearance: none;
		margin: 0;
		padding: 0.1rem 0.25rem;
		border: 0;
		background: none;
		color: #444;
		font: inherit;
		font-size: 0.85rem;
		line-height: 1.5;
		cursor: pointer;
	}

	button:hover:not(:disabled) {
		color: var(--foreground);
		text-decoration: underline;
	}

	button:focus-visible {
		outline: 2px solid var(--link);
		outline-offset: 3px;
	}

	button:disabled {
		cursor: default;
		opacity: 0.35;
	}
</style>
