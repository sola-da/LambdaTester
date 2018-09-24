





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = false
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = [627,627,1.7976931348623157e+308,969,627,213,618,655]
base_1[3][1.3434821406183095e+308] = true
return a+b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['U+WQ'] = {"r":"","":969,"1.378935062381979e+307":"","5e-324":"","1.3369578468609993e+308":"","9.371398346326024e+307":969,"7.103995973047636e+307":"FT=`Dn","1.1074563683935594e+308":"s8rI"}
return a+b/c
};
var argument4 = true;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2][783] = 49
argument8[4] = {"":-1,"7.534271963708839e+307":9.895299165635667e+307,"Y6":893}
base_3[4][6] = 25
return a*b/c
};
var argument7 = "";
var base_0 = [157,618,122,242,783,82,705,783,122,59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,618,122,242,783,82,705,783,122,59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,618,122,242,783,82,705,783,122,59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,618,122,242,783,82,705,783,122,59]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test541.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)