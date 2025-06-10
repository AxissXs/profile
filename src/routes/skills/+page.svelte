<script lang="ts">
	import { current_section } from '$lib/stores.svelte';
	import { slide } from 'svelte/transition';
	import type { PageData } from './$types';
	import Photoshop from 'virtual:icons/cib/adobe-photoshop';
	import type { LogoComponent, SkillEntry } from '$lib/types';

	import PHP from 'virtual:icons/nonicons/php-16';
	import Laravel from 'virtual:icons/fa6-brands/laravel';
	import React from 'virtual:icons/fa6-brands/react';
	import Svelte from 'virtual:icons/proicons/svelte';
	import NodeJs from 'virtual:icons/proicons/nodejs';
	import MongoDB from 'virtual:icons/lineicons/mongodb';
	import Firebase from 'virtual:icons/cib/firebase';
	import Vercel from 'virtual:icons/ri/vercel-line';
	import Serverless from 'virtual:icons/file-icons/serverless';
	import NeonDB from 'virtual:icons/cbi/neon';
	import Tailwind from 'virtual:icons/lineicons/tailwindcss';
	import HTML from 'virtual:icons/proicons/html';
	import CSS from 'virtual:icons/proicons/css';
	import JavaScript from 'virtual:icons/proicons/javascript';
	import Redis from 'virtual:icons/cib/redis';
	import Docker from 'virtual:icons/cib/docker';
	import RESTfulAPI from 'virtual:icons/dashicons/rest-api';
	import Git from 'virtual:icons/lineicons/git';
	import CICD from 'virtual:icons/clarity/ci-cd-line';
	import Linux from 'virtual:icons/proicons/linux';
	import Server from 'virtual:icons/proicons/server';
	import DevOps from 'virtual:icons/carbon/ibm-devops-control';
	import TypeScript from 'virtual:icons/proicons/typescript';
	import PostgreSQL from 'virtual:icons/lineicons/postgresql';
	import MySQL from 'virtual:icons/lineicons/mysql';
	import SkillCard from '$lib/components/SkillCard.svelte';

	let { data }: { data: PageData } = $props();

	current_section.value = 'skills';

	let samples: SkillEntry[] = [
		{
			logo: PHP,
			name: 'PHP',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			level: '',
			bgColor: 'bg-blue-600',
			shadowColor: 'shadow-blue-600'
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			level: '',
			bgColor: 'bg-yellow-500',
			shadowColor: 'shadow-yellow-500'
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			level: '',
			bgColor: 'bg-gray-800',
			shadowColor: 'shadow-gray-800'
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			level: '',
			bgColor: 'bg-teal-500',
			shadowColor: 'shadow-teal-500'
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			level: '',
			bgColor: 'bg-green-600',
			shadowColor: 'shadow-green-600'
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			level: '',
			bgColor: 'bg-purple-600',
			shadowColor: 'shadow-purple-600'
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			level: '',
			bgColor: 'bg-indigo-600',
			shadowColor: 'shadow-indigo-600'
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			level: '',
			bgColor: 'bg-red-600',
			shadowColor: 'shadow-red-600'
		},
		{
			logo: Photoshop,
			name: 'Photoshop',
			description:
				'This is just a normal text to keep holding the place for the actual description here',
			level: '',
			bgColor: 'bg-cyan-600',
			shadowColor: 'shadow-cyan-600'
		}
	];
</script>

<div transition:slide>
	<div class="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
		<!-- //BUG: There is a strange glitch in between the cards sometimes! -->
		{#each samples as sample}
			<SkillCard skill={sample}/>
		{/each}
	</div>
</div>
