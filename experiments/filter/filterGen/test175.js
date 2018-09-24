





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.7847438319683965e+308] = null
argument3[1] = ["i",618]
argument2[3.0481490052276395e+306] = 1.0302428570304664e+308
return a+b*c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1]['!cck7Mm'] = {"9":"ot","49":"i&","126":1.4111740077487875e+308,"7.042953165065172e+307":"","":"&X"}
argument4[1.1679954109349114e+308] = true
return a/b*c
};
var argument4 = null;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = "w"
base_2[6] = [242,0,"a[`d",823,"8{","j"]
return a-b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][1] = false
argument8[6] = null
argument9[3] = {"":82,"9.54191680661319e+307":1.4894335659891693e+308,"5e-324":595,"{":1.0597151119087302e+308,"1.1520452862680246e+308":823,"5.643757891647357e+307":""}
return a/b+c
};
var argument8 = null;
var argument9 = true;
var base_0 = ["N","h","d","5","iRG,o"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N","h","d","5","iRG,o"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N","h","d","5","iRG,o"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N","h","d","5","iRG,o"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test175.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)