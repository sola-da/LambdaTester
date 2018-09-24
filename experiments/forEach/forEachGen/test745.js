





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = true
argument2[2] = ""
argument1[7.92397107964922e+307] = true
return a/b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = ""
argument4[1.4570946481947045e+308] = 1.7946151730542979e+307
return a/b+c
};
var argument4 = "";
var argument5 = 1.522643093336112e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.9097830510613482e+307] = {"82":6.371753424765524e+307,"y":"","":1.510552957193401e+308}
argument7[8.639664788900972e+307] = {"100":"","714":1.7976931348623157e+308,"1.1858708733006344e+308":1.2635041424305134e+308,"-100":460,"3.743110149232812e+307":242,"7.848383258457077e+307":969,"8.833083949663643e+307":5.146571207714699e+307,"":25}
base_2[6] = null
return a*b+c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.3130321063336282e+308] = true
return a/b+c
};
var base_0 = [714,"S","$LP","wi","w7TJ"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"S","$LP","wi","w7TJ"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,"S","$LP","wi","w7TJ"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,"S","$LP","wi","w7TJ"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test745.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)