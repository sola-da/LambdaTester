





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][3] = true
base_0[7][2] = ""
return a-b*c
};
var argument2 = true;
var argument3 = {"59":2.493780388470902e+307};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][3] = true
argument5[49] = 7.621552086661861e+307
return a/b/c
};
var argument5 = [607,655,893,460];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7][2] = {"460":"","607":893,"714":"'k","893":"","jp":1.6483456832362913e+308,"l":"#^P^","":"J"}
argument8[157] = {"100":5e-324,"":"","1.0776300321223067e+308":"NQ","x|":2.6044512001023865e+307}
base_2[6] = ["SS","m>","my","]","]C","gN","t","DT","?","|"]
return a+b+c
};
var argument7 = {"1":4.902079856940853e+307,"100":"0","":8.325287938700077e+306,"U":"j","1.480595568781008e+308":705,"4.0024022476900126e+307":1.622676074870939e+308,"1.4772034231750266e+308":"","7(":9.20902569149446e+307,"m_":"b","1.439968191626086e+308":""};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][5] = null
return a*b+c
};
var argument9 = r_2;
var argument10 = r_2;
var base_0 = ["53R","{"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["53R","{"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["53R","{"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["53R","{"]
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
require("fs").writeFileSync("./experiments/map/mapGen/test582.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)