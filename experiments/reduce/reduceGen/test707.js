





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[627] = null
argument2[460] = null
base_0 = 714
return a*b+c/d
};
var argument2 = {"627":"z","969":5e-324,"2.1370187370417755e+307":82,"":"`42","1.655437291553218e+308":"","[":8.50190692007445e+307};
var argument3 = {"403":969,"969":59,"8.349790021011171e+307":1.002040230507018e+308,"1.1881888464115996e+308":"f-m","KX":"","1.611056866022973e+308":1.3618707999928265e+308};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[213] = -100
return a*b/c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[213] = null
argument6[2] = null
argument7[1] = null
return a+b/c*d
};
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[627] = "a"
base_3[5] = {"460":242,"618":"9$1=y:","":"C","1.6811010596253318e+308":"","1.2947024915568194e+308":"(RH","e":2.3662647370926807e+307,"dhx":4.210349757433377e+307}
argument10['HMm'] = ""
return a/b*c/d
};
var argument9 = {"122":714,"":"",",":1.0754487419500405e+308};
var base_0 = [49,893,100,618,783,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,893,100,618,783,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,893,100,618,783,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,893,100,618,783,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test707.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)