<script lang="ts">
	import { current_section } from '$lib/stores.svelte';
	import Languages from 'virtual:icons/hugeicons/language-skill';
	import HamburgerMenu from 'virtual:icons/hugeicons/menu-01';

	import { __, locale, localeLoaded, locales } from '$lib/i18n';
	import { slide } from 'svelte/transition';

	let isMenuOpen = $state(false);

	function changeLocale(selectedLocale: 'en' | 'fa') {
		if (selectedLocale == $locale) return;

		localeLoaded.set(false);
		setTimeout(() => {
			$locale = selectedLocale;
		}, 500);
	}
</script>

<div
	class="flex justify-between border-b border-gray-200 px-6 align-middle text-sm font-medium text-gray-600 md:py-3"
>
	<button
		class="mb-2 self-end md:hidden"
		onclick={() => (isMenuOpen = !isMenuOpen)}
		aria-label="Toggle menu"
	>
		<HamburgerMenu class="text-neutral text-lg" />
	</button>

	<div class="hidden space-y-2 md:flex md:flex-row md:space-y-0 md:space-x-6">
		<a href="/" class:active-nav={current_section.value == 'resume'}>{$__('nav.resume')}</a>
		<a href="/skills" class:active-nav={current_section.value == 'skills'}>{$__('nav.skills')}</a>
		<a href="/stacks" class:active-nav={current_section.value == 'stack'}>{$__('nav.stacks')}</a>
		<a href="/projects" class:active-nav={current_section.value == 'projects'}
			>{$__('nav.projects')}</a
		>
	</div>

	<!-- Language Selector -->
	<div class="md:ms-auto md:mt-0 md:block">
		<div class="relative">
			<div class="hover:text-primary group hover:cursor-pointer">
				<Languages
					class="text-neutral text-lg"
					onclick={() => changeLocale($locale === 'en' ? 'fa' : 'en')}
				/>
				<div
					class="absolute end-0 top-full z-50 hidden min-w-[100px] rounded-md bg-white shadow-lg group-hover:block"
				>
					{#each locales as lang}
						<button
							class="text-md hover:text-primary w-full cursor-pointer rounded-md px-2 py-1 text-start font-bold text-gray-700 hover:bg-gray-100"
							class:active={$locale === lang}
							onclick={() => changeLocale(lang as 'en' | 'fa')}
						>
							{lang === 'en' ? 'English' : 'فارسی'}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
{#if isMenuOpen}
	<div
		transition:slide
		class="relative z-50 mt-2 flex w-full flex-col items-center justify-center self-start md:hidden"
	>
		<div class="flex w-full flex-col space-y-4 px-2">
			<a href="/" class:active-nav={current_section.value == 'resume'} class="ps-6"
				>{$__('nav.resume')}</a
			>
			<a href="/skills" class:active-nav={current_section.value == 'skills'} class="ps-6"
				>{$__('nav.skills')}</a
			>
			<a href="/stacks" class:active-nav={current_section.value == 'stack'} class="ps-6"
				>{$__('nav.stacks')}</a
			>
			<a href="/projects" class:active-nav={current_section.value == 'projects'} class="ps-6"
				>{$__('nav.projects')}</a
			>
		</div>
	</div>
{/if}
