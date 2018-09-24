





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = ["r","D","Y","F","p=m",">#1jt","5Rv%","K"]
argument3[157] = ["_","7","5"]
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7] = {"8":"S","618":"ZS","655":122,"1.1045113070740879e+308":1.8569446598228662e+307,"8.280517750006198e+307":"","":-100,"1.7656732949653183e+308":"","3.3261007857046843e+307":"","7.50579636264923e+307":1.011001540441088e+308,"BA":""}
return a-b+c
};
var argument3 = true;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 893
base_2[2] = 213
base_2[6][3] = null
return a/b*c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.208837311680636e+307] = null
argument8[0] = null
argument8[9.869573703797622e+307] = {"595":1.2955195610004748e+308,"627":"#","`O@;`w":"","6.523030029376826e+307":705}
return a/b-c
};
var base_0 = [627,-1,59,-100,122,49,783,49,403]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,-1,59,-100,122,49,783,49,403]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,-1,59,-100,122,49,783,49,403]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test939.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)