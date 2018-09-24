





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = [5e-324,823,823,82,49,126,403,843,595]
argument2[1] = {}
return a*b*c+d
};
var argument2 = true;
var argument3 = null;
var argument4 = 1.1481630601556134e+308;
var argument5 = ["H","(1W>","^j","v","W","S ","?","T"];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = [893,"X"]
return a/b*c/d
};
var argument7 = {"126":100,"1.3555749636832502e+308":"3aA","":"T","4.894431419864256e+307":"","[e":100};
var argument8 = r_1;
var argument9 = true;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = ["H","2",82]
base_2[8] = ["S","n8","k","["]
argument9 = -100
return a-b/c/d
};
var argument11 = r_2;
var argument12 = r_0;
var argument13 = r_2;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = false
base_3[4] = "7"
argument12[403] = false
return a+b+c/d
};
var base_0 = [823,-1,627,126,59,627,1.7976931348623157e+308,126,783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,-1,627,126,59,627,1.7976931348623157e+308,126,783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,-1,627,126,59,627,1.7976931348623157e+308,126,783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,-1,627,126,59,627,1.7976931348623157e+308,126,783]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test230.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)