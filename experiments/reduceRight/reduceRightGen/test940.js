





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][2] = {"1.0097971884014152e+308":"","-1":"","":1.1239170273746428e+308}
base_0[0][3] = [25,618,627,25,893,595,595,783]
argument3[126] = true
return a+b-c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[783] = 4.412992988042423e+307
argument3[0] = 1.08011292018638e+308
return a+b/c+d
};
var argument3 = r_0;
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.4250811791542279e+308] = ""
argument6[8.575765443877852e+307] = false
return a*b+c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = true
base_3[2][1] = ["9",1.7976931348623157e+308,157,"; L",5e-324,"RI",0,618,-1]
return a+b/c+d
};
var base_0 = [893,59,627,59,59,213,460,122,100,126]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,59,627,59,59,213,460,122,100,126]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,59,627,59,59,213,460,122,100,126]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,59,627,59,59,213,460,122,100,126]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test940.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)