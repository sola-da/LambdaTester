





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = true
argument2[122] = [1.7976931348623157e+308,783,122,714,49,122,843,607,655]
base_0[1] = [823,893,969,893,100,783]
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = true
argument3[122] = true
base_1[1][6] = 0
return a+b-c
};
var argument3 = r_1;
var argument4 = {"49":4.2388265291149063e+307,"843":"","":"w-G","1.7131410546504466e+308":2.0886019886364808e+307,"a":"t7B","6.18994354751627e+306":1.0411200729183518e+308};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[122] = true
return a+b-c
};
var argument6 = [969,"u","i","V",-1,"A","Vy",5e-324];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = 4.4666769204786685e+307
return a*b+c
};
var base_0 = ["ZO5r","g(",157,"OB",595,"rx"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ZO5r","g(",157,"OB",595,"rx"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ZO5r","g(",157,"OB",595,"rx"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ZO5r","g(",157,"OB",595,"rx"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test457.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)