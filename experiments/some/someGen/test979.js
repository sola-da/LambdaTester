





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['5L'] = null
base_0[1][2] = null
argument3['n,5s@s'] = "_K"
return a-b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = false
base_1[9] = ["YT","O","^"]
return a-b+c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = [59,627]
argument6[2] = "l!t"
argument5[3] = null
return a/b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][1] = [59,705,-100,893,82]
base_3[0] = {"460":607,"627":6.489802181441092e+307,"`":"","Tx":1.7759504088685877e+308,"A*g?":"","4.3574349526929597e+307":-100,"1.2493350857613284e+308":893,"zxZ":655,"_G":4.54475777833849e+307}
return a*b-c
};
var argument8 = null;
var argument9 = null;
var base_0 = ["bEV3",25,655,823,"f{",655,242,"w"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["bEV3",25,655,823,"f{",655,242,"w"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["bEV3",25,655,823,"f{",655,242,"w"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["bEV3",25,655,823,"f{",655,242,"w"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test979.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)