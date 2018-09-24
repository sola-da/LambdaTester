





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.7976931348623157e+308] = 1.2682978027760397e+307
argument1[2] = false
argument2[7] = "E"
return a-b/c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = null
argument6['T'] = false
base_1[3][3] = {"0":"Q'6_","242":"#k","Zq":"","oja>=^":2.453212896965727e+307,"":"","8.158041564573878e+307":"","1.5876135323092918e+308":""}
return a-b-c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = ","
argument6[1] = false
argument6[3] = false
return a+b*c
};
var argument7 = {"2":"z","213":1.7318783550579225e+308,"595":49,"714":1.5821374616628213e+308,"893":7.756909222141129e+307,"":"?","MU":"","1.1724829488193527e+308":607};
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = ""
return a-b*c
};
var argument10 = null;
var base_0 = [5e-324,843,0,627,126,783,783]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,843,0,627,126,783,783]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,843,0,627,126,783,783]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,843,0,627,126,783,783]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test978.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)