





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3.5329845145600404e+307] = null
argument3[705] = {"5.200804772837428e+307":1.0351385946704303e+308}
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = ":J=z"
return a+b/c
};
var argument3 = "+|Ht^[T";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.268696794505825e+308] = true
argument5[1.7121211182125595e+308] = {"655":"I"}
argument5['C'] = "$NB^"
return a*b+c
};
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][7] = ""
argument7[714] = {"3.6503648403278306e+307":"","4.842067363399663e+306":1.635428765765545e+308,"":460,"Rsi":"","1.1479695102964615e+308":"=","4.997377670044043e+307":1.4234832538044328e+308,"S4I":"","(":1.6917852123888831e+308}
return a*b+c
};
var argument7 = r_0;
var base_0 = ["Yv","bkx","*?l","j",":","F","!A*","2","9","N"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Yv","bkx","*?l","j",":","F","!A*","2","9","N"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Yv","bkx","*?l","j",":","F","!A*","2","9","N"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test922.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)