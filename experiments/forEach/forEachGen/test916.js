





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.1030928633982176e+308] = {}
argument2[969] = null
argument2[6] = 1.1752281634118142e+308
return a-b-c
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.268696794505825e+308] = ["#6",823,"i",")6","m",823,"a",783]
base_1[3] = ["C","N(t!",":","F4<,","j","r","<","M+$?Pct2","W","9u%c"]
argument5['5pji-Y'] = ""
return a/b-c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8.748669805137695e+307] = ""
argument7['5pji-Y'] = 1.4130824005434324e+308
return a+b+c
};
var argument7 = ["V","(&Ax","cBb","+","sM","-","C","4"];
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.268696794505825e+308] = 157
argument10[3.0481490052276395e+306] = null
return a/b-c
};
var argument10 = 3.708178680276065e+306;
var argument11 = [783,843,49,627,843];
var base_0 = [59,618,1.7976931348623157e+308,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,618,1.7976931348623157e+308,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,618,1.7976931348623157e+308,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,618,1.7976931348623157e+308,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test916.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)