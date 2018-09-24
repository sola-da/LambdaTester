





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = 242
argument3[3] = 126
argument1 = null
return a-b/c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][2][5] = null
argument4[3] = {"618":82,"1.1176476531796369e+308":1.55738538783779e+307,"":242,"5e-324":-100}
argument4[4] = {"126":8.720871329419065e+307,"403":1.5397460939832401e+308,"460":"c","":-100,"1.2238380862834346e+308":"","N":"G","a":1.6026702811810066e+308,"7t5REtQ_Ix":"pC`S","6.612489646581531e+307":1.9260911385430307e+307}
return a/b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = null
argument6['3Tpj5'] = null
return a-b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = -100
return a/b*c
};
var argument6 = [")C;4","]F","7","A V>RS","$","s","5"];
var base_0 = [783,-1,213,714,82,0,823]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,-1,213,714,82,0,823]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,-1,213,714,82,0,823]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,-1,213,714,82,0,823]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test411.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)