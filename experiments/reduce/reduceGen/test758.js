





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][0] = {"I":"","8.929594868820213e+307":1.3095760490836017e+308,"6|":"cp"}
return a/b+c+d
};
var argument2 = false;
var argument3 = false;
var argument4 = r_0;
var argument5 = false;
var argument6 = 7.287345696250754e+307;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = true
argument5[3] = false
return a*b/c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = {"126":4.3203526517879503e+307,"U":1.0377716089780668e+308,"":25,"Z":403,"E":823,"1.5715500730395385e+308":6.727631416188344e+307,"TGnt":157,"W":6.382633477958668e+307}
argument9[1] = {}
return a+b+c*d
};
var argument9 = r_1;
var argument10 = r_0;
var argument11 = "p";
var argument12 = r_1;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[460] = null
base_3[6] = ["q<","=","5","4elgP","zp","q"]
return a/b+c-d
};
var base_0 = [25,49,59,705,607,49,607,25]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,49,59,705,607,49,607,25]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,49,59,705,607,49,607,25]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,49,59,705,607,49,607,25]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test758.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)