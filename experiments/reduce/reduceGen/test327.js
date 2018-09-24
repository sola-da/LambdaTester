





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1869172855352885e+307] = null
base_0[7] = [59,655,122,705,893,843,25]
argument2[82] = true
return a/b-c/d
};
var argument2 = "";
var argument3 = true;
var argument4 = 1.7415734127984667e+308;
var argument5 = r_0;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[9] = 1.7689113873640003e+308
base_1[3] = {"0":6.697075915452084e+307,"49":"","595":"{","'":"}","":"","w":100,"5.655675550202856e+307":893,"5.103877693947577e+307":59,"-1":1.1002492754848556e+308,"|B!e(w":";RDg"}
return a-b*c+d
};
var argument8 = ["&","_pK6","-a}aN","%","`","N"];
var argument9 = {"8":"","1.4578247015479095e+308":893,"Ce":213,"S;":"u-^","9.853272981432464e+307":"k`7","FW":5.390187881902632e+307,"%T9X%=":843,"":2.360845517823921e+307,"2.384515420019512e+307":"","1.1862053489323019e+308":8.271902790562201e+307};
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = {"25":595,"82":49,"":"4dc=t","1.494425925905752e+308":595,"1.5298302844338916e+308":"o=","8.799610226783049e+307":9.507338618902309e+307}
argument8[4] = [460,"I","`"]
return a/b-c+d
};
var argument12 = null;
var argument13 = r_0;
var argument14 = null;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = true
return a-b-c*d
};
var base_0 = [969,655,823,403,25,655,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,655,823,403,25,655,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,655,823,403,25,655,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,655,823,403,25,655,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test327.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)