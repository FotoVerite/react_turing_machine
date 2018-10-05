const turingNumber = require('../src/turingNumber/turing_number.js').default
const configurations = require('./setup/configurations').default
const util = require('util')

describe('createsAnExtendedMConfigurationTable', () => {

  it('Test expected output for simple configuration', () => {
    var number = turingNumber(configurations[0])
    expect(number.configurations).toEqual(simpleConfiguration)
  })

  it('Test expected turning number', () => {
    var number = turingNumber(configurations[0])
    expect(number.calculatedNumber).toEqual("DADDCCCRDCC;DADCDCCCRDCC;DADCCDCCCRDCC;DADCCCDCCCRDCC;DADCCCCDCCCRDCC;DAADDCCCRDCCC;DAADCDCCCRDCCC;DAADCCDCCCRDCCC;DAADCCCDCCCRDCCC;DAADCCCCDCCCRDCCC;DAAADDCRDCCCC;DAAADCDCRDCCCC;DAAADCCDCRDCCCC;DAAADCCCDCRDCCCC;DAAADCCCCDCRDCCCC;DAAAADDRDCCCCC;DAAAADCDCRDCCCCC;DAAAADCCDCCRDCCCCC;DAAAADCCCDCCCRDCCCCC;DAAAADCCCCDCCCCRDCCCCC;DAAAAADDCLDCCCCCC;DAAAAADCDCLDCCCCCC;DAAAAADCCDCLDCCCCCC;DAAAAADCCCDCLDCCCCCC;DAAAAADCCCCDCLDCCCCCC;DAAAAAADDLDCCCCCCC;DAAAAAADCDCLDCCCCCCC;DAAAAAADCCDCCLDCCCCCCC;DAAAAAADCCCDCCCLDCCCCCCC;DAAAAAADCCCCDCCCCLDCCCCCCC;DAAAAAAADCNDCCCCCCCC;DAAAAAAADCCDCCRDCCCCCCCCC;DAAAAAAAADDCCLDCCCCCCCCCCCCC;DAAAAAAAADCDCRDCCCCCCCCCCCC;DAAAAAAAADCCDCCRDCCCCCCCCCCCC;DAAAAAAAADCCCDCCCRDCCCCCCCCCCCC;DAAAAAAAADCCCCDCCCCRDCCCCCCCCCCCC;DAAAAAAAAADDCCCCLDCCCCCCCCCC;DAAAAAAAAADCDCCCCLDCCCCCCCCCC;DAAAAAAAAADCCDCCCCLDCCCCCCCCCC;DAAAAAAAAADCCCDCCCCLDCCCCCCCCCC;DAAAAAAAAADCCCCDCCCCLDCCCCCCCCCC;DAAAAAAAAAADDLDCCCCCCCCCCC;DAAAAAAAAAADCDCLDCCCCCCCCCCC;DAAAAAAAAAADCCDCCLDCCCCCCCCCCC;DAAAAAAAAAADCCCDCCCLDCCCCCCCCCCC;DAAAAAAAAAADCCCCDCCCCLDCCCCCCCCCCC;DAAAAAAAAAAADDLDCCCCCCC;DAAAAAAAAAAADCDCLDCCCCCCC;DAAAAAAAAAAADCCDCCLDCCCCCCC;DAAAAAAAAAAADCCCDCCCLDCCCCCCC;DAAAAAAAAAAADCCCCDCCCCLDCCCCCCC;DAAAAAAAAAAAADDRDCCCCCCCC;DAAAAAAAAAAAADCDCRDCCCCCCCC;DAAAAAAAAAAAADCCDCCRDCCCCCCCC;DAAAAAAAAAAAADCCCDCCCRDCCCCCCCC;DAAAAAAAAAAAADCCCCDCCCCRDCCCCCCCC;DAAAAAAAAAAAAADDLDCCCCCCCCCCCCCCC;DAAAAAAAAAAAAADCCCDCCCRDCCCCCCCCCCCCCC;DAAAAAAAAAAAAADCCCCDRDCCCCCCCC;DAAAAAAAAAAAAAADDCLDCCCCCCCCCCCCCCCCC;DAAAAAAAAAAAAAADCDCRDCCCCCCCCCCCCCCCC;DAAAAAAAAAAAAAADCCDCCRDCCCCCCCCCCCCCCCC;DAAAAAAAAAAAAAADCCCDCCCRDCCCCCCCCCCCCCCCC;DAAAAAAAAAAAAAADCCCCDCCCCRDCCCCCCCCCCCCCCCC;DAAAAAAAAAAAAAAADDLDCCCCCCCCCCCCC;DAAAAAAAAAAAAAAADCDCLDCCCCCCCCCCCCC;DAAAAAAAAAAAAAAADCCDCCLDCCCCCCCCCCCCC;DAAAAAAAAAAAAAAADCCCDCCCLDCCCCCCCCCCCCC;DAAAAAAAAAAAAAAADCCCCDCCCCLDCCCCCCCCCCCCC;DAAAAAAAAAAAAAAAADDRDCCCCCCCCCCCCCC;DAAAAAAAAAAAAAAAADCDCRDCCCCCCCCCCCCCC;DAAAAAAAAAAAAAAAADCCDCCRDCCCCCCCCCCCCCC;DAAAAAAAAAAAAAAAADCCCDCCCRDCCCCCCCCCCCCCC;DAAAAAAAAAAAAAAAADCCCCDCCCCRDCCCCCCCCCCCCCC;DAAAAAAAAAAAAAAAAADDLDCCCCCCC;DAAAAAAAAAAAAAAAAADCDCLDCCCCCCC;DAAAAAAAAAAAAAAAAADCCDCCLDCCCCCCC;DAAAAAAAAAAAAAAAAADCCCDCCCLDCCCCCCC;DAAAAAAAAAAAAAAAAADCCCCDCCCCLDCCCCCCC;")
  })
})


var simpleConfiguration =  { '1':
         { '0': { steps: [ '🖨3', '👍' ], callback: '2' },
           '1': { steps: [ '🖨3', '👍' ], callback: '2' },
           '2': { steps: [ '🖨3', '👍' ], callback: '2' },
           '3': { steps: [ '🖨3', '👍' ], callback: '2' },
           '4': { steps: [ '🖨3', '👍' ], callback: '2' } },
        '2':
         { '0': { steps: [ '🖨3', '👍' ], callback: '3' },
           '1': { steps: [ '🖨3', '👍' ], callback: '3' },
           '2': { steps: [ '🖨3', '👍' ], callback: '3' },
           '3': { steps: [ '🖨3', '👍' ], callback: '3' },
           '4': { steps: [ '🖨3', '👍' ], callback: '3' } },
        '3':
         { '0': { steps: [ '🖨1', '👍' ], callback: '4' },
           '1': { steps: [ '🖨1', '👍' ], callback: '4' },
           '2': { steps: [ '🖨1', '👍' ], callback: '4' },
           '3': { steps: [ '🖨1', '👍' ], callback: '4' },
           '4': { steps: [ '🖨1', '👍' ], callback: '4' } },
        '4':
         { '0': { steps: [ '🖨0', '👍' ], callback: '5' },
           '1': { steps: [ '🖨1', '👍' ], callback: '5' },
           '2': { steps: [ '🖨2', '👍' ], callback: '5' },
           '3': { steps: [ '🖨3', '👍' ], callback: '5' },
           '4': { steps: [ '🖨4', '👍' ], callback: '5' } },
        '5':
         { '0': { steps: [ '🖨1', '👎' ], callback: '6' },
           '1': { steps: [ '🖨1', '👎' ], callback: '6' },
           '2': { steps: [ '🖨1', '👎' ], callback: '6' },
           '3': { steps: [ '🖨1', '👎' ], callback: '6' },
           '4': { steps: [ '🖨1', '👎' ], callback: '6' } },
        '6':
         { '0': { steps: [ '🖨0', '👎' ], callback: '7' },
           '1': { steps: [ '🖨1', '👎' ], callback: '7' },
           '2': { steps: [ '🖨2', '👎' ], callback: '7' },
           '3': { steps: [ '🖨3', '👎' ], callback: '7' },
           '4': { steps: [ '🖨4', '👎' ], callback: '7' } },
        '7':
         { '1': { steps: [], callback: '8' },
           '2': { steps: [ '🖨2', '👍' ], callback: '9' } },
        '8':
         { '0': { steps: [ '🖨2', '👎' ], callback: '13' },
           '1': { steps: [ '🖨1', '👍' ], callback: '12' },
           '2': { steps: [ '🖨2', '👍' ], callback: '12' },
           '3': { steps: [ '🖨3', '👍' ], callback: '12' },
           '4': { steps: [ '🖨4', '👍' ], callback: '12' } },
        '9':
         { '0': { steps: [ '🖨4', '👎' ], callback: '10' },
           '1': { steps: [ '🖨4', '👎' ], callback: '10' },
           '2': { steps: [ '🖨4', '👎' ], callback: '10' },
           '3': { steps: [ '🖨4', '👎' ], callback: '10' },
           '4': { steps: [ '🖨4', '👎' ], callback: '10' } },
        '10':
         { '0': { steps: [ '🖨0', '👎' ], callback: '11' },
           '1': { steps: [ '🖨1', '👎' ], callback: '11' },
           '2': { steps: [ '🖨2', '👎' ], callback: '11' },
           '3': { steps: [ '🖨3', '👎' ], callback: '11' },
           '4': { steps: [ '🖨4', '👎' ], callback: '11' } },
        '11':
         { '0': { steps: [ '🖨0', '👎' ], callback: '7' },
           '1': { steps: [ '🖨1', '👎' ], callback: '7' },
           '2': { steps: [ '🖨2', '👎' ], callback: '7' },
           '3': { steps: [ '🖨3', '👎' ], callback: '7' },
           '4': { steps: [ '🖨4', '👎' ], callback: '7' } },
        '12':
         { '0': { steps: [ '🖨0', '👍' ], callback: '8' },
           '1': { steps: [ '🖨1', '👍' ], callback: '8' },
           '2': { steps: [ '🖨2', '👍' ], callback: '8' },
           '3': { steps: [ '🖨3', '👍' ], callback: '8' },
           '4': { steps: [ '🖨4', '👍' ], callback: '8' } },
        '13':
         { '0': { steps: [ '🖨0', '👎' ], callback: '15' },
           '3': { steps: [ '🖨3', '👍' ], callback: '14' },
           '4': { steps: [ '🖨0', '👍' ], callback: '8' } },
        '14':
         { '0': { steps: [ '🖨1', '👎' ], callback: '17' },
           '1': { steps: [ '🖨1', '👍' ], callback: '16' },
           '2': { steps: [ '🖨2', '👍' ], callback: '16' },
           '3': { steps: [ '🖨3', '👍' ], callback: '16' },
           '4': { steps: [ '🖨4', '👍' ], callback: '16' } },
        '15':
         { '0': { steps: [ '🖨0', '👎' ], callback: '13' },
           '1': { steps: [ '🖨1', '👎' ], callback: '13' },
           '2': { steps: [ '🖨2', '👎' ], callback: '13' },
           '3': { steps: [ '🖨3', '👎' ], callback: '13' },
           '4': { steps: [ '🖨4', '👎' ], callback: '13' } },
        '16':
         { '0': { steps: [ '🖨0', '👍' ], callback: '14' },
           '1': { steps: [ '🖨1', '👍' ], callback: '14' },
           '2': { steps: [ '🖨2', '👍' ], callback: '14' },
           '3': { steps: [ '🖨3', '👍' ], callback: '14' },
           '4': { steps: [ '🖨4', '👍' ], callback: '14' } },
        '17':
         { '0': { steps: [ '🖨0', '👎' ], callback: '7' },
           '1': { steps: [ '🖨1', '👎' ], callback: '7' },
           '2': { steps: [ '🖨2', '👎' ], callback: '7' },
           '3': { steps: [ '🖨3', '👎' ], callback: '7' },
           '4': { steps: [ '🖨4', '👎' ], callback: '7' } } }
