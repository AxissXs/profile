export type AvailableSections = 'resume' | 'stack' | 'projects' | 'skills';

export type Tech = {
	name: string;
	logo: string;
};

export type ProjectEntry = {
	title: string;
	description: string;
	full_description: string;
	image: string;
	screenshots: string[];
	techs: Tech[];
};
