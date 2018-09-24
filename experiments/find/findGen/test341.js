





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = ["D","{","b","F","c*XAo0w"]
argument1[893] = 1.5767070493621892e+308
argument2[8] = false
return a+b/c
};
var argument2 = ";=";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = 7.541878176952894e+307
base_1[0][1] = {"$":"_","$b|":""}
return a*b/c
};
var argument4 = null;
var argument5 = "C";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = 460
argument8[3] = ["P","p","U","J","#","d9","d","T,3","92","d"]
return a/b/c
};
var argument7 = ["E","Gi","(r+dd*$<","@F>","F","lE[","SL"];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['!j'] = ""
base_3[3][7] = ""
return a/b*c
};
var argument9 = r_2;
var argument10 = true;
var base_0 = [893,655,157,25,100,0,0,403]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,655,157,25,100,0,0,403]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,655,157,25,100,0,0,403]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,655,157,25,100,0,0,403]
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
require("fs").writeFileSync("./experiments/find/findGen/test341.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)