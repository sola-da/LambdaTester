





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = {"893":1.7976931348623157e+308,"5e-324":4.85291016789038e+307,"V":"s{VfxmXXcKE","1.3481127226720866e+307":"X","":82,";`":"J_","z":460}
argument2[3] = "-q"
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = null
base_1[7] = null
base_1[2][7] = {}
return a/b+c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = ["0","g",")","q^","|","fHQbR","O",">"]
argument5 = {"122":2.847961530912833e+307,"#":"f","1.1166557477257628e+308":"%uS","h":"","":"B","1.3147398988955642e+308":"","{":"]","q?!":100}
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['sJRZP'] = {"":-1,"[":6.625903507930848e+307,"Y9fh":"t"}
base_3[1] = {"157":1.0555340769214381e+308,"213":"ty","GZu":"","W":"","":"`","B":"","T":"","9.394712200724362e+307":"","%":""}
base_3[1][4] = null
return a*b-c
};
var base_0 = [783,25,783,-100,157]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,25,783,-100,157]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,25,783,-100,157]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,25,783,-100,157]
var r_3= undefined
try {
r_3 = base_3.every(argument5)
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
require("fs").writeFileSync("./experiments/every/everyGen/test432.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)