





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['LK'] = ["G","3","K"]
base_0[1][0] = null
argument2['a8r['] = ""
return a/b*c
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['LK'] = 3.762195770259045e+307
argument6[3] = 1.740848899731506e+308
return a/b-c
};
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3][6] = ""
base_2[3][1.7261030733891165e+308] = {}
return a-b*c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[126] = null
return a*b-c
};
var argument9 = null;
var argument10 = true;
var base_0 = [705,714,213,655,655,618,893,49,460,122]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,714,213,655,655,618,893,49,460,122]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,714,213,655,655,618,893,49,460,122]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,714,213,655,655,618,893,49,460,122]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test964.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)