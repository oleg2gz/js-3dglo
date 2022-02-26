import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import scroll from './modules/scroll'
import validate from './modules/validate'

timer('28 february 2022')
menu()
modal()
scroll()

// TMP will be moved to modules later???
// Калькулятор
validate('select.calc-item', 'select')
validate('input.calc-item', 'input', 'numbers')
// Forms
validate('input[name=user_message]', 'input', 'text')
validate('input[name=user_name]', 'input', 'text')
validate('input[type=email]', 'input', 'email')
validate('input[type=tel]', 'input', 'tel')
