





var callbackArguments = [];
var argument1 = r_0;
var argument2 = null;
var argument3 = {"705":1.662868868967833e+308,"{<":"","5e-324":5e-324,"":1.2262504017357746e+307,"1.3252339126043003e+308":1.6124674737459607e+307,":{p1":":Do"};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = true
argument1[126] = {"9":7.960845513292536e+307,"242":"","L":893,"2.1901012499138294e+307":"","-$+5b_G":"TS<","":1.4154633194911616e+307,"1.3087635951883964e+308":618}
argument1[8] = true
return a/b-c-d
};
var argument5 = 0;
var argument6 = r_1;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = {"9.391465474523326e+307":1.1352440335787557e+308,"":"","q":"k","6.837584749450906e+306":5.465249648727583e+307,"7.82970919205065e+307":"J(1"}
argument7[595] = {"705":"Ga<","":1.7368174697975617e+308,"+":5.026476990898031e+307,"2.5163546701048096e+307":"W2iT"}
return a/b/c-d
};
var argument9 = null;
var argument10 = null;
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[5] = ""
return a/b*c+d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[3] = ""
argument15[403] = ">)"
argument13[126] = {"126":"","893":"","":1.7961292043804947e+308,"1.6346476814475458e+308":"","3.7281996648330596e+306":"","-100":3.805504655031543e+307,"1.203872999825325e+308":"2zj"}
return a+b-c+d
};
var argument14 = {"m":""};
var base_0 = ["B8",")VP[^L","r","V5H","F","i=N:","X","{","(C@g"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B8",")VP[^L","r","V5H","F","i=N:","X","{","(C@g"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B8",")VP[^L","r","V5H","F","i=N:","X","{","(C@g"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B8",")VP[^L","r","V5H","F","i=N:","X","{","(C@g"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test472.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)