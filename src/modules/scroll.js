const scroll = () => {
  const handleScroll = (e) => {
    if (e.target.closest('menu>ul>li>a, main>a')) {
      e.preventDefault()

      const target = e.target.closest('a')
      const targetElement = document.querySelector(target.getAttribute('href'))

      targetElement.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    }
  }

  document.addEventListener('click', handleScroll)
}

export default scroll
