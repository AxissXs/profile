<script lang="ts">
	import { current_section } from '$lib/stores.svelte';
	import Languages from 'virtual:icons/hugeicons/language-skill';
	import HamburgerMenu from 'virtual:icons/hugeicons/menu-01';

	import { __, locale, locales } from '$lib/i18n';
	import { slide } from 'svelte/transition';

	let isMenuOpen = $state(false);
</script>

<div
	class="flex justify-between border-b border-gray-200 px-6 align-middle text-sm font-medium text-gray-600 md:py-3"
>
	<!-- Mobile Hamburger -->
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
					onclick={() => {
						$locale = $locale === 'en' ? 'fa' : 'en';
					}}
				/>
				<div
					class="absolute end-0 top-full hidden min-w-[100px] rounded-md bg-white shadow-lg group-hover:block"
				>
					{#each locales as lang}
						<button
							class="text-md w-full rounded-md px-2 py-1 text-start font-bold text-gray-700 hover:bg-gray-100"
							class:active={$locale === lang}
							onclick={() => ($locale = lang)}
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
	<!-- content here -->
	<!-- Navigation Links -->
	<div
		transition:slide
		class="relative mt-2 z-50 flex flex-col w-full items-center justify-center self-start md:hidden"
	>
		<div class="flex flex-col space-y-4 w-full px-2">
			<a href="/" class:active-nav={current_section.value == 'resume'} class="ps-6">{$__('nav.resume')}</a>
			<a href="/skills" class:active-nav={current_section.value == 'skills'} class="ps-6">{$__('nav.skills')}</a>
			<a href="/stacks" class:active-nav={current_section.value == 'stack'} class="ps-6">{$__('nav.stacks')}</a>
			<a href="/projects" class:active-nav={current_section.value == 'projects'} class="ps-6">{$__('nav.projects')}</a
			>
		</div>
	</div>
{/if}
