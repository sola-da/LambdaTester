





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[-100] = ["uh#","Z","Hjwkk","N9E","V","kK","YK`iT","s","j","cZw0"]
base_0[7][4] = true
argument2[5] = true
return a-b+c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][7] = 1.7188788317602935e+308
argument6[3.7154103611117224e+307] = ["Q","**,","Vv","&","#","XY4","dR","DgX!`:VM"]
return a/b/c
};
var argument5 = ["9","(mZo@","s","Q","&"];
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = [655,49,213,1.7976931348623157e+308,157,59,126,618,595]
argument8[460] = [-100,"k"]
argument8['c'] = {"RY":1.0019365158136538e+308}
return a/b-c
};
var argument8 = false;
var argument9 = false;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[607] = {"893":""}
argument11['A'] = ""
argument11[3.0481490052276395e+306] = {"157":"","":3.804387622672547e+307,"V":"Nq","1.1258515951489556e+308":9.001089009275337e+306,"!Oz7":1.4086978449650813e+308}
return a+b+c
};
var argument11 = 823;
var argument12 = false;
var base_0 = [843,595,969,893,403]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,595,969,893,403]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,595,969,893,403]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,595,969,893,403]
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
require("fs").writeFileSync("./experiments/filter/filterGen/test948.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)