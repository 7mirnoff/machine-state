import './modules/polyfill'
import {
  stateList,
  StateMachine
} from './modules/state-machine'

let stateMachine = new StateMachine()
stateMachine.setState(stateList.begin)

const buttonStage1 = document.querySelector(`.state-machine__button--1`)
const buttonStage2 = document.querySelector(`.state-machine__button--2`)
const buttonStage3 = document.querySelector(`.state-machine__button--3`)

buttonStage1.addEventListener(`click`, () => {
  stateMachine.setState(stateList.stage1)
})

buttonStage2.addEventListener(`click`, () => {
  stateMachine.setState(stateList.stage2)
})

buttonStage3.addEventListener(`click`, () => {
  stateMachine.setState(stateList.stage3)
})
