





var callbackArguments = [];
var argument1 = 242;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = {"157":823,"893":1.3851283718031529e+308,"":"","1.0521577337596975e+308":"","4.65254751800634e+307":""}
argument2[4] = null
argument3[5] = ""
return a+b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = [607,49,242,100,403,82,25,213,655]
return a/b-c-d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = {"1.5152289258026655e+308":"","":"","1.7105460582225284e+308":2.1262996664607829e+307,"!":"AX)}<"}
argument9 = {"714":3.171163362332665e+307,"1.167671309534041e+308":843,"6.97174555975969e+307":705,"8.902180178961623e+307":"]","":"","6.89089158998583e+307":"","5.1690061248226e+306":",","1.7830572182693232e+308":122}
return a*b/c*d
};
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = true
base_3[0][3] = false
return a*b/c+d
};
var argument10 = {"8":1.2136178717366444e+307,"25":893,"l":595,"":1.0030007322455762e+307,"4.71079454948321e+307":5.244331368207548e+307,"W,":"Y","1.4038683354166015e+308":"]nx"};
var argument11 = r_3;
var base_0 = [627,403,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,403,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,403,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,403,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test87.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)