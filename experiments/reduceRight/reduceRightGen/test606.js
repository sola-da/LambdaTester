





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = 1.0322529994931313e+308
argument3[5] = {"59":"H","783":49,"843":"2","1.5930346224431764e+308":5.459674254979266e+307,"P&":"y","":595,"5.062647675476955e+307":157,"K?`":4.788154478797263e+307,"8.639664788900972e+307":""}
argument2[627] = null
return a*b*c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = null
argument3[1.738403780925446e+308] = 8.472755545423463e+307
argument3['y'] = [969,"]","f",595,460]
return a-b-c*d
};
var argument3 = r_0;
var argument4 = [100,893];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = {"1[h":"{","8T":"","8th":"","":"4","3.4980026463472526e+306":783,"2.9427674006531924e+306":1.1117739039330244e+306}
argument6['{S'] = 242
return a-b*c+d
};
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[8.575765443877852e+307] = {"705":9.021614970325087e+307,"1.328694720461844e+308":157,"":3.109534700875864e+307,"8|^b":242,"1.109053246743246e+308":"lOl","k<7bJ":82,"9.61940088002199e+307":"^?","9.930730003780778e+306":"","b":100}
base_3[0][2] = {"100":893}
argument8[7] = ""
return a+b/c+d
};
var argument8 = 157;
var argument9 = [0,714,655,627,0,618];
var base_0 = [595,-100,783,823,49,59,25,595,1.7976931348623157e+308,843]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,-100,783,823,49,59,25,595,1.7976931348623157e+308,843]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,-100,783,823,49,59,25,595,1.7976931348623157e+308,843]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,-100,783,823,49,59,25,595,1.7976931348623157e+308,843]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test606.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)