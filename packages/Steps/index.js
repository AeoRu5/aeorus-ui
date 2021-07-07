import Steps from './src'

Steps.install = Vue => {
  Vue.component(Steps.name, Steps)
}

export default Steps