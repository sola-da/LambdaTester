





var callbackArguments = [];
var argument1 = function (sum, value) {
 callbackArguments.push(arguments) 

    return sum + value;
};
var argument2 = function (params, paramName) {
 callbackArguments.push(arguments) 

    params[paramName] = rootParams[paramName];
    return params;
};
var argument3 = function (obj, key) {
 callbackArguments.push(arguments) 

    obj[key] = item[key];
    return obj;
};
var argument4 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument5 = null;
var argument6 = ["^","3L","c","i","37tur",";","OV","z","9"];
var base_0 = [627,100,655,627]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,100,655,627]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,100,655,627]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,100,655,627]
var r_3= undefined
try {
r_3 = base_3.reduce(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test6.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)