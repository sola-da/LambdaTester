





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = null
argument2[4] = [403,100,403,627,213,705,126]
return a*b+c
};
var argument2 = {"59":1.6894686158015725e+308,"460":"","705":"-","969":25,"1.2355060793228687e+308":"","":1.5323173937644542e+308,"y8f":"","1.0034515808575127e+308":1.6953103986414528e+308,"N(-,":460};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = ",)"
base_1[3] = {"49":"","157":7.376860728058408e+307,"9.798860514741942e+307":"","|2H":"","1.6346044611284255e+308":1.2550724163441896e+308,"1.7976931348623157e+308":"","":-1,"1.4849901113530571e+308":""}
base_1['length'] = null
return a/b+c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[403] = {"4.395867260275494e+307":8.746279461342109e+307}
base_2[0][0] = null
base_2[5] = null
return a*b+c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = true
base_3[8] = ""
argument9 = null
return a*b*c
};
var argument9 = r_2;
var base_0 = [655,100,82,0]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,100,82,0]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,100,82,0]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,100,82,0]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test401.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)