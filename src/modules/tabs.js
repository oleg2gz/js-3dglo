const tabs = () => {
  const tabPanel = document.querySelector('.service-header')
  const tabs = document.querySelectorAll('.service-header-tab')
  const tabContent = document.querySelectorAll('.service-tab')

  tabPanel.addEventListener('click', (e) => {
    if (!e.target.closest('.service-header-tab')) return

    const tabBtn = e.target.closest('.service-header-tab')

    tabs.forEach((tab, index) => {
      if (tab === tabBtn) {
        tabBtn.classList.add('active')
        tabContent[index].classList.remove('d-none')
      } else {
        tab.classList.remove('active')
        tabContent[index].classList.add('d-none')
      }
    })
  })
}

export default tabs
