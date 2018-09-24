





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8] = [59,">","QBC","X",":6!kG","X(","H"]
base_0[0] = {"655":"","":"e","s":1.3379306331176897e+308,"1.7658925956114938e+308":""}
argument3[7] = ""
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][1] = [122,618,82,"Zo"]
argument3[1.7394185942769049e+308] = [122,"9","1{Q3(v",595,969,-1]
return a/b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = 9.664476328753384e+307
argument4['?'] = {"62":82,"213":"]0>Dr","460":"x","6.480631047974893e+307":"","":1.2787697432181799e+308,"i":460,"H":6.709310805679605e+307,"RE6":714,"1.6679668012642575e+308":"Nd"}
return a-b+c
};
var argument4 = {"460":"","627":59,"":"c","CR":""};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = null
return a/b/c
};
var argument7 = null;
var base_0 = [-1,49,242,595,627,49,25,607,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,49,242,595,627,49,25,607,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,49,242,595,627,49,25,607,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,49,242,595,627,49,25,607,0]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test721.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)