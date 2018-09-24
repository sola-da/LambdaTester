





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[893] = "!`"
argument3[403] = null
return a-b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1]['{X'] = false
base_1 = ["7","H","Cy","yZ","(sCc","V","pR"]
base_1[9] = 126
return a/b-c
};
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = 1.3527475404728839e+308
argument7[1.0727847755854773e+308] = null
argument6[2] = ["o","td"]
return a*b+c
};
var argument6 = r_2;
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2.249941463060761e+307] = false
argument9['f'] = 9.912281748392567e+307
argument9['5L'] = {"783":"?Um+","1.2141193218636959e+307":5.074445219794249e+307,"1.6496452698489395e+308":"","eiZX(_T^":969,"":213,"Pk":3.5512277209310213e+307,"t":"","8.881959842233924e+307":969}
return a/b/c
};
var base_0 = ["e","^;J7",82,126,"86","[A","e","e"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e","^;J7",82,126,"86","[A","e","e"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e","^;J7",82,126,"86","[A","e","e"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e","^;J7",82,126,"86","[A","e","e"]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test574.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)