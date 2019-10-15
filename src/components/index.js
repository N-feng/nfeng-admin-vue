import NfCard from './NfCard/index.vue'
import NfCheckbox from './NfCheckbox/index.vue'
import NfMarkdown from './NfMarkdown/index.vue'
import NfMdPreview from './NfMdPreview/index.vue'
import NfImgView from './NfImgView/index.vue'

const components = [
  NfCard,
  NfCheckbox,
  NfMarkdown,
  NfMdPreview,
  NfImgView,
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
