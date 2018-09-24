





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = ""
base_0[6] = {"460":"C-s"}
return a+b-c-d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = "y9"
argument4 = 3.4561610814354295e+306
argument4[3] = null
return a-b+c+d
};
var argument4 = true;
var argument5 = null;
var argument6 = null;
var argument7 = [714,100,1.7976931348623157e+308,893,403,843];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3] = {"122":9.485573218955392e+307,"705":595,"783":"","":3.8000609557701085e+307,"8-O=":1.082150339279095e+308,"o":"P","2.4071910492280717e+307":"sU%","#":""}
base_2[9] = {"157":"G","K0n":"E","1.3024214951916493e+308":1.5838780135121968e+307,"7.513600885346787e+307":607,"":"","F":655,"Q":1.327205183442181e+308}
return a/b*c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = null
return a-b+c/d
};
var base_0 = [607,595,157]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,595,157]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,595,157]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,595,157]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test60.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)