





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[893] = true
base_0[7][2] = [213,705,126,0,")$Ry","eG","3","|","8"]
base_0[5] = 5e-324
return a*b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"25":"C","7.648602584564489e+307":1.2913318891959926e+307,"z":"","6.763113890586682e+307":1.5013751603394546e+308,"v":"G+Ft-d","1.208405733928313e+308":1.7284389229217968e+308}
return a*b/c
};
var argument4 = null;
var argument5 = {"403":"!Z","705":"U","893":1.5080089121973847e+308,"7.168504409534764e+307":1.746011738542858e+308,"pQR$e%":"","J":"","-100":"w+1p","":-1,"KH":403};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = 1.0789453021181175e+308
return a/b/c
};
var argument7 = r_2;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = "`<!Ac"
base_3[7] = {}
return a/b*c
};
var base_0 = [655,122,126,655,460,59]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,122,126,655,460,59]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,122,126,655,460,59]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test118.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)