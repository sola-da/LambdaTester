





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['f'] = {"893":1.4542857980145518e+307,"@":8.756479360282508e+307,"":1.6317040915995005e+308}
return a/b+c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = ""
base_1[3] = {"8":1.1801322547877507e+308,"i":"y-","1.2383832092015792e+308":893}
base_1[4][8] = true
return a+b*c
};
var argument4 = false;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6] = null
argument7[1.6798476101238045e+308] = 618
return a/b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[9.551053197482062e+307] = ""
argument8[1.6798476101238045e+308] = {"893":1.628030346892069e+308,"1.0045749736361583e+308":893,"1.3873200747643855e+308":"","":3.717335603355377e+307,"5.449122358646185e+307":"v","1.2707956928718327e+308":1.696453975407894e+307}
base_3[1][3] = {"zM%3=":"","1.0722955656148012e+308":627,"G":">z","ND5h":823}
return a-b/c
};
var argument8 = {"8.520942397772221e+307":"D"};
var base_0 = [122,"KLAo-?"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"KLAo-?"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"KLAo-?"]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"KLAo-?"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test409.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)