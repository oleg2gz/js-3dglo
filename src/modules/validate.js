export const validate = (selector, type = '') => {
  const elements = document.querySelectorAll(selector)

  const patternNumbers = /\D/g
  const patternCyrillicName = /[^а-яА-Я\s]/g
  const patternCyrillicMessage = /[^а-яА-Я0-9\s\-.,:;!?]/g
  const patternEmail = /[^\w@\-.!~*']/g
  const patternPhone = /[^\d\-+()]/g
  const patternCapitalize = /(^|\s|\-)[а-яА-Я]/g
  const patternRepeatingSpaces = /\s{2,}/g
  const patternRepeatingHyphens = /\-{2,}/g
  const patternStart = /^[\s-]*/g
  const patternEnd = /[\s-]*$/g

  const setValid = (input) => {
    input.dataset.valid = true
  }

  const capitalize = (string) =>
    string.replace(patternCapitalize, (char) => char.toUpperCase())

  const formatInput = (e) => {
    let value = e.target.value

    if (!value) return

    value = value
      .replace(patternRepeatingSpaces, ' ')
      .replace(patternRepeatingHyphens, '-')
      .replace(patternStart, '')
      .replace(patternEnd, '')

    if (e.target.type === 'name') {
      value = capitalize(value.toLowerCase())
    }
    if (value !== '') setValid(e.target)
  }

  elements.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.style.border = ''
      let value = e.target.value

      if (type === 'numbers') {
        value = value.replace(patternNumbers, '')
      } else if (type === 'name') {
        value = value.replace(patternCyrillicName, '')
      } else if (type === 'message') {
        value = value.replace(patternCyrillicMessage, '')
      } else if (type === 'email') {
        value = value.replace(patternEmail, '')
      } else if (type === 'tel') {
        value = value.replace(patternPhone, '')
      }
    })
    if (type !== 'numbers') {
      input.addEventListener('blur', formatInput)
    }
  })
}
