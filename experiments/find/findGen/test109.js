





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = ""
base_0['length'] = ""
return a*b-c
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[893] = [59,122,714,213,"x",714,"3N}:e",705,"<G"]
base_1[5] = ",vl"
return a*b-c
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = ["Tl","7","B","-a","JWM","= N","sE","?LS{J","9"]
base_2[1][2] = false
return a*b-c
};
var argument8 = r_0;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = ""
argument12 = ""
base_3[2] = null
return a/b/c
};
var argument11 = null;
var base_0 = ["Z1","{","V","d#2rd","di","A","Z","<&","v:","IU2&Cx0X"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Z1","{","V","d#2rd","di","A","Z","<&","v:","IU2&Cx0X"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Z1","{","V","d#2rd","di","A","Z","<&","v:","IU2&Cx0X"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Z1","{","V","d#2rd","di","A","Z","<&","v:","IU2&Cx0X"]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test109.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)