





var callbackArguments = [];
var argument1 = 1.0430466522188722e+308;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = ["-","}","[2s"]
return a/b-c-d
};
var argument5 = null;
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7.463432409233234e+307] = ["$",607,893,655,1.7976931348623157e+308]
argument7['18{'] = [460,49,893,5e-324,49,157,-100,460,783]
argument6[2] = "%"
return a+b/c-d
};
var argument9 = null;
var argument10 = true;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.1532786076532189e+308] = 403
argument10[1.612812046173122e+308] = true
argument10[25] = "O"
return a/b*c*d
};
var argument13 = false;
var argument14 = true;
var argument15 = null;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[7.463432409233234e+307] = true
argument15['*c'] = false
argument15['*c'] = {"607":242,"p":"","":157,"=":"GrE","?":1.1653142889986108e+308}
return a+b/c+d
};
var base_0 = [1.7976931348623157e+308,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,460]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test859.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)