





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = true
return a*b+c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][7] = {"460":"%H","1.477354027939092e+308":8.418646702841952e+307,"[x":""}
argument5 = null
base_1[1][4] = false
return a+b+c
};
var argument5 = [100,213,893];
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][2][6] = false
argument8[1.7173047913506838e+308] = 1.4004643278111753e+308
return a+b-c
};
var argument8 = r_1;
var argument9 = r_1;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[6] = {"403":"I}C","618":1.7976931348623157e+308,"Kg":4.587370223354156e+306,"1.5999817154840984e+308":"","6.080250880338973e+306":"","Hq":1.7875371876098288e+308,"1.618355747058555e+308":1.6227807352469352e+308,"1.3536370969934171e+308":"","<":"*Z"}
base_3[7][2] = "f?"
argument12['3Tpj5'] = 7.873820516225196e+307
return a+b-c
};
var argument11 = [157,1.7976931348623157e+308,607,100,595,618,618,893];
var base_0 = ["T","G","k[g","D$","AV","<_E}0Z!rC"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["T","G","k[g","D$","AV","<_E}0Z!rC"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["T","G","k[g","D$","AV","<_E}0Z!rC"]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["T","G","k[g","D$","AV","<_E}0Z!rC"]
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapGen/test680.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)