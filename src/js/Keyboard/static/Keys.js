const locations = {
  GENERAL: 'General keys',
  LEFT_SIDE_MODIFIER_KEYS: 'left-side-modifier-keys',
  RIGHT_SIDE_MODIFIER_KEYS: 'right-side-modifier-keys'
}


const keyTypes = {
  KEY: 'key',
  BACKSPACE: 'backspace',
  TAB: 'Tab',
  CAPSLOCK: 'caps-lock',
  ENTER: 'enter',
  SHIFT: 'shift',
  ARROW: 'arrow',
  CONTROL: 'control',
  SPACE: 'space'
}

export const keysByRows =
  [
    [
      {
        key: '`',
        shiftKey: '~',
        code: 'Backquote',
        keyCode: 192,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '1',
        shiftKey: '!',
        code: 'Digit1',
        keyCode: 49,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '2',
        shiftKey: '@',
        code: 'Digit2',
        keyCode: 50,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '3',
        shiftKey: '#',
        code: 'Digit3',
        keyCode: 51,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '4',
        shiftKey: '$',
        code: 'Digit4',
        keyCode: '52',
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '5',
        shiftKey: '%',
        code: 'Digit5',
        keyCode: '53',
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '6',
        shiftKey: '^',
        code: 'Digit6',
        keyCode: 54,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '7',
        shiftKey: '&',
        code: 'Digit7',
        keyCode: 55,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '8',
        shiftKey: '*',
        code: 'Digit8',
        keyCode: 56,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '9',
        shiftKey: '(',
        code: 'Digit9',
        keyCode: 57,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '0',
        shiftKey: ')',
        code: 'Digit0',
        keyCode: 48,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '-',
        shiftKey: '_',
        code: 'Minus',
        keyCode: '89',
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '=',
        shiftKey: '+',
        code: 'Equal',
        keyCode: 187,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'Backspace',
        shiftKey: 'Backspace',
        code: 'Backspace',
        keyCode: 8,
        location: locations.GENERAL,
        keyName: keyTypes.BACKSPACE
      },
    ],
    [
      {
        key: 'Tab',
        shiftKey: 'Tab',
        code: 'Tab',
        keyCode: 9,
        location: locations.GENERAL,
        keyName: keyTypes.TAB
      },
      {
        key: 'q',
        shiftKey: 'Q',
        code: 'KeyQ',
        keyCode: 81,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'w',
        shiftKey: 'W',
        code: 'KeyW',
        keyCode: 87,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'e',
        shiftKey: 'E',
        code: 'KeyE',
        keyCode: 69,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'r',
        shiftKey: 'R',
        code: 'KeyR',
        keyCode: 82,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 't',
        shiftKey: 'T',
        code: 'KeyT',
        keyCode: 84,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'y',
        shiftKey: 'Y',
        code: 'KeyY',
        keyCode: 89,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'u',
        shiftKey: 'U',
        code: 'KeyU',
        keyCode: 85,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'i',
        shiftKey: 'I',
        code: 'KeyI',
        keyCode: 73,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'o',
        shiftKey: 'O',
        code: 'KeyO',
        keyCode: 79,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'p',
        shiftKey: 'P',
        code: 'KeyP',
        keyCode: 80,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '[',
        shiftKey: '{',
        code: 'BracketLeft',
        keyCode: 219,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: ']',
        shiftKey: '}',
        code: 'BracketRight',
        keyCode: 221,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '\\',
        shiftKey: '|',
        code: 'Backslash',
        keyCode: 220,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      }
    ],
    [
      {
        key: 'Caps Lock',
        shiftKey: 'Caps Lock',
        code: 'CapsLock',
        keyCode: 20,
        location: locations.GENERAL,
        keyName: keyTypes.CAPSLOCK
      },
      {
        key: 'a',
        shiftKey: 'A',
        code: 'KeyA',
        keyCode: 65,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 's',
        shiftKey: 'S',
        code: 'KeyS',
        keyCode: 83,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'd',
        shiftKey: 'D',
        code: 'KeyD',
        keyCode: 68,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'f',
        shiftKey: 'F',
        code: 'KeyF',
        keyCode: 70,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'g',
        shiftKey: 'G',
        code: 'KeyG',
        keyCode: 71,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'h',
        shiftKey: 'H',
        code: 'KeyH',
        keyCode: 72,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'j',
        shiftKey: 'J',
        code: 'KeyJ',
        keyCode: 74,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'k',
        shiftKey: 'K',
        code: 'KeyK',
        keyCode: 75,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'l',
        shiftKey: 'L',
        code: 'KeyL',
        keyCode: 76,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: ';',
        shiftKey: ':',
        code: 'Semicolon',
        keyCode: 186,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '\'',
        shiftKey: '"',
        code: 'Quote',
        keyCode: 222,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'Enter',
        shiftKey: 'Enter',
        code: 'Enter',
        keyCode: 13,
        location: locations.LEFT_SIDE_MODIFIER_KEYS,
        keyName: keyTypes.ENTER
      }
    ],
    [
      {
        key: 'Shift',
        shiftKey: 'Shift',
        code: 'ShiftLeft',
        keyCode: 16,
        location: locations.LEFT_SIDE_MODIFIER_KEYS,
        keyName: keyTypes.CAPSLOCK
      },
      {
        key: 'z',
        shiftKey: 'Z',
        code: 'KeyZ',
        keyCode: 90,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'x',
        shiftKey: 'X',
        code: 'KeyX',
        keyCode: 88,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'c',
        shiftKey: 'C',
        code: 'KeyC',
        keyCode: 67,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'v',
        shiftKey: 'V',
        code: 'KeyV',
        keyCode: 86,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'b',
        shiftKey: 'B',
        code: 'KeyB',
        keyCode: 66,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'n',
        shiftKey: 'N',
        code: 'KeyN',
        keyCode: 78,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: 'm',
        shiftKey: 'M',
        code: 'KeyM',
        keyCode: 77,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: ',',
        shiftKey: '<',
        code: 'Comma',
        keyCode: 188,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '.',
        shiftKey: '>',
        code: 'Period',
        keyCode: 190,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '/',
        shiftKey: '?',
        code: 'Slash',
        keyCode: 191,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      },
      {
        key: '▲',
        shiftKey: '▲',
        code: 'ArrowUp',
        keyCode: 38,
        location: locations.GENERAL,
        keyName: keyTypes.ARROW
      },
      {
        key: 'Shift',
        shiftKey: 'Shift',
        code: 'ShiftRight',
        keyCode: 16,
        location: locations.RIGHT_SIDE_MODIFIER_KEYS,
        keyName: keyTypes.SHIFT
      }
    ],
    [
      {
        key: 'Ctrl',
        shiftKey: 'Ctrl',
        code: 'ControlLeft',
        keyCode: 17,
        location: locations.LEFT_SIDE_MODIFIER_KEYS,
        keyName: keyTypes.CONTROL
      },
      {
        key: 'Win',
        shiftKey: 'Win',
        code: 'MetaLeft',
        keyCode: 91,
        location: locations.LEFT_SIDE_MODIFIER_KEYS,
        keyName: keyTypes.KEY
      },
      {
        key: 'Alt',
        shiftKey: 'Alt',
        code: 'AltLeft',
        keyCode: 18,
        location: locations.LEFT_SIDE_MODIFIER_KEYS,
        keyName: keyTypes.KEY
      },
      {
        key: '',
        shiftKey: '',
        code: 'Space',
        keyCode: 32,
        location: locations.GENERAL,
        keyName: keyTypes.SPACE
      },
      {
        key: 'Alt',
        shiftKey: 'Alt',
        code: 'AltRight',
        keyCode: 18,
        location: locations.RIGHT_SIDE_MODIFIER_KEYS,
        keyName: keyTypes.KEY
      },
      {
        key: 'Ctrl',
        shiftKey: 'Ctrl',
        code: 'ControlRight',
        keyCode: 17,
        location: locations.RIGHT_SIDE_MODIFIER_KEYS,
        keyName: keyTypes.CONTROL
      },
      {
        key: '◄',
        shiftKey: '◄',
        code: 'ArroLeft',
        keyCode: 37,
        location: locations.GENERAL,
        keyName: keyTypes.ARROW
      },
      {
        key: '▼',
        shiftKey: '▼',
        code: 'ArrowDowwn',
        keyCode: 40,
        location: locations.GENERAL,
        keyName: keyTypes.ARROW
      },
      {
        key: '►',
        shiftKey: '►',
        code: 'ArrowRight',
        keyCode: 39,
        location: locations.GENERAL,
        keyName: keyTypes.KEY
      }
    ]
  ]
