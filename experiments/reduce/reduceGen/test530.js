





var callbackArguments = [];
var argument1 = false;
var argument2 = ["=M","u"];
var argument3 = [714,"1",618," -m"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = ""
return a*b/c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[82] = 618
argument7[2] = "a"
return a+b/c+d
};
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = [0,"0L","BM",157,49,627,"Kv","nCf"]
argument9[1] = {"1":")","100":0,"t":"sIi8","1.3226147381453042e+308":-100,"5.429309849290777e+306":4.1003116685988945e+307,"":"E","$v":"","Y,":242}
return a/b-c-d
};
var argument8 = r_2;
var argument9 = true;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[595] = ""
base_3[8] = 1.6952766620103209e+308
return a-b/c/d
};
var argument11 = null;
var argument12 = 1.6553420338204522e+308;
var base_0 = [823,126,5e-324,-100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,126,5e-324,-100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,126,5e-324,-100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,126,5e-324,-100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test530.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)