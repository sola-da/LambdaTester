





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['wIs'] = true
argument2[-1] = {"'X":618,"":-1,"l":"3"}
return a+b*c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[618] = 3.026090040649995e+307
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.4034744228995816e+308] = ["!","iH","T7X","0m","mAVC",";k0|;","&","R"]
argument7[0] = {"242":618,"607":-100,"893":"",">@":1.7009308705241491e+308,"lj":"","4.62345860082126e+307":2.088579947161323e+307,"gY":"}-","4.3988693484867004e+307":1.3996053891134633e+308,"1.4159010589023574e+308":"o0"}
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = {"59":"Wj","627":"","":403,"g":9.30113560101831e+307}
base_3['length'] = {"157":100,"":7.368407969929942e+307,"T":1.6228918081248538e+308,"G":969,"eL":1.6933667071873248e+308,"z":595}
argument8[3] = null
return a-b/c
};
var base_0 = ["1","22Cg4","+","w","$O"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1","22Cg4","+","w","$O"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1","22Cg4","+","w","$O"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1","22Cg4","+","w","$O"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test665.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)