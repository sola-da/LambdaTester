





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8][3] = ""
argument3[403] = ""
base_0[1] = "_H"
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4.224481734419934e+307] = 893
argument3[1] = "X4H"
return a+b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = false
argument5[1.4034744228995816e+308] = "9<"
return a+b+c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.7847438319683965e+308] = [",l","DL+"]
argument7[5.262931091360336e+307] = {"157":59,"714":0,"":1.2954861718276338e+308,"Z":"","e":59,"5e-324":"","?g?#&":"a","CR!Bku":6.624558510802925e+307}
base_3[0] = {"49":2.7912324625688437e+307,"705":"z","783":242,"823":59,"jJ":1.5767346472025272e+308,"|d":403,"-100":2.9477498575346417e+307,"1.2850011987302841e+308":823,"7.287183722620789e+307":"K,O"}
return a*b*c
};
var base_0 = [655,25,823,157,403,126,82,969]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,25,823,157,403,126,82,969]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,25,823,157,403,126,82,969]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument5)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test577.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)