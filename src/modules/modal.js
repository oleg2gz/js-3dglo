import { animate } from './helpers'

export const modal = () => {
  const modal = document.querySelector('.popup')
  const modalContent = modal.querySelector('.popup-content')
  const btns = document.querySelectorAll('.popup-btn')

  const animateModal = (mode) => {
    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction
      },
      draw(progress) {
        if (mode === 'open') {
          modal.style.display = 'block'
          modal.style.opacity = progress
          modalContent.style.opacity = progress

          if (modal.style.opacity >= 1) {
            modal.style.opacity = 1
            modalContent.style.opacity = 1
          }
        } else if (mode === 'close') {
          modal.style.opacity = 1 - progress
          modalContent.style.opacity = 1 - progress

          if (modal.style.opacity <= 0) {
            modal.style.opacity = 0
            modalContent.style.opacity = 0
            modal.style.display = 'none'
          }
        }
      },
    })
  } // end animateModal

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (window.innerWidth >= 768) {
        animateModal('open')
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
      animateModal('close')
    } else {
      modal.style.display = 'none'
    }
  })
}
