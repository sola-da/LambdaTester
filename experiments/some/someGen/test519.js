





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = {"1.135810254524254e+308":714,"1.5579684772927823e+308":""}
base_0[1][8] = 460
argument3[1.0727847755854773e+308] = {"2.864368733795747e+307":""}
return a*b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][5] = ["i^zq","z"]
base_1[5] = ""
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = [0,-100,157,213]
argument5[2.249941463060761e+307] = null
argument5[3] = ""
return a+b/c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['T'] = 4.22102460377491e+307
base_3[8] = 122
base_3[1] = {"":"","]":460,"1.53482170074939e+308":627,"5.673794047770341e+307":""}
return a-b*c
};
var argument7 = [783,242,5e-324,122,705,714,783,-1,705];
var base_0 = ["m",627,705,"4Nz",-1,":T",213,607,403,"|"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["m",627,705,"4Nz",-1,":T",213,607,403,"|"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["m",627,705,"4Nz",-1,":T",213,607,403,"|"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["m",627,705,"4Nz",-1,":T",213,607,403,"|"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test519.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)