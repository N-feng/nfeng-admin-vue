import NfCard from './NfCard/index.vue'
import NfCheckbox from './NfCheckbox/index.vue'
import nfMdPreview from './nfMdPreview/index.vue'
import nfImgPreview from './nfImgPreview/index.vue'
import nfMarkdown from './nfMarkdown/index.vue'
import nfMasonry from './nfMasonry/index.vue'

const components = [
  NfCard,
  NfCheckbox,
  nfMarkdown,
  nfMdPreview,
  nfImgPreview,
  nfMasonry
]

function install(Vue) {
  if (install.installed) return

  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
