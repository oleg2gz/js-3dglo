const menu = () => {
  const btnMenu = document.querySelector('.menu')
  const menu = document.querySelector('menu')
  const btnClose = menu.querySelector('.close-btn')
  const menuItems = menu.querySelectorAll('ul>li>a')

  const handleMenu = (e) => {
    e.preventDefault()
    menu.classList.toggle('active-menu')
  }

  btnMenu.addEventListener('click', handleMenu)
  btnClose.addEventListener('click', handleMenu)
  menuItems.forEach((menuItem) =>
    menuItem.addEventListener('click', handleMenu)
  )
}

export default menu
