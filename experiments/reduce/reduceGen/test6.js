





var callbackArguments = [];
var argument1 = r_0;
var argument2 = "";
var argument3 = "fn";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = null
return a-b/c/d
};
var argument5 = 893;
var argument6 = null;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = "^"
return a-b+c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11 = 1.6892046627967706e+308
base_2[7] = {"1.4072057626449246e+308":"","":"T^W","m;":655,"O":"","9.641366996121299e+307":460}
return a/b*c-d
};
var argument10 = r_1;
var argument11 = "7";
var argument12 = true;
var argument13 = r_2;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = ["Ja","{Ig",627,"o"," ",126,"%^"]
argument13 = {"122":627,"126":"","783":"","":"","1.2370065553296267e+307":3.7668525981726295e+307}
base_3[6] = 8.5827281176623e+307
return a-b*c*d
};
var base_0 = [-100,126,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,126,460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,126,460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,126,460]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test6.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)