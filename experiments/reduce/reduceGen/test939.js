





var callbackArguments = [];
var argument1 = true;
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[59] = ["R","M","OS","SQ>+"]
return a+b*c+d
};
var argument5 = true;
var argument6 = r_0;
var argument7 = {"705":"hR","":6.251033393398987e+307,"3.0505301770918784e+306":"y","4.237346177772791e+307":"<E","9.460116162183437e+307":5.172262874860439e+307,"^N":2.0937641626910042e+306,"1.0592923222845778e+307":"","-":""};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6] = ""
argument5['s'] = null
return a*b+c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = null
argument10[';N'] = "r"
return a-b+c*d
};
var argument10 = 7.83668460745596e+307;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][1] = null
return a+b-c*d
};
var argument12 = r_1;
var base_0 = [893,0,714,893,403,969,714,242,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,0,714,893,403,969,714,242,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,0,714,893,403,969,714,242,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,0,714,893,403,969,714,242,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test939.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)