





var callbackArguments = [];
var argument1 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 1 && el.char === 'A';
};
var argument2 = false;
var argument3 = null;
var argument4 = function (enumType) {
 callbackArguments.push(arguments) 

    return enumType.attributes.some(function (attr) {
        return attr.name === 'Name' && attr.value === baseTypeName;
    });
};
var argument5 = false;
var argument6 = false;
var argument7 = function (alarm) {
 callbackArguments.push(arguments) 

    return alarm.name === alarmName;
};
var argument8 = null;
var argument9 = null;
var argument10 = function (frame) {
 callbackArguments.push(arguments) 

    if (/UncoatedModuleInstantiator/.test(frame))
        return true;
    stack.push(frame);
};
var argument11 = false;
var base_0 = [0,49,607,"z","#",0,"nA",823,126]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,49,607,"z","#",0,"nA",823,126]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,49,607,"z","#",0,"nA",823,126]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,49,607,"z","#",0,"nA",823,126]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someMined/test206.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)