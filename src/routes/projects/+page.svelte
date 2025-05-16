<script lang="ts">
	import { current_section } from '$lib/stores.svelte';
	import { slide } from 'svelte/transition';
	import type { PageData } from './$types';
	import { __ } from '$lib/i18n';

	current_section.value = 'projects';

	// Data structure with added note about NDA projects
	let data = {
		projects: [
			{
				name: 'Portfolio Website',
				description: 'A personal portfolio website built with Svelte and DaisyUI.',
				image: 'https://placehold.co/600x400',
				techs: [
					{ name: 'HTML', logo: 'https://placehold.co/24x24?text=HTML' },
					{ name: 'CSS', logo: 'https://placehold.co/24x24?text=CSS' },
					{ name: 'JavaScript', logo: 'https://placehold.co/24x24?text=JS' }
				]
			},
			{
				name: 'E-commerce App',
				description: 'A mock e-commerce application with a modern UI.',
				image: 'https://placehold.co/600x400',
				techs: [
					{ name: 'React', logo: 'https://placehold.co/24x24?text=React' },
					{ name: 'Node.js', logo: 'https://placehold.co/24x24?text=Node' },
					{ name: 'MongoDB', logo: 'https://placehold.co/24x24?text=MongoDB' }
				]
			},
			{
				name: 'Blog Platform',
				description: 'A blogging platform with markdown support.',
				image: 'https://placehold.co/600x400',
				techs: [
					{ name: 'Vue', logo: 'https://placehold.co/24x24?text=Vue' },
					{ name: 'Firebase', logo: 'https://placehold.co/24x24?text=Firebase' },
					{ name: 'Tailwind', logo: 'https://placehold.co/24x24?text=Tailwind' }
				]
			}
		]
	};
</script>

<div transition:slide>
	<p class="mb-4 text-center text-gray-500">
		{$__('projects.note')}
	</p>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each data.projects as project}
			<div class="card bg-base-100 shadow-xl duration-500 hover:scale-110 transition-transform">
				<figure>
					<img src={project.image} alt={project.name} class="h-48 w-full object-cover" />
				</figure>
				<div class="card-body !bg-gray-200">
					<h2 class="card-title">{project.name}</h2>
					<p>{project.description}</p>
					<div class="mt-2 flex flex-wrap gap-2">
						{#each project.techs as tech}
							<div class="tooltip" data-tip={tech.name}>
								<img src={tech.logo} alt="{tech.name} logo" class="h-8 w-8 rounded-full" />
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
