





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = null
argument1 = [-1,100,783,126]
return a/b+c
};
var argument2 = [783,403,82,893,157,157,213,893,893,783];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.4570946481947045e+308] = 1.7788811567151702e+308
argument5[1] = {"783":"","893":5e-324,"9.865640384490967e+307":705,"1.10266080449988e+308":705,",":6.560056908477075e+307,"":"","1.647311620807208e+308":"","L":"P"}
argument4[7] = 460
return a*b/c
};
var argument4 = "";
var argument5 = 122;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.2421645642809447e+308] = "_sT^"
argument7['am'] = "k$hl(pd"
return a+b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = false
return a-b*c
};
var argument8 = null;
var argument9 = false;
var base_0 = [82,59,213,"R#",595,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,59,213,"R#",595,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,59,213,"R#",595,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,59,213,"R#",595,460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test856.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)