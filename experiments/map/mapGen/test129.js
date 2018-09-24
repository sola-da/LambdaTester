





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['A'] = "-%"
return a*b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = false
base_1[0] = ""
base_1[3][2] = 7.614019215775479e+307
return a*b-c
};
var argument4 = 1.2916830103566816e+308;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = {"0":7.601630792837087e+307,"595":"","783":126,"1.588545342662476e+308":"","a":1.5374837878717174e+308,"":"'","-100":"","1.5839152669485746e+307":"T"}
argument6[82] = [1.7976931348623157e+308,213,82,969,1.7976931348623157e+308,25]
base_2[4] = null
return a*b/c
};
var argument6 = r_0;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = 460
argument10[157] = [823,100]
argument9[4] = "c"
return a-b-c
};
var argument9 = [25,-1,"8","iG)@5_P","@","nKk:=","&"];
var argument10 = false;
var base_0 = [59,714,213,460]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,714,213,460]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test129.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)