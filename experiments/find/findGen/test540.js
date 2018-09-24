





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = null
base_0[9] = ["T","H","hOd","k","_","K#OY","w","Q","3C"]
return a-b/c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[893] = null
argument5[1.0500354979187844e+308] = [655,595,714,100]
argument5['f-d'] = 1.52435937494706e+308
return a-b-c
};
var argument5 = [213,"nf","|>h"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[242] = {"122":655,"126":"","157":157,"213":1.5685261164640325e+307,"705":460,"":"","1)l":"j","2.0339946407455619e+307":"","8.892207295572786e+307":"Q"}
argument7['j'] = false
argument7[5] = {"":"","1.448460582954932e+308":460,"Ra":"[_"}
return a/b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[893] = false
argument8[25] = ["z","|_5","Z","UFu","%","k|D]"]
base_3[3] = ["gR","M"]
return a*b+c
};
var base_0 = [655,126,"3",")["]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,126,"3",")["]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,126,"3",")["]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,126,"3",")["]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test540.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)