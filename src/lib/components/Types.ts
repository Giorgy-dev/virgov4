export type Section = {
	title: string;
	id: string;
	isSmall?: boolean;
	description?: string[];
	grid?: string[];
	cta?: {
		label: string;
		link: string;
	};
	steps?: {
		title: string;
		description: string;
	}[];
};
