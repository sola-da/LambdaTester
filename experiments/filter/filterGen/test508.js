





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = true
argument3[4] = 100
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.7847438319683965e+308] = {"242":"X","627":242,"893":4.925882031110649e+307,"":"%6","t":""}
base_1[4] = 893
return a/b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5.262931091360336e+307] = null
argument5[5] = "h"
return a/b/c
};
var argument4 = r_2;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = {"242":100,"MuZ":"+","HGoqoZ`s#":"pN+","^a":"","3.926495475902549e+307":0}
return a-b*c
};
var base_0 = [618,5e-324,0,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,5e-324,0,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,5e-324,0,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,5e-324,0,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/filter/filterGen/test508.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)