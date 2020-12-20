export default (appElement, columns) => {
  let columnsMarkup = ''

  for (let i = 1; i <= columns; i++) {
    columnsMarkup += `
      <div class="app__column">
        <button class="app__button" data-do="check-math" data-value="${i}">
          ${i}
        </button>
      </div>
    `
  }

  appElement.classList = 'app'
  appElement.innerHTML = columnsMarkup

  return appElement
}
