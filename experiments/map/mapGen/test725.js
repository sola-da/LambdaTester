





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = true
base_0[0][2] = ""
argument1[3] = true
return a/b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = ""
argument4[607] = 1.7946151730542979e+307
return a/b+c
};
var argument4 = "";
var argument5 = 1.522643093336112e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.7173047913506838e+308] = {"82":6.371753424765524e+307,"y":"","":1.510552957193401e+308}
argument7[-1] = {"100":"","714":1.7976931348623157e+308,"1.1858708733006344e+308":1.2635041424305134e+308,"-100":460,"3.743110149232812e+307":242,"7.848383258457077e+307":969,"8.833083949663643e+307":5.146571207714699e+307,"":25}
base_2[5] = null
return a*b+c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[893] = true
return a/b+c
};
var base_0 = [714,"S","$LP","wi","w7TJ"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"S","$LP","wi","w7TJ"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,"S","$LP","wi","w7TJ"]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test725.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)