





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = null
argument2[3.3156198695370476e+307] = 618
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = ""
argument3[3.3156198695370476e+307] = {"893":1.628030346892069e+308,"1.0045749736361583e+308":893,"1.3873200747643855e+308":"","":3.717335603355377e+307,"5.449122358646185e+307":"v","1.2707956928718327e+308":1.696453975407894e+307}
base_1[2][7] = {"zM%3=":"","1.0722955656148012e+308":627,"G":">z","ND5h":823}
return a-b/c
};
var argument3 = {"8.520942397772221e+307":"D"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][6] = {"":"}f","R":0}
argument5[3] = false
argument5[5] = true
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = ""
base_3[9] = "9WT4V"
return a+b*c
};
var argument6 = "Un%[2";
var base_0 = [893,"rD","`5S","PrFi",595,"-","J>v","j","4"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"rD","`5S","PrFi",595,"-","J>v","j","4"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"rD","`5S","PrFi",595,"-","J>v","j","4"]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"rD","`5S","PrFi",595,"-","J>v","j","4"]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test412.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)