





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.738403780925446e+308] = null
argument2['w'] = [-100,595,893,843,595,607,213,82]
argument3 = null
return a+b/c-d
};
var argument2 = "a";
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = null
argument3[1] = 1.6291745776459272e+308
base_1[4][3] = 1.0651581949276883e+308
return a*b-c*d
};
var argument4 = r_1;
var argument5 = 7.392441825107246e+306;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['T'] = null
return a/b/c/d
};
var argument7 = ["$g@","$",">i&]q","?b","}M("];
var argument8 = 1.2196116951961542e+308;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['!j'] = 2.729912273972732e+307
argument10['y'] = null
return a/b+c/d
};
var argument10 = null;
var argument11 = 7.503958240052756e+307;
var base_0 = [100,460,403,655,595]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,460,403,655,595]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,460,403,655,595]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,460,403,655,595]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test333.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)