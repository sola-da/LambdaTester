





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3.377960715099946e+307] = [618,59,607,0,823,100]
return a*b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = {"49":"!]O","618":2.609530895691333e+307,"1.3506300486629646e+308":"m","":157,"Tn(U":6.710063278592668e+307,"jIX":783,"u":"T","1.7129553294043726e+308":"`G*","=cc":""}
return a*b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.7154103611117224e+307] = [213,714,-100,1.7976931348623157e+308,-1,607,122]
argument5[6] = "%X"
base_2[0][5e-324] = {"122":"ZPyCgLbm","843":9.636640913751999e+307,"ErF":49,"":"e","2.886130611883774e+307":-100,"4.2804997208954077e+307":"","1.1957010966960237e+308":"zAuoc:"}
return a+b/c
};
var argument5 = false;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['A'] = null
argument9[-100] = "dM"
return a+b+c
};
var argument8 = {"242":2.616325792445447e+307,"%&":82,"2.2044057074964926e+307":"","":460,"1.4702384175455994e+308":"1"};
var argument9 = r_2;
var base_0 = ["_"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test186.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)