





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = {"d":""}
base_0[1] = ["K","l",893,25,"x",100,607,"[&Zd"]
base_0[6] = 1.487896251317289e+308
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"":""}
base_1[4] = ","
return a-b/c
};
var argument3 = {"122":783,"705":"","9.50059539051433e+307":"","f!BO":25,"1.3038642360982423e+308":893,"6.962281153698653e+307":"","2.249941463060761e+307":59};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = ";s&yv("
argument5 = {"25":1.5871414587560982e+308,"893":"N","1.0364904167393744e+308":6.458824692350761e+307,"":5.567868593008714e+307,"7.015785779997418e+307":7.994445146835088e+307}
base_2[0] = null
return a*b/c
};
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = true
base_3[7] = {"157":"#FAl","213":7.284753203796583e+307,"242":1.6034337133493601e+308,"460":"","":"I","Y>P":6.735273359514958e+307,"-1":"","5.332073863410647e+307":"","G":"","1.547073342497813e+308":""}
return a/b+c
};
var argument8 = r_3;
var argument9 = {"1.0962782619539227e+308":655,"1.382486429600844e+308":1.3212068666098698e+308,"(i95":"S+p","Apo":9.051335159139241e+307,"K":5.094771876806349e+307};
var base_0 = ["Yj2O-M`qF","|","g<","b"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Yj2O-M`qF","|","g<","b"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Yj2O-M`qF","|","g<","b"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test144.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)