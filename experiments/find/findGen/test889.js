





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = ["t","_|","hT ",714,"BE",627]
return a/b/c
};
var argument2 = ["y}","Y^JM","WK@","T","a","@s","-+","<v","er"];
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = {"1.5841399680809252e+308":8.720333514909753e+307,",e4":"9U+0","1.1541272707530355e+308":7.287558778304391e+307}
return a*b-c
};
var argument5 = [" ",";","-+","qp{]","$","{#"];
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = ""
argument8[705] = ""
return a*b-c
};
var argument8 = r_0;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[2] = [655,618,595,893,25,403,122]
return a-b-c
};
var argument10 = ["h","db","B","i 8zGr","A","xf"];
var base_0 = [595,5e-324,705,59,595,122,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,5e-324,705,59,595,122,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,5e-324,705,59,595,122,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,5e-324,705,59,595,122,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test889.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)