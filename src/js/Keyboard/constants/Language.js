import { ENG } from "./languages/eng"
import { RU } from "./languages/ru"

export const LANGUAGE = {
  RU: 'ru',
  ENG: 'eng'
}

const KEYBOARD_LANGUAGES ={
  [LANGUAGE.RU]: RU,
  [LANGUAGE.ENG]: ENG
}
export const getButtonKeyValuesByLanguage = (buttonCode, language) =>{
  return KEYBOARD_LANGUAGES[language][buttonCode];
}