





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"0":"",">:p8":"9V","1.7976931348623157e+308":1.132054370873488e+308,"":122,"1.1046595454799886e+308":"LC","7.648602584564489e+307":1.2913318891959926e+307,"z":"","6.763113890586682e+307":1.5013751603394546e+308,"v":"G+Ft-d","1.208405733928313e+308":1.7284389229217968e+308}
base_0[9] = null
argument2[403] = {"403":"!Z","705":"U","893":1.5080089121973847e+308,"7.168504409534764e+307":1.746011738542858e+308,"pQR$e%":"","J":"","-100":"w+1p","":-1,"KH":403}
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = 1.0789453021181175e+308
return a/b/c
};
var argument3 = r_1;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = "`<!Ac"
base_2[0] = {}
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = null
base_3 = false
base_3[3] = 783
return a*b+c
};
var base_0 = [213,655,213,783,783,893,59,595,242,49]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,655,213,783,783,893,59,595,242,49]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,655,213,783,783,893,59,595,242,49]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,655,213,783,783,893,59,595,242,49]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test112.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)