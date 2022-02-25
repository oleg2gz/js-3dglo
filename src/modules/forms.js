const forms = (selector, element, type = '') => {
  const elements = document.querySelectorAll(selector)
  let event = element === 'select' ? 'change' : 'input'
  let inputTimeout

  const handleSelect = (select) => {
    console.log(select.options[select.selectedIndex].textContent)
    console.log(select.value)
  }

  const debounceInput = (input, handler) => {
    clearTimeout(inputTimeout)

    input = handler(input)

    if (!input) return

    inputTimeout = setTimeout(() => {
      // TMP действия после debounce
      console.log(input.placeholder)
      console.log(input.value)
    }, 300)
  }

  const inputNumbers = (input) => {
    if (/[^\d]/g.test(input.value)) {
      input.value = input.value.replace(/[^\d]/g, '')
    }
    return input.value !== '' ? input : null
  }

  elements.forEach((elem) => {
    elem.addEventListener(event, () => {
      if (element === 'select') {
        handleSelect(elem)
      } else if (element === 'input') {
        if (type === 'numbers') {
          debounceInput(elem, inputNumbers)
        }
      }
    })
  })
}

export default forms
