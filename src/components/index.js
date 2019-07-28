import NfCard from './NfCard/index.vue'
import NfCheckbox from './NfCheckbox/index.vue'

const components = [
  NfCard,
  NfCheckbox,
]

function install(Vue) {
  if (install.installed) return

  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
}
