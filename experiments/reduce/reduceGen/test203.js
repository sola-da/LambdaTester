





var callbackArguments = [];
var argument1 = false;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = 5.442336245818574e+307
return a-b/c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = [49,-1,460,783,-100,49,-100]
argument6[2] = -100
return a+b+c+d
};
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][0] = 893
return a+b-c/d
};
var argument8 = false;
var argument9 = 1.4120876751332175e+308;
var argument10 = null;
var argument11 = "";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = {"59":59,"618":823,"627":1.0937631975801098e+308,"1.1216203481628769e+308":"Zpp","":705,"1.7079910982617327e+308":126,"8.297594623376435e+306":1.7976931348623157e+308}
argument11[0] = [655,242,-100,460,-100,655,969]
return a*b/c+d
};
var base_0 = [82,595,595,213,213,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,595,595,213,213,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,595,595,213,213,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,595,595,213,213,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test203.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)