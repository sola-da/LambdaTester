





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = ["&","U0c","#","x","]T"]
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = [0,655,1.7976931348623157e+308,126,627]
base_1[1][0] = {"460":7.287745161047271e+307,"":3.0061980999903417e+307,"ap":0,"1.0621389860002568e+308":157,"5.681901281774796e+307":1.0182273387205832e+308}
argument3[618] = null
return a*b-c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[403] = [5e-324,242,823,714,59,627,242]
argument6[893] = {"242":1.1735955524648516e+308,"969":25,"":59,"-":0,"1.0109477650652087e+308":"s","1.434619718966593e+308":4.780896853849786e+307,"1.9091202090498624e+307":1.3849734286457885e+308,"1.7095574757879673e+308":1.1017640630314839e+308}
return a/b*c
};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = null
base_3[9] = ["=","#pe","gdi8;$","r"]
return a/b-c
};
var base_0 = [969,"9","1#tdeJq",969]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,"9","1#tdeJq",969]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,"9","1#tdeJq",969]
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
require("fs").writeFileSync("./experiments/map/mapGen/test436.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)