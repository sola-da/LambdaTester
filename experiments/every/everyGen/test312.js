





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][4] = {"126":"f","403":1.3275714282510471e+308,"1.416342053575068e+308":"","7.70913144187236e+305":705,"8.36952335497213e+307":"r","":-1,"1.4857191743469784e+308":1.410836581868774e+308,"1.5871244028640515e+308":"21","1.5170463185728663e+308":1.0575060307791695e+308}
argument2 = null
return a-b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = "5"
argument4[3.3156198695370476e+307] = {"460":126,"714":1.3693763787406623e+308,"-100":"tN","":5.825937428895834e+307}
base_1[8] = ""
return a/b*c
};
var argument4 = {"627":")|","893":1.5433596952133788e+307,"-1":82,"":618,"1.5573837398990134e+308":1.1611816228625574e+308};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = null
base_2[2][7] = [705,655,242,714,705,213,705,823,893]
base_2[3] = 1.130646231785127e+308
return a*b+c
};
var argument6 = false;
var argument7 = {"893":1.5997212612608173e+308};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.3599216339661573e+308] = {"705":82,"893":627,"":0}
argument9[1.3599216339661573e+308] = "Jb!|j"
return a*b+c
};
var argument9 = [823,82,714,595];
var argument10 = null;
var base_0 = [-1,157,-100,">","W",823,"4",49]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,157,-100,">","W",823,"4",49]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,157,-100,">","W",823,"4",49]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,157,-100,">","W",823,"4",49]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test312.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)