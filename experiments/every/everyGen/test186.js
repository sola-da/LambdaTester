





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][7] = 655
return a-b*c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = ""
base_1 = {"5":"","1.475639412766337e+308":1.3448314516570485e+307,"2.7300350637811955e+306":6.353633819782083e+307,"1.7959780547753303e+308":126}
base_1['length'] = false
return a-b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = 1.292747918330382e+308
base_2[9] = [618,969,705,403]
return a/b*c
};
var argument5 = false;
var argument6 = "s";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = 2.938928697012146e+307
base_3[4] = false
return a*b/c
};
var argument8 = "";
var base_0 = ["oh","!","EUO-","ysCW(o","7B","?","H=","yy","?A"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["oh","!","EUO-","ysCW(o","7B","?","H=","yy","?A"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["oh","!","EUO-","ysCW(o","7B","?","H=","yy","?A"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["oh","!","EUO-","ysCW(o","7B","?","H=","yy","?A"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test186.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)