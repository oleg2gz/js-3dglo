import { fetchData } from './fetch'
import { animate } from './helpers'

export const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId)
  const statusBlock = document.createElement('div')
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const loadText = 'Загрузка...'
  const errorText = 'Ошибка...'
  const successText = 'Спасибо! Наш менеджер с вами свяжется'

  // Animation Start
  const wrap = document.createElement('div')
  const box1 = document.createElement('div')
  const box2 = document.createElement('div')
  const box3 = document.createElement('div')

  wrap.classList.add('wrap')
  box1.classList.add('box1')
  box2.classList.add('box2')
  box3.classList.add('box3')
  wrap.append(box1, box2, box3)
  // Animation End

  const animateModal = () => {
    const modal = document.querySelector('.popup')
    const modalContent = modal.querySelector('.popup-content')

    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction
      },
      draw(progress) {
        modal.style.opacity = 1 - progress
        modalContent.style.opacity = 1 - progress

        if (modal.style.opacity <= 0) {
          modal.style.opacity = 0
          modalContent.style.opacity = 0
          modal.style.display = 'none'
        }
      },
    })
  } // end animateModal

  const validate = (list) => {
    statusBlock.textContent = ''

    let success = true

    list.forEach((input) => {
      if (!input.dataset.valid) {
        if (input.name === 'user_name') {
          statusBlock.insertAdjacentHTML(
            'beforeend',
            '<p style="text-align: center;">Ваше имя должно состоять не менее, чем из двух букв</p>'
          )
        }
        if (input.name === 'user_email') {
          statusBlock.insertAdjacentHTML(
            'beforeend',
            '<p style="text-align: center;">Поле E-mail должно быть заполнено</p>'
          )
        }
        if (input.name === 'user_phone') {
          statusBlock.insertAdjacentHTML(
            'beforeend',
            '<p style="text-align: center;">Номер телефона должен состоять от 5 до 16 цифр</p>'
          )
        }
        if (input.name === 'user_message') {
          statusBlock.insertAdjacentHTML(
            'beforeend',
            '<p style="text-align: center;">Ваше сообщение должно состоять не менее, чем из двух букв</p>'
          )
        }
        success = false
        input.style.border = '5px solid red'
      }
    })

    return success
  } // end validate

  const handleSubmit = (e) => {
    e.preventDefault()

    const formElements = form.querySelectorAll('input')
    const formData = new FormData(form)
    const formBody = {}

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
      statusBlock.append(wrap)

      fetchData(url, 'POST', formBody)
        .then((_) => {
          statusBlock.textContent = successText

          setTimeout(animateModal, 1500)

          formElements.forEach((input) => {
            input.value = ''
            input.dataset.valid = ''
          })
        })
        .catch((err) => {
          statusBlock.textContent = errorText
        })
    }
  } // end handleSubmit

  try {
    if (!form) {
      throw new Error('Верни форму на место, гадёныш! :)')
    }

    statusBlock.classList.add('request-status')
    statusBlock.style.position = 'relative'
    statusBlock.style.color = 'white'
    form.append(statusBlock)

    form.addEventListener('submit', handleSubmit)
  } catch (error) {
    console.log(error.message)
  }
}
