





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = "Q"
return a*b-c
};
var argument2 = true;
var argument3 = {"A":1.1083542950351378e+308,"":"H","-1":213};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[242] = 3.6960482376003637e+307
return a-b-c
};
var argument5 = ["8pC",460,"&",213];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][7] = {"4":"3hS","":1.6974222352540355e+308,"8.649508731420402e+307":"5pji-Y","1.705571051463849e+307":126,"cV":"","1.6927352400237754e+308":122,"pX#":"","1.6081982235645832e+308":"<qB","%":""}
argument7[1.0500354979187844e+308] = "e:"
argument8['V'] = {"783":"O,T","893":1.307258909591451e+308,"<$y'cvwLCTjc&":"","=":8.463981804291328e+307,"M5":"","":6.498666577931306e+307,"-1":"+6"}
return a/b/c
};
var argument7 = true;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = {"2":"","":1.3154440061631655e+308}
base_3[8][0] = null
argument10[1] = [460,893]
return a+b-c
};
var base_0 = [59,823,969,100,157,-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,823,969,100,157,-1]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,823,969,100,157,-1]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,823,969,100,157,-1]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test794.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)