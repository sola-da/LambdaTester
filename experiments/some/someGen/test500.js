





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = null
base_0[5] = [0,"y"]
return a+b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['^h'] = 823
return a+b/c
};
var argument4 = "";
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = ""
argument7[705] = 1.4658957344462726e+308
argument7['Y'] = {"100":"","":"","l":"","5.095062063728602e+307":""}
return a*b+c
};
var argument7 = {"783":893,"^":6.312052066434119e+307,"1.8807426524531758e+306":213,"1.402749035042552e+308":3.237762892164645e+307,"":5.221655924890218e+307,"3.1601782373829644e+307":4.173145929951183e+306,"2.6811568615938406e+307":"4L*","e":"L"};
var argument8 = 1.4839881478288591e+308;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[618] = 3.5958309847877024e+307
base_3[1][0] = null
base_3[4][7] = [705,213,823,783,122,607,59,100,213,0]
return a+b*c
};
var base_0 = [-100,783]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,783]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,783]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,783]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test500.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)