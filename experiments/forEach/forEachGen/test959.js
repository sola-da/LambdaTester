





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2][783] = null
argument2[0] = true
base_0[7] = {"242":1.7976931348623157e+308}
return a+b+c
};
var argument2 = {"82":823,"627":5.56138726749887e+307,"-1":1.5971777042445592e+308,"2.462724065532387e+307":"4","2.19279982984711e+306":242,"1.016870678110523e+308":"","":714};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.4570946481947045e+308] = ""
return a/b*c
};
var argument4 = null;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.2421645642809447e+308] = false
return a/b+c
};
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = {"714":"l?Ax","":"r","$":9.080884272002657e+307,"6.988457462177e+306":6.59815033169415e+307}
base_3[0][2] = "t"
argument9['wIs'] = null
return a-b*c
};
var base_0 = [627,100,595,49,-1,49,5e-324,618,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,100,595,49,-1,49,5e-324,618,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,100,595,49,-1,49,5e-324,618,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,100,595,49,-1,49,5e-324,618,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test959.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)