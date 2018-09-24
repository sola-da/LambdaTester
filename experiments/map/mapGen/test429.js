





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = 705
return a/b*c
};
var argument2 = [705,969,82];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['T'] = ["3w","V","5Lr@","}","8","Kb","||sm"]
argument5[49] = "qC9"
argument5[49] = false
return a-b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][2][6] = [59,242,59,969,1.7976931348623157e+308,"qV",0]
return a+b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = ""
argument8[893] = {"59":1.0978158000659695e+308,"705":5.539483138062152e+307,"":"i,g","3.753893207557353e+307":627,"?":"","1.6270559786148198e+308":49,"1.1980776459107609e+308":"C","1.3349286295412294e+308":2.0081280048299365e+307}
return a+b+c
};
var base_0 = ["Qe)","+fG$","Jnn","s",627,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Qe)","+fG$","Jnn","s",627,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Qe)","+fG$","Jnn","s",627,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test429.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)