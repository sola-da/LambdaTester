





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['*c'] = false
argument2[25] = {"49":"","157":"D","783":"F","823":"","":157,"-1":"","4.1426054122765786e+307":49}
argument2[403] = ""
return a-b*c*d
};
var argument5 = ["6=","|","VM",")BZJ"];
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['s'] = false
argument6[-1] = 5.497043396538122e+307
argument6[';N'] = [100,460,595,969]
return a+b/c-d
};
var argument9 = "";
var argument10 = {"126":"Y","655":"ta","714":"","843":1.2306903485922698e+308,"1.3336830003882652e+308":9.04593521865747e+307,"":"D$",">N":-100,"-100":"","8.206003418370521e+307":4.806935419746434e+307,"7.013302167347234e+307":"#)c"};
var argument11 = ["E",823,"u93",627,82,25];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7.463432409233234e+307] = {"59":"i","403":"","P":"*","":893}
base_2[1][0] = ""
return a*b*c-d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = ["$i","_","U","PL","[","J","F<","WF[","*o","K"]
return a-b-c*d
};
var argument14 = null;
var argument15 = 1.3357525546169102e+308;
var base_0 = ["q",";&","i9","w","`",")l"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["q",";&","i9","w","`",")l"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["q",";&","i9","w","`",")l"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["q",";&","i9","w","`",")l"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test522.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)