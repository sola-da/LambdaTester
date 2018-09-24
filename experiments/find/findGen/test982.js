





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1.7261030733891165e+308] = {"122":59,"460":"^gH","1.7090674076696002e+308":25,")Yb)vlc":"BX","4.1020034484871404e+307":893,"":5.814633243787031e+307}
return a*b*c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['AA@'] = {"":"","q;":655}
return a*b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[25] = [823,82,655,823,969,0,705]
argument6[242] = null
return a+b/c
};
var argument6 = r_2;
var argument7 = {"1.7092930255058692e+308":403,"1.2490605937381335e+308":"|v"};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = 893
return a+b-c
};
var argument9 = {"":213};
var argument10 = r_2;
var base_0 = ["YL3R7V",1.7976931348623157e+308,"D"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["YL3R7V",1.7976931348623157e+308,"D"]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["YL3R7V",1.7976931348623157e+308,"D"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["YL3R7V",1.7976931348623157e+308,"D"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test982.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)