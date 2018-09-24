





var callbackArguments = [];
var argument1 = true;
var argument2 = "";
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = [-1,122,0,82]
argument2[4] = ""
return a/b-c*d
};
var argument5 = null;
var argument6 = true;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = false
argument5[1] = {"157":"ou$","618":4.3956079313443344e+307,"655":783,"705":460,"":"","1.4362539068006135e+308":25}
return a*b+c+d
};
var argument9 = r_2;
var argument10 = null;
var argument11 = r_2;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = ""
return a*b+c*d
};
var argument13 = r_2;
var argument14 = 1.1237497281985788e+307;
var argument15 = false;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = 705
argument13 = true
base_3[9] = 5.237000537564907e+307
return a+b/c*d
};
var base_0 = [";I","(","yb"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";I","(","yb"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";I","(","yb"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";I","(","yb"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test155.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)