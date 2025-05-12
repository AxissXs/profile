<script lang="ts">
	import { current_section } from '$lib/stores.svelte';
	import { slide } from 'svelte/transition';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	current_section.value = 'skills';
</script>

<div transition:slide>
	To be done...
</div>
