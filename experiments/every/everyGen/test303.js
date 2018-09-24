





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[122] = false
argument2[0] = "o$"
return a/b-c
};
var argument2 = [49,607,618];
var argument3 = ["-",49];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = ""
base_1[9] = "+"
argument5[0] = true
return a+b-c
};
var argument5 = -1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = {"7":969,"627":460,"655":"T=","Y":"S-","8.959172345561256e+307":1.7806379069838817e+308,"1.2248236696786226e+308":1.2797258574469397e+308,">72<3":"T8","1.0966443546360954e+308":"O","6.189332447704862e+307":""}
argument7[6] = "RR"
base_2[2][7] = null
return a*b/c
};
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = 627
return a-b/c
};
var base_0 = [460,242,82,843,"`w",627]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,242,82,843,"`w",627]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,242,82,843,"`w",627]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,242,82,843,"`w",627]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test303.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)