





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = {"100":1.2743434279508294e+308,"242":"","":"","4.1063585818362244e+307":"","4.369091448189436e+307":"","1.604629924344494e+308":"","1.5022133854168917e+308":"5K","{":"","c9":""}
return a+b+c
};
var argument2 = {"627":"Q","3$K0":"","1.8888419016995243e+306":""};
var argument3 = ["p","HA T","s","q%","h","w","lv)^"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.7154103611117224e+307] = -100
argument6[126] = 1.1796314145294601e+308
base_1[1]['!cck7Mm'] = 1.1190952313239356e+308
return a/b*c
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-100] = true
argument9[403] = {"VY":618,"2.972149935118473e+307":"`","":"}pa;j"}
return a/b*c
};
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3.377960715099946e+307] = null
argument10[2] = null
argument10[1.7847438319683965e+308] = [-100,25,"[","i",")6","m",823,"a",783]
return a*b+c
};
var argument10 = r_2;
var base_0 = [783,122,82]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,122,82]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,122,82]
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
require("fs").writeFileSync("./experiments/filter/filterGen/test895.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)