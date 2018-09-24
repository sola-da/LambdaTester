





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = {"4.793729203952265e+307":1.0123126838672094e+308,"1.2100274684832765e+308":"3","?":1.3283661704239626e+308,"":5.158336972433071e+307}
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[460] = 0
argument4[3] = true
return a*b/c
};
var argument3 = "ld";
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][7] = null
argument6[8.748669805137695e+307] = null
return a+b*c
};
var argument6 = null;
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[403] = {"2":"","893":"C_!mWk","":8.869814748993978e+307,"-1":1.7538791931809753e+308,"$":1.273212930708227e+308,"o":783}
argument9[-1] = 1.0322529994931313e+308
argument9[8] = {"59":"H","783":49,"843":"2","1.5930346224431764e+308":5.459674254979266e+307,"P&":"y","":595,"5.062647675476955e+307":157,"K?`":4.788154478797263e+307,"8.639664788900972e+307":""}
return a+b/c
};
var argument9 = null;
var base_0 = ["4",607,"R->",-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["4",607,"R->",-1]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["4",607,"R->",-1]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["4",607,"R->",-1]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test593.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)