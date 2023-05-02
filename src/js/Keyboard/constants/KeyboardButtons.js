import { KEYBOARD_BUTTONS_CODES } from "./KeyboardButtonsCodes";
import { KEY_TYPE } from "./KeyType";

const locations = {
  GENERAL: 'general-keys',
  LEFT_SIDE_MODIFIER_KEYS: 'left-side-modifier-keys',
  RIGHT_SIDE_MODIFIER_KEYS: 'right-side-modifier-keys'
}

export const KEYBOARD_BUTTONS =
  {
    [KEYBOARD_BUTTONS_CODES.BACKQUOTE]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.DIGIT_1]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.DIGIT_2]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.DIGIT_3]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.DIGIT_4]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.DIGIT_5]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.DIGIT_6]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.DIGIT_7]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.DIGIT_8]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.DIGIT_9]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.DIGIT_0]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.MINUS]: { location: locations.GENERAL,  keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.EQUAL]: {location: locations.GENERAL,keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.BACKSPACE]: {location: locations.GENERAL, keyType: KEY_TYPE.BACKSPACE },
    [KEYBOARD_BUTTONS_CODES.TAB]: { location: locations.GENERAL, keyType: KEY_TYPE.TAB },
    [KEYBOARD_BUTTONS_CODES.KEY_Q]: {location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_W]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_E]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_R]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_T]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_Y]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_U]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_I]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_O]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_P]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.BRACKET_LEFT]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.BRACKET_RIGHT]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.BACKSLASH]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.CAPSLOCK]: { location: locations.GENERAL, keyType: KEY_TYPE.CAPSLOCK },
    [KEYBOARD_BUTTONS_CODES.KEY_A]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_S]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_D]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_F]: { location: locations.GENERAL,keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_G]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_H]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_J]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_K]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_L]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.SEMICOLON]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.QUOTE]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.ENTER]: { location: locations.LEFT_SIDE_MODIFIER_KEYS, keyType: KEY_TYPE.ENTER },
    [KEYBOARD_BUTTONS_CODES.SHIFT_LEFT]: { location: locations.LEFT_SIDE_MODIFIER_KEYS, keyType: KEY_TYPE.SHIFT },
    [KEYBOARD_BUTTONS_CODES.KEY_Z]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_X]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_C]: { location: locations.GENERAL,keyType: KEY_TYPE.KEY},
    [KEYBOARD_BUTTONS_CODES.KEY_V]: { location: locations.GENERAL, keyType: KEY_TYPE.KEY },
    [KEYBOARD_BUTTONS_CODES.KEY_B]: { location: locations.GENERAL,
      keyType: KEY_TYPE.KEY
    },
    [KEYBOARD_BUTTONS_CODES.KEY_N]: { location: locations.GENERAL,
      keyType: KEY_TYPE.KEY
    },
    [KEYBOARD_BUTTONS_CODES.KEY_M]: { location: locations.GENERAL,
      keyType: KEY_TYPE.KEY
    },
    [KEYBOARD_BUTTONS_CODES.COMMA]: { location: locations.GENERAL,
      keyType: KEY_TYPE.KEY
    },
    [KEYBOARD_BUTTONS_CODES.PERIOD]: { location: locations.GENERAL,
      keyType: KEY_TYPE.KEY
    },
    [KEYBOARD_BUTTONS_CODES.SLASH]: { location: locations.GENERAL,
      keyType: KEY_TYPE.KEY
    },
    [KEYBOARD_BUTTONS_CODES.ARROW_UP]: { location: locations.GENERAL,
      keyType: KEY_TYPE.ARROW
    },
    [KEYBOARD_BUTTONS_CODES.SHIFT_RIGHT]: { location: locations.RIGHT_SIDE_MODIFIER_KEYS,
      keyType: KEY_TYPE.SHIFT
    },
    [KEYBOARD_BUTTONS_CODES.CONTROL_LEFT]: { location: locations.LEFT_SIDE_MODIFIER_KEYS,
      keyType: KEY_TYPE.CONTROL
    },
    [KEYBOARD_BUTTONS_CODES.META]: { location: locations.LEFT_SIDE_MODIFIER_KEYS,
      keyType: KEY_TYPE.META
    },
    [KEYBOARD_BUTTONS_CODES.ALT_LEFT]: { location: locations.LEFT_SIDE_MODIFIER_KEYS,
      keyType: KEY_TYPE.ALT
    },
    [KEYBOARD_BUTTONS_CODES.SPACE]: { location: locations.GENERAL,
      keyType: KEY_TYPE.SPACE
    },
    [KEYBOARD_BUTTONS_CODES.ALT_RIGHT]: { location: locations.RIGHT_SIDE_MODIFIER_KEYS,
      keyType: KEY_TYPE.ALT
    },
    [KEYBOARD_BUTTONS_CODES.CONTROL_RIGHT]: { location: locations.RIGHT_SIDE_MODIFIER_KEYS,
      keyType: KEY_TYPE.CONTROL
    },
    [KEYBOARD_BUTTONS_CODES.ARROW_LEFT]: { location: locations.GENERAL,
      keyType: KEY_TYPE.ARROW
    },
    [KEYBOARD_BUTTONS_CODES.ARROW_DOWN]: { location: locations.GENERAL,
      keyType: KEY_TYPE.ARROW
    },
    [KEYBOARD_BUTTONS_CODES.ARROW_RIGHT]: { location: locations.GENERAL,
      keyType: KEY_TYPE.ARROW
    },

    [KEYBOARD_BUTTONS_CODES.DELETE]: { location: locations.GENERAL, keyType: KEY_TYPE.DELETE}
  }
