





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = {"0":893,"59":"","460":"Y","1.1265387094923743e+308":"","8.962666612451262e+307":4.0591713751426497e+307,"":"","4.1206974229972455e+307":""}
base_0[0][0] = {"n[b":2.1128937280488696e+307,"":-100,"8.573915190154912e+307":"B1","2.7842170678797034e+307":783,"4.084111467471318e+307":"","1.4183510318180755e+308":1.7976931348623157e+308}
argument2[2] = true
return a-b/c
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = 5.341720909123559e+307
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = null
return a*b*c
};
var argument6 = 4.2106896605538573e+306;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = [783,655,783,25]
return a/b/c
};
var argument9 = true;
var base_0 = ["1UmF","ynp","?4:R%"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1UmF","ynp","?4:R%"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1UmF","ynp","?4:R%"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1UmF","ynp","?4:R%"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test184.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)