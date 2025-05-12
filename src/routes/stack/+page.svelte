<script lang="ts">
	import { current_section } from '$lib/stores.svelte';
	import { slide } from 'svelte/transition';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

    current_section.value = 'stack';
</script>

<div transition:slide>
	<section>
		<h2 class="text-lg font-semibold">Profile</h2>
		<p class="mt-1 text-sm text-gray-700">
			Currently working as a Marketing Manager at Netflix with a mission of building and executing
			marketing activities to grow the subscriber base in the US. Previously worked as an Analyst at
			Spotify, with primary focus on analyzing and identifying areas of churn for business
			operations.<br />
			<br />
			Passionate about growth marketing & startups!
		</p>
	</section>

	<section>
		<h2 class="text-lg font-semibold">Experience</h2>
		<div class="mt-2">
			<p class="font-medium">Marketing Manager</p>
			<p class="text-sm text-gray-500">
				Netflix · San Francisco, USA · Feb 2017 – currently employed
			</p>
			<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">
				<li>
					Set up, managed & tracked a marketing plan budget of $250k across all digital and offline
					channels that generated an ROI of +370%.
				</li>
				<li>
					Accelerated sales growth rate 30% by launching A/B testing and optimizing paid social and
					email marketing campaigns.
				</li>
				<li>
					Developed and presented reporting presentations based on past performance and strategy.
				</li>
				<li>
					Heavily involved in webinars, hackathons, launching new products and developing projects
					with C-Level executives.
				</li>
			</ul>
		</div>
		<div class="mt-4">
			<p class="font-medium">Analyst</p>
			<p class="text-sm text-gray-500">Spotify · Stockholm, Sweden · Sep 2014 – Feb 2017</p>
			<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">
				<li>
					Analyzed and reported areas of business improvement related to financial and operational
					processes.
				</li>
				<li>Delivered timely financial statements and assurance for 15+ projects in one year.</li>
				<li>Managed large datasets and created dashboards to automate or optimize processes.</li>
				<li>Executed a churn strategy which decreased churn by 15%.</li>
			</ul>
		</div>
	</section>

	<section>
		<h2 class="text-lg font-semibold">Education</h2>
		<ul class="mt-2 space-y-2 text-sm text-gray-700">
			<li>
				<strong>MSc Strategic Marketing</strong> · Liberty School of Management · Graduated with distinction
				(2010 - 2014)
			</li>
			<li>
				<strong>BSc Business & Management</strong> · EW Business & Economics School (2008 - 2010)
			</li>
		</ul>
	</section>

	<section>
		<h2 class="text-lg font-semibold">Most proud of</h2>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nemo iure atque ullam provident sint
		laudantium, obcaecati laborum quos laboriosam veritatis ea amet deleniti quam voluptate asperiores,
		aliquid consequatur explicabo!
	</section>
</div>
