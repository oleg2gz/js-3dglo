let debounceTimeout

export const debounceUserInput = (handler, duration = 500) => {
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(handler, duration)
}

export const adjustIndex = (arr, index) => {
  if (index > arr.length - 1) {
    index = 0
  }
  if (index < 0) {
    index = arr.length - 1
  }
  return index
}

export const animate = ({ timing, draw, duration }) => {
  let start = performance.now()

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration
    if (timeFraction > 1) timeFraction = 1

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction)

    draw(progress) // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate)
    }
  })
}
