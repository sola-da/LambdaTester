





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['io'] = 7.424088057162208e+306
argument2['io'] = [607,655,969,157,122,714,-100,618]
base_0[6] = false
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.9097830510613482e+307] = {"59":1.2673559265024395e+308,"823":"","":213,"m":213,"+":"","1.6656245451627858e+308":783,"3.2106773108117505e+307":"2[","S":"iP","&":1.3399318887253108e+308}
return a*b-c
};
var argument3 = "Q#mG8oc";
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = [126,607,607,823,157,595,893]
return a/b+c
};
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = 595
argument7[2] = {"595":3.746655018483962e+307,"a":"","":""}
return a-b*c
};
var argument8 = r_0;
var argument9 = r_3;
var base_0 = [823,714,969,213,893,100,49]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,714,969,213,893,100,49]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,714,969,213,893,100,49]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,714,969,213,893,100,49]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test652.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)