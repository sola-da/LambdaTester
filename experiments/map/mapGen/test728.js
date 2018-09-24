





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = {"122":1.7976931348623157e+308,",":126,"+F":"s","":6.350847897633278e+307,"1.2825530849524448e+308":705,"5.628578435050268e+307":"h]","5.667366834357572e+307":""}
base_0[6] = "@"
argument3['3Tpj5'] = null
return a/b+c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1] = false
argument6[714] = 6.447872559518298e+307
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.208837311680636e+307] = "T4k9MA"
argument7[618] = ""
argument6[1]['d'] = 59
return a-b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = ""
argument7[3] = [1.7976931348623157e+308,25,0,460,705,213]
return a-b+c
};
var argument7 = "90K";
var base_0 = ["a5!","&NXI",";","Yl","b7","^w","1"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["a5!","&NXI",";","Yl","b7","^w","1"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["a5!","&NXI",";","Yl","b7","^w","1"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["a5!","&NXI",";","Yl","b7","^w","1"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test728.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)