





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = ["5y","Sb","q",-100,"Q9-tZ"]
base_0[2][0] = true
return a/b/c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2.1869172855352885e+307] = [823,655,5e-324,49,-100,-1,969,595,59,213]
return a+b/c*d
};
var argument3 = r_1;
var argument4 = null;
var argument5 = {"403":242,"618":-1,"5e-324":"","":"","1.211258978417828e+308":403,"1.3440340227385305e+308":49};
var argument6 = r_2;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = true
argument6[25] = null
return a*b*c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[126] = ["V","z","x",")","v,","z","j8","Hr]%Yy","he*k"]
base_3[0][9.12287810829114e+307] = null
return a/b/c*d
};
var base_0 = ["7","c2","o","$","4|","M#T8"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7","c2","o","$","4|","M#T8"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7","c2","o","$","4|","M#T8"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7","c2","o","$","4|","M#T8"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test359.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)