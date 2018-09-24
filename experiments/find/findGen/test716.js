





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[893] = true
base_0[7] = true
argument3['LK'] = {"607":"1","(T":1.3316249150486186e+308,"u":"O1","1.5973128857557001e+308":5.525545345907505e+307,"":"","1.386007913996676e+308":2.649335474487759e+307,"1.0440502740346215e+308":""}
return a-b/c
};
var argument2 = {};
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = null
argument6['AA@'] = ""
argument6['AO?'] = 3.4159057952078626e+307
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = ["=","{","S>n","R","Vn",",","C"]
return a-b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[893] = 1.4825678846369666e+308
argument7[627] = null
base_3[3] = false
return a-b/c
};
var argument7 = r_0;
var argument8 = ["^",122,"i",126,"&^OC","j",595,-1,"sg"];
var base_0 = [0,49,49,823,618]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,49,49,823,618]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,49,49,823,618]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,49,49,823,618]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test716.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)