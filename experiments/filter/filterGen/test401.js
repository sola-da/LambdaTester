





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['filter'] = ""
argument3[1.7847438319683965e+308] = 714
argument2['c'] = [783,969,-100,655]
return a-b*c
};
var argument2 = true;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = false
argument5[6] = null
return a/b/c
};
var argument5 = 49;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[403] = 8.423442730664362e+307
base_2[1][0] = ""
return a/b-c
};
var argument8 = r_2;
var argument9 = [122,618,655,618,213,705];
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][2] = -1
base_3[3] = ["ow","ve6","W!`","`","t","NV4","h4i0u%y","@"]
argument12[0] = ["_",783,213,-1,893,893,"Je",893,"u{S"]
return a*b-c
};
var argument11 = null;
var argument12 = ["^",5e-324,627,"2","F"];
var base_0 = ["{","k+","s$|",")","(","(","K","9"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["{","k+","s$|",")","(","(","K","9"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["{","k+","s$|",")","(","(","K","9"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/filter/filterGen/test401.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)