import type { Component } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

export type AvailableSections = 'resume' | 'stack' | 'projects' | 'skills';

export type LogoComponent = Component<SVGAttributes<SVGSVGElement>>;

export type Tech = {
	name: string;
	logo: LogoComponent;
};

export type ProjectEntry = {
	title: string;
	description: string;
	full_description: string;
	image: string;
	screenshots: string[];
	techs: Tech[];
};

export type SkillEntry = {
	logo: LogoComponent;
	name: string;
	description: string;
	level: string; //TODO: Make it into an enum, somehow, with translation support
	bgColor: string;
	shadowColor: string;
};
