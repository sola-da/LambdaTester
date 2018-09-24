





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = true
base_0[3][1] = {"4":403,"213":1.158875775910901e+308,"627":1.3246369686603674e+308,"705":"n-","893":1.5799527446130726e+308,"":1.1501225337735661e+308,"1.0246471769536382e+308":"!"}
return a-b/c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = "wN"
base_1[0][1.4677087964888306e+308] = true
return a-b+c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = null
base_2[1][4] = null
return a+b-c
};
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = ["g","p","C","5","=","6","Q","S7kk]7"]
base_3 = true
argument10[5] = {"0":"4<","655":6.912818474171462e+307,"t@":1.0585399401901806e+308,"":1.6785532724028883e+308,"}!":-1,"I":"aA","1.1270267643727471e+308":2.2015613148600135e+307,"T":126,"U":1.5721663785066872e+308,"1.7763952355961887e+308":""}
return a/b-c
};
var base_0 = [82,893,969,627,595,714,-1,714,823,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,893,969,627,595,714,-1,714,823,783]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,893,969,627,595,714,-1,714,823,783]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test699.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)