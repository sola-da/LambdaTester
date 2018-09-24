





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5][0] = {"49":-1,"618":122,"1.7783929363208656e+308":"","Q!K":126,"":"p"}
return a/b+c
};
var argument2 = "G";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = null
base_1[2][5e-324] = true
argument4[1.5109538778533692e+308] = ["F","B["]
return a*b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['^h'] = false
argument6[122] = {"49":705,"5.287067275441535e+307":213,"":3.0374093562406294e+307,"{":"mT","XYp":"","x":122,"8.071591407448021e+307":"^@","zU]":1.2962396147967114e+308,"4.484622472717246e+307":705}
base_2[2] = -1
return a*b+c
};
var argument5 = r_2;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3][3] = null
return a/b/c
};
var argument7 = [126,0];
var base_0 = [25,0,242,595,969,893,607]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,0,242,595,969,893,607]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,0,242,595,969,893,607]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,0,242,595,969,893,607]
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
require("fs").writeFileSync("./experiments/some/someGen/test797.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)