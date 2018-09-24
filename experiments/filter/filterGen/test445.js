





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['c'] = 5.517023573525348e+307
argument2[1] = 2.5897883651109747e+307
argument2['wIs'] = 82
return a-b/c
};
var argument2 = r_0;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[714] = {"5.869340301546033e+307":2.1280896016417002e+307,"":"","bGV":"","Y":403,"1.4932404858227425e+308":"9"}
argument4 = null
return a+b*c
};
var argument5 = null;
var argument6 = 4.798535479561989e+307;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7] = ""
base_2[8][3] = 1.0233452153138389e+308
return a*b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[5] = 655
return a+b/c
};
var argument9 = {"5":1.4808582231728431e+308,"893":0,"":"yP]","3M{vx9g":823,"1.4599590254315292e+308":"sy'"};
var argument10 = false;
var base_0 = [82,-1,213,893,59,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,-1,213,893,59,595]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,-1,213,893,59,595]
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,-1,213,893,59,595]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test445.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)