import { browser } from '$app/environment';
import { getCookie, setCookie } from '$lib/cookies';
import translations from '$lib/translations';
import type { Readable, Writable } from 'svelte/store';
import { derived, writable } from 'svelte/store';

export const locales: string[] = Object.keys(translations);
const DEFAULT_LANG: string = 'en';
const initLang: string = browser ? getCookie('lang') || DEFAULT_LANG : DEFAULT_LANG;
export const locale: Writable<string> = writable(initLang);
export const language: Writable<string> = locale;
export const localeLoaded: Writable<boolean> = writable(false);

if (browser) {
	locale.subscribe((value) => {
		setCookie('lang', value, 365);

		// Update body class for RTL support
		if (document && document.body) {
			if (value === 'fa') {
				document.body.classList.add('rtl');
			} else {
				document.body.classList.remove('rtl');
			}
		}

		setTimeout(() => {
			localeLoaded.set(true);
		}, 500);
	});
}

function translate(
	locale: string,
	key: string,
	vars: Record<string, string> = {}
): string | object {
	if (!key) throw new Error('no key provided to translation function');
	if (!locale) throw new Error(`no locale provided for key "${key}"`);

	let text = translations[locale]?.[key] ?? key;

	if (!text) return key;

	// Handle array or object values
	if (typeof text === 'object') {
		Object.keys(vars).forEach((k) => {
			const regex = new RegExp(`{{${k}}}`, 'g');
			text = JSON.parse(JSON.stringify(text).replace(regex, vars[k]));
		});
		return text;
	}

	Object.keys(vars).forEach((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

export const __: Readable<(key: string, vars?: Record<string, string>) => string> = derived(
	locale,
	($locale) => {
		return (key: string, vars = {}) => translate($locale, key, vars);
	}
);

// export const t: Readable<(key: string, vars?: Record<string, string>) => string> = derived(__, ($__) => $__);
