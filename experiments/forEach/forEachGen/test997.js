





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = {"126":"","705":"Mhh","783":5.849755062694495e+307,"4.0951326037990827e+307":783,"":"","XHn":"cPlW&","|":"","Mi":"I"}
argument2[460][1.2658989034477382e+308] = 627
return a-b-c
};
var argument2 = true;
var argument3 = [213,893,823,403,100,460,893,242];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[-1] = null
base_1[0][0] = "z"
argument6[1.7348060980845463e+308] = [1.7976931348623157e+308,157,893,595]
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = 1.1777844075263102e+308
argument7[0] = 1.7335723560265507e+308
argument6['am'] = "%"
return a+b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.7394185942769049e+308] = ["e","o","=Z","Y)","=J1*eQ[","@","v","U","D"]
argument8['ns'] = [595,126,242]
base_3[1] = [157,893,126,460,618,0,595]
return a*b+c
};
var argument8 = null;
var base_0 = [705,59,969,0,714,122,82,157,823,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,59,969,0,714,122,82,157,823,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,59,969,0,714,122,82,157,823,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,59,969,0,714,122,82,157,823,655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test997.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)