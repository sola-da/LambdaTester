





var callbackArguments = [];
var argument1 = function (x, i) {
 callbackArguments.push(arguments) 

    var result = selector.call(thisArg, x, i, source);
    isPromise(result) && (result = observableFromPromise(result));
    (Array.isArray(result) || isIterable(result)) && (result = observableFrom(result));
    return result;
};
var argument2 = null;
var argument3 = function (val, key) {
 callbackArguments.push(arguments) 

    return '(' + field.script + ')' + operators[key] + key;
};
var argument4 = function (child) {
 callbackArguments.push(arguments) 

    return {
        source: parent,
        target: child
    };
};
var argument5 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument6 = true;
var base_0 = ["_MC","p>","Y","<Dv`X"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_MC","p>","Y","<Dv`X"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_MC","p>","Y","<Dv`X"]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_MC","p>","Y","<Dv`X"]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test794.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)