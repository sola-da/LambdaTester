





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3][6] = false
argument2[8.748669805137695e+307] = {"59":783,"969":"I","1.0357435269525688e+308":"",",":"fc","7.617762862573461e+307":7.409321026783806e+307,"#F":""}
argument3['AA@'] = ""
return a-b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = 8.828381913751784e+307
return a/b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = {"627":"","655":5.473476919467388e+307,"x-3V":6.468505220719751e+307,"9.484533795057188e+307":"","1.0237407685918637e+308":2.3621360007810896e+307,"":9.727772990737494e+307,"z":3.1056342423287e+307}
base_2[8] = {"157":"","":"","7.61758997079203e+307":1.5338525379323281e+308,"1.7976931348623157e+308":"|",";":1.4284025393189291e+308}
base_2[3][7] = true
return a+b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8][0] = null
return a*b*c
};
var base_0 = ["e","+oNX9","t","%","av","m","%","b"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e","+oNX9","t","%","av","m","%","b"]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e","+oNX9","t","%","av","m","%","b"]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e","+oNX9","t","%","av","m","%","b"]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findGen/test569.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)