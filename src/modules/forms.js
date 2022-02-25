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

  const inputText = (input) => {
    // кириллица в любом регистре, дефис и пробел
    if (/[^а-яА-Я\s-]/gi.test(input.value)) {
      input.value = input.value.replace(/[^а-яА-Я\s-]/gi, '')
    }
    return input.value !== '' ? input : null
  }

  const inputEmail = (input) => {
    // латиница в любом регистре, цифры и спецсимволы: @ - _ . ! ~ * '
    if (/[^\w\.\*@\-\!\~\']/g.test(input.value)) {
      input.value = input.value.replace(/[^\w\.\*@\-\!\~\']/g, '')
    }
    return input.value !== '' ? input : null
  }

  const inputTelephone = (input) => {
    // цифры, круглые скобки и дефис
    if (/[^\d\(\)-]/g.test(input.value)) {
      input.value = input.value.replace(/[^\d\(\)-]/g, '')
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
        } else if (type === 'text') {
          debounceInput(elem, inputText)
        } else if (type === 'email') {
          debounceInput(elem, inputEmail)
        } else if (type === 'tel') {
          debounceInput(elem, inputTelephone)
        }
      }
    })
  })
}

export default forms
