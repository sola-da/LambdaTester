





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['ns'] = [627,-100,595,714,157,100,607,157,843,705]
argument2[969] = false
argument2[7] = [5e-324,460,157,100,242]
return a+b-c
};
var argument2 = true;
var argument3 = ["O$","goz","jH>c",25];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['D'] = "I"
base_1[8] = 49
argument5 = ""
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = true
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.462967293930506e+307] = 7.871786447261143e+307
argument7[-1] = "pI"
return a*b/c
};
var argument7 = null;
var argument8 = null;
var base_0 = [460,25,595,1.7976931348623157e+308,705,655,783]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,25,595,1.7976931348623157e+308,705,655,783]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,25,595,1.7976931348623157e+308,705,655,783]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,25,595,1.7976931348623157e+308,705,655,783]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test613.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)