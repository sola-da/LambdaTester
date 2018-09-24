





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = {"2.0133222606420238e+307":2.111684696768346e+307,"":"U","(+":655,"9.554133501509057e+307":4.579007729155634e+307,"t":242,"1.070022665615652e+308":"","1.3981951281257243e+308":1.0584366350101787e+308,"1.005030826078629e+306":242,"z":""}
return a/b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = {"122":"ev<[2CoSQ","":"","5S":"W&","1.229894863719738e+308":"q*","9.867969881228059e+307":714,"J":"","3o":""}
argument4[5] = 460
return a-b/c
};
var argument4 = false;
var argument5 = "`";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['-'] = 213
return a+b*c
};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = ""
return a+b+c
};
var base_0 = [607,607,618,714,242,969,157,403,843,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,607,618,714,242,969,157,403,843,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,607,618,714,242,969,157,403,843,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,607,618,714,242,969,157,403,843,618]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test507.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)