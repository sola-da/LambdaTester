





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = null
return a/b*c-d
};
var argument2 = false;
var argument3 = null;
var argument4 = "";
var argument5 = r_1;
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = null
argument4[9] = {"122":1.1762091802284625e+308,"213":82,"6.180660732467434e+307":969,"":2.3349024297868855e+307}
argument6[0] = 1.7976931348623157e+308
return a/b-c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[126] = "%micf"
return a+b-c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[627] = ["}X(t{9","sxg8","Z","sk","+","5"]
argument11[25] = false
return a/b-c-d
};
var base_0 = [-100,595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,595]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test734.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)