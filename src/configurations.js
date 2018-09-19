export default {
 	
    '🌂': {
      start: '🌂',
   		description: "Print .1111111_ forever.",
   		operations: {
   			'🌂': {
            steps: ['👍', '👍', '🙋'],
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
            steps: ['🕳', '👍'],
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
            steps: ['🕳', '👎', '👎'],
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
            steps: ['👍', '🕳', '👍'],
            callback: '🏧'
          },
    
          '1': {
            steps: ['👍', '🕳', '👍'],
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
            steps: ['👍', '🕳', '👍'],
            callback: '❓'
          },
    
          '1': {
            steps: ['👍', '🕳', '👍'],
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
            steps: ['🕳', '👍', '👍'],
            callback: '📎'
          }
        }
      }
    }
};