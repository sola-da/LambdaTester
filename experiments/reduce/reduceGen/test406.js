





var callbackArguments = [];
var argument1 = [1.7976931348623157e+308,25,783,126];
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = null
argument1[1] = {"618":893,"":"","AoH":1.538554543827242e+308,")":893,"-100":5e-324,"1.4761346513869367e+308":"7J","7.833574325866001e+307":607,"1.1440206952637623e+308":4.960694522820365e+306}
argument2[';N'] = null
return a*b*c/d
};
var argument5 = false;
var argument6 = false;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = true
base_1[0][9.12287810829114e+307] = "8"
return a*b+c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1] = 1.1356601735829559e+308
return a+b*c*d
};
var argument10 = {"59":"","82":1.2646588471725252e+308,"823":3.360653466456975e+307,"":"xA","2.0668196639834492e+306":"","-1":403,"`":126,"1.7976931348623157e+308":"H`0m","6!":" ","PF":126};
var argument11 = {"1.178563648561699e+308":"U<"};
var argument12 = r_0;
var argument13 = true;
var argument14 = false;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[2] = [59,242,242]
base_3['length'] = 126
argument13[-1] = {"157":"ty","655":82,"783":82,"":"","6.530099253087799e+307":"","-UbJ":"7","1.6761648762564886e+308":"YfD","3.932482229458257e+307":618,"S":"+"}
return a/b/c*d
};
var base_0 = [")",242,403,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")",242,403,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")",242,403,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")",242,403,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test406.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)