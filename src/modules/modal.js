const modal = () => {
  const modal = document.querySelector('.popup')
  const btnClose = modal.querySelector('.popup-close')
  const btns = document.querySelectorAll('.popup-btn')

  // Написать анимацию появления модального окна
  // Если пользователь заходит на сайт с устройства с шириной экрана меньше 768px (мобильного устройства) - анимация отключается

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block'
    })
  })
  btnClose.addEventListener('click', () => {
    modal.style.display = 'none'
  })
}

export default modal
