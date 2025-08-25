import { environment } from '../environments/environment';

export const BACK_URL = environment.back;

export const FETCH_PHASES_URL = BACK_URL + 'phase10/phases';

export const LOCALSTORAGE_KEY_SEED = 'customSeed';
export const LOCALSTORAGE_KEY_SELECTED_MENU = 'selectedMenu';
export const LOCALSTORAGE_KEY_NUMBER_PHASES = 'customNumberPhases';
