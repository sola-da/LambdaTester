





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][6] = {"49":8.319371106700047e+307,"460":627,"2.573909681542785e+307":"","":1.1616618629957596e+307,"Ns!GX":7.715678546989795e+307,"D":"RU","1.2208717654346774e+308":893,"I":627}
argument2['?'] = [-100,157,0,595,627,403]
argument2['a'] = [607,460,82,126,783]
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = [82,-100,59,25,122,213,403]
argument4[1.7976931348623157e+308] = 126
base_1['length'] = null
return a+b*c
};
var argument3 = true;
var argument4 = 8.617671562819293e+307;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[9] = [705,"i",25,"|e",126,714,"|","[*v"]
return a/b-c
};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = null
base_3[0] = 1.0306075133871297e+308
argument9[3] = {"618":82,"783":"b","@X_":655,"3.1865019158936856e+306":"","l":"rY","&N-$^":"","":"","?B^":7.820324975933222e+307}
return a/b/c
};
var argument8 = 705;
var argument9 = null;
var base_0 = [705,403,893,0,82,59,126]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,403,893,0,82,59,126]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,403,893,0,82,59,126]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,403,893,0,82,59,126]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test715.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)