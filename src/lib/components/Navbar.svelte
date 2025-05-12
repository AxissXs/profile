<script lang="ts">
	import { current_section } from '$lib/stores.svelte';
	import Languages from 'virtual:icons/hugeicons/language-skill';

	import { __, locale} from '$lib/i18n';
</script>

<div class="flex border-b border-gray-100 px-6 py-3 text-sm font-medium text-gray-600">
	<div class="flex space-x-6">
		<a href="/" class:active-nav={current_section.value == 'resume'}>{$__('nav.resume')}</a>
		<a href="/skills" class:active-nav={current_section.value == 'skills'}>{$__('nav.skills')}</a>
		<a href="/stacks" class:active-nav={current_section.value == 'stack'}>{$__('nav.stacks')}</a>
		<a href="/projects" class:active-nav={current_section.value == 'projects'}>{$__('nav.projects')}</a>
	</div>
	<div class="ms-auto">
		<div class="relative">
			<div class="hover:text-primary group hover:cursor-pointer">
				<Languages class="text-neutral" />
				<div
					class="absolute top-full end-0 hidden min-w-[100px] rounded-md bg-white shadow-lg group-hover:block"
				>
					{#each ['en', 'fa'] as lang}
						<button
							class="w-full px-4 py-1 text-start hover:bg-gray-100"
							class:active={$locale === lang}
							on:click={() => ($locale = lang)}
						>
							{lang === 'en' ? 'English' : 'فارسی'}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
