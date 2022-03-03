import { adjustIndex } from './utils'

const slider = (options = {}) => {
  const {
    slider,
    slide,
    dotContainer,
    dot,
    arrowLeft,
    arrowRight,
    dotActive = 'not-provided',
    slideActive = 'not-provided',
    sliderBtn = 'portfolio-btn', // TMP-1 hardcoded !!!
  } = options

  const sliderBlock = document.querySelector(`.${slider}`)
  const slides = document.querySelectorAll(`.${slide}`)
  const dotsBlock = document.querySelector(`.${dotContainer}`)

  const timeInterval = 2000
  let currentSlide = 0
  let interval
  let dots

  const createDots = (selector, active) => {
    slides.forEach((_, i) => {
      const newDot = document.createElement('li')

      if (i === 0) {
        newDot.classList.add(active)
      }
      newDot.classList.add(selector)

      dotsBlock.append(newDot)
    })
    dots = document.querySelectorAll(`.${selector}`)
  }

  const prevSlide = (elems, index, active) => {
    elems[index].classList.remove(active)
  }

  const nextSlide = (elems, index, active) => {
    elems[index].classList.add(active)
  }

  const autoSlide = () => {
    prevSlide(slides, currentSlide, slideActive)
    prevSlide(dots, currentSlide, dotActive)
    currentSlide++

    currentSlide = adjustIndex(slides, currentSlide)

    nextSlide(slides, currentSlide, slideActive)
    nextSlide(dots, currentSlide, dotActive)
  }

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer)
  }

  const stopSlide = () => {
    clearInterval(interval)
  }

  // TMP-1 Prevent crash and link behavior if props are not privided
  if (!sliderBlock || !slides[0] || !dotContainer) {
    document.querySelectorAll(`.${sliderBtn}`).forEach((btn) => {
      btn.addEventListener('click', (e) => e.preventDefault())
    })
    return
  }

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault()

    if (!e.target.matches(`.${dot}, .${sliderBtn}`)) return

    prevSlide(slides, currentSlide, slideActive)
    prevSlide(dots, currentSlide, dotActive)

    if (e.target.closest(arrowLeft)) {
      currentSlide--
    } else if (e.target.matches(arrowRight)) {
      currentSlide++
    } else if (e.target.classList.contains(dot)) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index
        }
      })
    }
    currentSlide = adjustIndex(slides, currentSlide)

    nextSlide(slides, currentSlide, slideActive)
    nextSlide(dots, currentSlide, dotActive)
  })

  sliderBlock.addEventListener(
    'mouseenter',
    (e) => {
      if (!e.target.matches(`.${dot}, .${sliderBtn}`)) return
      stopSlide()
    },
    true
  )

  sliderBlock.addEventListener(
    'mouseleave',
    (e) => {
      if (!e.target.matches(`.${dot}, .${sliderBtn}`)) return
      startSlide(timeInterval)
    },
    true
  )

  createDots(dot, dotActive)

  startSlide(timeInterval)
}

export default slider
