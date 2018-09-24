





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.1881593224845412e+308] = false
base_0[3][1] = true
base_0[0][0] = [705,-100]
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['!j'] = {"B(gl":5e-324,"![y":7.591494736725798e+307}
base_1[1][7] = null
argument3[1.399309004356655e+308] = ["|","4","K","@","z"]
return a+b+c
};
var argument3 = null;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['f-d'] = true
argument7[0] = {"82":705,"6|F":823}
base_2[6] = ""
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = 1.6408977581158965e+308
base_3[1][0] = 4.229748724621186e+307
return a+b+c
};
var argument7 = r_2;
var argument8 = {"0":"b","157":9.811719322561624e+307,"627":"","823":8.746692004339982e+307,"893":242,"7.785099972544536e+307":"M","3.7399973073883827e+307":"N","^!`rIn9KP":"]"};
var base_0 = [607,618,595,100,627,25,126,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,618,595,100,627,25,126,705]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,618,595,100,627,25,126,705]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,618,595,100,627,25,126,705]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test371.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)