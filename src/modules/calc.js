import { animate, debounceUserInput } from './helpers'

export const calc = (price = 100) => {
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

    let totalValue = 0
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
      animateCalc(totalValue)
    } else {
      totalValue = 0
    }

    total.textContent = totalValue
  } // end countCalc

  const animateCalc = (totalValue) => {
    let totalOnHTML = +total.textContent
    let delta = Math.abs(totalValue - totalOnHTML)

    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction
      },
      draw(progress) {
        if (totalValue > totalOnHTML) {
          total.textContent = totalOnHTML + Math.round(delta * progress)
        } else if (totalValue < totalOnHTML) {
          total.textContent = totalOnHTML - Math.round(delta * progress)
        }
      },
    })
  } // end animateCalc

  calcBlock.addEventListener('input', (e) => {
    if (e.target.matches('select') || e.target.matches('input')) {
      debounceUserInput(countCalc)
    }
  })
}
