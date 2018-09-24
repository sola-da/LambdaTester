Array.prototype.every = function every(callback) {
    if (this === undefined || this === null) {
        throw new TypeError(this + ' is not an object');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    var
        object = Object(this),
        scope = arguments[1],
        arraylike = object instanceof String ? object.split('') : object,
        length = Number(arraylike.length) || 0,
        index = -1;

    while (++index < length) {
        if (index in arraylike && !callback.call(scope, arraylike[index], index, object)) {
            return false;
        }
    }

    return true;
};

Array.prototype.filter = function filter(callback) {
    if (this === undefined || this === null) {
        throw new TypeError(this + ' is not an object');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    var object = Object(this),
        scope = arguments[1],
        arraylike = object instanceof String ? object.split('') : object,
        length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        index = -1,
        result = [],
        element;

    while (++index < length) {
        element = arraylike[index];

        if (index in arraylike && callback.call(scope, element, index, object)) {
            result.push(element);
        }
    }

    return result;
};
Object.defineProperty(Array.prototype, 'find', {
    configurable: true,
    value: function find(callback) {
        if (this === undefined || this === null) {
            throw new TypeError(this + ' is not an object');
        }

        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        var
            object = Object(this),
            scope = arguments[1],
            arraylike = object instanceof String ? object.split('') : object,
            length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
            index = -1,
            element;

        while (++index < length) {
            if (index in arraylike) {
                element = arraylike[index];

                if (callback.call(scope, element, index, object)) {
                    return element;
                }
            }
        }
    },
    writable: true
});

Array.prototype.forEach = function forEach(callback) {
    if (this === undefined || this === null) {
        throw new TypeError(this + ' is not an object');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    var
        object = Object(this),
        scope = arguments[1],
        arraylike = object instanceof String ? object.split('') : object,
        length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        index = -1;

    while (++index < length) {
        if (index in arraylike) {
            callback.call(scope, arraylike[index], index, object);
        }
    }
};

Array.prototype.map = function map(callback) {
    if (this === undefined || this === null) {
        throw new TypeError(this + ' is not an object');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    var
        object = Object(this),
        scope = arguments[1],
        arraylike = object instanceof String ? object.split('') : object,
        length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        index = -1,
        result = [];

    while (++index < length) {
        if (index in arraylike) {
            result[index] = callback.call(scope, arraylike[index], index, object);
        }
    }

    return result;
};
Array.prototype.reduce = function reduce(callback) {
    if (this === undefined || this === null) {
        throw new TypeError(this + ' is not an object');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    var
        object = Object(this),
        arraylike = object instanceof String ? object.split('') : object,
        length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        index = -1,
        previousValue;

    if (1 in arguments) {
        previousValue = arguments[1];
    } else {
        while (++index < length && !(index in arraylike)) {
        }

        if (index >= length) {
            throw new TypeError('Reduce of empty array with no initial value');
        }

        previousValue = arraylike[index];
    }

    while (++index < length) {
        if (index in arraylike) {
            previousValue = callback(previousValue, arraylike[index], index, object);
        }
    }

    return previousValue;
};

Array.prototype.reduceRight = function reduceRight(callback) {
    if (this === undefined || this === null) {
        throw new TypeError(this + ' is not an object');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    var
        object = Object(this),
        arraylike = object instanceof String ? object.split('') : object,
        length = -1,
        index = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        previousValue;

    if (1 in arguments) {
        previousValue = arguments[1];
    } else {
        while (--index > length && !(index in arraylike)) {
        }

        if (index <= length) {
            throw new TypeError('Reduce of empty array with no initial value');
        }

        previousValue = arraylike[index];
    }

    while (--index > length) {
        if (index in arraylike) {
            previousValue = callback(previousValue, arraylike[index], index, object);
        }
    }

    return previousValue;
};
Array.prototype.some = function some(callback) {
    if (this === undefined || this === null) {
        throw new TypeError(this + ' is not an object');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    var
        object = Object(this),
        scope = arguments[1],
        arraylike = object instanceof String ? object.split('') : object,
        length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        index = -1;

    while (++index < length) {
        if (index in arraylike && callback.call(scope, arraylike[index], index, object)) {
            return true;
        }
    }

    return false;
};