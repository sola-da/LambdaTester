





var callbackArguments = [];
var argument1 = function (output, guest) {
 callbackArguments.push(arguments) 

    guest = extend({}, guest, { mealOptions: options.hash.meals });
    return output + options.fn(guest);
};
var argument2 = false;
var argument3 = true;
var argument4 = function (target, key) {
 callbackArguments.push(arguments) 

    target[key] = source[key];
    return target;
};
var argument5 = r_0;
var argument6 = function (prev, cur) {
 callbackArguments.push(arguments) 

    return prev.concat(cur);
};
var argument7 = r_0;
var argument8 = "IV";
var argument9 = function (count, op) {
 callbackArguments.push(arguments) 

    return count + op.getLength();
};
var argument10 = r_1;
var argument11 = null;
var base_0 = [705,655,969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,655,969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,655,969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,655,969]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test242.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)