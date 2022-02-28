const modal = () => {
  const modal = document.querySelector('.popup')
  const modalContent = modal.querySelector('.popup-content')
  const btns = document.querySelectorAll('.popup-btn')
  let idAnimationOpen
  let idAnimationClose
  let counter = 0

  const openAnimation = () => {
    counter += 0.05
    idAnimationOpen = requestAnimationFrame(openAnimation)
    if (counter < 1) {
      modal.style.opacity = counter
      modalContent.style.opacity = counter
    } else {
      modal.style.opacity = 1
      modalContent.style.opacity = 1
      cancelAnimationFrame(idAnimationOpen)
    }
  }

  const closeAnimation = () => {
    counter -= 0.05
    idAnimationClose = requestAnimationFrame(closeAnimation)
    if (counter > 0) {
      modal.style.opacity = counter
      modalContent.style.opacity = counter
    } else {
      modal.style.display = 'none'
      modalContent.style.opacity = 0
      cancelAnimationFrame(idAnimationClose)
    }
  }

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (window.innerWidth >= 768) {
        modal.style.display = 'block'
        openAnimation()
      } else {
        modal.style.display = 'block'
      }
    })
  })

  modal.addEventListener('click', (e) => {
    if (
      e.target.closest('.popup-content') &&
      !e.target.classList.contains('popup-close')
    )
      return

    if (window.innerWidth >= 768) {
      closeAnimation()
    } else {
      modal.style.display = 'none'
    }
  })
}

export default modal
