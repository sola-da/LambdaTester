





var callbackArguments = [];
var argument1 = function (result, currentFunction) {
 callbackArguments.push(arguments) 

    return currentFunction(result);
};
var argument2 = {"R":""};
var argument3 = function (sum, value) {
 callbackArguments.push(arguments) 

    return sum + value;
};
var argument4 = false;
var argument5 = false;
var argument6 = function (target, key) {
 callbackArguments.push(arguments) 

    target[key] = source[key];
    return target;
};
var argument7 = function (prev, current, i, arr) {
 callbackArguments.push(arguments) 

    return doMerge(prev, current, true).tree;
};
var argument8 = false;
var argument9 = null;
var base_0 = [618,403,"K"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,403,"K"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,403,"K"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,403,"K"]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test756.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)