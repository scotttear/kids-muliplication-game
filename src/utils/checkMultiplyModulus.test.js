import checkMultiplyModulos from './checkMultiplyModulus'

describe('checkMultiplyModulos', () => {
    test.each([
      [12, 3, true],
      [40, 8, true],
      [100, 5, true]
    ])('Returns true when %i divided by i% contains no remaining value', (a, b, expected) => {
      expect(checkMultiplyModulos(a, b)).toBe(expected)
    })

    test.each([
      [27, 6, false],
      [71, 4, false],
      [125, 11, false]
    ])('Returns false if %i divided by i% contains a remaining value', (a, b, expected) => {
      expect(checkMultiplyModulos(a, b)).toBe(expected)
    })
})
