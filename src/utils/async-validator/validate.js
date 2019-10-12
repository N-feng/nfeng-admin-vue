import validators from './validators';

const formatRegExp = /%[sdj%]/g;

function format(...args) {
    let i = 1;
    const f = args[0];
    if (typeof f === 'string') {
        const str = String(f).replace(formatRegExp, (x) => {
            switch (x) {
            case '%s':
                return String(args[i++]);
            default:
                return x;
            }
        });
        return str;
    }
}

function getType(rule) {
    if (rule.type === undefined && (rule.pattern instanceof RegExp)) {
        rule.type = 'pattern';
    }
    if (typeof (rule.validator) !== 'function' && (rule.type && !Object.prototype.hasOwnProperty.call(validators, rule.type))) {
        console.warn(format('Unknown rules type %s', rule.type));
        rule.type = '';
    }
    return rule.type || 'string';
}

function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
        return rule.validator;
    }
    const keys = Object.keys(rule);
    const messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
        return validators.required;
    }
    return validators[getType(rule)] || false;
}

function validate(model, rules, callback) {
    const objKeys = Object.keys(model);
    let value;
    objKeys.forEach((key) => {
        value = model[key];
    });
    rules.forEach((rule) => {
        const validator = getValidationMethod(rule);

        if (validator) {
            validator(rule, value, callback);
        }
    });
}

export default validate;
