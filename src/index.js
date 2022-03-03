import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import scroll from './modules/scroll'
import slider from './modules/slider'
import tabs from './modules/tabs'
import calc from './modules/calc'
import validate from './modules/validate'

timer('8 march 2022')
menu()
modal()
scroll()
tabs()
calc(100)
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
validate('input.calc-item', 'numbers')
validate('input[name=user_message]', 'text')
validate('input[name=user_name]', 'text')
validate('input[type=email]', 'email')
validate('input[type=tel]', 'tel')
