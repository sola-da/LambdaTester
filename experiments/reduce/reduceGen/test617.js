





var callbackArguments = [];
var argument1 = {"1.8576499255123323e+307":""};
var argument2 = false;
var argument3 = 607;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = null
base_0['length'] = null
return a-b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = true
argument6[25] = 9.248460422465781e+307
base_1[7] = false
return a-b+c+d
};
var argument6 = null;
var argument7 = false;
var argument8 = null;
var argument9 = 893;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.1277822633002616e+308] = 3.8222163583996976e+307
argument8[8] = false
return a/b+c/d
};
var argument12 = {"9":460,"25":627,"59":"","893":"","":"","G":969,"]":""};
var argument13 = 2.903948918558264e+307;
var argument14 = {"893":"","":100,"p":157,"1.7867066391594666e+308":"","PG":"8","c":122,"'o":714};
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = 4.11096297159731e+307
argument14[403] = false
argument12[3] = true
return a+b-c+d
};
var base_0 = [59,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,0]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test617.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)