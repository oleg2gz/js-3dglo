const animationDuration = 2000
const frameDuration = 1000 / 60
const totalFrames = Math.round(animationDuration / frameDuration)
const easeOutQuad = (t) => t * (2 - t)

export const animateCountUp = (el) => {
  let frame = 0
  const countTo = parseInt(el.innerHTML, 10)
  const counter = setInterval(() => {
    frame++
    const progress = easeOutQuad(frame / totalFrames)
    const currentCount = Math.round(countTo * progress)

    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = currentCount
    }

    if (frame === totalFrames) {
      clearInterval(counter)
    }
  }, frameDuration)
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
