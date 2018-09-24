





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1280896016417002e+307] = false
argument2[213] = 1.3933062411576952e+308
return a*b/c-d
};
var argument2 = {"Q#*M":4.538929098363213e+307,"-1":"&g"};
var argument3 = r_0;
var argument4 = [122,893,82];
var argument5 = r_1;
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = 3.7154998015881723e+307
return a/b/c/d
};
var argument8 = true;
var argument9 = null;
var argument10 = r_0;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = null
return a*b*c/d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[126] = ""
return a/b/c*d
};
var base_0 = ["[",";","[","9","Nyq4e","a"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[",";","[","9","Nyq4e","a"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[",";","[","9","Nyq4e","a"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[",";","[","9","Nyq4e","a"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test689.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)