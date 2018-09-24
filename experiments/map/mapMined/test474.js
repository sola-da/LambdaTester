





var callbackArguments = [];
var argument1 = function (x, i) {
 callbackArguments.push(arguments) 

    var result = selector.call(thisArg, x, i, source);
    isPromise(result) && (result = observableFromPromise(result));
    (Array.isArray(result) || isIterable(result)) && (result = observableFrom(result));
    return result;
};
var argument2 = null;
var argument3 = false;
var argument4 = function (chunk) {
 callbackArguments.push(arguments) 

    var stub = new Stub(function (err, out) {
            if (err) {
                chunk.setError(err);
            } else {
                callback(out, chunk);
            }
        });
    body(stub.head, context).end();
};
var argument5 = false;
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    if (!v.sentence) {
        v.sentence = v.name + ' is related to ' + result.name;
    }
    return v;
};
var argument7 = r_2;
var argument8 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstChild && elem.firstChild.nodeType === 1) {
        elem = elem.firstChild;
    }
    return elem;
};
var base_0 = ["o","Q","M","]%","%"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o","Q","M","]%","%"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o","Q","M","]%","%"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o","Q","M","]%","%"]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
}
catch(e) {
r_3= "Error"
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
require("fs").writeFileSync("./experiments/map/mapMined/test474.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)