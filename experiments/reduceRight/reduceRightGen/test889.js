





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = ["6","OMD",59,893,"W",-100,"w"]
argument2[1.738403780925446e+308] = 4.903819867244929e+307
return a+b-c+d
};
var argument2 = r_0;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6][2] = {}
base_1[2] = false
return a*b*c/d
};
var argument4 = {"82":714,"122":0,"843":"","^":"n","1.3990548184007051e+308":"8","H":82,"W?srKu":1.1005209314192564e+308,"1.066742122462946e+308":"&^"};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[213] = [843,25,893,655,25,-1,49,157]
argument7[4] = 3.444196518302562e+307
return a/b/c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = "!"
return a+b*c-d
};
var base_0 = ["-^XA","#Tnn","4","c6y%Bp","h","!Ec"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-^XA","#Tnn","4","c6y%Bp","h","!Ec"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-^XA","#Tnn","4","c6y%Bp","h","!Ec"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-^XA","#Tnn","4","c6y%Bp","h","!Ec"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test889.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)