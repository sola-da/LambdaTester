





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = [-1]
argument2[157] = ""
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[-100] = 5.672232468031169e+307
argument3 = 1.2216971973609772e+308
argument3[3] = {"82":1.4204916803310751e+308,"":126,"6.942840482533722e+307":"t",";8":1.6250176562353844e+307,"ws":0,";>":"r","Q":"<!wx%"}
return a*b*c
};
var argument3 = [0,403,59,655,157,157];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['wIs'] = "S"
argument6[-100] = null
argument5[4.224481734419934e+307] = ""
return a/b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.0481490052276395e+306] = {"213":"^T","o":3.5003853805617083e+307,"":"?C|","1.7442453447142132e+308":1.0954084751346598e+308,"<":1.130966972052068e+308,"*b":3.1635013747330123e+307}
base_3['length'] = false
argument6[2] = ""
return a*b-c
};
var argument6 = null;
var argument7 = r_3;
var base_0 = ["ot","W","a"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ot","W","a"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ot","W","a"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ot","W","a"]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test456.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)