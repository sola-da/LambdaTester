





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][1] = "?p"
argument2[1.2421645642809447e+308] = ""
base_0[0][0] = [0,-1,893,-100,5e-324,595,213,893,242]
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['a8r['] = [1.7976931348623157e+308,893,969,969,893]
base_1 = null
argument3[403] = "$'L"
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = 1.7235136311133728e+308
return a-b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = {"":"s-3;y"}
argument5['5pji-Y'] = null
argument6[5] = ">"
return a*b-c
};
var argument5 = false;
var argument6 = "";
var base_0 = [627,607,714,1.7976931348623157e+308,157,893,5e-324,-100,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,607,714,1.7976931348623157e+308,157,893,5e-324,-100,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,607,714,1.7976931348623157e+308,157,893,5e-324,-100,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,607,714,1.7976931348623157e+308,157,893,5e-324,-100,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test952.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)