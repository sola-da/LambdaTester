





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = 823
base_0 = [100,823,783,595,705,25,893]
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5][0] = ""
base_1[4] = ","
return a/b+c
};
var argument3 = {"122":783,"705":"","9.50059539051433e+307":"","f!BO":25,"1.3038642360982423e+308":893,"6.962281153698653e+307":"","2.249941463060761e+307":59};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = ";s&yv("
argument6[9] = {"25":1.5871414587560982e+308,"893":"N","1.0364904167393744e+308":6.458824692350761e+307,"":5.567868593008714e+307,"7.015785779997418e+307":7.994445146835088e+307}
base_2[5] = null
return a*b/c
};
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.6798476101238045e+308] = true
argument8 = {"157":"#FAl","213":7.284753203796583e+307,"242":1.6034337133493601e+308,"460":"","":"I","Y>P":6.735273359514958e+307,"-1":"","5.332073863410647e+307":"","G":"","1.547073342497813e+308":""}
return a/b+c
};
var argument8 = r_1;
var argument9 = {"1.0962782619539227e+308":655,"1.382486429600844e+308":1.3212068666098698e+308,"(i95":"S+p","Apo":9.051335159139241e+307,"K":5.094771876806349e+307};
var base_0 = [126,59,"va","K","l",893,25,"x"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,59,"va","K","l",893,25,"x"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,59,"va","K","l",893,25,"x"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,59,"va","K","l",893,25,"x"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test139.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)