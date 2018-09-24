





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.0481490052276395e+306] = null
base_0[2] = 1.5018022368003685e+307
base_0[9] = ["5","n7zM41l6","8t","g`","#"]
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3.0481490052276395e+306] = ""
return a+b+c
};
var argument3 = true;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = {"403":59,"460":1.1975773311661912e+308,"5.343721425474771e+307":9.035318497379853e+307,"01":100,"":"","O":1.7705134176985786e+308,"2.7794592975097733e+307":1.2960284157390719e+308,"1.1893031039768922e+308":"k'","1.6306166461012328e+308":""}
return a+b+c
};
var argument6 = true;
var argument7 = 1.2270153594332056e+308;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = true
argument9 = {"969":"M*","s":-100,"1.4025581202546616e+308":5.695019928134125e+306,"":618,"Ytf":"","1.5324439755283366e+308":5.999259864016606e+307,"aa":""}
argument9[0] = {"25":1.1707740163161644e+308,"460":100,"":""}
return a+b-c
};
var argument9 = null;
var base_0 = [783,49,-100,893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,49,-100,893]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test64.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)