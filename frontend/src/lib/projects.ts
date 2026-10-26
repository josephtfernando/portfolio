/**
 * The homepage's project section. Plain data, edited by hand.
 *
 * `brief` is markdown (links, *emphasis*, `code`), rendered on the server.
 * `stack` and `year` make the small meta line above it. The copy below is the
 * old site's wording, kept so the section isn't empty — rewrite it.
 */
export interface Project {
	name: string;
	stack: string;
	year: string;
	/** Markdown. */
	brief: string;
	href?: string;
}

export const projects: Project[] = [
	{
		name: 'cmrlsim',
		stack: 'Go · discrete-event simulation',
		year: '2026',
		brief:
			'A Chennai Metropolitan Railway simulator. The full CMRL Phase I network — 41 stations across 54.1 km — modelled as a weighted directed graph, with train movement, fare collection and ridership economics run as discrete events behind a REST API.',
		href: 'https://github.com/ApxllxCartxr/cmrlsim'
	},
	{
		name: 'OpenStore',
		stack: 'Python · agentic commerce',
		year: '2026',
		brief:
			'An AI sales channel a merchant switches on in three commands. Agents propose, a deterministic compiler holding every key decides, and every rupee that moves leaves a receipt anyone can verify offline.',
		href: 'https://github.com/ApxllxCartxr/OpenStore'
	},
	{
		name: 'LegacyWeaver',
		stack: 'Python · COBOL migration',
		year: '2026',
		brief:
			'Autonomous COBOL to Java migration, verified against the compiled legacy binary rather than a reading of it. Both programs run on identical input, every output byte is compared, and a local repair loop runs until the candidate verifies.',
		href: 'https://github.com/ApxllxCartxr/LegacyWeaver'
	},
	{
		name: 'SimhaLink',
		stack: 'Dart · Flutter',
		year: '2025',
		brief:
			'A crowd control and smart city app built solo for the Simhastha Kumbh Mela hackathon: role-scoped access for organisers, medical staff and volunteers, end-to-end encrypted group coordination, and shortest-path navigation for lost members.',
		href: 'https://github.com/ApxllxCartxr/SimhaLink'
	},
	{
		name: 'Facet',
		stack: 'Python · compliance tooling',
		year: '2026',
		brief:
			'AML triage where the model explains and the rules decide. Gemma reads transactions, onboarding documents and financial records, flags anomalies, and writes the report a review team actually signs off on.',
		href: 'https://github.com/ApxllxCartxr/Facet'
	}
];
