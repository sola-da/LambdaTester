





var callbackArguments = [];
var argument1 = function (object, digit) {
 callbackArguments.push(arguments) 

    object[digit] = 'invalid';
    return object;
};
var argument2 = ["6","<"];
var argument3 = function (sum2, datum) {
 callbackArguments.push(arguments) 

    var value = datum.atoms[dimName].value;
    isAbs && 0 > value && (value = -value);
    return null != sum2 ? sum2 + value : value;
};
var argument4 = function (pv, cv, ix) {
 callbackArguments.push(arguments) 

    return validateTarget(cv, ix) && pv;
};
var argument5 = false;
var argument6 = false;
var argument7 = function (obj, item) {
 callbackArguments.push(arguments) 

    obj[item] = 1;
    return obj;
};
var argument8 = false;
var argument9 = false;
var base_0 = [" ","0","8B+P","n","gFZfEi","M"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [" ","0","8B+P","n","gFZfEi","M"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test370.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)