





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"213":"{b","}=":157,"1.0243683031029043e+308":893,"":714,">3":2.7458156318821406e+307,"`v":-100,"7.780349083549761e+307":2.134729487676876e+307,"8.518770855063717e+307":5e-324,"8.416665620610308e+307":"m"}
argument1['1SHF1'] = ""
return a+b/c
};
var argument2 = 893;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = {"100":0,"618":403,"655":1.2048967476903858e+308,"893":"B[lX","":"W","Q":783,"5.878840329889728e+307":242}
argument5[9] = "k-"
return a+b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = "("
base_2[3] = "Xs"
argument5[7] = [0,126,122,893,655,157,126]
return a*b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = 1.386913792595096e+308
base_3[1][2] = {"1.487296626325281e+308":"3G"}
argument6[2] = "vW"
return a/b-c
};
var argument7 = r_0;
var base_0 = ["r","i","F",">^","Jw","b_lSZ","B","^;i","*"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["r","i","F",">^","Jw","b_lSZ","B","^;i","*"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["r","i","F",">^","Jw","b_lSZ","B","^;i","*"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["r","i","F",">^","Jw","b_lSZ","B","^;i","*"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test774.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)