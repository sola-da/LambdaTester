





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = {"A":"k=","E%":"","-1":"","":"","uL":"'","1.0235365275107083e+308":"","k":""}
base_0[0][1.4677087964888306e+308] = [893,823,59,242,595,100,0]
argument2[82] = {"100":213,"655":"6","893":"","5A)sp-":49,"<z":"W,","h":"?","1.2784020818543356e+308":1.0807266717884995e+307,"-100":""}
return a-b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = null
base_1[3][2] = 82
return a/b+c
};
var argument4 = true;
var argument5 = ["@1","H","@","o_","[,kB","y","ON","IE","d"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = ["q","=","y_F|W","3","H#<{","nDH","<","8b"]
base_2[5] = null
return a*b/c
};
var argument7 = true;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.6177106033227046e+308] = {"j":242}
argument11[6] = ["LeZ","-","5","g","Ay","b"]
return a*b-c
};
var argument10 = true;
var argument11 = true;
var base_0 = ["!","X_W<"," o0S","$",655]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!","X_W<"," o0S","$",655]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
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
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapGen/test604.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)