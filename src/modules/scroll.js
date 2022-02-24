const scroll = () => {
  const menuItems = document.querySelectorAll('menu>ul>li>a')
  const btnNext = document.querySelector('main>a')

  const handleScroll = (e) => {
    e.preventDefault()

    const target = e.target.closest('a')
    const targetElement = document.querySelector(target.getAttribute('href'))

    targetElement.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  }

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', handleScroll)
  })

  btnNext.addEventListener('click', handleScroll)
}

export default scroll
