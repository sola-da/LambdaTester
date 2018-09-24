





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3] = -1
base_0[2] = null
return a*b/c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = ""
base_1[0][0] = ["e"]
argument4 = [122,25,705,122,823,618]
return a-b/c+d
};
var argument3 = "";
var argument4 = true;
var argument5 = r_2;
var argument6 = {"0":618,"823":"","969":"","":655,"3.152114454622647e+306":"","w":"","9.273031445021353e+307":4.887621827241537e+307,"1.3288971185144682e+308":"","9.621457129037739e+307":126,"ms":8.299419399169101e+307};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = "P"
base_2[5] = true
argument5[2] = "p"
return a+b+c+d
};
var argument8 = ",";
var argument9 = "";
var argument10 = {"403":"g@Zz","1.3097447795990767e+307":"","dB":82,"7.199546950176394e+306":5.197662223883925e+307,"7.500627425899161e+307":"","g":6.004962972088667e+307,"":5e-324,";j":"S"};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = ""
return a-b*c/d
};
var base_0 = [893,25,213,969,242,618,82,82,25]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,25,213,969,242,618,82,82,25]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,25,213,969,242,618,82,82,25]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,25,213,969,242,618,82,82,25]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test147.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)