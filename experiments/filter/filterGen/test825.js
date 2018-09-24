





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[705] = {"100":157,"607":"e","r":")4WL","1.6743334980777482e+308":"","v":"a8r[","":"@","1.3266549643863434e+308":1.609748895695872e+307,",?kJ!":0,"5e-324":""}
argument2[6] = true
return a*b-c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = ["P","Mc","Y","m","%HNZ","wqf","g"]
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = false
return a*b/c
};
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-1] = true
argument8[3] = "|"
argument8[893] = {"823":1.3673355398607289e+308,"6.710356145433832e+307":"","4.0101555750546106e+307":"|jO!,","W":783,"6.019001405375562e+307":969,"5.974748738797892e+307":25,"2.2257451043973034e+307":"","":1.7552174166290383e+308}
return a-b/c
};
var argument8 = "IBnYG";
var base_0 = ["5","!wQq+b;(1R",122,"K%^","V",705]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test825.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)