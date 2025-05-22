import type { Component } from "svelte";
import type { SVGAttributes } from "svelte/elements";

export type AvailableSections = 'resume' | 'stack' | 'projects' | 'skills';

export type TechLogo = Component<SVGAttributes<SVGSVGElement>>;

export type Tech = {
	name: string;
	logo: TechLogo;
};

export type ProjectEntry = {
	title: string;
	description: string;
	full_description: string;
	image: string;
	screenshots: string[];
	techs: Tech[];
};
