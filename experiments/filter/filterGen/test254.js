





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][2] = ""
argument2[0] = [213,783,893,82]
return a+b+c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = 157
argument5 = {"213":618,"893":"","9.52678891024765e+307":"","R":705,"2.8934618432865473e+307":4.546263839282809e+307,"1.7976931348623157e+308":"!","F":"","x":"6|"}
return a/b/c
};
var argument5 = 8.52674926281674e+307;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1.3434821406183095e+308] = 893
argument9[1] = true
argument8 = -1
return a*b*c
};
var argument8 = {"607":"","618":714,"6.503910955692737e+307":1.7935118346983574e+308};
var argument9 = [0,618,157,823,59,-100,1.7976931348623157e+308,595,-100];
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3.377960715099946e+307] = 823
argument11[5] = [595,122,82]
argument11 = 122
return a-b/c
};
var argument11 = true;
var argument12 = 595;
var base_0 = ["D","2","1","v6","t","8o","tv","V","gF"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["D","2","1","v6","t","8o","tv","V","gF"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["D","2","1","v6","t","8o","tv","V","gF"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["D","2","1","v6","t","8o","tv","V","gF"]
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test254.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)