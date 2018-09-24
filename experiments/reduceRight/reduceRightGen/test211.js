





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = null
base_0[8] = "0"
argument2[1] = null
return a*b-c+d
};
var argument2 = ["`2",823,"8s3-","S",460,"q"];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[25] = true
base_1[6] = ""
return a/b*c+d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = false
argument6[0] = ["6`0","+|*","i","c5","2p","<","w","s"]
argument6[3] = {"714":9.826683286098724e+306,"":82,"1.4241230465047188e+308":"","O":1.6812128612360904e+308,"1.2711241329015938e+308":"}","rJ#":1.2985563183802312e+307}
return a/b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['!j'] = false
argument7[6] = null
base_3[6][2] = "LVy"
return a+b-c/d
};
var argument6 = [25,126,-100,-1,595,122];
var base_0 = [213,655,82,783,893,969,607,627]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,655,82,783,893,969,607,627]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,655,82,783,893,969,607,627]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,655,82,783,893,969,607,627]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test211.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)