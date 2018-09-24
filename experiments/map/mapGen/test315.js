





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[969] = [655,714,595,122,655,0,242,122,783]
return a-b+c
};
var argument2 = "O&";
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = {"213":4.138179939963353e+307,"403":893,"1.2794630742756857e+307":"R"}
argument5[4] = {"6":"","100":9.971634338636989e+307,"":82,"$=":"H$","1.609052059604635e+308":"L ","&D#wNGFM":7.918217033910579e+307,":":3.396922707922059e+307,"u]R":1.3591001641350494e+308,"N*rz":"R"}
return a-b*c
};
var argument5 = true;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = 6.882765150152307e+307
return a*b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[607] = false
return a*b+c
};
var argument9 = true;
var argument10 = true;
var base_0 = ["TY","<Dv`X","|6","1`","4N","?","N","4","R2"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["TY","<Dv`X","|6","1`","4N","?","N","4","R2"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/map/mapGen/test315.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)