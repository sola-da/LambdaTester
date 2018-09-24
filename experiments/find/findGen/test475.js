





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[893] = true
argument2[8.748669805137695e+307] = {"5.182526613252515e+307":9.54938378227275e+307,"X":823,"1.5216846357239185e+308":1.7976931348623157e+308,"Gv":1.302535874115615e+308,"f5O":2.6893041514279987e+306,"F":714,"1.7976931348623157e+308":5.479253058108058e+307}
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[783] = false
return a+b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1] = false
argument3[3.377960715099946e+307] = 1.0985262679902393e+308
argument3[3.377960715099946e+307] = ""
return a-b+c
};
var argument4 = [49];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = {"9":"","460":"lM","@6G":"","Gr":"m"}
argument6['j'] = [893,969,460,618,1.7976931348623157e+308]
return a*b*c
};
var argument6 = "";
var argument7 = r_1;
var base_0 = [618,893,5e-324,-100]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,893,5e-324,-100]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,893,5e-324,-100]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,893,5e-324,-100]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test475.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)