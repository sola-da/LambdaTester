





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = null
base_0[8] = {"":"Ud4","8.351701769530248e+307":"j","1.1816885179370083e+307":1.3958367817365632e+308}
base_0[0] = ["|","z","dE",0,"aT&",655]
return a/b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = null
base_1 = {"":""}
return a*b-c
};
var argument4 = false;
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = {"25":403,"627":1.6706959043468173e+308,"893":5.376678236543719e+307,"":"K","fc":0,"1.744054870377412e+308":"","@=>qa":3.1419796723677005e+307}
return a*b+c
};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.399309004356655e+308] = ""
base_3[1][2] = ""
return a+b-c
};
var argument9 = r_0;
var argument10 = r_1;
var base_0 = [122,"R]`","|",823,"x0W",627,"9","@^@",843]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"R]`","|",823,"x0W",627,"9","@^@",843]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"R]`","|",823,"x0W",627,"9","@^@",843]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"R]`","|",823,"x0W",627,"9","@^@",843]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test131.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)