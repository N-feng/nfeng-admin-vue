import HeaderBox from './public/header-box.vue'
import CardBox from './web/card-box.vue'
import NfCard from './NfCard/index.vue'
import HeaderMenu from './HeaderMenu/index.vue'

const components = [
  HeaderBox,
  CardBox,
  NfCard,
  HeaderMenu,
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
