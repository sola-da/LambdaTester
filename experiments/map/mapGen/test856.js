





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = 5.63948613453926e+307
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6][3] = ""
base_1[0][1.4677087964888306e+308] = null
base_1[3][2] = "_$9d"
return a+b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = ""
base_2[7][2] = {"49":"","607":8.962677457349784e+307,"":"","1.1034152566281793e+308":5e-324,"9.226213524698e+307":"t",",s":"?","J":2.118091198702472e+307}
argument5[714] = null
return a*b-c
};
var argument4 = r_0;
var argument5 = [969,126];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6] = false
argument7[1.7173047913506838e+308] = 1.29725498147989e+308
argument7[1] = ["1","4t","}YG&a",1.7976931348623157e+308,"N{","Qq`G","t$"]
return a+b/c
};
var base_0 = [460,"u",122,122,"_","g0",0,"g6","o"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,"u",122,122,"_","g0",0,"g6","o"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,"u",122,122,"_","g0",0,"g6","o"]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test856.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)