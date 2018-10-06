export default {

    '🌂': {
      start: '🌂',
   		description: "Print .1111111_ forever.",
   		operations: {
   			'🌂': {
            steps: ['👍', '🖨1'],
   				callback: '🌂'
   			}
   		}
   	},
    '👠': {
      start: '👠',
      description: "Print .00000000_ forever.",
      operations: {
        '👠': {
          steps: ['👍', '👍', '⭕'],
          callback: '👠'
        }
      }
    },
    '🎟': {
      start: '🌂',
      description: "Print .101_ forever",
      operations: {
        '👠': {
          steps: ['👍', '👍', '⭕'],
          callback: '🌂'
        },
        '🌂': {
          steps: ['👍', '👍', '🙋'],
          callback: '👠'
        }
      }
    },

    '🚡': {
      start: '🌂',
      description: "Print .100_ forever",
      operations: {
        '🌂': {
          steps: ['👍', '👍', '🙋'],
          callback: '👠'
        },
        '👠': {
          steps: ['👍', '👍', '⭕'],
          callback: '👠'
        },
      }
    },
    '🛬': {
      start: '🍔',
      description: "Print factoriol 1's seperated by a 0",
      operations: {
        '🍔': {
          steps: ['🖨🍔', '👍', '🖨🍔', '👍', '🖨0', '👍', '👍',  '🖨0', '👎', '👎'],
          callback: '⏰'
        },
        '⏰': {
          '1': {
            steps: ['👍', '🖨x', '👎', '👎', '👎'],
            callback: '⏰'
          },
          '0': {
            steps: [],
            callback: '⚗'
          }
        },
        '⚗': {
          '🔣': {
            steps: ['👍', '👍'],
            callback: '⚗'
          },
          '🕳': {
            steps: ['🖨1', '👎'],
            callback: '👾'
          },
      },
      '👾': {
          'x': {
            steps: ['🖨🕳', '👍'],
            callback: '⚗'
          },
          '🍔': {
            steps: ['👍'],
            callback: '🚑'
          },
          '🕳': {
            steps: ['👎', '👎'],
            callback: '👾'
          }
      },
      '🚑': {
          '🔣': {
            steps: ['👍', '👍'],
            callback: '🚑'
          },
          '🕳': {
            steps: ['🖨0', '👎', '👎'],
            callback: '⏰'
          }
        }
      }
    },

    '🏈': {
      start: '🍔',
      description: "Calculate square root of 2",
      operations: {
        '🍔': {
          name: 'guard',
          steps: ['🖨🍔', '👍', '🖨🍔', '👍', '🖨1'],
          callback: '⏰'
        },
        '⏰': {
          name: "new",
          '🍔': {
            steps: ['👍'],
            callback: '⚗'
          },
          '🔣': {
            steps: ['👎'],
            callback: '⏰'
          },
          '🕳': {
            steps: ['👎'],
            callback: '⏰'
          }
        },
        '⚗': {
          name: 'mark-digits',
          '0': {
            steps: ['👍', '🖨x', '👍'],
            callback: '⚗'
          },
          '1': {
            steps: ['👍', '🖨x', '👍'],
            callback: '⚗'
          },
          '🕳': {
            steps: ['👍', '🖨z', '👍', '👍', '🖨r'],
            callback: '👾'
          }
        },
        '👾': {
          name: 'find-x',
          'x': {
            steps: ['🕳',],
            callback: '🚑'
          },
          '🍔': {
            steps: [],
            callback: '⚓'
          },
          '🔣': {
            steps: ['👎', '👎'],
            callback: '👾'
          },
          '🕳': {
            steps: ['👎', '👎'],
            callback: '👾'
          },
      },
      '🚑': {
          name: 'first-r',
          'r': {
            steps: ['👍', '👍'],
            callback: '🏺'
          },
          '🔣': {
            steps: ['👍', '👍'],
            callback: '🚑'
          },
          '🕳': {
            steps: ['👍', '👍'],
            callback: '🚑'
          }
        },
        '🏺': {
          name: 'last-r',
          'r': {
            steps: ['👍', '👍'],
            callback: '🏺'
          },
          '🕳': {
            steps: ['🖨r', '👍', '👍', '🖨r'],
            callback: '👾'
          }
        },
        '⚓': {
          name: 'find-digits',
          '🍔': {
            steps: ['👍', '👍'],
            callback: '💢'
          },
          '🔣': {
            steps: ['👎', '👎'],
            callback: '⚓'
          },
          '🕳': {
            steps: ['👎', '👎'],
            callback: '⚓'
          }
        },
        '💢': {
          name: 'find-1st-digit',
          'x': {
            steps: ['👎'],
            callback: '😠'
          },
          'y': {
            steps: ['👎'],
            callback: '😠'
          },
          'z': {
            steps: ['👎'],
            callback: '🐜'
          },
          '🕳': {
            steps: ['👍', '👍'],
            callback: '💢'
          }
        },
        '😠': {
          name: 'foud-1st-digit',
          '0': {
            steps: ['👍'],
            callback: '📶'
          },
          '1': {
            steps: ['👍', '👍', '👍'],
            callback: '😧'
          }
        },
        '😧': {
          name: 'find-2nd-digit',
          'x': {
            steps: ['👎'],
            callback: '🐜'
          },
          'y': {
            steps: ['👎'],
            callback: '🐜'
          },
          '🕳': {
            steps: ['👍', '👍'],
            callback: '😧'
          }
        },
        '🐜': {
          name: 'found-2nd-digit',
          '0': {
            steps: ['👍'],
            callback: '📶'
          },
          '1': {
            steps: ['👍'],
            callback: '🔄'
          },
          '🕳': {
            steps: ['👍'],
            callback: '🔄'
          }
        },
        '📶': {
          name: 'add-zero',
          'r': {
            steps: ['🖨s'],
            callback: '♈'
          },
          'u': {
            steps: ['🖨v'],
            callback: '♈'
          },
          '🔣': {
            steps: ['👍', '👍'],
            callback: '📶'
          },
          '🕳': {
            steps: ['👍', '👍'],
            callback: '📶'
          }
        },
        '🔄': {
          name: 'add-one',
          'r': {
            steps: ['🖨v'],
            callback: '♈'
          },
          'u': {
            steps: ['🖨s', '👍', '👍'],
            callback: '♒'
          },
          '🔣': {
            steps: ['👍', '👍'],
            callback: '🔄'
          },
          '🕳': {
            steps: ['👍', '👍'],
            callback: '🔄'
          }
        },
        '♒': {
          name: 'carry',
          'r': {
            steps: ['🖨u'],
            callback: '♈'
          },
          'u': {
            steps: ['🖨r', '👍', '👍'],
            callback: '♒'
          },
          '🕳': {
            steps: ['🖨u'],
            callback: '🍆'
          }
        },
        '♈': {
          name: 'add-finished',
          '🍔': {
            steps: ['👍', '👍'],
            callback: '⤵'
          },
          '🔣': {
            steps: ['👎', '👎'],
            callback: '♈'
          },
          '🕳': {
            steps: ['👎', '👎'],
            callback: '♈'
          }
        },
        '⤵': {
          name: 'erase-old-x',
          'x': {
            steps: ['🕳', '👎', '👎'],
            callback: '⤴'
          },
          'z': {
            steps: ['🖨y', '👎', '👎'],
            callback: '⤴'
          },
          '🔣': {
            steps: ['👍', '👍'],
            callback: '⤵'
          },
          '🕳': {
            steps: ['👍', '👍'],
            callback: '⤵'
          }
        },
        '⤴': {
          name: 'print-new-x',
          '🍔': {
            steps: ['👍', '👍'],
            callback: '🚛'
          },
          'y': {
            steps: ['🖨z'],
            callback: '⚓'
          },
          '🕳': {
            steps: ['🖨x'],
            callback: '⚓'
          }
        },
        '🚛': {
          name: 'erase-old-y',
          'y': {
            steps: ['🖨🕳', '👎', '👎'],
            callback: '🎨'
          },

          '🔣': {
            steps: ['👍', '👍'],
            callback: '🚛'
          },
          '🕳': {
            steps: ['👍', '👍'],
            callback: '🚛'
          }
        },
        '🎨': {
          name: 'print-new-y',
          '🍔': {
            steps: ['👍'],
            callback: '🎟'
          },

          '🔣': {
            steps: ['🖨y', '👍'],
            callback: '😲'
          },
          '🕳': {
            steps: ['🖨y', '👍'],
            callback: '😲'
          }
        },
        '😲': {
          name: 'reset-new-x',
          '🕳': {
            steps: ['👍', '🖨x'],
            callback: '👟'
          },

          '🔣': {
            steps: ['👍', '👍'],
            callback: '😲'
          }
        },
        '👟': {
          name: 'flag-result-digits',
          's': {
            steps: ['🖨t', '👍', '👍'],
            callback: '⚛'
          },
          'v': {
            steps: ['🖨w','👍', '👍'],
            callback: '⚛'
          },

          '🔣': {
            steps: ['👍', '👍'],
            callback: '👟'
          },
          '🕳': {
            steps: ['👍', '👍'],
            callback: '👟'
          }
        },
        '⚛': {
          name: 'unflag-result-digits',
          's': {
            steps: ['🖨r', '👍', '👍'],
            callback: '⚛'
          },
          'v': {
            steps: ['🖨u','👍', '👍'],
            callback: '⚛'
          },

          '🔣': {
            steps: [],
            callback: '⚓'
          },
          '🕳': {
            steps: [],
            callback: '⚓'
          }
        },
        '🍆': {
          name: 'new-digit-is-zero',
          '🍔': {
            steps: ['👍'],
            callback: '🏧'
          },

          '🔣': {
            steps: ['👎'],
            callback: '🍆'
          },
          '🕳': {
            steps: ['👎'],
            callback: '🍆'
          }
        },
        '🏧': {
          name: 'print-zero-digit',
          '0': {
            steps: ['👍', '🖨🕳', '👍'],
            callback: '🏧'
          },

          '1': {
            steps: ['👍', '🖨🕳', '👍'],
            callback: '🏧'
          },
          '🕳': {
            steps: ['🖨0', '👍', '👍', '👍'],
            callback: '📎'
          }
        },
        '🎟': {
          name: 'new-digit-is-one',
          '🍔': {
            steps: ['👍'],
            callback: '❓'
          },

          '🔣': {
            steps: ['👎'],
            callback: '🎟'
          },
          '🕳': {
            steps: ['👎'],
            callback: '🎟'
          }
        },
        '❓': {
          name: 'print-digit-one',
          '0': {
            steps: ['👍', '🖨🕳', '👍'],
            callback: '❓'
          },

          '1': {
            steps: ['👍', '🖨🕳', '👍'],
            callback: '❓'
          },
          '🕳': {
            steps: ['🖨1', '👍', '👍', '👍'],
            callback: '📎'
          }
        },
        '📎': {
          '🕳': {
            steps: [],
            callback: '⏰'
          },
          '🔣': {
            steps: ['🖨🕳', '👍', '👍'],
            callback: '📎'
          }
        }
      }
    },

      '©': {
      start: '0',
      description: "Test Configuration for factorial",
      operations: { '0':
         { '0': { steps: [ '🖨3', '👍' ], callback: '1' },
           '1': { steps: [ '🖨3', '👍' ], callback: '1' },
           '2': { steps: [ '🖨3', '👍' ], callback: '1' },
           '3': { steps: [ '🖨3', '👍' ], callback: '1' },
           '4': { steps: [ '🖨3', '👍' ], callback: '1' } },
        '1':
         { '0': { steps: [ '🖨3', '👍' ], callback: '2' },
           '1': { steps: [ '🖨3', '👍' ], callback: '2' },
           '2': { steps: [ '🖨3', '👍' ], callback: '2' },
           '3': { steps: [ '🖨3', '👍' ], callback: '2' },
           '4': { steps: [ '🖨3', '👍' ], callback: '2' } },
        '2':
         { '0': { steps: [ '🖨1', '👍' ], callback: '3' },
           '1': { steps: [ '🖨1', '👍' ], callback: '3' },
           '2': { steps: [ '🖨1', '👍' ], callback: '3' },
           '3': { steps: [ '🖨1', '👍' ], callback: '3' },
           '4': { steps: [ '🖨1', '👍' ], callback: '3' } },
        '3':
         { '0': { steps: [ '🖨0', '👍' ], callback: '4' },
           '1': { steps: [ '🖨1', '👍' ], callback: '4' },
           '2': { steps: [ '🖨2', '👍' ], callback: '4' },
           '3': { steps: [ '🖨3', '👍' ], callback: '4' },
           '4': { steps: [ '🖨4', '👍' ], callback: '4' } },
        '4':
         { '0': { steps: [ '🖨1', '👎' ], callback: '5' },
           '1': { steps: [ '🖨1', '👎' ], callback: '5' },
           '2': { steps: [ '🖨1', '👎' ], callback: '5' },
           '3': { steps: [ '🖨1', '👎' ], callback: '5' },
           '4': { steps: [ '🖨1', '👎' ], callback: '5' } },
        '5':
         { '0': { steps: [ '🖨0', '👎' ], callback: '6' },
           '1': { steps: [ '🖨1', '👎' ], callback: '6' },
           '2': { steps: [ '🖨2', '👎' ], callback: '6' },
           '3': { steps: [ '🖨3', '👎' ], callback: '6' },
           '4': { steps: [ '🖨4', '👎' ], callback: '6' } },
        '6':
         { '1': { steps: [], callback: '7' },
           '2': { steps: [ '🖨2', '👍' ], callback: '8' } },
        '7':
         { '0': { steps: [ '🖨2', '👎' ], callback: '12' },
           '1': { steps: [ '🖨1', '👍' ], callback: '11' },
           '2': { steps: [ '🖨2', '👍' ], callback: '11' },
           '3': { steps: [ '🖨3', '👍' ], callback: '11' },
           '4': { steps: [ '🖨4', '👍' ], callback: '11' } },
        '8':
         { '0': { steps: [ '🖨4', '👎' ], callback: '9' },
           '1': { steps: [ '🖨4', '👎' ], callback: '9' },
           '2': { steps: [ '🖨4', '👎' ], callback: '9' },
           '3': { steps: [ '🖨4', '👎' ], callback: '9' },
           '4': { steps: [ '🖨4', '👎' ], callback: '9' } },
        '9':
         { '0': { steps: [ '🖨0', '👎' ], callback: '10' },
           '1': { steps: [ '🖨1', '👎' ], callback: '10' },
           '2': { steps: [ '🖨2', '👎' ], callback: '10' },
           '3': { steps: [ '🖨3', '👎' ], callback: '10' },
           '4': { steps: [ '🖨4', '👎' ], callback: '10' } },
        '10':
         { '0': { steps: [ '🖨0', '👎' ], callback: '6' },
           '1': { steps: [ '🖨1', '👎' ], callback: '6' },
           '2': { steps: [ '🖨2', '👎' ], callback: '6' },
           '3': { steps: [ '🖨3', '👎' ], callback: '6' },
           '4': { steps: [ '🖨4', '👎' ], callback: '6' } },
        '11':
         { '0': { steps: [ '🖨0', '👍' ], callback: '7' },
           '1': { steps: [ '🖨1', '👍' ], callback: '7' },
           '2': { steps: [ '🖨2', '👍' ], callback: '7' },
           '3': { steps: [ '🖨3', '👍' ], callback: '7' },
           '4': { steps: [ '🖨4', '👍' ], callback: '7' } },
        '12':
         { '0': { steps: [ '🖨0', '👎' ], callback: '14' },
           '3': { steps: [ '🖨3', '👍' ], callback: '13' },
           '4': { steps: [ '🖨0', '👍' ], callback: '7' } },
        '13':
         { '0': { steps: [ '🖨1', '👎' ], callback: '16' },
           '1': { steps: [ '🖨1', '👍' ], callback: '15' },
           '2': { steps: [ '🖨2', '👍' ], callback: '15' },
           '3': { steps: [ '🖨3', '👍' ], callback: '15' },
           '4': { steps: [ '🖨4', '👍' ], callback: '15' } },
        '14':
         { '0': { steps: [ '🖨0', '👎' ], callback: '12' },
           '1': { steps: [ '🖨1', '👎' ], callback: '12' },
           '2': { steps: [ '🖨2', '👎' ], callback: '12' },
           '3': { steps: [ '🖨3', '👎' ], callback: '12' },
           '4': { steps: [ '🖨4', '👎' ], callback: '12' } },
        '15':
         { '0': { steps: [ '🖨0', '👍' ], callback: '13' },
           '1': { steps: [ '🖨1', '👍' ], callback: '13' },
           '2': { steps: [ '🖨2', '👍' ], callback: '13' },
           '3': { steps: [ '🖨3', '👍' ], callback: '13' },
           '4': { steps: [ '🖨4', '👍' ], callback: '13' } },
        '16':
         { '0': { steps: [ '🖨0', '👎' ], callback: '6' },
           '1': { steps: [ '🖨1', '👎' ], callback: '6' },
           '2': { steps: [ '🖨2', '👎' ], callback: '6' },
           '3': { steps: [ '🖨3', '👎' ], callback: '6' },
           '4': { steps: [ '🖨4', '👎' ], callback: '6' } } }
    }
};