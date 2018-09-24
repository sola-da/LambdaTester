





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[714] = ["$",618,627,122,"W2]b",893,705]
argument2['A'] = ["b","v<^",157,5e-324,823,"xG","c",213,"P"]
return a/b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = null
base_1[8] = null
argument4['A'] = {"655":595,"823":3.454648788484347e+307,"":"","u":"1p;"}
return a-b*c
};
var argument4 = false;
var argument5 = {")A[k":"3","":"","4.759249587913979e+307":1.375602668177641e+308,"6.872738398032286e+307":"K"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][7] = {"":823,"6.793156162777713e+307":"B&z","1.1599405616970064e+308":595,"-1":"UY])"}
argument6[3.377960715099946e+307] = false
return a-b+c
};
var argument7 = "0";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = {"5":"=g","1.5392462918054231e+308":"q","":"|","e":"b"}
return a+b*c
};
var base_0 = ["f","MV","V","{G2","<","#","d"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["f","MV","V","{G2","<","#","d"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["f","MV","V","{G2","<","#","d"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test155.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)