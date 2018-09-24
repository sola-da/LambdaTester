





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['{S'] = 6.548403973961356e+307
argument2[6] = [595,627,823,49]
argument2[3.8120440085202614e+307] = [460,59,705,0,783,705,-1,627,25]
return a*b/c-d
};
var argument2 = r_0;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[655] = [100]
return a/b-c/d
};
var argument4 = {"59":"","T":"y","1.2562573732319027e+308":1.4134018990668047e+308,"]":"&v"};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = true
base_2[6][2] = {"8":"N![qI]","82":893,"627":1.594598724204634e+308,"823":"","":655,"|u":"|]","u=E":"",")":0,"5e-324":-1,"3.0005130490282463e+307":""}
argument6[627] = null
return a-b/c-d
};
var argument6 = {"0":25,"":403};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['!j'] = {"157":82}
argument9[0] = {"RQQ":"","":627}
argument8['F2nCX>6'] = ""
return a-b-c-d
};
var base_0 = ["vx9g","]","-","J","GY][:I","c"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["vx9g","]","-","J","GY][:I","c"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["vx9g","]","-","J","GY][:I","c"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["vx9g","]","-","J","GY][:I","c"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test452.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)