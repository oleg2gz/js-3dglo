let debounceTimeout

export const debounceUserInput = (handler, duration = 500) => {
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(handler, duration)
}

export const animateCounter = (el, start, end = null, duration = 3000) => {
  if (!el) return

  end = end || parseFloat(el.textContent)

  const range = end - start
  const startTime = new Date().getTime()
  const endTime = startTime + duration
  let idAnimation

  const run = () => {
    idAnimation = requestAnimationFrame(run)

    const now = new Date().getTime()
    const remaining = Math.max((endTime - now) / duration, 0)
    const current = Math.round(end - remaining * range)

    el.textContent = current

    if (current === end) {
      cancelAnimationFrame(idAnimation)
    }
  }

  run()
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
