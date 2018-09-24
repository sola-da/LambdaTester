





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = "yrr"
base_0[4] = false
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = {"3":"","25":")","82":25,"618":"A","823":6.793156162777713e+307,"1p;":1.2496009928015157e+308,"7.357470478183649e+307":")A[k","":627,"1.375602668177641e+308":6.872738398032286e+307,"K":25}
base_1['length'] = -1
return a*b+c
};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = 82
argument4[7.92397107964922e+307] = null
argument6[4] = null
return a-b-c
};
var argument5 = 655;
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = {"82":1.7119989077918475e+308,"595":3.625799668295006e+307,"618":"5","714":"5","":893,"=g":"","|":"e","b":"","*":1.186040551622807e+308}
return a-b-c
};
var argument8 = null;
var base_0 = [627,"!",705,823,"AM","O"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,"!",705,823,"AM","O"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,"!",705,823,"AM","O"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,"!",705,823,"AM","O"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test156.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)