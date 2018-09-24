





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1]['!cck7Mm']['g'] = ["0","J","t","Xg","t","F",";Z",";FBv","eBe;|,","M@"]
argument3[403] = true
argument3[6.798098696036065e+307] = {"705":"","969":"","1.602865581560642e+308":"","":"#*","-j":"","=)":"TI","&":618,"9.995503347162587e+307":"4 {I"}
return a*b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[893] = "U"
argument3 = ["c,","{9","w",823,460]
argument4[6] = null
return a+b/c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = "="
return a*b+c
};
var argument6 = [893,783];
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.7847438319683965e+308] = true
argument10[1.2537850866485212e+307] = 59
base_3[1][0] = {"403":"2","969":"Y ","{":1.1722285917680686e+308,"-100":"S","B":1.5841960289141438e+308,"gjK:E":9.99694568089542e+307,"Q":1.7976931348623157e+308,"":"6"}
return a/b-c
};
var argument9 = null;
var argument10 = r_3;
var base_0 = ["!O",82,"7"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!O",82,"7"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!O",82,"7"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!O",82,"7"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test975.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)