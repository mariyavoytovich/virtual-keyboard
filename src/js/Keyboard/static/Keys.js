import { keyType } from "./KeyType";

const locations = {
  GENERAL: 'general-keys',
  LEFT_SIDE_MODIFIER_KEYS: 'left-side-modifier-keys',
  RIGHT_SIDE_MODIFIER_KEYS: 'right-side-modifier-keys'
}

export const keysByRows =
  [
    [
      {
        key: '`',
        shiftKey: '~',
        code: 'Backquote',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '1',
        shiftKey: '!',
        code: 'Digit1',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '2',
        shiftKey: '@',
        code: 'Digit2',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '3',
        shiftKey: '#',
        code: 'Digit3',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '4',
        shiftKey: '$',
        code: 'Digit4',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '5',
        shiftKey: '%',
        code: 'Digit5',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '6',
        shiftKey: '^',
        code: 'Digit6',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '7',
        shiftKey: '&',
        code: 'Digit7',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '8',
        shiftKey: '*',
        code: 'Digit8',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '9',
        shiftKey: '(',
        code: 'Digit9',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '0',
        shiftKey: ')',
        code: 'Digit0',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '-',
        shiftKey: '_',
        code: 'Minus',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '=',
        shiftKey: '+',
        code: 'Equal',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'Backspace',
        shiftKey: 'Backspace',
        code: 'Backspace',
        location: locations.GENERAL,
        keyType: keyType.BACKSPACE
      },
    ],
    [
      {
        key: 'Tab',
        shiftKey: 'Tab',
        code: 'Tab',
        location: locations.GENERAL,
        keyType: keyType.TAB
      },
      {
        key: 'q',
        shiftKey: 'Q',
        code: 'KeyQ',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'w',
        shiftKey: 'W',
        code: 'KeyW',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'e',
        shiftKey: 'E',
        code: 'KeyE',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'r',
        shiftKey: 'R',
        code: 'KeyR',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 't',
        shiftKey: 'T',
        code: 'KeyT',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'y',
        shiftKey: 'Y',
        code: 'KeyY',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'u',
        shiftKey: 'U',
        code: 'KeyU',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'i',
        shiftKey: 'I',
        code: 'KeyI',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'o',
        shiftKey: 'O',
        code: 'KeyO',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'p',
        shiftKey: 'P',
        code: 'KeyP',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '[',
        shiftKey: '{',
        code: 'BracketLeft',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: ']',
        shiftKey: '}',
        code: 'BracketRight',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '\\',
        shiftKey: '|',
        code: 'Backslash',
        location: locations.GENERAL,
        keyType: keyType.KEY
      }
    ],
    [
      {
        key: 'Caps Lock',
        shiftKey: 'Caps Lock',
        code: 'CapsLock',
        location: locations.GENERAL,
        keyType: keyType.CAPSLOCK
      },
      {
        key: 'a',
        shiftKey: 'A',
        code: 'KeyA',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 's',
        shiftKey: 'S',
        code: 'KeyS',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'd',
        shiftKey: 'D',
        code: 'KeyD',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'f',
        shiftKey: 'F',
        code: 'KeyF',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'g',
        shiftKey: 'G',
        code: 'KeyG',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'h',
        shiftKey: 'H',
        code: 'KeyH',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'j',
        shiftKey: 'J',
        code: 'KeyJ',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'k',
        shiftKey: 'K',
        code: 'KeyK',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'l',
        shiftKey: 'L',
        code: 'KeyL',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: ';',
        shiftKey: ':',
        code: 'Semicolon',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '\'',
        shiftKey: '"',
        code: 'Quote',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'Enter',
        shiftKey: 'Enter',
        code: 'Enter',
        location: locations.LEFT_SIDE_MODIFIER_KEYS,
        keyType: keyType.ENTER
      }
    ],
    [
      {
        key: 'Shift',
        shiftKey: 'Shift',
        code: 'ShiftLeft',
        location: locations.LEFT_SIDE_MODIFIER_KEYS,
        keyType: keyType.SHIFT
      },
      {
        key: 'z',
        shiftKey: 'Z',
        code: 'KeyZ',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'x',
        shiftKey: 'X',
        code: 'KeyX',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'c',
        shiftKey: 'C',
        code: 'KeyC',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'v',
        shiftKey: 'V',
        code: 'KeyV',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'b',
        shiftKey: 'B',
        code: 'KeyB',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'n',
        shiftKey: 'N',
        code: 'KeyN',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: 'm',
        shiftKey: 'M',
        code: 'KeyM',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: ',',
        shiftKey: '<',
        code: 'Comma',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '.',
        shiftKey: '>',
        code: 'Period',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '/',
        shiftKey: '?',
        code: 'Slash',
        location: locations.GENERAL,
        keyType: keyType.KEY
      },
      {
        key: '▲',
        shiftKey: '▲',
        code: 'ArrowUp',
        location: locations.GENERAL,
        keyType: keyType.ARROW
      },
      {
        key: 'Shift',
        shiftKey: 'Shift',
        code: 'ShiftRight',
        location: locations.RIGHT_SIDE_MODIFIER_KEYS,
        keyType: keyType.SHIFT
      }
    ],
    [
      {
        key: 'Ctrl',
        shiftKey: 'Ctrl',
        code: 'ControlLeft',
        location: locations.LEFT_SIDE_MODIFIER_KEYS,
        keyType: keyType.CONTROL
      },
      {
        key: 'Win',
        shiftKey: 'Win',
        code: 'MetaLeft',
        location: locations.LEFT_SIDE_MODIFIER_KEYS,
        keyType: keyType.META
      },
      {
        key: 'Alt',
        shiftKey: 'Alt',
        code: 'AltLeft',
        location: locations.LEFT_SIDE_MODIFIER_KEYS,
        keyType: keyType.ALT
      },
      {
        key: '',
        shiftKey: '',
        code: 'Space',
        location: locations.GENERAL,
        keyType: keyType.SPACE
      },
      {
        key: 'Alt',
        shiftKey: 'Alt',
        code: 'AltRight',
        location: locations.RIGHT_SIDE_MODIFIER_KEYS,
        keyType: keyType.ALT
      },
      {
        key: 'Ctrl',
        shiftKey: 'Ctrl',
        code: 'ControlRight',
        location: locations.RIGHT_SIDE_MODIFIER_KEYS,
        keyType: keyType.CONTROL
      },
      {
        key: '◄',
        shiftKey: '◄',
        code: 'ArroLeft',
        location: locations.GENERAL,
        keyType: keyType.ARROW
      },
      {
        key: '▼',
        shiftKey: '▼',
        code: 'ArrowDowwn',
        location: locations.GENERAL,
        keyType: keyType.ARROW
      },
      {
        key: '►',
        shiftKey: '►',
        code: 'ArrowRight',
        location: locations.GENERAL,
        keyType: keyType.ARROW
      }
    ]
  ]
