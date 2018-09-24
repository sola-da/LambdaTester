





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4.953791384496108e+307] = null
argument3[0] = {"0":"","1.555483677233843e+308":157,"tQ":4.613379241129689e+306,"hP|j4":213}
return a-b*c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.0500354979187844e+308] = 6.251443983712442e+307
base_1[8][0] = [460,213,49,-100,-100,969,122,714,595]
return a+b/c
};
var argument5 = {"1.2079712668168927e+308":"","h[I5":"T-:70&","":5.033607476158719e+307};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['!j'] = 460
argument7[893] = true
argument7[5] = {"59":9.35693494596962e+307,"100":"","655":"","714":"xI","":607,"A":6.895437249444332e+306,"-1":655}
return a-b/c
};
var argument8 = {"82":5e-324,"157":242,"460":"1","893":"","7.761789459747812e+307":"cGR","":"4Q?","9.460068054429244e+307":"","K":1.7425885189714418e+308,"2.460852935942085e+307":"1i"};
var argument9 = "q";
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[627] = null
argument12[100] = ["K","iCP",")tAxt","0E","?","FKY`pKPHNw^D","c","o7","#"]
argument11[4] = "JM"
return a+b-c
};
var argument11 = null;
var base_0 = ["*c","M*","di","{OQ","a",":Z","uo)"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*c","M*","di","{OQ","a",":Z","uo)"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*c","M*","di","{OQ","a",":Z","uo)"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*c","M*","di","{OQ","a",":Z","uo)"]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test216.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)