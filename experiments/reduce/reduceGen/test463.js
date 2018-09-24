





var callbackArguments = [];
var argument1 = null;
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[9.331954948603684e+307] = {"6":"fHr","122":"+e","893":1.7331452715535671e+308,"":"","5.726669662291226e+306":"6","1.4687727858297576e+308":"I","w":""}
return a*b+c-d
};
var argument5 = false;
var argument6 = false;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = 3.524622294957494e+307
base_1[0][3] = {"49":"","1.1833090914057184e+308":"a","":893,"1.2414769886863096e+308":7.834114113226177e+307,"R":"","1.058434765454531e+308":"&","1.4686809774714144e+308":"g","r*":"","MHv|":607}
return a*b+c/d
};
var argument9 = false;
var argument10 = false;
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[595] = [213,893,823,-1,893,49,783,969]
base_2[8] = [",fv","&f",",$L"]
return a+b*c/d
};
var argument13 = [";#","U+U","Kc","W"," n#n","{xP","r","V"];
var argument14 = r_2;
var argument15 = true;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[1.359136872727139e+308] = ["Ny","f9","B",1.7976931348623157e+308,"jg"]
return a-b-c+d
};
var base_0 = [5e-324,595,714,242,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,595,714,242,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,595,714,242,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,595,714,242,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test463.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)