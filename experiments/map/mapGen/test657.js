





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3.5329845145600404e+307] = 157
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][2][5] = ["c%","O","3&9`I","Z"]
return a*b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = [25,126,"RZ"]
argument5 = null
argument5[3] = ["%:o>","Y","_xW=",")Ni","s","f","dC"]
return a+b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.0546776681946723e+308] = 823
argument5[82] = ""
return a/b+c
};
var argument5 = ["4","vOYRX@mI;","#","[","L:;","HkM"];
var base_0 = ["+v","Xlg","1","r","e","R"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+v","Xlg","1","r","e","R"]
var r_3= undefined
try {
r_3 = base_3.map(argument4,argument5)
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
require("fs").writeFileSync("./experiments/map/mapGen/test657.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)