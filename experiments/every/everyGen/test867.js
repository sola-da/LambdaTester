





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = ["52a",126]
argument2 = {"460":"C|`,","1.7150689326303277e+308":"w","T":"","5.444156662448709e+307":6.513584168296054e+307,"":"","5.018072413944494e+307":"0","D":"jr","ru":"2a_"}
argument2[2] = {"49":"X*","705":"_$9d","":460,";":"-a7<M","z":"","B":""}
return a+b*c
};
var argument2 = "";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = false
argument6[8] = 2.7166803070113894e+307
return a-b*c
};
var argument5 = null;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][6] = ["e","u"]
argument8[2] = null
return a-b+c
};
var argument8 = false;
var argument9 = false;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12 = false
argument12[6] = null
argument11[1.3599216339661573e+308] = null
return a*b/c
};
var argument11 = r_2;
var argument12 = null;
var base_0 = ["IT ","i","^","PHB$0H","H7x","q"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["IT ","i","^","PHB$0H","H7x","q"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["IT ","i","^","PHB$0H","H7x","q"]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["IT ","i","^","PHB$0H","H7x","q"]
var r_3= undefined
try {
r_3 = base_3.every(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/every/everyGen/test867.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)