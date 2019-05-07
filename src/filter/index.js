import Vue from 'vue';

Vue.filter('formatList', (input, format) => {
    let str = '';
    input.forEach((el, k) => {
        str += k === 0 ? el[format] : `, ${el[format]}`;
    });
    return str;
});
