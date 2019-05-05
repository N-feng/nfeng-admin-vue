import validators from './validators';

const formatRegExp = /%[sdj%]/g;

function convertFieldsError(errors) {
    if (!errors || !errors.length) return null;
    const fields = {};
    errors.forEach((error) => {
        const { field } = error;
        fields[field] = fields[field] || [];
        fields[field].push(error);
    });
    return fields;
}

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

function asyncParallelArray(arr, func, callback) {
    const results = [];
    let total = 0;
    const arrLength = arr.length;

    function count(errors) {
        results.push(...errors);
        total++;
        if (total === arrLength) {
            callback(results);
        }
    }

    arr.forEach((a) => {
        func(a, count);
    });
}

function asyncSerialArray(arr, func, callback) {
    let index = 0;
    const arrLength = arr.length;

    function next(errors) {
        if (errors && errors.length) {
            callback(errors);
            return;
        }
        const original = index;
        index += 1;
        if (original < arrLength) {
            func(arr[original], next);
        } else {
            callback([]);
        }
    }

    next([]);
}

function flattenObjArr(objArr) {
    const ret = [];
    Object.keys(objArr).forEach((k) => {
        ret.push(...objArr[k]);
    });
    return ret;
}

function asyncMap(objArr, option, func, callback) {
    if (option.first) {
        const flattenArr = flattenObjArr(objArr);
        return asyncSerialArray(flattenArr, func, callback);
    }
    let firstFields = option.firstFields || [];
    if (firstFields === true) {
        firstFields = Object.keys(objArr);
    }
    const objArrKeys = Object.keys(objArr);
    const objArrLength = objArrKeys.length;
    let total = 0;
    const results = [];
    const pending = new Promise((resolve, reject) => {
        const next = (errors) => {
            results.push(...errors);
            total++;
            if (total === objArrLength) {
                callback(results);
                return results.length
                    ? reject({ errors: results, fields: convertFieldsError(results) })
                    : resolve();
            }
        };
        objArrKeys.forEach((key) => {
            const arr = objArr[key];
            if (firstFields.indexOf(key) !== -1) {
                asyncSerialArray(arr, func, next);
            } else {
                asyncParallelArray(arr, func, next);
            }
        });
    });
    return pending;
}

class AsyncValidator {
    constructor(descriptor) {
        this.rules = null;
        this.define(descriptor);
    }

    define(rules) {
        if (!rules) {
            throw new Error('Cannot configure a schema with no rules');
        }
        if (typeof rules !== 'object' || Array.isArray(rules)) {
            throw new Error('Rules must be an object');
        }
        this.rules = {};
        let item;
        Object.keys(rules).forEach((z) => {
            if (Object.prototype.hasOwnProperty.call(rules, z)) {
                item = rules[z];
                this.rules[z] = Array.isArray(item) ? item : [item];
            }
        });
    }

    validate(source_, o = {}, oc = () => {}) {
        const source = source_;
        let options = o;
        let callback = oc;
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        if (!this.rules || Object.keys(this.rules).length === 0) {
            if (callback) {
                callback();
            }
            return Promise.resolve();
        }
        let arr;
        let value;
        const series = {};
        const keys = options.keys || Object.keys(this.rules);
        keys.forEach((z) => {
            arr = this.rules[z];
            value = source[z];
            arr.forEach((r) => {
                let rule = r;
                if (typeof (rule) === 'function') {
                    rule = {
                        validator: rule,
                    };
                } else {
                    rule = { ...rule };
                }
                rule.validator = AsyncValidator.getValidationMethod(rule);
                rule.field = z;
                rule.fullField = rule.fullField || z;
                rule.type = AsyncValidator.getType(rule);
                if (!rule.validator) {
                    return;
                }
                series[z] = series[z] || [];
                series[z].push({
                    rule,
                    value,
                    source,
                    field: z,
                });
            });
        });
        return asyncMap(series, options, (data) => {
            function cb() {
                // console.log(e);
            }

            const { rule } = data;
            //     let deep = (rule.type === 'object' || rule.type === 'array')
            // && (typeof (rule.fields) === 'object' || typeof (rule.defaultField) === 'object');
            //     deep = deep && (rule.required || (!rule.required && data.value));
            // console.log(deep);
            // const res;
            if (rule.validator) {
                rule.validator(rule, data.value, cb, data.source, options);
            }
        });
    }

    static getValidationMethod(rule) {
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
        return validators[AsyncValidator.getType(rule)] || false;
    }

    static getType(rule) {
        if (rule.type === undefined && (rule.pattern instanceof RegExp)) {
            rule.type = 'pattern';
        }
        if (typeof (rule.validator) !== 'function' && (rule.type && !Object.prototype.hasOwnProperty.call(validators, rule.type))) {
            console.warn(format('Unknown rules type %s', rule.type));
            rule.type = '';
        }
        return rule.type || 'string';
    }
}

export default AsyncValidator;
