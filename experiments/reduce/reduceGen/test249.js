





var callbackArguments = [];
var argument1 = {"627":1.7976931348623157e+308,"-1":0,"":"!0","1.4877951428424656e+308":"nfjI4$","[<":100,"h_":823};
var argument2 = null;
var argument3 = {"-100":1.66274190527899e+308,"9.1199215477536e+307":242};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = null
return a*b+c/d
};
var argument5 = true;
var argument6 = r_0;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7.463432409233234e+307] = 6.002117022508325e+307
return a*b*c-d
};
var argument9 = r_0;
var argument10 = null;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[6.35085648319999e+307] = true
return a/b-c+d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15['*c'] = null
return a/b-c-d
};
var argument14 = null;
var base_0 = [403,126,618,607,25,25,783,157,607,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,126,618,607,25,25,783,157,607,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,126,618,607,25,25,783,157,607,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,126,618,607,25,25,783,157,607,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test249.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)