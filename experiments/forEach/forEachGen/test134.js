





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = "!"
base_0[4][4] = true
argument3 = {"0":"+Y","460":"","607":1.880803487283563e+307,"Y":"","F":"","D":"+JO","":")"}
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = false
base_1[0][1] = 618
return a+b*c
};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][1] = 126
base_2[4][4] = "AL"
base_2[3] = true
return a+b-c
};
var argument5 = {"5":"K","213":-100,"823":627,"1.0213969631202309e+308":607,"4.898670874382906e+307":1.17216637004474e+308,"":"","`":"","1.5576545106665314e+308":"","'":627,"6.055931893934415e+307":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = [655,"p"]
argument7[3.0481490052276395e+306] = null
return a+b*c
};
var argument7 = null;
var argument8 = "n|";
var base_0 = ["3Z",":","8Z","Aw","<;","u","v","="]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3Z",":","8Z","Aw","<;","u","v","="]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3Z",":","8Z","Aw","<;","u","v","="]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3Z",":","8Z","Aw","<;","u","v","="]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test134.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)