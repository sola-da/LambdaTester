





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = 4.183438880573497e+307
return a+b+c*d
};
var argument2 = {"969":"","2.0595641748315708e+307":"q7","8.635089868888401e+306":122,"":"","JP":1.3182229800068151e+308,"6.303014590793948e+307":"*%","1.5496618774055533e+308":"%"};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = 157
return a/b*c/d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = 1.7494974035988604e+308
base_2[4] = false
argument5[25] = {"242":"","j":"","5e-324":"","":"v","1.141925063070592e+308":""}
return a*b-c*d
};
var argument5 = r_0;
var argument6 = r_2;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = [-1,705,25,714,714,157,242]
argument9['T'] = {"49":"","823":1.0780557628008789e+308,"893":1.686342398136121e+308,"":"","3.7596585316020823e+307":"","hV":"","1.2655361311707028e+308":4.738224593074064e+307}
return a+b+c*d
};
var argument8 = {"655":""};
var argument9 = false;
var base_0 = [403,"3","(Y"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,"3","(Y"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,"3","(Y"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,"3","(Y"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test366.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)