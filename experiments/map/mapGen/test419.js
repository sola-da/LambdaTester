





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = {"59":"1","213":-100,"zlp":"!W","8.659447849149259e+307":"Gz","1.621426844072367e+308":1.3945694272467535e+308,"1.0505403949442256e+307":1.51920066143237e+308,"(":618}
argument3['3Tpj5'] = [1.7976931348623157e+308]
return a/b/c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"0":893,"":"","1.5250795024675114e+308":"O","9.249691730049476e+307":1.3679577513595054e+308,"h3":"h"}
argument5[2] = 655
return a-b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[9.869573703797622e+307] = ""
return a-b*c
};
var argument6 = r_2;
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][1] = {"X":""}
argument9[6] = "(^a"
base_3[1][7] = [213,1.7976931348623157e+308,82,5e-324,122]
return a-b-c
};
var argument9 = null;
var argument10 = true;
var base_0 = [213,1.7976931348623157e+308,627,627,460,823,783,213]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,1.7976931348623157e+308,627,627,460,823,783,213]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,1.7976931348623157e+308,627,627,460,823,783,213]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,1.7976931348623157e+308,627,627,460,823,783,213]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test419.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)