





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[25] = [655,783,607,783,126]
return a-b/c*d
};
var argument5 = {"59":"","82":7.201908272966531e+307,"893":",{","LR4":"|","&":6.449161786686957e+307,"":"","1.7771182667087775e+308":5.461696973808046e+307,">":","};
var argument6 = "";
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2.1869172855352885e+307] = null
argument7[2] = null
return a/b/c/d
};
var argument9 = 1.5214855153227115e+308;
var argument10 = [705];
var argument11 = r_2;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[25] = {"893":1.1300375153881787e+308,"1.1651437569922269e+308":8.062368851212754e+307,"0Y":"y","1.3925965250534969e+308":6.527882526183834e+307}
argument11[7.889879335222838e+307] = true
return a-b-c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[2.1280896016417002e+307] = null
argument13[3] = null
base_3[5] = false
return a*b/c/d
};
var argument14 = {"618":1.178709218409804e+308,"au*":2.583502426344602e+307,"x]":1.1499815384331825e+308,"1.757489501781841e+308":6.002329408788289e+307,"-1":1.3046940270128506e+308};
var argument15 = "3";
var base_0 = [1.7976931348623157e+308,-1,595,969,49,25,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,-1,595,969,49,25,460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,-1,595,969,49,25,460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,-1,595,969,49,25,460]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test619.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)