





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['AA@'] = "dA"
base_0[3][7] = {"5e-324":"LT>","":",9S","1.6909980289917645e+308":""}
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['j'] = true
base_1 = "O"
argument4['AO?'] = true
return a*b/c
};
var argument3 = null;
var argument4 = {"126":705,"627":"6","{JT|w":122,"":"","nf{":"","9.654540223589455e+307":157,"3.461674422584868e+307":843};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = false
return a*b/c
};
var argument6 = false;
var argument7 = {"25":8.162212996258392e+307,"100":"","403":"","714":1.7976931348623157e+308,"783":9.517855947793559e+307,"1.0969309609290941e+308":6.547103467577945e+307,"":25,"8.833083949663643e+307":5.146571207714699e+307,"h":""};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = false
argument10 = {"25":1.7976931348623157e+308,"595":"","-1":8.04607327968845e+307,"1.175503748270685e+308":25,"CA":403,";{":"","2.1600608753494239e+307":"","":0}
base_3[7] = false
return a+b*c
};
var argument9 = r_0;
var argument10 = [-100,783,893,49,618,100,157];
var base_0 = ["r",":","<","MjZ"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["r",":","<","MjZ"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["r",":","<","MjZ"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["r",":","<","MjZ"]
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
require("fs").writeFileSync("./experiments/find/findGen/test727.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)