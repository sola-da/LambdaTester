





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['3Tpj5'] = "L["
argument2[1.1881593224845412e+308] = false
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[893] = ""
argument4[0] = 100
argument4[7] = ["&f",",$L","j","i",";#"]
return a*b/c
};
var argument3 = 6.240269567069113e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = false
argument5[82] = {"4":";","49":3.4379142715015885e+307,"126":"]","595":"","969":655,"1.4281913679048546e+308":"","":1.589775868440601e+308,"8.167183558569233e+307":122,"1.3323850508881667e+308":9.216219741698471e+307}
argument5[403] = null
return a-b*c
};
var argument5 = r_0;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = "<?mGm"
argument9[403] = true
argument9[1.0546776681946723e+308] = true
return a-b-c
};
var base_0 = ["K","?","$","*","R%,5","|","u"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["K","?","$","*","R%,5","|","u"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["K","?","$","*","R%,5","|","u"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["K","?","$","*","R%,5","|","u"]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test531.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)