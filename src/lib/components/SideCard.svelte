<script lang="ts">
	import { __, locale } from '$lib/i18n';

	let birthDate = $derived(
		new Date('1996/11/11').toLocaleDateString($locale, {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		})
	);

	let yearOfGraduation = $derived(
		new Date(2017, 0, 1).toLocaleDateString($locale, {
			year: 'numeric'
		})
	);

	let age = $derived($locale == 'en' ? '29' : '۲۹');

	let { baseExtraClasses } = $props();
</script>

<div class="h-fit space-y-6 rounded bg-gray-100 p-4 py-6 shadow-md md:w-1/3 {baseExtraClasses}">
	<section>
		<h2 class="mb-2 text-lg font-semibold">{$__('sidecard.personal_information')}</h2>
		<ul class="space-y-1 text-sm text-gray-700">
			<li>
				<strong>{$__('sidecard.email')}:</strong>
				<a href="mailto:amir@kenvin.ir" target="_blank">amir@kenvin.ir</a>
			</li>
			<li><strong>{$__('sidecard.age')}:</strong> {age}</li>
			<li>
				<strong>{$__('sidecard.phone')}:</strong>
				<a href="tel:+989376976841" target="_blank">{$__('sidecard.tel')}</a>
			</li>
			<li></li>
			<li>
				<strong>{$__('sidecard.birthdate')}:</strong>
				{birthDate}
			</li>
		</ul>
	</section>

	<section>
		<h2 class="mb-2 text-lg font-semibold">{$__('sidecard.education_information')}</h2>
		<ul class="space-y-1 text-sm text-gray-700">
			<li>
				<strong>{$__('sidecard.place_of_graduation')}:</strong>
				{$__('sidecard.place_of_graduation_desc')}
			</li>
			<li>
				<strong>{$__('sidecard.qualification')}:</strong>
				{$__('sidecard.qualification_desc')}
			</li>
			<li>
				<strong>{$__('sidecard.date_of_graduation')}:</strong>
				{$__('sidecard.date_of_graduation_desc', { year: yearOfGraduation })}
			</li>
		</ul>
	</section>
</div>
