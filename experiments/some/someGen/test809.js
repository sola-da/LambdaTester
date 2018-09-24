





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.0727847755854773e+308] = null
argument2 = [893,"x"]
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['j'] = null
base_1[1] = true
return a/b+c
};
var argument3 = {"7":1.705571051463849e+307,"122":"pX#","126":"cV","":"","1.656649540014486e+308":49,"8.93706074488015e+307":8.649508731420402e+307,"5pji-Y":"","KlI":""};
var argument4 = "";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[9.551053197482062e+307] = false
argument6['j'] = ["<qB","q","?Rt","D",":","{","$);","EM5","kV"]
argument7[0] = null
return a+b-c
};
var argument6 = null;
var argument7 = "O,T";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['^h'] = null
argument8 = [122,403,-1,122,157,618,627]
argument9[4] = false
return a-b+c
};
var base_0 = ["0","J","X5q","&"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0","J","X5q","&"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0","J","X5q","&"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["0","J","X5q","&"]
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
require("fs").writeFileSync("./experiments/some/someGen/test809.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)