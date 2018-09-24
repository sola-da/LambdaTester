





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][5e-324] = "f!BO"
argument2[-1] = null
return a*b*c
};
var argument2 = true;
var argument3 = ["jzr","K","8","n","Kq","4;s&yv(","ea2|"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5.262931091360336e+307] = {"213":1.7976931348623157e+308,"1.2695763409666282e+308":"","":""}
argument5[2] = null
base_1['filter'] = {"49":1.545788079285053e+308,"157":"#FAl","460":"","":3.289307266532534e+307,"3.373470740294409e+307":"","Y>P":6.735273359514958e+307,"-1":""}
return a-b+c
};
var argument5 = true;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.377960715099946e+307] = {"893":9.00812050191218e+307,"uo":3.4940298695075377e+307,"8.690102834923551e+307":1.3893267740547613e+308,"":"Q"}
base_2[4][2] = {"655":1.382486429600844e+308,"1.3212068666098698e+308":"(i95","S+p":"Apo","9.051335159139241e+307":"K","5.094771876806349e+307":157,"G":-1}
return a/b+c
};
var argument8 = "j";
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = 1.6968469311430493e+307
base_3[1]['!cck7Mm'] = true
return a*b/c
};
var argument10 = r_3;
var base_0 = [0,"M",823,82,100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,"M",823,82,100]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test137.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)