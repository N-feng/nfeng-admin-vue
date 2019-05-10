import Vue from 'vue';

Vue.filter('formatList', (input, format = ',', key) => {
    let str = '';
    input.forEach((el, k) => {
        if (k === 0) {
            str += key ? el[key] : el;
        } else {
            str += key ? `${format} ${el[key]}` : `${format} ${el}`;
        }
    });
    return str;
});
