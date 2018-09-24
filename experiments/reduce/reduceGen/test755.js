





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][9.12287810829114e+307] = null
return a*b*c/d
};
var argument2 = true;
var argument3 = true;
var argument4 = true;
var argument5 = true;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.1532786076532189e+308] = ""
argument4[9] = {}
base_1[2][0] = "5t"
return a-b-c/d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[9.331954948603684e+307] = true
return a*b-c+d
};
var argument9 = r_2;
var argument10 = true;
var argument11 = true;
var argument12 = [783,5e-324,-100,1.7976931348623157e+308,213];
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[3] = {"655":"T3","":"}>"}
argument12['HMm'] = {"618":"","705":82,"5.233304421650305e+306":893,";":893,"":4.716166369702351e+307,"1.7960434122986908e+308":1.5825526022489965e+307,"9.709555941661938e+307":49,"4.127718982296653e+307":1.4752514818342867e+308,"c":"E[C"}
argument11[-1] = 1.4908931224236945e+308
return a+b*c-d
};
var base_0 = [403,969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,969]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test755.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)