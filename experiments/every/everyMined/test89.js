





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    var dd = dimDescr[t], val = dd.orgValue && !dd.categorical ? dd.orgValue[d[t]] : d[t];
    return val >= filter[t].min && val <= filter[t].max;
};
var argument2 = ["o","2"];
var argument3 = function (kp) {
 callbackArguments.push(arguments) 

    return initialValues[kp.name] != null;
};
var argument4 = 1.6536795487401014e+308;
var argument5 = null;
var argument6 = function (el) {
 callbackArguments.push(arguments) 

    return !fn(el);
};
var argument7 = r_1;
var argument8 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument9 = {"49":5.496703464680538e+307,"893":969,"":595,",_O":"","8.183307137681523e+307":460,"1.4685791385013983e+308":""};
var argument10 = false;
var base_0 = [655,"r",")PC","J$","u",705]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,"r",")PC","J$","u",705]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,"r",")PC","J$","u",705]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,"r",")PC","J$","u",705]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyMined/test89.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)