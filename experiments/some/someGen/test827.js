





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = {"157":"n5v@","655":9.938784494482101e+307,"^cN>=":"","1.8021998928698314e+307":"8","":893}
argument2 = [460,126,705,893,403,242,969,-100,969,59]
argument2[1.7976931348623157e+308] = {"2.298612494629666e+307":"","&+":"Ucu3#"}
return a/b+c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = {"403":1.2433960389466945e+307,"627":")*","":"vV","ult":1.5415239243830477e+308,"Q":"L","?":0,"9.897826818469736e+307":0}
base_1[3][4] = [893,59]
argument5[6] = {"49":"","157":"T","705":"","893":49,"8.901245462382447e+307":"<","":"pw|"}
return a-b*c
};
var argument4 = 5.758305058967836e+307;
var argument5 = 460;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3][3] = true
base_2['length'] = null
return a*b/c
};
var argument7 = true;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['5L'] = {"Y:":8.729053078477044e+307,"7==u8Y":""}
argument11[122] = null
argument11[1] = ["7","F","n","f","U","Vz","v","s&","E"]
return a-b*c
};
var argument10 = [783];
var argument11 = true;
var base_0 = [893,655,82,49,460,627,122,705,705]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,655,82,49,460,627,122,705,705]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,655,82,49,460,627,122,705,705]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,655,82,49,460,627,122,705,705]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someGen/test827.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)