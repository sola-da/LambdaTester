





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = true
argument3[5] = null
base_0[9] = false
return a-b*c
};
var argument2 = false;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = [627,618]
base_1[1][3] = {"607":"","705":"","714":9.451233005769685e+307,"823":"","":655,"D":714,"-1":1.2806396948970135e+308,"GyW":"HjPa2HFD","K":"","5.812014537107581e+306":122}
base_1[4] = false
return a*b/c
};
var argument5 = ["J",49,"A",783,213,"83",122,"Uy",213];
var argument6 = "%";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = {"403":1.2615311800128134e+307,"607":"] ?E","5.17186099089822e+307":"4k","":1.4671031343187102e+308,"b5":1.7976931348623157e+308,"g":714,"A{":"Q%3"," 3IkL(":"2"}
base_2[2] = true
return a*b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = ["Zfz,Ud","b","MAB","#vPA8j(T,S","3","_PU","q"]
return a-b*c
};
var argument9 = false;
var argument10 = {"1.456203133682739e+308":";","":8.889403371822815e+307,"1.2824268443199103e+308":5.5741150803673835e+306};
var base_0 = ["N"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N"]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N"]
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
require("fs").writeFileSync("./experiments/some/someGen/test935.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)