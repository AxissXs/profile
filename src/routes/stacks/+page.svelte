<script lang="ts">
	import { current_section } from '$lib/stores.svelte';
	import { slide } from 'svelte/transition';
    import type { PageData } from '../stack/$types';

    let { data }: { data: PageData } = $props();

    current_section.value = 'stack';
</script>

<div transition:slide>
	To be done...
</div>
