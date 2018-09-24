





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = {"6":0,"705":4.4901730719304224e+307,"":6.416284580353275e+307,"-100":59,"V":403,"1.5822670313326497e+308":"","5.27190265530521e+307":1.1300201946896594e+308}
argument2[157] = ""
return a-b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[705] = false
return a*b*c
};
var argument4 = "q";
var argument5 = {"403":1.545499818989827e+308,"627":"N","843":607,"893":122,"1.1263332910886178e+308":1.2975605381860708e+308,"":1.7976931348623157e+308,"6.752001666510189e+307":403,"-1":403,"p] ":6.090480675172689e+306};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = null
return a/b*c
};
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = {"K":783,"1.4710639731813164e+308":"]4!?,","pF":460}
return a/b/c
};
var argument10 = false;
var base_0 = [59,460,82,126,0,705,-100]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,460,82,126,0,705,-100]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,460,82,126,0,705,-100]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,460,82,126,0,705,-100]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test360.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)