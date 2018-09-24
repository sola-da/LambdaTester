





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = {"893":"(","":"^","&":""}
argument3[2.4183178393969103e+306] = true
return a/b/c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[122] = ["N","I&$","C1","Q","kxd","Rj","E","!D"]
base_1[1][6] = 783
base_1['length'] = "P"
return a-b+c
};
var argument5 = 3.72425965871637e+307;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.3599216339661573e+308] = 460
argument8[4.960033715165713e+307] = [59,25,100,-100,242,-1,705,122]
return a/b+c
};
var argument8 = r_2;
var argument9 = false;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[6] = false
argument12[6] = {"0":1.2686667917271384e+307,"82":"","627":1.5494519308071832e+308,"-1":"","1.1013759235066533e+308":893,"":"6v","9.20803941418951e+307":627}
base_3[1] = [0,126,82,-1,-100,607,823,714]
return a+b-c
};
var argument11 = ["5","8","5","%]7T"];
var argument12 = {"j":25,"b":5.769209924172425e+307,"":460,"JDU":3.54696358842057e+307,"am":"","O":"","3.8801540856826585e+307":823,"1.3250229781739033e+308":2.3116846365031627e+307};
var base_0 = ["G","m_","b6H","#","{+|","W","v"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["G","m_","b6H","#","{+|","W","v"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["G","m_","b6H","#","{+|","W","v"]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["G","m_","b6H","#","{+|","W","v"]
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
require("fs").writeFileSync("./experiments/every/everyGen/test379.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)