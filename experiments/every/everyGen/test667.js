





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][7] = {"0":"","213":4.273959636589443e+307,"893":"","}":"","1.0757779751393317e+308":"","2.400324396028558e+307":714,"1.832060785626497e+307":1.1945329604829922e+308,"":1.370369415709412e+306,"2.6323744499367724e+307":""}
return a*b*c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][4] = ""
argument4[3.3156198695370476e+307] = null
return a+b*c
};
var argument4 = [49,"E",655,"DGg;k",714];
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[893] = [969,595,823]
base_2[1][6] = {"25":"m","49":6.32061962197194e+307,"714":2.084147905666802e+307,"8.163851668820137e+307":"Q","":627,"!":"","-1":627,"**p%":"WO","8.324225060469998e+307":403}
argument8[122] = true
return a/b-c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2.4183178393969103e+306] = {"25":"","Gq":25,"":"mY","n":595,"aA":"sq"}
argument9[893] = {"9.592526792849066e+307":1.067116788325705e+308,"d":7.514544561367426e+307,"7.629255708966234e+307":">;"}
return a+b*c
};
var argument9 = ["O","We%","a","<iV&L=","sG","I","|"];
var argument10 = r_1;
var base_0 = [242,25,618,25,893,969]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,25,618,25,893,969]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,25,618,25,893,969]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,25,618,25,893,969]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test667.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)