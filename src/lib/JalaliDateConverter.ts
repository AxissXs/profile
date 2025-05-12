// types.ts
export type JalaliDate = {
	year: number;
	month: number;
	day: number;
};

export type FormatOptions = {
	padZero?: boolean;
	separator?: string;
};

export class JalaliDateConverter {
  /**
   * Converts a Gregorian Date object to a Jalali date.
   * @param date - A JavaScript Date object
   * @returns JalaliDate { year, month, day }
   */
  static fromGregorian(date: Date): JalaliDate {
    // Day of year offsets for Gregorian months
    const gregorianDayOffsets = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

    const gYear = date.getFullYear();
    const gMonth = date.getMonth() + 1; // JS months are 0-based
    const gDay = date.getDate();

    const isAfterFeb = gMonth > 2;
    const adjustedYear = isAfterFeb ? gYear + 1 : gYear;

    let dayCount = 355666 + (365 * gYear)
      + Math.floor((adjustedYear + 3) / 4)
      - Math.floor((adjustedYear + 99) / 100)
      + Math.floor((adjustedYear + 399) / 400)
      + gDay + gregorianDayOffsets[gMonth - 1];

    let jYear = -1595 + 33 * Math.floor(dayCount / 12053);
    dayCount %= 12053;

    jYear += 4 * Math.floor(dayCount / 1461);
    dayCount %= 1461;

    if (dayCount > 365) {
      jYear += Math.floor((dayCount - 1) / 365);
      dayCount = (dayCount - 1) % 365;
    }

    const jalaliMonthOffsets = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];

    let jMonth = 1;
    for (; jMonth <= 12 && dayCount >= jalaliMonthOffsets[jMonth]; jMonth++) {}
    const jDay = dayCount - jalaliMonthOffsets[jMonth - 1] + 1;

    return {
      year: jYear,
      month: jMonth,
      day: jDay
    };
  }

  /**
   * Converts and formats a Gregorian Date into a Jalali date string.
   * @param date - A JavaScript Date object
   * @param options - Formatting options
   * @returns Formatted Jalali date string (e.g., "1404/02/20")
   */
  static format(date: Date, options: FormatOptions = {}): string {
    const jalali = this.fromGregorian(date);
    const separator = options.separator ?? '/';
    const pad = options.padZero ?? true;

    const year = jalali.year.toString();
    const month = pad ? jalali.month.toString().padStart(2, '0') : jalali.month.toString();
    const day = pad ? jalali.day.toString().padStart(2, '0') : jalali.day.toString();

    return `${year}${separator}${month}${separator}${day}`;
  }
}