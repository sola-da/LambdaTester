





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = 1.4898636621218983e+308
argument3[3] = 893
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[126] = {"3":"$u","25":"-","705":"J","1.0701348070306915e+308":"",":S":"%;","18{":655,"":""}
argument4[4] = "m"
return a-b/c
};
var argument3 = r_1;
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = {"3":1.392282022603362e+306,"5":"i","714":4.1050997770529946e+307,"6.48462256079936e+307":6.428245440695281e+307,"":1.5771257037811843e+308,"1.6938544773449687e+308":8.404499592072229e+307,"1.7976931348623157e+308":1.1774293082530186e+308,"4.1040087705122585e+306":126,"2.9376763302697463e+307":5.060075385007627e+307}
return a+b*c
};
var argument6 = true;
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][4] = ["G&",893,25,893,82,"5Z_","<","O"]
argument9[1.3130321063336282e+308] = null
base_3[5] = ""
return a+b-c
};
var base_0 = [705,595,655,607,893,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,595,655,607,893,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,595,655,607,893,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,595,655,607,893,460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test308.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)