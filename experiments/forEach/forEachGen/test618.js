





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = [893,213,893,823]
return a+b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = null
return a-b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['?'] = {"82":1.3644148199439623e+308,"1.085715304385397e+308":655,"1.0637997615101885e+308":"C","1.3401247667724389e+308":"","1.419278052360903e+308":122}
argument6 = ""
argument6[3.462967293930506e+307] = ""
return a*b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.7976931348623157e+308] = {"9":"B","595":607,"627":"","=6":"","":"n|6K}","@32":"","4.1318074368701146e+307":1.3114075684825867e+308,"7E":"","]E":7.830566582693481e+307}
argument7[1.4034744228995816e+308] = [783,627,49,627,213,49,157]
return a/b+c
};
var base_0 = [":","(",",3","GP","g","TOiy"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":","(",",3","GP","g","TOiy"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":","(",",3","GP","g","TOiy"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":","(",",3","GP","g","TOiy"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test618.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)