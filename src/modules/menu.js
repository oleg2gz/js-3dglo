export const menu = () => {
  const menu = document.querySelector('menu')

  const handleMenu = (e) => {
    if (
      e.target.closest('.menu, .close-btn, ul>li>a') ||
      (menu.classList.contains('active-menu') &&
        !e.target.closest('.active-menu'))
    ) {
      e.preventDefault()

      menu.classList.toggle('active-menu')
    }
  }

  document.addEventListener('click', handleMenu)
}
