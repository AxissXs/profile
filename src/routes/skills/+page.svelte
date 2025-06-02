<script lang="ts">
	import { current_section } from '$lib/stores.svelte';
	import { slide } from 'svelte/transition';
	import type { PageData } from './$types';
	import Photoshop from 'virtual:icons/cib/adobe-photoshop';
	import type { LogoComponent } from '$lib/types';

	let { data }: { data: PageData } = $props();

	current_section.value = 'skills';

	let samples = [
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			color: '-blue-600' //drop-shadow-blue-600 bg-blue-600 shadow-blue-600
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			color: '-yellow-500' //drop-shadow-yellow-500 bg-yellow-500 shadow-yellow-500
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			color: '-gray-800' //drop-shadow-gray-800 bg-gray-800 shadow-gray-800
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			color: '-teal-500' //drop-shadow-teal-500 bg-teal-500 shadow-teal-500
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			color: '-green-600' //drop-shadow-green-600 bg-green-600 shadow-green-600
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			color: '-purple-600' //drop-shadow-purple-600 bg-purple-600 shadow-purple-600
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			color: '-indigo-600' //drop-shadow-indigo-600 bg-indigo-600 shadow-indigo-600
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			color: '-red-600' //drop-shadow-red-600 bg-red-600 shadow-red-600
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			color: '-cyan-600' //drop-shadow-cyan-600 bg-cyan-600 shadow-cyan-600
		}
	];
</script>

{#snippet skillLogo(logo: LogoComponent)}
	{@const Component = logo}
	<Component class="shadow-xl shadow-black"/>
{/snippet}

<div transition:slide>
	<div class="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
		{#each samples as sample}
			<div class="rounded-lg bg-white p-4 drop-shadow-xs drop-shadow{sample.color}">
				<div class="mb-2 flex items-center">
					<div
						class="flex h-12 w-12 items-center shadow-sm shadow{sample.color} justify-center rounded-full bg{sample.color} p-2 text-white"
					>
						{@render skillLogo(sample.logo)}
					</div>
					<h2 class="ms-4 text-xl font-bold">{sample.name}</h2>
				</div>
				<p class="text-gray-600">
					{sample.description}
				</p>
				<div class="mt-2 h-4 rounded-full bg-gray-300">
					<div class="h-4 rounded-full bg{sample.color}" style="width: 80%;"></div>
				</div>
			</div>
		{/each}
	</div>
</div>
