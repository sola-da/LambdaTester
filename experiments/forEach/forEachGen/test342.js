





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = 1.4215804954883054e+308
base_0[1] = 3.1497750656612036e+307
return a/b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = ""
base_1 = {"122":">U","242":2.5975809421491024e+307,"627":122,"6.190744605322701e+307":607,"":1.7976931348623157e+308,"qx":"k","V":-100,"%":"","7.10734775365775e+307":"z^n"}
return a*b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][4] = ["i",-1,783,82,-1]
argument6[2] = null
argument4[7.92397107964922e+307] = true
return a+b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = null
argument5['1SHF1'] = [82,893]
argument5[7.92397107964922e+307] = {"403":1.5738684407104424e+307,"783":1.2335283177592043e+308,"1.8275140750069097e+307":7.040590799693647e+307,"2.2163904076205456e+307":"*c","[=Ya":8.861070401292571e+307}
return a+b-c
};
var argument6 = r_3;
var argument7 = [607,843,"eU3",49,618,"u=d","_"];
var base_0 = ["Z]C","_"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Z]C","_"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Z]C","_"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Z]C","_"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test342.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)