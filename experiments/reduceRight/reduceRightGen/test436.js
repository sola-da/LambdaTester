





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.575765443877852e+307] = {"126":1.5101735367945765e+308,"403":2.3654017720433456e+307,"":1.1059853882503978e+308,"1.072222773573731e+308":213,"a":843,"1.6104452951808922e+308":2.0192928228433286e+306,"8.691391245139505e+307":595,"1.7976931348623157e+308":"@"}
argument3['8('] = false
return a/b+c-d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = null
return a*b/c-d
};
var argument4 = true;
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[126] = {"1.0370899397672074e+307":126,"":1.8581986932630192e+307,"1.8700611047696698e+307":""}
base_2[0][0] = "m-"
return a*b-c-d
};
var argument7 = [618,460,893,655,157];
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = "m&oQ"
return a+b-c/d
};
var argument10 = true;
var argument11 = true;
var base_0 = ["hH{","a","FUm","Z","o","a","R"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["hH{","a","FUm","Z","o","a","R"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["hH{","a","FUm","Z","o","a","R"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["hH{","a","FUm","Z","o","a","R"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test436.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)