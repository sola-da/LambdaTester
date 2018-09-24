





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = {"126":4.3203526517879503e+307,"U":1.0377716089780668e+308,"":25,"Z":403,"E":823,"1.5715500730395385e+308":6.727631416188344e+307,"TGnt":157,"W":6.382633477958668e+307}
argument3['AA@'] = {}
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.0500354979187844e+308] = "p"
argument4[6.949630915607762e+307] = true
return a*b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = {"49":"S","969":"]7","":2.8468475109821127e+307,"f":"I","7.864705300777393e+307":1.286586925020972e+308,"YuV":893,"-1":"","4.1653052809313703e+307":1.4718359223909e+308,"1.7253973582840042e+308":627,"3.491534976507222e+307":""}
argument5[969] = null
return a+b*c
};
var argument4 = {"":"Fg(<"};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = true
base_3[3] = false
return a/b/c
};
var base_0 = [627,655,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,655,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,655,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,655,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findGen/test885.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)