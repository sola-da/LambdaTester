





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = {}
base_0[7] = "D"
return a*b*c-d
};
var argument2 = null;
var argument3 = null;
var argument4 = null;
var argument5 = false;
var argument6 = "PP";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = {"893":"","-100":893}
argument5[0] = true
return a+b+c*d
};
var argument8 = true;
var argument9 = {"0":"","595":1.2100434981717361e+308,"618":"","":"","7.739119568926876e+307":1.1966862770489324e+308,"1.1806306536515448e+308":100,"1.1277822633002616e+308":0,"1.400334082336582e+308":""};
var argument10 = r_0;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = ""
return a*b*c+d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = false
argument14 = {"":"","Ee":"lhG","i":618,"3.116926982873771e+307":""}
argument14 = true
return a/b+c/d
};
var argument13 = true;
var argument14 = null;
var base_0 = [242,627,783,843,"t",">W","k(","B",213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,627,783,843,"t",">W","k(","B",213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,627,783,843,"t",">W","k(","B",213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,627,783,843,"t",">W","k(","B",213]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test25.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)