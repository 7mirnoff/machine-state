import {
  hideStage0,
  showStage1,
  hideStage1,
  showStage2,
  hideStage2,
  showStage3,
  hideStage3
} from './stateFunction'

const stateList = {
  begin: {
    name: 'begin',
    onStart() {
      hideStage1()
      hideStage2()
      hideStage3()
    },
    condition() {
      return true
    },
    onEnd() {}
  },
  stage1: {
    name: 'stage1',
    onStart() {
      hideStage0()
      showStage1()
    },
    condition() {
      return true
    },
    onEnd() {
      hideStage1()
    }
  },
  stage2: {
    name: 'stage2',
    onStart() {
      hideStage0()
      showStage2()
    },
    condition() {
      return true
    },
    onEnd() {
      hideStage2()
    }
  },
  stage3: {
    name: 'stage3',
    onStart() {
      hideStage0()
      showStage3()
    },
    condition() {
      return true
    },
    onEnd() {
      hideStage3()
    }
  },
  end: {
    name: 'end',
    onStart() {},
    condition() {
      return true
    },
    onEnd() {}
  }
}


class StateMachine {
  constructor(current) {
    this.current = null
  }

  setState(target) {
    const current = this.current

    if (current && current.name === target.name) {
      // console.log('Состояние уже принято')
      return
    }

    if (!target.condition()) {
      console.log('Переход к ' + target.name + ' отменен')
      return
    }

    current && current.onEnd()
    target.onStart()

    console.log('__SM__ ', current && current.name, ' ---> ', target.name)
    this.current = target
  }
}


export {
  stateList,
  StateMachine
}
