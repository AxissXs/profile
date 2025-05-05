<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<div class="mx-auto max-w-6xl overflow-hidden rounded-lg bg-white shadow-md">
	<!-- Header -->
	<div class="flex items-center justify-between border-b px-6 py-4">
		<div class="flex items-center space-x-4">
			<img src="https://via.placeholder.com/60" alt="Profile" class="h-16 w-16 rounded-full" />
			<div>
				<h1 class="text-xl font-bold">Kristi Sipes</h1>
				<p class="text-sm text-gray-500">Research and Development</p>
				<p class="text-sm text-gray-400">Origin: Career Site</p>
			</div>
		</div>
		<div class="text-right">
			<p class="text-sm text-gray-500">Applied at <strong>13 October, 2023</strong></p>
			<p class="text-sm text-gray-500">Job Applied: <strong>Research and Development</strong></p>
			<div class="mt-1 inline-flex items-center font-semibold text-yellow-500">
				⭐ 3.5 Overall <span class="ml-2 rounded bg-green-100 px-2 py-1 text-xs text-green-700"
					>Active</span
				>
			</div>
			<button class="mt-2 rounded bg-teal-600 px-4 py-1 text-sm text-white">Send Email</button>
		</div>
	</div>

	<!-- Navigation Tabs -->
	<div class="flex space-x-6 border-b px-6 py-3 text-sm font-medium text-gray-600">
		<button class="text-gray-400">Job Application</button>
		<button class="border-b-2 border-blue-600 text-blue-600">Resume</button>
		<button class="text-gray-400">Form Submission</button>
		<button class="text-gray-400">Interview</button>
	</div>

	<div class="flex flex-col space-y-6 px-6 py-6 md:flex-row md:space-y-0 md:space-x-6">
		<!-- Resume Section -->
		<div class="space-y-6 md:w-2/3">
			<section>
				<h2 class="text-lg font-semibold">Profile</h2>
				<p class="mt-1 text-sm text-gray-700">
					Currently working as a Marketing Manager at Netflix with a mission of building and
					executing marketing activities to grow the subscriber base in the US. Previously worked as
					an Analyst at Spotify, with primary focus on analyzing and identifying areas of churn for
					business operations.<br />
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
							Set up, managed & tracked a marketing plan budget of $250k across all digital and
							offline channels that generated an ROI of +370%.
						</li>
						<li>
							Accelerated sales growth rate 30% by launching A/B testing and optimizing paid social
							and email marketing campaigns.
						</li>
						<li>
							Developed and presented reporting presentations based on past performance and
							strategy.
						</li>
						<li>
							Heavily involved in webinars, hackathons, launching new products and developing
							projects with C-Level executives.
						</li>
					</ul>
				</div>
				<div class="mt-4">
					<p class="font-medium">Analyst</p>
					<p class="text-sm text-gray-500">Spotify · Stockholm, Sweden · Sep 2014 – Feb 2017</p>
					<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">
						<li>
							Analyzed and reported areas of business improvement related to financial and
							operational processes.
						</li>
						<li>
							Delivered timely financial statements and assurance for 15+ projects in one year.
						</li>
						<li>
							Managed large datasets and created dashboards to automate or optimize processes.
						</li>
						<li>Executed a churn strategy which decreased churn by 15%.</li>
					</ul>
				</div>
			</section>

			<section>
				<h2 class="text-lg font-semibold">Education</h2>
				<ul class="mt-2 space-y-2 text-sm text-gray-700">
					<li>
						<strong>MSc Strategic Marketing</strong> · Liberty School of Management · Graduated with
						distinction (2010 - 2014)
					</li>
					<li>
						<strong>BSc Business & Management</strong> · EW Business & Economics School (2008 - 2010)
					</li>
				</ul>
			</section>

			<section>
				<h2 class="text-lg font-semibold">Most proud of</h2>
				<!-- Add content if needed -->
			</section>
		</div>

		<!-- Sidebar Section -->
		<div class="space-y-6 rounded bg-gray-50 p-4 md:w-1/3">
			<section>
				<h2 class="mb-2 text-lg font-semibold">Personal Information</h2>
				<ul class="space-y-1 text-sm text-gray-700">
					<li><strong>Email:</strong> kristisipes@gmail.com</li>
					<li><strong>Phone:</strong> +62-921-019-112</li>
					<li><strong>Gender:</strong> Female</li>
					<li><strong>Birthdate:</strong> May 20, 2000</li>
					<li><strong>Living Address:</strong> New York, NY, 10001, United States</li>
				</ul>
			</section>

			<section>
				<h2 class="mb-2 text-lg font-semibold">Education Information</h2>
				<ul class="space-y-1 text-sm text-gray-700">
					<li><strong>University:</strong> Boston University</li>
					<li><strong>Qualification:</strong> Bachelor of Engineering</li>
					<li><strong>Graduation:</strong> 2014</li>
					<li><strong>Referral:</strong> Not Provided</li>
				</ul>
			</section>

			<section>
				<h2 class="mb-2 text-lg font-semibold">Notes</h2>
				<textarea
					class="w-full rounded border border-gray-300 p-2 text-sm"
					rows="4"
					placeholder="Write note..."
				></textarea>
			</section>
		</div>
	</div>
</div>
