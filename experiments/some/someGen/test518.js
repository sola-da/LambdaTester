





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"25":3.953453840631241e+307,"242":8.86556574184552e+307,"655":1.2064897870296787e+308,"1.2806858095062053e+308":1.1331068338386267e+308,"j'":"","1.4461548509955593e+308":"","":"","1.4752747962224758e+308":""}
return a+b+c
};
var argument2 = {"9.535597330255997e+305":""};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['5L'] = ""
argument4 = ""
return a/b/c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = [-1,714,122,403,823,1.7976931348623157e+308,82]
return a+b-c
};
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = 8.973227643839851e+306
return a-b/c
};
var argument9 = null;
var argument10 = r_3;
var base_0 = [242,"-","d+I",1.7976931348623157e+308,"5","N-gz",213]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,"-","d+I",1.7976931348623157e+308,"5","N-gz",213]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,"-","d+I",1.7976931348623157e+308,"5","N-gz",213]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,"-","d+I",1.7976931348623157e+308,"5","N-gz",213]
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
require("fs").writeFileSync("./experiments/some/someGen/test518.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)