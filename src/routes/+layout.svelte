<script lang="ts">
	import '../app.css';

	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import SideCard from '$lib/components/SideCard.svelte';
	import { __, locale, localeLoaded } from '$lib/i18n';
	import { current_section } from '$lib/stores.svelte';
	import { backInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	current_section.value = 'resume';

	let lastUpdateDate = new Date('2025/01/05').toLocaleDateString($locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	let { children, data } = $props();
</script>

<div
	class:rtl={$locale === 'fa'}
	class="card mx-auto my-8 max-w-6xl overflow-hidden rounded-lg bg-gray-300 shadow-md"
>
	<!-- Header -->
	<Header />

	<!-- Navigation Tabs -->
	<Navbar />

	<div class="flex flex-col space-y-6 px-6 py-6 md:flex-row md:space-y-0 md:space-x-6">
		<div class="space-y-6 md:w-2/3">
			{@render children()}
		</div>

		<SideCard />
	</div>
</div>

<div>
	<p class="fixed start-1 bottom-1 text-sm !text-gray-300">
		{$__('last_updated', {
			date: lastUpdateDate
		})}
	</p>
</div>

{#if !$localeLoaded}
	<div
		transition:slide={{ duration: 700, easing: backInOut }}
		class="bg-base-100 fixed inset-0 flex items-center justify-center"
	>
		<span class="loading loading-infinity w-28"></span>
	</div>
{/if}
