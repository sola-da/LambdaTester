





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['AA@'] = ":Z"
argument2[1.399309004356655e+308] = 1.3201052773087929e+308
argument3[2] = ""
return a*b-c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3.377960715099946e+307] = [59,969,-1,595,460,627,126,-100,714]
return a/b+c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[100] = 82
argument6['f-d'] = [595,"X-$",122,"%","5E",100,"n",59,"]yt"]
return a*b-c
};
var argument6 = r_0;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1] = {"25":"t","595":49,"1.5879629572928057e+308":1.1139458553931527e+308,"1.4799115380880334e+308":""}
argument9[1.0500354979187844e+308] = null
base_3[8] = "]G"
return a+b+c
};
var argument9 = r_0;
var argument10 = false;
var base_0 = [5e-324,82,"[","_q",82]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,82,"[","_q",82]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,82,"[","_q",82]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,82,"[","_q",82]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test277.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)