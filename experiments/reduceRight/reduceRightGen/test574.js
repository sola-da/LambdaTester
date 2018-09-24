





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[655] = {"0":"_","242":"","823":"","":"","?56":"H","-1":"d","l":"&","1.3031816110071342e+308":""}
base_0[4][1.7976931348623157e+308] = 213
argument2[0] = null
return a+b-c-d
};
var argument2 = 0;
var argument3 = 1.6432080039597222e+308;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['{S'] = {"6":-1,"1.6245603464216341e+308":618,"":"+"}
argument5[627] = {"59":0,"618":100,"1.4652161066718513e+308":6.751188789785484e+307,"6.163232104742726e+307":"","gw":3.15059820363524e+307,"":49,"1.7934737639166999e+308":213,"x":"","8.257529793729112e+307":"vq"}
argument6[0] = ["U>","H","q","}",")","(!G"]
return a*b*c*d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = [126,213,705,-100,157]
return a+b-c*d
};
var argument7 = null;
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[8.575765443877852e+307] = true
base_3[0] = [" B","1G%&","q%Tu","2","c",",","J","5"]
return a+b/c/d
};
var argument10 = "";
var base_0 = [823,655,714,5e-324,969,100,655,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,655,714,5e-324,969,100,655,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,655,714,5e-324,969,100,655,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,655,714,5e-324,969,100,655,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test574.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)