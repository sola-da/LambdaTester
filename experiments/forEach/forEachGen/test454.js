





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.4034744228995816e+308] = 3.1158022423401144e+307
argument2[1] = {"25":"o","460":7.287745161047271e+307,"1.7976931348623157e+308":969,"":3.0061980999903417e+307,"ap":0,"1.0621389860002568e+308":157,"5.681901281774796e+307":1.0182273387205832e+308}
return a*b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[157] = false
base_1[0][1] = null
return a*b+c
};
var argument4 = {"242":1.1735955524648516e+308,"969":25,"":59,"-":0,"1.0109477650652087e+308":"s","1.434619718966593e+308":4.780896853849786e+307,"1.9091202090498624e+307":1.3849734286457885e+308,"1.7095574757879673e+308":1.1017640630314839e+308};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][823] = "8@"
argument6[126] = ""
return a-b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[9] = [82,49,25,59,893,213]
base_3[4] = ";$"
argument6[7.92397107964922e+307] = ""
return a/b+c
};
var base_0 = [82,157,-1,714,823,25,82,969,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,157,-1,714,823,25,82,969,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,157,-1,714,823,25,82,969,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,157,-1,714,823,25,82,969,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test454.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)