





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[122] = {"627":3.0079506687032333e+307,"'":"","3.3719525220879364e+307":1.1508307093451785e+308,"!]V":82,"":714,"j":"(-i","1.0056694709507536e+308":969,"@":"Wu0?'","-1":""}
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = [82,25,-100,714,82,627,82,126]
return a-b/c
};
var argument3 = true;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = {"126":8.040634769343282e+307,",":"B","5.570897875520249e+307":"","":1.263770788273321e+307}
base_2[0][2] = [157,893,0,-100,0,714,893,126,-1]
argument7[4] = false
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2.4183178393969103e+306] = null
return a*b+c
};
var argument7 = r_0;
var base_0 = [100,618,705,403,655,49,25,242]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,618,705,403,655,49,25,242]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,618,705,403,655,49,25,242]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,618,705,403,655,49,25,242]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test815.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)