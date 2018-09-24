





var callbackArguments = [];
var argument1 = null;
var argument2 = 6.168321912223356e+306;
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = {"E":"=O","6.063786556871412e+307":"O"}
return a*b/c/d
};
var argument5 = true;
var argument6 = true;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = "u"
argument6[1] = [1.7976931348623157e+308,595]
base_1[1] = {"122":2.783619462074161e+306,"-100":9.016319869365483e+307,"+":"{C","3.503421742645545e+307":1.6809439496543961e+308,"1.6451471914833008e+308":4.2537831879147367e+307,"":"?"}
return a+b*c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = true
base_2[0] = null
argument9 = {"157":"","":"Kh|tD","9.97687017805331e+307":59,"uC":82,"1.6545196329426392e+308":"<","sE":6.076629740492102e+307,"1.7926445566380237e+308":"r{<"}
return a+b+c*d
};
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12 = [655,607,893,460,25,-100,0,627]
base_3['length'] = ""
return a*b*c*d
};
var base_0 = [705,655,59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,655,59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,655,59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,655,59]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test867.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)