





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['1SHF1'] = 1.4579760491804007e+308
argument1[7.92397107964922e+307] = {"893":1.5158168841420183e+308,"969":"d;","":"#","8.116558975081051e+307":"","4.1011764257273306e+307":""}
return a/b+c
};
var argument2 = "";
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.462967293930506e+307] = ""
argument6[3] = null
argument5[1.9097830510613482e+307] = "J"
return a/b*c
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = ""
argument8['am'] = false
argument8[1.9097830510613482e+307] = {"595":"J","714":25,"893":714,"":"","CrYG<":"","1.5863116278335668e+308":403,"3.292612575355987e+307":460,"7.289582807042712e+305":618,"Z":6.149992616226511e+307,"1.3646313532498489e+308":1.3838122601895359e+308}
return a+b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['$*I'] = false
argument9[3] = "z!"
argument10[1.7976931348623157e+308] = [969,714,627,823,595]
return a-b/c
};
var argument9 = {};
var base_0 = ["^B","W0","*","-","i","w","d3t"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^B","W0","*","-","i","w","d3t"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^B","W0","*","-","i","w","d3t"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^B","W0","*","-","i","w","d3t"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test821.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)