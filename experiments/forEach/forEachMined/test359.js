





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    expect(Array.isArray(v)).toBe(false);
};
var argument2 = function (fn) {
 callbackArguments.push(arguments) 

    try {
        fn(value);
    } catch (e) {
        $exceptionHandler(e);
    }
};
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    delete self.remote[key];
};
var argument4 = function (doc, i) {
 callbackArguments.push(arguments) 

    rawIds[i] = doc;
};
var base_0 = [607,893,655,157]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,893,655,157]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,893,655,157]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,893,655,157]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test359.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)