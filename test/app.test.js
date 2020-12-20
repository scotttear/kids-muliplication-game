import documentBody from './__mocks__/fileMock'
import app from '../src/app'

// Mount app to test against
document.body.innerHTML = documentBody
app(document.getElementById('app'))

// Helper to filter the buttons in test
const getFilteredButtons = (buttonElements, expectedValues, includes = true)  => 
  includes ? 
    buttonElements.filter(button => expectedValues.includes(button.dataset.value)) :
    buttonElements.filter(button => expectedValues.indexOf(button.dataset.value) === -1)

// Tests
describe('app', () => {
  const gridElements = [...document.querySelectorAll('.app__column')]
  const buttonElements = [
    ...document.querySelectorAll('[data-do="check-math"]'),
  ]
  const selectedCssClass = 'app__column--highlight'

  test('Renders correct amount of grid elements', () => {
    expect(gridElements.length).toEqual(144)
  })

  test('Clicking button 1 sets highlighted CSS class on all columns', () => {
    buttonElements[0].click()

    gridElements.forEach(element => {
      expect(element.classList.contains(selectedCssClass)).toBe(true)
    })
  })

  test('Clicking button 10 sets highlighted CSS class on columns witn multiples on 10', () => {
    buttonElements[9].click()

    const expectedHighlightedColumns10x = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110', '120', '130', '140']

    getFilteredButtons(buttonElements, expectedHighlightedColumns10x)
      .forEach(button => {
        expect(button.parentNode.classList.contains(selectedCssClass)).toBe(true)
      })

    getFilteredButtons(buttonElements, expectedHighlightedColumns10x, false)
      .forEach(button => {
        expect(button.parentNode.classList.contains(selectedCssClass)).toBe(false)
      })
  })

  test('Clicking button 57 sets highlighted CSS class on columns witn multiples on 57', () => {
    buttonElements[56].click()

    const expectedHighlightedColumns57x = ['57', '114']

    getFilteredButtons(buttonElements, expectedHighlightedColumns57x)
      .forEach(button => {
        expect(button.parentNode.classList.contains(selectedCssClass)).toBe(true)
      })

    getFilteredButtons(buttonElements, expectedHighlightedColumns57x, false)
      .forEach(button => {
        expect(button.parentNode.classList.contains(selectedCssClass)).toBe(false)
      })
  })

  test('Clicking button 33 returns correct length of highlighted and non highlighted columns', () => {
    buttonElements[32].click()

    const expectedHighlightedColumns33x = ['33', '66', '99', '132']

    expect(getFilteredButtons(buttonElements, expectedHighlightedColumns33x).length).toBe(4)
    expect(getFilteredButtons(buttonElements, expectedHighlightedColumns33x, false).length).toBe(140)
  })
})
