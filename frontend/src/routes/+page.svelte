<svelte:head>
	<title>Joseph A. T. Fernando</title>
	<meta
		name="description"
		content="Joseph A. T. Fernando - backend and infrastructure software, concurrency, and ML inference."
	/>
</svelte:head>

<header class="profile-header">
	<img class="profile-image" src="/Mask.png" alt="Joseph A. T. Fernando" />

	<div class="identity">
		<h1>Joseph A. T. Fernando</h1>
		<p class="identity-line">backend systems and infrastructure engineer.</p>
		<nav class="contact-links" aria-label="Contact links">
			<div class="link-row">
				<a href="https://github.com/josephtfernando">github</a>
				<a href="mailto:josephfernando2k5@gmail.com">josephfernando2k5@gmail.com</a>
			</div>
			<div class="link-row">
				<a href="/blog">blog</a>
				<a href="https://leetcode.com/u/josephtfernando">leetcode</a>
				<a href="https://www.linkedin.com/in/joseph-fernando05">linkedin</a>
			</div>
		</nav>
	</div>
</header>

<main>
	<section class="bio" aria-labelledby="bio-heading">
		<h2 id="bio-heading">About.</h2>
		<p>
			I'm a third-year student at
			<a href="https://www.citchennai.edu.in/">Chennai Institute of Technology</a>, graduating in
			2028.
		</p>
		<p class="bio-description">
			I remember taking the Chennai Metro for the first time and being overwhelmed by its scale.
			Trains were moving in parallel, stopping exactly where they were supposed to, and carrying
			thousands of people through a system that had to keep working every day. I started wondering
			about the software behind it, and whether I could build systems that handled the same kind of
			complexity.
		</p>
		<p class="bio-description">
			During COVID, I maintained a Discord bot that I originally built by following tutorials. At
			some point, that stopped being enough. I started writing my own context classes, methods, and
			abstractions. I could finally make something complex without needing someone else to show me
			the next step. That was when systems thinking started to click.
		</p>
		<p class="bio-description">
			I like the moment when many parts of a system work together and the whole thing suddenly makes
			sense. I'm now trying to get deeper into systems engineering, especially concurrency,
			infrastructure, LLM inference, and agent orchestration.
		</p>
		<p class="current-line">
			currently reading: ddia, and mit 6.1810: operating system engineering.
		</p>
	</section>

	<section class="experience" aria-labelledby="experience-heading">
		<h2 id="experience-heading">Work.</h2>

		<article class="entry">
			<div class="entry-heading">
				<h3>Software Development Intern</h3>
				<span>Picabord Technologies Pvt. Ltd. · Oct. 2025 - Nov. 2025, May 2026 - Jun. 2026</span>
			</div>
			<p class="entry-context">Chennai, Tamil Nadu</p>
			<ul>
				<li>
					Developed an internal CRM platform with RBAC, token-based invites, and workflows for
					clients, contracts, projects, and tasks using Next.js, PostgreSQL, and Prisma.
				</li>
				<li>
					Implemented HTTP-only authentication cookies, hashed passwords, authenticated server
					actions, and a containerized development environment with Docker.
				</li>
			</ul>
		</article>

		<article class="entry">
			<div class="entry-heading">
				<h3>President, Entrepreneurship Development Cell</h3>
				<span>Chennai Institute of Technology</span>
			</div>
			<p class="entry-context">CITIL</p>
			<ul>
				<li>
					Led a 45-member cell across operations, events, and member development with CITBIF and
					CITIL.
				</li>
				<li>
					Organized Startup Essentials, a 200-person workshop with Startup Singam, and raised
					₹50,000 in funding for the event.
				</li>
			</ul>
		</article>
	</section>

	<section class="projects" aria-labelledby="projects-heading">
		<h2 id="projects-heading">Things I've built.</h2>

		<article class="entry">
			<div class="entry-heading">
				<h3><a href="https://github.com/josephtfernando/OpenStore">OpenStore</a></h3>
				<span>Python, FastAPI, PostgreSQL, SvelteKit, Docker</span>
			</div>
			<p>
				Built for the Razorpay Buildathon. OpenStore lets merchants make their existing stores
				usable by the agents their customers already use. It runs an MCP server over a merchant's
				store so third-party agents, currently Claude, can interact with it. The hard part was
				making autonomous actions feel simple while keeping them secure and bounded.
			</p>
		</article>

		<article class="entry">
			<div class="entry-heading">
				<h3><a href="https://github.com/josephtfernando/daedalus">Daedalus</a></h3>
				<span>Python, SQLite, AsyncIO, LLM APIs, Linux, Tailscale, LangGraph</span>
			</div>
			<p>
				A local-first autonomous agent runtime with 14 tool primitives, persistent memory, and
				multi-provider routing. The core challenge was orchestrating six specialized seats and
				building a self-improving harness around the capabilities available to each agent.
			</p>
		</article>

		<article class="entry">
			<div class="entry-heading">
				<h3><a href="https://github.com/josephtfernando/cmrlsim">cmrlsim</a></h3>
				<span>Go, PostgreSQL, Docker</span>
			</div>
			<p>
				A deterministic Chennai Metro Rail simulation engine. The difficult part was modeling the
				passenger pipeline while keeping a constant number of trains moving through the system,
				alongside virtual time, train motion, and CBTC moving-block safety.
			</p>
		</article>
	</section>

	<section class="skills" aria-labelledby="skills-heading">
		<h2 id="skills-heading">Tools.</h2>
		<dl>
			<div>
				<dt>Backend and systems</dt>
				<dd>
					FastAPI, REST APIs, event-driven architecture, discrete-event simulation, concurrency,
					OAuth, WebAuthn, RBAC, multi-tenant systems, Next.js, SvelteKit
				</dd>
			</div>
			<div>
				<dt>Languages</dt>
				<dd>Go, Python, TypeScript, JavaScript, Java, SQL</dd>
			</div>
			<div>
				<dt>Data and infrastructure</dt>
				<dd>SQLite, PostgreSQL, MongoDB, Prisma, Docker, Git, Linux, Tailscale</dd>
			</div>
			<div>
				<dt>ML inference and serving</dt>
				<dd>
					Local LLM inference with Ollama, tool-use workflows, deterministic verification, failure
					memory, security guardrails, agent orchestration, dynamic tool generation
				</dd>
			</div>
		</dl>
	</section>
</main>

<span class="signature" role="img" aria-label="jf. signature">jf.</span>
