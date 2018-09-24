





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = 6.611330716356763e+307
base_0[3] = true
argument3[595] = false
return a*b/c*d
};
var argument2 = [627,627,403,893,-1,893,1.7976931348623157e+308];
var argument3 = 9.393525313563656e+307;
var argument4 = "7";
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7.463432409233234e+307] = 5.164409392186633e+307
return a-b+c*d
};
var argument7 = 595;
var argument8 = null;
var argument9 = 1.78809443238695e+308;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = {"213":595,"2.5922637242160475e+307":893,"4.3832776230425187e+307":1.1577296445381894e+308,"":"5z","|":"","mx":3.258331675508218e+307,"1.234779046794565e+308":627,"j":607}
return a*b*c/d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[7.889879335222838e+307] = null
base_3[1][0] = null
base_3[0] = ["V","&B;","r"]
return a*b*c-d
};
var argument12 = null;
var base_0 = ["3s_","p","v+"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3s_","p","v+"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3s_","p","v+"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3s_","p","v+"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test684.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)