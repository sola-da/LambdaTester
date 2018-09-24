





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['v'] = [714,595]
argument3['T'] = true
base_0[2][2] = 1.1377877404533727e+308
return a*b/c*d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][2] = 2.244672515745814e+307
return a/b/c/d
};
var argument4 = [157,100,157,25,-100,823,1.7976931348623157e+308,-1,25];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = {"i":157,"P":"%"}
return a+b+c*d
};
var argument6 = "";
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['^N'] = null
base_3[4] = 25
argument8[1] = ["6I","Ue|",655]
return a*b+c*d
};
var argument9 = false;
var base_0 = [122,"B?B7",893,157,"pS7WN",893,607,"jyaALj","1Aa","T&Nd+"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"B?B7",893,157,"pS7WN",893,607,"jyaALj","1Aa","T&Nd+"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"B?B7",893,157,"pS7WN",893,607,"jyaALj","1Aa","T&Nd+"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"B?B7",893,157,"pS7WN",893,607,"jyaALj","1Aa","T&Nd+"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test331.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)