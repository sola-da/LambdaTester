





var callbackArguments = [];
var argument1 = false;
var argument2 = "!";
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = false
argument2[5] = {"49":595,"403":"","655":59,"":4.75133590796715e+307,"7.262150158877682e+307":5.951297889443528e+307,"1.7976931348623157e+308":403}
argument1[2.1280896016417002e+307] = {"=;7O":"","1.561793944764122e+308":4.310941156657085e+307,"1.6502495950010257e+308":"","9.121721630202293e+307":""}
return a*b*c-d
};
var argument5 = "";
var argument6 = {"969":242,"tFw_":1.3397539062288427e+308,"":"","M5etW>D":1.098436747707739e+308};
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = [122,607]
argument5[0] = 460
argument7['HMm'] = null
return a+b/c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = {"25":"","126":"","714":705,"893":893,"2.8826159476883254e+307":"","<;":"{","":5.815971982036044e+307,"`":969,"1.0876010698513508e+308":"","u&":3.889750691512527e+307}
return a*b/c/d
};
var argument10 = r_0;
var argument11 = r_1;
var argument12 = false;
var argument13 = 843;
var argument14 = r_2;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[7.463432409233234e+307] = {}
argument13[25] = null
base_3 = true
return a+b*c*d
};
var base_0 = [49,705,705,0,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,705,705,0,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,705,705,0,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,705,705,0,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test388.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)