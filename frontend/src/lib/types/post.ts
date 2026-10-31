export interface PostSummary {
	title: string;
	slug: string;
	excerpt: string;
	date: string;
}

export interface Post extends PostSummary {
	content: string;
}
