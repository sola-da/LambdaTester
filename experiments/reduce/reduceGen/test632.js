





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = 49
argument2[403] = "<!+"
return a*b*c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[460] = {"122":403,"783":1.76571743658164e+308,"893":1.3836036578250795e+308,"4.846711076906317e+307":627,"7.494782930259858e+307":"4","":1.0218962670590344e+307,"1.5536047214260925e+308":2.2555540212523655e+307,"D":"","-100":-100,"z":""}
base_1[2][0] = 59
return a-b/c-d
};
var argument3 = false;
var argument4 = 5.746626607459251e+307;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[595] = ""
argument7[595] = 122
argument7[627] = "5U`"
return a+b*c/d
};
var argument6 = null;
var argument7 = false;
var argument8 = null;
var argument9 = false;
var argument10 = false;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[8] = true
argument9 = ""
argument8 = false
return a*b+c*d
};
var base_0 = [100,0,893,618,82,0,49,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,0,893,618,82,0,49,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,0,893,618,82,0,49,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,0,893,618,82,0,49,122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test632.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)