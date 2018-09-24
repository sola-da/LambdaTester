





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['f!BO'] = 1.4579760491804007e+308
base_0[2][5] = {"893":1.5158168841420183e+308,"969":"d;","":"#","8.116558975081051e+307":"","4.1011764257273306e+307":""}
return a/b+c
};
var argument2 = "";
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[9.551053197482062e+307] = ""
argument5[4] = null
argument4[3] = "J"
return a/b*c
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['k<7bJ'] = ""
base_2[5][1] = false
base_2[3][3] = {"595":"J","714":25,"893":714,"":"","CrYG<":"","1.5863116278335668e+308":403,"3.292612575355987e+307":460,"7.289582807042712e+305":618,"Z":6.149992616226511e+307,"1.3646313532498489e+308":1.3838122601895359e+308}
return a+b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6] = false
argument10['V'] = "z!"
argument9[157] = [969,714,627,823,595]
return a-b/c
};
var argument9 = {};
var base_0 = ["^B","W0","*","-","i","w","d3t"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^B","W0","*","-","i","w","d3t"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^B","W0","*","-","i","w","d3t"]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^B","W0","*","-","i","w","d3t"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test819.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)