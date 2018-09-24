





var callbackArguments = [];
var argument1 = r_0;
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['l&'] = ["e","H","J{L;;",25,"I","j","F"]
argument3[6] = [655,"nF",-100,":","V",627,893]
argument2[1.1532786076532189e+308] = 893
return a/b-c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[627] = -100
argument6[2] = 213
argument7['HMm'] = "ez"
return a-b+c+d
};
var argument6 = ["6","@6"];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = null
argument8[5.71178064163152e+307] = ""
argument7[2.1869172855352885e+307] = 3.746066797978264e+307
return a+b+c/d
};
var argument8 = "N";
var argument9 = false;
var argument10 = null;
var argument11 = "";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = {"705":"x","6.938241900711498e+307":25}
return a*b*c/d
};
var base_0 = ["B","T","{","]S","L3,","0dM","aI"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B","T","{","]S","L3,","0dM","aI"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B","T","{","]S","L3,","0dM","aI"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B","T","{","]S","L3,","0dM","aI"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test972.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)