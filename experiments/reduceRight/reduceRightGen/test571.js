





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = 7.528372552325541e+307
return a-b/c/d
};
var argument2 = r_0;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['8('] = null
argument4[3] = "!"
return a*b/c/d
};
var argument4 = "";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[-1] = null
base_2[4][3] = false
argument7[4] = [126,213,157,157,100,0,627]
return a*b/c+d
};
var argument6 = "b";
var argument7 = "";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['{S'] = "C8"
argument10[4] = 1.173132192597502e+308
base_3 = [0,627,595]
return a*b+c-d
};
var argument9 = "J^";
var base_0 = ["9","i","_s","7&3","YI89P)","&","#6","`["]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9","i","_s","7&3","YI89P)","&","#6","`["]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9","i","_s","7&3","YI89P)","&","#6","`["]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9","i","_s","7&3","YI89P)","&","#6","`["]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test571.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)