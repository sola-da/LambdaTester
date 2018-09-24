





var callbackArguments = [];
var argument1 = {"893":"t","3.925743651965189e+307":1.4783858870111142e+308,"T":2.422987253516084e+307,"1.0649197166996984e+308":"","q6":5.27992102485277e+307};
var argument2 = 4.3302132840950857e+307;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = true
argument3 = {"618":9.391349161713958e+307,"2T":""}
return a-b/c-d
};
var argument5 = false;
var argument6 = {"242":1.4776172671192576e+308,"714":"","823":7.392991634291948e+307,"3.868257684955221e+307":1.0355528289714827e+308,"":1.1645998170280794e+308,"b>":"p","3.0481490052276395e+306":100,"1.6454226339697587e+308":"u"};
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = {"^0":1.8116107014377474e+307,"4.991694439636766e+307":1.5797295820828267e+308,"vhy":"n]IK","N":"","J":"5}","":"2qk","Pk":"","1.6812244180288083e+308":"","7.713590589023149e+307":""}
return a+b*c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = null
return a/b+c/d
};
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = null
base_3[8] = ""
base_3[0][9.12287810829114e+307] = ["[kq?","b2rG?a*"]
return a+b*c+d
};
var argument12 = r_2;
var argument13 = true;
var base_0 = [618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test44.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)