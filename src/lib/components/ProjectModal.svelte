<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import type { ProjectEntry } from '$lib/types';
	import { fade } from 'svelte/transition';

	let { showModal = $bindable(), project }: { showModal: boolean; project: ProjectEntry } =
		$props();

	function onKeyDown(e: KeyboardEvent) {
		switch (e.key) {
			case 'Escape':
				showModal = false;
				break;
		}
	}

	beforeNavigate((navigation) => {
		console.log(navigation.to);
		if (showModal == true) {
			showModal = false;
			navigation.cancel();
		}
	});
</script>

<div transition:fade={{ duration: 100 }}>
	<dialog id="projectModal" class="modal modal-open">
		<div class="modal-box w-11/12 max-w-5xl">
			<button
				class="btn btn-sm btn-circle btn-ghost absolute end-2 top-2"
				onclick={() => {
					showModal = false;
				}}>✕</button
			>
			<h3 class="text-lg font-bold">{project.title}</h3>
			<div class="flex flex-row gap-2 overflow-x-auto">
				{#each project.screenshots as screenshot}
					<img class="w-1/2" src={screenshot} alt={project.title} />
				{/each}
			</div>
			<p class="py-4 !text-white">{project.full_description}</p>
		</div>
		<form method="dialog" class="modal-backdrop">
			<button
				onclick={() => {
					showModal = false;
				}}>close</button
			>
		</form>
	</dialog>
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />
