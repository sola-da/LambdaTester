





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = null
argument2[3] = ["|>","^1Z",607,"n","_",242,"dI",242]
argument3[1] = null
return a*b-c
};
var argument2 = [893,969,627,714,100,823,1.7976931348623157e+308,59];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = {"823":"L","":"][","3.562146923959553e+307":"","1.6204649761450865e+308":100,"1.6358679762867673e+307":213,"1.7719145372722744e+308":2.953783028015147e+306}
return a-b/c
};
var argument4 = null;
var argument5 = "Iw=]";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = ["f","3","HDLB","h","Y","(","K","<N"]
return a/b-c
};
var argument7 = "";
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['T'] = ""
argument11[2] = {"607":"","":100,"$1":"^_Ol#"}
argument11[0] = ["%","@8nO{f","1f","cd?3","9b"]
return a+b-c
};
var argument10 = false;
var base_0 = ["W5","n6","=2]BO","6wFFdoqKv","n","R","w"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W5","n6","=2]BO","6wFFdoqKv","n","R","w"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W5","n6","=2]BO","6wFFdoqKv","n","R","w"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W5","n6","=2]BO","6wFFdoqKv","n","R","w"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test509.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)