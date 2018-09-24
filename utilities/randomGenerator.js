var seedrandom = require('seedrandom');
function Random(seed) {
    // initialize seedrandom so that it overwrites Math.random with deterministic PRNG
    seedrandom(seed, {
        global: "true"
    });

    this.nextNb = Math.random;
}

Random.prototype = {
    pickFromArray: function (array) {
        var index = Math.round(this.nextNb() * (array.length - 1));
        return array[index];
    },
    pickIndex: function (length) {
        return Math.round(this.nextNb() * (length - 1));
    }
};
function Decisions(){
    this.constantTypes = ["number", "string", "null", "boolean", "array", "object"];

    this.charsForRandomStrings = [];
    for (var charCode = 32; charCode < 126; charCode++) {
        // charCode 34 is " We do not want to include it. This generates strings for examples W" which are syntax errors
        if (charCode !== 34 && charCode !== 46 && charCode !== 92 && charCode !== 47)
            this.charsForRandomStrings.push(String.fromCharCode(charCode));
    }

    /* We might want to serialize the seed along with the generated tests in order to replicate the failure */
    var seed = Math.floor(100);
    this.r = new Random(seed);

    this.randomNumberPool = [Number.MIN_VALUE, -100, -1, 0, 100, Number.MAX_VALUE];

    var sizeOfRandomNumberPool = 30;
    while (this.randomNumberPool.length !== sizeOfRandomNumberPool) {
        this.randomNumberPool.push(Math.floor(this.r.nextNb() * 1000));
    }
}

Decisions.prototype = {

    pickRandomConstant: function (typeToGenerate) {
        switch (typeToGenerate) {
            case "boolean":
                return this.pickRandomBoolean();
            case "string":
                return this.pickRandomString();
            case "number":
                return this.pickRandomNumber();
            case "null":
                return null;
            case "array":
                return this.pickRandomArray();
            case "object":
                return this.pickRandomObject();

        }
        throw "Should never be reached.";
    },
    pickRandomBoolean: function () {
        if (this.r.nextNb() < 0.5) return true;
        else return false;
    },
    pickRandomObject: function () {
        var obj = {};
        var objSize = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var length = this.r.pickFromArray(objSize);
        var prop, val;
        while (Object.keys(obj).length !== length) {

            if (this.r.nextNb() < 0.5)
                prop = this.pickRandomString();
            else
                prop = this.pickRandomNumber().toFixed(0);
            if (this.r.nextNb() < 0.5)
                val = this.pickRandomString();
            else
                val = this.pickRandomNumber();
            obj[prop] = val;
        }
        // console.log(obj);
        return obj;
    },
    pickRandomArray: function () {
        var randomArray = [];
        var arrayLengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var length = this.r.pickFromArray(arrayLengths);
        var PossibleArrayTypes = ['string', 'number', 'both'];
        var arrayType = this.r.pickFromArray(PossibleArrayTypes);
        if (arrayType === 'string') {
            while (randomArray.length != length) {
                var randomString = this.pickRandomString();
                while (randomString.length === 0 || randomString.indexOf("'") !== -1)
                    randomString = this.pickRandomString();
                randomArray.push(randomString);
            }
        } else if (arrayType === 'number') {
            while (randomArray.length != length)
                randomArray.push(this.r.pickFromArray(this.randomNumberPool));
        } else if (arrayType === 'both') {
            while (randomArray.length != length) {
                if (this.r.nextNb() < 0.5) {
                    randomArray.push(this.r.pickFromArray(this.randomNumberPool));
                } else {
                    randomString = this.pickRandomString();
                    while (randomString.length === 0 || randomString.indexOf("'") !== -1)
                        randomString = this.pickRandomString();
                    randomArray.push(randomString);
                }
            }
        }
        // console.log(randomArray);
        if (!Array.isArray(randomArray)) {
            throw "Not Array";
        }
        return randomArray;
    },

    pickRandomString: function () {
        var s = "";
        while (this.r.nextNb() < 0.5) {
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 5; i++)
                s += possible.charAt(Math.floor(Math.random() * possible.length));

            return s;
            //this generates strings that are not syntactically correct
           // s += this.r.pickFromArray(this.charsForRandomStrings);
        }
        return s;
    },
    pickRandomNumber: function () {
        // 50-50 chance to pick from pre-defined pool of numbers or purely random
        if (this.r.nextNb() < 0.5) {
            return this.r.pickFromArray(this.randomNumberPool);
        } else {
            return Number.MAX_VALUE * this.r.nextNb();
        }
    },

    pickArguments: function (types) {
        var arguments =[];

        for (var i=0; i<types.length; i++){
            var type = types[i];
            arguments.push(this.pickRandomConstant(type))
        }

        return arguments;

    },
    pickRandomNbOfArgs: function(min){
        var max = 3;

        return Math.floor(Math.random() * (max - min + 1)) + min;

    },
    pickRandomType:function(){
        return this.constantTypes[Math.floor(Math.random() * this.constantTypes.length)];

    }
};

exports.Decisions = Decisions;
