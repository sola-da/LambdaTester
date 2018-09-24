





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = [5e-324,783,0,595,49,157,242,627,893]
base_0[1][0] = {"1AK":"`","ABa":""}
return a*b*c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[';N'] = ["v","V","gT","{","ZXR","G","@9"]
return a*b/c/d
};
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = {"403":59,"607":1.3351985568948201e+308,"4.139467791499818e+307":"<","":"t","1.070657767044115e+308":"","3.270907062957043e+307":893,"U":"3<#"}
argument4[9] = ["31",">XsF"]
return a-b+c/d
};
var argument5 = r_1;
var argument6 = {"T":"c"};
var argument7 = [627,126,714,82,1.7976931348623157e+308,843,0,714,893];
var argument8 = r_2;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[82] = 9.257114786271514e+307
base_3['length'] = 843
return a-b-c-d
};
var base_0 = [403,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test728.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)