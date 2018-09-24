





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = {"":"","G":"@","2.1009326522071638e+307":1.5255698510340138e+308}
argument2['5L'] = {"0":1.2266140153064066e+308,"49":"I","460":6.837441941629878e+306,"3.5088629132581944e+307":"X","1.0044550649121135e+306":"?e","1.424444417947425e+307":"","":"3k","A":"","1.3213608513821392e+308":1.1373228797381131e+308}
base_0[1] = {}
return a*b*c
};
var argument2 = r_0;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[122] = null
argument5[4.224481734419934e+307] = false
return a+b+c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][7] = 9.598391798239848e+307
return a-b*c
};
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = {"157":403,"":"qN","A":1.5454304950301942e+308,"$R":7.950116927994579e+307,"tjXG":"f`%","5e-324":8.080918180194932e+307}
return a+b/c
};
var argument9 = "";
var argument10 = ["z","^",";;","VS^","&-",":","6v","P","N"];
var base_0 = [627,607,49,82,783,595,49,100]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,607,49,82,783,595,49,100]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,607,49,82,783,595,49,100]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,607,49,82,783,595,49,100]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test465.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)