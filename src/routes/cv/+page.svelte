<svelte:head>
	<title>pyrossh | cv</title>
	<meta name="description" content="Peter John's CV" />
</svelte:head>

<div>
	<section>
		<h3>Equal Experts</h3>
		<h4>Software Developer, Oct 2018 - present</h4>
		<h5>
			Making Software. Better. Equal Experts is a network of talented, experienced software
			consultants, specialising in agile delivery.
		</h5>
		<div>
			These are the client projects I worked on,
			<ul>
				<li>
					<b>John Lewis</b>
					<ul class="*:list-disc">
						<li>Built a social quiz game to improve engagement across the website</li>
						<li>
							Implemented new functionality in customer self serve functions like returns,
							cancellations, tracking.
						</li>
						<li>
							Refactored the old self serve reactjs app to use nextjs and removed a large redux
							dependency thereby simplifying the codebase.
						</li>
						<li>
							Ran many experiments in the customer services and order pages to improve our metrics
							and reduce contacts.
						</li>
						<li>
							Built the new Product Description Page (PDP) for Simple Carpets using a micro frontend
							architecture.
						</li>
					</ul>
				</li>
				<li>
					<b>iOWNA</b>
					<ul class="*:list-disc">
						<li>Built a content editor for curators to create content on our platform</li>
						<li>
							Built the iOWNA crossplatform app in react-native that works in android, ios, and web
							using one codebase.
						</li>
						<li>Implemented admin specific functionalities in the web app</li>
						<li>Implemented an in-app OTA update method using expo and semantic versionin</li>
						<li>Built the iOWNA marketing website</li>
						<li>
							Built the Health Questionnaire clinician/patient feedback form feature with push
							notifications
						</li>
					</ul>
				</li>
				<li>
					<b>Zeta</b>
					<ul class="*:list-disc">
						<li>
							Added multiple download formats (pdf,html,xlsx) for reports in the Reporting Center
						</li>
						<li>
							Created a Groovy Script to automate creating ACL in sandbox authorization framework
						</li>
						<li>Integrated Camunda Workflow Engine into Zeta services in Operations Center</li>
						<li>Built a few workflows on Camunda and integrated it with some internal services</li>
						<li>
							Built a custom k8s CRD using the operator framework to automate creating ACL in
							sandbox using custom resources
						</li>
					</ul>
				</li>
				<li>
					<b>Lifebox</b>
					<ul class="*:list-disc">
						<li>Added search functionality to the hospital procedure codes</li>
						<li>
							Converted the Health Questionnaire from json to native go code making it easier to
							make changes to it
						</li>
						<li>
							Integrated with SAP using HL7 message format to create patients, episodes,
							schedule/cancel procedures
						</li>
						<li>Built the Patient Document repository for uploading, downloading patient files</li>
						<li>Built the patients online reports view using the data from SAP</li>
					</ul>
				</li>
			</ul>
		</div>
	</section>
	<section>
		<h3>Numberz</h3>
		<h4>Full Stack Developer, Sept 2016 - Oct 2018</h4>
		<h5>
			Numberz integrates banking with your day-2-day business work-flows freeing up a lot of effort,
			time and heart-burn, to help your business grow.
		</h5>
		<ul class="*:list-disc">
			<li>Implemented new features and fixed bugs on the numberz android app</li>
			<li>Integrated numberz with Tally ERP</li>
			<li>
				Implemented CI and Devops within out system to ease our deployment process using docker and
				docker-compose
			</li>
			<li>
				Created a slack bot called deploybot which was used to deploy our microservices to our
				servers
			</li>
			<li>Started tech talks on Thursdays to discuss cutting edge technologies</li>
			<li>Architected and built the Notification Service using rabbitmq and nodejs</li>
			<li>Built the Multi-User and Multi-Company Features</li>
			<li>
				Implemented and lead a team on integration with the GSTN System so that customers could file
				their GST Taxes within our product
			</li>
			<li>Architected and built the numberz Identity Management Service(IMS)</li>
			<li>Architected our new product called the Numberz Accounts Receivable (AR)</li>
			<li>Laid down the architecture for the frontend and backend</li>
			<li>
				Built these core features for our new AR Product - Auto Reminders, Manual Reminders, User
				Management, Cash Discounting, CFO Dashboard Metrics
			</li>
		</ul>
	</section>
	<section>
		<h3>Playlyfe</h3>
		<h4>Full Stack Developer, Apr 2014 - Sept 2016</h4>
		<h5>
			Playlyfe is an online Gamification Platform which empowers anyone to design and implement a
			gamified system.
		</h5>
		<ul class="*:list-disc">
			<li>Built the Playlyfe Hybrid Mobile app using Phonegap for Android and iOS</li>
			<li>Built the leaderboard system using Mongodb, Redis and Couchbase as the datastore</li>
			<li>Migration of data from v1 to v2 of the API</li>
			<li>Built SDKs for the Playlyfe v2 API in C#, Java, Python, Ruby, PHP, Nodejs, Gos</li>
			<li>Maintained the job server and wrote most of the background jobs</li>
			<li>
				Added documentation to most of the REST API and created the Developer Console which was Like
				Swagger UI
			</li>
			<li>Integrated our REST API in Leanosphere's LMS</li>
			<li>Integrated the REST API in Knolskape's product Aktivlearn LMS</li>
			<li>Integrated the REST API in Linkstreet's LMS</li>
			<li>
				Integrated the REST API in Moodle LMS by creating an admin plugin to add Gamification
				features
			</li>
			<li>Rebuilt the core platform in golang for performance and developement speed</li>
			<li>Built the GraphQL API for our cutting edge product Catalyst</li>
			<li>Convinced the boss to create our own scripting language plscript for our rule engine.</li>
			<li>Build a REST API for our product catalyst for a POC with Vodafone</li>
			<li>
				Built the Quiz, Review, Match, Tournament features in Catalyst for a major project with HP
			</li>
			<li>Added gamification features to Saudi Matches a popular game tracking app</li>
		</ul>
	</section>
</div>

<style lang="postcss">
	b {
		font-weight: 600;
	}

	ul {
		@apply m-2 pl-2 sm:pl-5;
	}

	/* li {
		list-style-type: disc;
		list-style-position: outside;
	} */

	h3 {
		font-weight: 700;
		font-size: 1.2rem;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	h4 {
		font-weight: 500;
		margin-top: 0.5rem;
	}

	h5 {
		margin-top: 0.5rem;
	}
</style>
