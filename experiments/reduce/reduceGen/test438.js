





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = false
return a*b/c/d
};
var argument2 = r_0;
var argument3 = null;
var argument4 = true;
var argument5 = r_0;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = 1.8525699530679595e+307
argument4[2.1280896016417002e+307] = ""
return a/b+c/d
};
var argument8 = [82,213,655,705];
var argument9 = true;
var argument10 = true;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = 157
return a-b+c/d
};
var argument12 = {"595":1.7976931348623157e+308,"":"P0kP","1.7111692868802268e+308":"<J"};
var argument13 = {"213":8.983496058860699e+307,"6.909062749940174e+307":-1,"":4.79064569445759e+307,"k":1.6963694707031344e+308,"&":"","s=P_qL":5.882261337767407e+307};
var argument14 = r_0;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[7.463432409233234e+307] = true
base_3[6] = ""
return a+b/c*d
};
var base_0 = [705,705,49,213,403,122,783,213,82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,705,49,213,403,122,783,213,82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,705,49,213,403,122,783,213,82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,705,49,213,403,122,783,213,82]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test438.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)