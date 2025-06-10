<script lang="ts">
	import type { LogoComponent, SkillEntry } from '$lib/types';

	let { skill }: { skill: SkillEntry } = $props();
</script>

{#snippet skillLogo(logo: LogoComponent)}
	{@const Component = logo}
	<Component class="shadow-xl shadow-black" />
{/snippet}

<div class="rounded-lg bg-white p-4 drop-shadow-md drop-shadow-gray-300">
	<div class="mb-2 flex items-center">
		<div
			class="flex h-12 w-12 items-center shadow-sm {skill.shadowColor} justify-center rounded-full {skill.bgColor} p-2 text-white"
		>
			{@render skillLogo(skill.logo)}
		</div>
		<h2 class="ms-4 text-xl font-bold">{skill.name}</h2>
	</div>
	<p class="text-gray-600">
		{skill.description}
		{skill.description}
	</p>
	<div class="mt-3 mb-2 h-4 rounded-full">
		<div class="badge-secondary badge badge-outline w-fit rounded-full px-2 pt-1">Primary</div>
	</div>
</div>
