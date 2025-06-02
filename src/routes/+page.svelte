<script lang="ts">
	import SideCard from '$lib/components/SideCard.svelte';
	import { __, locale } from '$lib/i18n';
	import { current_section } from '$lib/stores.svelte';
	import { slide } from 'svelte/transition';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	current_section.value = 'resume';

	let yearsOfExperience = '5';

	function formatDate(date: string): string {
		const dateObj = new Date(date);
		return dateObj.toLocaleDateString($locale, {
			year: 'numeric',
			month: 'short'
		});
	}

	let experienceVariables = $state({
		start_date_freelance_1: formatDate('2015/05'),
		end_date_freelance_1: 'end f1',
		start_date_tesmino: 'start t',
		end_date_tesmino: 'end t',
		start_date_freelance_2: 'start f2',
		end_date_freelance_2: 'end f2',
		start_date_jajiga: 'start j',
		end_date_jajiga: 'end j',
		start_date_freelance_3: 'start f3',
		end_date_freelance_3: 'تا اکنون'
	});

	function innerHtml(node: HTMLElement, html: string | string[]) {
		node.innerHTML = Array.isArray(html) ? html.join('<br />') : html;
	}
</script>

<div transition:slide>
	<section>
		<SideCard baseExtraClasses="block md:hidden mb-4" />

		<h2 class="text-lg font-semibold">{$__('resume.brief')}</h2>
		<p
			class="mt-1 text-sm text-gray-700"
			use:innerHtml={$__('resume.brief_desc', { years_of_experience: yearsOfExperience }) as string[]}
		></p>
	</section>

	<section>
		<h2 class="text-lg font-semibold">{$__('resume.experience')}</h2>
		<div class="mt-2" use:innerHtml={$__('resume.experience_desc', experienceVariables) as string[]}></div>
	</section>
</div>
