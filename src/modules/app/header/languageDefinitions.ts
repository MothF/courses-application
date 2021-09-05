import {Language, MenuDefinition} from 'src/modules/app/header/languagesUtils';

export const languageOptions: Language[] = [
  {
    label: 'eng',
    value: 'English',
  },
  {
    label: 'de',
    value: 'Deutsch',
  },
  {
    label: 'es',
    value: 'Español',
  },
  {
    label: 'fr',
    value: 'Français',
  },
  {
    label: 'br',
    value: 'Português',
  },
  {
    label: 'ru',
    value: 'Русский',
  },
];

export const menuDefinitions: Map<string, MenuDefinition> = new Map<string, MenuDefinition>([
  [
    'eng', {
      explore: 'Explore',
      becomeSeller: 'Become a Seller',
      signIn: 'Sing In',
      signUp: 'Sign Up',
    },
  ],
  [
    'de', {
      explore: 'Entdecken',
      becomeSeller: 'Verkäufer werden',
      signIn: 'Anmelden',
      signUp: 'Registrieren',
    },
  ],
  [
    'es', {
      explore: 'Explora',
      becomeSeller: 'Inscrição',
      signIn: 'Iniciar sesión',
      signUp: 'Únete',
    },
  ],
  [
    'fr', {
      explore: 'Découvrir',
      becomeSeller: 'Devenir prestataire',
      signIn: 'Se connecter',
      signUp: 'S\'inscrire',
    },
  ],
  [
    'br', {
      explore: 'Explorar',
      becomeSeller: 'Torne-se um prestador',
      signIn: 'Entrar',
      signUp: 'Inscrição',
    },
  ],
  [
    'ru', {
      explore: 'Начать',
      becomeSeller: 'Разместить резюме',
      signIn: 'Войти',
      signUp: 'Регистрация',
    },
  ],
]);
