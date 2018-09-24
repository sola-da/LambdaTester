





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1679954109349114e+308] = 607
argument1[3.377960715099946e+307] = 5.18504641092272e+307
return a+b+c
};
var argument2 = {"8":9.856846427657008e+307,"QjW":126};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.0481490052276395e+306] = {"25":843,"595":-100,"969":"","8.87662732879263e+307":"0j_3Nvx)","":"","&[{":843,"6.926289308130139e+307":618,"-1":"ot","1.6044158552117795e+308":49}
base_1[4][7] = [460,823,-100,122,893]
base_1[4] = null
return a*b*c
};
var argument5 = "[4";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][1] = ""
return a-b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = {"0":49,"82":607,"242":969,"893":"",">":"|","H":5.985567583202208e+307,"I":"+","<x":126}
base_3[4] = true
base_3[9] = false
return a/b*c
};
var argument8 = r_0;
var base_0 = ["F","^L","G","Z<","nY","E<!G"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["F","^L","G","Z<","nY","E<!G"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test128.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)