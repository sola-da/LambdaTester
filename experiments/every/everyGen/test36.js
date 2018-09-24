





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = ""
argument2[403] = null
return a*b*c
};
var argument2 = 9.781462427694683e+306;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = ""
return a+b*c
};
var argument4 = "5-";
var argument5 = {"5.421630822450265e+307":607,"2.7394651084020763e+307":4.149224908001177e+307,"-1":8.187572699465457e+307,"":7.015768058416175e+307,"6.656064414834649e+307":49,"-":5.990558374629523e+307,"'":1.639288855347421e+308};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = true
argument8 = true
argument7 = true
return a-b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = null
base_3['length'] = 823
base_3[7] = {"213":403,"627":3.1604300089476386e+305,"893":"|","4.915245076762977e+307":"","":"8","&A0":"8","S":"","`-":""}
return a/b/c
};
var argument8 = null;
var argument9 = true;
var base_0 = ["N%@fs",-1,";_","=",":",25,655,"N"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N%@fs",-1,";_","=",":",25,655,"N"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N%@fs",-1,";_","=",":",25,655,"N"]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N%@fs",-1,";_","=",":",25,655,"N"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test36.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)