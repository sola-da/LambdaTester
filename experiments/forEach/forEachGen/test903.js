





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.4570946481947045e+308] = null
return a/b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[59] = true
argument5[49] = [783,655,25,-1,82,126,-1]
argument5 = {"100":"D<|","":8.007223240711915e+307,"2.078526740776638e+307":6.632632873396343e+307,"1.7223048165684229e+308":"",",":"X"}
return a/b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.268696794505825e+308] = true
argument5['U+WQ'] = [627,783]
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = false
base_3[0][1] = true
return a-b+c
};
var argument6 = false;
var base_0 = [714,618,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,618,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,618,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,618,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test903.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)