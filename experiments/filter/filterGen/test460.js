





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['C'] = {"157":"","714":8.277199645168213e+307,"893":823,"":607,"1.5139076297817479e+308":893,"5.60413103816875e+307":7.687789198388749e+307,"H":595,"6.446315017159957e+307":8.412251835649258e+307}
base_0[8][3] = true
argument3[0] = {"242":-1,"655":1.6802980382828412e+307,"1.0709694670182599e+308":1.6479361311192935e+308,"":"{<Ua","3.24288912254094e+306":"9"}
return a*b*c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][0] = ["m3X+","$","&","]0","J","["]
base_1[8][3] = true
argument6[0] = "5"
return a*b*c
};
var argument5 = true;
var argument6 = "U=+x";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = ""
argument9 = [969,"9","&"]
base_2[2] = [157,126,460,607,823,0,460,100,607]
return a/b+c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6] = 1.1478106426440478e+308
argument10[1] = null
argument10[4] = "I7&vYW"
return a/b+c
};
var argument9 = "7";
var argument10 = "HOX";
var base_0 = [-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100]
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test460.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)