const findAllSymbols = require('../src/turingNumber/find_all_symbols.js').default
const configurations = require('./setup/configurations').default

describe('findAllSymbols', () => {
  it('is finds all symbols in a simple configruation', () => {
    expect(findAllSymbols(configurations[0].operations)).toEqual({"0": 1, "1": 2, "x": 4, "🍔": 3, "🕳": 0});
  });

  it('is finds all symbols in a complex configruation', () => {
    expect(findAllSymbols(configurations[1].operations)).toEqual( 
      {"0": 1, "1": 2, "r": 5, "s": 7, "t": 11, "u": 9, "v": 8, "w": 12, "x": 4, "y": 10, "z": 6, "🍔": 3, "🕳": 0}
    );
  });
});
