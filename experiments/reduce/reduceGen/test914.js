





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = true
return a+b+c-d
};
var argument2 = {"0":7.573086841626248e+307,"":-100,"^V=m":122};
var argument3 = {"z":783};
var argument4 = r_1;
var argument5 = r_1;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7.463432409233234e+307] = [607]
argument4[9.331954948603684e+307] = -1
return a/b*c-d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5.71178064163152e+307] = false
return a+b-c*d
};
var argument8 = r_1;
var argument9 = null;
var argument10 = r_1;
var argument11 = r_2;
var argument12 = {"S":82,"":"","1.7976931348623157e+308":1.0024392433718992e+308,"x&":"7"};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1.4205726959827606e+308] = 9.238877880086432e+307
return a*b+c/d
};
var base_0 = [";r","aJ","^","A","wl","k"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";r","aJ","^","A","wl","k"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";r","aJ","^","A","wl","k"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";r","aJ","^","A","wl","k"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test914.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)