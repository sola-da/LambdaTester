





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {}
base_0[0][4] = {"783":783,"1.6619409595152823e+308":618}
argument1[1] = ""
return a*b*c+d
};
var argument2 = 1.5236648405629524e+308;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6.35085648319999e+307] = null
return a*b+c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[595] = 783
base_2[6] = {"82":100}
return a/b-c*d
};
var argument5 = false;
var argument6 = r_1;
var argument7 = [627,126,242,705,893,126,655,157,25];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = ""
argument7[2] = null
argument5 = "cqt}"
return a+b/c+d
};
var base_0 = ["h&7","m0","k1K=k)","f","A","j","+#;","hc","j94","PR"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h&7","m0","k1K=k)","f","A","j","+#;","hc","j94","PR"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h&7","m0","k1K=k)","f","A","j","+#;","hc","j94","PR"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h&7","m0","k1K=k)","f","A","j","+#;","hc","j94","PR"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test864.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)