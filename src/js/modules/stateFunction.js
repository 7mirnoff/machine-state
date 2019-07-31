const stage0 = document.querySelector(`.state-machine__stage--0`)
const stage1 = document.querySelector(`.state-machine__stage--1`)
const stage2 = document.querySelector(`.state-machine__stage--2`)
const stage3 = document.querySelector(`.state-machine__stage--3`)

const hideStage0 = () => {
  stage0.style.display = `none`
}

const showStage1 = () => {
  stage1.style.display = `block`
}
const hideStage1 = () => {
  stage1.style.display = `none`
}
const showStage2 = () => {
  stage2.style.display = `block`
}
const hideStage2 = () => {
  stage2.style.display = `none`
}
const showStage3 = () => {
  stage3.style.display = `block`
}
const hideStage3 = () => {
  stage3.style.display = `none`
}

export {
  hideStage0,
  showStage1,
  hideStage1,
  showStage2,
  hideStage2,
  showStage3,
  hideStage3
}
