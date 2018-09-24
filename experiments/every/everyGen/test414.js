





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = null
base_0[0][1] = {"714":1.5712097030242105e+308,"O":100,"5.610949350429153e+307":126,"v":""}
return a/b/c
};
var argument2 = 1.6185425055302262e+308;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['sJRZP'] = [100,607,59]
return a+b*c
};
var argument4 = {"":"","-1":618,"RUa3=B,":"t","fR8":1.7707145539440148e+307,"P":783,"Hg$_&{":122,"1.3613893644589698e+308":"h","r":"<8"};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = ""
return a*b-c
};
var argument6 = 655;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][6] = null
argument8[3.3156198695370476e+307] = {"969":"I","":"O","1.5191608092957229e+308":"o+3W","9.319081405314465e+307":0,"1.7584281721517412e+308":100,"1.7364668455243997e+308":4.830465180206952e+307,"1.9305515978258529e+307":6.514765821864365e+306,"1.3279959198054731e+308":460,"5.870007448830008e+307":893,"-100":705}
argument8[3.3156198695370476e+307] = true
return a+b-c
};
var argument8 = 8.585811667582848e+307;
var base_0 = ["7"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test414.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)