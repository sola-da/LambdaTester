





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.7847438319683965e+308] = {"49":8.319371106700047e+307,"460":627,"2.573909681542785e+307":"","":1.1616618629957596e+307,"Ns!GX":7.715678546989795e+307,"D":"RU","1.2208717654346774e+308":893,"I":627}
base_0[0][0] = [-100,157,0,595,627,403]
argument3[0] = [607,460,82,126,783]
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = [82,-100,59,25,122,213,403]
argument4[403] = 126
base_1['length'] = null
return a+b*c
};
var argument3 = true;
var argument4 = 8.617671562819293e+307;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4.224481734419934e+307] = [705,"i",25,"|e",126,714,"|","[*v"]
return a/b-c
};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = null
argument9[1.2537850866485212e+307] = 1.0306075133871297e+308
base_3[1][3.5329845145600404e+307] = {"618":82,"783":"b","@X_":655,"3.1865019158936856e+306":"","l":"rY","&N-$^":"","":"","?B^":7.820324975933222e+307}
return a/b/c
};
var argument8 = 705;
var argument9 = null;
var base_0 = [705,403,893,0,82,59,126]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,403,893,0,82,59,126]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,403,893,0,82,59,126]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,403,893,0,82,59,126]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test699.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)