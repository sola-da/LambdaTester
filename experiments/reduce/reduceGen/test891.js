





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[8] = true
argument2[1.4205726959827606e+308] = false
argument2[0] = false
return a*b/c+d
};
var argument2 = "3QF7?";
var argument3 = [607,"h"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2.1869172855352885e+307] = ["9","1L","dN","B","v","Z+jt0[$","z"]
return a*b*c/d
};
var argument5 = null;
var argument6 = true;
var argument7 = r_2;
var argument8 = false;
var argument9 = true;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = null
argument9[0] = {}
return a+b*c/d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[126] = null
return a*b+c*d
};
var argument12 = r_0;
var argument13 = r_3;
var base_0 = [618,403,82,1.7976931348623157e+308,403,213,25,82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,403,82,1.7976931348623157e+308,403,213,25,82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,403,82,1.7976931348623157e+308,403,213,25,82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,403,82,1.7976931348623157e+308,403,213,25,82]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test891.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)