





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[157] = ["v",242,100,"h",-1]
argument3['#R[+'] = ""
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.7121211182125595e+308] = "<"
base_1[3] = null
base_1[5] = "b"
return a-b*c
};
var argument3 = r_1;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = {"100":"Je"}
base_2[1]['!cck7Mm'] = [">","QBC","X",":6!kG","X(","H","r7","K","WY6"]
base_2[0][4] = [714,157,705,122,969,823,1.7976931348623157e+308,618,843,157]
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = {"Q<":9.284542135757962e+307,"":"","1.2697286200770541e+308":6.583075321756736e+307}
argument6[157] = ["1{Q3(v","Oo(XfY##y",">"]
argument6 = ["K","D",460,595,")t","ORE6"]
return a-b-c
};
var argument6 = null;
var base_0 = [969,59,126,893,"d","Tjvh;",607]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,59,126,893,"d","Tjvh;",607]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,59,126,893,"d","Tjvh;",607]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test705.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)