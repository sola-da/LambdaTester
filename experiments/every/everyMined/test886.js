





var callbackArguments = [];
var argument1 = function (elem) {
 callbackArguments.push(arguments) 

    return superset.indexOf(elem) !== -1;
};
var argument2 = function (dep) {
 callbackArguments.push(arguments) 

    return list[dep];
};
var argument3 = {"-1":"!Q","":1.1286026536380947e+307,"[":"#I{g"};
var argument4 = function (el) {
 callbackArguments.push(arguments) 

    return !fn(el);
};
var argument5 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument6 = ["A","a-7(",242,"+m",100,242,"^","hEky"];
var base_0 = ["&L8;","|_",460,969,"W"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&L8;","|_",460,969,"W"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&L8;","|_",460,969,"W"]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&L8;","|_",460,969,"W"]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyMined/test886.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)