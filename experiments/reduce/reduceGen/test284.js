





var callbackArguments = [];
var argument1 = true;
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = false
argument2[1] = ""
return a-b-c-d
};
var argument5 = true;
var argument6 = true;
var argument7 = 893;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = null
return a/b+c/d
};
var argument9 = true;
var argument10 = r_2;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['Cb'] = 1.1416790623802743e+308
return a+b+c+d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[';N'] = {"59":1.5899292025076681e+308,"z":"KB'dJ]","5.088934438689274e+307":714,"M":"Was","":"-!","7.118180387578227e+307":"Aa","5.483904196266481e+307":-1,"(":"q","1.4056752979147395e+308":82}
argument14[3] = null
argument13['Cb'] = true
return a+b-c*d
};
var base_0 = [403,49,213,843,242,213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,49,213,843,242,213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,49,213,843,242,213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,49,213,843,242,213]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test284.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)