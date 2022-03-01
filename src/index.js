import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import scroll from './modules/scroll'
import slider from './modules/slider'
import tabs from './modules/tabs'
import validate from './modules/validate'

timer('8 march 2022')
menu()
modal()
scroll()
tabs()
slider({
  slider: 'portfolio-content',
  slide: 'portfolio-item',
  sliderBtn: 'portfolio-btn',
  dotContainer: 'portfolio-dots',
  dot: 'dot',
  slideActive: 'portfolio-item-active',
  dotActive: 'dot-active',
  arrowLeft: '#arrow-left',
  arrowRight: '#arrow-right',
})

// TMP will be moved to modules later???
// Калькулятор
validate('select.calc-item', 'select')
validate('input.calc-item', 'input', 'numbers')
// Forms
validate('input[name=user_message]', 'input', 'text')
validate('input[name=user_name]', 'input', 'text')
validate('input[type=email]', 'input', 'email')
validate('input[type=tel]', 'input', 'tel')
