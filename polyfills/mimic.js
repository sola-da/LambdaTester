
Array.prototype.every = function every (arg1, arg2) {
    var n0 = this.length
    var n3 = true
    for (var i = 0; i < n0; i += 1) {
        var n1 = i in this
        if (n1) {
            var n2 = this[i]
            n3 = arg1.call(arg2, n2, i, this)
            if (!n3) {
                break
            }
        }
    }
    return n3
}

Array.prototype.filter = function filter (arg1, arg2) {
    var result = []
    var n0 = this.length
    for (var i = 0; i < n0; i += 1) {
        var n1 = i in this
        if (n1) {
            var n2 = this[i]
            var n3 = arg1.call(arg2, n2, i, this)
            if (n3) {
                result[result.length] = n2
            }
        }
    }
    return result
}
Array.prototype.forEach = function forEach (arg1, arg2) {
    var n0 = this.length
    for (var i = 0; i < n0; i += 1) {
        var n1 = i in this
        if (n1) {
            var n2 = this[i]
            var n3 = arg1.call(arg2, n2, i, this)
        }
    }
}

Array.prototype.map = function map (arg1, arg2) {
    var result = []
    var n0 = this.length
    for (var i = 0; i < n0; i += 1) {
        var n1 = i in this
        if (n1) {
            var n2 = this[i]
            var n3 = arg1.call(arg2, n2, i, this)
            result[i] = n3
        }
    }
    return result
}

Array.prototype.reduce = function reduce(arg1, arg2) {
    var result = arg2
    var n0 = this.length
    for (var i = 0; i < n0; i += 1) {
        var n1 = i in this
        if (n1) {
            var n2 = this[i]
            var n3 = arg1.call(undefined, result, n2, i, this)
            result = n3
        }
    }
    return result
}
Array.prototype.reduceRight = function reduceRight (arg1, arg2) {
    var result = arg2
    var n0 = this.length
    for (var i = 0; i < n0; i += 1) {
        var n1 = ((n0-i)-1) in this
        if (n1) {
            var n2 = this[(n0-i)-1]
            var n3 = arg1.call(undefined, result, n2, (n0-i)-1, this)
            result = n3
        }
    }
    return result
}
Array.prototype.some = function some(arg1, arg2) {
    var n0 = this.length
    var n3 = false
    for (var i = 0; i < n0; i += 1) {
        var n1 = i in this
        if (n1) {
            var n2 = this[i]
            n3 = arg1.call(arg2, n2, i, this)
            if (n3) {
                break
            }
        }
    }
    return n3
}
