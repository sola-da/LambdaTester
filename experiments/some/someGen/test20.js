





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = "}6"
base_0[3] = "mJ"
base_0[8] = ""
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = {"":"C","Hae":1.4756003737002343e+308,"9.368683015129755e+307":"P","j":6.99694947330616e+307}
return a/b+c
};
var argument3 = r_0;
var argument4 = {};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = [59,607]
argument6[9] = false
argument6 = ""
return a-b-c
};
var argument6 = {"7":"","w3":9.25205146482183e+307,"":9.643084600690929e+306,"8.772593840550357e+307":"N"};
var argument7 = {"2":823,"213":"t","618":705,"2.9012762847135844e+307":"h","":""};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = "a(L)h%='BHT6"
argument10 = {"403":126,"1.335145991995537e+308":"","":"","@St":"1","6.444829343698777e+306":"","s":"f","1.7976931348623157e+308":"[Kv"}
return a/b-c
};
var argument9 = r_2;
var argument10 = {"213":"","242":6.805671506347077e+307,"460":"","595":"","783":"L",")":969,"":"4","1.4805221949558912e+308":"o","5.012887173795741e+307":1.7783794731378768e+308,"R^":5.435641141050289e+307};
var base_0 = ["VTJY89x?","5","Q","!","q3","F|r!?","W","F"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["VTJY89x?","5","Q","!","q3","F|r!?","W","F"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["VTJY89x?","5","Q","!","q3","F|r!?","W","F"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["VTJY89x?","5","Q","!","q3","F|r!?","W","F"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test20.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)