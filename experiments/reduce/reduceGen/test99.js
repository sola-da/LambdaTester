





var callbackArguments = [];
var argument1 = [823,893,59,618,714,595];
var argument2 = 969;
var argument3 = 4.632506268215255e+307;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = 7.401029941075133e+307
return a/b+c-d
};
var argument5 = false;
var argument6 = "2";
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = "A!9"
base_1[4] = 6.464373465931201e+307
return a-b*c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = null
argument9[126] = false
return a*b+c/d
};
var argument10 = {"1":"9","157":969,"595":"","627":"e","1.3551356825272355e+308":"","1.1865901479716535e+308":1.258109991298427e+308,"7.990503264191458e+307":213,"2.960730553232072e+307":"","7.651563764122467e+307":"9"};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[126] = false
base_3[3] = "y="
argument12[1.1277822633002616e+308] = "r4"
return a+b*c*d
};
var argument12 = 1.294927719391811e+307;
var argument13 = null;
var base_0 = [100,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test99.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)