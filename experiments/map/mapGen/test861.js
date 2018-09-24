





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = null
base_0[6][3] = null
argument2 = 25
return a/b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = 100
base_1[1] = null
return a-b/c
};
var argument4 = {"969":"]","1.2056541692961793e+308":122,"1t":8.490886150538898e+307,"9.70990529840371e+307":"e8","":122,"qtq":"t","#69A":"t7","T":157};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = 49
argument6[403] = null
return a-b*c
};
var argument6 = false;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = null
argument9[9.869573703797622e+307] = null
return a/b-c
};
var argument9 = null;
var base_0 = ["QOT","78E(H","6S","CQ<","k","c1","("]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["QOT","78E(H","6S","CQ<","k","c1","("]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["QOT","78E(H","6S","CQ<","k","c1","("]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["QOT","78E(H","6S","CQ<","k","c1","("]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test861.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)