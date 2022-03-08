import { timer } from './modules/timer'
import { menu } from './modules/menu'
import { modal } from './modules/modal'
import { scroll } from './modules/scroll'
import { slider } from './modules/slider'
import { tabs } from './modules/tabs'
import { calc } from './modules/calc'
import { sendForm } from './modules/sendForm'
import { validate } from './modules/validate'

calc(100)
menu()
modal()
scroll()
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
})
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
tabs()
timer('18 march 2022')
validate('input.calc-item', 'numbers')
validate('input[name=user_message]', 'text')
validate('input[name=user_name]', 'text')
validate('input[type=email]', 'email')
validate('input[type=tel]', 'tel')
