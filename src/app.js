import renderGrid from './modules/renderGrid'
import handleClick from './modules/handleClick'

export default (element, columns = 144) => {
  // Create the grid
  renderGrid(element, columns)

  // Create an array of buttons
  const numberBtns = [...document.querySelectorAll('[data-do="check-math"]')]
  const highlightCssClass = 'app__column--highlight'

  // Add event listeners
  numberBtns.forEach(element => {
    element.addEventListener('click', event =>
      handleClick(event, numberBtns, highlightCssClass)
    )
  })
}
