<script lang="ts">
	import type { ProjectEntry, LogoComponent } from '$lib/types';

	let { project }: { project: ProjectEntry } = $props();
</script>

{#snippet techLogo(logo: LogoComponent)}
	{@const Component = logo}
	<Component />
{/snippet}

<div class="mb-6 flex flex-col items-center text-start gap-2 md:text-start md:flex-row rounded-lg bg-white p-6 shadow-sm">
	<div class="w-1/4 flex-shrink-0 content-evenly">
		<img class="m-auto h-auto w-32 md:mb-0 mb-4 rounded-lg drop-shadow-lg" src={project.image} alt={project.title} />
	</div>
	<div class="w-fit md:w-3/4">
		<h2 class="mb-2 md:text-xl text-lg font-semibold">{project.title}</h2>
		<p class="mb-4 text-gray-700 !self-start">
			{project.description}
		</p>
		<div class="flex gap-1 flex-wrap justify-center">
			{#each project.techs as tech}
				<div
					class="tooltip tooltip-bottom text-xl text-slate-700 hover:text-primary mx-0.5 p-1 border-1 border-slate-300 shadow-sm items-center justify-center rounded-md bg-transparent"
					data-tip={tech.name}
				>
					{@render techLogo(tech.logo)}
				</div>
			{/each}
		</div>
	</div>
</div>
