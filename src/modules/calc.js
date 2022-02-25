const calc = () => {
  const inputs = document.querySelectorAll('input.calc-item')
  let inputTimeout

  const forms = document.forms
  console.log(forms)

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      clearTimeout(inputTimeout)

      if (/[^\d]/g.test(input.value)) {
        input.value = input.value.replace(/[^\d]/g, '')
      }
      if (input.value === '') return

      inputTimeout = setTimeout(() => {
        // действия после debounce
        console.log(input.value)
      }, 300)
    })
  })
}

export default calc
