const validate = (selector, element, type = '') => {
  const elements = document.querySelectorAll(selector)

  const patternNumbers = /\D/g
  const patternCyrillic = /[^а-яА-Я\s-]/gi
  const patternEmail = /[^\w@\-.!~*']/gi
  const patternPhone = /[^\d\(\)-]/g
  const patternCapitalize = /(^|\s|\-)[а-яА-Я]/g
  const patternRepeatingSpaces = /\s{2,}/g
  const patternRepeatingHyphens = /\-{2,}/g
  const patternStart = /^[\s\-]{0,}/g
  const patternEnd = /[\s\-]{0,}$/g

  const handleSelect = (e) => {
    const select = e.target
    // TMP no functionality at the moment
    console.log(select.options[select.selectedIndex].textContent)
    console.log(select.value)
  }

  const capitalize = (string) =>
    string.replace(patternCapitalize, (char) => char.toUpperCase())

  const formatInput = (e) => {
    if (!e.target.value) return

    e.target.value = e.target.value
      .replace(patternRepeatingSpaces, ' ')
      .replace(patternRepeatingHyphens, '-')
      .replace(patternStart, '')
      .replace(patternEnd, '')

    if (e.target.type === 'text') {
      e.target.value = capitalize(e.target.value.toLowerCase())
    }
    // TMP no functionality at the moment
    console.log(e.target.placeholder)
    console.log(e.target.value)
  }

  if (element === 'select') {
    elements[0].addEventListener('change', handleSelect)
  }

  if (element === 'input') {
    elements.forEach((input) => {
      input.addEventListener('input', (e) => {
        if (type === 'numbers') {
          e.target.value = e.target.value.replace(patternNumbers, '')
          // TMP no functionality at the moment
          console.log(e.target.placeholder)
          console.log(e.target.value)
        } else if (type === 'text') {
          e.target.value = e.target.value.replace(patternCyrillic, '')
        } else if (type === 'email') {
          e.target.value = e.target.value.replace(patternEmail, '')
        } else if (type === 'tel') {
          e.target.value = e.target.value.replace(patternPhone, '')
        }
      })
      if (type !== 'numbers') {
        input.addEventListener('blur', formatInput)
      }
    })
  }
}

export default validate
