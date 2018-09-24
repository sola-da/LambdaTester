





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"25":"","242":"M2","823":714,"893":"","969":9.688892450289208e+307,"7.333747130114187e+307":2.6079368937209814e+307,"x":627,"K":1.7605272591980743e+308}
base_0[9] = "yS7"
base_0[8] = {"7":"","100":"5","655":627,"714":"","2.4109858761869366e+307":823,"j":"","6.300850316419962e+307":"}f","":7.544666785682189e+307,"1.2512158172645717e+308":705}
return a/b-c
};
var argument2 = "Na";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = ""
argument5 = "8z`"
base_1[4] = null
return a*b+c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = {"X":0,"":""}
argument7[157] = {"49":8.366544453825572e+307,"242":"","403":"",">":"","1.6002716796036885e+308":"T9k{w","":"","x":"","1.7976931348623157e+308":460,"-100":5.879990587108157e+307}
base_2[3] = null
return a/b/c
};
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = true
return a+b+c
};
var argument9 = r_0;
var base_0 = [0]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test447.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)