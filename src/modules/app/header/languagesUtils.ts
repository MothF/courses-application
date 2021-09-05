import {languageOptions, menuDefinitions} from 'src/modules/app/header/languageDefinitions';

export interface Language {
  label: string,
  value: string,
}

export interface MenuDefinition {
  explore: string,
  becomeSeller: string,
  signIn: string,
  signUp: string
}

export const getLanguage = (label: string): Language => {
  const languages = languageOptions.filter((lang) => lang.label === label);
  if (languages.length > 1) {
    throw Error(`More than one language detected for label: ${label}`);
  }
  const language = languages[0];
  return {label: language.label, value: language.value} as Language;
};

export const getMenuDefinition = (label: string): MenuDefinition => {
  const def = menuDefinitions.get(label);
  if (!def) {
    throw Error(`MenuDefinition not found for ${label}`);
  }
  return def;
};
