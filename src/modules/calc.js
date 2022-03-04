import { animateCounter, debounceUserInput } from './utils'

const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block')
  const calcType = document.querySelector('select.calc-type')
  const calcSquare = document.querySelector('input.calc-square')
  const calcCount = document.querySelector('input.calc-count')
  const calcDay = document.querySelector('input.calc-day')
  const total = document.getElementById('total')

  const countCalc = () => {
    if (!calcType.value) {
      calcSquare.value = ''
      calcCount.value = ''
      calcDay.value = ''
    }

    const calcTypeValue = +calcType.options[calcType.selectedIndex].value
    const calcSquareValue = +calcSquare.value
    const totalPrevValue = parseFloat(total.textContent)

    let totalValue = totalPrevValue
    let calcCountValue = 1
    let calcDayValue = 1

    if (calcCount.value > 1) {
      calcCountValue += calcCount.value / 10
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2
    } else if (calcDay.value && calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5
    }

    if (calcTypeValue && calcSquareValue) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue
    } else {
      totalValue = 0
    }

    total.textContent = totalValue
    calcTypeValue && calcSquareValue && animateCounter(total, totalPrevValue)
  }

  calcBlock.addEventListener('input', (e) => {
    if (e.target.matches('select') || e.target.matches('input')) {
      debounceUserInput(countCalc)
    }
  })
}

export default calc
