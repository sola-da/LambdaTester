





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][9.12287810829114e+307] = {"893":1.6688213324291888e+308,"1.6358288991393835e+308":"","":"","8.93706074488015e+307":8.649508731420402e+307}
base_0[7] = null
base_0[0] = null
return a+b*c+d
};
var argument2 = 1.853880581134147e+307;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.3938918493123786e+308] = null
return a-b/c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.3938918493123786e+308] = null
return a*b+c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['s'] = 403
base_3[7] = {"4":"3hS","-100":59,"":655,"1.6081982235645832e+308":"<qB"}
argument6[4] = {"3.2638879573604814e+307":"Rt","e:":"","-100":"$y'cvwLCTjc&","":"","8.463981804291328e+307":"M5","6.498666577931306e+307":783,"O,T":-1,"+6":893,"1.307258909591451e+308":"(^"}
return a/b/c*d
};
var argument6 = "";
var base_0 = [969,82,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,82,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,82,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,82,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test681.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)