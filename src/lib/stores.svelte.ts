import type { AvailableSections } from "./types";

export const current_section: { value: AvailableSections } = $state({
	value: 'resume'
});