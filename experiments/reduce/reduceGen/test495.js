





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[595] = null
argument1[4] = {"59":783,"969":"I","4.693023185392685e+307":1.7976931348623157e+308,"":"fc"}
argument2[7.463432409233234e+307] = {"242":"","7.409321026783806e+307":"#F","":"[ES!M","d":"2;"}
return a/b*c*d
};
var argument2 = {"627":"","655":5.473476919467388e+307,"x-3V":6.468505220719751e+307,"9.484533795057188e+307":"","1.0237407685918637e+308":2.3621360007810896e+307,"":9.727772990737494e+307,"z":3.1056342423287e+307};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = ""
argument4[1] = true
base_1[1][3] = null
return a*b+c*d
};
var argument4 = false;
var argument5 = {"403":"","@|":";","1.4284025393189291e+308":4.752983693101835e+307,"1.1203904865864847e+308":"","":"I"};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.1277822633002616e+308] = {"49":-100,"":"q","7.641202307327545e+307":"","OE":"|","1.0119267804681502e+308":1.7899747346184498e+308,"w@":25,"a !":783,"1.7869121374208826e+308":783}
argument6[1] = {"8":"","M":4.79554136521846e+307,"4.836103548406284e+307":213,"":"W","2.259300698123362e+307":893}
return a/b*c+d
};
var argument8 = r_2;
var argument9 = {"25":"<","100":"","783":"","969":1.1115019433514352e+308,"":"","3.7423863725949837e+307":5.737211343699948e+307,"q":":I{","(":"{$","S)^I:N":"#_`","7.585882019731741e+307":"QS"};
var argument10 = false;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = ["u",595,122,"gG","e",5e-324,655,1.7976931348623157e+308,242]
argument10['*c'] = null
return a-b-c-d
};
var base_0 = [126,122,157,969,242,403,783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,122,157,969,242,403,783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,122,157,969,242,403,783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,122,157,969,242,403,783]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test495.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)