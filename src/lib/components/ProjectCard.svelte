<script lang="ts">
	import type { ProjectEntry } from "$lib/types";

	let { project } : {project: ProjectEntry} = $props();
</script>

<div class="mb-6 flex rounded-lg bg-white p-6 shadow-sm">
	<div class="w-1/4 flex-shrink-0 content-evenly">
		<img class="w-32 h-auto rounded-lg m-auto" src={project.image} alt={project.title} />
	</div>
	<div class="w-3/4 ps-4">
		<h2 class="mb-2 text-xl font-semibold">{project.title}</h2>
		<p class="mb-4 text-gray-700">
			{project.description}
		</p>
		<div class="flex space-x-2">
			{#each project.techs as tech}
				<div class="h-8 w-8 rounded-lg bg-gray-200 tooltip tooltip-bottom" data-tip="{tech.name}">
					<img src={tech.logo} alt={tech.name} class="h-full w-full rounded-lg" />
				</div>
			{/each}
		</div>
	</div>
</div>
