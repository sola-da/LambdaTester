





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = null
argument2[122] = "P!"
return a+b*c
};
var argument2 = "";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = null
argument6[0] = 655
return a/b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = ["5","n6","=2]BO"]
argument7[122] = {"783":7.278273537316465e+307,"wFFdoqKv":1.7924977915510413e+308,"1.5801738521493218e+308":""}
argument6[403] = true
return a+b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[403] = {"403":1.2048711972595964e+308,"607":1.7378745353712868e+307,"":"$"}
base_3[0][1] = {"":242,"1.3325951852627763e+308":59,"[I":"","7.061621472814037e+307":"","2.4403667801340044e+307":59}
argument8['sJRZP'] = 1.6273774716233763e+308
return a*b*c
};
var argument8 = true;
var argument9 = r_2;
var base_0 = [0,655,655,655,893,0,0,59,460,126]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,655,655,655,893,0,0,59,460,126]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,655,655,655,893,0,0,59,460,126]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,655,655,655,893,0,0,59,460,126]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test509.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)