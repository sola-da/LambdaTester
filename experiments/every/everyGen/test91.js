





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][7] = true
base_0[2][7] = 714
base_0[8] = {"82":"4","100":8.434244776435499e+307,"705":"","893":"","":"","J":5e-324,"1.1657014338151521e+308":1.7976931348623157e+308}
return a-b/c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = false
base_1[7] = [893,893,157]
base_1[9] = 403
return a+b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = null
argument5 = ["9C^","H","#","ZUUFoMN6","N","o","o%Jegx","q>uZ"]
return a/b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = "i"
argument8 = "("
argument7[2] = 460
return a/b*c
};
var argument7 = "";
var argument8 = {"59":"","82":"^","":"ij","4.2012873068609704e+307":"","1.0159967239947215e+308":"i"};
var base_0 = [460,823,100,1.7976931348623157e+308,893,969,595,-1,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,823,100,1.7976931348623157e+308,893,969,595,-1,893]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,823,100,1.7976931348623157e+308,893,969,595,-1,893]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,823,100,1.7976931348623157e+308,893,969,595,-1,893]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test91.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)