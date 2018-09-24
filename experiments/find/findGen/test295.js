





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = null
base_0[6] = null
base_0[5] = false
return a*b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = 1.7976931348623157e+308
argument5[4.953791384496108e+307] = "D"
base_1[9] = null
return a/b/c
};
var argument4 = ["Ka","jE","@","$-","N","lI","h","^T","2"];
var argument5 = {"627":")|","893":1.5433596952133788e+307,"-1":82,"":618,"1.5573837398990134e+308":1.1611816228625574e+308};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4.953791384496108e+307] = null
base_2[8][0] = [705,655,242,714,705,213,705,823,893]
base_2[9] = 1.130646231785127e+308
return a*b+c
};
var argument7 = false;
var argument8 = {"893":1.5997212612608173e+308};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[5] = {"705":82,"893":627,"":0}
argument11[5] = "Jb!|j"
return a*b+c
};
var argument10 = [823,82,714,595];
var argument11 = null;
var base_0 = ["=","T","X{","-r",714,"&"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=","T","X{","-r",714,"&"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=","T","X{","-r",714,"&"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=","T","X{","-r",714,"&"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test295.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)