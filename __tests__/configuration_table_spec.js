const configurationsTable = require('../src/turingNumber/configurationsTable.js').default
const configurations = require('./setup/configurations').default

describe('findAllSymbols', () => {

  var setup1 = configurationsTable({"0": 1, "1": 2, "x": 4, "🍔": 3, "🕳": 0})
  it('setups a configuration hash for low amount of symbols', () => {
    setup1.addConfiguration('🚡', ['5'], ['🖨🍔', '👍', '👍'], '🎟')
    expect(setup1.configurations).toEqual(
      {"1": {"5": {"callback": "2", "steps": ["🖨3", "👍"]}}, 
       "2": {
          "0": {"callback": "3", "steps": ["🖨0", "👍"]}, 
          "1": {"callback": "3", "steps": ["🖨1", "👍"]}, 
          "2": {"callback": "3", "steps": ["🖨2", "👍"]}, 
          "3": {"callback": "3", "steps": ["🖨3", "👍"]}, 
          "4": {"callback": "3", "steps": ["🖨4", "👍"]}}})
  });


  var setup2 = configurationsTable({"0": 1, "1": 2, "x": 4, "🍔": 3, "🕳": 0})

  it('setups a configuration hash for low amount of symbols', () => {
    setup2.addConfiguration('🚡', ['5'], ['🖨🍔', '👍', '👍', '🖨🍔', '👍'], '🎟')
    expect(setup2.configurations).toEqual(
       {"1": {"5": {"callback": "2", "steps": ["🖨3", "👍"]}}, 
        "2": {
          "0": {"callback": "3", "steps": ["🖨0", "👍"]}, 
          "1": {"callback": "3", "steps": ["🖨1", "👍"]}, 
          "2": {"callback": "3", "steps": ["🖨2", "👍"]}, 
          "3": {"callback": "3", "steps": ["🖨3", "👍"]}, 
          "4": {"callback": "3", "steps": ["🖨4", "👍"]}}, 
        "3": {
          "0": {"callback": "4", "steps": ["🖨3", "👍"]}, 
          "1": {"callback": "4", "steps": ["🖨3", "👍"]}, 
          "2": {"callback": "4", "steps": ["🖨3", "👍"]}, 
          "3": {"callback": "4", "steps": ["🖨3", "👍"]}, 
          "4": {"callback": "4", "steps": ["🖨3", "👍"]}}})
  });
});
