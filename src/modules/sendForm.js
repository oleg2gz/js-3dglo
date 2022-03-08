export const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId)
  const statusBlock = document.createElement('div')
  const loadText = 'Загрузка...'
  const errorText = 'Ошибка...'
  const successText = 'Спасибо! Наш менеджер с вами свяжется'

  const validate = (list) => {
    let success = true

    // !!! Add success and error classes in validate.js !!!

    list.forEach((input) => {
      if (!input.classList.contains('success')) {
        success = false
      } else {
        alert('Данные не заполнены!')
      }
    })

    return success
  }

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => res.json())
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formElements = form.querySelectorAll('input')
    const formData = new FormData(form)
    const formBody = {}

    statusBlock.textContent = loadText
    form.append(statusBlock)

    formData.forEach((val, key) => {
      formBody[key] = val
    })

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id)

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value
      }
    })

    if (validate(formElements)) {
      sendData(formBody)
        .then((_) => {
          statusBlock.textContent = successText

          formElements.forEach((input) => {
            input.value = ''
          })
        })
        .catch((err) => {
          statusBlock.textContent = errorText
        })
    }
  }

  try {
    if (!form) {
      throw new Error('Верни форму на место, гадёныш! :)')
    }
    form.addEventListener('submit', handleSubmit)
  } catch (error) {
    console.log(error.message)
  }
}
