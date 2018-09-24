





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = false
argument3[4] = ">"
argument3[0] = false
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = true
argument3[3] = {"59":9.35693494596962e+307,"100":"","655":"","714":"xI","":607,"A":6.895437249444332e+306,"-1":655}
return a+b-c
};
var argument3 = {"82":5e-324,"157":242,"460":"1","893":"","7.761789459747812e+307":"cGR","":"4Q?","9.460068054429244e+307":"","K":1.7425885189714418e+308,"2.460852935942085e+307":"1i"};
var argument4 = "q";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = null
argument7[1] = ["K","iCP",")tAxt","0E","?","FKY`pKPHNw^D","c","o7","#"]
argument6[7] = "JM"
return a+b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][4] = 618
argument8[126] = [823,82,655,82]
return a*b/c
};
var argument8 = r_0;
var argument9 = r_0;
var base_0 = [403,100,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,100,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,100,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,100,100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test221.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)