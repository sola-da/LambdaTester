





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = 1.612782085755368e+308
argument2 = null
return a*b/c*d
};
var argument2 = null;
var argument3 = 4.016529587953836e+307;
var argument4 = 1.7976931348623157e+308;
var argument5 = ["U","n","w",714,714,823,-100];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[90] = null
argument3[1] = 655
argument4[4] = true
return a/b/c/d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[595] = {"213":-100,"8.227592455646471e+306":"A"," ":655,"":"",">n":"6d","iI}":"","1.3676984698420344e+308":1.6432092901911112e+308,"1.207189632229843e+308":"","XDp%v5":5.68365324163041e+307}
argument7[8] = ""
return a-b*c/d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][0] = {"126":"wN<pa","1.2807336848590237e+308":213,"":1.7882507104174404e+308,"D":"47","1.1244700614522482e+308":843}
return a+b*c-d
};
var argument9 = {"49":"#","157":"","893":"D","c":"#","9.774715804646457e+307":"<","2.42265310319301e+307":59};
var argument10 = false;
var base_0 = [242,403,213,969,823,49,59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,403,213,969,823,49,59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,403,213,969,823,49,59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,403,213,969,823,49,59]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test301.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)