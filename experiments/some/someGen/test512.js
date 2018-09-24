





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = null
return a/b+c
};
var argument2 = {"1.6297943070589795e+308":"Si"};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = {"0":3.1886950609758187e+307,"25":1.1151559407501877e+308,"feP":0,"":"$O"}
argument5[2.249941463060761e+307] = ["Y","Q","e","C","C","(RZ","s,","(?","+x2)o","dpH"]
argument5['j'] = null
return a-b*c
};
var argument5 = 1.3196116608924205e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1]['{X'] = 9.729236966774215e+307
base_2 = [783,893,126,893,100,893]
argument7 = null
return a*b+c
};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = true
argument9[6] = [705,-1,403,49,"<a",714,"z"]
return a*b+c
};
var argument9 = "";
var argument10 = true;
var base_0 = [49,-100,100,5e-324,969,-100,460,705]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,-100,100,5e-324,969,-100,460,705]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,-100,100,5e-324,969,-100,460,705]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,-100,100,5e-324,969,-100,460,705]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test512.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)