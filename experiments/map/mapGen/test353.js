





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = null
return a-b/c
};
var argument2 = {"":1.2714209598097229e+308,"6.132654860904094e+307":"","1.724556268402602e+308":4.112080789503721e+307,"V":1.5701157743527745e+308,"1.0195899508019878e+308":"m","k":9.805633733244038e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = null
argument5[157] = "sb"
return a-b+c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[618] = null
base_2[3][3] = 9.690860876147727e+307
return a-b-c
};
var argument6 = r_2;
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][3] = ["=",893,893]
argument9['A'] = 4.96448603546859e+307
argument8[3] = {"783":9.95321925071733e+307}
return a+b/c
};
var base_0 = [25,100,595,-100,49,618,-1]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,100,595,-100,49,618,-1]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,100,595,-100,49,618,-1]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,100,595,-100,49,618,-1]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test353.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)