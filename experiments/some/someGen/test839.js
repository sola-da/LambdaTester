





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = ""
argument2[705] = {"100":607,"705":"c","783":"e","969":2.9589662686909037e+307,"1.5049551425131912e+308":1.0671848557454943e+308,"1.3465430909758337e+308":-1,"":893}
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = 1.5997636377899204e+308
argument3[6] = null
return a+b+c
};
var argument3 = {"607":"","5e-324":823,"":655,"1.014470064063603e+308":9.05655961632288e+307,"C":213,"p`(":"o","1.2169959034319736e+308":1.4781653260810665e+308};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = ""
argument6[2] = 122
argument6[1] = true
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][8] = ""
return a+b*c
};
var base_0 = [";","G","+","l","a*","Z","d","Ah","%LG"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";","G","+","l","a*","Z","d","Ah","%LG"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";","G","+","l","a*","Z","d","Ah","%LG"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";","G","+","l","a*","Z","d","Ah","%LG"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test839.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)