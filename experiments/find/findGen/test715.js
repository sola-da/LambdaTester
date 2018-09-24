





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = true
argument3[969] = null
base_0[0][6] = [655,82,-1,82,82,714,126,242,0,403]
return a-b+c
};
var argument2 = "";
var argument3 = 213;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = ["pl","Wo,V",","]
return a/b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[969] = false
base_2[6][4] = 100
return a+b+c
};
var argument6 = ";(";
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][6] = {"0":655,"4.2071495146203846e+307":1.3788940992095424e+308,"8.28328231962728e+307":"","":3.8049271796226706e+307,"u":""}
return a+b-c
};
var argument9 = [655,"Jy#"];
var argument10 = null;
var base_0 = ["T","k","c("," ","E","t","]","$","!DQ","e"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["T","k","c("," ","E","t","]","$","!DQ","e"]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["T","k","c("," ","E","t","]","$","!DQ","e"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["T","k","c("," ","E","t","]","$","!DQ","e"]
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
require("fs").writeFileSync("./experiments/find/findGen/test715.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)