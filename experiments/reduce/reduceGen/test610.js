





var callbackArguments = [];
var argument1 = 1.5130063272222901e+308;
var argument2 = 2.0695450538454497e+306;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = [783,0,783]
base_0[0][3] = null
return a/b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['*c'] = {"]":595,"1.6430897657405468e+307":1.417031797639613e+308}
argument7[59] = [",H4","[",607,59,"`",100,0]
argument7['HMm'] = {"126":"","]0J":"%","4.7712927100008365e+306":714,"":"B","!":">|y","7e":8.263688646196499e+307}
return a+b+c/d
};
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = true
base_2[7] = [242,122,618,1.7976931348623157e+308,126,0,607]
base_2 = [213,893,843,49,157]
return a-b/c-d
};
var argument8 = true;
var argument9 = r_3;
var argument10 = true;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2.1869172855352885e+307] = {"":"&","pT3":"C","*":1.7596158942994666e+308,"a|h":"","1.6145275688704083e+308":"","&P2#-<":"","{P":1.3700902568560692e+308,"aNt%1QF":126,")":6.12734879060611e+307}
argument10[627] = {"213":3.075576655306215e+307,"8.059629690163783e+307":5.691789381167263e+307,"-100":0}
return a*b*c/d
};
var base_0 = [213,655,714,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,655,714,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,655,714,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,655,714,-1]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test610.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)