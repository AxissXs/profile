<script lang="ts">
	import '../app.css';

	import { dev } from '$app/environment';
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import SideCard from '$lib/components/SideCard.svelte';
	import { __, locale, localeLoaded } from '$lib/i18n';
	import { current_section } from '$lib/stores.svelte';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	import { backInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import { DEFAULT_PROTOCOL, DOMAIN } from '$lib/generalConfig';

	current_section.value = 'resume';

	let lastUpdateDate = $derived(
		new Date('2025/01/05').toLocaleDateString($locale, {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);

	let { children, data } = $props();

	//Analytics and stuff
	injectSpeedInsights();
	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />

	<link rel="alternate" hreflang="en" href="{`${DEFAULT_PROTOCOL}://${DOMAIN}`}/en" />
    <link rel="alternate" hreflang="fa" href="{`${DEFAULT_PROTOCOL}://${DOMAIN}`}/fa" />

	<title>{$__('title')}</title>

	<meta name="language" content="{$locale}">

	<meta name="description" content={$__('description') as string} />
	<meta name="keywords" content={$__('keywords') as string} />
	<meta name="author" content="Amir Ghamari" />

	<script type="text/javascript">
		(function (c, l, a, r, i, t, y) {
			c[a] =
				c[a] ||
				function () {
					(c[a].q = c[a].q || []).push(arguments);
				};
			t = l.createElement(r);
			t.async = 1;
			t.src = 'https://www.clarity.ms/tag/' + i;
			y = l.getElementsByTagName(r)[0];
			y.parentNode.insertBefore(t, y);
		})(window, document, 'clarity', 'script', 'ro64za21ya');
	</script>
</svelte:head>

{#key $locale}
	<div
		class:rtl={$locale === 'fa'}
		class="card mx-auto my-8 max-w-6xl overflow-hidden rounded-lg bg-gray-300 shadow-md"
	>
		<!-- Header -->
		<Header />

		<!-- Navigation Tabs -->
		<Navbar />

		<div class="flex flex-col space-y-6 px-6 py-6 md:flex-row md:space-y-0 md:space-x-6">
			<SideCard baseExtraClasses="hidden md:block" />

			<div class="space-y-6 md:w-2/3">
				{@render children()}
			</div>
		</div>
	</div>

	<div>
		<p class="fixed start-1 bottom-1 -z-10 text-sm !text-gray-300">
			{$__('last_updated', {
				date: lastUpdateDate
			})}
		</p>
	</div>
{/key}

{#if !$localeLoaded}
	<div
		transition:slide={{ duration: 700, easing: backInOut }}
		class="bg-base-100 fixed inset-0 flex items-center justify-center"
	>
		<span class="loading loading-infinity w-28"></span>
	</div>
{/if}
