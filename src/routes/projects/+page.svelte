<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectModal from '$lib/components/ProjectModal.svelte';
	import { __ } from '$lib/i18n';
	import { current_section } from '$lib/stores.svelte';
	import type { ProjectEntry } from '$lib/types';
	import { slide } from 'svelte/transition';

	current_section.value = 'projects';

	let showModal = $state(false);
	let modalProject: ProjectEntry | null = $state(null);

	function triggerModal(project: ProjectEntry) {
		showModal = true;
		modalProject = project;
	}

	let projectEntries: ProjectEntry[] = $state($__('projects.list') as unknown as ProjectEntry[]);
</script>

<div transition:slide>
	<p class="mb-4 text-start text-gray-500">
		{$__('projects.note')}
	</p>

	<div class="mx-auto max-w-4xl">
		{#each projectEntries as project}
			<div onclick={() => triggerModal(project)} class="cursor-pointer">
				<ProjectCard {project} />
			</div>
		{/each}
	</div>
</div>

{#if showModal}
	<ProjectModal bind:showModal project={modalProject as ProjectEntry} />
{/if}
