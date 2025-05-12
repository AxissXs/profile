/*
 * This is a utility module for managing cookies in the browser.
 * It provides functions to set, get, delete, and retrieve all cookies without page reload
 */

export function setCookie(name: string, value: string, days: number): void {
    let expires = '';

    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }

    document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
}

export function getCookie(name: string): string | null {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }

    return null;
}

export function getCookies(): Record<string, string> {
    const cookies: Record<string, string> = {};
    const cookieString = document.cookie;

    if (cookieString === '') return cookies;

    const cookiePairs = cookieString.split(';');

    for (let i = 0; i < cookiePairs.length; i++) {
        const cookiePair = cookiePairs[i].trim();
        const equalsPosition = cookiePair.indexOf('=');

        if (equalsPosition > 0) {
            const name = cookiePair.substring(0, equalsPosition);
            const value = decodeURIComponent(cookiePair.substring(equalsPosition + 1));
            cookies[name] = value;
        }
    }

    return cookies;
}

export function deleteCookie(name: string): void {
    setCookie(name, '', -1);
}
