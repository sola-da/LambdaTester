





var callbackArguments = [];
var argument1 = true;
var argument2 = "";
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['l&'] = 618
argument3['*c'] = "7"
base_0[0][4] = 59
return a/b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = [122,25,49,0,714]
argument7[2] = " P"
argument7[4] = null
return a*b-c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['*c'] = ""
return a*b*c/d
};
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"59":"","618":82,"":">","b":"","1.6432652571034255e+308":1.7142051397504965e+307,"R":"d^","6.92041497721512e+307":"M","1.2306189149315376e+308":"","][yonw":""}
argument8[0] = {"157":"","":7.926222506135074e+307}
return a/b/c/d
};
var base_0 = [122,"j&%K3sN",618,5e-324,"vE"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"j&%K3sN",618,5e-324,"vE"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"j&%K3sN",618,5e-324,"vE"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"j&%K3sN",618,5e-324,"vE"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test846.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)