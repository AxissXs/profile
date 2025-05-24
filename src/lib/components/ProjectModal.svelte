<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import type { ProjectEntry } from '$lib/types';
	import { fade } from 'svelte/transition';

	let { showModal = $bindable(), project }: { showModal: boolean; project: ProjectEntry } =
		$props();

	let slider: any;

	function scrollSlider(dir: any) {
		if (slider) {
			slider.scrollBy({
				left: dir * slider.clientWidth,
				behavior: 'smooth'
			});
		}
	}

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
		<div class="modal-box relative w-11/12 max-w-5xl">
			<!-- Close Button -->
			<button
				class="btn btn-sm btn-circle btn-ghost absolute end-2 top-2 text-center"
				onclick={() => (showModal = false)}
			>
				✕
			</button>

			<h3 class="mb-2 border-b border-gray-400 pb-1 text-lg font-bold">{project.title}</h3>

			<div class="relative w-full overflow-hidden">
				<div
					bind:this={slider}
					class="no-scrollbar flex snap-x rounded-sm snap-mandatory overflow-x-auto scroll-smooth"
				>
					{#each project.screenshots as screenshot}
						<div class="w-full flex-shrink-0 snap-center">
							<img
								class="h-auto w-full object-cover shadow"
								src={screenshot}
								alt={project.title}
							/>
						</div>
					{/each}
				</div>

				<button
					onclick={() => scrollSlider(-1)}
					class="absolute border-1 border-gray-700 font-bold end-2 top-1/2 btn btn-circle bg-black/50 p-2 text-white hover:bg-black/70"
				>
					&gt;
				</button>
				<button
					onclick={() => scrollSlider(1)}
					class="absolute border-1 border-gray-700 font-bold start-2 top-1/2 btn btn-circle bg-black/50 p-2 text-white hover:bg-black/70"
				>
					&lt;
				</button>
			</div>

			<p class="py-4 !text-white">{project.full_description}</p>

		</div>
		<form method="dialog" class="modal-backdrop">
			<button onclick={() => (showModal = false)} aria-hidden="true"></button>
		</form>
	</dialog>
</div>

<svelte:window onkeydown={onKeyDown} />

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
