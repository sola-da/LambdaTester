





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['5L'] = {"49":"","705":1.1215676961370343e+308,"4.4451904891708725e+307":"1AK","`":"ABa","":655,"#":4.586890693957863e+306,"1.1787156865634606e+308":""}
argument2['a8r['] = true
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[157] = {"403":"","607":1.3351985568948201e+308,":^K4]":-1,"7.037425894333653e+307":1.425741271644078e+308,"1.2526203244357565e+308":705,"3.270907062957043e+307":893,"U":"3<#","2.905664946898777e+307":"31","":"o`H"}
base_1[2][5e-324] = ""
base_1[2][5e-324] = 595
return a+b-c
};
var argument3 = true;
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.5109538778533692e+308] = {"460":4.741828031298294e+307}
return a-b*c
};
var argument6 = true;
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.0727847755854773e+308] = [595,100,25,627]
argument9['a8r['] = true
base_3[9] = ["d","V","I","u","Cl"]
return a/b-c
};
var base_0 = [893,49]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,49]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,49]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,49]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test862.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)