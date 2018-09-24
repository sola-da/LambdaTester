





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['T'] = ""
argument3[6] = {"59":49,"5.630136372762921e+307":705,"":9.913324905943402e+307,"1o":"","I":82,"1.091097094690129e+308":"","8.66230414800313e+307":1.7976931348623157e+308,"-100":"?4","7.82302725988417e+307":""}
argument1[4] = [1.7976931348623157e+308,843,100,714,460,607,969,213]
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = "S"
return a-b+c
};
var argument3 = null;
var argument4 = "{XM";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][7] = 1.3987741772154632e+308
base_2[8] = null
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = false
return a-b-c
};
var base_0 = ["+n","IAv",82,"Gq","V","x","LdqM"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+n","IAv",82,"Gq","V","x","LdqM"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+n","IAv",82,"Gq","V","x","LdqM"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+n","IAv",82,"Gq","V","x","LdqM"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test273.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)