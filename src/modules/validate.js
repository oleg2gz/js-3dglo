export const validate = (selector, type = '') => {
  const elements = document.querySelectorAll(selector)

  const patternNumbers = /\D/g
  const patternCyrillic = /[^а-яА-Я\s]/gi
  const patternEmail = /[^\w@\-.!~*']/gi
  const patternPhone = /[^\d\(\)\-\+]/g
  const patternCapitalize = /(^|\s|\-)[а-яА-Я]/g
  const patternRepeatingSpaces = /\s{2,}/g
  const patternRepeatingHyphens = /\-{2,}/g
  const patternStart = /^[\s\-]{0,}/g
  const patternEnd = /[\s\-]{0,}$/g

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
  }

  elements.forEach((input) => {
    input.addEventListener('input', (e) => {
      if (type === 'numbers') {
        e.target.value = e.target.value.replace(patternNumbers, '')
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
