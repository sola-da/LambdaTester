





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = [242,783,59,460]
argument2[714] = ""
argument2[0] = {"49":"","705":"","R$":0,"Ozk":"[V0qg","":705,"3.551489450217143e+307":82,"1.0450221841579297e+307":"","{zcO":"?"}
return a*b+c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = null
base_1[4] = 7.028098541865345e+307
argument5[0] = null
return a+b-c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1.3434821406183095e+308] = "pV<"
argument7[6] = false
base_2[0][4] = {"403":"","969":"","UA":"","p":783,"1.4473617965907842e+308":"","":618,"B^":"","1.4367760711705015e+308":"4","`+":"_`O"}
return a*b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.377960715099946e+307] = ""
argument8[7] = "{X=Qn"
argument7 = ""
return a*b+c
};
var base_0 = ["qI:5T","jsy","A$?","b","9&","b+"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["qI:5T","jsy","A$?","b","9&","b+"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["qI:5T","jsy","A$?","b","9&","b+"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["qI:5T","jsy","A$?","b","9&","b+"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test599.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)