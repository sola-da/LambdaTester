





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = [1.7976931348623157e+308,59,126,627,49,122,655]
base_0[0][0] = 8.738578956103122e+307
base_0[0][0] = true
return a*b/c
};
var argument2 = {"9":"MD","607":1.612003238940647e+308,"705":3.270907062957043e+307,"823":"","":1.364132739165336e+308,"g":4.444940904516276e+307,"5.942596434818877e+307":"","=pb?":1.2526203244357565e+308};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = 122
base_1['length'] = [607,59,49,49,157,460,403,893]
return a*b+c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][6] = "D"
base_2[5] = {"":""}
return a+b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[783] = false
return a/b+c
};
var argument7 = null;
var argument8 = [607,595,627,126,714,82,1.7976931348623157e+308,843,0];
var base_0 = ["w","I1AK",595,":?%","j"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["w","I1AK",595,":?%","j"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["w","I1AK",595,":?%","j"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["w","I1AK",595,":?%","j"]
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
require("fs").writeFileSync("./experiments/every/everyGen/test858.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)