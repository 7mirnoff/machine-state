import './modules/polyfill'
import {
  stateList,
  StateMachine
} from './modules/state-machine'

let stateMachine = new StateMachine()
stateMachine.setState(stateList.begin)

const buttonsStage = document.querySelectorAll(`.state-machine__button`)

buttonsStage.forEach((button, i) => {
  button.addEventListener(`click`, () => {
    stateMachine.setState(stateList[`stage${i + 1}`])
  })
})
