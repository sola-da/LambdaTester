





var callbackArguments = [];
var argument1 = function cb_some(r) {
 callbackArguments.push(arguments) 

    return deepEqual(r, rule);
};
var argument2 = true;
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    return typeof item == 'number' || item && !item.hasOwnProperty('x');
};
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return typeof item == 'number' || item && !item.hasOwnProperty('x');
};
var argument5 = function (alarm) {
 callbackArguments.push(arguments) 

    return alarm.name === alarmName;
};
var argument6 = null;
var argument7 = true;
var base_0 = [-1,705,783,213,607]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,705,783,213,607]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,705,783,213,607]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,705,783,213,607]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someMined/test167.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)