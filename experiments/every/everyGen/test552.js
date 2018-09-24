





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = null
base_0[8] = ["T","H","hOd","k","_","K#OY","w","Q","3C"]
return a-b/c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = null
argument5[5] = [655,595,714,100]
argument6[6] = 1.52435937494706e+308
return a-b-c
};
var argument5 = [213,"nf","|>h"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4.960033715165713e+307] = {"122":655,"126":"","157":157,"213":1.5685261164640325e+307,"705":460,"":"","1)l":"j","2.0339946407455619e+307":"","8.892207295572786e+307":"Q"}
argument8[2.4183178393969103e+306] = false
base_2[0] = {"":"","1.448460582954932e+308":460,"Ra":"[_"}
return a/b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = false
argument8[0] = ["z","|_5","Z","UFu","%","k|D]"]
base_3[1] = ["gR","M"]
return a*b+c
};
var base_0 = [655,126,"3",")["]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,126,"3",")["]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,126,"3",")["]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,126,"3",")["]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test552.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)