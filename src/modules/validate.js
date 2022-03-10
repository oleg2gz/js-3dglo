export const validate = (selector) => {
  const elements = document.querySelectorAll(selector)

  const patternNumbers = /\D/g
  const patternCyrillicName = /[^а-яА-Я\s]/g
  const patternCyrillicMessage = /[^а-яА-Я0-9\s\-.,:;!?]/g
  const patternEmailInput = /[^\w@\-.!~*']/g
  const patternEmailTest = /^[\w\-.]+@[\w\-]+(\.[\w\-]+)*\.[\w]+$/i
  const patternPhone = /[^\d\-+()]/g
  const patternCapitalize = /(^|\s|\-)[а-яА-Я]/g
  const patternRepeatingSpaces = /\s{2,}/g
  const patternRepeatingHyphens = /\-{2,}/g
  const patternStart = /^[\s-]*/g
  const patternEnd = /[\s-]*$/g

  const setValid = (input) => {
    input.dataset.valid = ''
    if (!input.value) return
    if (input.name === 'user_name') {
      if (input.value.match(/[а-я]/gi).join('').length < 2) return
    }
    if (input.name === 'user_email') {
      if (!patternEmailTest.test(input.value)) return
    }
    if (input.name === 'user_phone') {
      if (
        input.value.match(/\d/g).join('').length < 5 ||
        input.value.match(/\d/g).join('').length > 16
      )
        return
    }
    if (input.name === 'user_message') {
      if (!/[а-я]{2,}/gi.test(input.value)) return
    }
    input.dataset.valid = true
  } // end setValid

  const capitalize = (string) =>
    string.replace(patternCapitalize, (char) => char.toUpperCase())

  const formatInput = (e) => {
    if (!e.target.value) return

    e.target.value = e.target.value
      .replace(patternRepeatingSpaces, ' ')
      .replace(patternRepeatingHyphens, '-')
      .replace(patternStart, '')
      .replace(patternEnd, '')

    if (e.target.name === 'user_name') {
      e.target.value = capitalize(e.target.value.toLowerCase())
    }
    if (e.target.value) {
      setValid(e.target)
    }
  } // end formatInput

  elements.forEach((input) => {
    input.addEventListener('input', (e) => {
      document.querySelectorAll('.request-status').forEach((item) => {
        item.textContent = ''
      })

      e.target.style.border = ''

      if (e.target.classList.contains('calc-item')) {
        e.target.value = e.target.value.replace(patternNumbers, '')
      } else if (e.target.name === 'user_name') {
        e.target.value = e.target.value.replace(patternCyrillicName, '')
      } else if (e.target.name === 'user_email') {
        e.target.value = e.target.value.replace(patternEmailInput, '')
      } else if (e.target.name === 'user_phone') {
        e.target.value = e.target.value.replace(patternPhone, '')
      } else if (e.target.name === 'user_message') {
        e.target.value = e.target.value.replace(patternCyrillicMessage, '')
      }
    })
    if (!input.classList.contains('calc-item')) {
      input.addEventListener('blur', formatInput)
    }
  })
}
