





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = null
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[25] = -1
base_1[4] = null
argument3['a8r['] = "e"
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = false
return a+b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8.748669805137695e+307] = ""
return a*b/c
};
var base_0 = [0,242,1.7976931348623157e+308,714,122,242,618,-1,607]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,242,1.7976931348623157e+308,714,122,242,618,-1,607]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,242,1.7976931348623157e+308,714,122,242,618,-1,607]
var r_2= undefined
try {
r_2 = base_2.find(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,242,1.7976931348623157e+308,714,122,242,618,-1,607]
var r_3= undefined
try {
r_3 = base_3.find(argument4)
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
require("fs").writeFileSync("./experiments/find/findGen/test905.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)