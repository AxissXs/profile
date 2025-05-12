<script lang="ts">
	// TODO: add a note that most projects in this page are the personal ones
	import { current_section } from '$lib/stores.svelte';
	import { slide } from 'svelte/transition';
	import type { PageData } from './$types';

	// TODO: change the data structure
	let data = {
		projects: [
			{
				name: 'Portfolio Website',
				description: 'A personal portfolio website built with Svelte and DaisyUI.',
				image: 'https://placehold.co/600x400',
				techLogos: [
					'https://placehold.co/24x24?text=HTML',
					'https://placehold.co/24x24?text=CSS',
					'https://placehold.co/24x24?text=JS'
				]
			},
			{
				name: 'E-commerce App',
				description: 'A mock e-commerce application with a modern UI.',
				image: 'https://placehold.co/600x400',
				techLogos: [
					'https://placehold.co/24x24?text=React',
					'https://placehold.co/24x24?text=Node',
					'https://placehold.co/24x24?text=MongoDB'
				]
			},
			{
				name: 'Blog Platform',
				description: 'A blogging platform with markdown support.',
				image: 'https://placehold.co/600x400',
				techLogos: [
					'https://placehold.co/24x24?text=Vue',
					'https://placehold.co/24x24?text=Firebase',
					'https://placehold.co/24x24?text=Tailwind'
				]
			}
		]
	};

	current_section.value = 'projects';
</script>

<div transition:slide>
	<p class="text-center text-gray-500 mb-4">Most of the projects showcased here are personal ones.</p>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each data.projects as project}
			<div class="card bg-base-100 shadow-xl">
				<figure>
					<img src={project.image} alt={project.name} class="object-cover h-48 w-full" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">{project.name}</h2>
					<p>{project.description}</p>
					<div class="flex flex-wrap gap-2 mt-2">
						{#each project.techLogos as logo}
							<img src={logo} alt="Tech logo" class="h-6 w-6" />
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
