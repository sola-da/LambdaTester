





var callbackArguments = [];
var argument1 = 59;
var argument2 = null;
var argument3 = [59,655,49,655];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = {"4.886904685613751e+306":"N","1.4982425864907225e+308":"F["}
return a*b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[25] = null
base_1[0][3] = [82,82,823,783,213,595,893,126,126,627]
argument6[7.463432409233234e+307] = true
return a+b+c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = [100,460,"B"]
base_2[5] = "z-W"
argument8[0] = 2.0134424642436114e+307
return a+b/c*d
};
var argument7 = r_2;
var argument8 = true;
var argument9 = false;
var argument10 = null;
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = {"@V%W":"D R`"}
argument10[627] = null
return a+b*c*d
};
var base_0 = [-1,618,627,823,714,25,157,0,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,618,627,823,714,25,157,0,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,618,627,823,714,25,157,0,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,618,627,823,714,25,157,0,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test322.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)