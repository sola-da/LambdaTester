





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = {"8":2.686369876418535e+307,"595":"W","783":"","#":"i","":595,"9.178318514311696e+307":1.3305599321998964e+308,"1.6118041767553924e+308":"Yh7I1#","P":"","1.444430541060944e+308":"6sW_","Qt(":1.4313870189160007e+308}
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7] = {"122":"","b":100,"":"","8ZFN":"","kH5v":"7=_"}
argument3[705] = true
return a*b*c
};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = {"783":"",",":"%","":5.79804854034929e+306,"u":"","5.765419128129493e+307":5e-324,"1.6311620656304547e+308":1.3862604775618758e+308}
base_2[9] = {"126":1.7976931348623157e+308,"595":"","":"","3.4537946368561336e+307":6.873741452083066e+307,"7.112896713610577e+307":3.9217969160542723e+307,"5.123960626520218e+307":4.3021951276374907e+307,"1.4218958654579952e+308":2.2008952105640074e+307}
base_2[4][8] = null
return a*b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = ""
argument7[2] = ""
return a/b+c
};
var argument6 = {"25":618,"823":"'g3","893":"k","nj":"IG"};
var base_0 = [" F 2","!","0=gNm"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [" F 2","!","0=gNm"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [" F 2","!","0=gNm"]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [" F 2","!","0=gNm"]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test329.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)