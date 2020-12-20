import checkMultiplyModulos from '../utils/checkMultiplyModulus'

export default (button, targetNumber, cssActiveClass) => {
  const buttonNumber = button.dataset.value
  
  button.parentNode.classList.remove(cssActiveClass)

  if (checkMultiplyModulos(buttonNumber, targetNumber)) {
    button.parentNode.classList.add(cssActiveClass)
  }
} 
