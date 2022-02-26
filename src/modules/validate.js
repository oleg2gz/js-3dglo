const validate = (selector, element, type = '') => {
  const elements = document.querySelectorAll(selector)
  let event = element === 'select' ? 'change' : 'input'

  const handleSelect = (select) => {
    console.log(select.options[select.selectedIndex].textContent)
    console.log(select.value)
  }

  const inputNumbers = (input) => {
    // только числа
    if (/\D/g.test(input.value)) {
      input.value = input.value.replace(/\D/g, '')
    }
    if (!input.value) return

    console.log(input.placeholder)
    console.log(input.value)
  }

  const inputText = (input) => {
    // кириллица в любом регистре, дефис и пробел
    if (/[^а-яА-Я\s-]/gi.test(input.value)) {
      input.value = input.value.replace(/[^а-яА-Я\s-]/gi, '')
    }
    if (!input.value) return

    console.log(input.placeholder)
    console.log(input.value)
  }

  const inputEmail = (input) => {
    // латиница в любом регистре, цифры и спецсимволы: @ - _ . ! ~ * '
    if (/[^\a-zA-Z\.\*@\-\!\~\']\s/g.test(input.value)) {
      input.value = input.value.replace(/[^\a-zA-Z\.\*@\-\!\~\']\s/g, '')
    }
    if (!input.value) return

    console.log(input.placeholder)
    console.log(input.value)
  }

  const inputTelephone = (input) => {
    // цифры, круглые скобки и дефис
    if (/[^\d\(\)-]/g.test(input.value)) {
      input.value = input.value.replace(/[^\d\(\)-]/g, '')
    }
    if (!input.value) return

    console.log(input.placeholder)
    console.log(input.value)
  }

  // первая буква каждого слова к верхнему регистру, все остальные — к нижнему
  const capitalize = (string) =>
    string.replace(/(^|\s|\-)[а-яА-Я]/g, (char) => char.toUpperCase())

  const formatInput = (input, type = '') => {
    if (!input.value) return

    input.value = input.value
      .replace(/\s{2,}/g, ' ') // повторяющиеся пробелы
      .replace(/\-{2,}/g, '-') // и дефисы
      .replace(/^[\s\-]{0,}/g, '') // пробелы и дефисы в начале
      .replace(/[\s\-]{0,}$/g, '') // и конце значения

    if (type === 'text') {
      input.value = capitalize(input.value.toLowerCase())
    }

    console.log(input.placeholder)
    console.log(input.value)
  }

  elements.forEach((elem) => {
    elem.addEventListener(event, () => {
      if (element === 'select') {
        handleSelect(elem)
      } else if (element === 'input') {
        if (type === 'numbers') {
          inputNumbers(elem)
        } else if (type === 'text') {
          inputText(elem)
        } else if (type === 'email') {
          inputEmail(elem)
        } else if (type === 'tel') {
          inputTelephone(elem)
        }
      }
    })
    if (element !== 'select' && type !== 'numbers') {
      elem.addEventListener('blur', () => formatInput(elem, type))
    }
  })
}

export default validate
