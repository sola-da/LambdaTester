/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (notes) {
 callbackArguments.push(arguments) 

    if (notes) {
        value(notes);
        updateStatus('Notes loaded.');
    } else {
        Buttons.paste();
        updateStatus('Example notes pasted. (No saved notes found.)');
    }
};
var argument2 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 0,
                end: 1
            },
            {
                start: 54,
                end: 55
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument3 = 595;
var argument4 = [714,"`B",5e-324,"V","R",595];
var argument5 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 22,
                end: 26
            },
            {
                start: 50,
                end: 54
            },
            {
                start: 78,
                end: 82
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument6 = null;
var argument7 = function () {
 callbackArguments.push(arguments) 

    var keyPrefix = self._dbInfo.keyPrefix;
    var keyPrefixLength = keyPrefix.length;
    var length = localStorage.length;
    for (var i = 0; i < length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        if (value) {
            value = serializer.deserialize(value);
        }
        value = iterator(value, key.substring(keyPrefixLength), i + 1);
        if (value !== void 0) {
            return value;
        }
    }
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument2,argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument6,argument7)
}
catch(e) {
r_3= e.message
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/promises/promiseMined/test948.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)