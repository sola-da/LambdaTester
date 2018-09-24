





var callbackArguments = [];
var argument1 = function (total, xB) {
 callbackArguments.push(arguments) 

    return total + (xB > xA ? 0 : xB < xA ? 1 : 0.5);
};
var argument2 = {"893":5.126874849159552e+307,"1.1541176978952858e+308":2.7691271501755113e+307,"1.4185457887051017e+308":714};
var argument3 = function (acc, join) {
 callbackArguments.push(arguments) 

    acc.push(makePunc(punc, join), join);
    return acc;
};
var argument4 = {"0":"bo?U","705":"","":"]",";":25,"D":"","1.7100421441450405e+308":"","1.8621727116866405e+307":""};
var argument5 = true;
var argument6 = function (result, key) {
 callbackArguments.push(arguments) 

    var pair = cb(obj[key], key, obj);
    result[pair[0]] = pair[1];
    return result;
};
var argument7 = r_0;
var argument8 = function (prev, current, i, arr) {
 callbackArguments.push(arguments) 

    return doMerge(prev, current, true).tree;
};
var argument9 = r_1;
var base_0 = [59,823,705,618,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,823,705,618,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,823,705,618,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,823,705,618,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test95.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)