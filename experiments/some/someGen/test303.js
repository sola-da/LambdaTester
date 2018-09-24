





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = true
argument3[1] = null
base_0[2][5e-324] = {"25":"","1.5606212733813629e+308":";","L":""}
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"82":":","403":"","893":893,"":1.2571403592088237e+308,"V":"?","-1":"F"}
base_1[4][8] = null
return a+b-c
};
var argument3 = {"xB":8.568973503424115e+306};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['5L'] = 1.3123865407992378e+308
argument6[1] = null
argument5[5] = {"242":8.590912540765411e+307,"893":"","":"`","1.3721538414359582e+308":"","7.346125426217446e+306":"","5.792529605949434e+307":969,";N":49,"1.510051614881843e+308":""}
return a-b*c
};
var argument5 = r_1;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = null
argument8[6] = ["+2k","(","p","_3"]
argument9 = true
return a-b*c
};
var argument8 = r_3;
var base_0 = [843,122]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,122]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,122]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,122]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test303.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)