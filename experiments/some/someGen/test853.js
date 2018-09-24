





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = 595
return a-b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7] = ""
base_1[2][5] = [969,242,1.7976931348623157e+308]
argument4[4] = null
return a+b/c
};
var argument4 = r_0;
var argument5 = {"6":969,"100":1.7259838776873274e+308,"126":"|","595":1.9802485957949724e+307,"":"","]5H":4.736294574221527e+306,"9.948960068421953e+307":"l","T":"","a":627};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = true
base_2['length'] = "Do"
base_2[3][3] = 1.7976931348623157e+308
return a-b+c
};
var argument7 = "";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = [122,969,"{5",893,403,607]
argument8[3] = true
argument9['a8r['] = null
return a+b-c
};
var argument9 = false;
var base_0 = [893,59,403,460,5e-324]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,59,403,460,5e-324]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,59,403,460,5e-324]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,59,403,460,5e-324]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test853.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)