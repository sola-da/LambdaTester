





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = 460
argument3['18{'] = [705,59,213,783,0]
return a*b+c-d
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[627] = [783,126,403,"X","z",893,"=",843]
argument6[0] = true
argument5[9.331954948603684e+307] = true
return a-b*c/d
};
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = ""
argument8[59] = 969
argument8[0] = "$^"
return a+b/c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[90] = true
argument8[-1] = false
argument8[4] = null
return a*b*c-d
};
var argument8 = {"25":"S","1.0334336149504356e+307":"0%","1.585339810296699e+308":242,"1.7976931348623157e+308":"P","":1.7976931348623157e+308,"5.479253058108058e+307":":^):"};
var argument9 = {"595":126,"655":4.871859264020296e+307,"783":"5lM","":8.875018540356699e+307,"1.3162094487100093e+308":"hCy","@6G":""};
var base_0 = ["inlWsB","Q",403,"i","gMCkS"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["inlWsB","Q",403,"i","gMCkS"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["inlWsB","Q",403,"i","gMCkS"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["inlWsB","Q",403,"i","gMCkS"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test416.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)