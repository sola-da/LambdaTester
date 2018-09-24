





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = 714
base_0[3][2] = ["Y","(",893]
return a+b-c
};
var argument2 = [1.7976931348623157e+308,595,618,969];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][2][6] = "m"
return a/b-c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = {"705":100,"$1":"^_Ol#"}
argument6[3] = ["%","@8nO{f","1f","cd?3","9b"]
argument7[157] = true
return a+b*c
};
var argument6 = {"59":714,"":"X5&SSF","1.0536067984774534e+308":"D","7.905808927061414e+307":"","5.821172748577782e+307":595,"I":8.325897879441089e+307,"|":1.4980312657685384e+308,"1.068526753923775e+308":"","1.4038055264189595e+308":122,"1.3853658114630978e+308":"'"};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[607] = false
argument8[3.208837311680636e+307] = null
return a*b-c
};
var argument8 = true;
var argument9 = "";
var base_0 = [-100,705,893,213,100,607,-1,59,843]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,705,893,213,100,607,-1,59,843]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,705,893,213,100,607,-1,59,843]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,705,893,213,100,607,-1,59,843]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test491.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)