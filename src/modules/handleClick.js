import updateUi from './updateUi' 

export default (event, btnsArr, cssActiveClass) => {
  const targetNumber = event.target.dataset.value

  // Update UI
  btnsArr.forEach(button => updateUi(button, targetNumber, cssActiveClass))
}
