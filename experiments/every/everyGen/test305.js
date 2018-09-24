





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = {"82":":","403":"","893":893,"":1.2571403592088237e+308,"V":"?","-1":"F"}
base_0[0][6] = null
return a+b-c
};
var argument2 = {"xB":8.568973503424115e+306};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = 1.3123865407992378e+308
base_1[9] = null
base_1[0][0] = {"242":8.590912540765411e+307,"893":"","":"`","1.3721538414359582e+308":"","7.346125426217446e+306":"","5.792529605949434e+307":969,";N":49,"1.510051614881843e+308":""}
return a-b*c
};
var argument4 = r_0;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = null
argument8[122] = ["+2k","(","p","_3"]
return a-b*c
};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = "q"
return a+b-c
};
var argument9 = {"627":59,"-100":783,"e":"gf","":5.356560907402237e+306,"1.3361540715798495e+307":"G","Of":969};
var argument10 = 0;
var base_0 = ["P","5X#hY"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P","5X#hY"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P","5X#hY"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P","5X#hY"]
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
require("fs").writeFileSync("./experiments/every/everyGen/test305.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)