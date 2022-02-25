import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import scroll from './modules/scroll'
import forms from './modules/forms'

timer('28 february 2022')
menu()
modal()
scroll()

// TMP will be moved to modules later???
// Калькулятор
forms('select.calc-item', 'select')
forms('input.calc-item', 'input', 'numbers')
