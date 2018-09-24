





var callbackArguments = [];
var argument1 = function (elem) {
 callbackArguments.push(arguments) 

    return elem.selected;
};
var argument2 = function (innerValue, innerKey) {
 callbackArguments.push(arguments) 

    return '' + innerKey + ': ' + innerValue + ';';
};
var argument3 = false;
var argument4 = {"126":213,"":"","1.1883861440700653e+308":5.951858978684736e+307};
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    return item[methodName].apply(item, args);
};
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    return scale.invert((v - b) * j / k + a);
};
var argument7 = {"403":59,"[":"","'":"","":"|","6.212477823489754e+307":"-&","U3":"","1.703102139996846e+308":"","1.1689206600940957e+308":823,"5.935671139349168e+307":783};
var argument8 = false;
var base_0 = ["]f"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]f"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]f"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test422.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)