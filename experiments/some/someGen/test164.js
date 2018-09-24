





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = {"627":1.7795013719062384e+307,"6.783094260552965e+306":""}
return a-b*c
};
var argument2 = {"25":-100,"242":"","893":"","e":969,"5L":49,"8.553955652397617e+307":"","":"rH"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = "D4"
argument4 = 49
argument5 = 2.911229564050313e+306
return a*b+c
};
var argument4 = true;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = 1.6457724807718468e+308
return a/b*c
};
var argument7 = {"122":"P2jq","627":"","g":"","":1.3948995194457116e+308,"1.6691501333502618e+308":"","-1":705,"1.5901534578742586e+308":1.352052056972924e+308,"9.347255630351497e+307":""};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a/b+c
};
var argument9 = {"4.706650015455621e+307":1.4695342142586184e+308,"r":5.001143684189464e+307};
var argument10 = true;
var base_0 = [157,-1,-1,49,893,823,714]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,-1,-1,49,893,823,714]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,-1,-1,49,893,823,714]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,-1,-1,49,893,823,714]
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
require("fs").writeFileSync("./experiments/some/someGen/test164.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)