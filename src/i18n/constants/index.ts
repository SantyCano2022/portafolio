export const LOCALES = {
  en: {
    iso: "en-US",
    name: "English",
  },
  es: {
    iso: "es-CO",
    name: "Español",
  },
} as const satisfies Record<
  string,
  {
    name: string;
    iso: string;
  }
>;

export const LOCALE_DEFAULT: keyof typeof LOCALES = "es";
