





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = "$'"
base_0[0][5e-324] = false
argument2['c'] = true
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = {"82":"(","843":1.5109538778533692e+308,"?!":"Va","":"","1.7976931348623157e+308":1.5123437245372272e+308,"9.003639125424667e+307":"","p":82,"G":"","7.110925188542419e+306":"","m1":"'"}
return a+b+c
};
var argument3 = {"460":655,"618":1.3941262271352285e+308,"":823,"1.1045337170220023e+308":627,"5.602305854037741e+307":242,"X`":"Y"};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.0481490052276395e+306] = true
return a-b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['A'] = null
base_3[8][3] = null
base_3[5] = [82,843,823,-100,627,100,655]
return a-b-c
};
var argument7 = null;
var base_0 = ["xJ","E","]","*","k","(","P","w","G"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["xJ","E","]","*","k","(","P","w","G"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["xJ","E","]","*","k","(","P","w","G"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test402.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)