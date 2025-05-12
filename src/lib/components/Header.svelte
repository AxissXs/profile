<script>
	import { __ } from '$lib/i18n';
	import StackOverflow from 'virtual:icons/cib/stackoverflow';
	import Linkedin from 'virtual:icons/cib/linkedin';
	import Github from 'virtual:icons/cib/github';
</script>

<div class="flex items-center justify-between px-6 py-4">
	<div class="flex items-center space-x-4">
		<img
			src="/images/photo.webp"
			alt="Profile"
			class="h-24 w-24 rounded-full shadow-2xl shadow-indigo-200"
		/>
		<div>
			<h1 class="text-xl font-bold text-slate-700">{$__('header.full_name')}</h1>
			<p class="text-sm !text-gray-500">{$__('header.profession')}</p>
			<p class="text-sm !text-gray-400">
				{$__('header.location')}: <strong>{$__('header.location_desc')}</strong>
			</p>
		</div>
	</div>
	<div class="text-end">
		<p class="text-sm text-gray-500">
			{$__('header.current_position')}: <strong>{$__('header.current_position_desc')}</strong>
		</p>
		<p class="text-sm text-gray-500">
			{$__('header.available_for')}: <strong>{$__('header.available_for_desc')}</strong>
		</p>
		<div class="mx-2 mt-1 inline-flex items-center gap-2 align-middle font-semibold text-slate-700">
			<a target="_blank" class="hover:text-primary" href="https://github.com/AxissXs">
				<Github />
			</a>
			<a target="_blank" class="hover:text-primary" href="https://www.linkedin.com/in/amir-ghamari-68b046225">
				<Linkedin />
			</a>
			<a target="_blank" class="hover:text-primary" href="https://stackoverflow.com/users/2734262/axissxs">
				<StackOverflow />
			</a>
		</div>
		<a
			href="mailto:amir@kenvin.ir"
			target="_blank"
			class="btn btn-sm btn-primary mt-2 rounded px-2 py-1 text-sm !text-white shadow-xl shadow-indigo-500/40"
			>Get in touch</a
		>
	</div>
</div>
