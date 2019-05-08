import HeaderBox from './public/header-box.vue';
import CardBox from './web/card-box.vue';

const components = [
    HeaderBox,
    CardBox,
];

function install(Vue) {
    if (install.installed) return;

    components.forEach((component) => {
        Vue.component(component.name, component);
    });
}

export default {
    install,
};
