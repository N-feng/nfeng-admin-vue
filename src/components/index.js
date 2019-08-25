import NfCard from './NfCard/index.vue'
import NfCheckbox from './NfCheckbox/index.vue'
import NfMarkdown from './NfMarkdown/index.vue'
import NfViewImg from './NfViewImg/index.vue'
import NfImgList from './NfImgList/index.vue'

const components = [
  NfCard,
  NfCheckbox,
  NfMarkdown,
  NfViewImg,
  NfImgList,
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
