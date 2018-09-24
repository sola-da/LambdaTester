





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][2] = ["0","J","t","Xg","t","F",";Z",";FBv","eBe;|,","M@"]
base_0[5][1] = true
base_0[0][4] = {"705":"","969":"","1.602865581560642e+308":"","":"#*","-j":"","=)":"TI","&":618,"9.995503347162587e+307":"4 {I"}
return a*b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = "U"
argument5[3] = ["c,","{9","w",823,460]
base_1[3][1] = null
return a+b/c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = "="
return a*b+c
};
var argument6 = [893,783];
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[403] = true
argument10[9.551053197482062e+307] = 59
base_3[0][3] = {"403":"2","969":"Y ","{":1.1722285917680686e+308,"-100":"S","B":1.5841960289141438e+308,"gjK:E":9.99694568089542e+307,"Q":1.7976931348623157e+308,"":"6"}
return a/b-c
};
var argument9 = null;
var argument10 = r_3;
var base_0 = ["!O",82,"7"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!O",82,"7"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!O",82,"7"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!O",82,"7"]
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
require("fs").writeFileSync("./experiments/some/someGen/test998.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)