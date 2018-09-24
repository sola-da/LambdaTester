





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = null
argument3[0] = true
argument2[0] = 2.11404794237361e+307
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][2] = 5.090411938842619e+307
argument2 = [618,627,242,607]
return a*b-c
};
var argument3 = "";
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][7] = ""
base_2[2] = ""
return a/b+c
};
var argument6 = true;
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[714] = {"3":49,"655":"@po=mx","893":"","]Uh":1.398661924317111e+308,"6.191823963445398e+307":"=x=h","7.681307293418637e+307":"9","":"y","5.004041121808952e+307":""}
base_3['length'] = "J,"
base_3 = [969,-100,969,627,607,460,59,607]
return a+b/c
};
var argument9 = {"242":"E","460":"","969":"fZf","-1":893,"":"","1.5740098833165188e+308":1.1397250880058809e+308,"5.103369243827552e+307":1.2186421422982974e+308,"lP":126,"2.8283979772395057e+307":-1,"1.3116823641661389e+308":1.0645581271319431e+308};
var argument10 = [627,100,403];
var base_0 = [655,122]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,122]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,122]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,122]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test229.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)