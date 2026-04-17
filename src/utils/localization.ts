type Locale = 'en' | 'pl';

export type LocalizedField<T> = T | { en: T; pl: T };

export const resolveLocalizedField = <T>(value: LocalizedField<T>, language: Locale): T => {
  if (value && typeof value === 'object' && 'en' in value && 'pl' in value) {
    return value[language];
  }
  return value as T;
};
