





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['A'] = null
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5.262931091360336e+307] = null
argument3[6] = 100
return a-b/c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = null
argument6[403] = {"0":"bZ","49":"","H":3.0767963833759274e+307,"!":25,"":"-","C)gYK86F^x":"h","1.7253119223001852e+308":"","7{PL":5.572587062912953e+307}
argument6[5] = false
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[-100] = ["2MS|6@Od","ri}c","7 ","f","C","i"]
base_3[6] = {"126":"p","1.7976931348623157e+308":1.7976931348623157e+308,"U":1.0850275497292546e+308,"s":1.0067536043218685e+306,"6.003058328770045e+307":"u"}
return a-b/c
};
var argument6 = 893;
var base_0 = [59,100,"c","[9",5e-324,823,"v",213,157]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,100,"c","[9",5e-324,823,"v",213,157]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,100,"c","[9",5e-324,823,"v",213,157]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,100,"c","[9",5e-324,823,"v",213,157]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test403.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)