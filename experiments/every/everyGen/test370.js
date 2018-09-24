





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][6] = {"783":"","1.7976931348623157e+308":1.1426376075627333e+307,"":5.431715432314543e+307,"7.579864000533154e+307":627,"-c":"","k":1.4983491334095916e+308,"5.125557438179696e+307":242,"5J":"","1.076832147384313e+307":1.0815119918979892e+308}
base_0[1] = ["N","dh","&","+","k","_","waQH","xc-o"]
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = false
base_1[8] = 1.525944607810837e+308
argument4[2.4183178393969103e+306] = null
return a+b/c
};
var argument3 = null;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['sJRZP'] = [595,403,100,618,607]
argument7[6] = [783,59,213,157,655,893,59]
return a/b/c
};
var argument6 = {"7.303201808839228e+307":1.4279613862868489e+308,"2.7608538342741447e+307":"","":213,"ht1R":"","1.3276466738196832e+308":"","OP":"rS^","9.573642442951698e+307":"9","FWv9":"R_6}","1.0839412254275045e+308":6.057992580806615e+307,"1.7055360203662907e+308":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.3156198695370476e+307] = null
return a+b/c
};
var base_0 = ["2}","h","6d","a"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2}","h","6d","a"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2}","h","6d","a"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2}","h","6d","a"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test370.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)