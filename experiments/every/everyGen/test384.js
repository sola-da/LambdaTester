





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = {"122":"","403":1.0827914315957957e+308,"893":""}
base_0[7] = null
base_0[5] = [-1,-100,0]
return a/b+c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][7] = null
argument4['sJRZP'] = null
base_1[8] = {"":122}
return a/b/c
};
var argument4 = 1.060141444375087e+308;
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = {"0":714,"4":"Yp","59":25,"126":4.036057178206021e+306,"705":"W[1Vc^<WbRB","823":"","`'j":"","":1.3137906822549112e+308,"1.7976931348623157e+308":7.518327467227005e+307}
argument7[3.3156198695370476e+307] = ""
base_2[0][0] = {"OI":1.2287091817753515e+307,"3[":"","1.1364806759453507e+308":893}
return a*b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = [">",714,"f",893,242,82,"&O",25]
base_3[1][4] = null
base_3[9] = "Dj4BS`"
return a-b*c
};
var argument8 = r_2;
var base_0 = ["+","Y",",","x",843,"!","(",893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+","Y",",","x",843,"!","(",893]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+","Y",",","x",843,"!","(",893]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+","Y",",","x",843,"!","(",893]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test384.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)